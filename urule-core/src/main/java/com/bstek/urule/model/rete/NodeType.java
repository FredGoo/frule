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
package com.bstek.urule.model.rete;

import com.bstek.urule.exception.RuleException;

/**
 * @author Jacky.gao
 * 2015年3月6日
 */
public enum NodeType {
    and,
    or,
    criteria,
    namedCriteria,
    objectType,
    terminal;

    private NodeType() {
    }

    public static ReteNode newReteNodeInstance(NodeType type) {
        switch (type) {
            case and:
                return new AndNode();
            case or:
                return new OrNode();
            case criteria:
                return new CriteriaNode();
            case namedCriteria:
                throw new RuleException("Unsupport Node.");
            case objectType:
                return new ObjectTypeNode();
            case terminal:
                return new TerminalNode();
            default:
                return null;
        }
    }
}
