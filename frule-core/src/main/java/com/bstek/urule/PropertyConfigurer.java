package com.bstek.urule;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.core.io.support.PropertiesLoaderSupport;

import java.lang.reflect.Method;
import java.util.Collection;
import java.util.Iterator;
import java.util.Properties;

/**
 * @author fred
 * 2018-11-05 5:27 PM
 */
public class PropertyConfigurer implements ApplicationContextAware {
    private static Properties props = new Properties();

    public PropertyConfigurer() {
    }

    public static String getProperty(String key) {
        return props.getProperty(key);
    }

    public void setApplicationContext(ApplicationContext context) throws BeansException {
        Collection<PropertiesLoaderSupport> supports = context.getBeansOfType(PropertiesLoaderSupport.class).values();
        Iterator var3 = supports.iterator();

        while (var3.hasNext()) {
            PropertiesLoaderSupport support = (PropertiesLoaderSupport) var3.next();
            this.doMethod(support);
        }

    }

    private void doMethod(PropertiesLoaderSupport support) {
        try {
            Method method = PropertiesLoaderSupport.class.getDeclaredMethod("mergeProperties");
            method.setAccessible(true);
            Object obj = method.invoke(support);
            props.putAll((Properties) obj);
        } catch (Exception var4) {
            throw new RuntimeException(var4);
        }
    }

}
