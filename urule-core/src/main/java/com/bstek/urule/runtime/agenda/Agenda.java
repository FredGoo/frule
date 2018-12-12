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
package com.bstek.urule.runtime.agenda;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import com.bstek.urule.Utils;
import com.bstek.urule.action.ActionValue;
import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.model.rule.RuleInfo;
import com.bstek.urule.runtime.KnowledgeSession;
import com.bstek.urule.runtime.KnowledgeSessionImpl;
import com.bstek.urule.runtime.WorkingMemory;
import com.bstek.urule.runtime.response.ExecutionResponseImpl;
import com.bstek.urule.runtime.response.RuleExecutionResponse;
import com.bstek.urule.runtime.rete.Context;
import com.bstek.urule.runtime.rete.FactTracker;
import com.bstek.urule.runtime.rete.ReteInstance;

/**
 * @author Jacky.gao
 * 2015年1月2日
 */
public class Agenda {
    private Context context;
    private RuleBox ruleBox;
    private List<RuleInfo> matchedRules = new ArrayList<>();

    public Agenda(Context context) {
        this.context = context;
        this.ruleBox = new ActivationRuleBox(context, this.matchedRules);
    }

    public RuleExecutionResponse execute(AgendaFilter filter, int max) {
        ExecutionResponseImpl response = new ExecutionResponseImpl();
        List<ActionValue> actionValues = new ArrayList<>();
        response.setActionValues(actionValues);
        List<RuleInfo> firedRules = new ArrayList<>();
        List<RuleInfo> ruleInfoResult = this.ruleBox.execute(filter, max, actionValues);
        firedRules.addAll(ruleInfoResult);
        KnowledgeSession session = (KnowledgeSession) this.context.getWorkingMemory();
        List<ReteInstance> reteInstanceList = session.getReteInstanceList();
        Iterator var9 = reteInstanceList.iterator();

        while (var9.hasNext()) {
            ReteInstance reteInstance = (ReteInstance) var9.next();
            reteInstance.reset();
        }

        response.setFiredRules(firedRules);
        response.addMatchedRules(this.matchedRules);
        return response;
    }

    public void addTrackers(Collection<FactTracker> list, boolean noCondition) {
        Iterator var3 = list.iterator();

        while (true) {
            while (var3.hasNext()) {
                FactTracker tracker = (FactTracker) var3.next();
                Activation activation = tracker.getActivation();
                Rule rule = activation.getRule();
                if (noCondition && rule.isWithElse()) {
                    if (!this.ruleBox.getRules().contains(rule)) {
                        Rule elseRule = Utils.buildElseRule(rule);
                        ActivationImpl ac = new ActivationImpl(elseRule);
                        this.ruleBox.add(ac);
                    }
                } else {
                    this.ruleBox.add(activation);
                }
            }

            return;
        }
    }

    public void retract(Object obj) {
        this.ruleBox.retract(obj);
    }

    public void clean() {
        this.ruleBox.clean();
    }
}