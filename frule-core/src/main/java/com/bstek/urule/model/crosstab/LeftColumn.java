package com.bstek.urule.model.crosstab;

/**
 * @author fred
 * 2018-11-05 6:46 PM
 */
public class LeftColumn extends BundleData implements CrossColumn {
    private int columnNumber;

    public LeftColumn() {
    }

    public int getColumnNumber() {
        return this.columnNumber;
    }

    public void setColumnNumber(int columnNumber) {
        this.columnNumber = columnNumber;
    }

    public String getType() {
        return "left";
    }
}
