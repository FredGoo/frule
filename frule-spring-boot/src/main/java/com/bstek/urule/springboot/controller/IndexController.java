package com.bstek.urule.springboot.controller;

import com.bstek.urule.Utils;
import com.bstek.urule.runtime.KnowledgePackage;
import com.bstek.urule.runtime.KnowledgeSession;
import com.bstek.urule.runtime.KnowledgeSessionFactory;
import com.bstek.urule.runtime.service.KnowledgeService;
import com.bstek.urule.springboot.model.OrderModel;
import com.bstek.urule.springboot.model.OutputModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author fred
 * 2018-11-02 2:44 PM
 */
@RequestMapping("/api")
@RestController
public class IndexController {
    private Logger logger = LoggerFactory.getLogger(IndexController.class);

    @RequestMapping("/test")
    public OutputModel test(@RequestParam("appStatus") Integer appStatus, @RequestParam("ddgStatus") Integer ddgStatus) {
        try {
            // 从Spring中获取KnowledgeService接口实例
            KnowledgeService service = (KnowledgeService) Utils.getApplicationContext().getBean(KnowledgeService.BEAN_ID);
            // 通过KnowledgeService接口获取指定的资源包
            KnowledgePackage knowledgePackage = service.getKnowledge("test/test01");
            // 通过取到的KnowledgePackage对象创建KnowledgeSession对象
            KnowledgeSession session = KnowledgeSessionFactory.newKnowledgeSession(knowledgePackage);

            OrderModel orderModel = new OrderModel();
            orderModel.setAppStatus(appStatus);
            orderModel.setDdgStatus(ddgStatus);
            session.insert(orderModel);
            OutputModel outputModel = new OutputModel();
            session.insert(outputModel);

            // 执行所有满足条件的规则
            session.fireRules();

            logger.info("orderModel: " + orderModel.toString());
            logger.info("outputModel: " + outputModel.toString());
            return outputModel;
        } catch (Exception e) {
            logger.error("test error", e);
            return new OutputModel();
        }

    }
}
