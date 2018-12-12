package com.bstek.urule.parse.scorecard;

import com.bstek.urule.Configure;
import com.bstek.urule.builder.RulesRebuilder;
import com.bstek.urule.exception.RuleException;
import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.model.library.ResourceLibrary;
import com.bstek.urule.model.rule.Library;
import com.bstek.urule.model.rule.LibraryType;
import com.bstek.urule.model.rule.Value;
import com.bstek.urule.model.scorecard.AssignTargetType;
import com.bstek.urule.model.scorecard.ComplexColumn;
import com.bstek.urule.model.scorecard.ComplexScorecardDefinition;
import com.bstek.urule.model.scorecard.ScoringType;
import com.bstek.urule.model.table.Cell;
import com.bstek.urule.model.table.Condition;
import com.bstek.urule.model.table.Row;
import com.bstek.urule.parse.Parser;
import com.bstek.urule.parse.table.CellParser;
import com.bstek.urule.parse.table.RowParser;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.dom4j.Element;

/**
 * @author fred
 * 2018-12-12 2:11 PM
 */
public class ComplexScorecardParser implements Parser<ComplexScorecardDefinition> {
    private RowParser rowParser;
    private ComplexColumnParser columnParser;
    private CellParser cellParser;
    private RulesRebuilder rulesRebuilder;

    public ComplexScorecardParser() {
    }

    public ComplexScorecardDefinition parse(Element element) {
        ComplexScorecardDefinition card = new ComplexScorecardDefinition();
        card.setScoringType(ScoringType.valueOf(element.attributeValue("scoring-type")));
        card.setScoringBean(element.attributeValue("custom-scoring-bean"));
        card.setAssignTargetType(AssignTargetType.valueOf(element.attributeValue("assign-target-type")));
        card.setVariableCategory(element.attributeValue("var-category"));
        card.setVariableName(element.attributeValue("var"));
        card.setVariableLabel(element.attributeValue("var-label"));
        String dt = element.attributeValue("datatype");
        if (StringUtils.isNotBlank(dt)) {
            card.setDatatype(Datatype.valueOf(dt));
        }

        String salience = element.attributeValue("salience");
        if (StringUtils.isNotEmpty(salience)) {
            card.setSalience(Integer.valueOf(salience));
        }

        String effectiveDate = element.attributeValue("effective-date");
        SimpleDateFormat sd = new SimpleDateFormat(Configure.getDateFormat());
        if (StringUtils.isNotEmpty(effectiveDate)) {
            try {
                card.setEffectiveDate(sd.parse(effectiveDate));
            } catch (ParseException var15) {
                throw new RuleException(var15);
            }
        }

        String expiresDate = element.attributeValue("expires-date");
        if (StringUtils.isNotEmpty(expiresDate)) {
            try {
                card.setExpiresDate(sd.parse(expiresDate));
            } catch (ParseException var14) {
                throw new RuleException(var14);
            }
        }

        String enabled = element.attributeValue("enabled");
        if (StringUtils.isNotEmpty(enabled)) {
            card.setEnabled(Boolean.valueOf(enabled));
        }

        String debug = element.attributeValue("debug");
        if (StringUtils.isNotEmpty(debug)) {
            card.setDebug(Boolean.valueOf(debug));
        }

        Iterator var10 = element.elements().iterator();

        while (var10.hasNext()) {
            Object obj = var10.next();
            if (obj != null && obj instanceof Element) {
                Element ele = (Element) obj;
                String name = ele.getName();
                if (this.rowParser.support(name)) {
                    card.addRow(this.rowParser.parse(ele));
                } else if (this.columnParser.support(name)) {
                    card.addColumn(this.columnParser.parse(ele));
                } else if (this.cellParser.support(name)) {
                    card.addCell(this.cellParser.parse(ele));
                }

                if (name.equals("import-variable-library")) {
                    card.addLibrary(new Library(ele.attributeValue("path"), null, LibraryType.Variable));
                } else if (name.equals("import-constant-library")) {
                    card.addLibrary(new Library(ele.attributeValue("path"), null, LibraryType.Constant));
                } else if (name.equals("import-action-library")) {
                    card.addLibrary(new Library(ele.attributeValue("path"), null, LibraryType.Action));
                } else if (name.equals("import-parameter-library")) {
                    card.addLibrary(new Library(ele.attributeValue("path"), null, LibraryType.Parameter));
                } else if (name.equals("remark")) {
                    card.setRemark(ele.getText());
                }
            }
        }

        this.rebuildComplexCard(card);
        return card;
    }

    private void rebuildComplexCard(ComplexScorecardDefinition table) {
        List<Library> libraries = table.getLibraries();
        ResourceLibrary resLibraries = this.rulesRebuilder.getResourceLibraryBuilder().buildResourceLibrary(libraries);
        Map<String, String> namedMap = new HashMap();
        Iterator var5 = table.getCellMap().values().iterator();

        while (true) {
            while (var5.hasNext()) {
                Cell cell = (Cell) var5.next();
                if (cell.getAction() != null) {
                    this.rulesRebuilder.rebuildAction(cell.getAction(), resLibraries, namedMap, false);
                } else if (cell.getValue() != null) {
                    this.rulesRebuilder.rebuildValue(cell.getValue(), resLibraries, namedMap, false);
                } else if (cell.getJoint() != null && cell.getJoint() != null && cell.getJoint().getJunction() != null) {
                    List<Condition> conditions = cell.getJoint().getConditions();
                    if (conditions != null) {
                        Iterator var8 = conditions.iterator();

                        while (var8.hasNext()) {
                            Condition condition = (Condition) var8.next();
                            Value value = condition.getValue();
                            if (value != null) {
                                this.rulesRebuilder.rebuildValue(value, resLibraries, namedMap, false);
                            }
                        }
                    }
                }
            }

            Collections.sort(table.getColumns(), new Comparator<ComplexColumn>() {
                public int compare(ComplexColumn o1, ComplexColumn o2) {
                    return o1.getNum() - o2.getNum();
                }
            });
            Collections.sort(table.getRows(), new Comparator<Row>() {
                public int compare(Row o1, Row o2) {
                    return o1.getNum() - o2.getNum();
                }
            });
            return;
        }
    }

    public boolean support(String name) {
        return name.equals("complex-scorecard");
    }

    public void setColumnParser(ComplexColumnParser columnParser) {
        this.columnParser = columnParser;
    }

    public void setRowParser(RowParser rowParser) {
        this.rowParser = rowParser;
    }

    public void setCellParser(CellParser cellParser) {
        this.cellParser = cellParser;
    }

    public void setRulesRebuilder(RulesRebuilder rulesRebuilder) {
        this.rulesRebuilder = rulesRebuilder;
    }
}
