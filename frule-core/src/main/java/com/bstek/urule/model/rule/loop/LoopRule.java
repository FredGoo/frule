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
package com.bstek.urule.model.rule.loop;

import java.util.*;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.bstek.urule.action.Action;
import com.bstek.urule.action.ActionValue;
import com.bstek.urule.model.GeneralEntity;
import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.runtime.KnowledgePackageWrapper;
import com.bstek.urule.runtime.KnowledgeSession;
import com.bstek.urule.runtime.KnowledgeSessionFactory;
import com.bstek.urule.runtime.builtinaction.LoopAction;
import com.bstek.urule.runtime.response.RuleExecutionResponse;
import com.bstek.urule.runtime.rete.Context;

/**
 * @author Jacky.gao
 * 2016年5月31日
 */
public class LoopRule extends Rule {
    private LoopStart loopStart;
    private LoopEnd loopEnd;
    private LoopTarget loopTarget;
    private List<LoopRuleUnit> units;
    private KnowledgePackageWrapper knowledgePackageWrapper;
    private Log log = LogFactory.getLog(this.getClass());

    public LoopRule() {
        this.setLoopRule(true);
    }

    public List<ActionValue> execute(Context context, Object matchedObject, List<Object> allMatchedObjects) {
        Object loopTargetObj = context.getValueCompute().complexValueCompute(this.loopTarget.getValue(), matchedObject, context, allMatchedObjects);
        if (loopTargetObj == null) {
            this.log.warn("Loop rule [" + this.getName() + "] target value is null,cannot be executed.");
            return null;
        } else {
            List<ActionValue> values = new ArrayList();
            KnowledgeSession parentSession = (KnowledgeSession) context.getWorkingMemory();
            Map<String, Object> parameters = parentSession.getParameters();
            if (this.loopStart != null) {
                List<Action> startActions = this.loopStart.getActions();
                if (startActions != null) {
                    Iterator var9 = startActions.iterator();

                    while (var9.hasNext()) {
                        Action action = (Action) var9.next();
                        if (this.getDebug() != null) {
                            action.setDebug(this.getDebug());
                        }

                        ActionValue value = action.execute(context, matchedObject, allMatchedObjects);
                        if (value != null) {
                            values.add(value);
                        }
                    }
                }
            }

            KnowledgeSession session = KnowledgeSessionFactory.newKnowledgeSession(this.knowledgePackageWrapper, context, parentSession);
            Map<String, Object> parentAllFactsMap = parentSession.getAllFactsMap();
            Object fact;
            if (loopTargetObj instanceof Collection) {
                Collection<?> collections = (Collection) loopTargetObj;
                String loopClazz = null;
                Iterator var12 = collections.iterator();

                while (var12.hasNext()) {
                    Object object = var12.next();
                    if (loopClazz == null) {
                        if (object instanceof GeneralEntity) {
                            loopClazz = ((GeneralEntity) object).getTargetClass();
                        } else {
                            loopClazz = object.getClass().getName();
                        }
                    }

                    Iterator var14 = parentAllFactsMap.keySet().iterator();

                    while (var14.hasNext()) {
                        String className = (String) var14.next();
                        if (!className.equals(loopClazz)) {
                            fact = parentAllFactsMap.get(className);
                            session.insert(fact);
                        }
                    }

                    session.insert(object);
                    RuleExecutionResponse response = session.fireRules((Map) parameters);
                    List<ActionValue> list = response.getActionValues();
                    boolean needBreak = false;
                    if (list != null) {
                        Iterator var17 = list.iterator();

                        while (var17.hasNext()) {
                            ActionValue av = (ActionValue) var17.next();
                            if (av.getActionId().equals("_loop_break__")) {
                                needBreak = true;
                            } else {
                                values.add(av);
                            }
                        }
                    }

                    parameters = new HashMap();
                    ((Map) parameters).putAll(session.getParameters());
                    if (needBreak) {
                        break;
                    }
                }
            } else {
                if (!(loopTargetObj instanceof Object[])) {
                    throw new RuntimeException("Loop rule target variable must be Collection or Object array type.");
                }

                Object[] objs = (Object[]) ((Object[]) loopTargetObj);
                Object[] var27 = objs;
                int var26 = objs.length;

                for (int var30 = 0; var30 < var26; ++var30) {
                    Object object = var27[var30];
                    Iterator var35 = parentAllFactsMap.values().iterator();

                    while (var35.hasNext()) {
                        fact = var35.next();
                        session.insert(fact);
                    }

                    session.insert(object);
                    RuleExecutionResponse response = session.fireRules();
                    List<ActionValue> list = response.getActionValues();
                    boolean needBreak = false;
                    if (list != null) {
                        Iterator var40 = list.iterator();

                        while (var40.hasNext()) {
                            ActionValue av = (ActionValue) var40.next();
                            if (av.getActionId().equals("_loop_break__")) {
                                needBreak = true;
                            } else {
                                values.add(av);
                            }
                        }
                    }

                    parameters = new HashMap();
                    ((Map) parameters).putAll(session.getParameters());
                    if (needBreak) {
                        break;
                    }
                }
            }

            parentSession.getParameters().putAll((Map) parameters);
            if (this.loopEnd != null) {
                List<Action> endActions = this.loopEnd.getActions();
                if (endActions != null) {
                    Iterator var29 = endActions.iterator();

                    while (var29.hasNext()) {
                        Action action = (Action) var29.next();
                        if (this.getDebug() != null) {
                            action.setDebug(this.getDebug());
                        }

                        ActionValue value = action.execute(context, matchedObject, allMatchedObjects);
                        if (value != null) {
                            values.add(value);
                        }
                    }
                }
            }

            return values;
        }
    }

    public List<LoopRuleUnit> getUnits() {
        return this.units;
    }

    public void setUnits(List<LoopRuleUnit> units) {
        this.units = units;
    }

    public LoopStart getLoopStart() {
        return this.loopStart;
    }

    public void setLoopStart(LoopStart loopStart) {
        this.loopStart = loopStart;
    }

    public LoopEnd getLoopEnd() {
        return this.loopEnd;
    }

    public void setLoopEnd(LoopEnd loopEnd) {
        this.loopEnd = loopEnd;
    }

    public LoopTarget getLoopTarget() {
        return this.loopTarget;
    }

    public void setLoopTarget(LoopTarget loopTarget) {
        this.loopTarget = loopTarget;
    }

    public KnowledgePackageWrapper getKnowledgePackageWrapper() {
        return this.knowledgePackageWrapper;
    }

    public void setKnowledgePackageWrapper(KnowledgePackageWrapper knowledgePackageWrapper) {
        this.knowledgePackageWrapper = knowledgePackageWrapper;
    }
}
