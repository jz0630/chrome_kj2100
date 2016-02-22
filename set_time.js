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
	if($('audio').lenght>0){
		$('audio')[0].playbackRate = 10000;
		setInterval(function(){
			var time = $('.jp-duration').text().split(':');
			time = time[0] * 60 + parseInt(time[1]) - 1;
			$('audio')[0].currentTime = time;
		}, 5000);
	}else{// 需要控制台手动运行
		setInterval(function(){
		var s=$('#WebJPlayer_Voide').data('jPlayer').status,t=s.currentTime;
		if(t+20>s.duration){
			return;
		}else{
			t+=1200;
		}
		if(s.duration<t)t=s.duration-20;$('#WebJPlayer_Voide').jPlayer('play', t);
		console.log(s.duration+' '+t);
		}, 5000);
	}
});