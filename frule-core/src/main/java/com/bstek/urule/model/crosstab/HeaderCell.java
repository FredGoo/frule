package com.bstek.urule.model.crosstab;

/**
 * @author fred
 * 2018-11-05 6:46 PM
 */
public class HeaderCell {
    private int rowspan;
    private int colspan;
    private String text;

    public HeaderCell() {
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

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
