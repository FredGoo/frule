package com.bstek.urule.model.rete;

import java.util.Date;

/**
 * @author fred
 * 2018-11-05 6:15 PM
 */
public class ReteUnit {
    private String ruleName;
    private Date effectiveDate;
    private Date expiresDate;
    private Rete rete;

    public ReteUnit() {
    }

    public ReteUnit(Rete rete, String ruleName) {
        this.rete = rete;
        this.ruleName = ruleName;
    }

    public String getRuleName() {
        return this.ruleName;
    }

    public void setRuleName(String ruleName) {
        this.ruleName = ruleName;
    }

    public Date getEffectiveDate() {
        return this.effectiveDate;
    }

    public void setEffectiveDate(Date effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public Date getExpiresDate() {
        return this.expiresDate;
    }

    public void setExpiresDate(Date expiresDate) {
        this.expiresDate = expiresDate;
    }

    public Rete getRete() {
        return this.rete;
    }

    public void setRete(Rete rete) {
        this.rete = rete;
    }
}
