(function($, window, document, undefind){
	// local global go here - referenced via closure
	var oSize;
	
	$.fn.turnGreen =function(options){
		options = $.extend({}, $.fn.config, options);
		return this.each(function(){
			$(this).css('color', 'green');
		});
	};

	$.fn.popHover = function(options) {
		options = $.extend({}, $.fn.config, options);
		
		return this.each(function() {
			oSize = parseInt($(this).css("font-size"));
			$(this).mouseover(function() {
				$(this).stop().animate({
					opacity: options.opa
					, fontSize: oSize * options.size
				 
				}, options.enlSpeed, function() {
					$(this).animate({ 
						opacity: 1
						
						, color: '#000000'
					}, options.backSpeed);
					
				});
			});
			
			$(this).mouseout(function() {
				$(this).stop().animate({
					fontSize: oSize
				}, options.outSpeed);
			});
		});
	};

	$.fn.config ={
		// set values and custom functions
		opa: 0.5
		, size: 1.2
		, weight: 1.06
		, enlSpeed: 400
		, backSpeed: 400
		, outSpeed: 400
	};
}(jQuery, window, document));
