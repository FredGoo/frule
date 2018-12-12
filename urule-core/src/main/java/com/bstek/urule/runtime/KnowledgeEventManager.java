package com.bstek.urule.runtime;

import com.bstek.urule.runtime.event.KnowledgeEvent;
import com.bstek.urule.runtime.event.KnowledgeEventListener;

import java.util.List;

/**
 * @author fred
 * 2018-11-05 5:43 PM
 */
public interface KnowledgeEventManager {
    void addEventListener(KnowledgeEventListener var1);

    List<KnowledgeEventListener> getKnowledgeEventListeners();

    boolean removeEventListener(KnowledgeEventListener var1);

    void fireEvent(KnowledgeEvent var1);
}
