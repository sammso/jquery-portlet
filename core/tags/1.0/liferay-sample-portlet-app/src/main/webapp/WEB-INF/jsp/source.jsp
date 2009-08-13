<%@ taglib uri="http://java.sun.com/portlet" prefix="portlet" %>
<portlet:defineObjects/>
<div id="<portlet:namespace />">
    <input type="text" name="myField">
    <button name="myButton">Add To Target portlets</button>
</div>
<script type="text/javascript">
        jQuery.registerPortlet(new sample.SourcePortlet("<portlet:namespace />"));
</script>