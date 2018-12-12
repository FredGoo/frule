package com.bstek.urule.model.function;

import com.bstek.urule.runtime.WorkingMemory;

/**
 * @author fred
 * 2018-11-05 7:06 PM
 */
public class ActiveAgendaFunctionDescriptor implements FunctionDescriptor {
    public ActiveAgendaFunctionDescriptor() {
    }

    public Argument getArgument() {
        Argument p = new Argument();
        p.setName("执行组名");
        p.setNeedProperty(false);
        return p;
    }

    public Object doFunction(Object object, String property, WorkingMemory workingMemory) {
        if (object == null) {
            return null;
        } else {
            String groupName = object.toString();
            workingMemory.activeAgendaGroup(groupName);
            return null;
        }
    }

    public String getName() {
        return "ActiveAgenda";
    }

    public String getLabel() {
        return "激活执行组";
    }

    public boolean isDisabled() {
        return false;
    }
}
