//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.bstek.urule.model.flow;

import com.bstek.urule.action.Action;
import com.bstek.urule.action.VariableAssignAction;
import com.bstek.urule.model.flow.ins.FlowContext;
import com.bstek.urule.model.flow.ins.FlowInstance;
import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.model.rule.Library;
import com.bstek.urule.model.rule.LibraryType;
import com.bstek.urule.model.rule.Rhs;
import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.model.rule.RuleSet;
import com.bstek.urule.model.rule.SimpleValue;
import com.bstek.urule.model.rule.lhs.LeftType;
import com.bstek.urule.runtime.KnowledgeSession;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

public class DecisionNode extends BindingNode {
    private final Logger log = Logger.getLogger(DecisionNode.class.getName());
    private List<DecisionItem> items;
    private FlowNodeType type;
    private DecisionType decisionType;

    public DecisionNode() {
        this.type = FlowNodeType.Decision;
        this.decisionType = DecisionType.Criteria;
    }

    public DecisionNode(String name) {
        super(name);
        this.type = FlowNodeType.Decision;
        this.decisionType = DecisionType.Criteria;
    }

    public void enterNode(FlowContext context, FlowInstance instance) {
        instance.setCurrentNode(this);
        if (this.decisionType.equals(DecisionType.Criteria)) {
            this.doCriteria(context, instance);
        } else {
            this.doPercent(context, instance);
        }

        this.executeNodeEvent(EventType.enter, context, instance);
    }

    private void doPercent(FlowContext context, FlowInstance instance) {
        String nodeKey = instance.getProcessDefinition().getId() + "_" + this.getName();
        long total = this.getAmount(nodeKey, context) + 1L;
        List<PercentItem> percentItems = new ArrayList();
        Iterator var7 = this.items.iterator();

        while(var7.hasNext()) {
            DecisionItem item = (DecisionItem)var7.next();
            PercentItem percent = new PercentItem();
            percent.setName(item.getTo());
            percent.setPercent((long)item.getPercent());
            String itemKey = nodeKey + "." + item.getTo();
            long itemTotal = this.getAmount(itemKey, context);
            percent.setTotal(itemTotal);
            percentItems.add(percent);
        }

        PercentItem percentItem = this.computePercent(percentItems, total);
        this.setAmount(nodeKey, total, context);
        this.setAmount(nodeKey + "." + percentItem.getName(), percentItem.getTotal() + 1L, context);
        this.executeNodeEvent(EventType.leave, context, instance);
        this.leave(percentItem.getName(), context, instance);
    }

    private long getAmount(String key, FlowContext context) {
        Object value = context.getWorkingMemory().getSessionValue(key);
        return value == null ? 0L : (Long)value;
    }

    private void setAmount(String key, long value, FlowContext context) {
        context.getWorkingMemory().setSessionValue(key, value);
    }

    private void doCriteria(FlowContext context, FlowInstance instance) {
        KnowledgeSession session = this.executeKnowledgePackage(context, instance);
        this.executeNodeEvent(EventType.leave, context, instance);
        Object to = session.getParameter("return_to__");
        if (to == null) {
            this.log.info("Decision node [" + this.getName() + "] no matching conditions.");
        } else {
            session.getParameters().remove("return_to__");
            this.leave(to.toString(), context, instance);
        }
    }

    private PercentItem computePercent(List<PercentItem> items, long total) {
        BigDecimal totalValue = new BigDecimal(total);
        Iterator var5 = items.iterator();

        PercentItem item;
        int result;
        do {
            if (!var5.hasNext()) {
                return (PercentItem)items.get(0);
            }

            item = (PercentItem)var5.next();
            long itemTotal = item.getTotal();
            BigDecimal left = new BigDecimal(itemTotal);
            BigDecimal newPercent = left.divide(totalValue, 20, 6);
            BigDecimal defaultPercent = new BigDecimal(item.getPercent());
            defaultPercent = defaultPercent.divide(new BigDecimal(100), 2, 6);
            result = newPercent.compareTo(defaultPercent);
        } while(result != -1);

        return item;
    }

    public FlowNodeType getType() {
        return this.type;
    }

    public List<DecisionItem> getItems() {
        return this.items;
    }

    public void setItems(List<DecisionItem> items) {
        this.items = items;
    }

    public RuleSet buildRuleSet(List<Library> libraries, boolean debug, String flowId) {
        RuleSet rs = new RuleSet();
        rs.setLibraries(libraries);
        List<Rule> rules = new ArrayList();
        rs.setRules(rules);
        int i = 0;
        Iterator var7 = this.items.iterator();

        while(var7.hasNext()) {
            DecisionItem item = (DecisionItem)var7.next();
            ++i;
            if (item.getConditionType() != null && !item.getConditionType().equals("script")) {
                Rule rule = new Rule();
                rules.add(rule);
                rule.setLhs(item.getLhs());
                rule.setDebug(debug);
                rule.setName(flowId + "-" + this.getName() + "-decision" + i);
                Rhs rhs = new Rhs();
                rule.setRhs(rhs);
                List<Action> actions = new ArrayList();
                rhs.setActions(actions);
                VariableAssignAction action = new VariableAssignAction();
                actions.add(action);
                action.setDatatype(Datatype.String);
                action.setDebug(debug);
                action.setVariableCategory("parameter");
                action.setVariableLabel("return_to__");
                action.setVariableName("return_to__");
                action.setType(LeftType.variable);
                SimpleValue value = new SimpleValue();
                value.setContent(item.getTo());
                action.setValue(value);
            }
        }

        return rs;
    }

    public String buildDSLScript(List<Library> libraries, boolean debug, String flowId) {
        StringBuffer sb = new StringBuffer();
        if (libraries != null) {
            Iterator var5 = libraries.iterator();

            while(var5.hasNext()) {
                Library lib = (Library)var5.next();
                String path = lib.getPath();
                if (lib.getVersion() != null) {
                    path = path + ":" + lib.getVersion();
                }

                LibraryType type = lib.getType();
                switch(type) {
                    case Action:
                        sb.append("importActionLibrary \"" + path + "\"");
                        sb.append("\r\n");
                        break;
                    case Constant:
                        sb.append("importConstantLibrary \"" + path + "\"");
                        sb.append("\r\n");
                        break;
                    case Parameter:
                        sb.append("importParameterLibrary \"" + path + "\"");
                        sb.append("\r\n");
                        break;
                    case Variable:
                        sb.append("importVariableLibrary \"" + path + "\"");
                        sb.append("\r\n");
                }
            }
        }

        boolean exist = false;

        for(int i = 0; i < this.items.size(); ++i) {
            DecisionItem item = (DecisionItem)this.items.get(i);
            if (item.getConditionType() == null || !item.getConditionType().equals("config")) {
                exist = true;
                sb.append(item.buildDSLScript(i, debug, flowId, this.getName()));
                sb.append("\r\n");
            }
        }

        if (exist) {
            return sb.toString();
        } else {
            return null;
        }
    }

    public DecisionType getDecisionType() {
        return this.decisionType;
    }

    public void setDecisionType(DecisionType decisionType) {
        this.decisionType = decisionType;
    }
}
