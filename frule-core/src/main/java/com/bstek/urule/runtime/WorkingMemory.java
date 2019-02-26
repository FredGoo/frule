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
package com.bstek.urule.runtime;

import com.bstek.urule.runtime.rete.Context;

import java.util.List;
import java.util.Map;


/**
 * @author Jacky.gao
 * 2015年1月8日
 */
public interface WorkingMemory extends EventManager {
    boolean insert(Object var1);

    void assertFact(Object var1);

    boolean update(Object var1);

    boolean retract(Object var1);

    Object getParameter(String var1);

    Map<String, Object> getParameters();

    Map<String, Object> getAllFactsMap();

    KnowledgeSession getKnowledgeSession(String var1);

    void putKnowledgeSession(String var1, KnowledgeSession var2);

    void setSessionValue(String var1, Object var2);

    Object getSessionValue(String var1);

    Map<String, Object> getSessionValueMap();

    void activeRule(String var1, String var2);

    void activeAgendaGroup(String var1);

    Context getContext();

}
