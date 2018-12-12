package com.bstek.urule.model.crosstab;

/**
 * @author fred
 * 2018-11-05 6:44 PM
 */
public abstract class CrossCell {
    private int row;
    private int col;
    private int rowspan;
    private int colspan;

    public CrossCell() {
    }

    public abstract String getType();

    public int getRow() {
        return this.row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getCol() {
        return this.col;
    }

    public void setCol(int col) {
        this.col = col;
    }

    public int getRowspan() {
        return this.rowspan;
    }

    public void setRowspan(int rowspan) {
        this.rowspan = rowspan;
    }

    public int getColspan() {
        return this.colspan;
    }

    public void setColspan(int colspan) {
        this.colspan = colspan;
    }

}
