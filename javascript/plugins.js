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

///////////////////////// jQuery UI
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

///////////////////////// fullPage
/**
 * fullPage 2.6.0
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
            menu: false,
            anchors:[],
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: null,
            scrollOverflow: false,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            resize: false,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',


            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
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

            //for animateAnchor:false
            if(!options.animateAnchor){
                //getting the anchor link in the URL and deleting the `#`
                var value =  window.location.hash.replace('#', '').split('/');
                var destiny = value[0];

                if(destiny.length){
                    var section = $('[data-anchor="'+destiny+'"]');

                    if(section.length){
                        if(options.autoScrolling){
                            silentScroll(section.position().top);
                        }
                        else{
                            silentScroll(0);

                            //scrolling the page to the section with no animation
                            $('html, body').scrollTop(section.position().top);
                        }
                        activateMenuAndNav(destiny, null);

                        $.isFunction( options.afterLoad ) && options.afterLoad.call( section, destiny, (section.index('.fp-section') + 1));

                        //updating the active class
                        section.addClass('active').siblings().removeClass('active');
                    }
                }
            }

            //setting the class for the body element
            setBodyClass();

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
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();

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

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;
                    var isKineticScrolling = timeDiff <= 30;

                    // if its kinetic scrolling, we make sure its accelering (to avoid double swipes)
                    if((isAccelerating && isKineticScrolling) || !isKineticScrolling){
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
            var slideAnchor = getSlideAnchor(destiny);

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
            }

            setBodyClass();
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
        * Gets the anchor for the given slide. Its index will be used if there's none.
        */
        function getSlideAnchor(slide){
            var slideAnchor = slide.data('anchor');
            var slideIndex = slide.index('.fp-slide');

            //Slide without anchor link? We take the index instead.
            if(typeof slideAnchor === 'undefined'){
                slideAnchor = slideIndex;
            }

            return slideAnchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $('.fp-section.active');
            var slide = section.find('.fp-slide.active');

            var sectionAnchor = section.data('anchor');
            var slideAnchor = getSlideAnchor(slide);

            var sectionIndex = section.index('.fp-section');

            var text = String(sectionIndex);

            if(options.anchors.length){
                text = sectionAnchor;
            }

            if(slide.length){
                text = text + '-' + slideAnchor;
            }

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

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e)){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

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


////////////*skrollr core*/
/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
    'use strict';

    /*
     * Global api.
     */
    var skrollr = {
        get: function() {
            return _instance;
        },
        //Main entry point.
        init: function(options) {
            return _instance || new Skrollr(options);
        },
        VERSION: '0.6.29'
    };

    //Minify optimization.
    var hasProp = Object.prototype.hasOwnProperty;
    var Math = window.Math;
    var getStyle = window.getComputedStyle;

    //They will be filled when skrollr gets initialized.
    var documentElement;
    var body;

    var EVENT_TOUCHSTART = 'touchstart';
    var EVENT_TOUCHMOVE = 'touchmove';
    var EVENT_TOUCHCANCEL = 'touchcancel';
    var EVENT_TOUCHEND = 'touchend';

    var SKROLLABLE_CLASS = 'skrollable';
    var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
    var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
    var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';

    var SKROLLR_CLASS = 'skrollr';
    var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
    var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
    var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';

    var DEFAULT_EASING = 'linear';
    var DEFAULT_DURATION = 1000;//ms
    var DEFAULT_MOBILE_DECELERATION = 0.004;//pixel/ms²

    var DEFAULT_SKROLLRBODY = 'skrollr-body';

    var DEFAULT_SMOOTH_SCROLLING_DURATION = 200;//ms

    var ANCHOR_START = 'start';
    var ANCHOR_END = 'end';
    var ANCHOR_CENTER = 'center';
    var ANCHOR_BOTTOM = 'bottom';

    //The property which will be added to the DOM element to hold the ID of the skrollable.
    var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

    var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;

    var rxTrim = /^\s+|\s+$/g;

    //Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
    var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

    var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

    //Easing function names follow the property in square brackets.
    var rxPropEasing = /^(@?[a-z\-]+)\[(\w+)\]$/;

    var rxCamelCase = /-([a-z0-9_])/g;
    var rxCamelCaseFn = function(str, letter) {
        return letter.toUpperCase();
    };

    //Numeric values with optional sign.
    var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

    //Used to replace occurences of {?} with a number.
    var rxInterpolateString = /\{\?\}/g;

    //Finds rgb(a) colors, which don't use the percentage notation.
    var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

    //Finds all gradients.
    var rxGradient = /[a-z\-]+-gradient/g;

    //Vendor prefix. Will be set once skrollr gets initialized.
    var theCSSPrefix = '';
    var theDashedCSSPrefix = '';

    //Will be called once (when skrollr gets initialized).
    var detectCSSPrefix = function() {
        //Only relevant prefixes. May be extended.
        //Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
        var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

        //Detect prefix for current browser by finding the first property using a prefix.
        if(!getStyle) {
            return;
        }

        var style = getStyle(body, null);

        for(var k in style) {
            //We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
            theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));

            if(theCSSPrefix) {
                break;
            }
        }

        //Did we even detect a prefix?
        if(!theCSSPrefix) {
            theCSSPrefix = theDashedCSSPrefix = '';

            return;
        }

        theCSSPrefix = theCSSPrefix[0];

        //We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
        if(theCSSPrefix.slice(0,1) === '-') {
            theDashedCSSPrefix = theCSSPrefix;

            //There's no logic behind these. Need a look up.
            theCSSPrefix = ({
                '-webkit-': 'webkit',
                '-moz-': 'Moz',
                '-ms-': 'ms',
                '-o-': 'O'
            })[theCSSPrefix];
        } else {
            theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
        }
    };

    var polyfillRAF = function() {
        var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];

        var lastTime = _now();

        if(_isMobile || !requestAnimFrame) {
            requestAnimFrame = function(callback) {
                //How long did it take to render?
                var deltaTime = _now() - lastTime;
                var delay = Math.max(0, 1000 / 60 - deltaTime);

                return window.setTimeout(function() {
                    lastTime = _now();
                    callback();
                }, delay);
            };
        }

        return requestAnimFrame;
    };

    var polyfillCAF = function() {
        var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];

        if(_isMobile || !cancelAnimFrame) {
            cancelAnimFrame = function(timeout) {
                return window.clearTimeout(timeout);
            };
        }

        return cancelAnimFrame;
    };

    //Built-in easing functions.
    var easings = {
        begin: function() {
            return 0;
        },
        end: function() {
            return 1;
        },
        linear: function(p) {
            return p;
        },
        quadratic: function(p) {
            return p * p;
        },
        cubic: function(p) {
            return p * p * p;
        },
        swing: function(p) {
            return (-Math.cos(p * Math.PI) / 2) + 0.5;
        },
        sqrt: function(p) {
            return Math.sqrt(p);
        },
        outCubic: function(p) {
            return (Math.pow((p - 1), 3) + 1);
        },
        //see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
        bounce: function(p) {
            var a;

            if(p <= 0.5083) {
                a = 3;
            } else if(p <= 0.8489) {
                a = 9;
            } else if(p <= 0.96208) {
                a = 27;
            } else if(p <= 0.99981) {
                a = 91;
            } else {
                return 1;
            }

            return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
        }
    };

    /**
     * Constructor.
     */
    function Skrollr(options) {
        documentElement = document.documentElement;
        body = document.body;

        detectCSSPrefix();

        _instance = this;

        options = options || {};

        _constants = options.constants || {};

        //We allow defining custom easings or overwrite existing.
        if(options.easing) {
            for(var e in options.easing) {
                easings[e] = options.easing[e];
            }
        }

        _edgeStrategy = options.edgeStrategy || 'set';

        _listeners = {
            //Function to be called right before rendering.
            beforerender: options.beforerender,

            //Function to be called right after finishing rendering.
            render: options.render,

            //Function to be called whenever an element with the `data-emit-events` attribute passes a keyframe.
            keyframe: options.keyframe
        };

        //forceHeight is true by default
        _forceHeight = options.forceHeight !== false;

        if(_forceHeight) {
            _scale = options.scale || 1;
        }

        _mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;

        _smoothScrollingEnabled = options.smoothScrolling !== false;
        _smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;

        //Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
        _smoothScrolling = {
            targetTop: _instance.getScrollTop()
        };

        //A custom check function may be passed.
        _isMobile = ((options.mobileCheck || function() {
            return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
        })());

        if(_isMobile) {
            _skrollrBody = document.getElementById(options.skrollrBody || DEFAULT_SKROLLRBODY);

            //Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
            if(_skrollrBody) {
                _detect3DTransforms();
            }

            _initMobile();
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
        } else {
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
        }

        //Triggers parsing of elements and a first reflow.
        _instance.refresh();

        _addEvent(window, 'resize orientationchange', function() {
            var width = documentElement.clientWidth;
            var height = documentElement.clientHeight;

            //Only reflow if the size actually changed (#271).
            if(height !== _lastViewportHeight || width !== _lastViewportWidth) {
                _lastViewportHeight = height;
                _lastViewportWidth = width;

                _requestReflow = true;
            }
        });

        var requestAnimFrame = polyfillRAF();

        //Let's go.
        (function animloop(){
            _render();
            _animFrame = requestAnimFrame(animloop);
        }());

        return _instance;
    }

    /**
     * (Re)parses some or all elements.
     */
    Skrollr.prototype.refresh = function(elements) {
        var elementIndex;
        var elementsLength;
        var ignoreID = false;

        //Completely reparse anything without argument.
        if(elements === undefined) {
            //Ignore that some elements may already have a skrollable ID.
            ignoreID = true;

            _skrollables = [];
            _skrollableIdCounter = 0;

            elements = document.getElementsByTagName('*');
        } else if(elements.length === undefined) {
            //We also accept a single element as parameter.
            elements = [elements];
        }

        elementIndex = 0;
        elementsLength = elements.length;

        for(; elementIndex < elementsLength; elementIndex++) {
            var el = elements[elementIndex];
            var anchorTarget = el;
            var keyFrames = [];

            //If this particular element should be smooth scrolled.
            var smoothScrollThis = _smoothScrollingEnabled;

            //The edge strategy for this particular element.
            var edgeStrategy = _edgeStrategy;

            //If this particular element should emit keyframe events.
            var emitEvents = false;

            //If we're reseting the counter, remove any old element ids that may be hanging around.
            if(ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                delete el[SKROLLABLE_ID_DOM_PROPERTY];
            }

            if(!el.attributes) {
                continue;
            }

            //Iterate over all attributes and search for key frame attributes.
            var attributeIndex = 0;
            var attributesLength = el.attributes.length;

            for (; attributeIndex < attributesLength; attributeIndex++) {
                var attr = el.attributes[attributeIndex];

                if(attr.name === 'data-anchor-target') {
                    anchorTarget = document.querySelector(attr.value);

                    if(anchorTarget === null) {
                        throw 'Unable to find anchor target "' + attr.value + '"';
                    }

                    continue;
                }

                //Global smooth scrolling can be overridden by the element attribute.
                if(attr.name === 'data-smooth-scrolling') {
                    smoothScrollThis = attr.value !== 'off';

                    continue;
                }

                //Global edge strategy can be overridden by the element attribute.
                if(attr.name === 'data-edge-strategy') {
                    edgeStrategy = attr.value;

                    continue;
                }

                //Is this element tagged with the `data-emit-events` attribute?
                if(attr.name === 'data-emit-events') {
                    emitEvents = true;

                    continue;
                }

                var match = attr.name.match(rxKeyframeAttribute);

                if(match === null) {
                    continue;
                }

                var kf = {
                    props: attr.value,
                    //Point back to the element as well.
                    element: el,
                    //The name of the event which this keyframe will fire, if emitEvents is
                    eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
                };

                keyFrames.push(kf);

                var constant = match[1];

                if(constant) {
                    //Strip the underscore prefix.
                    kf.constant = constant.substr(1);
                }

                //Get the key frame offset.
                var offset = match[2];

                //Is it a percentage offset?
                if(/p$/.test(offset)) {
                    kf.isPercentage = true;
                    kf.offset = (offset.slice(0, -1) | 0) / 100;
                } else {
                    kf.offset = (offset | 0);
                }

                var anchor1 = match[3];

                //If second anchor is not set, the first will be taken for both.
                var anchor2 = match[4] || anchor1;

                //"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
                if(!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
                    kf.mode = 'absolute';

                    //data-end needs to be calculated after all key frames are known.
                    if(anchor1 === ANCHOR_END) {
                        kf.isEnd = true;
                    } else if(!kf.isPercentage) {
                        //For data-start we can already set the key frame w/o calculations.
                        //#59: "scale" options should only affect absolute mode.
                        kf.offset = kf.offset * _scale;
                    }
                }
                //"relative" mode, where numbers are relative to anchors.
                else {
                    kf.mode = 'relative';
                    kf.anchors = [anchor1, anchor2];
                }
            }

            //Does this element have key frames?
            if(!keyFrames.length) {
                continue;
            }

            //Will hold the original style and class attributes before we controlled the element (see #80).
            var styleAttr, classAttr;

            var id;

            if(!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                //We already have this element under control. Grab the corresponding skrollable id.
                id = el[SKROLLABLE_ID_DOM_PROPERTY];
                styleAttr = _skrollables[id].styleAttr;
                classAttr = _skrollables[id].classAttr;
            } else {
                //It's an unknown element. Asign it a new skrollable id.
                id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
                styleAttr = el.style.cssText;
                classAttr = _getClass(el);
            }

            _skrollables[id] = {
                element: el,
                styleAttr: styleAttr,
                classAttr: classAttr,
                anchorTarget: anchorTarget,
                keyFrames: keyFrames,
                smoothScrolling: smoothScrollThis,
                edgeStrategy: edgeStrategy,
                emitEvents: emitEvents,
                lastFrameIndex: -1
            };

            _updateClass(el, [SKROLLABLE_CLASS], []);
        }

        //Reflow for the first time.
        _reflow();

        //Now that we got all key frame numbers right, actually parse the properties.
        elementIndex = 0;
        elementsLength = elements.length;

        for(; elementIndex < elementsLength; elementIndex++) {
            var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

            if(sk === undefined) {
                continue;
            }

            //Parse the property string to objects
            _parseProps(sk);

            //Fill key frames with missing properties from left and right
            _fillProps(sk);
        }

        return _instance;
    };

    /**
     * Transform "relative" mode to "absolute" mode.
     * That is, calculate anchor position and offset of element.
     */
    Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
        var viewportHeight = documentElement.clientHeight;
        var box = element.getBoundingClientRect();
        var absolute = box.top;

        //#100: IE doesn't supply "height" with getBoundingClientRect.
        var boxHeight = box.bottom - box.top;

        if(viewportAnchor === ANCHOR_BOTTOM) {
            absolute -= viewportHeight;
        } else if(viewportAnchor === ANCHOR_CENTER) {
            absolute -= viewportHeight / 2;
        }

        if(elementAnchor === ANCHOR_BOTTOM) {
            absolute += boxHeight;
        } else if(elementAnchor === ANCHOR_CENTER) {
            absolute += boxHeight / 2;
        }

        //Compensate scrolling since getBoundingClientRect is relative to viewport.
        absolute += _instance.getScrollTop();

        return (absolute + 0.5) | 0;
    };

    /**
     * Animates scroll top to new position.
     */
    Skrollr.prototype.animateTo = function(top, options) {
        options = options || {};

        var now = _now();
        var scrollTop = _instance.getScrollTop();

        //Setting this to a new value will automatically cause the current animation to stop, if any.
        _scrollAnimation = {
            startTop: scrollTop,
            topDiff: top - scrollTop,
            targetTop: top,
            duration: options.duration || DEFAULT_DURATION,
            startTime: now,
            endTime: now + (options.duration || DEFAULT_DURATION),
            easing: easings[options.easing || DEFAULT_EASING],
            done: options.done
        };

        //Don't queue the animation if there's nothing to animate.
        if(!_scrollAnimation.topDiff) {
            if(_scrollAnimation.done) {
                _scrollAnimation.done.call(_instance, false);
            }

            _scrollAnimation = undefined;
        }

        return _instance;
    };

    /**
     * Stops animateTo animation.
     */
    Skrollr.prototype.stopAnimateTo = function() {
        if(_scrollAnimation && _scrollAnimation.done) {
            _scrollAnimation.done.call(_instance, true);
        }

        _scrollAnimation = undefined;
    };

    /**
     * Returns if an animation caused by animateTo is currently running.
     */
    Skrollr.prototype.isAnimatingTo = function() {
        return !!_scrollAnimation;
    };

    Skrollr.prototype.isMobile = function() {
        return _isMobile;
    };

    Skrollr.prototype.setScrollTop = function(top, force) {
        _forceRender = (force === true);

        if(_isMobile) {
            _mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
        } else {
            window.scrollTo(0, top);
        }

        return _instance;
    };

    Skrollr.prototype.getScrollTop = function() {
        if(_isMobile) {
            return _mobileOffset;
        } else {
            return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
        }
    };

    Skrollr.prototype.getMaxScrollTop = function() {
        return _maxKeyFrame;
    };

    Skrollr.prototype.on = function(name, fn) {
        _listeners[name] = fn;

        return _instance;
    };

    Skrollr.prototype.off = function(name) {
        delete _listeners[name];

        return _instance;
    };

    Skrollr.prototype.destroy = function() {
        var cancelAnimFrame = polyfillCAF();
        cancelAnimFrame(_animFrame);
        _removeAllEvents();

        _updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);

        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;

        for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
            _reset(_skrollables[skrollableIndex].element);
        }

        documentElement.style.overflow = body.style.overflow = '';
        documentElement.style.height = body.style.height = '';

        if(_skrollrBody) {
            skrollr.setStyle(_skrollrBody, 'transform', 'none');
        }

        _instance = undefined;
        _skrollrBody = undefined;
        _listeners = undefined;
        _forceHeight = undefined;
        _maxKeyFrame = 0;
        _scale = 1;
        _constants = undefined;
        _mobileDeceleration = undefined;
        _direction = 'down';
        _lastTop = -1;
        _lastViewportWidth = 0;
        _lastViewportHeight = 0;
        _requestReflow = false;
        _scrollAnimation = undefined;
        _smoothScrollingEnabled = undefined;
        _smoothScrollingDuration = undefined;
        _smoothScrolling = undefined;
        _forceRender = undefined;
        _skrollableIdCounter = 0;
        _edgeStrategy = undefined;
        _isMobile = false;
        _mobileOffset = 0;
        _translateZ = undefined;
    };

    /*
        Private methods.
    */

    var _initMobile = function() {
        var initialElement;
        var initialTouchY;
        var initialTouchX;
        var currentElement;
        var currentTouchY;
        var currentTouchX;
        var lastTouchY;
        var deltaY;

        var initialTouchTime;
        var currentTouchTime;
        var lastTouchTime;
        var deltaTime;

        _addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
            var touch = e.changedTouches[0];

            currentElement = e.target;

            //We don't want text nodes.
            while(currentElement.nodeType === 3) {
                currentElement = currentElement.parentNode;
            }

            currentTouchY = touch.clientY;
            currentTouchX = touch.clientX;
            currentTouchTime = e.timeStamp;

            if(!rxTouchIgnoreTags.test(currentElement.tagName)) {
                e.preventDefault();
            }

            switch(e.type) {
                case EVENT_TOUCHSTART:
                    //The last element we tapped on.
                    if(initialElement) {
                        initialElement.blur();
                    }

                    _instance.stopAnimateTo();

                    initialElement = currentElement;

                    initialTouchY = lastTouchY = currentTouchY;
                    initialTouchX = currentTouchX;
                    initialTouchTime = currentTouchTime;

                    break;
                case EVENT_TOUCHMOVE:
                    //Prevent default event on touchIgnore elements in case they don't have focus yet.
                    if(rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
                        e.preventDefault();
                    }

                    deltaY = currentTouchY - lastTouchY;
                    deltaTime = currentTouchTime - lastTouchTime;

                    _instance.setScrollTop(_mobileOffset - deltaY, true);

                    lastTouchY = currentTouchY;
                    lastTouchTime = currentTouchTime;
                    break;
                default:
                case EVENT_TOUCHCANCEL:
                case EVENT_TOUCHEND:
                    var distanceY = initialTouchY - currentTouchY;
                    var distanceX = initialTouchX - currentTouchX;
                    var distance2 = distanceX * distanceX + distanceY * distanceY;

                    //Check if it was more like a tap (moved less than 7px).
                    if(distance2 < 49) {
                        if(!rxTouchIgnoreTags.test(initialElement.tagName)) {
                            initialElement.focus();

                            //It was a tap, click the element.
                            var clickEvent = document.createEvent('MouseEvents');
                            clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                            initialElement.dispatchEvent(clickEvent);
                        }

                        return;
                    }

                    initialElement = undefined;

                    var speed = deltaY / deltaTime;

                    //Cap speed at 3 pixel/ms.
                    speed = Math.max(Math.min(speed, 3), -3);

                    var duration = Math.abs(speed / _mobileDeceleration);
                    var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
                    var targetTop = _instance.getScrollTop() - targetOffset;

                    //Relative duration change for when scrolling above bounds.
                    var targetRatio = 0;

                    //Change duration proportionally when scrolling would leave bounds.
                    if(targetTop > _maxKeyFrame) {
                        targetRatio = (_maxKeyFrame - targetTop) / targetOffset;

                        targetTop = _maxKeyFrame;
                    } else if(targetTop < 0) {
                        targetRatio = -targetTop / targetOffset;

                        targetTop = 0;
                    }

                    duration = duration * (1 - targetRatio);

                    _instance.animateTo((targetTop + 0.5) | 0, {easing: 'outCubic', duration: duration});
                    break;
            }
        });

        //Just in case there has already been some native scrolling, reset it.
        window.scrollTo(0, 0);
        documentElement.style.overflow = body.style.overflow = 'hidden';
    };

    /**
     * Updates key frames which depend on others / need to be updated on resize.
     * That is "end" in "absolute" mode and all key frames in "relative" mode.
     * Also handles constants, because they may change on resize.
     */
    var _updateDependentKeyFrames = function() {
        var viewportHeight = documentElement.clientHeight;
        var processedConstants = _processConstants();
        var skrollable;
        var element;
        var anchorTarget;
        var keyFrames;
        var keyFrameIndex;
        var keyFramesLength;
        var kf;
        var skrollableIndex;
        var skrollablesLength;
        var offset;
        var constantValue;

        //First process all relative-mode elements and find the max key frame.
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;

        for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            element = skrollable.element;
            anchorTarget = skrollable.anchorTarget;
            keyFrames = skrollable.keyFrames;

            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;

            for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];

                offset = kf.offset;
                constantValue = processedConstants[kf.constant] || 0;

                kf.frame = offset;

                if(kf.isPercentage) {
                    //Convert the offset to percentage of the viewport height.
                    offset = offset * viewportHeight;

                    //Absolute + percentage mode.
                    kf.frame = offset;
                }

                if(kf.mode === 'relative') {
                    _reset(element);

                    kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;

                    _reset(element, true);
                }

                kf.frame += constantValue;

                //Only search for max key frame when forceHeight is enabled.
                if(_forceHeight) {
                    //Find the max key frame, but don't use one of the data-end ones for comparison.
                    if(!kf.isEnd && kf.frame > _maxKeyFrame) {
                        _maxKeyFrame = kf.frame;
                    }
                }
            }
        }

        //#133: The document can be larger than the maxKeyFrame we found.
        _maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());

        //Now process all data-end keyframes.
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;

        for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            keyFrames = skrollable.keyFrames;

            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;

            for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];

                constantValue = processedConstants[kf.constant] || 0;

                if(kf.isEnd) {
                    kf.frame = _maxKeyFrame - kf.offset + constantValue;
                }
            }

            skrollable.keyFrames.sort(_keyFrameComparator);
        }
    };

    /**
     * Calculates and sets the style properties for the element at the given frame.
     * @param fakeFrame The frame to render at when smooth scrolling is enabled.
     * @param actualFrame The actual frame we are at.
     */
    var _calcSteps = function(fakeFrame, actualFrame) {
        //Iterate over all skrollables.
        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;

        for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
            var skrollable = _skrollables[skrollableIndex];
            var element = skrollable.element;
            var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
            var frames = skrollable.keyFrames;
            var framesLength = frames.length;
            var firstFrame = frames[0];
            var lastFrame = frames[frames.length - 1];
            var beforeFirst = frame < firstFrame.frame;
            var afterLast = frame > lastFrame.frame;
            var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
            var emitEvents = skrollable.emitEvents;
            var lastFrameIndex = skrollable.lastFrameIndex;
            var key;
            var value;

            //If we are before/after the first/last frame, set the styles according to the given edge strategy.
            if(beforeFirst || afterLast) {
                //Check if we already handled this edge case last time.
                //Note: using setScrollTop it's possible that we jumped from one edge to the other.
                if(beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
                    continue;
                }

                //Add the skrollr-before or -after class.
                if(beforeFirst) {
                    _updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]);

                    //This handles the special case where we exit the first keyframe.
                    if(emitEvents && lastFrameIndex > -1) {
                        _emitEvent(element, firstFrame.eventType, _direction);
                        skrollable.lastFrameIndex = -1;
                    }
                } else {
                    _updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]);

                    //This handles the special case where we exit the last keyframe.
                    if(emitEvents && lastFrameIndex < framesLength) {
                        _emitEvent(element, lastFrame.eventType, _direction);
                        skrollable.lastFrameIndex = framesLength;
                    }
                }

                //Remember that we handled the edge case (before/after the first/last keyframe).
                skrollable.edge = beforeFirst ? -1 : 1;

                switch(skrollable.edgeStrategy) {
                    case 'reset':
                        _reset(element);
                        continue;
                    case 'ease':
                        //Handle this case like it would be exactly at first/last keyframe and just pass it on.
                        frame = firstOrLastFrame.frame;
                        break;
                    default:
                    case 'set':
                        var props = firstOrLastFrame.props;

                        for(key in props) {
                            if(hasProp.call(props, key)) {
                                value = _interpolateString(props[key].value);

                                //Set style or attribute.
                                if(key.indexOf('@') === 0) {
                                    element.setAttribute(key.substr(1), value);
                                } else {
                                    skrollr.setStyle(element, key, value);
                                }
                            }
                        }

                        continue;
                }
            } else {
                //Did we handle an edge last time?
                if(skrollable.edge !== 0) {
                    _updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
                    skrollable.edge = 0;
                }
            }

            //Find out between which two key frames we are right now.
            var keyFrameIndex = 0;

            for(; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
                if(frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
                    var left = frames[keyFrameIndex];
                    var right = frames[keyFrameIndex + 1];

                    for(key in left.props) {
                        if(hasProp.call(left.props, key)) {
                            var progress = (frame - left.frame) / (right.frame - left.frame);

                            //Transform the current progress using the given easing function.
                            progress = left.props[key].easing(progress);

                            //Interpolate between the two values
                            value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

                            value = _interpolateString(value);

                            //Set style or attribute.
                            if(key.indexOf('@') === 0) {
                                element.setAttribute(key.substr(1), value);
                            } else {
                                skrollr.setStyle(element, key, value);
                            }
                        }
                    }

                    //Are events enabled on this element?
                    //This code handles the usual cases of scrolling through different keyframes.
                    //The special cases of before first and after last keyframe are handled above.
                    if(emitEvents) {
                        //Did we pass a new keyframe?
                        if(lastFrameIndex !== keyFrameIndex) {
                            if(_direction === 'down') {
                                _emitEvent(element, left.eventType, _direction);
                            } else {
                                _emitEvent(element, right.eventType, _direction);
                            }

                            skrollable.lastFrameIndex = keyFrameIndex;
                        }
                    }

                    break;
                }
            }
        }
    };

    /**
     * Renders all elements.
     */
    var _render = function() {
        if(_requestReflow) {
            _requestReflow = false;
            _reflow();
        }

        //We may render something else than the actual scrollbar position.
        var renderTop = _instance.getScrollTop();

        //If there's an animation, which ends in current render call, call the callback after rendering.
        var afterAnimationCallback;
        var now = _now();
        var progress;

        //Before actually rendering handle the scroll animation, if any.
        if(_scrollAnimation) {
            //It's over
            if(now >= _scrollAnimation.endTime) {
                renderTop = _scrollAnimation.targetTop;
                afterAnimationCallback = _scrollAnimation.done;
                _scrollAnimation = undefined;
            } else {
                //Map the current progress to the new progress using given easing function.
                progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

                renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
            }

            _instance.setScrollTop(renderTop, true);
        }
        //Smooth scrolling only if there's no animation running and if we're not forcing the rendering.
        else if(!_forceRender) {
            var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

            //The user scrolled, start new smooth scrolling.
            if(smoothScrollingDiff) {
                _smoothScrolling = {
                    startTop: _lastTop,
                    topDiff: renderTop - _lastTop,
                    targetTop: renderTop,
                    startTime: _lastRenderCall,
                    endTime: _lastRenderCall + _smoothScrollingDuration
                };
            }

            //Interpolate the internal scroll position (not the actual scrollbar).
            if(now <= _smoothScrolling.endTime) {
                //Map the current progress to the new progress using easing function.
                progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);

                renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
            }
        }

        //That's were we actually "scroll" on mobile.
        if(_isMobile && _skrollrBody) {
            //Set the transform ("scroll it").
            skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
        }

        //Did the scroll position even change?
        if(_forceRender || _lastTop !== renderTop) {
            //Remember in which direction are we scrolling?
            _direction = (renderTop > _lastTop) ? 'down' : (renderTop < _lastTop ? 'up' : _direction);

            _forceRender = false;

            var listenerParams = {
                curTop: renderTop,
                lastTop: _lastTop,
                maxTop: _maxKeyFrame,
                direction: _direction
            };

            //Tell the listener we are about to render.
            var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

            //The beforerender listener function is able the cancel rendering.
            if(continueRendering !== false) {
                //Now actually interpolate all the styles.
                _calcSteps(renderTop, _instance.getScrollTop());

                //Remember when we last rendered.
                _lastTop = renderTop;

                if(_listeners.render) {
                    _listeners.render.call(_instance, listenerParams);
                }
            }

            if(afterAnimationCallback) {
                afterAnimationCallback.call(_instance, false);
            }
        }

        _lastRenderCall = now;
    };

    /**
     * Parses the properties for each key frame of the given skrollable.
     */
    var _parseProps = function(skrollable) {
        //Iterate over all key frames
        var keyFrameIndex = 0;
        var keyFramesLength = skrollable.keyFrames.length;

        for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            var frame = skrollable.keyFrames[keyFrameIndex];
            var easing;
            var value;
            var prop;
            var props = {};

            var match;

            while((match = rxPropValue.exec(frame.props)) !== null) {
                prop = match[1];
                value = match[2];

                easing = prop.match(rxPropEasing);

                //Is there an easing specified for this prop?
                if(easing !== null) {
                    prop = easing[1];
                    easing = easing[2];
                } else {
                    easing = DEFAULT_EASING;
                }

                //Exclamation point at first position forces the value to be taken literal.
                value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

                //Save the prop for this key frame with his value and easing function
                props[prop] = {
                    value: value,
                    easing: easings[easing]
                };
            }

            frame.props = props;
        }
    };

    /**
     * Parses a value extracting numeric values and generating a format string
     * for later interpolation of the new values in old string.
     *
     * @param val The CSS value to be parsed.
     * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
     * where the first element is the format string later used
     * and all following elements are the numeric value.
     */
    var _parseProp = function(val) {
        var numbers = [];

        //One special case, where floats don't work.
        //We replace all occurences of rgba colors
        //which don't use percentage notation with the percentage notation.
        rxRGBAIntegerColor.lastIndex = 0;
        val = val.replace(rxRGBAIntegerColor, function(rgba) {
            return rgba.replace(rxNumericValue, function(n) {
                return n / 255 * 100 + '%';
            });
        });

        //Handle prefixing of "gradient" values.
        //For now only the prefixed value will be set. Unprefixed isn't supported anyway.
        if(theDashedCSSPrefix) {
            rxGradient.lastIndex = 0;
            val = val.replace(rxGradient, function(s) {
                return theDashedCSSPrefix + s;
            });
        }

        //Now parse ANY number inside this string and create a format string.
        val = val.replace(rxNumericValue, function(n) {
            numbers.push(+n);
            return '{?}';
        });

        //Add the formatstring as first value.
        numbers.unshift(val);

        return numbers;
    };

    /**
     * Fills the key frames with missing left and right hand properties.
     * If key frame 1 has property X and key frame 2 is missing X,
     * but key frame 3 has X again, then we need to assign X to key frame 2 too.
     *
     * @param sk A skrollable.
     */
    var _fillProps = function(sk) {
        //Will collect the properties key frame by key frame
        var propList = {};
        var keyFrameIndex;
        var keyFramesLength;

        //Iterate over all key frames from left to right
        keyFrameIndex = 0;
        keyFramesLength = sk.keyFrames.length;

        for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }

        //Now do the same from right to fill the last gaps

        propList = {};

        //Iterate over all key frames from right to left
        keyFrameIndex = sk.keyFrames.length - 1;

        for(; keyFrameIndex >= 0; keyFrameIndex--) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }
    };

    var _fillPropForFrame = function(frame, propList) {
        var key;

        //For each key frame iterate over all right hand properties and assign them,
        //but only if the current key frame doesn't have the property by itself
        for(key in propList) {
            //The current frame misses this property, so assign it.
            if(!hasProp.call(frame.props, key)) {
                frame.props[key] = propList[key];
            }
        }

        //Iterate over all props of the current frame and collect them
        for(key in frame.props) {
            propList[key] = frame.props[key];
        }
    };

    /**
     * Calculates the new values for two given values array.
     */
    var _calcInterpolation = function(val1, val2, progress) {
        var valueIndex;
        var val1Length = val1.length;

        //They both need to have the same length
        if(val1Length !== val2.length) {
            throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
        }

        //Add the format string as first element.
        var interpolated = [val1[0]];

        valueIndex = 1;

        for(; valueIndex < val1Length; valueIndex++) {
            //That's the line where the two numbers are actually interpolated.
            interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
        }

        return interpolated;
    };

    /**
     * Interpolates the numeric values into the format string.
     */
    var _interpolateString = function(val) {
        var valueIndex = 1;

        rxInterpolateString.lastIndex = 0;

        return val[0].replace(rxInterpolateString, function() {
            return val[valueIndex++];
        });
    };

    /**
     * Resets the class and style attribute to what it was before skrollr manipulated the element.
     * Also remembers the values it had before reseting, in order to undo the reset.
     */
    var _reset = function(elements, undo) {
        //We accept a single element or an array of elements.
        elements = [].concat(elements);

        var skrollable;
        var element;
        var elementsIndex = 0;
        var elementsLength = elements.length;

        for(; elementsIndex < elementsLength; elementsIndex++) {
            element = elements[elementsIndex];
            skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];

            //Couldn't find the skrollable for this DOM element.
            if(!skrollable) {
                continue;
            }

            if(undo) {
                //Reset class and style to the "dirty" (set by skrollr) values.
                element.style.cssText = skrollable.dirtyStyleAttr;
                _updateClass(element, skrollable.dirtyClassAttr);
            } else {
                //Remember the "dirty" (set by skrollr) class and style.
                skrollable.dirtyStyleAttr = element.style.cssText;
                skrollable.dirtyClassAttr = _getClass(element);

                //Reset class and style to what it originally was.
                element.style.cssText = skrollable.styleAttr;
                _updateClass(element, skrollable.classAttr);
            }
        }
    };

    /**
     * Detects support for 3d transforms by applying it to the skrollr-body.
     */
    var _detect3DTransforms = function() {
        _translateZ = 'translateZ(0)';
        skrollr.setStyle(_skrollrBody, 'transform', _translateZ);

        var computedStyle = getStyle(_skrollrBody);
        var computedTransform = computedStyle.getPropertyValue('transform');
        var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
        var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');

        if(!has3D) {
            _translateZ = '';
        }
    };

    /**
     * Set the CSS property on the given element. Sets prefixed properties as well.
     */
    skrollr.setStyle = function(el, prop, val) {
        var style = el.style;

        //Camel case.
        prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

        //Make sure z-index gets a <integer>.
        //This is the only <integer> case we need to handle.
        if(prop === 'zIndex') {
            if(isNaN(val)) {
                //If it's not a number, don't touch it.
                //It could for example be "auto" (#351).
                style[prop] = val;
            } else {
                //Floor the number.
                style[prop] = '' + (val | 0);
            }
        }
        //#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
        else if(prop === 'float') {
            style.styleFloat = style.cssFloat = val;
        }
        else {
            //Need try-catch for old IE.
            try {
                //Set prefixed property if there's a prefix.
                if(theCSSPrefix) {
                    style[theCSSPrefix + prop.slice(0,1).toUpperCase() + prop.slice(1)] = val;
                }

                //Set unprefixed.
                style[prop] = val;
            } catch(ignore) {}
        }
    };

    /**
     * Cross browser event handling.
     */
    var _addEvent = skrollr.addEvent = function(element, names, callback) {
        var intermediate = function(e) {
            //Normalize IE event stuff.
            e = e || window.event;

            if(!e.target) {
                e.target = e.srcElement;
            }

            if(!e.preventDefault) {
                e.preventDefault = function() {
                    e.returnValue = false;
                    e.defaultPrevented = true;
                };
            }

            return callback.call(this, e);
        };

        names = names.split(' ');

        var name;
        var nameCounter = 0;
        var namesLength = names.length;

        for(; nameCounter < namesLength; nameCounter++) {
            name = names[nameCounter];

            if(element.addEventListener) {
                element.addEventListener(name, callback, false);
            } else {
                element.attachEvent('on' + name, intermediate);
            }

            //Remember the events to be able to flush them later.
            _registeredEvents.push({
                element: element,
                name: name,
                listener: callback
            });
        }
    };

    var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
        names = names.split(' ');

        var nameCounter = 0;
        var namesLength = names.length;

        for(; nameCounter < namesLength; nameCounter++) {
            if(element.removeEventListener) {
                element.removeEventListener(names[nameCounter], callback, false);
            } else {
                element.detachEvent('on' + names[nameCounter], callback);
            }
        }
    };

    var _removeAllEvents = function() {
        var eventData;
        var eventCounter = 0;
        var eventsLength = _registeredEvents.length;

        for(; eventCounter < eventsLength; eventCounter++) {
            eventData = _registeredEvents[eventCounter];

            _removeEvent(eventData.element, eventData.name, eventData.listener);
        }

        _registeredEvents = [];
    };

    var _emitEvent = function(element, name, direction) {
        if(_listeners.keyframe) {
            _listeners.keyframe.call(_instance, element, name, direction);
        }
    };

    var _reflow = function() {
        var pos = _instance.getScrollTop();

        //Will be recalculated by _updateDependentKeyFrames.
        _maxKeyFrame = 0;

        if(_forceHeight && !_isMobile) {
            //un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
            body.style.height = '';
        }

        _updateDependentKeyFrames();

        if(_forceHeight && !_isMobile) {
            //"force" the height.
            body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
        }

        //The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
        if(_isMobile) {
            _instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
        } else {
            //Remember and reset the scroll pos (#217).
            _instance.setScrollTop(pos, true);
        }

        _forceRender = true;
    };

    /*
     * Returns a copy of the constants object where all functions and strings have been evaluated.
     */
    var _processConstants = function() {
        var viewportHeight = documentElement.clientHeight;
        var copy = {};
        var prop;
        var value;

        for(prop in _constants) {
            value = _constants[prop];

            if(typeof value === 'function') {
                value = value.call(_instance);
            }
            //Percentage offset.
            else if((/p$/).test(value)) {
                value = (value.slice(0, -1) / 100) * viewportHeight;
            }

            copy[prop] = value;
        }

        return copy;
    };

    /*
     * Returns the height of the document.
     */
    var _getDocumentHeight = function() {
        var skrollrBodyHeight = 0;
        var bodyHeight;

        if(_skrollrBody) {
            skrollrBodyHeight = Math.max(_skrollrBody.offsetHeight, _skrollrBody.scrollHeight);
        }

        bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);

        return bodyHeight - documentElement.clientHeight;
    };

    /**
     * Returns a string of space separated classnames for the current element.
     * Works with SVG as well.
     */
    var _getClass = function(element) {
        var prop = 'className';

        //SVG support by using className.baseVal instead of just className.
        if(window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }

        return element[prop];
    };

    /**
     * Adds and removes a CSS classes.
     * Works with SVG as well.
     * add and remove are arrays of strings,
     * or if remove is ommited add is a string and overwrites all classes.
     */
    var _updateClass = function(element, add, remove) {
        var prop = 'className';

        //SVG support by using className.baseVal instead of just className.
        if(window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }

        //When remove is ommited, we want to overwrite/set the classes.
        if(remove === undefined) {
            element[prop] = add;
            return;
        }

        //Cache current classes. We will work on a string before passing back to DOM.
        var val = element[prop];

        //All classes to be removed.
        var classRemoveIndex = 0;
        var removeLength = remove.length;

        for(; classRemoveIndex < removeLength; classRemoveIndex++) {
            val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
        }

        val = _trim(val);

        //All classes to be added.
        var classAddIndex = 0;
        var addLength = add.length;

        for(; classAddIndex < addLength; classAddIndex++) {
            //Only add if el not already has class.
            if(_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
                val += ' ' + add[classAddIndex];
            }
        }

        element[prop] = _trim(val);
    };

    var _trim = function(a) {
        return a.replace(rxTrim, '');
    };

    /**
     * Adds a space before and after the string.
     */
    var _untrim = function(a) {
        return ' ' + a + ' ';
    };

    var _now = Date.now || function() {
        return +new Date();
    };

    var _keyFrameComparator = function(a, b) {
        return a.frame - b.frame;
    };

    /*
     * Private variables.
     */

    //Singleton
    var _instance;

    /*
        A list of all elements which should be animated associated with their the metadata.
        Exmaple skrollable with two key frames animating from 100px width to 20px:

        skrollable = {
            element: <the DOM element>,
            styleAttr: <style attribute of the element before skrollr>,
            classAttr: <class attribute of the element before skrollr>,
            keyFrames: [
                {
                    frame: 100,
                    props: {
                        width: {
                            value: ['{?}px', 100],
                            easing: <reference to easing function>
                        }
                    },
                    mode: "absolute"
                },
                {
                    frame: 200,
                    props: {
                        width: {
                            value: ['{?}px', 20],
                            easing: <reference to easing function>
                        }
                    },
                    mode: "absolute"
                }
            ]
        };
    */
    var _skrollables;

    var _skrollrBody;

    var _listeners;
    var _forceHeight;
    var _maxKeyFrame = 0;

    var _scale = 1;
    var _constants;

    var _mobileDeceleration;

    //Current direction (up/down).
    var _direction = 'down';

    //The last top offset value. Needed to determine direction.
    var _lastTop = -1;

    //The last time we called the render method (doesn't mean we rendered!).
    var _lastRenderCall = _now();

    //For detecting if it actually resized (#271).
    var _lastViewportWidth = 0;
    var _lastViewportHeight = 0;

    var _requestReflow = false;

    //Will contain data about a running scrollbar animation, if any.
    var _scrollAnimation;

    var _smoothScrollingEnabled;

    var _smoothScrollingDuration;

    //Will contain settins for smooth scrolling if enabled.
    var _smoothScrolling;

    //Can be set by any operation/event to force rendering even if the scrollbar didn't move.
    var _forceRender;

    //Each skrollable gets an unique ID incremented for each skrollable.
    //The ID is the index in the _skrollables array.
    var _skrollableIdCounter = 0;

    var _edgeStrategy;


    //Mobile specific vars. Will be stripped by UglifyJS when not in use.
    var _isMobile = false;

    //The virtual scroll offset when using mobile scrolling.
    var _mobileOffset = 0;

    //If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
    var _translateZ;

    //Will contain data about registered events by skrollr.
    var _registeredEvents = [];

    //Animation frame id returned by RequestAnimationFrame (or timeout when RAF is not supported).
    var _animFrame;

    //Expose skrollr as either a global variable or a require.js module.
    if(typeof define === 'function' && define.amd) {
        define([], function () {
            return skrollr;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = skrollr;
    } else {
        window.skrollr = skrollr;
    }

}(window, document));


/*!
 * Plugin for skrollr.
 * This plugin brings opacity and hsl colors to IE < 9.
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(document, skrollr) {
    'use strict';

    var rxHSLAColor = /hsla?\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)%\s*,\s*(-?[\d.]+)%.*?\)/g;
    var rxRGBAColor = /rgba?\(\s*(-?[\d.]+%?)\s*,\s*(-?[\d.]+%?)\s*,\s*(-?[\d.]+%?).*?\)/g;
    var rxID = /^#[^\s]+$/;

    var _setStyle = skrollr.setStyle;

    //Monkeypatch the setStyle function.
    skrollr.setStyle = function(el, prop, val) {
        //Original function call.
        _setStyle.apply(this, arguments);

        var style = el.style;
        var matched;

        //IE opacity
        if(prop === 'opacity') {
            style.zoom = 1;

            //Remove filter attribute in IE.
            if(val >= 1 && style.removeAttribute) {
                style.removeAttribute('filter');
            } else {
                style.filter = 'alpha(opacity=' + val * 100 + ')';
            }

            return;
        }

        //Fast pre check
        if(val.indexOf('hsl') > -1) {
            matched = false;

            //Replace hsl(a) with hex if needed (ignoring alpha).
            val = val.replace(rxHSLAColor, function(x, h, s, l) {
                matched = true;

                return toHex.hsl(parseFloat(h), parseFloat(s), parseFloat(l));
            });

            if(matched) {
                try {
                    style[prop] = val;
                } catch(ignore) {}

                return;
            }
        }

        //Fast pre check
        if(val.indexOf('rgb') > -1) {
            matched = false;

            //Replace rgba with hex if needed (ignoring alpha).
            val = val.replace(rxRGBAColor, function(s, r, g, b) {
                matched = true;

                r = parseFloat(r, 10);
                g = parseFloat(g, 10);
                b = parseFloat(b, 10);

                //rgba allows percentage notation.
                if(s.indexOf('%') > -1) {
                    r = (r / 100) * 255;
                    g = (g / 100) * 255;
                    b = (b / 100) * 255;
                }

                return toHex.rgb(r | 0, g | 0, b | 0);
            });

            if(matched) {
                try {
                    style[prop] = val;
                } catch(ignore) {}

                return;
            }
        }
    };


    /**
     * Converts rgb or hsl color to hex color.
     */
    var toHex = {
        //Credits to aemkei, jed and others
        //Based on https://gist.github.com/1325937 and https://gist.github.com/983535
        hsl: function(a,b,c,y){
            a%=360;
            a=a/60;c=c/100;b=[c+=b*=(c<0.5?c:1-c)/100,c-a%1*b*2,c-=b*=2,c,c+a%1*b,c+b];

            y = [b[~~a%6],b[(a|16)%6],b[(a|8)%6]];

            return toHex.rgb(parseInt(y[0] * 255, 10), parseInt(y[1] * 255, 10), parseInt(y[2] * 255, 10));
        },
        //https://gist.github.com/983535
        rgb: function(a,b,c){
            return'#' + ((256+a<<8|b)<<8|c).toString(16).slice(1);
        }
    };

    /*
        A really bad polyfill. But the main use-case for data-anchor-target are IDs.
    */
    document.querySelector = document.querySelector || function(selector) {
        if(!rxID.test(selector)) {
            throw 'Unsupported selector "' + selector + '". The querySelector polyfill only works for IDs.';
        }

        return document.getElementById(selector.substr(1));
    };
}(document, window.skrollr));

