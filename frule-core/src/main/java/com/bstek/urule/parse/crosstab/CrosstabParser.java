package com.bstek.urule.parse.crosstab;

import com.bstek.urule.Configure;
import com.bstek.urule.exception.RuleException;
import com.bstek.urule.model.crosstab.CrossCell;
import com.bstek.urule.model.crosstab.CrossColumn;
import com.bstek.urule.model.crosstab.CrossRow;
import com.bstek.urule.model.crosstab.CrosstabDefinition;
import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.model.rule.Library;
import com.bstek.urule.model.rule.LibraryType;
import com.bstek.urule.parse.Parser;
import org.apache.commons.lang.StringUtils;
import org.dom4j.Element;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @author fred
 * 2018-11-05 6:49 PM
 */
public class CrosstabParser implements Parser<CrosstabDefinition> {
    private CrossRowParser crossRowParser;
    private CrossColumnParser crossColumnParser;
    private HeaderCellParser headerCellParser;
    private ConditionCrossCellParser conditionCrossCellParser;
    private ValueCrossCellParser valueCrossCellParser;

    public CrosstabParser() {
    }

    public CrosstabDefinition parse(Element element) {
        CrosstabDefinition table = new CrosstabDefinition();
        table.setAssignTargetType(element.attributeValue("assign-target-type"));
        table.setAssignVariableCategory(element.attributeValue("var-category"));
        table.setAssignVariable(element.attributeValue("var"));
        table.setAssignVariableLabel(element.attributeValue("var-label"));
        String datatype = element.attributeValue("datatype");
        if (StringUtils.isNotBlank(datatype)) {
            table.setAssignDatatype(Datatype.valueOf(datatype));
        }

        String salience = element.attributeValue("salience");
        if (StringUtils.isNotEmpty(salience)) {
            table.setSalience(Integer.valueOf(salience));
        }

        String effectiveDate = element.attributeValue("effective-date");
        SimpleDateFormat sd = new SimpleDateFormat(Configure.getDateFormat());
        if (StringUtils.isNotEmpty(effectiveDate)) {
            try {
                table.setEffectiveDate(sd.parse(effectiveDate));
            } catch (ParseException var18) {
                throw new RuleException(var18);
            }
        }

        String expiresDate = element.attributeValue("expires-date");
        if (StringUtils.isNotEmpty(expiresDate)) {
            try {
                table.setExpiresDate(sd.parse(expiresDate));
            } catch (ParseException var17) {
                throw new RuleException(var17);
            }
        }

        String enabled = element.attributeValue("enabled");
        if (StringUtils.isNotEmpty(enabled)) {
            table.setEnabled(Boolean.valueOf(enabled));
        }

        String debug = element.attributeValue("debug");
        if (StringUtils.isNotEmpty(debug)) {
            table.setDebug(Boolean.valueOf(debug));
        }

        List<CrossCell> cells = new ArrayList();
        List<CrossRow> rows = new ArrayList();
        List<CrossColumn> columns = new ArrayList();
        table.setCells(cells);
        table.setRows(rows);
        table.setColumns(columns);
        Iterator var13 = element.elements().iterator();

        while (var13.hasNext()) {
            Object obj = var13.next();
            if (obj != null && obj instanceof Element) {
                Element ele = (Element) obj;
                String name = ele.getName();
                if (this.conditionCrossCellParser.support(name)) {
                    cells.add(this.conditionCrossCellParser.parse(ele));
                } else if (this.valueCrossCellParser.support(name)) {
                    cells.add(this.valueCrossCellParser.parse(ele));
                } else if (this.crossRowParser.support(name)) {
                    rows.add(this.crossRowParser.parse(ele));
                } else if (this.crossColumnParser.support(name)) {
                    columns.add(this.crossColumnParser.parse(ele));
                } else if (name.equals("import-variable-library")) {
                    table.addLibrary(new Library(ele.attributeValue("path"), (String) null, LibraryType.Variable));
                } else if (name.equals("import-constant-library")) {
                    table.addLibrary(new Library(ele.attributeValue("path"), (String) null, LibraryType.Constant));
                } else if (name.equals("import-action-library")) {
                    table.addLibrary(new Library(ele.attributeValue("path"), (String) null, LibraryType.Action));
                } else if (name.equals("import-parameter-library")) {
                    table.addLibrary(new Library(ele.attributeValue("path"), (String) null, LibraryType.Parameter));
                } else if (this.headerCellParser.support(name)) {
                    table.setHeaderCell(this.headerCellParser.parse(ele));
                } else if (name.equals("remark")) {
                    table.setRemark(ele.getText());
                }
            }
        }

        return table;
    }

    public boolean support(String name) {
        return "crosstab".equals(name);
    }

    public void setConditionCrossCellParser(ConditionCrossCellParser conditionCrossCellParser) {
        this.conditionCrossCellParser = conditionCrossCellParser;
    }

    public void setCrossColumnParser(CrossColumnParser crossColumnParser) {
        this.crossColumnParser = crossColumnParser;
    }

    public void setCrossRowParser(CrossRowParser crossRowParser) {
        this.crossRowParser = crossRowParser;
    }

    public void setHeaderCellParser(HeaderCellParser headerCellParser) {
        this.headerCellParser = headerCellParser;
    }

    public void setValueCrossCellParser(ValueCrossCellParser valueCrossCellParser) {
        this.valueCrossCellParser = valueCrossCellParser;
    }
}
