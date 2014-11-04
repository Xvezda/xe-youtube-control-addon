/**
 * @file youtube_control.js
 * @author Xvezda (xvezda@naver.com)
 */
(function($) {
	if(typeof youtube_resize !== 'undefined' && youtube_resize != 'off') {
		$('div.xe_content').each(function() {
			var resize_width = (!isNaN(youtube_resize)) ? Number(youtube_resize) : $(this).innerWidth();
			$('iframe[src*="//www.youtube"]', this).each(function() {
				var ytb_width = $(this).width();
				var ytb_height = $(this).height();
				if(youtube_resize == 'auto' && ytb_width <= resize_width) return;
				var ytb_newh = parseInt(resize_width / ytb_width * ytb_height);
				$(this).attr({
					'width' : resize_width,
					'height' : ytb_newh
				});
			});
		});
	}
	if(typeof youtube_option !== 'undefined' && !$.isEmptyObject(youtube_option)) {
    	$('div.xe_content').each(function() {
			$('iframe[src*="//www.youtube"]').each(function() {
				var youtube_src = $(this).attr('src');
				for(var q in youtube_option) {
					youtube_src += (youtube_src.indexOf('?') == '-1') ? '?'+q+'='+youtube_option[q] : '&'+q+'='+youtube_option[q];
				}
				$(this).attr('src', youtube_src);
			});
		});
	}
})(jQuery);
