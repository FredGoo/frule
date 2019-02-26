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
package com.bstek.urule.model.rule;

import java.util.Date;

import com.bstek.urule.model.rule.lhs.Lhs;
import org.codehaus.jackson.annotate.JsonIgnore;

/**
 * @author Jacky.gao
 * 2014年12月25日
 */
public class Rule implements RuleInfo {
    private String id;
    private String name;
    private String file;
    private Integer salience;
    private Date effectiveDate;
    private Date expiresDate;
    private Boolean enabled;
    private Boolean debug;
    private String activationGroup;
    private String agendaGroup;
    private Boolean autoFocus;
    private String ruleflowGroup;
    private Lhs lhs;
    private Rhs rhs;
    private Other other;
    private Boolean loop;
    private Boolean loopRule = false;
    private String remark;
    private boolean withElse;
    @JsonIgnore
    private Rule elseRule;

    public Rule() {
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFile() {
        return this.file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public Date getEffectiveDate() {
        return this.effectiveDate;
    }

    public Integer getSalience() {
        return this.salience;
    }

    public void setSalience(Integer salience) {
        this.salience = salience;
    }

    public Boolean getEnabled() {
        return this.enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Boolean getDebug() {
        return this.debug;
    }

    public void setDebug(Boolean debug) {
        this.debug = debug;
    }

    public Boolean getAutoFocus() {
        return this.autoFocus;
    }

    public void setAutoFocus(Boolean autoFocus) {
        this.autoFocus = autoFocus;
    }

    public void setEffectiveDate(Date effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public Date getExpiresDate() {
        return this.expiresDate;
    }

    public void setExpiresDate(Date expiresDate) {
        this.expiresDate = expiresDate;
    }

    public String getActivationGroup() {
        return this.activationGroup;
    }

    public void setActivationGroup(String activationGroup) {
        this.activationGroup = activationGroup;
    }

    public String getAgendaGroup() {
        return this.agendaGroup;
    }

    public void setAgendaGroup(String agendaGroup) {
        this.agendaGroup = agendaGroup;
    }

    public String getRuleflowGroup() {
        return this.ruleflowGroup;
    }

    public void setRuleflowGroup(String ruleflowGroup) {
        this.ruleflowGroup = ruleflowGroup;
    }

    public String getRemark() {
        return this.remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Lhs getLhs() {
        return this.lhs;
    }

    public void setLhs(Lhs lhs) {
        this.lhs = lhs;
    }

    public Rhs getRhs() {
        return this.rhs;
    }

    public void setRhs(Rhs rhs) {
        this.rhs = rhs;
    }

    public Other getOther() {
        return this.other;
    }

    public void setOther(Other other) {
        this.other = other;
    }

    public Boolean getLoop() {
        return this.loop;
    }

    public void setLoop(Boolean loop) {
        this.loop = loop;
    }

    public Boolean isLoopRule() {
        return this.loopRule;
    }

    public void setLoopRule(Boolean loopRule) {
        this.loopRule = loopRule;
    }

    public boolean isWithElse() {
        return this.withElse;
    }

    public void setWithElse(boolean withElse) {
        this.withElse = withElse;
    }

    public Rule getElseRule() {
        return this.elseRule;
    }

    public void setElseRule(Rule elseRule) {
        this.elseRule = elseRule;
    }
}
