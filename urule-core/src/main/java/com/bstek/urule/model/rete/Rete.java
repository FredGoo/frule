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
package com.bstek.urule.model.rete;

import java.util.*;

import com.bstek.urule.model.Node;
import com.bstek.urule.model.library.ResourceLibrary;
import com.bstek.urule.runtime.rete.ObjectTypeActivity;
import com.bstek.urule.runtime.rete.ReteInstance;
import com.bstek.urule.runtime.rete.ReteInstanceUnit;
import org.codehaus.jackson.annotate.JsonIgnore;

/**
 * @author Jacky.gao
 * 2015年1月6日
 */
public class Rete implements Node {
    private List<ObjectTypeNode> objectTypeNodes;
    private Map<String, List<ReteUnit>> activationGroupRetesMap;
    private Map<String, List<ReteUnit>> agendaGroupRetesMap;
    @JsonIgnore
    private ResourceLibrary resourceLibrary;

    public Rete() {
    }

    public Rete(List<ObjectTypeNode> objectTypeNodes, ResourceLibrary resourceLibrary) {
        this.objectTypeNodes = objectTypeNodes;
        this.resourceLibrary = resourceLibrary;
    }

    public List<ObjectTypeNode> getObjectTypeNodes() {
        return this.objectTypeNodes;
    }

    public ResourceLibrary getResourceLibrary() {
        return this.resourceLibrary;
    }

    public Map<String, List<ReteUnit>> getActivationGroupRetesMap() {
        return this.activationGroupRetesMap;
    }

    public void setActivationGroupRetesMap(Map<String, List<ReteUnit>> activationGroupRetesMap) {
        this.activationGroupRetesMap = activationGroupRetesMap;
    }

    public Map<String, List<ReteUnit>> getAgendaGroupRetesMap() {
        return this.agendaGroupRetesMap;
    }

    public void setAgendaGroupRetesMap(Map<String, List<ReteUnit>> agendaGroupRetesMap) {
        this.agendaGroupRetesMap = agendaGroupRetesMap;
    }

    public ReteInstance newReteInstance() {
        List<ObjectTypeActivity> objectTypeActivities = new ArrayList();
        Map<Object, Object> contextMap = new HashMap();
        Iterator var3 = this.objectTypeNodes.iterator();

        while (var3.hasNext()) {
            ObjectTypeNode node = (ObjectTypeNode) var3.next();
            objectTypeActivities.add((ObjectTypeActivity) node.newActivity(contextMap));
        }

        Map<String, List<ReteInstanceUnit>> activationGroupReteInstancesMap = this.buildGroupRetesInstance(this.activationGroupRetesMap);
        Map<String, List<ReteInstanceUnit>> agendaGroupReteInstancesMap = this.buildGroupRetesInstance(this.agendaGroupRetesMap);
        return new ReteInstance(objectTypeActivities, activationGroupReteInstancesMap, agendaGroupReteInstancesMap);
    }

    private Map<String, List<ReteInstanceUnit>> buildGroupRetesInstance(Map<String, List<ReteUnit>> groupRetesMap) {
        if (groupRetesMap == null) {
            return null;
        } else {
            Map<String, List<ReteInstanceUnit>> map = new HashMap();
            Iterator var3 = groupRetesMap.keySet().iterator();

            while (var3.hasNext()) {
                String name = (String) var3.next();
                List<ReteUnit> reteList = (List) groupRetesMap.get(name);
                Iterator var6 = reteList.iterator();

                while (var6.hasNext()) {
                    ReteUnit unit = (ReteUnit) var6.next();
                    List<ReteInstanceUnit> instances = (List) map.get(name);
                    if (instances == null) {
                        instances = new ArrayList();
                        map.put(name, instances);
                    }

                    Rete rete = unit.getRete();
                    ReteInstance ins = rete.newReteInstance();
                    ReteInstanceUnit insUnit = new ReteInstanceUnit(ins, unit.getRuleName());
                    insUnit.setEffectiveDate(unit.getEffectiveDate());
                    insUnit.setExpiresDate(unit.getExpiresDate());
                    ((List) instances).add(insUnit);
                }
            }

            return map;
        }
    }
}
