package com.bstek.urule.model.scorecard;

import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.model.rule.Library;
import com.bstek.urule.model.table.Cell;
import com.bstek.urule.model.table.Row;

import java.util.*;

/**
 * @author fred
 * 2018-12-12 2:07 PM
 */
public class ComplexScorecardDefinition {
    private Integer salience;
    private Date effectiveDate;
    private Date expiresDate;
    private Boolean enabled;
    private Boolean debug;
    private String remark;
    private String variableCategory;
    private String variableName;
    private String variableLabel;
    private Datatype datatype;
    private ScoringType scoringType;
    private String scoringBean;
    private AssignTargetType assignTargetType;
    private List<Row> rows;
    private List<ComplexColumn> columns;
    private Map<String, Cell> cellMap;
    private List<Library> libraries;

    public ComplexScorecardDefinition() {
    }

    public Integer getSalience() {
        return this.salience;
    }

    public void setSalience(Integer salience) {
        this.salience = salience;
    }

    public Date getEffectiveDate() {
        return this.effectiveDate;
    }

    public void setEffectiveDate(Date effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public Date getExpiresDate() {
        return this.expiresDate;
    }

    public void setExpiresDate(Date expiresDate) {
        this.expiresDate = expiresDate;
    }

    public Boolean getEnabled() {
        return this.enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Boolean getDebug() {
        return this.debug;
    }

    public void setDebug(Boolean debug) {
        this.debug = debug;
    }

    public String getRemark() {
        return this.remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
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

    public ScoringType getScoringType() {
        return this.scoringType;
    }

    public void setScoringType(ScoringType scoringType) {
        this.scoringType = scoringType;
    }

    public String getScoringBean() {
        return this.scoringBean;
    }

    public void setScoringBean(String scoringBean) {
        this.scoringBean = scoringBean;
    }

    public AssignTargetType getAssignTargetType() {
        return this.assignTargetType;
    }

    public void setAssignTargetType(AssignTargetType assignTargetType) {
        this.assignTargetType = assignTargetType;
    }

    public List<Row> getRows() {
        return this.rows;
    }

    public void addLibrary(Library library) {
        if (this.libraries == null) {
            this.libraries = new ArrayList<>();
        }

        this.libraries.add(library);
    }

    public void addRow(Row row) {
        if (this.rows == null) {
            this.rows = new ArrayList<>();
        }

        this.rows.add(row);
    }

    public void addColumn(ComplexColumn col) {
        if (this.columns == null) {
            this.columns = new ArrayList<>();
        }

        this.columns.add(col);
    }

    public void addCell(Cell cell) {
        if (this.cellMap == null) {
            this.cellMap = new HashMap<>();
        }

        this.cellMap.put(this.buildCellKey(cell.getRow(), cell.getCol()), cell);
    }

    public void setRows(List<Row> rows) {
        this.rows = rows;
    }

    public List<ComplexColumn> getColumns() {
        return this.columns;
    }

    public void setColumns(List<ComplexColumn> columns) {
        this.columns = columns;
    }

    public Map<String, Cell> getCellMap() {
        return this.cellMap;
    }

    public List<Library> getLibraries() {
        return this.libraries;
    }

    public void setLibraries(List<Library> libraries) {
        this.libraries = libraries;
    }

    public String buildCellKey(int row, int col) {
        return row + "," + col;
    }
}
