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

import java.io.IOException;
import java.util.List;
import java.util.Map;

import com.bstek.urule.debug.MessageItem;
import com.bstek.urule.runtime.agenda.AgendaFilter;
import com.bstek.urule.runtime.response.FlowExecutionResponse;
import com.bstek.urule.runtime.response.RuleExecutionResponse;
import com.bstek.urule.runtime.rete.ReteInstance;

/**
 * @author Jacky.gao
 * 2015年1月8日
 */
public interface KnowledgeSession extends WorkingMemory {
    RuleExecutionResponse fireRules();

    RuleExecutionResponse fireRules(AgendaFilter var1);

    RuleExecutionResponse fireRules(Map<String, Object> var1, AgendaFilter var2);

    RuleExecutionResponse fireRules(int var1);

    RuleExecutionResponse fireRules(Map<String, Object> var1, int var2);

    RuleExecutionResponse fireRules(AgendaFilter var1, int var2);

    RuleExecutionResponse fireRules(Map<String, Object> var1, AgendaFilter var2, int var3);

    RuleExecutionResponse fireRules(Map<String, Object> var1);

    FlowExecutionResponse startProcess(String var1);

    FlowExecutionResponse startProcess(String var1, Map<String, Object> var2);

    void writeLogFile() throws IOException;

    List<MessageItem> getDebugMessageItems();

    List<KnowledgePackage> getKnowledgePackageList();

    List<ReteInstance> getReteInstanceList();

    Map<String, KnowledgeSession> getKnowledgeSessionMap();

    KnowledgeSession getParentSession();

    void initFromParentSession(KnowledgeSession var1);
}
