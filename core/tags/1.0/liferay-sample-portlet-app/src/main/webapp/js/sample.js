(function($, w){
        // Create "sample" namespace if not created
        if(!w.sample) {
                w.sample = {};
        }
        //
        w.sample.SamplePortlet = function(nameSpace, options) {
                var mThis = $.Portlet.call(this, nameSpace); // Extend parent functionality
                var myField$ = mThis.$("input[name=myField]");
                var myList$ = mThis.$(".jpList");

                mThis.$("button[name=myButton]").click(function(){
                    var fieldText = myField$.val();
                    if(fieldText==undefined || fieldText.length==0) {
                        return;
                    }
                    // Remove HTML comments
                    fieldText = fieldText.replace(/[<]/g,"&lt;").replace(/[>]/g,"&gt;").replace(/[<]/g,"&amp;");
                    myList$.append("<li>" + fieldText + "</li>");
                });

                mThis.ready = function() {
                    // this is called when $(document).ready is called
                };

                return mThis;
        };
})(jQuery, window);

