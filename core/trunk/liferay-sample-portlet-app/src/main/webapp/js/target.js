(function($, w){
        // Create "sample" namespace if not created
        if(!w.sample) {
                w.sample = {};
        }
        //
        w.sample.TargetPortlet = function(nameSpace, options) {
                var mThis = $.Portlet.call(this, nameSpace); // Extend parent functionality
                var myField$ = mThis.$("input[name=myField]");
                var myList$ = mThis.$(".jpList");

                mThis.addValue = function(aValue) {
                    if(aValue==undefined || aValue.length==0) {
                        return;
                    }
                    aValue = aValue.replace(/[<]/g,"&lt;").replace(/[>]/g,"&gt;").replace(/[<]/g,"&amp;");
                    myList$.append("<li>" + aValue + "</li>");
                }

                mThis.ready = function() {
                    // this is called when $(document).ready is called.                    
                };
                return mThis;
        };
})(jQuery, window);

