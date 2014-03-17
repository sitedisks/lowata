(function($, window, document, undefind){
	// local global go here - referenced via closure
	var oSize;
	var oColor;
	
	$.fn.turnGreen =function(options){
		options = $.extend({}, $.fn.config, options);
		return this.each(function(){
			$(this).css('color', 'green');
		});
	};

	$.fn.popHover = function(options) {
		options = $.extend({}, $.fn.config, options);
		return this.each(function() {
			$(this).mouseover(function() {
				oSize = parseInt($(this).css("font-size"));
				oColor = $(this).css("color");
				$(this).stop().animate({
					opacity: options.opa
					, fontSize: oSize * options.size
					, color: options.color
				}, options.enlSpeed, function() {
					$(this).animate({ 
						opacity: 1
					}, options.backSpeed);
					
				});
			});
			$(this).mouseout(function() {
				$(this).stop().animate({
					fontSize: oSize
					, color: oColor
				}, options.outSpeed);
			});
		});
	};

	$.fn.config ={
		// set values and custom functions
		opa: 0.5
		, size: 1.2
		, enlSpeed: 400
		, backSpeed: 400
		, outSpeed: 400
		, color: '#3AA6FF' 
	};
}(jQuery, window, document));
