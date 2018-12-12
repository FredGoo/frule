package com.bstek.urule.runtime.rete;

import java.util.Date;

/**
 * @author fred
 * 2018-11-05 4:32 PM
 */
public class ReteInstanceUnit {
    private String ruleName;
    private Date effectiveDate;
    private Date expiresDate;
    private ReteInstance reteInstance;

    public ReteInstanceUnit(ReteInstance reteInstance, String ruleName) {
        this.reteInstance = reteInstance;
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

    public ReteInstance getReteInstance() {
        return this.reteInstance;
    }

    public void setReteInstance(ReteInstance reteInstance) {
        this.reteInstance = reteInstance;
    }

}
