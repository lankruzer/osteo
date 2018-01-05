$(document).ready(function() {
	/*
		swimming-nav
	*/
	var header_top = document.querySelector(".header-top"),
		header_top_height = $(header_top).height(),
		header_nav = document.querySelector(".header-nav");
	
	function Swimming_nav() {
		if(+window.pageYOffset > +header_top_height) {
			if(!header_nav.classList.contains("fixed")) {
				header_nav.classList.add("fixed");
			}
		} else {
			if(header_nav.classList.contains("fixed")) {
				header_nav.classList.remove("fixed");
			}
		}
	};
	
	Swimming_nav();
	
	window.addEventListener("resize", function() {
		header_top_height = $(header_top).height();
	});
	
	window.addEventListener("scroll", function() {
		Swimming_nav();
	});
	
	
	/*
		phone mask
	*/
	$("input[type='tel']").mask("+7 (999) 999-99-99");
	
	
	/*
		slider personal
	*/
	$(".personal").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	
	/*
		slider personal certificates
	*/
	$(".personal-card-certificates").slick({
		vertical: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});
	
	
	/*
		slider reviews
	*/
	$(".reviews").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 8000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			}
		]
	})
	
	
	/*
		accordeon faq
	*/
	var li_question_node = document.querySelectorAll(".faqs .question"),
		li_answer_node = document.querySelectorAll(".faqs .answer"),
		li_question_arr = [li_question_node.length],
		li_answer_arr = [li_answer_node.length];
	
	for(var i = 0; i < li_question_node.length; i++) {
		li_question_arr[i] = li_question_node.item(i);
		li_answer_arr[i] = li_answer_node.item(i);
		$(li_answer_arr[i]).slideUp(0);
	}
	
	li_question_arr.forEach(function(li, i, li_question_arr) {
		li.addEventListener("click", function(evt) {
			for(var y  = 0; y < li_answer_arr.length; y++) {
				if(y != i) {
					$(li_answer_arr[y]).slideUp(250);					
				}
			}
			$(li_answer_arr[i]).slideToggle(500);
		});
	})
	
	
	/*
		map
	*/
	var isMapsApiLoaded = false;
	window.mapApi = function () {
		isMapsApiLoaded = true;

		google.maps.event.addDomListener(window, 'load', init);

		function init() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 10,
				scrollwheel: false,
				mapTypeControl: false,


				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(55.719906, 37.453559),
			}
			
			// Get the HTML DOM element that will contain your map 
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			// Let's also add a marker while we're at it
			var image = "../osteo/img/placemark.png";
			
			var contentString1 = 
			 '<div class=' + 'open-placemark clearfix' + '>' +
				'<div class=' + 'open-placemark-img' + '>' + 
					'<img src=' + '../osteo/img/placemark.png' + '>' + 
				'</div>' + 
				'<adress>г. Раменское, офис 5, ул. Красноармейская, д.25а</address>' + 
				'<p class="work-time">Время работы: пн-сб 10:00-21:00</p>' +
				'<a href="tel:84955075089">8 (495) 507-508-9</a>' + 
				'<a href="#" class="btn-call-js">Перезвоните мне</a>' + 
			'<div>';
			
			var infowindow1 = new google.maps.InfoWindow({
				content: contentString1
			});

			var marker1 = new google.maps.Marker({
				position: new google.maps.LatLng(55.719906, 37.453559),
				map: map,
				icon: image,
				title: "Зал 1"
			});

			marker1.addListener('click', function() {
				infowindow1.open(map, marker1);
			});


		}
	}

});