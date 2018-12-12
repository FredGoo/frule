/*******************************************************************************
 * Copyright 2017 Bstek
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/
package com.bstek.urule.model.rete.builder;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.bstek.urule.exception.RuleException;
import com.bstek.urule.model.rete.AndNode;
import com.bstek.urule.model.rete.BaseReteNode;
import com.bstek.urule.model.rete.ConditionNode;
import com.bstek.urule.model.rete.CriteriaNode;
import com.bstek.urule.model.rete.JunctionNode;
import com.bstek.urule.model.rete.ReteNode;
import com.bstek.urule.model.rule.lhs.And;
import com.bstek.urule.model.rule.lhs.BaseCriterion;
import com.bstek.urule.model.rule.lhs.Criterion;

/**
 * @author Jacky.gao
 * 2016年9月9日
 */
public class AndBuilder extends JunctionBuilder {
    public AndBuilder() {
    }

    public List<BaseReteNode> buildCriterion(BaseCriterion c, BuildContext context) {
        And and = (And) c;
        AndNode andNode = null;
        List<Criterion> criterions = and.getCriterions();
        if (criterions != null && criterions.size() != 0) {
            ConditionNode currentCriteriaNode = null;
            Iterator var7 = criterions.iterator();

            while (true) {
                List nodes;
                do {
                    if (!var7.hasNext()) {
                        List<BaseReteNode> result = new ArrayList();
                        if (criterions.size() == 1 && currentCriteriaNode != null) {
                            result.add((BaseReteNode) currentCriteriaNode);
                            return result;
                        }

                        if (andNode == null) {
                            result.add((BaseReteNode) currentCriteriaNode);
                            return result;
                        }

                        if (andNode != null && currentCriteriaNode != null) {
                            currentCriteriaNode.addLine(andNode);
                        }

                        result.add(andNode);
                        return result;
                    }

                    Criterion criterion = (Criterion) var7.next();
                    List<ConditionNode> prevNodes = new ArrayList();
                    if (currentCriteriaNode != null) {
                        prevNodes.add(currentCriteriaNode);
                    }

                    nodes = this.buildCriterion(criterion, context, prevNodes);
                } while (nodes == null);

                Iterator var11 = nodes.iterator();

                while (var11.hasNext()) {
                    BaseReteNode node = (BaseReteNode) var11.next();
                    if (node instanceof CriteriaNode) {
                        if (currentCriteriaNode != null) {
                            List<ReteNode> childrenNodes = currentCriteriaNode.getChildrenNodes();
                            if (!childrenNodes.contains(node)) {
                                if (andNode == null) {
                                    andNode = new AndNode(context.nextId());
                                }

                                currentCriteriaNode.addLine(andNode);
                            }
                        }

                        currentCriteriaNode = (ConditionNode) node;
                    } else if (node instanceof JunctionNode) {
                        if (andNode == null) {
                            andNode = new AndNode(context.nextId());
                        }

                        ((JunctionNode) node).addLine(andNode);
                    }
                }
            }
        } else {
            throw new RuleException("Condition join node[and] need one child at least.");
        }
    }

    public boolean support(Criterion criterion) {
        return criterion instanceof And;
    }
}
