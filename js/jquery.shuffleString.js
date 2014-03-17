(function($, window, document, undefind){
	// local global go here - referenced via closure
 
	$.fn.turnRed =function(options){
		
		return this.each(function(){
			$(this).css('color', 'red');
		});
	};

	
}(jQuery, window, document));
