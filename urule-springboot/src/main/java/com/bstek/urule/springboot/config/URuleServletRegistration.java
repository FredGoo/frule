package com.bstek.urule.springboot.config;

import com.bstek.urule.console.servlet.URuleServlet;
import com.bstek.urule.springboot.config.IndexServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

/**
 * @author Jacky.gao
 * 2016年10月12日
 */
@Component
public class URuleServletRegistration {

    @Bean
    public ServletRegistrationBean registerURuleServlet() {
        return new ServletRegistrationBean(new URuleServlet(), "/urule/*");
    }

}
