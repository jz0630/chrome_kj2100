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
	var a = $('tr');
	for(var i = 1; i < a.length; i++){
		var t = a[i], s = t.innerText.split('\t'), j = s.length - 2;
		if(t.innerText.indexOf('\t--\t') > 0){
			$($(t).find('td')[1]).find('a').last()[0].click()
			return;
		}
		if(s[0] == '返回课程列表' || j > 0 && s[j].match(/\d/) + '' == '0'){
			$(t).find('a')[0].click();
			return;
		}
	}
});