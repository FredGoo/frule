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
package com.bstek.urule.model.rule.lhs;

import com.bstek.urule.model.rule.ComplexArithmetic;
import org.codehaus.jackson.annotate.JsonIgnore;

/**
 * @author Jacky.gao
 * 2014年12月29日
 */
public class Left {
    @JsonIgnore
    private String id;
    private LeftPart leftPart;
    private LeftType type;
    private ComplexArithmetic arithmetic;

    public Left() {
    }

    public LeftPart getLeftPart() {
        return this.leftPart;
    }

    public void setLeftPart(LeftPart leftPart) {
        this.leftPart = leftPart;
    }

    public ComplexArithmetic getArithmetic() {
        return this.arithmetic;
    }

    public void setArithmetic(ComplexArithmetic arithmetic) {
        this.arithmetic = arithmetic;
    }

    public LeftType getType() {
        return this.type;
    }

    public void setType(LeftType type) {
        this.type = type;
    }

    public String getId() {
        if (this.id == null) {
            this.id = this.leftPart.getId();
            if (this.arithmetic != null) {
                this.id = this.id + this.arithmetic.getId();
            }
        }

        return this.id;
    }
}
