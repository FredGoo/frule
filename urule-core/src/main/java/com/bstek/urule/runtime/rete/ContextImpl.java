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
package com.bstek.urule.runtime.rete;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.model.rule.RuleInfo;
import com.bstek.urule.runtime.ElCompute;
import org.apache.commons.lang.StringUtils;
import org.springframework.context.ApplicationContext;

import com.bstek.urule.Utils;
import com.bstek.urule.debug.MessageItem;
import com.bstek.urule.debug.MsgType;
import com.bstek.urule.runtime.ElCalculator;
import com.bstek.urule.runtime.WorkingMemory;
import com.bstek.urule.runtime.assertor.AssertorEvaluator;

/**
 * @author Jacky.gao
 * 2015年1月8日
 */
public class ContextImpl implements Context {
    private ApplicationContext applicationContext;
    private AssertorEvaluator assertorEvaluator;
    private Map<String, String> variableCategoryMap;
    private ValueCompute valueCompute;
    private WorkingMemory workingMemory;
    private List<MessageItem> debugMessageItems;
    private Rule currentRule;
    private StringBuilder tipMsgBuilder = new StringBuilder();

    public ContextImpl(WorkingMemory workingMemory, ApplicationContext applicationContext, Map<String, String> variableCategoryMap, List<MessageItem> debugMessageItems) {
        this.workingMemory = workingMemory;
        this.applicationContext = applicationContext;
        this.assertorEvaluator = (AssertorEvaluator) applicationContext.getBean("urule.assertorEvaluator");
        this.variableCategoryMap = variableCategoryMap;
        this.debugMessageItems = debugMessageItems;
        this.valueCompute = (ValueCompute) applicationContext.getBean("urule.valueCompute");
    }

    public void addTipMsg(String msg) {
        if (this.tipMsgBuilder.length() > 0) {
            this.tipMsgBuilder.append(">>");
        }

        this.tipMsgBuilder.append(msg);
    }

    public void cleanTipMsg() {
        this.tipMsgBuilder.delete(0, this.tipMsgBuilder.length());
    }

    public String getTipMsg() {
        return this.tipMsgBuilder.length() > 0 ? this.tipMsgBuilder.toString() : null;
    }

    public WorkingMemory getWorkingMemory() {
        return this.workingMemory;
    }

    public ApplicationContext getApplicationContext() {
        return this.applicationContext;
    }

    public AssertorEvaluator getAssertorEvaluator() {
        return this.assertorEvaluator;
    }

    public Object parseExpression(String expression) {
        return (new ElCompute()).doCompute(expression);
    }

    public void debugMsg(String msg, MsgType type, boolean enableDebug) {
        if (Utils.isDebug() && enableDebug) {
            if (!Utils.isDebugToFile()) {
                System.out.println(msg);
            } else {
                MessageItem item = new MessageItem(msg, type);
                this.debugMessageItems.add(item);
            }
        }
    }

    public List<MessageItem> getDebugMessageItems() {
        return this.debugMessageItems;
    }

    public String getVariableCategoryClass(String variableCategory) {
        String clazz = (String) this.variableCategoryMap.get(variableCategory);
        if (StringUtils.isEmpty(clazz)) {
            clazz = HashMap.class.getName();
        }

        return clazz;
    }

    public ValueCompute getValueCompute() {
        return this.valueCompute;
    }

    public void setCurrentRule(Rule currentRule) {
        this.currentRule = currentRule;
    }

    public RuleInfo getCurrentRule() {
        return this.currentRule;
    }
}
