package com.bstek.urule.builder.resource;

import com.bstek.urule.action.ScoringAction;
import com.bstek.urule.builder.KnowledgeBase;
import com.bstek.urule.builder.ResourceLibraryBuilder;
import com.bstek.urule.builder.RulesRebuilder;
import com.bstek.urule.builder.table.CellContentBuilder;
import com.bstek.urule.exception.RuleException;
import com.bstek.urule.model.library.ResourceLibrary;
import com.bstek.urule.model.rete.Rete;
import com.bstek.urule.model.rete.builder.ReteBuilder;
import com.bstek.urule.model.rule.Rhs;
import com.bstek.urule.model.rule.Rule;
import com.bstek.urule.model.rule.Value;
import com.bstek.urule.model.rule.lhs.And;
import com.bstek.urule.model.rule.lhs.Criterion;
import com.bstek.urule.model.rule.lhs.Lhs;
import com.bstek.urule.model.scorecard.ComplexColumn;
import com.bstek.urule.model.scorecard.ComplexColumnType;
import com.bstek.urule.model.scorecard.ComplexScorecardDefinition;
import com.bstek.urule.model.scorecard.runtime.ScoreRule;
import com.bstek.urule.model.table.Cell;
import com.bstek.urule.model.table.Row;
import com.bstek.urule.parse.deserializer.ComplexScorecardDeserializer;
import com.bstek.urule.runtime.KnowledgePackageWrapper;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.Element;

/**
 * @author fred
 */
public class ComplexScorecardRulesBuilder implements ResourceBuilder<ScoreRule> {
    private ReteBuilder reteBuilder;
    private ResourceLibraryBuilder resourceLibraryBuilder;
    private RulesRebuilder rulesRebuilder;
    private CellContentBuilder cellContentBuilder;
    private ComplexScorecardDeserializer complexScorecardDeserializer;

    public ComplexScorecardRulesBuilder() {
    }

    public ScoreRule build(Element root) {
        ComplexScorecardDefinition scorecard = this.complexScorecardDeserializer.deserialize(root);
        ScoreRule scoreRule = new ScoreRule();
        scoreRule.setName("scc");
        scoreRule.setEffectiveDate(scorecard.getEffectiveDate());
        scoreRule.setExpiresDate(scorecard.getExpiresDate());
        scoreRule.setEnabled(scorecard.getEnabled());
        scoreRule.setSalience(scorecard.getSalience());
        scoreRule.setDebug(scorecard.getDebug());
        scoreRule.setScoringBean(scorecard.getScoringBean());
        scoreRule.setScoringType(scorecard.getScoringType());
        scoreRule.setAssignTargetType(scorecard.getAssignTargetType());
        scoreRule.setDatatype(scorecard.getDatatype());
        scoreRule.setVariableCategory(scorecard.getVariableCategory());
        scoreRule.setVariableName(scorecard.getVariableName());
        scoreRule.setVariableLabel(scorecard.getVariableLabel());
        scoreRule.setLibraries(scorecard.getLibraries());
        List<Rule> rules = new ArrayList();
        List<Row> rows = scorecard.getRows();
        List<ComplexColumn> columns = scorecard.getColumns();
        Iterator var7 = rows.iterator();

        while (var7.hasNext()) {
            Row row = (Row) var7.next();
            Rule rule = new Rule();
            rule.setDebug(scorecard.getDebug());
            rule.setSalience(scorecard.getSalience());
            rule.setExpiresDate(scorecard.getExpiresDate());
            rule.setEffectiveDate(scorecard.getEffectiveDate());
            rule.setEnabled(scorecard.getEnabled());
            rule.setName("sccr" + row.getNum());
            Lhs lhs = new Lhs();
            And and = new And();
            rule.setLhs(lhs);
            Rhs rhs = new Rhs();
            rule.setRhs(rhs);
            rules.add(rule);
            Value value = null;
            Iterator var14 = columns.iterator();

            while (var14.hasNext()) {
                ComplexColumn col = (ComplexColumn) var14.next();
                Cell cell = this.getCell(scorecard, row.getNum(), col.getNum());
                ComplexColumnType type = col.getType();
                ScoringAction action;
                switch (type) {
                    case Criteria:
                        Criterion criterion = this.cellContentBuilder.buildCriterion(cell, col);
                        if (criterion != null) {
                            and.addCriterion(criterion);
                        }
                        break;
                    case Score:
                        value = cell.getValue();
                        if (value != null) {
                            action = new ScoringAction(row.getNum(), "scoring_value", null);
                            action.setValue(value);
                            rhs.addAction(action);
                        }
                        break;
                    case Custom:
                        value = cell.getValue();
                        if (value != null) {
                            action = new ScoringAction(row.getNum(), col.getCustomLabel(), null);
                            action.setValue(value);
                            rhs.addAction(action);
                        }
                }
            }

            if (and.getCriterions() != null && and.getCriterions().size() > 0) {
                lhs.setCriterion(and);
            }
        }

        this.rulesRebuilder.rebuildRules(scorecard.getLibraries(), rules);
        ResourceLibrary resourceLibrary = this.resourceLibraryBuilder.buildResourceLibrary(scorecard.getLibraries());
        Rete rete = this.reteBuilder.buildRete(rules, resourceLibrary);
        KnowledgeBase base = new KnowledgeBase(rete);
        KnowledgePackageWrapper knowledgePackageWrapper = new KnowledgePackageWrapper(base.getKnowledgePackage());
        scoreRule.setKnowledgePackageWrapper(knowledgePackageWrapper);
        return scoreRule;
    }

    private Cell getCell(ComplexScorecardDefinition table, int row, int column) {
        Map<String, Cell> cellMap = table.getCellMap();
        Cell cell = null;

        for (int i = row; i > -1; --i) {
            String key = table.buildCellKey(i, column);
            if (cellMap.containsKey(key)) {
                cell = cellMap.get(key);
                break;
            }
        }

        if (cell == null) {
            throw new RuleException("Decision table cell[" + row + "," + column + "] not exist.");
        } else {
            return cell;
        }
    }

    public void setCellContentBuilder(CellContentBuilder cellContentBuilder) {
        this.cellContentBuilder = cellContentBuilder;
    }

    public void setComplexScorecardDeserializer(ComplexScorecardDeserializer complexScorecardDeserializer) {
        this.complexScorecardDeserializer = complexScorecardDeserializer;
    }

    public void setResourceLibraryBuilder(ResourceLibraryBuilder resourceLibraryBuilder) {
        this.resourceLibraryBuilder = resourceLibraryBuilder;
    }

    public void setReteBuilder(ReteBuilder reteBuilder) {
        this.reteBuilder = reteBuilder;
    }

    public void setRulesRebuilder(RulesRebuilder rulesRebuilder) {
        this.rulesRebuilder = rulesRebuilder;
    }

    public boolean support(Element root) {
        return this.complexScorecardDeserializer.support(root);
    }

    public ResourceType getType() {
        return ResourceType.ComplexScorecard;
    }
}
