package com.bstek.urule.springboot.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;

/**
 * @author fred
 * 2018-11-02 2:13 PM
 */
public class OutputModel implements Serializable {
    private Logger logger = LoggerFactory.getLogger(OutputModel.class);

    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "OutputModel{" +
                "code='" + code + '\'' +
                '}';
    }
}
