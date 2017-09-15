/*
* @Author: Administrator
* @Date:   2017-09-14 10:01:07
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 08:55:40
*/
require('./index.css');
require('page/common/header/index.js');
var navSad = require('page/common/nav-sad/index.js');
var _cat = require('util/interface.js');
var navList = require('page/common/nav/index.js');
require('page/common/footer/index.js');
$(function() { 
	//页面加载完毕才执行
    navList.init({
        name : 'tour-list'
    });
    navSad.getElem();
});