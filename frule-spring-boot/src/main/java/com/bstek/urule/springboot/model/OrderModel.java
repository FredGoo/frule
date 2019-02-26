package com.bstek.urule.springboot.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;

/**
 * @author fred
 * 2018-11-02 2:13 PM
 */
public class OrderModel implements Serializable {
    private Logger logger = LoggerFactory.getLogger(OrderModel.class);

    private String appId;
    private Integer appStatus;
    private Integer ddgStatus;

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public Integer getAppStatus() {
        logger.info("get app status");
        return appStatus;
    }

    public void setAppStatus(Integer appStatus) {
        this.appStatus = appStatus;
    }

    public Integer getDdgStatus() {
        logger.info("get ddg status");
        return ddgStatus;
    }

    public void setDdgStatus(Integer ddgStatus) {
        this.ddgStatus = ddgStatus;
    }

    @Override
    public String toString() {
        return "OrderModel{" +
                "appId='" + appId + '\'' +
                ", appStatus=" + appStatus +
                ", ddgStatus=" + ddgStatus +
                '}';
    }
}
