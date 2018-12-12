package com.bstek.urule.model.crosstab;

/**
 * @author fred
 * 2018-11-05 6:47 PM
 */
public class TopColumn implements CrossColumn {
    private int columnNumber;

    public TopColumn() {
    }

    public int getColumnNumber() {
        return this.columnNumber;
    }

    public void setColumnNumber(int columnNumber) {
        this.columnNumber = columnNumber;
    }

    public String getType() {
        return "top";
    }
}
