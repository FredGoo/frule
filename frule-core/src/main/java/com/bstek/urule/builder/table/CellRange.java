package com.bstek.urule.builder.table;

import com.bstek.urule.model.crosstab.CrossCell;
import com.bstek.urule.model.crosstab.ValueCrossCell;
import com.bstek.urule.model.library.Datatype;

import java.util.ArrayList;
import java.util.List;

/**
 * @author fred
 * 2018-11-05 6:53 PM
 */
public class CellRange {
    private int start;
    private int end;
    private boolean valueCell;
    private String variableCategory;
    private String variableName;
    private String variableLabel;
    private Datatype datatype;
    private CellRange parentRange;
    private CrossCell cell;
    private List<CellRange> children = new ArrayList();

    CellRange() {
    }

    public int getStart() {
        return this.start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getEnd() {
        return this.end;
    }

    public void setEnd(int end) {
        this.end = end;
    }

    public String getVariableCategory() {
        return this.variableCategory;
    }

    public void setVariableCategory(String variableCategory) {
        this.variableCategory = variableCategory;
    }

    public String getVariableName() {
        return this.variableName;
    }

    public void setVariableName(String variableName) {
        this.variableName = variableName;
    }

    public String getVariableLabel() {
        return this.variableLabel;
    }

    public void setVariableLabel(String variableLabel) {
        this.variableLabel = variableLabel;
    }

    public Datatype getDatatype() {
        return this.datatype;
    }

    public void setDatatype(Datatype datatype) {
        this.datatype = datatype;
    }

    public boolean isValueCell() {
        return this.valueCell;
    }

    public void setValueCell(boolean valueCell) {
        this.valueCell = valueCell;
    }

    public CellRange getParentRange() {
        return this.parentRange;
    }

    public void setParentRange(CellRange parentRange) {
        this.parentRange = parentRange;
    }

    public CrossCell getCell() {
        return this.cell;
    }

    public void setCell(CrossCell cell) {
        if (cell instanceof ValueCrossCell) {
            this.setValueCell(true);
        }

        this.cell = cell;
    }

    public List<CellRange> getChildren() {
        return this.children;
    }

    public void addChildRange(CellRange range) {
        range.setParentRange(this);
        this.children.add(range);
    }

}
