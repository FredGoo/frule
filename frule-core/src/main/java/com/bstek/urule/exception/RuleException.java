package com.bstek.urule.exception;

/**
 * @author fred
 * 2018-11-05 5:33 PM
 */
public class RuleException extends RuntimeException {
    private static final long serialVersionUID = -8624533394127244753L;
    private String tipMsg;

    public RuleException() {
    }

    public RuleException(String msg) {
        super(msg);
    }

    public RuleException(Exception ex) {
        super(ex);
        ex.printStackTrace();
    }

    public RuleException(String msg, Exception ex) {
        super(ex);
        if (msg != null) {
            msg = "错误发生位置：" + msg;
            System.err.println(msg);
        }

        ex.printStackTrace();
        this.tipMsg = msg;
    }

    public String getTipMsg() {
        return this.tipMsg;
    }
}
