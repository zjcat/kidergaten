/*
* @Author: Administrator
* @Date:   2017-09-08 15:50:30
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-08 18:00:21
*/
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin') ;

//获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name){
	return {
		template : './src/view/'+name+'.html',
 		filename : 'view/'+name+'.html',
 		inject   : true,
 		hash     : true,
 		chunks   : ['common',name]
	}
}

//webpack config
var config = {
	entry: {
	 	'common' : './src/page/common/index.js',
	 	'index'  : './src/page/index/index.js',
	 	'login'  : './src/page/login/index.js'
	},
    output: {
         path: './dist',//放置的目标文件
         filename: 'js/[name].js'//[name]是上面的文件名，分别创建
    },
    externals : {
     	//引入外部模块
     	'jquery' : 'window.jQuery'
    },
    module: {
    	loaders : [
     		{test : /\.css$/, loader : ExtractTextPlugin.extract("style-loader","css-loader") },
     		{test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=20000&name=img/[name].[ext]'}
		]
  	},
  	//提取公共模块
  	plugins : [
  		//独立通用模块到js/base.js
     	new webpack.optimize.CommonsChunkPlugin({
     		name     : 'common',//自建公共文件名
     		filename : 'js/base.js'//公共的内容所存在的文件
     	}),
     	//把css单独打包到文件夹
     	new ExtractTextPlugin("css/[name].css"),
     	//html模板处理
     	new HtmlWebpackPlugin(getHtmlConfig('index')),
     	new HtmlWebpackPlugin(getHtmlConfig('login'))
    ]
}
module.exports = config;