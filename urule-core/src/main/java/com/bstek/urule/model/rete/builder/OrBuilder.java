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
import com.bstek.urule.model.rete.BaseReteNode;
import com.bstek.urule.model.rete.OrNode;
import com.bstek.urule.model.rete.builder.BuildContext;
import com.bstek.urule.model.rule.lhs.BaseCriterion;
import com.bstek.urule.model.rule.lhs.Criterion;
import com.bstek.urule.model.rule.lhs.Or;

/**
 * @author Jacky.gao
 * 2016年9月9日
 */
public class OrBuilder extends JunctionBuilder {
    public OrBuilder() {
    }

    public List<BaseReteNode> buildCriterion(BaseCriterion c, BuildContext context) {
        Or or = (Or) c;
        List<Criterion> criterions = or.getCriterions();
        if (criterions != null && criterions.size() != 0) {
            List<BaseReteNode> childNodes = new ArrayList();
            Iterator var6 = criterions.iterator();

            while (var6.hasNext()) {
                Criterion criterion = (Criterion) var6.next();
                List<BaseReteNode> nodes = this.buildCriterion(criterion, context, (List) null);
                if (nodes != null) {
                    childNodes.addAll(nodes);
                }
            }

            if (childNodes.size() == 0) {
                return null;
            } else if (childNodes.size() == 1) {
                return childNodes;
            } else {
                OrNode orNode = new OrNode(context.nextId());
                Iterator var10 = childNodes.iterator();

                while (var10.hasNext()) {
                    BaseReteNode node = (BaseReteNode) var10.next();
                    node.addLine(orNode);
                }

                List<BaseReteNode> list = new ArrayList();
                list.add(orNode);
                return list;
            }
        } else {
            throw new RuleException("Condition join node[or] need one child at least.");
        }
    }

    public boolean support(Criterion criterion) {
        return criterion instanceof Or;
    }
}
