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
	if(t.innerText.indexOf('《ERP与财务软件操作》　第十三讲') < 0 && t.innerText.indexOf('\t--\t') > 0){
	    $($(t).find('td')[1]).find('a').last()[0].click();
	    return;
	}
	if(s[0] == '返回课程列表'){
	    $(t).find('a')[0].click();
	    return;
	}
	if(!s[j] || s[0].indexOf('ERP与财务软件操作') > 0)
	    continue;
	var arr = s[j].match(/(\d+).(\d+)/);
	if(j > 0 && arr && arr[1] != arr[2]){
	    $(t).find('a')[0].click();
	    return;
	}
    }
});
