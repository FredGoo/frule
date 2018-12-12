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
package com.bstek.urule.model.flow;

import java.util.Iterator;
import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnore;

import com.bstek.urule.model.flow.ins.FlowContext;
import com.bstek.urule.model.flow.ins.FlowInstance;
import com.bstek.urule.model.rule.Library;
import com.bstek.urule.model.rule.LibraryType;
import com.bstek.urule.runtime.KnowledgePackageWrapper;
import com.bstek.urule.runtime.KnowledgeSession;
import com.bstek.urule.runtime.KnowledgeSessionFactory;

/**
 * @author Jacky.gao
 * 2015年2月28日
 */
public class Connection {
    public static final String RETURN_VALUE_KEY = "return_value__";
    private String name;
    private String toName;
    private String script;
    private String g;
    private KnowledgePackageWrapper knowledgePackageWrapper;
    @JsonIgnore
    private FlowNode to;

    public Connection() {
    }

    public boolean evaluate(FlowContext context) {
        if (this.knowledgePackageWrapper == null) {
            return true;
        } else {
            KnowledgeSession parentSession = (KnowledgeSession) context.getWorkingMemory();
            KnowledgeSession session = KnowledgeSessionFactory.newKnowledgeSession(this.knowledgePackageWrapper, context, parentSession);
            session.fireRules(context.getVariables());
            Object result = session.getParameter("return_value__");
            return result == null ? false : Boolean.valueOf(result.toString());
        }
    }

    public void buildDeserialize() {
        if (this.knowledgePackageWrapper != null) {
            this.knowledgePackageWrapper.buildDeserialize();
        }

    }

    public void execute(FlowContext context, FlowInstance instance) {
        this.to.enter(context, instance);
    }

    public String buildDSLScript(List<Library> libraries) {
        StringBuffer sb = new StringBuffer();
        if (libraries != null) {
            Iterator var3 = libraries.iterator();

            while (var3.hasNext()) {
                Library lib = (Library) var3.next();
                String path = lib.getPath();
                if (lib.getVersion() != null) {
                    path = path + ":" + lib.getVersion();
                }

                LibraryType type = lib.getType();
                switch (type) {
                    case Action:
                        sb.append("importActionLibrary \"" + path + "\"");
                        sb.append("\r\n");
                        break;
                    case Constant:
                        sb.append("importConstantLibrary \"" + path + "\"");
                        sb.append("\r\n");
                        break;
                    case Parameter:
                        sb.append("importParameterLibrary \"" + path + "\"");
                        sb.append("\r\n");
                        break;
                    case Variable:
                        sb.append("importVariableLibrary \"" + path + "\"");
                        sb.append("\r\n");
                }
            }
        }

        sb.append("rule \"conn\"");
        sb.append("\r\n");
        sb.append("if");
        sb.append("\r\n");
        sb.append(this.script);
        sb.append("\r\n");
        sb.append("then");
        sb.append("\r\n");
        sb.append("parameter.return_value__=true");
        sb.append("\r\n");
        sb.append("end");
        return sb.toString();
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getToName() {
        return this.toName;
    }

    public void setToName(String toName) {
        this.toName = toName;
    }

    public FlowNode getTo() {
        return this.to;
    }

    public void setTo(FlowNode to) {
        this.to = to;
    }

    public String getScript() {
        return this.script;
    }

    public void setScript(String script) {
        this.script = script;
    }

    public KnowledgePackageWrapper getKnowledgePackageWrapper() {
        return this.knowledgePackageWrapper;
    }

    public void setKnowledgePackageWrapper(KnowledgePackageWrapper knowledgePackageWrapper) {
        this.knowledgePackageWrapper = knowledgePackageWrapper;
    }

    public String getG() {
        return this.g;
    }

    public void setG(String g) {
        this.g = g;
    }
}
