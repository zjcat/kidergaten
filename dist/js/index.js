webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: Administrator
	 * @Date:   2017-09-08 15:38:05
	 * @Last Modified by:   Administrator
	 * @Last Modified time: 2017-09-13 10:58:04
	 */
	__webpack_require__(1);
	__webpack_require__(21);
	__webpack_require__(27);
	var _cat = __webpack_require__(31);
	var navList = __webpack_require__(35);
	//轮播图
	var page = {
	    banner: function() {
	        var images_height = '400px';
	        //图片路径/链接(数组形式):
	        var images_url = [__webpack_require__(39),__webpack_require__(40),__webpack_require__(41),__webpack_require__(42)];
	        var images_count = images_url.length;
	        //console.log(images_count);

	        //创建节点
	        //图片列表节点
	        for (var j = 0; j < images_count + 1; j++) {
	            $('.banner ul').append('<li></li>')
	        }
	        //轮播圆点按钮节点
	        for (var j = 0; j < images_count; j++) {
	            if (j == 0) {
	                $('.banner ol').append('<li class="current"></li>')
	            } else {
	                $('.banner ol').append('<li></li>')
	            }
	        }

	        //载入图片
	        $('.banner ul li').css('background-image', 'url(' + images_url[0] + ')');
	        $.each(images_url, function(key, value) {
	            $('.banner ul li').eq(key).css('background-image', 'url(' + value + ')');
	        });

	        $('.banner').css('height', images_height);

	        $('.banner ul').css('width', (images_count + 1) * 100 + '%');

	        $('.banner ol').css('width', images_count * 20 + 'px');
	        $('.banner ol').css('margin-left', -images_count * 20 * 0.5 - 10 + 'px');

	        //=========================

	        var num = 0;
	        //获取窗口宽度
	        var window_width = 1200;
	        $(window).resize(function() {
	            window_width = 1200;
	            $('.banner ul li').css({ width: window_width });
	            clearInterval(timer);
	            nextPlay();
	            timer = setInterval(nextPlay, 5000);
	        });
	        //console.log(window_width);
	        $('.banner ul li').width(window_width);
	        //轮播圆点
	        $('.banner ol li').mouseover(function() { //用hover的话会有两个事件(鼠标进入和离开)
	            $(this).addClass('current').siblings().removeClass('current');
	            //第一张图： 0 * window_width
	            //第二张图： 1 * window_width
	            //第三张图： 2 * window_width
	            //获取当前编号
	            var i = $(this).index();
	            //console.log(i);
	            $('.banner ul').stop().animate({ left: -i * window_width }, 500);
	            num = i;
	        });
	        //自动播放
	        var timer = null;

	        function prevPlay() {
	            num--;
	            if (num < 0) {
	                //悄悄把图片跳到最后一张图(复制页,与第一张图相同),然后做出图片播放动画，left参数是定位而不是移动的长度
	                $('.banner ul').css({ left: -window_width * images_count }).stop().animate({ left: -window_width * (images_count - 1) }, 500);
	                num = images_count - 1;
	            } else {
	                //console.log(num);
	                $('.banner ul').stop().animate({ left: -num * window_width }, 500);
	            }
	            if (num == images_count - 1) {
	                $('.banner ol li').eq(images_count - 1).addClass('current').siblings().removeClass('current');
	            } else {
	                $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');

	            }
	        }

	        function nextPlay() {
	            num++;
	            if (num > images_count) {
	                //播放到最后一张(复制页)后,悄悄地把图片跳到第一张,因为和第一张相同,所以难以发觉,
	                $('.banner ul').css({ left: 0 }).stop().animate({ left: -window_width }, 500);
	                //css({left:0})是直接悄悄改变位置，animate({left:-window_width},500)是做出移动动画
	                //随后要把指针指向第二张图片,表示已经播放至第二张了。
	                num = 1;
	            } else {
	                //在最后面加入一张和第一张相同的图片，如果播放到最后一张，继续往下播，悄悄回到第一张(肉眼看不见)，从第一张播放到第二张
	                //console.log(num);
	                $('.banner ul').stop().animate({ left: -num * window_width }, 500);
	            }
	            if (num == images_count) {
	                $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
	            } else {
	                $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');

	            }
	        }
	        timer = setInterval(nextPlay, 5000);
	        //鼠标经过banner，停止定时器,离开则继续播放
	        $('.banner').mouseenter(function() {
	            clearInterval(timer);
	            //左右箭头显示(淡入)
	            $('.banner i').fadeIn();
	        }).mouseleave(function() {
	            timer = setInterval(nextPlay, 5000);
	            //左右箭头隐藏(淡出)
	            $('.banner i').fadeOut();
	        });
	        //播放下一张
	        $('.banner .right').click(function() {
	            nextPlay();
	        });
	        //返回上一张
	        $('.banner .left').click(function() {
	            prevPlay();
	        });
	    }
	}
	$(function() { 
		//页面加载完毕才执行
		page.banner();
	    navList.init({
	        name : 'index'
	    })
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Administrator
	* @Date:   2017-09-11 10:04:45
	* @Last Modified by:   Administrator
	* @Last Modified time: 2017-09-11 10:11:14
	*/
	__webpack_require__(22);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Administrator
	* @Date:   2017-09-11 10:05:20
	* @Last Modified by:   Administrator
	* @Last Modified time: 2017-09-11 17:40:49
	*/
	__webpack_require__(28);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Administrator
	* @Date:   2017-09-11 10:01:55
	* @Last Modified by:   Administrator
	* @Last Modified time: 2017-09-11 10:53:46
	*/
	'use strict';
	var Hogan = __webpack_require__(32);
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

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	// This file is for use with Node.js. See dist/ for browser files.

	var Hogan = __webpack_require__(33);
	Hogan.Template = __webpack_require__(34).Template;
	Hogan.template = Hogan.Template;
	module.exports = Hogan;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	(function (Hogan) {
	  // Setup regex  assignments
	  // remove whitespace according to Mustache spec
	  var rIsWhitespace = /\S/,
	      rQuot = /\"/g,
	      rNewline =  /\n/g,
	      rCr = /\r/g,
	      rSlash = /\\/g,
	      rLineSep = /\u2028/,
	      rParagraphSep = /\u2029/;

	  Hogan.tags = {
	    '#': 1, '^': 2, '<': 3, '$': 4,
	    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
	    '{': 10, '&': 11, '_t': 12
	  };

	  Hogan.scan = function scan(text, delimiters) {
	    var len = text.length,
	        IN_TEXT = 0,
	        IN_TAG_TYPE = 1,
	        IN_TAG = 2,
	        state = IN_TEXT,
	        tagType = null,
	        tag = null,
	        buf = '',
	        tokens = [],
	        seenTag = false,
	        i = 0,
	        lineStart = 0,
	        otag = '{{',
	        ctag = '}}';

	    function addBuf() {
	      if (buf.length > 0) {
	        tokens.push({tag: '_t', text: new String(buf)});
	        buf = '';
	      }
	    }

	    function lineIsWhitespace() {
	      var isAllWhitespace = true;
	      for (var j = lineStart; j < tokens.length; j++) {
	        isAllWhitespace =
	          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
	          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
	        if (!isAllWhitespace) {
	          return false;
	        }
	      }

	      return isAllWhitespace;
	    }

	    function filterLine(haveSeenTag, noNewLine) {
	      addBuf();

	      if (haveSeenTag && lineIsWhitespace()) {
	        for (var j = lineStart, next; j < tokens.length; j++) {
	          if (tokens[j].text) {
	            if ((next = tokens[j+1]) && next.tag == '>') {
	              // set indent to token value
	              next.indent = tokens[j].text.toString()
	            }
	            tokens.splice(j, 1);
	          }
	        }
	      } else if (!noNewLine) {
	        tokens.push({tag:'\n'});
	      }

	      seenTag = false;
	      lineStart = tokens.length;
	    }

	    function changeDelimiters(text, index) {
	      var close = '=' + ctag,
	          closeIndex = text.indexOf(close, index),
	          delimiters = trim(
	            text.substring(text.indexOf('=', index) + 1, closeIndex)
	          ).split(' ');

	      otag = delimiters[0];
	      ctag = delimiters[delimiters.length - 1];

	      return closeIndex + close.length - 1;
	    }

	    if (delimiters) {
	      delimiters = delimiters.split(' ');
	      otag = delimiters[0];
	      ctag = delimiters[1];
	    }

	    for (i = 0; i < len; i++) {
	      if (state == IN_TEXT) {
	        if (tagChange(otag, text, i)) {
	          --i;
	          addBuf();
	          state = IN_TAG_TYPE;
	        } else {
	          if (text.charAt(i) == '\n') {
	            filterLine(seenTag);
	          } else {
	            buf += text.charAt(i);
	          }
	        }
	      } else if (state == IN_TAG_TYPE) {
	        i += otag.length - 1;
	        tag = Hogan.tags[text.charAt(i + 1)];
	        tagType = tag ? text.charAt(i + 1) : '_v';
	        if (tagType == '=') {
	          i = changeDelimiters(text, i);
	          state = IN_TEXT;
	        } else {
	          if (tag) {
	            i++;
	          }
	          state = IN_TAG;
	        }
	        seenTag = i;
	      } else {
	        if (tagChange(ctag, text, i)) {
	          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
	                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
	          buf = '';
	          i += ctag.length - 1;
	          state = IN_TEXT;
	          if (tagType == '{') {
	            if (ctag == '}}') {
	              i++;
	            } else {
	              cleanTripleStache(tokens[tokens.length - 1]);
	            }
	          }
	        } else {
	          buf += text.charAt(i);
	        }
	      }
	    }

	    filterLine(seenTag, true);

	    return tokens;
	  }

	  function cleanTripleStache(token) {
	    if (token.n.substr(token.n.length - 1) === '}') {
	      token.n = token.n.substring(0, token.n.length - 1);
	    }
	  }

	  function trim(s) {
	    if (s.trim) {
	      return s.trim();
	    }

	    return s.replace(/^\s*|\s*$/g, '');
	  }

	  function tagChange(tag, text, index) {
	    if (text.charAt(index) != tag.charAt(0)) {
	      return false;
	    }

	    for (var i = 1, l = tag.length; i < l; i++) {
	      if (text.charAt(index + i) != tag.charAt(i)) {
	        return false;
	      }
	    }

	    return true;
	  }

	  // the tags allowed inside super templates
	  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

	  function buildTree(tokens, kind, stack, customTags) {
	    var instructions = [],
	        opener = null,
	        tail = null,
	        token = null;

	    tail = stack[stack.length - 1];

	    while (tokens.length > 0) {
	      token = tokens.shift();

	      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
	        throw new Error('Illegal content in < super tag.');
	      }

	      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
	        stack.push(token);
	        token.nodes = buildTree(tokens, token.tag, stack, customTags);
	      } else if (token.tag == '/') {
	        if (stack.length === 0) {
	          throw new Error('Closing tag without opener: /' + token.n);
	        }
	        opener = stack.pop();
	        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
	          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
	        }
	        opener.end = token.i;
	        return instructions;
	      } else if (token.tag == '\n') {
	        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
	      }

	      instructions.push(token);
	    }

	    if (stack.length > 0) {
	      throw new Error('missing closing tag: ' + stack.pop().n);
	    }

	    return instructions;
	  }

	  function isOpener(token, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].o == token.n) {
	        token.tag = '#';
	        return true;
	      }
	    }
	  }

	  function isCloser(close, open, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].c == close && tags[i].o == open) {
	        return true;
	      }
	    }
	  }

	  function stringifySubstitutions(obj) {
	    var items = [];
	    for (var key in obj) {
	      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
	    }
	    return "{ " + items.join(",") + " }";
	  }

	  function stringifyPartials(codeObj) {
	    var partials = [];
	    for (var key in codeObj.partials) {
	      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
	    }
	    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
	  }

	  Hogan.stringify = function(codeObj, text, options) {
	    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
	  }

	  var serialNo = 0;
	  Hogan.generate = function(tree, text, options) {
	    serialNo = 0;
	    var context = { code: '', subs: {}, partials: {} };
	    Hogan.walk(tree, context);

	    if (options.asString) {
	      return this.stringify(context, text, options);
	    }

	    return this.makeTemplate(context, text, options);
	  }

	  Hogan.wrapMain = function(code) {
	    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
	  }

	  Hogan.template = Hogan.Template;

	  Hogan.makeTemplate = function(codeObj, text, options) {
	    var template = this.makePartials(codeObj);
	    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
	    return new this.template(template, text, this, options);
	  }

	  Hogan.makePartials = function(codeObj) {
	    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
	    for (key in template.partials) {
	      template.partials[key] = this.makePartials(template.partials[key]);
	    }
	    for (key in codeObj.subs) {
	      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
	    }
	    return template;
	  }

	  function esc(s) {
	    return s.replace(rSlash, '\\\\')
	            .replace(rQuot, '\\\"')
	            .replace(rNewline, '\\n')
	            .replace(rCr, '\\r')
	            .replace(rLineSep, '\\u2028')
	            .replace(rParagraphSep, '\\u2029');
	  }

	  function chooseMethod(s) {
	    return (~s.indexOf('.')) ? 'd' : 'f';
	  }

	  function createPartial(node, context) {
	    var prefix = "<" + (context.prefix || "");
	    var sym = prefix + node.n + serialNo++;
	    context.partials[sym] = {name: node.n, partials: {}};
	    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
	    return sym;
	  }

	  Hogan.codegen = {
	    '#': function(node, context) {
	      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
	                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
	                      't.rs(c,p,' + 'function(c,p,t){';
	      Hogan.walk(node.nodes, context);
	      context.code += '});c.pop();}';
	    },

	    '^': function(node, context) {
	      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
	      Hogan.walk(node.nodes, context);
	      context.code += '};';
	    },

	    '>': createPartial,
	    '<': function(node, context) {
	      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
	      Hogan.walk(node.nodes, ctx);
	      var template = context.partials[createPartial(node, context)];
	      template.subs = ctx.subs;
	      template.partials = ctx.partials;
	    },

	    '$': function(node, context) {
	      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
	      Hogan.walk(node.nodes, ctx);
	      context.subs[node.n] = ctx.code;
	      if (!context.inPartial) {
	        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
	      }
	    },

	    '\n': function(node, context) {
	      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
	    },

	    '_v': function(node, context) {
	      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	    },

	    '_t': function(node, context) {
	      context.code += write('"' + esc(node.text) + '"');
	    },

	    '{': tripleStache,

	    '&': tripleStache
	  }

	  function tripleStache(node, context) {
	    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	  }

	  function write(s) {
	    return 't.b(' + s + ');';
	  }

	  Hogan.walk = function(nodelist, context) {
	    var func;
	    for (var i = 0, l = nodelist.length; i < l; i++) {
	      func = Hogan.codegen[nodelist[i].tag];
	      func && func(nodelist[i], context);
	    }
	    return context;
	  }

	  Hogan.parse = function(tokens, text, options) {
	    options = options || {};
	    return buildTree(tokens, '', [], options.sectionTags || []);
	  }

	  Hogan.cache = {};

	  Hogan.cacheKey = function(text, options) {
	    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
	  }

	  Hogan.compile = function(text, options) {
	    options = options || {};
	    var key = Hogan.cacheKey(text, options);
	    var template = this.cache[key];

	    if (template) {
	      var partials = template.partials;
	      for (var name in partials) {
	        delete partials[name].instance;
	      }
	      return template;
	    }

	    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
	    return this.cache[key] = template;
	  }
	})( true ? exports : Hogan);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	var Hogan = {};

	(function (Hogan) {
	  Hogan.Template = function (codeObj, text, compiler, options) {
	    codeObj = codeObj || {};
	    this.r = codeObj.code || this.r;
	    this.c = compiler;
	    this.options = options || {};
	    this.text = text || '';
	    this.partials = codeObj.partials || {};
	    this.subs = codeObj.subs || {};
	    this.buf = '';
	  }

	  Hogan.Template.prototype = {
	    // render: replaced by generated code.
	    r: function (context, partials, indent) { return ''; },

	    // variable escaping
	    v: hoganEscape,

	    // triple stache
	    t: coerceToString,

	    render: function render(context, partials, indent) {
	      return this.ri([context], partials || {}, indent);
	    },

	    // render internal -- a hook for overrides that catches partials too
	    ri: function (context, partials, indent) {
	      return this.r(context, partials, indent);
	    },

	    // ensurePartial
	    ep: function(symbol, partials) {
	      var partial = this.partials[symbol];

	      // check to see that if we've instantiated this partial before
	      var template = partials[partial.name];
	      if (partial.instance && partial.base == template) {
	        return partial.instance;
	      }

	      if (typeof template == 'string') {
	        if (!this.c) {
	          throw new Error("No compiler available.");
	        }
	        template = this.c.compile(template, this.options);
	      }

	      if (!template) {
	        return null;
	      }

	      // We use this to check whether the partials dictionary has changed
	      this.partials[symbol].base = template;

	      if (partial.subs) {
	        // Make sure we consider parent template now
	        if (!partials.stackText) partials.stackText = {};
	        for (key in partial.subs) {
	          if (!partials.stackText[key]) {
	            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
	          }
	        }
	        template = createSpecializedPartial(template, partial.subs, partial.partials,
	          this.stackSubs, this.stackPartials, partials.stackText);
	      }
	      this.partials[symbol].instance = template;

	      return template;
	    },

	    // tries to find a partial in the current scope and render it
	    rp: function(symbol, context, partials, indent) {
	      var partial = this.ep(symbol, partials);
	      if (!partial) {
	        return '';
	      }

	      return partial.ri(context, partials, indent);
	    },

	    // render a section
	    rs: function(context, partials, section) {
	      var tail = context[context.length - 1];

	      if (!isArray(tail)) {
	        section(context, partials, this);
	        return;
	      }

	      for (var i = 0; i < tail.length; i++) {
	        context.push(tail[i]);
	        section(context, partials, this);
	        context.pop();
	      }
	    },

	    // maybe start a section
	    s: function(val, ctx, partials, inverted, start, end, tags) {
	      var pass;

	      if (isArray(val) && val.length === 0) {
	        return false;
	      }

	      if (typeof val == 'function') {
	        val = this.ms(val, ctx, partials, inverted, start, end, tags);
	      }

	      pass = !!val;

	      if (!inverted && pass && ctx) {
	        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
	      }

	      return pass;
	    },

	    // find values with dotted names
	    d: function(key, ctx, partials, returnFound) {
	      var found,
	          names = key.split('.'),
	          val = this.f(names[0], ctx, partials, returnFound),
	          doModelGet = this.options.modelGet,
	          cx = null;

	      if (key === '.' && isArray(ctx[ctx.length - 2])) {
	        val = ctx[ctx.length - 1];
	      } else {
	        for (var i = 1; i < names.length; i++) {
	          found = findInScope(names[i], val, doModelGet);
	          if (found !== undefined) {
	            cx = val;
	            val = found;
	          } else {
	            val = '';
	          }
	        }
	      }

	      if (returnFound && !val) {
	        return false;
	      }

	      if (!returnFound && typeof val == 'function') {
	        ctx.push(cx);
	        val = this.mv(val, ctx, partials);
	        ctx.pop();
	      }

	      return val;
	    },

	    // find values with normal names
	    f: function(key, ctx, partials, returnFound) {
	      var val = false,
	          v = null,
	          found = false,
	          doModelGet = this.options.modelGet;

	      for (var i = ctx.length - 1; i >= 0; i--) {
	        v = ctx[i];
	        val = findInScope(key, v, doModelGet);
	        if (val !== undefined) {
	          found = true;
	          break;
	        }
	      }

	      if (!found) {
	        return (returnFound) ? false : "";
	      }

	      if (!returnFound && typeof val == 'function') {
	        val = this.mv(val, ctx, partials);
	      }

	      return val;
	    },

	    // higher order templates
	    ls: function(func, cx, partials, text, tags) {
	      var oldTags = this.options.delimiters;

	      this.options.delimiters = tags;
	      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
	      this.options.delimiters = oldTags;

	      return false;
	    },

	    // compile text
	    ct: function(text, cx, partials) {
	      if (this.options.disableLambda) {
	        throw new Error('Lambda features disabled.');
	      }
	      return this.c.compile(text, this.options).render(cx, partials);
	    },

	    // template result buffering
	    b: function(s) { this.buf += s; },

	    fl: function() { var r = this.buf; this.buf = ''; return r; },

	    // method replace section
	    ms: function(func, ctx, partials, inverted, start, end, tags) {
	      var textSource,
	          cx = ctx[ctx.length - 1],
	          result = func.call(cx);

	      if (typeof result == 'function') {
	        if (inverted) {
	          return true;
	        } else {
	          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
	          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
	        }
	      }

	      return result;
	    },

	    // method replace variable
	    mv: function(func, ctx, partials) {
	      var cx = ctx[ctx.length - 1];
	      var result = func.call(cx);

	      if (typeof result == 'function') {
	        return this.ct(coerceToString(result.call(cx)), cx, partials);
	      }

	      return result;
	    },

	    sub: function(name, context, partials, indent) {
	      var f = this.subs[name];
	      if (f) {
	        this.activeSub = name;
	        f(context, partials, this, indent);
	        this.activeSub = false;
	      }
	    }

	  };

	  //Find a key in an object
	  function findInScope(key, scope, doModelGet) {
	    var val;

	    if (scope && typeof scope == 'object') {

	      if (scope[key] !== undefined) {
	        val = scope[key];

	      // try lookup with get for backbone or similar model data
	      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
	        val = scope.get(key);
	      }
	    }

	    return val;
	  }

	  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
	    function PartialTemplate() {};
	    PartialTemplate.prototype = instance;
	    function Substitutions() {};
	    Substitutions.prototype = instance.subs;
	    var key;
	    var partial = new PartialTemplate();
	    partial.subs = new Substitutions();
	    partial.subsText = {};  //hehe. substext.
	    partial.buf = '';

	    stackSubs = stackSubs || {};
	    partial.stackSubs = stackSubs;
	    partial.subsText = stackText;
	    for (key in subs) {
	      if (!stackSubs[key]) stackSubs[key] = subs[key];
	    }
	    for (key in stackSubs) {
	      partial.subs[key] = stackSubs[key];
	    }

	    stackPartials = stackPartials || {};
	    partial.stackPartials = stackPartials;
	    for (key in partials) {
	      if (!stackPartials[key]) stackPartials[key] = partials[key];
	    }
	    for (key in stackPartials) {
	      partial.partials[key] = stackPartials[key];
	    }

	    return partial;
	  }

	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;

	  function coerceToString(val) {
	    return String((val === null || val === undefined) ? '' : val);
	  }

	  function hoganEscape(str) {
	    str = coerceToString(str);
	    return hChars.test(str) ?
	      str
	        .replace(rAmp, '&amp;')
	        .replace(rLt, '&lt;')
	        .replace(rGt, '&gt;')
	        .replace(rApos, '&#39;')
	        .replace(rQuot, '&quot;') :
	      str;
	  }

	  var isArray = Array.isArray || function(a) {
	    return Object.prototype.toString.call(a) === '[object Array]';
	  };

	})( true ? exports : Hogan);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Administrator
	* @Date:   2017-09-12 10:07:04
	* @Last Modified by:   Administrator
	* @Last Modified time: 2017-09-13 10:56:05
	*/
	__webpack_require__(36);
	var int = __webpack_require__(31);
	var templateIndex = __webpack_require__(38);
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

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

	module.exports = "<nav class=\"w1200\">\r\n\t{{#navList}}\r\n\t\t{{#isActive}}\r\n\t\t\t<li class=\"active\">\r\n\t\t{{/isActive}}\r\n\t\t{{^isActive}}\r\n\t\t\t<li class=\"\">\r\n\t\t{{/isActive}}\r\n\t\t\t\t<a href=\"{{href}}\" title=\"\">\r\n\t\t\t\t\t{{content}}\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t{{/navList}}\r\n</nav>";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "image/top06.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "image/1.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "image/2.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "image/3.jpg";

/***/ })
]);