package com.bstek.urule.parse.deserializer;

import com.bstek.urule.model.scorecard.ComplexScorecardDefinition;
import com.bstek.urule.parse.scorecard.ComplexScorecardParser;
import org.dom4j.Element;

/**
 * @author fred
 * 2018-12-12 2:05 PM
 */
public class ComplexScorecardDeserializer implements Deserializer<ComplexScorecardDefinition> {
    public static final String BEAN_ID = "urule.complexScorecardDeserializer";
    private ComplexScorecardParser complexScorecardParser;

    public ComplexScorecardDeserializer() {
    }

    public ComplexScorecardDefinition deserialize(Element root) {
        ComplexScorecardDefinition card = this.complexScorecardParser.parse(root);
        return card;
    }

    public void setComplexScorecardParser(ComplexScorecardParser complexScorecardParser) {
        this.complexScorecardParser = complexScorecardParser;
    }

    public boolean support(Element root) {
        return this.complexScorecardParser.support(root.getName());
    }
}
