package com.bstek.urule.parse.crosstab;

import com.bstek.urule.model.crosstab.ValueCrossCell;
import com.bstek.urule.parse.Parser;
import com.bstek.urule.parse.ValueParser;
import org.dom4j.Element;

import java.util.Iterator;

/**
 * @author fred
 * 2018-11-05 6:51 PM
 */
public class ValueCrossCellParser extends CrossCellParser implements Parser<ValueCrossCell> {
    private ValueParser valueParser;

    public ValueCrossCellParser() {
    }

    public ValueCrossCell parse(Element element) {
        ValueCrossCell cell = new ValueCrossCell();
        this.parseCrossCell(cell, element);
        Iterator var3 = element.elements().iterator();

        while (var3.hasNext()) {
            Object obj = var3.next();
            if (obj != null && obj instanceof Element) {
                Element ele = (Element) obj;
                if (this.valueParser.support(ele.getName())) {
                    cell.setValue(this.valueParser.parse(ele));
                    break;
                }
            }
        }

        return cell;
    }

    public boolean support(String name) {
        return "value-cell".equals(name);
    }

    public void setValueParser(ValueParser valueParser) {
        this.valueParser = valueParser;
    }
}
