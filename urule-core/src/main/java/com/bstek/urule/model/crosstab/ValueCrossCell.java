package com.bstek.urule.model.crosstab;

import com.bstek.urule.model.rule.Value;

/**
 * @author fred
 * 2018-11-05 6:48 PM
 */
public class ValueCrossCell extends CrossCell {
    private Value value;

    public ValueCrossCell() {
    }

    public String getType() {
        return "value";
    }

    public Value getValue() {
        return this.value;
    }

    public void setValue(Value value) {
        this.value = value;
    }
}
