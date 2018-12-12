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
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.model.rule.RuleInfo;
import com.bstek.urule.runtime.KnowledgeSession;
import com.bstek.urule.runtime.event.impl.ActivationCancelledEventImpl;
import com.bstek.urule.runtime.rete.Context;
import com.bstek.urule.runtime.rete.EvaluationContext;

/**
 * @author Jacky.gao
 * 2015年1月2日
 */
public abstract class AbstractRuleBox implements RuleBox {
    protected List<RuleInfo> executedRules;
    protected Context context;
    protected List<Rule> rules;

    public AbstractRuleBox(Context context, List<RuleInfo> executedRules) {
        this.context = context;
        this.rules = new ArrayList();
        this.executedRules = executedRules;
    }

    protected void retract(Object obj, List<Activation> activations) {
        List<Activation> needRemovedList = new ArrayList();
        Iterator var4 = activations.iterator();

        while (var4.hasNext()) {
            Activation activation = (Activation) var4.next();
            if (activation.contain(obj)) {
                needRemovedList.add(activation);
            }
        }

        KnowledgeSession session = (KnowledgeSession) this.context.getWorkingMemory();
        Iterator var7 = needRemovedList.iterator();

        while (var7.hasNext()) {
            Activation ac = (Activation) var7.next();
            activations.remove(ac);
            session.fireEvent(new ActivationCancelledEventImpl(ac, session));
        }

    }

    protected boolean addActivation(Activation activation, List<Activation> list) {
        boolean result = list.add(activation);
        Collections.sort(list);
        return result;
    }

    protected boolean activationShouldAdd(Activation activation) {
        Rule rule = activation.getRule();
        Iterator var3 = this.rules.iterator();

        Rule r;
        do {
            if (!var3.hasNext()) {
                return true;
            }

            r = (Rule) var3.next();
        } while (!r.equals(rule));

        if (r.getLoop() != null && r.getLoop()) {
            return true;
        } else {
            return false;
        }
    }

    public List<Rule> getRules() {
        return this.rules;
    }
}
