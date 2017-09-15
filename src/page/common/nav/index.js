/*
* @Author: Administrator
* @Date:   2017-09-12 10:07:04
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 10:48:59
*/
require('./index.css');
var int = require('util/interface.js');
var templateIndex = require('./index.string');
var navList = {
	init : function(option){
		//合并同类项
		$.extend(this.option, option);
        this.renderNav();
	},
	renderNav : function(){
		for(var i = 0 , iLength = this.option.navList.length ; i < iLength  ; i++){
			if(this.option.name === this.option.navList[i].name){
				this.option.navList[i].isActive = true ;
			}
		}
		var navHtml = int.renderHtml(templateIndex,{
			navList : this.option.navList
		});
		$(".navbox").html(navHtml);

	},
	option : {
		name : '',
		navList :[
			{'content' : '首页', 'href' : 'index.html','name' : 'index'},
			{'content' : '饮食指导', 'href' : 'yiliao.html','name' : 'yinshi'},
			{'content' : '医疗指导', 'href' : 'yinshi.html','name' : 'yiliao'},
			{'content' : '户外扩展', 'href' : 'expand-list.html','name' : 'expand-list'},
			{'content' : '旅游指南', 'href' : 'tour-list.html','name' : 'tour-list'},
			{'content' : '公司介绍', 'href' : 'gongsi.html','name' : 'gongsi'},
			{'content' : '联系我们', 'href' : 'lianxi.html','name' : 'lianxi'}

		]
	}
}


module.exports = navList