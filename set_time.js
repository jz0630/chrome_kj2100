/*
 * kj2100 Chrome Plugin for update class time
 * https://github.com/jz0630
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 * Author: Zhe Jiang
 * Version: 1
 * Date: 2015-12
 */

$(function(){
	$('audio')[0].playbackRate = 10000;
	setInterval(function(){
		var time = $('.jp-duration').text().split(':');
		time = time[0] * 60 + parseInt(time[1]) - 1;
		$('audio')[0].currentTime = time;
	}, 5000)
});