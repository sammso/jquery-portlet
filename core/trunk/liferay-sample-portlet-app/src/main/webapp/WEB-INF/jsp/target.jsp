<%@ taglib uri="http://java.sun.com/portlet" prefix="portlet" %>
<portlet:defineObjects/>
<div id="<portlet:namespace />">
    <ul class="jpList">
    </ul>
</div>
<script type="text/javascript">
        jQuery.registerPortlet(new sample.TargetPortlet("<portlet:namespace />"));
</script>