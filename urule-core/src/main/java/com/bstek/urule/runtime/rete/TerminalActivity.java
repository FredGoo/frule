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

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import com.bstek.urule.debug.MsgType;
import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.runtime.KnowledgeSession;
import com.bstek.urule.runtime.agenda.ActivationImpl;
import com.bstek.urule.runtime.event.impl.ActivationCreatedEventImpl;

/**
 * @author Jacky.gao
 * 2015年1月8日
 */
public class TerminalActivity extends AbstractActivity {
    private Rule rule;

    public TerminalActivity(Rule rule) {
        this.rule = rule;
    }

    public Collection<FactTracker> enter(EvaluationContext context, Object obj, FactTracker tracker) {
        List<FactTracker> result = new ArrayList();
        ActivationImpl ac = new ActivationImpl(this.rule);
        tracker.setActivation(ac);
        result.add(tracker);
        KnowledgeSession session = (KnowledgeSession) context.getWorkingMemory();
        session.fireEvent(new ActivationCreatedEventImpl(ac, session));
        if (this.rule.getDebug() != null) {
            String msg = "√√√规则【" + this.rule.getName() + "】成功匹配";
            context.debugMsg(msg, MsgType.RuleMatch, this.rule.getDebug());
        }

        return result;
    }

    public void passAndNode() {
    }

    public boolean joinNodeIsPassed() {
        return false;
    }

    public void reset() {
    }
}
