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

if($('body').html().indexOf('登录超时')>-1){// 登录超时跳转至登录
	location.href = 'http://bj.kj2100.com/';
}else if($('[name="RealName"]').length>0){
	$('[name="RealName"]').on('blur',function(){
		localStorage.RealName = $(this).val();
	}).val(localStorage.RealName);
	$('[name="SFZ"]').on('blur',function(){
		localStorage.SFZ = $(this).val();
	}).val(localStorage.SFZ);
	$('.alterWindow').hide()
}