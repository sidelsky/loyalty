// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*! jQuery UI - v1.9.2 - 2014-03-21
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

jQuery.effects||function(e,t){var i=e.uiBackCompat!==!1,a="ui-effects-";e.effects={effect:{}},function(t,i){function a(e,t,i){var a=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=a.floor?~~e:parseFloat(e),isNaN(e)?t.def:a.mod?(e+a.mod)%a.mod:0>e?0:e>a.max?a.max:e)}function s(e){var a=u(),s=a._rgba=[];return e=e.toLowerCase(),m(l,function(t,n){var r,o=n.re.exec(e),h=o&&n.parse(o),l=n.space||"rgba";return h?(r=a[l](h),a[d[l].cache]=r[d[l].cache],s=a._rgba=r._rgba,!1):i}),s.length?("0,0,0,0"===s.join()&&t.extend(s,r.transparent),a):r[e]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var r,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),h=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=t.Color=function(e,i,a,s){return new t.Color.fn.parse(e,i,a,s)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=u.support={},f=t("<p>")[0],m=t.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,m(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=t.extend(u.prototype,{parse:function(n,o,h,l){if(n===i)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=i);var c=this,p=t.type(n),f=this._rgba=[];return o!==i&&(n=[n,o,h,l],p="array"),"string"===p?this.parse(s(n)||r._default):"array"===p?(m(d.rgba.props,function(e,t){f[t.idx]=a(n[t.idx],t)}),this):"object"===p?(n instanceof u?m(d,function(e,t){n[t.cache]&&(c[t.cache]=n[t.cache].slice())}):m(d,function(t,i){var s=i.cache;m(i.props,function(e,t){if(!c[s]&&i.to){if("alpha"===e||null==n[e])return;c[s]=i.to(c._rgba)}c[s][t.idx]=a(n[e],t,!0)}),c[s]&&0>e.inArray(null,c[s].slice(0,3))&&(c[s][3]=1,i.from&&(c._rgba=i.from(c[s])))}),this):i},is:function(e){var t=u(e),a=!0,s=this;return m(d,function(e,n){var r,o=t[n.cache];return o&&(r=s[n.cache]||n.to&&n.to(s._rgba)||[],m(n.props,function(e,t){return null!=o[t.idx]?a=o[t.idx]===r[t.idx]:i})),a}),a},_space:function(){var e=[],t=this;return m(d,function(i,a){t[a.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var i=u(e),s=i._space(),n=d[s],r=0===this.alpha()?u("transparent"):this,o=r[n.cache]||n.to(r._rgba),h=o.slice();return i=i[n.cache],m(n.props,function(e,s){var n=s.idx,r=o[n],l=i[n],u=c[s.type]||{};null!==l&&(null===r?h[n]=l:(u.mod&&(l-r>u.mod/2?r+=u.mod:r-l>u.mod/2&&(r-=u.mod)),h[n]=a((l-r)*t+r,s)))}),this[s](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),a=i.pop(),s=u(e)._rgba;return u(t.map(i,function(e,t){return(1-a)*s[t]+a*e}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),a=i.pop();return e&&i.push(~~(255*a)),"#"+t.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,a=e[0]/255,s=e[1]/255,n=e[2]/255,r=e[3],o=Math.max(a,s,n),h=Math.min(a,s,n),l=o-h,u=o+h,d=.5*u;return t=h===o?0:a===o?60*(s-n)/l+360:s===o?60*(n-a)/l+120:60*(a-s)/l+240,i=0===d||1===d?d:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==r?1:r]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],a=e[2],s=e[3],r=.5>=a?a*(1+i):a+i-a*i,o=2*a-r;return[Math.round(255*n(o,r,t+1/3)),Math.round(255*n(o,r,t)),Math.round(255*n(o,r,t-1/3)),s]},m(d,function(e,s){var n=s.props,r=s.cache,o=s.to,l=s.from;u.fn[e]=function(e){if(o&&!this[r]&&(this[r]=o(this._rgba)),e===i)return this[r].slice();var s,h=t.type(e),d="array"===h||"object"===h?e:arguments,c=this[r].slice();return m(n,function(e,t){var i=d["object"===h?e:t.idx];null==i&&(i=c[t.idx]),c[t.idx]=a(i,t)}),l?(s=u(l(c)),s[r]=c,s):u(c)},m(n,function(i,a){u.fn[i]||(u.fn[i]=function(s){var n,r=t.type(s),o="alpha"===i?this._hsla?"hsla":"rgba":e,l=this[o](),u=l[a.idx];return"undefined"===r?u:("function"===r&&(s=s.call(this,u),r=t.type(s)),null==s&&a.empty?this:("string"===r&&(n=h.exec(s),n&&(s=u+parseFloat(n[2])*("+"===n[1]?1:-1))),l[a.idx]=s,this[o](l)))})})}),m(o,function(e,i){t.cssHooks[i]={set:function(e,a){var n,r,o="";if("string"!==t.type(a)||(n=s(a))){if(a=u(n||a),!p.rgba&&1!==a._rgba[3]){for(r="backgroundColor"===i?e.parentNode:e;(""===o||"transparent"===o)&&r&&r.style;)try{o=t.css(r,"backgroundColor"),r=r.parentNode}catch(h){}a=a.blend(o&&"transparent"!==o?o:"_default")}a=a.toRgbaString()}try{e.style[i]=a}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=u(e.elem,i),e.end=u(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return m(["Top","Right","Bottom","Left"],function(i,a){t["border"+a+"Color"]=e}),t}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t,i,a=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,s={};if(a&&a.length&&a[0]&&a[a[0]])for(i=a.length;i--;)t=a[i],"string"==typeof a[t]&&(s[e.camelCase(t)]=a[t]);else for(t in a)"string"==typeof a[t]&&(s[t]=a[t]);return s}function a(t,i){var a,s,r={};for(a in i)s=i[a],t[a]!==s&&(n[a]||(e.fx.step[a]||!isNaN(parseFloat(s)))&&(r[a]=s));return r}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.effects.animateClass=function(t,n,r,o){var h=e.speed(n,r,o);return this.queue(function(){var n,r=e(this),o=r.attr("class")||"",l=h.children?r.find("*").andSelf():r;l=l.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),n=function(){e.each(s,function(e,i){t[i]&&r[i+"Class"](t[i])})},n(),l=l.map(function(){return this.end=i.call(this.el[0]),this.diff=a(this.start,this.end),this}),r.attr("class",o),l=l.map(function(){var t=this,i=e.Deferred(),a=jQuery.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,a),i.promise()}),e.when.apply(e,l.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{add:t},i,a,s):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{remove:t},i,a,s):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(i,a,s,n,r){return"boolean"==typeof a||a===t?s?e.effects.animateClass.call(this,a?{add:i}:{remove:i},s,n,r):this._toggleClass(i,a):e.effects.animateClass.call(this,{toggle:i},a,s,n)},switchClass:function(t,i,a,s,n){return e.effects.animateClass.call(this,{add:i,remove:t},a,s,n)}})}(),function(){function s(t,i,a,s){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(s=i,a=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(s=a,a=i,i={}),e.isFunction(a)&&(s=a,a=null),i&&e.extend(t,i),a=a||i.duration,t.duration=e.fx.off?0:"number"==typeof a?a:a in e.fx.speeds?e.fx.speeds[a]:e.fx.speeds._default,t.complete=s||i.complete,t}function n(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?!1:i&&e.effects[t]?!1:!0}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(a+t[i],e[0].style[t[i]])},restore:function(e,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=e.data(a+i[n]),s===t&&(s=""),e.css(i[n],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,a;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":a=0;break;case"center":a=.5;break;case"right":a=1;break;default:a=e[1]/t.width}return{x:a,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},a=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(r){n=document.body}return t.wrap(a),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),a=t.parent(),"static"===t.css("position")?(a.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,a){i[a]=t.css(a),isNaN(parseInt(i[a],10))&&(i[a]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(s),a.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,a,s){return s=s||{},e.each(i,function(e,i){var n=t.cssUnit(i);n[0]>0&&(s[i]=n[0]*a+n[1])}),s}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(n)&&n.call(s[0]),e.isFunction(t)&&t()}var s=e(this),n=a.complete,r=a.mode;(s.is(":hidden")?"hide"===r:"show"===r)?i():o.call(s[0],a,i)}var a=s.apply(this,arguments),n=a.mode,r=a.queue,o=e.effects.effect[a.effect],h=!o&&i&&e.effects[a.effect];return e.fx.off||!o&&!h?n?this[n](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)}):o?r===!1?this.each(t):this.queue(r||"fx",t):h.call(this,{options:a,duration:a.duration,callback:a.complete,mode:a.mode})},_show:e.fn.show,show:function(e){if(n(e))return this._show.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(n(e))return this._hide.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(n(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)},cssUnit:function(t){var i=this.css(t),a=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(a=[parseFloat(i),t])}),a}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()}(jQuery);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2 (modified for fullpage.js)
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(g){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function s(d){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}function m(d,f,g){k=!1;var e=d,h=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),h),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());g&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);u();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",s,!1),this.addEventListener("mousewheel",s,!1)):document.attachEvent("onmousewheel",s)}function v(){r=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:r+"px"});var a=r==b.outerHeight()?"none":"block";c.css({display:a})}
function u(){v();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;r>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&w||x||y||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var w,x,y,A,z,r,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.parent().find("."+a.barClass),h=b.parent().find("."+
a.railClass);v();if(f.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==g.height?b.parent().height():g.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});h.hover(function(){u()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){w=!0;u();p()},function(){w=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});v();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);

/**
 * fullPage 2.5.9
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */

(function($, window, document, Math, undefined) {
    'use strict';
    $.fn.fullpage = function(options) {
        var FP = $.fn.fullpage;
        // Create some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            'menu': false,
            'anchors':[],
            'navigation': false,
            'navigationPosition': 'right',
            'navigationTooltips': [],
            'slidesNavigation': false,
            'slidesNavPosition': 'bottom',
            'scrollBar': false,

            //scrolling
            'css3': true,
            'scrollingSpeed': 700,
            'autoScrolling': true,
            'fitToSection': true,
            'easing': 'easeInOutCubic',
            'easingcss3': 'ease',
            'loopBottom': false,
            'loopTop': false,
            'loopHorizontal': true,
            'continuousVertical': false,
            'normalScrollElements': null,
            'scrollOverflow': false,
            'touchSensitivity': 5,
            'normalScrollElementTouchThreshold': 5,

            //Accessibility
            'keyboardScrolling': true,
            'animateAnchor': true,
            'recordHistory': true,

            //design
            'controlArrows': true,
            'controlArrowColor': '#fff',
            'verticalCentered': true,
            'resize': false,
            'sectionsColor' : [],
            'paddingTop': 0,
            'paddingBottom': 0,
            'fixedElements': null,
            'responsive': 0,

            //Custom selectors
            'sectionSelector': '.section',
            'slideSelector': '.slide',


            //events
            'afterLoad': null,
            'onLeave': null,
            'afterRender': null,
            'afterResize': null,
            'afterReBuild': null,
            'afterSlideLoad': null,
            'onSlideLeave': null
        }, options);

        displayWarnings();


        //easeInOutCubic animation included in the plugin
        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

        //TO BE REMOVED in future versions. Maintained temporaly for backwards compatibility.
        $.extend($.easing,{ easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b; }});

        FP.setAutoScrolling = function(value, type){
            setVariableState('autoScrolling', value, type);

            var element = $('.fp-section.active');

            if(options.autoScrolling && !options.scrollBar){
                $('html, body').css({
                    'overflow' : 'hidden',
                    'height' : '100%'
                });

                FP.setRecordHistory(options.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element.length){
                    //moving the container up
                    silentScroll(element.position().top);
                }

            }else{
                $('html, body').css({
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                FP.setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                silentScroll(0);

                //scrolling the page to the section with no animation
                if (element.length) {
                    $('html, body').scrollTop(element.position().top);
                }
            }

        };

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        FP.setRecordHistory = function(value, type){
            setVariableState('recordHistory', value, type);
        };

        /**
        * Defines the scrolling speed
        */
        FP.setScrollingSpeed = function(value, type){
            setVariableState('scrollingSpeed', value, type);
        };

        /**
        * Sets fitToSection
        */
        FP.setFitToSection = function(value, type){
            setVariableState('fitToSection', value, type);
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
        */
        FP.setMouseWheelScrolling = function (value){
            if(value){
                addMouseWheelHandler();
            }else{
                removeMouseWheelHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        FP.setAllowScrolling = function (value, directions){
            if(typeof directions != 'undefined'){
                directions = directions.replace(' ', '').split(',');
                $.each(directions, function (index, direction){
                    setIsScrollable(value, direction);
                });
            }
            else if(value){
                FP.setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                FP.setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
        */
        FP.setKeyboardScrolling = function (value){
            options.keyboardScrolling = value;
        };

        FP.moveSectionUp = function(){
            var prev = $('.fp-section.active').prev('.fp-section');

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $('.fp-section').last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        };

        FP.moveSectionDown = function (){
            var next = $('.fp-section.active').next('.fp-section');

            //looping to the top if there's no more sections below
            if(!next.length &&
                (options.loopBottom || options.continuousVertical)){
                next = $('.fp-section').first();
            }

            if(next.length){
                scrollPage(next, null, false);
            }
        };

        FP.moveTo = function (section, slide){
            var destiny = '';

            if(isNaN(section)){
                destiny = $('[data-anchor="'+section+'"]');
            }else{
                destiny = $('.fp-section').eq( (section -1) );
            }

            if (typeof slide !== 'undefined'){
                scrollPageAndSlide(section, slide);
            }else if(destiny.length > 0){
                scrollPage(destiny);
            }
        };

        FP.moveSlideRight = function(){
            moveSlide('next');
        };

        FP.moveSlideLeft = function(){
            moveSlide('prev');
        };

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        FP.reBuild = function(resizing){
            if(container.hasClass('fp-destroyed')){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            var windowsWidth = $(window).width();
            windowsHeight = $(window).height();  //updating global var

            //text and images resizing
            if (options.resize) {
                resizeMe(windowsHeight, windowsWidth);
            }

            $('.fp-section').each(function(){
                var slidesWrap = $(this).find('.fp-slides');
                var slides = $(this).find('.fp-slide');

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    $(this).find('.fp-tableCell').css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //resizing the scrolling divs
                if(options.scrollOverflow){
                    if(slides.length){
                        slides.each(function(){
                            createSlimScrolling($(this));
                        });
                    }else{
                        createSlimScrolling($(this));
                    }
                }

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length) {
                    landscapeScroll(slidesWrap, slidesWrap.find('.fp-slide.active'));
                }
            });

            var activeSection = $('.fp-section.active');

            //isn't it the first section?
            if(activeSection.index('.fp-section')){
                //adjusting the position for the current section
                scrollPage(activeSection);
            }

            isResizing = false;
            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
        };

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = $(this);
        var windowsHeight = $(window).height();
        var isResizing = false;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var nav;
        var wrapperSelector = 'fullpage-wrapper';
        var isScrollAllowed = { 'up':true, 'down':true, 'left':true, 'right':true };
        var originals = $.extend(true, {}, options); //deep copy

        FP.setAllowScrolling(true);
        container.removeClass('fp-destroyed'); //in case it was destroyed before initilizing it again

        //if css3 is not supported, it will use jQuery animations
        if(options.css3){
            options.css3 = support3d();
        }

        if($(this).length){
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(wrapperSelector);
        }

        //trying to use fullpage without a selector?
        else{
            showError('error', 'Error! Fullpage.js needs to be initialized with a selector. For example: $(\'#myContainer\').fullpage();');
        }

        //adding internal class names to void problem with common ones
        $(options.sectionSelector).each(function(){
            $(this).addClass('fp-section');
        });
        $(options.slideSelector).each(function(){
            $(this).addClass('fp-slide');
        });

        //creating the navigation dots
        if (options.navigation) {
            addVerticalNavigation();
        }

        $('.fp-section').each(function(index){
            var that = $(this);
            var slides = $(this).find('.fp-slide');
            var numSlides = slides.length;

            //if no active section is defined, the 1st one will be the default one
            if(!index && $('.fp-section.active').length === 0) {
                $(this).addClass('active');
            }

            $(this).css('height', windowsHeight + 'px');

            if(options.paddingTop || options.paddingBottom){
                $(this).css('padding', options.paddingTop  + ' 0 ' + options.paddingBottom + ' 0');
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                $(this).css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                $(this).attr('data-anchor', options.anchors[index]);

                //activating the menu / nav element on load
                if($(this).hasClass('active')){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            // if there's any slide
            if (numSlides > 1) {
                var sliderWidth = numSlides * 100;
                var slideWidth = 100 / numSlides;

                slides.wrapAll('<div class="fp-slidesContainer" />');
                slides.parent().wrap('<div class="fp-slides" />');

                $(this).find('.fp-slidesContainer').css('width', sliderWidth + '%');

                if(options.controlArrows){
                    createSlideArrows($(this));
                }

                if(options.slidesNavigation){
                    addSlidesNavigation($(this), numSlides);
                }

                slides.each(function(index) {
                    $(this).css('width', slideWidth + '%');

                    if(options.verticalCentered){
                        addTableClass($(this));
                    }
                });

                var startingSlide = that.find('.fp-slide.active');

                //if the slide won#t be an starting point, the default will be the first one
                if(!startingSlide.length){
                    slides.eq(0).addClass('active');
                }

                //is there a starting point for a non-starting section?
                else{
                    silentLandscapeScroll(startingSlide);
                }

            }else{
                if(options.verticalCentered){
                    addTableClass($(this));
                }
            }

        }).promise().done(function(){
            FP.setAutoScrolling(options.autoScrolling, 'internal');

            //the starting point is a slide?
            var activeSlide = $('.fp-section.active').find('.fp-slide.active');

            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( activeSlide.length &&  ($('.fp-section.active').index('.fp-section') !== 0 || ($('.fp-section.active').index('.fp-section') === 0 && activeSlide.index() !== 0))){
                silentLandscapeScroll(activeSlide);
            }

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).appendTo('body');
            }

            //vertical centered of the navigation + first bullet active
            if(options.navigation){
                nav.css('margin-top', '-' + (nav.height()/2) + 'px');
                nav.find('li').eq($('.fp-section.active').index('.fp-section')).find('a').addClass('active');
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && $(options.menu).closest('.fullpage-wrapper').length){
                $(options.menu).appendTo('body');
            }

            if(options.scrollOverflow){
                if(document.readyState === 'complete'){
                    createSlimScrollingHandler();
                }
                //after DOM and images are loaded
                $(window).on('load', createSlimScrollingHandler);
            }else{
                $.isFunction( options.afterRender ) && options.afterRender.call(container);
            }

            responsive();

            //getting the anchor link in the URL and deleting the `#`
            var value =  window.location.hash.replace('#', '').split('/');
            var destiny = value[0];

            if(destiny.length){
                var section = $('[data-anchor="'+destiny+'"]');

                if(!options.animateAnchor && section.length){

                    if(options.autoScrolling){
                        silentScroll(section.position().top);
                    }
                    else{
                        silentScroll(0);
                        setBodyClass(destiny);

                        //scrolling the page to the section with no animation
                        $('html, body').scrollTop(section.position().top);
                    }
                    activateMenuAndNav(destiny, null);

                    $.isFunction( options.afterLoad ) && options.afterLoad.call( section, destiny, (section.index('.fp-section') + 1));

                    //updating the active class
                    section.addClass('active').siblings().removeClass('active');
                }
            }


            $(window).on('load', function() {
                scrollToAnchor();
            });

        });


        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            section.find('.fp-slides').after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');

            if(options.controlArrowColor!='#fff'){
                section.find('.fp-controlArrow.fp-next').css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
                section.find('.fp-controlArrow.fp-prev').css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
            }

            if(!options.loopHorizontal){
                section.find('.fp-controlArrow.fp-prev').hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            $('body').append('<div id="fp-nav"><ul></ul></div>');
            nav = $('#fp-nav');

            nav.addClass(options.navigationPosition);

            for (var i = 0; i < $('.fp-section').length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="fp-tooltip ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }
        }

        function createSlimScrollingHandler(){
            $('.fp-section').each(function(){
                var slides = $(this).find('.fp-slide');

                if(slides.length){
                    slides.each(function(){
                        createSlimScrolling($(this));
                    });
                }else{
                    createSlimScrolling($(this));
                }

            });
            $.isFunction( options.afterRender ) && options.afterRender.call( this);
        }

        var scrollId;
        var scrollId2;
        var isScrolling = false;

        //when scrolling...
        $(window).on('scroll', scrollHandler);

        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = $(window).scrollTop();
                var visibleSectionIndex = 0;
                var initial = Math.abs(currentScroll - document.getElementsByClassName('fp-section')[0].offsetTop);

                //taking the section which is showing more content in the viewport
                var sections =  document.getElementsByClassName('fp-section');
                for (var i = 0; i < sections.length; ++i) {
                    var section = sections[i];

                    var current = Math.abs(currentScroll - section.offsetTop);

                    if(current < initial){
                        visibleSectionIndex = i;
                        initial = current;
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);
            }

            if(!options.autoScrolling || options.scrollBar){
                //executing only once the first time we reach the section
                if(!currentSection.hasClass('active')){
                    isScrolling = true;
                    var leavingSection = $('.fp-section.active');
                    var leavingSectionIndex = leavingSection.index('.fp-section') + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.data('anchor');
                    var sectionIndex = currentSection.index('.fp-section') + 1;
                    var activeSlide = currentSection.find('.fp-slide.active');

                    if(activeSlide.length){
                        var slideAnchorLink = activeSlide.data('anchor');
                        var slideIndex = activeSlide.index();
                    }

                    if(canScroll){
                        currentSection.addClass('active').siblings().removeClass('active');

                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);

                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;

                            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                        }
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        if(canScroll){
                            //allows to scroll to an active section and
                            //if the section is already active, we prevent firing callbacks
                            if($('.fp-section.active').is(currentSection)){
                                isResizing = true;
                            }
                            scrollPage(currentSection);
                            isResizing = false;
                        }
                    }, 1000);
                }
            }
        }


        /**
        * Determines whether the active section or slide is scrollable through and scrolling bar
        */
        function isScrollable(activeSection){
            //if there are landscape slides, we check if the scrolling bar is in the current one or not
            if(activeSection.find('.fp-slides').length){
                return activeSection.find('.fp-slide.active').find('.fp-scrollable');
            }

            return activeSection.find('.fp-scrollable');
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type, scrollable){
            if (!isScrollAllowed[type]){
                return;
            }
            var check, scrollSection;

            if(type == 'down'){
                check = 'bottom';
                scrollSection = FP.moveSectionDown;
            }else{
                check = 'top';
                scrollSection = FP.moveSectionUp;
            }

            if(scrollable.length > 0 ){
                //is the scrollbar at the start/end of the scroll?
                if(isScrolled(check, scrollable)){
                    scrollSection();
                }else{
                    return true;
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }


        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var activeSection = $('.fp-section.active');
                var scrollable = isScrollable(activeSection);

                if (canScroll && !slideMoving) { //if theres any #
                    var touchEvents = getEventsPage(e);

                    touchEndY = touchEvents.y;
                    touchEndX = touchEvents.x;

                    //if movement in the X axys is greater than in the Y and the currect section has slides...
                    if (activeSection.find('.fp-slides').length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartX - touchEndX) > ($(window).width() / 100 * options.touchSensitivity)) {
                            if (touchStartX > touchEndX) {
                                if(isScrollAllowed.right){
                                    FP.moveSlideRight(); //next
                                }
                            } else {
                                if(isScrollAllowed.left){
                                    FP.moveSlideLeft(); //prev
                                }
                            }
                        }
                    }

                    //vertical scrolling (only when autoScrolling is enabled)
                    else if(options.autoScrolling){

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartY - touchEndY) > ($(window).height() / 100 * options.touchSensitivity)) {
                            if (touchStartY > touchEndY) {
                                scrolling('down', scrollable);
                            } else if (touchEndY > touchStartY) {
                                scrolling('up', scrollable);
                            }
                        }
                    }
                }
            }

        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.normalScrollElements
         */
        function checkParentForNormalScrollElement (el, hop) {
            hop = hop || 0;
            var parent = $(el).parent();

            if (hop < options.normalScrollElementTouchThreshold &&
                parent.is(options.normalScrollElements) ) {
                return true;
            } else if (hop == options.normalScrollElementTouchThreshold) {
                return false;
            } else {
                return checkParentForNormalScrollElement(parent, ++hop);
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        function touchStartHandler(event){
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                $('html,body').stop();
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        function MouseWheelHandler(e) {
            if(options.autoScrolling){
                // cross-browser wheel delta
                e = window.event || e;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));


                //Limiting the array to 150 (lets not waist memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                var activeSection = $('.fp-section.active');
                var scrollable = isScrollable(activeSection);

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    if(isAccelerating){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down', scrollable);

                        //scrolling up?
                        }else {
                            scrolling('up', scrollable);
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                $('html,body').stop();
            }
        }

        function moveSlide(direction){
            var activeSection = $('.fp-section.active');
            var slides = activeSection.find('.fp-slides');

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving) {
                return;
            }

            var currentSlide = slides.find('.fp-slide.active');
            var destiny = null;

            if(direction === 'prev'){
                destiny = currentSlide.prev('.fp-slide');
            }else{
                destiny = currentSlide.next('.fp-slide');
            }

            //isn't there a next slide in the secuence?
            if(!destiny.length){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if(direction === 'prev'){
                    destiny = currentSlide.siblings(':last');
                }else{
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because he `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            $('.fp-slide.active').each(function(){
                silentLandscapeScroll($(this));
            });
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            var dest = element.position();
            if(typeof dest === 'undefined'){ return; } //there's no element to scroll, leaving the function

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dest: dest,
                dtop: dest.top,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index('.fp-section'),
                activeSlide: element.find('.fp-slide.active'),
                activeSection: $('.fp-section.active'),
                leavingSection: $('.fp-section.active').index('.fp-section') + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $(window).scrollTop() === v.dtop)){ return; }

            if(v.activeSlide.length){
                var slideAnchorLink = v.activeSlide.data('anchor');
                var slideIndex = v.activeSlide.index();
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            element.addClass('active').siblings().removeClass('active');

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            $.isFunction(options.onLeave) && !v.localIsResizing && options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
                transformContainer(translate3d, true);

                setTimeout(function () {
                    afterSectionLoads(v);
                }, options.scrollingSpeed);
            }

            // using jQuery animate
            else{
                var scrollSettings = getScrollSettings(v);

                $(scrollSettings.element).animate(
                    scrollSettings.options,
                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
                    afterSectionLoads(v);
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v){
            var scroll = {};

            if(options.autoScrolling && !options.scrollBar){
                scroll.options = { 'top': -v.dtop};
                scroll.element = '.'+wrapperSelector;
            }else{
                scroll.options = { 'scrollTop': v.dtop};
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $('.fp-section.active').after(v.activeSection.prevAll('.fp-section').get().reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                $('.fp-section.active').before(v.activeSection.nextAll('.fp-section'));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($('.fp-section.active').position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dest = v.element.position();
            v.dtop = v.dest.top;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $('.fp-section:first').before(v.wrapAroundElements);
            }
            else {
                $('.fp-section:last').after(v.wrapAroundElements);
            }

            silentScroll($('.fp-section.active').position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);
            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));
            canScroll = true;

            setTimeout(function () {
                $.isFunction(v.callback) && v.callback.call(this);
            }, 600);
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            //getting the anchor link in the URL and deleting the `#`
            var value =  window.location.hash.replace('#', '').split('/');
            var section = value[0];
            var slide = value[1];

            if(section){  //if theres any #
                scrollPageAndSlide(section, slide);
            }
        }

        //detecting any change on the URL to scroll to the given anchor link
        //(a way to detect back history button as we play with the hashes on the URL)
        $(window).on('hashchange', hashChangeHandler);

        function hashChangeHandler(){
            if(!isScrolling){
                var value =  window.location.hash.replace('#', '').split('/');
                var section = value[0];
                var slide = value[1];

                if(section.length){
                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined' && !slideMoving);

                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
                        scrollPageAndSlide(section, slide);
                    }
                }
            }
        }


        /**
         * Sliding with arrow keys, both, vertical and horizontal
         */
        $(window).keydown(keydownHandler);

        var keydownId;
        function keydownHandler(e) {
            clearTimeout(keydownId);

            var activeElement = $(document.activeElement);

            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
                options.keyboardScrolling && options.autoScrolling){
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if(keyControls.indexOf(keyCode) > -1){
                        e.preventDefault();
                }

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            switch (e.which) {
                //up
                case 38:
                case 33:
                    FP.moveSectionUp();
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed){
                        FP.moveSectionUp();
                        break;
                    }
                case 40:
                case 34:
                    FP.moveSectionDown();
                    break;

                //Home
                case 36:
                    FP.moveTo(1);
                    break;

                //End
                case 35:
                    FP.moveTo( $('.fp-section').length );
                    break;

                //left
                case 37:
                    FP.moveSlideLeft();
                    break;

                //right
                case 39:
                    FP.moveSlideRight();
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        //binding the mousemove when the mouse's middle button is released
        container.mousedown(function(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        });

        //unbinding the mousemove when the mouse's middle button is released
        container.mouseup(function(e){
            //middle button
            if (e.which == 2){
                container.off('mousemove');
            }
        });

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            // moving up
            if(canScroll){
                if (e.pageY < oldPageY){
                    FP.moveSectionUp();

                // moving downw
                }else if(e.pageY > oldPageY){
                    FP.moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls to the section when clicking the navigation bullet
        */
        $(document).on('click touchstart', '#fp-nav a', function(e){
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($('.fp-section').eq(index));
        });

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        $(document).on('click touchstart', '.fp-slidesNav a', function(e){
            e.preventDefault();
            var slides = $(this).closest('.fp-section').find('.fp-slides');
            var destiny = slides.find('.fp-slide').eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        });

        if(options.normalScrollElements){
            $(document).on('mouseenter', options.normalScrollElements, function () {
                FP.setMouseWheelScrolling(false);
            });

            $(document).on('mouseleave', options.normalScrollElements, function(){
                FP.setMouseWheelScrolling(true);
            });
        }

        /**
         * Scrolling horizontally when clicking on the slider controls.
         */
        $('.fp-section').on('click touchstart', '.fp-controlArrow', function() {
            if ($(this).hasClass('fp-prev')) {
                FP.moveSlideLeft();
            } else {
                FP.moveSlideRight();
            }
        });

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny){
            var destinyPos = destiny.position();
            var slidesContainer = slides.find('.fp-slidesContainer').parent();
            var slideIndex = destiny.index();
            var section = slides.closest('.fp-section');
            var sectionIndex = section.index('.fp-section');
            var anchorLink = section.data('anchor');
            var slidesNav = section.find('.fp-slidesNav');
            var slideAnchor = destiny.data('anchor');

            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            var localIsResizing = isResizing;

            if(options.onSlideLeave){
                var prevSlide = section.find('.fp-slide.active');
                var prevSlideIndex = prevSlide.index();
                var xMovement = getXmovement(prevSlideIndex, slideIndex);

                //if the site is not just resizing and readjusting the slides
                if(!localIsResizing && xMovement!=='none'){
                    $.isFunction( options.onSlideLeave ) && options.onSlideLeave.call( prevSlide, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement);
                }
            }

            destiny.addClass('active').siblings().removeClass('active');


            if(typeof slideAnchor === 'undefined'){
                slideAnchor = slideIndex;
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                section.find('.fp-controlArrow.fp-prev').toggle(slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                section.find('.fp-controlArrow.fp-next').toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(section.hasClass('active')){
                setState(slideIndex, slideAnchor, anchorLink, sectionIndex);
            }

            var afterSlideLoads = function(){
                //if the site is not just resizing and readjusting the slides
                if(!localIsResizing){
                    $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( destiny, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
                }
                //letting them slide again
                slideMoving = false;
            };

            if(options.css3){
                var translate3d = 'translate3d(-' + destinyPos.left + 'px, 0px, 0px)';

                addAnimation(slides.find('.fp-slidesContainer'), options.scrollingSpeed>0).css(getTransforms(translate3d));

                setTimeout(function(){
                    afterSlideLoads();
                }, options.scrollingSpeed, options.easing);
            }else{
                slidesContainer.animate({
                    scrollLeft : destinyPos.left
                }, options.scrollingSpeed, options.easing, function() {

                    afterSlideLoads();
                });
            }

            slidesNav.find('.active').removeClass('active');
            slidesNav.find('li').eq(slideIndex).find('a').addClass('active');
        }

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        $(window).resize(resizeHandler);

        var previousHeight = windowsHeight;
        var resizeId;
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $(window).height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        FP.reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function(){
                    FP.reBuild(true);
                }, 500);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            if(options.responsive){
                var isResponsive = container.hasClass('fp-responsive');
                if ($(window).width() < options.responsive ){
                    if(!isResponsive){
                        FP.setAutoScrolling(false, 'internal');
                        FP.setFitToSection(false, 'internal');
                        $('#fp-nav').hide();
                        container.addClass('fp-responsive');
                    }
                }else if(isResponsive){
                    FP.setAutoScrolling(originals.autoScrolling, 'internal');
                    FP.setFitToSection(originals.autoScrolling, 'internal');
                    $('#fp-nav').show();
                    container.removeClass('fp-responsive');
                }
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass('fp-notransition');
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return element.addClass('fp-notransition');
        }

        /**
         * Resizing of the font size depending on the window size as well as some of the images on the site.
         */
        function resizeMe(displayHeight, displayWidth) {
            //Standard dimensions, for which the body font size is correct
            var preferredHeight = 825;
            var preferredWidth = 900;

            if (displayHeight < preferredHeight || displayWidth < preferredWidth) {
                var heightPercentage = (displayHeight * 100) / preferredHeight;
                var widthPercentage = (displayWidth * 100) / preferredWidth;
                var percentage = Math.min(heightPercentage, widthPercentage);
                var newFontSize = percentage.toFixed(2);

                $('body').css('font-size', newFontSize + '%');
            } else {
                $('body').css('font-size', '100%');
            }
        }

        /**
         * Activating the website navigation dots according to the given slide name.
         */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $('#fp-nav').find('.active').removeClass('active');
                if(name){
                    $('#fp-nav').find('a[href="#' + name + '"]').addClass('active');
                }else{
                    $('#fp-nav').find('li').eq(sectionIndex).find('a').addClass('active');
                }
            }
        }

        /**
         * Activating the website main menu elements according to the given slide name.
         */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find('.active').removeClass('active');
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass('active');
            }
        }

        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Return a boolean depending on whether the scrollable element is at the end or at the start of the scrolling
        * depending on the given type.
        */
        function isScrolled(type, scrollable){
            if(type === 'top'){
                return !scrollable.scrollTop();
            }else if(type === 'bottom'){
                return scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
            }
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $('.fp-section.active').index('.fp-section');
            var toIndex = destiny.index('.fp-section');
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }


        function createSlimScrolling(element){
            //needed to make `scrollHeight` work under Opera 12
            element.css('overflow', 'hidden');

            //in case element is a slide
            var section = element.closest('.fp-section');
            var scrollable = element.find('.fp-scrollable');
            var contentHeight;

            //if there was scroll, the contentHeight will be the one in the scrollable section
            if(scrollable.length){
                contentHeight = scrollable.get(0).scrollHeight;
            }else{
                contentHeight = element.get(0).scrollHeight;
                if(options.verticalCentered){
                    contentHeight = element.find('.fp-tableCell').get(0).scrollHeight;
                }
            }

            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

            //needs scroll?
            if ( contentHeight > scrollHeight) {
                //was there already an scroll ? Updating it
                if(scrollable.length){
                    scrollable.css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
                }
                //creating the scrolling
                else{
                    if(options.verticalCentered){
                        element.find('.fp-tableCell').wrapInner('<div class="fp-scrollable" />');
                    }else{
                        element.wrapInner('<div class="fp-scrollable" />');
                    }

                    element.find('.fp-scrollable').slimScroll({
                        allowPageScroll: true,
                        height: scrollHeight + 'px',
                        size: '10px',
                        alwaysVisible: true
                    });
                }
            }

            //removing the scrolling when it is not necessary anymore
            else{
                removeSlimScroll(element);
            }

            //undo
            element.css('overflow', '');
        }

        function removeSlimScroll(element){
            element.find('.fp-scrollable').children().first().unwrap().unwrap();
            element.find('.slimScrollBar').remove();
            element.find('.slimScrollRail').remove();
        }

        function addTableClass(element){
            element.addClass('fp-table').wrapInner('<div class="fp-tableCell" style="height:' + getTableHeight(element) + 'px;" />');
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!section.hasClass('fp-section')){
                    section = element.closest('.fp-section');
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                container.removeClass('fp-notransition');
            },10);
        }


        /**
        * Scrolls to the given section and slide
        */
        function scrollPageAndSlide(destiny, slide){
            var section;

            if (typeof slide === 'undefined') {
                slide = 0;
            }

            if(isNaN(destiny)){
                section = $('[data-anchor="'+destiny+'"]');
            }else{
                section = $('.fp-section').eq( (destiny -1) );
            }


            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass('active')){
                scrollPage(section, function(){
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(section, slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(section, slide){
            if(typeof slide != 'undefined'){
                var slides = section.find('.fp-slides');
                var destiny =  slides.find('[data-anchor="'+slide+'"]');

                if(!destiny.length){
                    destiny = slides.find('.fp-slide').eq(slide);
                }

                if(destiny.length){
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            section.append('<div class="fp-slidesNav"><ul></ul></div>');
            var nav = section.find('.fp-slidesNav');

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

            nav.find('li').first().find('a').addClass('active');
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length){

                //isn't it the first slide?
                if(slideIndex){
                    if(typeof anchorLink !== 'undefined'){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(typeof slideAnchor === 'undefined'){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(typeof slideIndex !== 'undefined'){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }

                setBodyClass(location.hash);
            }
            else if(typeof slideIndex !== 'undefined'){
                    setBodyClass(sectionIndex + '-' + slideIndex);
            }
            else{
                setBodyClass(String(sectionIndex));
            }
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(text){
            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            $('body')[0].className = $('body')[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g, '');

            //adding the current anchor
            $('body').addClass('fp-viewing-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }



        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }


        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        */
        function addMouseWheelHandler(){
            if (document.addEventListener) {
                document.addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.addEventListener('wheel', MouseWheelHandler, false); //Firefox
            } else {
                document.attachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }


        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(document).off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
                $(document).off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(document).off('touchstart ' + MSPointer.down);
                $(document).off('touchmove ' + MSPointer.move);
            }
        }


        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }
        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            return events;
        }

        function silentLandscapeScroll(activeSlide){
            FP.setScrollingSpeed (0, 'internal');
            landscapeScroll(activeSlide.closest('.fp-slides'), activeSlide);
            FP.setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        function silentScroll(top){
            if(options.scrollBar){
                container.scrollTop(top);
            }
            else if (options.css3) {
                var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else {
                container.css('top', -top);
            }
        }

        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        function setIsScrollable(value, direction){
            switch (direction){
                case 'up': isScrollAllowed.up = value; break;
                case 'down': isScrollAllowed.down = value; break;
                case 'left': isScrollAllowed.left = value; break;
                case 'right': isScrollAllowed.right = value; break;
                case 'all': FP.setAllowScrolling(value);
            }
        }


        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        FP.destroy = function(all){
            FP.setAutoScrolling(false, 'internal');
            FP.setAllowScrolling(false);
            FP.setKeyboardScrolling(false);
            container.addClass('fp-destroyed');

            $(window)
                .off('scroll', scrollHandler)
                .off('hashchange', hashChangeHandler)
                .off('resize', resizeHandler);

            $(document)
                .off('click', '#fp-nav a')
                .off('mouseenter', '#fp-nav li')
                .off('mouseleave', '#fp-nav li')
                .off('click', '.fp-slidesNav a')
                .off('mouseover', options.normalScrollElements)
                .off('mouseout', options.normalScrollElements);

            $('.fp-section')
                .off('click', '.fp-controlArrow');

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        };

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            $('#fp-nav, .fp-slidesNav, .fp-controlArrow').remove();

            //removing inline styles
            $('.fp-section').css( {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            $('.fp-slide').css( {
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            //removing added classes
            $('.fp-section, .fp-slide').each(function(){
                removeSlimScroll($(this));
                $(this).removeClass('fp-table active');
            });

            removeAnimation(container);
            removeAnimation(container.find('.fp-easing'));

            //Unwrapping content
            container.find('.fp-tableCell, .fp-slidesContainer, .fp-slides').each(function(){
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //scrolling the page to the top with no animation
            $('html, body').scrollTop(0);
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }
            if(options.continuousVertical && options.scrollBar){
                options.continuousVertical = false;
                showError('warn', 'Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function(index, name){
                if($('#' + name).length || $('[name="'+name+'"]').length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                }
            });
        }

        function showError(type, text){
            console && console[type] && console[type]('fullPage: ' + text);
        }
    };
})(jQuery, window, document, Math);

