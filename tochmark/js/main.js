
      /*
  Masked Input plugin for jQuery
  Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
  Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
  Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);


// wow js

(function() { var a, b, c = function(a, b) { return function() { return a.apply(b, arguments) } };
    a = function() {
        function a() {} return a.prototype.extend = function(a, b) { var c, d; for (c in a) d = a[c], null != d && (b[c] = d); return b }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a }(), b = this.WeakMap || (b = function() {
        function a() { this.keys = [], this.values = [] } return a.prototype.get = function(a) { var b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function(a, b) { var c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b); return this.keys.push(a), this.values.push(b) }, a }()), this.WOW = function() {
        function d(a) { null == a && (a = {}), this.scrollCallback = c(this.scrollCallback, this), this.scrollHandler = c(this.scrollHandler, this), this.start = c(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new b } return d.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0 }, d.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start) }, d.prototype.start = function() { var a, b, c, d; if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) { if (this.disabled()) return this.resetStyle(); for (d = this.boxes, b = 0, c = d.length; c > b; b++) a = d[b], this.applyStyle(a, !0); return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50) } }, d.prototype.stop = function() { return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0 }, d.prototype.show = function(a) { return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass }, d.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, d.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), d.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;")); return e }, d.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, d.prototype.vendors = ["moz", "webkit"], d.prototype.vendorSet = function(a, b) { var c, d, e, f;
            f = []; for (c in b) d = b[c], a["" + c] = d, f.push(function() { var b, f, g, h; for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d); return h }.call(this)); return f }, d.prototype.vendorCSS = function(a, b) { var c, d, e, f, g, h; for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b); return c }, d.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = window.getComputedStyle(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, d.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, d.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, d.prototype.scrollHandler = function() { return this.scrolled = !0 }, d.prototype.scrollCallback = function() { var a; return this.scrolled && (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), !this.boxes.length) ? this.stop() : void 0 }, d.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, d.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + this.element.clientHeight - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, d.prototype.util = function() { return this._util || (this._util = new a) }, d.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, d }() }).call(this);



      var svg = {
        'adventage' : [
          '<svg viewBox="-67 0 512 512.00101" xmlns="http://www.w3.org/2000/svg"><linearGradient id="grad" x1="0%" y1="100%" gradientUnits="userSpaceOnUse" x2="0%" y2="10%"> <stop offset="0%" stop-color="#7aa2c5" class="stop-1"></stop> <stop offset="76%" stop-color="#98c6ee" class="stop-2"></stop> <stop offset="100%" stop-color="#98c6ee" class="stop-3"></stop> </linearGradient><path d="m188.96875 107.972656c-50.023438 0-90.722656 40.695313-90.722656 90.71875 0 50.027344 40.699218 90.722656 90.722656 90.722656s90.71875-40.695312 90.71875-90.722656c0-50.023437-40.695312-90.71875-90.71875-90.71875zm0 0"/><path d="m377.933594 260.089844-27.511719-61.398438 27.511719-61.398437-58.34375-33.503907-13.832032-65.84375-66.898437 7.191407-49.890625-45.136719-49.894531 45.136719-66.894531-7.1875-13.832032 65.84375-58.347656 33.5 27.511719 61.398437-27.511719 61.398438 58.347656 33.503906 7.492188 35.671875-62.28125 132.339844 65 .851562 42.085937 49.542969 61.21875-130.089844 17.105469 15.472656 17.101562-15.472656 61.222657 130.089844 42.082031-49.542969 65-.851562-62.28125-132.339844 7.496094-35.671875zm-188.964844 59.320312c-66.566406 0-120.71875-54.152344-120.71875-120.71875s54.152344-120.71875 120.71875-120.71875c66.5625 0 120.71875 54.15625 120.71875 120.71875 0 66.566406-54.15625 120.71875-120.71875 120.71875zm0 0"/></svg>',
          '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.376 31.376" style="enable-background:new 0 0 31.376 31.376;" xml:space="preserve"><path d="M31.243,12.977c-0.249-0.57-0.78-0.948-1.389-0.984c-0.395-0.028-0.788,0.071-1.14,0.24c-0.193-0.158-0.42-0.288-0.676-0.372c-0.608-0.202-1.937-0.025-2.521,0.593c-1.221-1.665-3.035-3.005-5.196-3.876c-0.401,0.654-1.007,1.163-1.733,1.439c0.145,0.116,0.219,0.198,0.229,0.21c0.181,0.208,0.159,0.524-0.049,0.706c-0.096,0.082-0.211,0.123-0.328,0.123c-0.141,0-0.278-0.058-0.377-0.172c-0.027-0.03-0.805-0.849-2.837-0.849c-2.033,0-2.81,0.819-2.842,0.854c-0.185,0.201-0.5,0.219-0.704,0.037c-0.204-0.182-0.226-0.492-0.047-0.698c0.04-0.045,0.948-1.031,3.114-1.166c-0.38-0.431-0.662-0.95-0.793-1.529c-1.422,0.071-2.784,0.322-4.038,0.741C8.7,6.7,5.489,5.247,3.822,4.897c0,3.45,1.513,4.218,1.458,6.079c-1.272,1.18-2.201,2.598-2.675,4.162l-1.793-0.264c-0.544-0.08-0.901,0.296-0.793,0.835l0.717,3.585c0.108,0.539,0.646,0.98,1.196,0.98h0.805c0.638,1.77,1.87,3.332,3.512,4.551v5.384c2.726,0,4.936,0.078,4.936-2.062v-1.063c1.127,0.267,2.318,0.416,3.554,0.416c1.609,0,3.142-0.252,4.554-0.694v1.34c0,2.141,2.21,2.062,4.937,2.062v-6.211c1.872-1.749,3.01-4.016,3.01-6.498c0-1.667-0.517-3.235-1.419-4.618c0.335-0.518,1.574-0.709,2.062-0.546c0.136,0.045,0.26,0.105,0.371,0.179c-0.447,0.336-0.771,0.787-0.849,1.208c-0.055,0.294-0.07,1.015,0.979,1.35c0.133,0.042,0.259,0.063,0.375,0.063c0.38,0,0.671-0.213,0.798-0.604c0.166-0.51,0.005-1.305-0.468-1.915c0.236-0.091,0.488-0.139,0.735-0.125c0.501,0.03,0.825,0.374,0.96,0.685c0.152,0.351,0.115,0.717-0.102,0.979c-0.088,0.106-0.073,0.264,0.033,0.352c0.105,0.088,0.265,0.073,0.353-0.034C31.402,14.069,31.47,13.496,31.243,12.977z M7.072,15.373c-0.529,0-0.958-0.429-0.958-0.958s0.429-0.958,0.958-0.958c0.529,0,0.958,0.429,0.958,0.958S7.602,15.373,7.072,15.373z M29.081,14.375c-0.05,0.152-0.16,0.342-0.544,0.218c-0.492-0.157-0.707-0.419-0.64-0.782c0.062-0.331,0.352-0.696,0.741-0.959C29.056,13.346,29.197,14.018,29.081,14.375z"/><circle cx="17.354" cy="6.76" r="2.492"/><circle cx="13.862" cy="3.031" r="1.864"/><circle cx="20.925" cy="4.093" r="1.301"/></svg>',
          '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 422.518 422.518" style="enable-background:new 0 0 422.518 422.518;" xml:space="preserve"><path d="M422.512,215.424c0-0.079-0.004-0.158-0.005-0.237c-0.116-5.295-4.368-9.514-9.727-9.514h-2.554l-39.443-76.258c-1.664-3.22-4.983-5.225-8.647-5.226l-67.34-0.014l2.569-20.364c0.733-8.138-1.783-15.822-7.086-21.638c-5.293-5.804-12.683-9.001-20.81-9.001h-209c-5.255,0-9.719,4.066-10.22,9.308l-2.095,16.778h119.078c7.732,0,13.836,6.268,13.634,14c-0.203,7.732-6.635,14-14.367,14H126.78c0.007,0.02,0.014,0.04,0.021,0.059H10.163c-5.468,0-10.017,4.432-10.16,9.9c-0.143,5.468,4.173,9.9,9.641,9.9H164.06c7.168,1.104,12.523,7.303,12.326,14.808c-0.216,8.242-7.039,14.925-15.267,14.994H54.661c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.215,10,9.738,10h105.204c7.273,1.013,12.735,7.262,12.537,14.84c-0.217,8.284-7.109,15-15.393,15H35.792v0.011H25.651c-5.523,0-10.117,4.477-10.262,10c-0.145,5.523,4.214,10,9.738,10h8.752l-3.423,35.818c-0.734,8.137,1.782,15.821,7.086,21.637c5.292,5.805,12.683,9.001,20.81,9.001h7.55C69.5,333.8,87.3,349.345,109.073,349.345c21.773,0,40.387-15.545,45.06-36.118h94.219c7.618,0,14.83-2.913,20.486-7.682c5.172,4.964,12.028,7.682,19.514,7.682h1.55c3.597,20.573,21.397,36.118,43.171,36.118c21.773,0,40.387-15.545,45.06-36.118h6.219c16.201,0,30.569-13.171,32.029-29.36l6.094-67.506c0.008-0.091,0.004-0.181,0.01-0.273c0.01-0.139,0.029-0.275,0.033-0.415C422.52,215.589,422.512,215.508,422.512,215.424z M109.597,329.345c-13.785,0-24.707-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.706,11.215,24.345,25.001C134.89,318.131,123.382,329.345,109.597,329.345z M333.597,329.345c-13.785,0-24.706-11.214-24.346-24.999c0.361-13.786,11.87-25.001,25.655-25.001c13.785,0,24.707,11.215,24.345,25.001C358.89,318.131,347.382,329.345,333.597,329.345z M396.457,282.588c-0.52,5.767-5.823,10.639-11.58,10.639h-6.727c-4.454-19.453-21.744-33.882-42.721-33.882c-20.977,0-39.022,14.429-44.494,33.882h-2.059c-2.542,0-4.81-0.953-6.389-2.685c-1.589-1.742-2.337-4.113-2.106-6.676l12.609-139.691l28.959,0.006l-4.59,50.852c-0.735,8.137,1.78,15.821,7.083,21.637c5.292,5.806,12.685,9.004,20.813,9.004h56.338L396.457,282.588z"/></svg>',
          '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 611.999 611.999" style="enable-background:new 0 0 611.999 611.999;" xml:space="preserve"><path d="M570.416,562.822c-5.758-109.379-104.063-154.627-104.063-154.627c-23.487-10.982-66.07-32.48-93.989-46.691c35.77-39.134,46.335-102.939,47.98-112.018c7.465-41.08,3.708-91.926,3.708-91.926C417.226,58.685,317.399,57.132,306.945,57.236c-0.577,0-0.952,0.006-0.952,0.006s-0.319-0.006-0.792,0c-9.478-0.123-110.404,0.878-117.267,100.318c0,0-3.757,50.84,3.708,91.926c0.485,2.646,1.75,10.018,4.15,19.987c18.803,24.684,47.832,36.789,71.657,42.713c2.996-2.91,7.078-4.721,11.602-4.721h43.425c9.19,0,16.63,7.446,16.63,16.636c0,9.196-7.44,16.648-16.63,16.648h-43.425c-6.857,0-12.719-4.137-15.279-10.037c-17.771-4.322-38.336-11.848-56.691-24.794c7.323,19.011,17.759,39.404,32.553,55.592c-27.919,14.211-70.484,35.702-93.989,46.685c0,0-98.292,45.248-104.063,154.627c0,0-1.707,18.189,32.762,25.076c0,0,105.597,24.1,231.661,24.1c126.076,0,231.673-24.1,231.673-24.1C572.141,581.011,570.416,562.822,570.416,562.822z"/><path d="M154.147,284.944h10.491V161.722c0.025-0.307,0.098-0.602,0.098-0.915v-18.195c0-32.437,10.012-58.729,29.76-78.151c40.847-40.19,110.619-39.643,111.797-39.478c0.829-0.061,70.018-1.056,111.048,39.103c19.883,19.46,29.969,45.874,29.969,78.526v19.239c0,0.19,0.049,0.362,0.049,0.546v122.546h10.491c25.819,0,46.746-20.927,46.746-46.74v-44.923c0-20.767-13.56-38.348-32.308-44.432v-6.231c0-39.619-12.615-72.043-37.47-96.377C386.361-1.186,308.958,0.042,306.251,0.005c-3.253-0.031-80.73-0.982-129.164,46.531c-24.769,24.309-37.335,56.635-37.335,96.076v6.206c-18.772,6.083-32.345,23.677-32.345,44.456v44.923C107.408,264.017,128.34,284.944,154.147,284.944z"/></svg>'
        ],
        mail: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 370.88 370.88" style="enable-background:new 0 0 370.88 370.88;" xml:space="preserve"><path d="M355.6,66.16H15.28C6.841,66.16,0,73.001,0,81.44v208c0,8.439,6.841,15.28,15.28,15.28H355.6c8.439,0,15.28-6.841,15.28-15.28v-208C370.88,73.001,364.039,66.16,355.6,66.16z M15.28,78.16H355.6c1.436,0.007,2.7,0.947,3.12,2.32L185.44,188.72L12.16,80.48C12.58,79.107,13.844,78.167,15.28,78.16z M12,94.16L136.64,172L12,270.88V94.16z M358.88,289.36c0,1.812-1.469,3.28-3.28,3.28H15.28c-1.811,0-3.28-1.469-3.28-3.28v-3.2l135.44-107.04l34.8,21.76c1.955,1.233,4.445,1.233,6.4,0l34.8-21.76l135.44,107.04V289.36z M358.88,270.88l-124.96-98.56l124.96-77.44V270.88z"/></svg>',
        placeholder: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/></svg>',
        clock:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M507.203,205.836C487.977,105.187,406.813,24.023,306.164,4.797C126.117-29.594-29.594,126.117,4.797,306.164c19.227,100.648,100.391,181.813,201.039,201.039C385.883,541.594,541.594,385.883,507.203,205.836z M374.625,374.625C368.375,380.875,360.188,384,352,384s-16.375-3.125-22.625-9.375l-96-96c-6-6-9.375-14.125-9.375-22.625V128c0-17.688,14.328-32,32-32s32,14.313,32,32v114.75l86.625,86.625C387.125,341.875,387.125,362.125,374.625,374.625z"/></svg>',
        telegram: '<svg viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m123.195312 260.738281 63.679688 159.1875 82.902344-82.902343 142.140625 112.976562 100.082031-450-512 213.265625zm242.5-131.628906-156.714843 142.941406-19.519531 73.566407-36.058594-90.164063zm0 0"/></svg>',
        phone:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 301.001 301.001" style="enable-background:new 0 0 301.001 301.001;" xml:space="preserve"><path  d="M182.784,151.696c-7.794,9.143-14.811,15.833-14.745,15.773c0.065-0.054-6.086,7.435-14.637,15.877c-6.875,6.783-14.517,13.478-22.985,19.836c-9.605,7.218-24.623,8.153-32.776,3.176c-8.159-4.971-23.845-15.055-35.582-12.483c-9.861,2.159-22.953,9.393-38.704,27.984c-37.138,43.85-3.867,57.54,19.189,75.222c23.078,17.672,99.209-26.102,168.932-97.419c69.729-71.312,95.989-145.087,76.685-166.805c-19.309-21.718-35.403-53.901-76.43-13.679c-17.394,17.057-23.654,30.644-25.09,40.635c-1.713,11.895,9.48,26.809,15.034,34.582c5.553,7.778,5.711,22.822-0.789,32.928C195.163,136.238,189.05,144.348,182.784,151.696z"/></svg>',
        ok:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26"> <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/></svg>',
        cross:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 21.9 21.9"> <path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0 c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4 s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3 s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7 s-0.1-0.5-0.3-0.7L14.1,11.3z"/></svg>'
      }

$('.location').append(svg.placeholder)
$('.time').append(svg.clock)
$('.telegram').append(svg.telegram)
$('.phone').append(svg.phone)
$('.ok').append(svg.ok)
$('.popup__close').append(svg.cross)
$('input[type=tel]').mask('+7 (999) 999 99 99');


  new WOW().init();

function testInput(arr) {
    let type = arr.attr('type')
    switch (type) {
        case 'tel':
            if (arr.val().length == 0 ||
                arr.val() == '+7 (___) ___-__-__' ||
                arr.val().indexOf('_') > 0) {
                arr.addClass('error');
                arr.keyup(function(event) {
                    testInput(arr)
                });
            } else {
                arr.removeClass('error');
            }
            break;
        case 'email':
            if (pattern.test(arr.val())) { arr.removeClass('error') } else { arr.addClass('error') };
            break;
        case 'checkbox':
            if (arr.prop('checked')) { arr.parents('label').removeClass('error') } else { arr.parents('label').addClass('error') };
            break;
        default:
            let arrVal = $.trim(arr.val());
            if (arrVal === "") {
                arr.addClass('error');
                arr.keyup(function(event) {
                    testInput(arr)
                });
            } else {
                arr.removeClass('error');
            }
            break;
    }
}

function animeteError(arr) {
    arr.addClass('error__animate')
    setTimeout(function() {
        arr.removeClass('error__animate')
    }, 500);
}


      $('.adventages__img').each(function(index, el) {
        let number = index
          $(el).append(svg.adventage[number])
      });

      $('.review__send--ico').append(svg.mail)

      $('.openPopup').on('click', function(e){
        e.preventDefault()
        let formName = $(this).data('name'),
            popup = $('.popup__call'),
            formNameInput = popup.find('.formName');
            formNameInput.val(formName)
            popup.fadeIn();
      })

      $('.popup__close').on('click', function(){
        let popup = $(this).parents('.popup'),
            formNameInput = popup.find('.formName');
            formNameInput.val('');

              popup.fadeOut()
      })


      $('.sendForm').on('click', function(e){
        e.preventDefault()
        let form = $(this).parents('form'),
            tel = form.find('.tel'),
            name  = form.find('.name'),
            check = form.find('.checkbox');

testInput(tel)
            
testInput(name)
            
testInput(check)


    if (form.find('.error').length > 0) {
        let error = form.find('.error');
        error.each(function(index, el) {
            animeteError($(el))
        });
    } else {
        let msg = form.serialize();
        $.ajax({
            type: 'POST',
            url: 'sntmail.php',
            data: msg,
            success: function(data) {
        $('.popup').fadeOut();
        form[0].reset();
        $('.popup__thanks').fadeIn().delay(1600).fadeOut();

        },
        error: function(data) {

        }
        });
    }

      })


    $("a[href]").bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top + 50
        }, 1500);
        e.preventDefault();
        return false;
    });


    $('.header__burger').on('click', function(){
      $(this).toggleClass('active');
      $('.header__nav').toggleClass('active');
      $('.header__nav a').on('click', function(){
        $('.header__burger').removeClass('active');
      $('.header__nav').removeClass('active');
      })
    })