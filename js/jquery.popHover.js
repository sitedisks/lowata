(function($, window, document, undefind){
	// local global go here - referenced via closure

	$.fn.turnGreen =function(options){
		options = $.extend({}, $.fn.config, options);
		
		return this.each(function(){
		
			$(this).css('color', 'green');
		 	
		});
	};

	$.fn.popHover = function(options) {
		options = $.extend({}, $.fn.config, options);
		
		return this.each(function() {
			
		});
	};

	$.fn.config ={
		// set values and custom functions
		opa: 0.5
		, size: 1.2
		, weight: 1.06
		, enlSpeed: 400
		, backSpeed: 400
		, outSpeed: 100
	};
}(jQuery, window, document));
