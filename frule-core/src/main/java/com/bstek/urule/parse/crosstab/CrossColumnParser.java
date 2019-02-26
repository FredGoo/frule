package com.bstek.urule.parse.crosstab;

import com.bstek.urule.model.crosstab.CrossColumn;
import com.bstek.urule.model.crosstab.LeftColumn;
import com.bstek.urule.model.crosstab.TopColumn;
import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.parse.Parser;
import org.apache.commons.lang.StringUtils;
import org.dom4j.Element;

/**
 * @author fred
 * 2018-11-05 6:50 PM
 */
public class CrossColumnParser implements Parser<CrossColumn> {
    public CrossColumnParser() {
    }

    public CrossColumn parse(Element element) {
        String type = element.attributeValue("type");
        if (type.equals("left")) {
            LeftColumn col = new LeftColumn();
            col.setColumnNumber(Integer.valueOf(element.attributeValue("number")));
            String bundleDataType = element.attributeValue("bundle-data-type");
            if (StringUtils.isNotBlank(bundleDataType)) {
                col.setBundleDataType(bundleDataType);
                col.setVariableCategory(element.attributeValue("var-category"));
                col.setVariableName(element.attributeValue("var"));
                col.setVariableLabel(element.attributeValue("var-label"));
                col.setDatatype(Datatype.valueOf(element.attributeValue("datatype")));
            }

            return col;
        } else {
            TopColumn col = new TopColumn();
            col.setColumnNumber(Integer.valueOf(element.attributeValue("number")));
            return col;
        }
    }

    public boolean support(String name) {
        return "column".equals(name);
    }
}
