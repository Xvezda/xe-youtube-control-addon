/**
 * @file youtube_control.js
 * @author Xvezda (xvezda@naver.com)
 */
(function($) {
	if(youtube_resize) {
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
	if(!$.isEmptyObject(youtube_query)) {
    	$('div.xe_content').each(function() {
			$('iframe[src*="//www.youtube"]').each(function() {
				var youtube_src = $(this).attr('src');
				for(var q in youtube_query) {
					youtube_src += (youtube_src.indexOf('?') == '-1') ? '?'+q+'='+youtube_query[q] : '&'+q+'='+youtube_query[q];
				}
				$(this).attr('src', youtube_src);
			});
		});
	}
})(jQuery);
