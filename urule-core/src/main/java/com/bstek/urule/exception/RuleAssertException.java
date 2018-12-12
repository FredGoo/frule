package com.bstek.urule.exception;

/**
 * @author fred
 * 2018-11-05 5:57 PM
 */
public class RuleAssertException extends RuleException {
    private static final long serialVersionUID = -1345171815520647493L;

    public RuleAssertException(String msg, Exception ex) {
        super(msg, ex);
    }
}
