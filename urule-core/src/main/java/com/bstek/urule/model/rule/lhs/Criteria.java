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

import com.bstek.urule.Utils;
import com.bstek.urule.action.ActionValue;
import com.bstek.urule.action.ExecuteMethodAction;
import com.bstek.urule.exception.RuleException;
import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.model.rule.ComplexArithmetic;
import com.bstek.urule.model.rule.Op;
import com.bstek.urule.model.rule.Value;
import com.bstek.urule.runtime.rete.EvaluationContext;
import com.bstek.urule.runtime.rete.ValueCompute;
import org.codehaus.jackson.annotate.JsonIgnore;

import java.util.List;

/**
 * @author Jacky.gao
 * 2014年12月29日
 */
public class Criteria extends BaseCriterion implements BaseCriteria {
    @JsonIgnore
    private String id;
    private Op op;
    private Left left;
    private Value value;

    public Criteria() {
    }

    public EvaluateResponse evaluate(EvaluationContext context, Object obj, List<Object> allMatchedObjects) {
        Datatype datatype = null;
        Object leftResult = null;
        context.addTipMsg("计算条件：" + this.getId());
        ValueCompute valueCompute = context.getValueCompute();
        LeftPart leftPart = this.left.getLeftPart();
        String leftId = this.left.getId();
        context.addTipMsg("左值：" + leftId);
        String valueId;
        if (context.partValueExist(leftId)) {
            leftResult = context.getPartValue(leftId);
            if (leftPart instanceof VariableLeftPart) {
                datatype = ((VariableLeftPart) leftPart).getDatatype();
            }
        } else {
            Object leftValue = null;
            if (leftPart instanceof VariableLeftPart) {
                VariableLeftPart varPart = (VariableLeftPart) leftPart;
                datatype = varPart.getDatatype();
                if (varPart.getVariableName() == null) {
                    throw new RuleException("Criteria left variableName [" + varPart.getVariableName() + "] can not be null.");
                }

                valueId = context.getVariableCategoryClass(varPart.getVariableCategory());
                Object targetObj = context.getValueCompute().findObject(valueId, obj, context);
                if (targetObj == null) {
                    throw new RuleException("Object [" + valueId + "] not exist.");
                }

                leftValue = Utils.getObjectProperty(targetObj, varPart.getVariableName());
            } else if (leftPart instanceof MethodLeftPart) {
                MethodLeftPart methodPart = (MethodLeftPart) leftPart;
                ExecuteMethodAction methodAction = new ExecuteMethodAction();
                methodAction.setBeanId(methodPart.getBeanId());
                methodAction.setBeanLabel(methodPart.getBeanLabel());
                methodAction.setMethodLabel(methodPart.getMethodLabel());
                methodAction.setMethodName(methodPart.getMethodName());
                methodAction.setParameters(methodPart.getParameters());
                ActionValue actionValue = methodAction.execute(context, obj, allMatchedObjects);
                if (actionValue == null) {
                    leftValue = null;
                } else {
                    leftValue = actionValue.getValue();
                }
            } else if (leftPart instanceof ExistLeftPart) {
                ExistLeftPart existPart = (ExistLeftPart) leftPart;
                leftValue = existPart.evaluate(context, obj, allMatchedObjects);
            } else if (leftPart instanceof AllLeftPart) {
                AllLeftPart allPart = (AllLeftPart) leftPart;
                leftValue = allPart.evaluate(context, obj, allMatchedObjects);
            } else if (leftPart instanceof CollectLeftPart) {
                CollectLeftPart collectPart = (CollectLeftPart) leftPart;
                leftValue = collectPart.evaluate(context, obj, allMatchedObjects);
            } else if (leftPart instanceof CommonFunctionLeftPart) {
                CommonFunctionLeftPart part = (CommonFunctionLeftPart) leftPart;
                leftValue = part.evaluate(context, obj, allMatchedObjects);
            }

            leftResult = leftValue;
            ComplexArithmetic arithmetic = this.left.getArithmetic();
            if (arithmetic != null) {
                leftResult = valueCompute.complexArithmeticCompute(obj, context, allMatchedObjects, arithmetic, leftValue);
            }

            context.storePartValue(leftId, leftResult);
        }

        EvaluateResponse response = new EvaluateResponse();
        response.setLeftResult(leftResult);
        Object right = null;
        if (this.value != null) {
            valueId = this.value.getId();
            context.addTipMsg("右值：" + valueId);
            if (context.partValueExist(valueId)) {
                right = context.getPartValue(valueId);
                response.setRightResult(right);
            } else {
                right = valueCompute.complexValueCompute(this.value, obj, context, allMatchedObjects);
                response.setRightResult(right);
                context.storePartValue(valueId, right);
            }
        }

        if (datatype == null) {
            datatype = Utils.getDatatype(leftResult);
        }

        context.addTipMsg("执行比较：" + this.op.toString());
        boolean result = context.getAssertorEvaluator().evaluate(leftResult, right, datatype, this.op);
        response.setResult(result);
        context.cleanTipMsg();
        return response;
    }

    public String getId() {
        if (this.id == null) {
            this.id = this.left.getId();
            this.id = this.id + "【" + this.op.toString() + "】";
            if (this.value != null) {
                this.id = this.id + this.value.getId();
            }
        }

        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Op getOp() {
        return this.op;
    }

    public void setOp(Op op) {
        this.op = op;
    }

    public Left getLeft() {
        return this.left;
    }

    public void setLeft(Left left) {
        this.left = left;
    }

    public Value getValue() {
        return this.value;
    }

    public void setValue(Value value) {
        this.value = value;
    }
}
