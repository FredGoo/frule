package com.bstek.urule.model.rete.builder;

/**
 * @author fred
 * 2018-11-05 6:28 PM
 */
public class IdGenerator {
    private int id = 1;

    public IdGenerator() {
    }

    public int nextId() {
        return this.id++;
    }

}
