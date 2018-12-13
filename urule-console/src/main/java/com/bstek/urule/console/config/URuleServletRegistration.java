package com.bstek.urule.console.config;

import com.bstek.urule.console.servlet.URuleServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

/**
 * @author fred
 * 2018-12-13 3:27 PM
 */
@Component
public class URuleServletRegistration {
    @Bean
    public ServletRegistrationBean registerURuleServlet() {
        return new ServletRegistrationBean(new URuleServlet(), "/frule/api/*");
    }

}
