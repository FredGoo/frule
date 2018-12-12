//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.bstek.urule.model.rete.builder;

import com.bstek.urule.model.Node;
import com.bstek.urule.model.rete.BaseReteNode;
import com.bstek.urule.model.rete.ConditionNode;
import com.bstek.urule.model.rete.CriteriaNode;
import com.bstek.urule.model.rete.ObjectTypeNode;
import com.bstek.urule.model.rete.ReteNode;
import com.bstek.urule.model.rule.lhs.BaseCriteria;
import com.bstek.urule.model.rule.lhs.BaseCriterion;
import com.bstek.urule.model.rule.lhs.Criteria;
import com.bstek.urule.model.rule.lhs.Criterion;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

public abstract class CriterionBuilder {
    public CriterionBuilder() {
    }

    public abstract List<BaseReteNode> buildCriterion(BaseCriterion var1, BuildContext var2);

    public abstract boolean support(Criterion var1);

    protected List<BaseReteNode> buildCriteria(Criteria criteria, List<ConditionNode> prevNodes, BuildContext context) {
        List<BaseReteNode> result = new ArrayList();
        List<String> objectTypes = context.getObjectType(criteria);
        if (prevNodes != null && prevNodes.size() > 0) {
            Iterator var12 = prevNodes.iterator();

            while (var12.hasNext()) {
                ConditionNode prevNode = (ConditionNode) var12.next();
                boolean match = true;
                List<String> prevObjectTypes = context.getObjectType(prevNode.getCriteria());
                Iterator targetNode;
                if (prevObjectTypes.size() == objectTypes.size()) {
                    targetNode = prevObjectTypes.iterator();

                    while (targetNode.hasNext()) {
                        String prevType = (String) targetNode.next();
                        if (!objectTypes.contains(prevType)) {
                            match = false;
                            break;
                        }
                    }
                } else {
                    match = false;
                }

                targetNode = null;
                CriteriaNode criteriaNode;
                if (match) {
                    List<ReteNode> prevChildrenNodes = prevNode.getChildrenNodes();
                    criteriaNode = this.fetchSameCriteriaNode(criteria, prevChildrenNodes);
                    if (criteriaNode == null) {
                        criteriaNode = new CriteriaNode(criteria, context.nextId(), context.currentRuleIsDebug());
                        prevNode.addLine(criteriaNode);
                    }

                    result.add(criteriaNode);
                } else {
                    criteriaNode = this.buildCriteriaNode(criteria, context, objectTypes);
                    result.add(criteriaNode);
                }
            }
        } else {
            CriteriaNode criteriaNode = this.buildCriteriaNode(criteria, context, objectTypes);
            result.add(criteriaNode);
        }

        return result;
    }

    private CriteriaNode buildCriteriaNode(BaseCriteria criteria, BuildContext context, List<String> objectTypes) {
        CriteriaNode targetNode = null;
        ObjectTypeNode targetObjectTypeNode = null;
        Iterator var6 = objectTypes.iterator();

        String objectType;
        while (var6.hasNext()) {
            objectType = (String) var6.next();
            if (objectType.equals("*")) {
                objectType = HashMap.class.getName();
            }

            targetObjectTypeNode = context.buildObjectTypeNode(objectType);
            if (targetNode == null) {
                List<ReteNode> childrenNodes = targetObjectTypeNode.getChildrenNodes();
                targetNode = this.fetchSameCriteriaNode(criteria, childrenNodes);
            } else {
                targetObjectTypeNode.addLine(targetNode);
            }
        }

        if (targetNode == null) {
            var6 = objectTypes.iterator();

            while (var6.hasNext()) {
                objectType = (String) var6.next();
                if (objectType.equals("*")) {
                    objectType = HashMap.class.getName();
                }

                targetObjectTypeNode = context.buildObjectTypeNode(objectType);
                if (targetNode == null) {
                    targetNode = new CriteriaNode((Criteria) criteria, context.nextId(), context.currentRuleIsDebug());
                    targetObjectTypeNode.addLine(targetNode);
                } else {
                    targetObjectTypeNode.addLine(targetNode);
                }
            }
        }

        return targetNode;
    }

    private CriteriaNode fetchSameCriteriaNode(BaseCriteria criteria, List<ReteNode> childrenNodes) {
        String conditionId = criteria.getId();
        CriteriaNode targetNode = null;
        Iterator var5 = childrenNodes.iterator();

        while (var5.hasNext()) {
            Node node = (Node) var5.next();
            if (node instanceof ConditionNode && (!(criteria instanceof Criteria) || node instanceof CriteriaNode)) {
                ConditionNode baseNode = (ConditionNode) node;
                String nodeId = baseNode.getCriteriaInfo();
                if (nodeId.equals(conditionId)) {
                    targetNode = (CriteriaNode) baseNode;
                    break;
                }
            }
        }

        return targetNode;
    }
}
