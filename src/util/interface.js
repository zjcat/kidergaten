/*
* @Author: Administrator
* @Date:   2017-09-11 10:01:55
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-11 10:53:46
*/
'use strict';
var Hogan = require('hogan.js');
var conf = {
	serverHost : ''
};
var _cat = {
	//获取后端数据
	request : function(param){
		var _this = this;
		$.ajax({
			type : param.method || 'get',
			url : param.url || '',
			dataType : param.type || 'json',
			data : param.data || '',
			success : function(res){
				//请求成功
				if(0 === res.status){
					typeof param.success === 'function' && param.success(res.data,res.msg)
				}
				//没有登录状态，需要强制登录
				else if(10 ===res.status){
					_this.doLogin();
				}
				//请求数据错误
				else if(1 ===res.status){
					typeof param.error === 'function' && param.error(res.msg)
				}
			},
			error : function(err){
				typeof param.error === 'function' && param.error(err.statusText)
			}
		});
	},
	//获取服务器地址
	getServerUrl : function(path){
		return conf.serverHost + path ;
	},
	//获取url参数
	getUrlParam : function(name){
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		console.log(reg)
		var result = window.location.search.substr(1).match(reg);
		return  result ? decodeURIComponent(result[2]) : null;
	},
	//渲染html模板
	renderHtml : function(htmlTemplate,data){
		var template = Hogan.compile(htmlTemplate),
			result = template.render(data);
			return result;
	},
	//成功提示
	successTips :function(msg){
		alert(mag || '操作成功');
	},
	errorTips : function(msg){
		alert(msg || '哪里不对了吧');
	},
	//字段验证，支持是否为空，手机，邮箱
	validate : function(value,type){
		var value = $.trim(value);
		if('require' === type){
			return  !!value ;
		}
		//手机号
		if('phone' === type){
			return /^1\d{10}$/.test(value);
		}
		//邮箱验证
		if('email' === type){
			return  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
		}
	},
	//统一登录处理
	doLogin :function(){
		window.location.href = './user-login.html?redirect' + encodeURIComponent(window.location.href);
	},
	goHome : function(){
		window.location.href = './user-login.html?redirect';
	},
	windowH : function(){
		var getWh = $(window).height();
		return getWh;
	}

}

module.exports = _cat;