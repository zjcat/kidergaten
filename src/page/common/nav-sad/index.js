/*
* @Author: Administrator
* @Date:   2017-09-14 09:57:30
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 09:01:24
*/
require('./index.css');
var page = {
	getElem : function(){
		$(".icon").each(function(){
			var getElemPosion = $(this).attr("data-num");
			$(this).css("background-position-y",-getElemPosion);
		});
	}
}
module.exports = page;
