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
package com.bstek.urule.model.rule.lhs;

import java.util.List;

import com.bstek.urule.Utils;
import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.model.rule.Op;
import com.bstek.urule.model.rule.Value;
import com.bstek.urule.runtime.assertor.AssertorEvaluator;
import com.bstek.urule.runtime.rete.EvaluationContext;

/**
 * @author Jacky.gao
 * 2015年6月1日
 */
public class PropertyCriteria {
    private String property;
    private Op op;
    private Value value;
    private String id;

    public PropertyCriteria() {
    }

    public String getId() {
        if (this.id == null) {
            this.id = this.property + this.op.name() + this.value.getId();
        }

        return this.id;
    }

    public boolean evaluate(EvaluationContext context, Object obj, List<Object> allMatchedObjects) {
        Object left = Utils.getObjectProperty(obj, this.property);
        Object right = context.getValueCompute().complexValueCompute(this.value, obj, context, allMatchedObjects);
        if (right == null) {
            return false;
        } else {
            AssertorEvaluator assertorEvaluator = context.getAssertorEvaluator();
            Datatype datatype = Utils.getDatatype(left);
            boolean result = assertorEvaluator.evaluate(left, right, datatype, this.op);
            return result;
        }
    }

    public String getProperty() {
        return this.property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public Op getOp() {
        return this.op;
    }

    public void setOp(Op op) {
        this.op = op;
    }

    public Value getValue() {
        return this.value;
    }

    public void setValue(Value value) {
        this.value = value;
    }
}
