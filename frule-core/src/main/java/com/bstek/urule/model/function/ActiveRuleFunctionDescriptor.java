package com.bstek.urule.model.function;

import com.bstek.urule.model.rule.RuleInfo;
import com.bstek.urule.runtime.WorkingMemory;

/**
 * @author fred
 * 2018-11-05 7:06 PM
 */
public class ActiveRuleFunctionDescriptor implements FunctionDescriptor {
    public ActiveRuleFunctionDescriptor() {
    }

    public Argument getArgument() {
        Argument p = new Argument();
        p.setName("规则名");
        p.setNeedProperty(false);
        return p;
    }

    public Object doFunction(Object object, String property, WorkingMemory workingMemory) {
        RuleInfo rule = workingMemory.getContext().getCurrentRule();
        if (rule == null) {
            return null;
        } else if (object == null) {
            return null;
        } else {
            String ruleName = object.toString();
            workingMemory.activeRule(rule.getActivationGroup(), ruleName);
            return null;
        }
    }

    public String getName() {
        return "ActiveRule";
    }

    public String getLabel() {
        return "激活当前互斥组规则";
    }

    public boolean isDisabled() {
        return false;
    }
}
