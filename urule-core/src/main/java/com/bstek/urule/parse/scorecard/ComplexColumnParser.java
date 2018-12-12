package com.bstek.urule.parse.scorecard;

import com.bstek.urule.model.scorecard.ComplexColumn;
import com.bstek.urule.model.scorecard.ComplexColumnType;
import com.bstek.urule.parse.Parser;
import org.dom4j.Element;

/**
 * @author fred
 * 2018-12-12 2:10 PM
 */
public class ComplexColumnParser implements Parser<ComplexColumn> {
    public ComplexColumnParser() {
    }

    public ComplexColumn parse(Element element) {
        ComplexColumn col = new ComplexColumn();
        col.setNum(Integer.valueOf(element.attributeValue("num")));
        col.setType(ComplexColumnType.valueOf(element.attributeValue("type")));
        col.setVariableCategory(element.attributeValue("var-category"));
        col.setWidth(Integer.valueOf(element.attributeValue("width")));
        col.setCustomLabel(element.attributeValue("custom-label"));
        return col;
    }

    public boolean support(String name) {
        return name.equals("col");
    }
}
