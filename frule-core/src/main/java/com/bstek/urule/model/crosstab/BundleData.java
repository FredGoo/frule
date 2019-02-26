package com.bstek.urule.model.crosstab;

import com.bstek.urule.model.library.Datatype;

/**
 * @author fred
 * 2018-11-05 6:44 PM
 */
public abstract class BundleData {
    private String bundleDataType;
    private String variableCategory;
    private String variableLabel;
    private String variableName;
    private Datatype datatype;

    public BundleData() {
    }

    public String getBundleDataType() {
        return this.bundleDataType;
    }

    public void setBundleDataType(String bundleDataType) {
        this.bundleDataType = bundleDataType;
    }

    public String getVariableCategory() {
        return this.variableCategory;
    }

    public void setVariableCategory(String variableCategory) {
        this.variableCategory = variableCategory;
    }

    public String getVariableLabel() {
        return this.variableLabel;
    }

    public void setVariableLabel(String variableLabel) {
        this.variableLabel = variableLabel;
    }

    public String getVariableName() {
        return this.variableName;
    }

    public void setVariableName(String variableName) {
        this.variableName = variableName;
    }

    public Datatype getDatatype() {
        return this.datatype;
    }

    public void setDatatype(Datatype datatype) {
        this.datatype = datatype;
    }

}
