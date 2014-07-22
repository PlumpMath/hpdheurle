

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
//	
//	console.log((($("section.region-sidebar-first .section-inner").height()) / 2) + "px");
//	
//	
	
//	$("section.region-sidebar-first .section-inner").css("margin-top", ((0 - $("section.region-sidebar-first .section-inner").height()) / 2) + "px");

	// project info
//	$(".project-info").css("margin-top", "-" + ($(".project-info").height()/2) + 'px' );
	
	// project images
	thisheight = $(".project-images .field-item img").first().height();
//	$(".project-images").css("margin-top", ((0 - thisheight) / 2) + "px");
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
			$(".solid-object.art.reproduction").addClass("mouseover");
		}, function() {
			$(".solid-object.art.reproduction").removeClass("mouseover");
		}
	);
	
	
	var scroll = new BackgroundScroll();
	scroll.init();


	$(".solid-object-inner").hover(function() {
		var thisnid = $(this).parent().attr("name");
		
		// change gradient
		var thisgradients = $(".project-gradient.node-" + thisnid).text().trim().split("\n");
		$.each(thisgradients, function(){
			thisgrad = String(this).trim()
			$("#overlay-gradient").css({'background': thisgrad});
		});
		
		// hover tooltip 
		$(".project-title.node-" + thisnid).addClass("spritehover");

		// hover sprite
		$(this).addClass("spritehover");
//		$(".solid-object-negative.node-" + thisnid).addClass("spritehover");

		// let overlay know we're hovering
		$("#overlay").addClass("spritehover");

			
//		$(".view-display-id-block_3 .node-" + thisnid).css("z-index", 201);
		
	}, function() {
		$(".project-title.spritehover").removeClass("spritehover");
		$(".solid-object-inner.spritehover").removeClass("spritehover");
		$("#overlay").removeClass("spritehover");
//		$(".view-display-id-block_3 .node-" + thisnid).css("z-index", 1);
	}
	);
	
	resizeImages();
	moveSprites();

	
});


var BackgroundScroll = function(params) {
	params = $.extend({
		scrollSpeed: 30,
		imageWidth: $('#overlay-grid').width(),
		imageHeight: $('#overlay-grid').height()
	}, params);
	
	var stepX = -1,
		stepY = 1,
		currentX = 0,
		currentY = 0;
		//restartPositionX = - params.imageWidth - params.imageHeight);
	
	var scroll = function() {
		currentX += stepX;
		currentY -= stepY;
		currentX = currentX % (params.imageWidth * 20);
		currentY = currentY % (params.imageHeight * 20);
		
		$('#overlay-grid').css('backgroundPosition', currentX + 'px ' + currentY + 'px');
	
	};
	
	this.init = function() {
		setInterval(scroll, params.scrollSpeed);
	
	};
	
	this.setDegree = function(deg) {
		stepX = Math.sin(deg * 10);
	}
	
	
	$("#block-views-projects-menu-block .views-row-last img").load(function() {
		moveSprites();
	});
};




$(window).on('resize', function(){
	resizeImages();
	moveSprites();
});


function moveSprites() {
	var solidobject_neg = $("#block-views-projects-menu-block");
	var solidobject_pos = $("#block-views-projects-menu-block-3");
//	$(".view-display-id-block_3").offset(orgoff);
//	$(".view-display-id-block_3 {
//	console.log(solidobject_neg.offset());
//	console.log(solidobject_pos.offset());
	solidobject_neg.offset(solidobject_pos.offset());
//console.log(solidobject_neg.offset());
//console.log(solidobject_pos.offset());
//console.log(solidobject_neg.offset());
//console.log(solidobject_pos.offset());

}


function resizeImages() {
	var win = $(window);
	var imgmaxheight = parseInt($(".project-images td img").first().css("max-height"), 10);
	var winheight = win.height();
	var imgpadding = 100;
	console.log(imgmaxheight);
	console.log(winheight);
	if (winheight < imgmaxheight) {
		console.log("smallerthan");
		$(".project-images-wrapper").css("margin-top", "-" + ((winheight - imgpadding) / 2) + "px");
		$(".project-images td.image img").css("height", (winheight - imgpadding) + "px");
		$(".project-images td.solid-next img").css("height", ((winheight - imgpadding) * 0.4) + "px");
	}
}

$(document).on('mousemove', function(e){
    $('.project-title').css({
       left:  e.clientX,
       top:   e.clientY
    });
//    $('#overlay-grid').css('backgroundPosition', e.clientX + 'px ' + e.clientY + 'px');
    
});




	
