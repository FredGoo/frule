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

import java.util.List;
import java.util.Map;

/**
 * @author Jacky.gao
 * 2015年1月8日
 */
public class OrActivity extends JoinActivity {
    private boolean passed;

    public OrActivity() {
    }

    public List<FactTracker> enter(EvaluationContext context, Object obj, FactTracker tracker) {
        if (this.passed) {
            return null;
        } else {
            this.passed = true;
            return this.visitPaths(context, obj, tracker);
        }
    }

    public void passAndNode() {
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
        this.passed = false;
    }
}
