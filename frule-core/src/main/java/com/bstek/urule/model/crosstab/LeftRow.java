package com.bstek.urule.model.crosstab;

/**
 * @author fred
 * 2018-11-05 6:47 PM
 */
public class LeftRow implements CrossRow {
    private int rowNumber;

    public LeftRow() {
    }

    public int getRowNumber() {
        return this.rowNumber;
    }

    public void setRowNumber(int rowNumber) {
        this.rowNumber = rowNumber;
    }

    public String getType() {
        return "left";
    }
}
