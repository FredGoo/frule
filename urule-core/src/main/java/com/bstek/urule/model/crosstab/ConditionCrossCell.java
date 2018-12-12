package com.bstek.urule.model.crosstab;

import com.bstek.urule.model.table.Joint;

/**
 * @author fred
 * 2018-11-05 6:45 PM
 */
public class ConditionCrossCell extends CrossCell {
    private Joint joint;

    public ConditionCrossCell() {
    }

    public String getType() {
        return "condition";
    }

    public Joint getJoint() {
        return this.joint;
    }

    public void setJoint(Joint joint) {
        this.joint = joint;
    }

}
