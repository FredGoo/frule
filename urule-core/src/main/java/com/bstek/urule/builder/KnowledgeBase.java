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
package com.bstek.urule.builder;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.bstek.urule.model.flow.FlowDefinition;
import com.bstek.urule.model.library.ResourceLibrary;
import com.bstek.urule.model.library.variable.Variable;
import com.bstek.urule.model.library.variable.VariableCategory;
import com.bstek.urule.model.rete.Rete;
import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.runtime.KnowledgePackage;
import com.bstek.urule.runtime.KnowledgePackageImpl;

/**
 * @author Jacky.gao
 * 2014年12月22日
 */
public class KnowledgeBase {
    private ResourceLibrary resourceLibrary;
    private Map<String, FlowDefinition> flowMap;
    private Rete rete;
    private KnowledgePackageImpl knowledgePackage;

    public KnowledgeBase(Rete rete) {
        this(rete, null);
    }

    protected KnowledgeBase(Rete rete, Map<String, FlowDefinition> flowMap) {
        this.rete = rete;
        this.resourceLibrary = rete.getResourceLibrary();
        this.flowMap = flowMap;
    }

    public KnowledgePackage getKnowledgePackage() {
        if (this.knowledgePackage != null) {
            return this.knowledgePackage;
        } else {
            this.knowledgePackage = new KnowledgePackageImpl();
            this.knowledgePackage.setRete(this.rete);
            this.knowledgePackage.setFlowMap(this.flowMap);
            Map<String, String> variableCategoryMap = new HashMap<>();
            this.knowledgePackage.setVariableCategoryMap(variableCategoryMap);
            List<VariableCategory> variableCategories = this.resourceLibrary.getVariableCategories();
            Map<String, String> parameters = new HashMap<>();
            this.knowledgePackage.setParameters(parameters);
            Iterator var4 = variableCategories.iterator();

            while (true) {
                List variables;
                do {
                    do {
                        VariableCategory category;
                        String name;
                        do {
                            if (!var4.hasNext()) {
                                return this.knowledgePackage;
                            }

                            category = (VariableCategory) var4.next();
                            name = category.getName();
                            variableCategoryMap.put(name, category.getClazz());
                        } while (!name.equals("参数"));

                        variables = category.getVariables();
                    } while (variables == null);
                } while (variables.size() == 0);

                Iterator var8 = variables.iterator();

                while (var8.hasNext()) {
                    Variable var = (Variable) var8.next();
                    parameters.put(var.getName(), var.getType().name());
                }
            }
        }
    }

    public Rete getRete() {
        return this.rete;
    }

    public ResourceLibrary getResourceLibrary() {
        return this.resourceLibrary;
    }

    public Map<String, FlowDefinition> getFlowMap() {
        return this.flowMap;
    }
}
