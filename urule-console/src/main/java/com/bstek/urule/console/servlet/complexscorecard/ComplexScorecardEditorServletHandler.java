package com.bstek.urule.console.servlet.complexscorecard;

import com.bstek.urule.console.servlet.RenderPageServletHandler;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author fred
 * 2018-12-11 6:35 PM
 */
public class ComplexScorecardEditorServletHandler extends RenderPageServletHandler {
    public ComplexScorecardEditorServletHandler() {
    }

    public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String method = this.retriveMethod(req);
        if (method != null) {
            this.invokeMethod(method, req, resp);
        } else {
            VelocityContext context = new VelocityContext();
            context.put("contextPath", req.getContextPath());
            String file = req.getParameter("file");
            String project = this.buildProjectNameFromFile(file);
            if (project != null) {
                context.put("project", project);
            }

            resp.setContentType("text/html");
            resp.setCharacterEncoding("utf-8");
            Template template = this.ve.getTemplate("html/complexscorecard-editor.html", "utf-8");
            PrintWriter writer = resp.getWriter();
            template.merge(context, writer);
            writer.close();
        }

    }

    public String url() {
        return "/complexscorecardeditor";
    }

}
