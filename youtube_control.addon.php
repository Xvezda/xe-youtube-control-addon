<?php
/* Copyright (C) Xvezda <http://xvezda.blog.me> */

if(!defined('__XE__'))
{
	exit();
}

/**
 * @file youtube_control.addon.php
 * @author Xvezda (xvezda@naver.com)
 * @brief Add-on to control youtube video player
 */
if($called_position == 'before_display_content' && Context::get('module') != 'admin' && $oModule->act == "dispBoardContent" && (Context::getResponseMethod() == 'HTML' || !isCrawler()))
{
	$tags = <<<EOD
<script>
//<![CDATA[
var youtube_resize = %s;
var youtube_option = {
%s
};
//]]>
</script>
EOD;

	$resize = ($addon_info->resize != '') ? 'true' : 'false';

	$temp_arr = array(); // temp array
	$func_arr = array('xe_validator_id', 'xe_run_method', 'resize');

	foreach($addon_info as $key => $val)
	{
		if(in_array($key, $func_arr) || $val == '') continue;
        
		array_push($temp_arr, '    "'.$key.'" : "'.$val.'"'); // Push
	}
	$params = implode($temp_arr, ','.PHP_EOL); // Array to String

	$tags = sprintf($tags, $resize
					, $params);

	Context::addHtmlFooter($tags);

	Context::loadFile(array('./addons/youtube_control/js/youtube_control.min.js', 'body', '', null), true);
}

/* End of file youtube_control.addon.php */
/* Location: ./addons/youtube_control/youtube_control.addon.php */
