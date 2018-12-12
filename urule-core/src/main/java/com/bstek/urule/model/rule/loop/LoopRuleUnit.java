package com.bstek.urule.model.rule.loop;

import com.bstek.urule.model.rule.Other;
import com.bstek.urule.model.rule.Rhs;
import com.bstek.urule.model.rule.lhs.Lhs;

/**
 * @author fred
 * 2018-11-05 5:01 PM
 */
public class LoopRuleUnit {
    private String name;
    private Lhs lhs;
    private Rhs rhs;
    private Other other;

    public LoopRuleUnit() {
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Lhs getLhs() {
        return this.lhs;
    }

    public void setLhs(Lhs lhs) {
        this.lhs = lhs;
    }

    public Rhs getRhs() {
        return this.rhs;
    }

    public void setRhs(Rhs rhs) {
        this.rhs = rhs;
    }

    public Other getOther() {
        return this.other;
    }

    public void setOther(Other other) {
        this.other = other;
    }
}
