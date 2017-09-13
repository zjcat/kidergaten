/*
* @Author: Administrator
* @Date:   2017-09-12 10:07:04
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-13 10:56:05
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
			{'content' : '医疗指导', 'href' : 'yiliao.html','name' : 'yiliao'},
			{'content' : '饮食指导', 'href' : 'yinshi.html','name' : 'yinshi'},
			{'content' : '户外扩展', 'href' : 'huwai.html','name' : 'huwai'},
			{'content' : '旅游指南', 'href' : 'lvyou.html','name' : 'lvyou'},
			{'content' : '公司介绍', 'href' : 'gongsi.html','name' : 'gongsi'},
			{'content' : '练习我们', 'href' : 'lianxi.html','name' : 'lianxi'}

		]
	}
}


module.exports = navList