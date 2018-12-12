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
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.bstek.urule.model.rule.lhs.BaseCriteria;

/**
 * @author Jacky.gao
 * 2015年1月8日
 */
public class AndActivity extends JoinActivity {
    private boolean passed = false;
    private FactTracker currentTracker;
    private List<Path> fromPaths = new ArrayList();

    public AndActivity() {
    }

    public Collection<FactTracker> enter(EvaluationContext context, Object obj, FactTracker tracker) {
        if (this.currentTracker != null) {
            Map<Object, List<BaseCriteria>> map = tracker.getObjectCriteriaMap();
            Map<Object, List<BaseCriteria>> currentMap = this.currentTracker.getObjectCriteriaMap();
            Iterator var6 = currentMap.keySet().iterator();

            while (var6.hasNext()) {
                Object key = var6.next();
                if (!map.containsKey(key)) {
                    map.put(key, currentMap.get(key));
                }
            }
        }

        this.currentTracker = tracker;
        if (this.isAllPassed()) {
            List<FactTracker> allTrackers = new ArrayList();
            List<FactTracker> trackers = this.visitPaths(context, obj, tracker);
            if (trackers != null && trackers.size() > 0) {
                allTrackers.addAll(trackers);
            }

            return allTrackers;
        } else {
            return null;
        }
    }

    private boolean isAllPassed() {
        Iterator var1 = this.fromPaths.iterator();

        Path path;
        do {
            if (!var1.hasNext()) {
                return true;
            }

            path = (Path) var1.next();
        } while (path.isPassed());

        return false;
    }

    public void addFromPath(Path fromPath) {
        this.fromPaths.add(fromPath);
    }

    public void passAndNode() {
        this.passed = true;
        this.doPassAndNode();
    }

    public boolean joinNodeIsPassed() {
        if (!this.passed) {
            List<Path> paths = this.getPaths();
            if (paths.size() == 1) {
                Path path = (Path) paths.get(0);
                AbstractActivity activity = (AbstractActivity) path.getTo();
                return activity.joinNodeIsPassed();
            }
        }

        return this.passed;
    }

    public void reset() {
        this.currentTracker = null;
        this.passed = false;
    }
}
