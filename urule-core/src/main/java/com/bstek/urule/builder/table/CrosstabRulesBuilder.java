package com.bstek.urule.builder.table;

import com.bstek.urule.action.VariableAssignAction;
import com.bstek.urule.model.crosstab.*;
import com.bstek.urule.model.rule.Rhs;
import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.model.rule.Value;
import com.bstek.urule.model.rule.lhs.*;
import com.bstek.urule.model.table.Condition;
import com.bstek.urule.model.table.Joint;
import com.bstek.urule.model.table.JointType;

import java.util.*;

/**
 * @author fred
 * 2018-11-05 6:53 PM
 */
public class CrosstabRulesBuilder {
    public CrosstabRulesBuilder() {
    }

    public List<Rule> buildRules(CrosstabDefinition crosstab) {
        List<Rule> rules = new ArrayList();
        List<CellRange> topRanges = new ArrayList();
        List<CellRange> leftRanges = new ArrayList();
        Map<String, CrossCell> cellsMap = this.buildCellsMap(crosstab.getCells());
        List<CrossRow> rows = crosstab.getRows();
        List<CrossColumn> columns = crosstab.getColumns();
        List<CellRange> valueCellRanges = new ArrayList();

        for (int i = 0; i < rows.size(); ++i) {
            CrossRow row = (CrossRow) rows.get(i);

            for (int j = 0; j < columns.size(); ++j) {
                CellRange range = null;
                CrossCell cell = (CrossCell) cellsMap.get(i + 1 + "," + (j + 1));
                if (cell != null) {
                    if (row instanceof TopRow) {
                        TopRow topRow = (TopRow) row;
                        this.addTopCell(cell, topRanges, topRow);
                    } else {
                        CrossColumn col = (CrossColumn) columns.get(j);
                        range = this.addLeftCell(cell, leftRanges, col);
                        if (cell instanceof ValueCrossCell) {
                            valueCellRanges.add(range);
                        }
                    }
                }
            }
        }

        Iterator var20 = valueCellRanges.iterator();

        while (var20.hasNext()) {
            CellRange range = (CellRange) var20.next();
            CrossCell cell = range.getCell();
            Rule rule = new Rule();
            rule.setDebug(crosstab.getDebug());
            rule.setSalience(crosstab.getSalience());
            rule.setExpiresDate(crosstab.getExpiresDate());
            rule.setEffectiveDate(crosstab.getEffectiveDate());
            rule.setEnabled(crosstab.getEnabled());
            rule.setName("CR" + cell.getRow() + "-" + cell.getCol());
            Lhs lhs = new Lhs();
            And and = new And();
            lhs.setCriterion(and);
            rule.setLhs(lhs);
            Rhs rhs = new Rhs();
            rule.setRhs(rhs);
            rules.add(rule);
            ValueCrossCell valueCrossCell = (ValueCrossCell) cell;
            Value value = valueCrossCell.getValue();
            VariableAssignAction variableAssignAction = new VariableAssignAction();
            variableAssignAction.setValue(value);
            variableAssignAction.setDatatype(crosstab.getAssignDatatype());
            variableAssignAction.setVariableName(crosstab.getAssignVariable());
            variableAssignAction.setVariableLabel(crosstab.getAssignVariableLabel());
            variableAssignAction.setVariableCategory(crosstab.getAssignVariableCategory());
            rhs.addAction(variableAssignAction);
            this.buildLHS(and, range);
            CellRange topParentRange = this.findTopRowParentRange(topRanges, range.getCell().getCol());
            range.setParentRange(topParentRange);
            this.buildLHS(and, range);
        }

        return rules;
    }

    private CellRange findTopRowParentRange(List<CellRange> topRanges, int colNumber) {
        CellRange targetRange = null;
        Iterator var4 = topRanges.iterator();

        while (var4.hasNext()) {
            CellRange range = (CellRange) var4.next();
            if (range.getStart() == colNumber && range.getEnd() == colNumber) {
                targetRange = range;
                break;
            }

            targetRange = this.findTopRowParentRange(range.getChildren(), colNumber);
            if (targetRange != null) {
                break;
            }
        }

        return targetRange;
    }

    private void buildLHS(And and, CellRange range) {
        CellRange parentRange = range.getParentRange();
        if (parentRange != null) {
            ConditionCrossCell cell = (ConditionCrossCell) parentRange.getCell();
            Criterion criterion = this.buildCriterion(cell, parentRange);
            if (criterion != null) {
                and.addCriterion(criterion);
            }

            this.buildLHS(and, parentRange);
        }
    }

    public Criterion buildCriterion(ConditionCrossCell cell, CellRange range) {
        Joint joint = cell.getJoint();
        if (joint == null) {
            return null;
        } else {
            List<Condition> conditions = joint.getConditions();
            List<Joint> joints = joint.getJoints();
            if ((conditions == null || conditions.size() == 0) && (joints == null || joints.size() == 0)) {
                return null;
            } else {
                Junction topJunction = null;
                if (conditions.size() == 1) {
                    return this.newCriteria((Condition) conditions.get(0), range);
                } else {
                    if (joint.getType().equals(JointType.and)) {
                        topJunction = new And();
                    } else {
                        topJunction = new Or();
                    }

                    this.buildConditionsCriterion(conditions, (Junction) topJunction, range);
                    this.buildJointsCriterion(joints, (Junction) topJunction, range);
                    return (Criterion) topJunction;
                }
            }
        }
    }

    private void buildJointsCriterion(List<Joint> joints, Junction parentJunction, CellRange range) {
        if (joints != null && joints.size() != 0) {
            Iterator var4 = joints.iterator();

            while (var4.hasNext()) {
                Joint joint = (Joint) var4.next();
                Junction junction = joint.getJunction();
                List<Condition> conditions = joint.getConditions();
                this.buildConditionsCriterion(conditions, junction, range);
                List<Joint> children = joint.getJoints();
                this.buildJointsCriterion(children, junction, range);
                parentJunction.addCriterion(junction);
            }

        }
    }

    private void buildConditionsCriterion(List<Condition> conditions, Junction junction, CellRange range) {
        if (conditions != null && conditions.size() != 0) {
            Iterator var4 = conditions.iterator();

            while (var4.hasNext()) {
                Condition condition = (Condition) var4.next();
                Criteria criteria = this.newCriteria(condition, range);
                junction.addCriterion(criteria);
            }

        }
    }

    private Criteria newCriteria(Condition condition, CellRange range) {
        Criteria criteria = new Criteria();
        Left left = new Left();
        VariableLeftPart part = new VariableLeftPart();
        part.setVariableCategory(range.getVariableCategory());
        part.setVariableName(range.getVariableName());
        part.setVariableLabel(range.getVariableLabel());
        part.setDatatype(range.getDatatype());
        left.setLeftPart(part);
        left.setType(LeftType.variable);
        criteria.setLeft(left);
        criteria.setOp(condition.getOp());
        criteria.setValue(condition.getValue());
        return criteria;
    }

    private CellRange addTopCell(CrossCell cell, List<CellRange> ranges, TopRow row) {
        int start = cell.getCol();
        int colspan = cell.getColspan();
        if (colspan > 0) {
            --colspan;
        }

        int end = start + colspan;
        CellRange range = new CellRange();
        range.setStart(start);
        range.setEnd(end);
        range.setCell(cell);
        range.setVariableCategory(row.getVariableCategory());
        range.setVariableName(row.getVariableName());
        range.setVariableLabel(row.getVariableLabel());
        range.setDatatype(row.getDatatype());
        if (start == 1) {
            ranges.add(range);
        } else {
            CellRange parentRange = this.findParentRange(start, end, ranges);
            if (parentRange != null) {
                parentRange.addChildRange(range);
            } else {
                ranges.add(range);
            }
        }

        return range;
    }

    private CellRange addLeftCell(CrossCell cell, List<CellRange> ranges, CrossColumn col) {
        int start = cell.getRow();
        int rowspan = cell.getRowspan();
        if (rowspan > 0) {
            --rowspan;
        }

        int end = start + rowspan;
        CellRange range = new CellRange();
        range.setStart(start);
        range.setEnd(end);
        range.setCell(cell);
        if (col instanceof LeftColumn) {
            LeftColumn leftCol = (LeftColumn) col;
            range.setVariableCategory(leftCol.getVariableCategory());
            range.setVariableName(leftCol.getVariableName());
            range.setVariableLabel(leftCol.getVariableLabel());
            range.setDatatype(leftCol.getDatatype());
        }

        if (start == 1) {
            ranges.add(range);
        } else {
            CellRange parentRange = this.findParentRange(start, end, ranges);
            if (parentRange != null) {
                parentRange.addChildRange(range);
            } else {
                ranges.add(range);
            }
        }

        return range;
    }

    private CellRange findParentRange(int start, int end, List<CellRange> ranges) {
        CellRange targetRange = null;
        Iterator var5 = ranges.iterator();

        while (var5.hasNext()) {
            CellRange r = (CellRange) var5.next();
            boolean contain = false;
            if (!r.isValueCell() && r.getStart() <= start && r.getEnd() >= end) {
                contain = true;
            }

            if (contain) {
                List<CellRange> children = r.getChildren();
                if (children.size() > 0) {
                    targetRange = this.findParentRange(start, end, children);
                }

                if (targetRange == null) {
                    targetRange = r;
                }
                break;
            }
        }

        return targetRange;
    }

    private Map<String, CrossCell> buildCellsMap(List<CrossCell> cells) {
        Map<String, CrossCell> map = new HashMap();
        Iterator var3 = cells.iterator();

        while (var3.hasNext()) {
            CrossCell cell = (CrossCell) var3.next();
            String key = cell.getRow() + "," + cell.getCol();
            map.put(key, cell);
        }

        return map;
    }

}
