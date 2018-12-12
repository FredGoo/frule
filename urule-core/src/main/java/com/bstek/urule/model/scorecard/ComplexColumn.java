package com.bstek.urule.model.scorecard;

/**
 * @author fred
 * 2018-12-12 2:06 PM
 */
public class ComplexColumn {
    private int num;
    private int width;
    private String variableCategory;
    private ComplexColumnType type;
    private String customLabel;

    public ComplexColumn() {
    }

    public int getNum() {
        return this.num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getWidth() {
        return this.width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getVariableCategory() {
        return this.variableCategory;
    }

    public void setVariableCategory(String variableCategory) {
        this.variableCategory = variableCategory;
    }

    public ComplexColumnType getType() {
        return this.type;
    }

    public void setType(ComplexColumnType type) {
        this.type = type;
    }

    public String getCustomLabel() {
        return this.customLabel;
    }

    public void setCustomLabel(String customLabel) {
        this.customLabel = customLabel;
    }
}
