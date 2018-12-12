//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.bstek.urule.runtime.rete;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

public abstract class AbstractActivity implements Activity {
    private List<Path> paths;

    public AbstractActivity() {
    }

    public List<Path> getPaths() {
        return this.paths;
    }

    public void addPath(Path path) {
        if (this.paths == null) {
            this.paths = new ArrayList();
        }

        this.paths.add(path);
    }

    protected List<FactTracker> visitPaths(EvaluationContext context, Object obj, FactTracker tracker) {
        if (this.paths != null && this.paths.size() != 0) {
            List<FactTracker> trackers = null;
            int size = this.paths.size();
            Iterator var6 = this.paths.iterator();

            while (var6.hasNext()) {
                Path path = (Path) var6.next();
                Collection<FactTracker> results = null;
                Activity activity = path.getTo();
                path.setPassed(true);
                if (size > 0) {
                    results = activity.enter(context, obj, tracker.newSubFactTracker());
                } else {
                    results = activity.enter(context, obj, tracker);
                }

                if (results != null) {
                    if (trackers == null) {
                        trackers = new ArrayList();
                    }

                    trackers.addAll(results);
                }
            }

            return trackers;
        } else {
            return null;
        }
    }

    protected void doPassAndNode() {
        List<Path> paths = this.getPaths();
        if (paths != null) {
            Iterator var2 = paths.iterator();

            while (var2.hasNext()) {
                Path path = (Path) var2.next();
                AbstractActivity activity = (AbstractActivity) path.getTo();
                activity.passAndNode();
            }

        }
    }

    public abstract boolean joinNodeIsPassed();

    public abstract void passAndNode();

    public abstract void reset();
}
