(function($, w){
        // Create "sample" namespace if not created
        if(!w.sample) {
                w.sample = {};
        }
        //
        w.sample.SourcePortlet = function(nameSpace, options) {
                var mThis = $.Portlet.call(this, nameSpace); // Extend parent functionality
                var myField$ = mThis.$("input[name=myField]");

                var addTextToTarget = function(aValue) {
                    $.searchPortlet(function(aPortlet) {
                        if(aPortlet.addValue!=undefined) {
                            aPortlet.addValue(aValue);
                        }
                    });
                };

                mThis.$("button[name=myButton]").click(function(){
                    addTextToTarget(myField$.val());
                    myField$.val("");

                });



                mThis.ready = function() {
                    // this is called when $(document).ready is called.                    
                };
                return mThis;
        };
})(jQuery, window);

