(function($){
	if ($.Portlet == undefined) {
		$.Portlet = function(mNameSpace) {
			var mThis = this;
			var m$ = jQuery(mNameSpace);
	
			/**
			 * makes query inside portlet
			 */		
			mThis.query = function(a$) {
				return $(a$,m$)
			};
			
			/**
			 * returns portlet nameSpace
			 */
			mThis.nameSpace = function() {
				return mNameSpace;
			};
			
			return mThis;
		};		
		// Page portlet's are registed to here
		var mPagePorlets = {};
		
		
		/**
		 * add new portlet to page
		 */		
		$.addPortlet = function(aPortlet){
			if(aPortlet.nameSpace==undefined ) {
				// Not a portlet
			};
			if(mPagePorlets[aPortlet.nameSpace()]!=undefined) {
				// Already found portlet with same namespace
			}
			mPagePorlets[aPortlet.nameSpace()] = aPortlet;
		};
		
		/**
		 * find's portlet by namespace
		 */		
		$.portletByNameSpace = function(aNameSpace) {
			var lPortlet = mPagePorlets[aNameSpace];
			if(lPortlet==undefined) {
				return null;
			}
			return lPortlet;		
		};
		/**
		 * find's portlet by call back
		 */	
		$.searchPortlet = function(aTestCallback) {
			for(var lNameSpace in mPagePorlets ) {
				if(aTestCallback(mPagePorlets[lNameSpace])){
					return mPagePorlets[lNameSpace];
				}			
			};
			return null;		
		};
		/**
		 * @return porlet count on page
		 */		
		$.portletCount = function() {
			return mPagePorlets.length;
		}
		/**
		 * @return all portlet's on page on array
		 */				
		$.portlets = function() {
			var lPortlets = [];
			var index=0;
			for( var lNameSpace in mPagePorlets) {
				lPortlets[index] = mPagePorlets[lNameSpace];
			};			
			return portlets;
		};
		
		$(document).ready( function(){
			for( var lNameSpace in mPagePorlets) {
				var lPortlet = mPagePorlets[lNameSpace];
				if(lPortlet.ready!=undefined) {
					lPortlet.ready();
				}
			};
		});
	};
	
})(jQuery);
