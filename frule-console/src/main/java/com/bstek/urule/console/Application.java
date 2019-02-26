package com.bstek.urule.console;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

/**
 * @author fred
 * 2018-12-13 3:00 PM
 */
@SpringBootApplication
@ImportResource({"classpath:urule-console-context.xml"})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
