/*******************************************************************************
 * Copyright 2017 Bstek
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/
package com.bstek.urule.runtime;

import com.bstek.urule.exception.RuleException;
import com.bstek.urule.runtime.rete.Context;

/**
 * @author Jacky.gao
 * 2015年1月28日
 */
public class KnowledgeSessionFactory {
    public KnowledgeSessionFactory() {
    }

    public static KnowledgeSession newKnowledgeSession(KnowledgePackage knowledgePackage) {
        return new KnowledgeSessionImpl(knowledgePackage);
    }

    public static KnowledgeSession newKnowledgeSession(KnowledgePackage knowledgePackage, KnowledgeSession parentSession) {
        return new KnowledgeSessionImpl(knowledgePackage, parentSession);
    }

    public static KnowledgeSession newKnowledgeSession(KnowledgePackageWrapper wrapper, Context context, KnowledgeSession parentSession) {
        if (context == null) {
            throw new RuleException("Context cannot be null.");
        } else if (wrapper == null) {
            throw new RuleException("KnowledgePackageWrapper cannot be null.");
        } else {
            String id = wrapper.getId();
            KnowledgeSession session = context.getWorkingMemory().getKnowledgeSession(id);
            if (session == null) {
                session = newKnowledgeSession(wrapper.getKnowledgePackage(), parentSession);
                context.getWorkingMemory().putKnowledgeSession(id, session);
            } else {
                session.initFromParentSession(parentSession);
            }

            return session;
        }
    }

    public static KnowledgeSession newKnowledgeSession(KnowledgePackage[] knowledgePackages) {
        return new KnowledgeSessionImpl(knowledgePackages, (KnowledgeSession) null);
    }

    public static BatchSession newBatchSession(KnowledgePackage knowledgePackage) {
        return new BatchSessionImpl(knowledgePackage, 10, 100);
    }

    public static BatchSession newBatchSessionByThreadSize(KnowledgePackage knowledgePackage, int threadSize) {
        return new BatchSessionImpl(knowledgePackage, threadSize, 100);
    }

    public static BatchSession newBatchSessionByBatchSize(KnowledgePackage knowledgePackage, int batchSize) {
        return new BatchSessionImpl(knowledgePackage, 10, batchSize);
    }

    public static BatchSession newBatchSession(KnowledgePackage knowledgePackage, int threadSize, int batchSize) {
        return new BatchSessionImpl(knowledgePackage, threadSize, batchSize);
    }

    public static BatchSession newBatchSession(KnowledgePackage[] knowledgePackages) {
        return new BatchSessionImpl(knowledgePackages, 10, 100);
    }

    public static BatchSession newBatchSessionByThreadSize(KnowledgePackage[] knowledgePackages, int threadSize) {
        return new BatchSessionImpl(knowledgePackages, threadSize, 100);
    }

    public static BatchSession newBatchSessionByBatchSize(KnowledgePackage[] knowledgePackages, int batchSize) {
        return new BatchSessionImpl(knowledgePackages, 10, batchSize);
    }

    public static BatchSession newBatchSession(KnowledgePackage[] knowledgePackages, int threadSize, int batchSize) {
        return new BatchSessionImpl(knowledgePackages, threadSize, batchSize);
    }
}
