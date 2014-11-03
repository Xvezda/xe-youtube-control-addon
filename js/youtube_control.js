/**
 * @file youtube_control.js
 * @author Xvezda (xvezda@naver.com)
 */
(function($) {
	if(typeof youtube_resize !== 'undefined' && youtube_resize == true) {
		$('div.xe_content').each(function() {
			var article_width = $(this).innerWidth();
				$('iframe[src*="//www.youtube"]', this).each(function() {
				var ytb_width = $(this).width();
				var ytb_height = $(this).height();
				if(ytb_width <= article_width) return;
				var ytb_newh = parseInt(article_width / ytb_width * ytb_height);
				$(this).attr({
					'width' : article_width,
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
