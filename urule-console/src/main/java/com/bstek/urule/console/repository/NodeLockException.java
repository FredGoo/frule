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
package com.bstek.urule.console.repository;

import com.bstek.urule.exception.RuleException;

/**
 * @author Jacky.gao
 * @since 2017年11月22日
 */
public class NodeLockException extends RuleException {
	private static final long serialVersionUID = 5117384355737392800L;
	public NodeLockException(String msg) {
		super(msg);
	}
}
