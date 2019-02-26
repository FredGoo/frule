//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.bstek.urule.model.rete.builder;

import com.bstek.urule.Utils;
import com.bstek.urule.exception.RuleException;
import com.bstek.urule.model.Node;
import com.bstek.urule.model.library.ResourceLibrary;
import com.bstek.urule.model.rete.BaseReteNode;
import com.bstek.urule.model.rete.CriteriaNode;
import com.bstek.urule.model.rete.JunctionNode;
import com.bstek.urule.model.rete.Line;
import com.bstek.urule.model.rete.ObjectTypeNode;
import com.bstek.urule.model.rete.Rete;
import com.bstek.urule.model.rete.ReteUnit;
import com.bstek.urule.model.rete.TerminalNode;
import com.bstek.urule.model.rule.Other;
import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.model.rule.lhs.BaseCriterion;
import com.bstek.urule.model.rule.lhs.Criterion;
import com.bstek.urule.model.rule.lhs.Lhs;
import com.bstek.urule.model.rule.loop.LoopRule;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * @author fred
 */
public class ReteBuilder implements ApplicationContextAware {
    public static final String BEAN_ID = "urule.reteBuilder";
    private static Collection<CriterionBuilder> criterionBuilders;

    public ReteBuilder() {
    }

    public Rete buildRete(List<Rule> rules, ResourceLibrary resourceLibrary) {
        List<ObjectTypeNode> objectTypeNodes = new ArrayList<>();
        Rete rete = new Rete(objectTypeNodes, resourceLibrary);
        BuildContext context = new BuildContextImpl(resourceLibrary, objectTypeNodes);
        Map<String, List<Rule>> activationRulesMap = new HashMap<>();
        Map<String, List<Rule>> agendaRulesMap = new HashMap<>();
        Iterator ruleIterator = rules.iterator();

        while (ruleIterator.hasNext()) {
            Rule rule = (Rule) ruleIterator.next();
            if (!this.isPass(rule)) {
                Object agendaRules;
                if (StringUtils.isNotBlank(rule.getActivationGroup())) {
                    agendaRules = activationRulesMap.get(rule.getActivationGroup());
                    if (agendaRules == null) {
                        ArrayList<Rule> ruleArrayList = new ArrayList<>();
                        ruleArrayList.add(rule);
                        activationRulesMap.put(rule.getActivationGroup(), ruleArrayList);
                    } else {
                        ((List) agendaRules).add(rule);
                    }
                } else if (StringUtils.isNotBlank(rule.getAgendaGroup())) {
                    agendaRules = agendaRulesMap.get(rule.getAgendaGroup());
                    if (agendaRules == null) {
                        ArrayList<Rule> ruleArrayList = new ArrayList<>();
                        agendaRulesMap.put(rule.getAgendaGroup(), ruleArrayList);
                    } else {
                        ((List) agendaRules).add(rule);
                    }
                } else {
                    TerminalNode terminalNode = new TerminalNode(rule, context.nextId());
                    this.buildBranch(rule, context, terminalNode);
                    rule.setLhs(null);
                }
            }
        }

        rete.setActivationGroupRetesMap(this.buildRetesMap(activationRulesMap, context));
        rete.setAgendaGroupRetesMap(this.buildRetesMap(agendaRulesMap, context));
        return rete;
    }

    private boolean isPass(Rule rule) {
        if (rule.getEnabled() != null && !rule.getEnabled()) {
            return true;
        } else {
            Date expiresDate = rule.getExpiresDate();
            if (expiresDate != null) {
                Date now = new Date();
                if (expiresDate.getTime() <= now.getTime()) {
                    return true;
                }
            }

            return false;
        }
    }

    private Map<String, List<ReteUnit>> buildRetesMap(Map<String, List<Rule>> activationRulesMap, BuildContext parentContext) {
        if (activationRulesMap.size() == 0) {
            return null;
        } else {
            ResourceLibrary resourceLibrary = (parentContext).getResourceLibrary();
            Map<String, List<ReteUnit>> reteMap = new HashMap();
            Iterator var5 = activationRulesMap.keySet().iterator();

            while (var5.hasNext()) {
                String groupName = (String) var5.next();
                List<Rule> rules = activationRulesMap.get(groupName);
                Collections.sort(rules, new Comparator<Rule>() {
                    public int compare(Rule r1, Rule r2) {
                        Integer o1 = r1.getSalience();
                        Integer o2 = r2.getSalience();
                        if (o1 != null && o2 != null) {
                            return o2 - o1;
                        } else if (o2 != null) {
                            return -1;
                        } else {
                            return o1 != null ? 1 : 0;
                        }
                    }
                });
                Iterator var8 = rules.iterator();

                while (var8.hasNext()) {
                    Rule rule = (Rule) var8.next();
                    List<ReteUnit> retes = reteMap.get(groupName);
                    if (retes == null) {
                        retes = new ArrayList<>();
                        reteMap.put(groupName, retes);
                    }

                    List<ObjectTypeNode> objectTypeNodes = new ArrayList<>();
                    BuildContext context = new BuildContextImpl(objectTypeNodes, parentContext);
                    TerminalNode terminalNode = new TerminalNode(rule, context.nextId());
                    Rete rete = new Rete(objectTypeNodes, resourceLibrary);
                    this.buildBranch(rule, context, terminalNode);
                    ReteUnit reteUnit = new ReteUnit(rete, rule.getName());
                    reteUnit.setEffectiveDate(rule.getEffectiveDate());
                    reteUnit.setExpiresDate(rule.getExpiresDate());
                    retes.add(reteUnit);
                    parentContext = context;
                    rule.setLhs(null);
                }
            }

            return reteMap;
        }
    }

    private void buildBranch(Rule rule, BuildContext context, TerminalNode terminalNode) {
        context.setCurrentRule(rule);
        Lhs lhs = rule.getLhs();
        if (!(rule instanceof LoopRule) && lhs != null && lhs.getCriterion() != null) {
            Criterion criterion = lhs.getCriterion();
            List<BaseReteNode> prevNodes = buildCriterion(context, criterion);

            Object prevNode;
            for (Iterator var7 = prevNodes.iterator(); var7.hasNext(); ((BaseReteNode) prevNode).addLine(terminalNode)) {
                prevNode = var7.next();
                if (prevNode instanceof JunctionNode) {
                    JunctionNode junctionNode = (JunctionNode) prevNode;
                    List<Line> toConnections = junctionNode.getToConnections();
                    if (toConnections.size() == 1) {
                        Line conn = toConnections.get(0);
                        Node fromNode = conn.getFrom();
                        if (fromNode instanceof CriteriaNode) {
                            CriteriaNode cnode = (CriteriaNode) fromNode;
                            cnode.getLines().remove(conn);
                            prevNode = cnode;
                        }
                    }
                }
            }

            Other other = rule.getOther();
            if (other != null && other.getActions() != null && other.getActions().size() > 0) {
                rule.setWithElse(true);
                Utils.buildElseRule(rule);
                ObjectTypeNode typeNode = context.buildObjectTypeNode("__*__");
                typeNode.addLine(terminalNode);
            }
        } else {
            ObjectTypeNode typeNode = context.buildObjectTypeNode("__*__");
            typeNode.addLine(terminalNode);
        }

    }

    public static List<BaseReteNode> buildCriterion(BuildContext context, Criterion criterion) {
        Iterator var2 = criterionBuilders.iterator();

        CriterionBuilder criterionBuilder;
        do {
            if (!var2.hasNext()) {
                throw new RuleException("Unknow criterion : " + criterion);
            }

            criterionBuilder = (CriterionBuilder) var2.next();
        } while (!criterionBuilder.support(criterion));

        return criterionBuilder.buildCriterion((BaseCriterion) criterion, context);
    }

    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        criterionBuilders = applicationContext.getBeansOfType(CriterionBuilder.class).values();
    }
}
