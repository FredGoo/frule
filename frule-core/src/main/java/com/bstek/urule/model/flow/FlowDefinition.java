//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.bstek.urule.model.flow;

import com.bstek.urule.builder.KnowledgeBase;
import com.bstek.urule.builder.KnowledgeBuilder;
import com.bstek.urule.builder.ResourceBase;
import com.bstek.urule.dsl.DSLRuleSetBuilder;
import com.bstek.urule.exception.RuleException;
import com.bstek.urule.model.flow.ins.FlowContext;
import com.bstek.urule.model.flow.ins.FlowInstance;
import com.bstek.urule.model.flow.ins.ProcessInstance;
import com.bstek.urule.model.rule.Library;
import com.bstek.urule.model.rule.RuleSet;
import com.bstek.urule.model.rule.lhs.Lhs;
import com.bstek.urule.runtime.KnowledgePackage;
import com.bstek.urule.runtime.KnowledgePackageWrapper;
import com.bstek.urule.runtime.KnowledgeSession;
import com.bstek.urule.runtime.event.impl.ProcessAfterCompletedEventImpl;
import com.bstek.urule.runtime.event.impl.ProcessBeforeStartedEventImpl;
import com.bstek.urule.runtime.response.ExecutionResponseImpl;
import com.bstek.urule.runtime.service.KnowledgePackageService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.map.annotate.JsonDeserialize;

public class FlowDefinition implements ProcessDefinition {
    private String id;
    private boolean debug;
    @JsonIgnore
    private List<Library> libraries;
    @JsonDeserialize(
            using = FlowNodeJsonDeserializer.class
    )
    private List<FlowNode> nodes;

    public FlowDefinition() {
    }

    public ProcessInstance newInstance(FlowContext context) {
        ExecutionResponseImpl response = (ExecutionResponseImpl) context.getResponse();
        response.setFlowId(this.id);
        StartNode startNode = null;
        Iterator var4 = this.nodes.iterator();

        while (var4.hasNext()) {
            FlowNode node = (FlowNode) var4.next();
            if (node instanceof StartNode) {
                startNode = (StartNode) node;
                break;
            }
        }

        if (startNode == null) {
            throw new RuleException("StartNode must be define.");
        } else {
            response.addNodeName(startNode.getName());
            FlowInstance instance = new FlowInstance(this, this.debug);
            KnowledgeSession session = (KnowledgeSession) context.getWorkingMemory();
            session.fireEvent(new ProcessBeforeStartedEventImpl(instance, session));
            startNode.enter(context, instance);
            session.fireEvent(new ProcessAfterCompletedEventImpl(instance, session));
            return instance;
        }
    }

    public void buildConnectionToNode() {
        Iterator var1 = this.nodes.iterator();

        while (true) {
            List connections;
            do {
                do {
                    if (!var1.hasNext()) {
                        return;
                    }

                    FlowNode node = (FlowNode) var1.next();
                    connections = node.getConnections();
                } while (connections == null);
            } while (connections.size() == 0);

            Iterator var4 = connections.iterator();

            while (var4.hasNext()) {
                Connection conn = (Connection) var4.next();
                String nodeName = conn.getToName();
                conn.setTo(this.getFlowNode(nodeName));
            }
        }
    }

    private FlowNode getFlowNode(String nodeName) {
        Iterator var2 = this.nodes.iterator();

        FlowNode node;
        do {
            if (!var2.hasNext()) {
                throw new RuleException("Flow node [" + nodeName + "] not found.");
            }

            node = (FlowNode) var2.next();
        } while (!node.getName().equals(nodeName));

        return node;
    }

    public FlowDefinition newFlowDefinitionForSerialize(KnowledgeBuilder knowledgeBuilder, KnowledgePackageService knowledgePackageService, DSLRuleSetBuilder dslRuleSetBuilder) throws IOException {
        this.initNodeKnowledgePackage(knowledgeBuilder, knowledgePackageService, dslRuleSetBuilder);
        FlowDefinition fd = new FlowDefinition();
        fd.setLibraries(this.libraries);
        fd.setId(this.id);
        fd.setDebug(this.debug);
        fd.setNodes(this.nodes);
        Iterator var5 = this.nodes.iterator();

        while (true) {
            while (var5.hasNext()) {
                FlowNode node = (FlowNode) var5.next();
                node.setX((String) null);
                node.setY((String) null);
                node.setWidth((String) null);
                node.setHeight((String) null);
                if (node instanceof DecisionNode) {
                    DecisionNode decisionNode = (DecisionNode) node;
                    Iterator var8 = decisionNode.getItems().iterator();

                    while (var8.hasNext()) {
                        DecisionItem item = (DecisionItem) var8.next();
                        item.setLhs((Lhs) null);
                        item.setLhsXml((String) null);
                        item.setScript((String) null);
                    }
                } else if (node instanceof ScriptNode) {
                    ScriptNode scriptNode = (ScriptNode) node;
                    scriptNode.setScript((String) null);
                    scriptNode.setActionType((ActionType) null);
                    scriptNode.setActionXml((String) null);
                    scriptNode.setActionsData((List) null);
                }
            }

            return fd;
        }
    }

    private void initNodeKnowledgePackage(KnowledgeBuilder knowledgeBuilder, KnowledgePackageService knowledgePackageService, DSLRuleSetBuilder dslRuleSetBuilder) throws IOException {
        Iterator var4 = this.nodes.iterator();

        while (true) {
            while (var4.hasNext()) {
                FlowNode node = (FlowNode) var4.next();
                KnowledgeBase knowledgeBase;
                if (node instanceof RuleNode) {
                    ResourceBase resourceBase = knowledgeBuilder.newResourceBase();
                    RuleNode ruleNode = (RuleNode) node;
                    resourceBase.addResource(ruleNode.getFile(), ruleNode.getVersion());
                    knowledgeBase = knowledgeBuilder.buildKnowledgeBase(resourceBase);
                    KnowledgePackage knowledgePackage = knowledgeBase.getKnowledgePackage();
                    ruleNode.setKnowledgePackageWrapper(new KnowledgePackageWrapper(knowledgePackage));
                } else if (node instanceof RulePackageNode) {
                    RulePackageNode rulePackageNode = (RulePackageNode) node;
                    String packageId = rulePackageNode.getProject() + "/" + rulePackageNode.getPackageId();
                    KnowledgePackage knowledgePackage = knowledgePackageService.buildKnowledgePackage(packageId);
                    rulePackageNode.setKnowledgePackageWrapper(new KnowledgePackageWrapper(knowledgePackage));
                } else {
                    RuleSet ruleSet;
                    String script;
                    if (node instanceof DecisionNode) {
                        DecisionNode decisionNode = (DecisionNode) node;
                        if (decisionNode.getDecisionType().equals(DecisionType.Criteria)) {
                            ruleSet = decisionNode.buildRuleSet(this.libraries, this.debug, this.id);
                            script = decisionNode.buildDSLScript(this.libraries, this.debug, this.id);
                            if (script != null) {
                                RuleSet rs = dslRuleSetBuilder.build(script);
                                ruleSet.getRules().addAll(rs.getRules());
                            }

                            knowledgeBase = knowledgeBuilder.buildKnowledgeBase(ruleSet);
                            decisionNode.setKnowledgePackageWrapper(new KnowledgePackageWrapper(knowledgeBase.getKnowledgePackage()));
                        }
                    } else {
                        Iterator ruleSetIterator;
                        if (node instanceof ScriptNode) {
                            ScriptNode scriptNode = (ScriptNode) node;
                            ruleSet = null;
                            if (scriptNode.getActionType().equals(ActionType.script)) {
                                script = scriptNode.buildDSLScript(this.libraries);
                                ruleSet = dslRuleSetBuilder.build(script);
                            } else {
                                ruleSet = scriptNode.buildRuleSet(this.libraries);
                            }

                            knowledgeBase = knowledgeBuilder.buildKnowledgeBase(ruleSet);
                            scriptNode.setKnowledgePackageWrapper(new KnowledgePackageWrapper(knowledgeBase.getKnowledgePackage()));
                        } else if (node instanceof ForkNode) {
                            List<Connection> connections = node.getConnections();
                            ruleSetIterator = connections.iterator();

                            while (ruleSetIterator.hasNext()) {
                                Connection conn = (Connection) ruleSetIterator.next();
                                script = conn.getScript();
                                if (script != null) {
                                    script = conn.buildDSLScript(this.libraries);
                                    ruleSet = dslRuleSetBuilder.build(script);
                                    knowledgeBase = knowledgeBuilder.buildKnowledgeBase(ruleSet);
                                    conn.setKnowledgePackageWrapper(new KnowledgePackageWrapper(knowledgeBase.getKnowledgePackage()));
                                }
                            }
                        }
                    }
                }
            }

            return;
        }
    }

    public void addLibrary(Library lib) {
        if (this.libraries == null) {
            this.libraries = new ArrayList();
        }

        this.libraries.add(lib);
    }

    public List<Library> getLibraries() {
        return this.libraries;
    }

    public void setLibraries(List<Library> libraries) {
        this.libraries = libraries;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isDebug() {
        return this.debug;
    }

    public void setDebug(boolean debug) {
        this.debug = debug;
    }

    public List<FlowNode> getNodes() {
        return this.nodes;
    }

    public void setNodes(List<FlowNode> nodes) {
        this.nodes = nodes;
    }
}
