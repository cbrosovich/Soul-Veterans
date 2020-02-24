// var buttton = document.getElementByClassName('btn-enter');

// button.onclick = function() {
// 	var section = document.getElementByClassName('homepage');
// 	if (section.style.display === 'none') {
// 		section.style.display === 'block';
// 	}
// 	else {
// 		section.style.display === 'none';
// 	}
// };

// var btnEnter = document.getElementByClassName('btn-enter');
// function myFunction() {
// 	var video = document.getElementById("hp-hero");
// 	if (video.style.display === 'block') {
// 		video.style.display === 'none';
// 	}
// };


function closeDiv () {
  var videoDiv = document.getElementById("hp-hero");
  if (videoDiv.style.display === "block") {
    videoDiv.style.display = "none";
  } else {
    videoDiv.style.display = "block";
  }
}



// var $ = jQuery;
// $(document).ready(function() {	
	
// 	var clickEventType = document.ontouchstart !== null ? 'click':'touchstart';
// 	// $(document).on('clickEventType', variable, function() { ...
	
// 	// COOKIE (ON READY)
// 	if (!$('.cookie-container').hasClass('cookie-none')) {
// 		$('.cookie-container').show();
// 	}
// 	// END	
		
// 	// MOBILE MENU
// 	mobileMenu();	
// 	function mobileMenu() {
// 		$('.btn-mobile-menu').click(function() {	
		
// 			if($(this).hasClass('active-menu-btn')) {
// 				closeMenu();
// 			} else {
// 				openMenu();
// 			}
// 			return false;
// 		});

// 		function closeMenu() {
// 			$('nav.mobile-menu')
// 				.removeClass('open-menu')
// 				.addClass('close-menu');
// 			$('.btn-mobile-menu').removeClass('active-menu-btn');
// 		}			
		
// 		function openMenu() {
// 			$('nav.mobile-menu').addClass('open-menu');
// 			$('.btn-mobile-menu').addClass('active-menu-btn');
// 		}
// 	}
// 	// END
	
// 	// ADD CLASS TO FIRST HTML ELEMENT OF ANY KIND IN MAIN CONTENT AREAS
// 	$('.sp-content, .product-intro-text').each(function() {
// 		$(this)
// 			.children()
// 			.first()
// 			.addClass('content-hero');

// 		$(this)
// 			.children()
// 			.last()
// 			.css('margin-bottom', 0);	
// 	});	

// 	// END ADD CLASS ... 	

// 	// MULTIPLE ACCORDIONS (ON LOAD)
		
// 	$('nav.mobile-menu > div > ul > li.menu-item-has-children > a')
// 		.contents()
// 		.unwrap()
// 		.wrap('<span class="expand"></span>');	
		
// 	$('.expand')
// 		.next()
// 		.hide();
	
// 	// ONLY IN PLACE IF SOMEONE WANTS TO HAVE THE FIRST ACCORDION OPEN
// 	$('.expanded').each(function() {
// 		if ($(this).index() === 0 || $(this).is(':first-child')) {
// 			$(this)
// 				.next()
// 				.show();
// 			$('i', this)
// 				.removeClass('icon-accordion-open')
// 				.addClass('icon-accordion-close');						
// 		} else {
// 			$(this).removeClass('expanded');
// 			$('i', this)
// 				.removeClass('icon-accordion-close')
// 				.addClass('icon-accordion-open');	
// 		}	
// 	});
// 	// END
	
// 	// ADD 'CONTENT-HERO' CLASS TO FIRST ELEMENT IN ACCORDION DROPDOWN
// 	$('.expanded-content').each(function() {
// 		$(this)
// 			.children()
// 			.first()
// 			.addClass('content-hero');
// 	});
// 	// END
	

// 	// RESPONSIVE VIDEO BRANDING
// 	var allYtVideos = $('iframe[src^="https://www.youtube.com"]');
// 	var allVimeoVideos = $('iframe[src^="https://player.vimeo.com"]');
	
// 	// YouTube Query Parameters
// 	allYtVideos.each(function() {
// 		$(this).attr({		
// 			src: $(this).attr('src') + '?autoplay=0&modestbranding=1&autohide=1&showinfo=0&rel=0'
// 		});
// 	});
	
// 	// Vimeo Query Parameters
// 	allVimeoVideos.each(function() {
// 		$(this).attr({		
// 			src: $(this).attr('src') + '?byline=false&portrait=false&title=false'
// 		});
// 	});
// 	// END
		
		
// 	// ANCHOR TAG SCROLLING	
// 	$('a.scroll[href^="#"]').click(function() {		
// 		if ($(this).attr('href') == '#' ) {
// 			// Do nothing
// 		} else {
// 			var thisHref = $(this).attr('href');
// 			thisHref = thisHref.split('#');
// 			thisHref = thisHref[1];
// 			var thisAnchor = $('a[id=' + thisHref + ']');
// 			var anchorOffset = thisAnchor.offset().top - 20;
// 			scrollJump(anchorOffset);					
// 			return false;
// 		}
// 	});

// 	function scrollJump(thisHref) {
// 		$('html, body').animate({
// 			scrollTop: thisHref
// 		}, 500);
// 	} 
// 	// END
	
// 	// BACK TO TOP
// 	backToTop();
// 	function backToTop() {
// 		$('.back-to-top').click(function () {
// 			$('html, body').animate({ scrollTop: 0 }, 'slow');
// 			return false;
// 		});
	
// 		if (!('ontouchstart' in window)) {
// 			$('.back-to-top').on({
// 				mouseover: function () {
// 					$(this).css('opacity', 1);
// 				},
// 				mouseout: function () {
// 					$(this).css('opacity', 0.8);
// 				}
// 			});
// 		}
	
// 		$(window).on('scroll', function () {
// 			var windowScroll = $(this).scrollTop();
// 			var nav = $('header');
			
// 			if (windowScroll >= nav.offset().top + nav.height()) {
// 				$('.back-to-top')
// 					.fadeIn(800);
// 			} else {
// 				$('.back-to-top')
// 					.fadeOut(800);
// 			}
// 		});
// 	}
// 	// END
	
// });

// // FUNCTIONS WE DON'T WANT TO RUN ON LOAD

// 	// MULTIPLE ACCORDIONS	
// 	var clickEventType = document.ontouchstart !== null ? 'click':'touchstart';
	
// 	// COOKIE

// 		// Create a Cookie
// 		function setCookie() {
// 			var currentDate = new Date();
// 			var expirationDate = new Date(currentDate.getTime() + 1560526586372);
// 			document.cookie = 'MartinovTerms=Accepted; expires=' + expirationDate;
// 		}
		
// 		// Get the cookie and create an array to make sure it exists
// 		var cookie = document.cookie.split(';')
// 			.map(function(x){ 
// 				return x.trim().split('='); 
// 			}).filter(function(x){ 
// 				return x[0] === 'MartinovTerms';
// 			}).pop();
		
// 		// Check to make sure the value matches the cookie
// 		if (cookie && cookie[1] === 'Accepted') {
// 			$('.cookie-container')
// 				.addClass('cookie-none')
// 				.remove();
// 		}
		
// 		// Cookie click
// 		$('.btn-cookie-accept').on(clickEventType, function() {
// 			setCookie();
// 			$('.cookie-container').addClass('cookie-slide');
// 			$(this)
// 				.delay(800)
// 				.remove();
// 		});
	
// 	//END	
	
	
// 	$(document).on(clickEventType, '.expand', function() {		
// 		if ($(this).hasClass('expanded')) {
// 			$(this)
// 				.next()
// 				.slideUp('fast');
// 				var contentArea = $(this).next();
// 				var accordionVideo = $('.video > iframe', contentArea);
// 				var accordionvideoURL = accordionVideo.attr('src');
// 				accordionVideo.attr('src', "");
// 				accordionVideo.attr('src', accordionvideoURL);		
// 			$(this).removeClass('expanded');
// 			$('i', this)
// 				.removeClass('icon-accordion-close')
// 				.addClass('icon-accordion-open');		
// 		} else {
// 			var thisParent = $(this).parent();
// 			thisParent
// 				.children('.expanded')
// 				.each(function () {
// 					$(this)
// 						.next()
// 						.slideUp('fast');
// 					var contentArea = $(this).next();
// 					var accordionVideo = $('.video > iframe', contentArea);
// 					var accordionvideoURL = accordionVideo.attr('src');
// 					accordionVideo.attr('src', "");
// 					accordionVideo.attr('src', accordionvideoURL);
// 					$(this).removeClass('expanded');
// 					$('i', this)
// 						.removeClass('icon-accordion-close')
// 						.addClass('icon-accordion-open');	
// 			});
// 			$(this)
// 				.next()
// 				.slideDown('fast', function () {
// 					var el = $(this);
// 					scrollToDiv(el); // Reference to scroll function
// 				});				
// 			$(this).addClass('expanded');
// 			$('i', this)
// 				.removeClass('icon-accordion-open')
// 				.addClass('icon-accordion-close');	
// 		}
// 		return false;
// 	});


// 	// FACEBOOK FEED LOAD MORE BUTTON
// 		function myFunction () {
// 			var element = document.getElementById("cff-load-more");
//    			element.classList.add("btn");
// 		}
	
	
// 	// SCROLL FUNCTION	
// 	function scrollToDiv(element) {
// 		var offset = element.offset();
// 		var offsetTop = offset.top - 120;
// 		$('body, html').animate({
// 			scrollTop: offsetTop
// 		}, 500);
// 	} 
// 	// END


// //END	