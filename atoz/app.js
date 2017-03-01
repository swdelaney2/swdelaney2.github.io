$(window).scroll(function () {

	window_width =  $(".background_one").width()
	window_height =  $(".background_one").height()

	original_width = 1080
	original_height = 1080

		$(".backgrounds").each(function(){
			current_position = $( this ).offset().top - $( document ).scrollTop()

			if (original_width < window_width) {
				console.log('called')
				new_image_width = window_width
				percent_increase = window_width/original_width
				new_image_height = original_height * percent_increase
				if (new_image_height < window_height) {
					new_image_height = window_height
					percent_increase = window_height / original_height
					new_image_width = original_width * percent_increase
				}
			} else {
				zoom_percentage = (window_height - current_position)/window_height
				new_image_width = original_width * zoom_percentage
				new_image_height = original_height

			}

			if (current_position < 0 ) {
				$(this).css("background-size", new_image_width + "px")
			}
		})
});
