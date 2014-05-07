

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


function verticallyAlignThings() {

	// sidebar
//	var thisheight = $(".view-projects-menu").height() + $(".logo").height() + $(".hpdheurle-menu").height();
//	$("section.region-sidebar-first").css("margin-top", ((0 - thisheight) / 2) + "px");
	
	console.log((($("section.region-sidebar-first .section-inner").height()) / 2) + "px");
	
	$("section.region-sidebar-first .section-inner").css("margin-top", ((0 - $("section.region-sidebar-first .section-inner").height()) / 2) + "px");

	// project info
	$(".project-info").css("margin-top", "-" + ($(".project-info").height()/2) + 'px' );
	
	// project images
	thisheight = $(".project-images .field-item img").first().height();
	$(".project-images").css("margin-top", ((0 - thisheight) / 2) + "px");
	console.log(thisheight);
	console.log(((0 - thisheight) / 2) + "px");
}



var $ = jQuery.noConflict();

$(document).ready(function() {
	

//	resizePageWidth(); 

	verticallyAlignThings();

//
//	$("body").bind('mousewheel', function(event, delta) {          
//		if (delta > 0) { window.scrollBy(-150,0); } else window.scrollBy(150,0) ;
//	});
//	
	
$("a.art_reproduction").hover(
	function() {
		$(".sprite-outer.art.reproduction").addClass("mouseover");
	}, function() {
		$(".sprite-outer.art.reproduction").removeClass("mouseover");
	}
);

	$(".sprite-inner").hover(function() {
		var thisnid = $(this).attr("name");
		$(".project-title.node-" + thisnid).addClass("spritehover");
		$("#overlay").addClass("spritehover");
	}, function() {
		$(".project-title.spritehover").removeClass("spritehover");
		$("#overlay").removeClass("spritehover");
	}
	);
	
//	
//var $container = $(".view-imagewall .view-content");
//	$container.packery({
//	  itemSelector: '.imagewall-item',
//	  gutter: 10
//	});
//	

	var scroll = new BackgroundScroll();
	scroll.init();
	
});


var BackgroundScroll = function(params) {
	params = $.extend({
		scrollSpeed: 30,
		imageWidth: $('#overlay-grid').width(),
		imageHeight: $('#overlay-grid').height()
	}, params);
	
	var step = 1,
		current = 0,
		restartPosition = - (params.imageWidth - params.imageHeight);
	
	var scroll = function() {
		current -= step;
		if (current == restartPosition){
			current = 0;
		}	
		$('#overlay-grid').css('backgroundPosition', current + 'px ' + current + 'px');
	
	};
	
	this.init = function() {
		setInterval(scroll, params.scrollSpeed);
	
	};
};





$(document).on('mousemove', function(e){
    $('.project-title').css({
       left:  e.clientX,
       top:   e.clientY
    });
//    $('#overlay-grid').css('backgroundPosition', e.clientX + 'px ' + e.clientY + 'px');
    
});




	
