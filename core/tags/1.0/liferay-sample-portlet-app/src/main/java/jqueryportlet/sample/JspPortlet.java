package jqueryportlet.sample;

import java.io.IOException;
import javax.portlet.GenericPortlet;
import javax.portlet.PortletException;
import javax.portlet.PortletRequestDispatcher;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

/**
 * @author Sampsa Sohlman
 */
public class JspPortlet extends GenericPortlet {

    protected String mViewJSP;

    public void init() throws PortletException {
        mViewJSP = getInitParameter("view-jsp");
    }

    @Override
    protected void doView(RenderRequest request, RenderResponse response) throws PortletException, IOException {
        include(mViewJSP, request, response);
    }



    protected void include(
            final String path,
            final RenderRequest renderRequest,
            final RenderResponse renderResponse)
            throws IOException, PortletException {

        PortletRequestDispatcher portletRequestDispatcher =
                getPortletContext().getRequestDispatcher(path);

        if (portletRequestDispatcher == null) {
            throw new PortletException("PortletRequestDispatcher not FOUND from path " + path);
        } else {
            portletRequestDispatcher.include(renderRequest, renderResponse);
        }
    }
}
