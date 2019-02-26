package com.bstek.urule.parse.crosstab;

import com.bstek.urule.model.crosstab.CrossRow;
import com.bstek.urule.model.crosstab.LeftRow;
import com.bstek.urule.model.crosstab.TopRow;
import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.parse.Parser;
import org.apache.commons.lang.StringUtils;
import org.dom4j.Element;

/**
 * @author fred
 * 2018-11-05 6:50 PM
 */
public class CrossRowParser implements Parser<CrossRow> {
    public CrossRowParser() {
    }

    public CrossRow parse(Element element) {
        String type = element.attributeValue("type");
        if (type.equals("left")) {
            LeftRow row = new LeftRow();
            row.setRowNumber(Integer.valueOf(element.attributeValue("number")));
            return row;
        } else {
            TopRow row = new TopRow();
            row.setRowNumber(Integer.valueOf(element.attributeValue("number")));
            String bundleDataType = element.attributeValue("bundle-data-type");
            if (StringUtils.isNotBlank(bundleDataType)) {
                row.setBundleDataType(bundleDataType);
                row.setVariableCategory(element.attributeValue("var-category"));
                row.setVariableName(element.attributeValue("var"));
                row.setVariableLabel(element.attributeValue("var-label"));
                row.setDatatype(Datatype.valueOf(element.attributeValue("datatype")));
            }

            return row;
        }
    }

    public boolean support(String name) {
        return "row".equals(name);
    }
}
