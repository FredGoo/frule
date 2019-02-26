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
package com.bstek.urule.model.rete;

import java.util.Iterator;
import java.util.Map;

import com.bstek.urule.model.rule.lhs.Criteria;
import com.bstek.urule.runtime.rete.Activity;
import com.bstek.urule.runtime.rete.CriteriaActivity;
import org.codehaus.jackson.annotate.JsonIgnore;

/**
 * @author Jacky.gao
 * 2015年1月6日
 */
public class CriteriaNode extends BaseReteNode implements ConditionNode {
    @JsonIgnore
    private String criteriaInfo;
    private Criteria criteria;
    private boolean debug;
    private NodeType nodeType;

    public CriteriaNode() {
        super(0);
        this.nodeType = NodeType.criteria;
    }

    public CriteriaNode(Criteria criteria, int id, boolean debug) {
        super(id);
        this.nodeType = NodeType.criteria;
        this.criteria = criteria;
        this.setCriteriaInfo(criteria.getId());
        this.debug = debug;
    }

    public NodeType getNodeType() {
        return this.nodeType;
    }

    public Criteria getCriteria() {
        return this.criteria;
    }

    public void setCriteria(Criteria criteria) {
        this.criteria = criteria;
    }

    public String getCriteriaInfo() {
        return this.criteriaInfo;
    }

    public void setCriteriaInfo(String criteriaInfo) {
        this.criteriaInfo = criteriaInfo;
    }

    public boolean isDebug() {
        return this.debug;
    }

    public void setDebug(boolean debug) {
        this.debug = debug;
    }

    public Activity newActivity(Map<Object, Object> context) {
        if (context.containsKey(this)) {
            return (CriteriaActivity) context.get(this);
        } else {
            CriteriaActivity activity = new CriteriaActivity(this.criteria, this.debug);
            Iterator var3 = this.lines.iterator();

            while (var3.hasNext()) {
                Line line = (Line) var3.next();
                activity.addPath(line.newPath(context));
            }

            context.put(this, activity);
            return activity;
        }
    }
}
