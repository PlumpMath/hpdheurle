

function resizePageWidth() {
	if($(".node-type-exhibition").not(".section-node-edit").exists()) { /*check if we are busy displaying an exhibition */
		var tot_width = 0;	
		// add sidebars
/*		tot_width += $("#sidebar-left").outerWidth(true);
		tot_width += $("#sidebar-right").outerWidth(true);  */ 

		tot_width += $(".exhibition-text").outerWidth(true); 

		$(".exhibition-video-piece").each(function() {
			tot_width += 950; /* man, this is dirty because the width of the video is handcoded in, but it has to be done because this javascript is called before iframe video loads. */
		});
		$(".exhibition-artwork-piece").each(function() {
			tot_width += $(this).outerWidth(true);
		});

		$("#content").width(tot_width + 40 ); /* the 20 is just for padding on the right */
	}


	if($(".view-id-artwork_year_view.view-display-id-page_1").not(".section-node-edit").exists()) { /*check if we are busy displaying artwork for a given year */
		var tot_width = 0;	

		// add sidebars
/*		tot_width += $("#sidebar-left").outerWidth(true);
		tot_width += $("#sidebar-right").outerWidth(true);  */

		$(".view-artwork-year-view .artwork").each(function() {
			tot_width += $(this).outerWidth(true);
		});

		$("#content").width(tot_width + 20 ); /* the 20 is just for padding on the right */
	}
}


 $(document).ready(function() {
	
	if($(".exhibition-body").exists()) {
		$(".exhibition-body").columnize({height: 500, balanced: false}); /* this turns long exhibition text into columns. 500 is hardcoded height. */
	}

	resizePageWidth(); 

	$("body").bind('mousewheel', function(event, delta) {          
		if (delta > 0) { window.scrollBy(-100,0); } else window.scrollBy(100,0) ;
	});
});