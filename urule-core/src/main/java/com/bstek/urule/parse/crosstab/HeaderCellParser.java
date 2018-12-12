package com.bstek.urule.parse.crosstab;

import com.bstek.urule.model.crosstab.HeaderCell;
import com.bstek.urule.parse.Parser;
import org.apache.commons.lang.StringUtils;
import org.dom4j.Element;

/**
 * @author fred
 * 2018-11-05 6:51 PM
 */
public class HeaderCellParser implements Parser<HeaderCell> {
    public HeaderCellParser() {
    }

    public HeaderCell parse(Element element) {
        HeaderCell cell = new HeaderCell();
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

        String text = element.getText();
        cell.setText(text);
        return cell;
    }

    public boolean support(String name) {
        return "header".equals(name);
    }
}
