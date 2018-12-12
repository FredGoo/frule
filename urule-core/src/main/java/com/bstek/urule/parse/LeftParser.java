//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.bstek.urule.parse;

import com.bstek.urule.exception.RuleException;
import com.bstek.urule.model.library.Datatype;
import com.bstek.urule.model.rule.ComplexArithmetic;
import com.bstek.urule.model.rule.SimpleArithmetic;
import com.bstek.urule.model.rule.SimpleArithmeticValue;
import com.bstek.urule.model.rule.SimpleValue;
import com.bstek.urule.model.rule.lhs.CommonFunctionLeftPart;
import com.bstek.urule.model.rule.lhs.CommonFunctionParameter;
import com.bstek.urule.model.rule.lhs.FunctionLeftPart;
import com.bstek.urule.model.rule.lhs.Left;
import com.bstek.urule.model.rule.lhs.LeftType;
import com.bstek.urule.model.rule.lhs.MethodLeftPart;
import com.bstek.urule.model.rule.lhs.VariableLeftPart;

import java.util.Iterator;

import org.apache.commons.lang.StringUtils;
import org.dom4j.Element;

public class LeftParser extends AbstractParser<Left> {
    private ComplexArithmeticParser complexArithmeticParser;
    private SimpleArithmeticParser simpleArithmeticParser;
    private ValueParser valueParser;

    public LeftParser() {
    }

    public Left parse(Element element) {
        Left left = new Left();
        String type = element.attributeValue("type");
        if (StringUtils.isNotEmpty(type)) {
            left.setType(LeftType.valueOf(type));
        } else {
            left.setType(LeftType.variable);
        }

        switch (left.getType()) {
            case variable:
                left.setLeftPart(this.buildVariableLeftPart(element));
                break;
            case function:
                left.setLeftPart(this.buildFunctionLeftPart(element));
                break;
            case method:
                left.setLeftPart(this.buildMethodLeftPart(element));
                break;
            case parameter:
                left.setLeftPart(this.buildVariableLeftPart(element));
                break;
            case commonfunction:
                left.setLeftPart(this.buildCommonFunctionLeftPart(element));
                break;
            case NamedReference:
                throw new RuleException("Not support reference type.");
            case all:
                throw new RuleException("Not support all type.");
            case exist:
                throw new RuleException("Not support exist type.");
            case collect:
                throw new RuleException("Not support collect type.");
            case eval:
                throw new RuleException("Not support eval type.");
        }

        Iterator var4 = element.elements().iterator();

        while (var4.hasNext()) {
            Object obj = var4.next();
            if (obj != null && obj instanceof Element) {
                Element ele = (Element) obj;
                String name = ele.getName();
                if (this.complexArithmeticParser.support(name)) {
                    left.setArithmetic(this.complexArithmeticParser.parse(ele));
                } else if (this.simpleArithmeticParser.support(name)) {
                    SimpleArithmetic simpleArith = this.simpleArithmeticParser.parse(ele);
                    left.setArithmetic(this.convertSimpleArithmetic(simpleArith));
                }
            }
        }

        return left;
    }

    private ComplexArithmetic convertSimpleArithmetic(SimpleArithmetic simpleArith) {
        if (simpleArith == null) {
            return null;
        } else {
            ComplexArithmetic complex = new ComplexArithmetic();
            complex.setType(simpleArith.getType());
            SimpleValue simpleValue = new SimpleValue();
            complex.setValue(simpleValue);
            SimpleArithmeticValue sv = simpleArith.getValue();
            simpleValue.setContent(sv.getContent());
            SimpleArithmetic nextSimpleArithmetic = sv.getArithmetic();
            simpleValue.setArithmetic(this.convertSimpleArithmetic(nextSimpleArithmetic));
            return complex;
        }
    }

    private CommonFunctionLeftPart buildCommonFunctionLeftPart(Element element) {
        CommonFunctionLeftPart part = new CommonFunctionLeftPart();
        part.setName(element.attributeValue("function-name"));
        part.setLabel(element.attributeValue("function-label"));
        Iterator var3 = element.elements().iterator();

        while (true) {
            Element ele;
            do {
                Object obj;
                do {
                    if (!var3.hasNext()) {
                        return part;
                    }

                    obj = var3.next();
                } while (!(obj instanceof Element));

                ele = (Element) obj;
            } while (!ele.getName().equals("function-parameter"));

            CommonFunctionParameter p = new CommonFunctionParameter();
            p.setName(ele.attributeValue("name"));
            p.setProperty(ele.attributeValue("property-name"));
            p.setPropertyLabel(ele.attributeValue("property-label"));
            Iterator var7 = ele.elements().iterator();

            while (var7.hasNext()) {
                Object object = var7.next();
                if (object instanceof Element) {
                    Element e = (Element) object;
                    if (e.getName().equals("value")) {
                        p.setObjectParameter(this.valueParser.parse(e));
                    }
                }
            }

            part.setParameter(p);
        }
    }

    private MethodLeftPart buildMethodLeftPart(Element element) {
        MethodLeftPart part = new MethodLeftPart();
        part.setBeanId(element.attributeValue("bean-name"));
        part.setBeanLabel(element.attributeValue("bean-label"));
        part.setMethodLabel(element.attributeValue("method-label"));
        part.setMethodName(element.attributeValue("method-name"));
        part.setParameters(this.parseParameters(element, this.valueParser));
        return part;
    }

    private FunctionLeftPart buildFunctionLeftPart(Element element) {
        FunctionLeftPart part = new FunctionLeftPart();
        part.setName(element.attributeValue("name"));
        part.setParameters(this.parseParameters(element, this.valueParser));
        return part;
    }

    private VariableLeftPart buildVariableLeftPart(Element element) {
        VariableLeftPart part = new VariableLeftPart();
        String variable = element.attributeValue("var");
        if (StringUtils.isNotEmpty(variable)) {
            part.setVariableName(variable);
        }

        String variableLabel = element.attributeValue("var-label");
        if (StringUtils.isNotEmpty(variableLabel)) {
            part.setVariableLabel(variableLabel);
        }

        String variableCategory = element.attributeValue("var-category");
        if (StringUtils.isNotEmpty(variableCategory)) {
            part.setVariableCategory(variableCategory);
        }

        String datatype = element.attributeValue("datatype");
        if (StringUtils.isNotEmpty(datatype)) {
            part.setDatatype(Datatype.valueOf(datatype));
        }

        return part;
    }

    public void setValueParser(ValueParser valueParser) {
        this.valueParser = valueParser;
    }

    public void setComplexArithmeticParser(ComplexArithmeticParser complexArithmeticParser) {
        this.complexArithmeticParser = complexArithmeticParser;
    }

    public void setSimpleArithmeticParser(SimpleArithmeticParser simpleArithmeticParser) {
        this.simpleArithmeticParser = simpleArithmeticParser;
    }

    public boolean support(String name) {
        return name.equals("left");
    }
}
