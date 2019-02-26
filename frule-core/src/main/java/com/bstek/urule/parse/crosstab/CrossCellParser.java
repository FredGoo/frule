package com.bstek.urule.parse.crosstab;

import com.bstek.urule.model.crosstab.CrossCell;
import org.apache.commons.lang.StringUtils;
import org.dom4j.Element;

/**
 * @author fred
 * 2018-11-05 6:50 PM
 */
public abstract class CrossCellParser {
    public CrossCellParser() {
    }

    protected void parseCrossCell(CrossCell cell, Element element) {
        int row = Integer.valueOf(element.attributeValue("row"));
        int col = Integer.valueOf(element.attributeValue("col"));
        String rowspanStr = element.attributeValue("rowspan");
        if (StringUtils.isNotBlank(rowspanStr)) {
            int rowspan = Integer.valueOf(rowspanStr);
            cell.setRowspan(rowspan);
        }

        String colspanStr = element.attributeValue("colspan");
        if (StringUtils.isNotBlank(colspanStr)) {
            int colspan = Integer.valueOf(colspanStr);
            cell.setColspan(colspan);
        }

        cell.setRow(row);
        cell.setCol(col);
    }
}
