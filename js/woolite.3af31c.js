(function(){var t,e,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(){}return t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),e=this.WeakMap||this.MozWeakMap||(e=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i=this.keys,o=i.length;for(e=n=0;n<o;e=++n){if(i[e]===t)return this.values[e]}},t.prototype.set=function(t,e){var n,i,o=this.keys,r=o.length;for(n=i=0;i<r;n=++i){if(o[n]===t)return void(this.values[n]=e)}return this.keys.push(t),this.values.push(e)},t}()),n=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),i.test(e)&&e.replace(i,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},i=/(\-([a-z]){1})/g,this.woolite=function(){function i(t){window.wooliteObj=this,this.scrollCallback=o(this.scrollCallback,this),this.scrollHandler=o(this.scrollHandler,this),this.resetAnimation=o(this.resetAnimation,this),this.start=o(this.start,this),this.scrolled=!0,this.ready=!1,this.isChrome=/chrome/i.test(navigator.userAgent),this.isFF=/firefox/i.test(navigator.userAgent),this.animationNameCache=new e}return i.prototype.init=function(){return this.ac=0,this.element=window.document.documentElement,this.stopped=!1,this.boxes=[],this.manualBoxes=[],[]},i.prototype.addAnimation=function(t,e,n,i,o){for(var r=t.length,a=0;a<r;a++){var s=t[a],l={element:s,duration:e,delay:n,iteration:i,offset:o};this.applyStyle(l,!0),this.boxes.push(l),this.addScrollEvent(s)}},i.prototype.addManualAnimation=function(t,e,n){for(var i=t.length,o=0;o<i;o++){var r={element:t[o],duration:e,delay:n};this.applyStyle(r,!0),this.manualBoxes.push(r)}},i.prototype.addScrollEvent=function(t){for(;t!=document;){if("scroll"==n(t).overflow){this.util().addEvent(t,"scroll",this.scrollHandler),this.scrollHandler();break}t=t.parentNode}},i.prototype.start=function(){return this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50),this.finished=[]},i.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},i.prototype.show=function(t,e){var n;this.ac++||(this.iid=setInterval((n=this,function(){n.scrolled=!0,n.scrollCallback()}),50)),this.applyStyle(t,void 0,e),t.element.className=t.element.className+" animated",this.util().addEvent(t.element,"animationend",this.resetAnimation),this.util().addEvent(t.element,"oanimationend",this.resetAnimation),this.util().addEvent(t.element,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t.element,"MSAnimationEnd",this.resetAnimation);var i=document.createEvent("Event");return i.initEvent("scroll",!0,!0),window.dispatchEvent(i),t},i.prototype.applyStyle=function(t,e,n){return this.animate(function(t,e,n,i){return function(){return t.customStyle(e.element,n,e.duration,e.delay,e.iteration,i)}}(this,t,e,n))},i.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},i.prototype.doAnimate=function(t,e){for(var n=this.manualBoxes,i=n.length,o=0;o<i;o++){var r=n[o];if(r&&r.element==t){this.show(r,e);break}}},i.prototype.resetAnimation=function(t){var e;if(--this.ac||(clearInterval(this.iid),this.iid=void 0),t.type.toLowerCase().indexOf("animationend")>=0){if(e=t.target||t.srcElement,"reverse"==this.vendorCSS(e,"animation-direction")){e.removeAttribute("style");for(var n=this.manualBoxes,i=this.boxes,o=n.length,r=i.length,a=0;a<o;a++){var s=n[a];if(s&&s.element==e){for(var l=s.element;l!=document;){var u=l.getAttribute("data-popup-type");if(null!==u&&u.length>0){this.vendorSet(l.style,{transform:"translate3d(-999999px,0,0)"});break}l=l.parentNode}for(var h=0;h<r;h++){var d=i[h];if(d)for(l=d.element.parentNode;l!=document;){if(l==e){d.element.className=d.element.className.replace("animated","").trim(),this.applyStyle(d,!0);break}l=l.parentNode}}break}}}else this.cachedAnimationName(e)&&this.vendorSet(e.style,{animationName:"none"});return e.className=e.className.replace("animated","").trim()}},i.prototype.customStyle=function(t,e,n,i,o,r){var a;if(void 0!==(a=this.cachedAnimationName(t))||this.cacheAnimationName(t))return t.style.visibility=e?"hidden":"visible",this.vendorSet(t.style,{animationDirection:r>0?"reverse":"normal"}),n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":a}),e||(this.scrolled=!0),t;setTimeout(function(t,e,n,i,o,r,a){return function(){t.customStyle(e,n,i,o,r,a)}}(this,t,e,n,i,o,r),50)},i.prototype.vendors=["moz","webkit"],i.prototype.vendorSet=function(t,e){var n,i,o,r;for(n in i=[],e)o=e[n],t[""+n]=o,i.push(function(){for(var e=[],i=this.vendors,a=i.length,s=0;s<a;s++)r=i[s],e.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return e}.call(this));return i},i.prototype.vendorCSS=function(t,e){for(var i=n(t),o=i.getPropertyValue(e),r=this.vendors,a=r.length,s=0;s<a;s++){var l=r[s];o=o||i.getPropertyValue("-"+l+"-"+e)}return o},i.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name")}catch(i){e=n(t).getPropertyValue("animation-name")}if("none"===e)return"";if(null!=(i=t.classList))i.remove(e);else{var i,o=(i=t.className.split(" ")).indexOf(e);o>=0&&(i.splice(o,1),t.className=i.join(" "))}return e},i.prototype.cacheAnimationName=function(t){var e=this.animationName(t);return"none"!=e&&e.length>0&&(this.animationNameCache.set(t,e),!0)},i.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){if(this.scrolled){this.scrolled=!1;for(var t=[],e=this.boxes,n=e.length,i=this.manualBoxes,o=i.length,r=[],a=0;a<n;a++){var s=e[a];if(s){if(!this.ready&&(this.ready="0px"!==window.getComputedStyle(document.body).getPropertyValue("min-width"),!this.ready)){for(var l=s.element.offsetParent;l;){var u=l.classList;if(null!=u&&u.contains("btf"))break;if((" "+l.className+" ").indexOf(" btf ")>-1)break;l=l.offsetParent}if(l)continue}if(this.isVisible(s)&&-1==s.element.className.search("animated")&&(this.show(s),void 0===s.popup)){s.popup=null;for(l=s.element.parentNode;l!=document;){if(null!==(c=l.getAttribute("data-popup-type"))&&c.length>0){if(s.popup=l.getAttribute("id"),-1==r.indexOf(s.popup)){for(var h=0;h<o;h++){var d=i[h];!d||d.element!=l&&d.element.parentNode.parentNode!=l||(l=null)}null!==l&&r.push(s.popup)}break}l=l.parentNode}}t.push(s)}}if(this.boxes=t,!this.boxes.length&&!this.manualBoxes.length)return this.stop();plen=r.length;for(var p=0;p<plen;p++){var c=r[p];pop.addHook(c,null,function(t,i){return function(){for(a=0;a<n;a++){var o=e[a];o&&o.popup==i&&(o.element.className=o.element.className.replace("animated","").trim(),t.applyStyle(o,!0))}}}(this,c))}}},i.prototype.offsetTop=function(t){var e=t.getBoundingClientRect();if(!this.isFF){var n=parseFloat(window.getComputedStyle(document.body).getPropertyValue("zoom"));n||(n=1),e={left:e.left*n,right:e.right*n,top:e.top*n,bottom:e.bottom*n},this.isChrome||(e.top+=window.pageYOffset*(n-1),e.bottom+=window.pageYOffset*(n-1))}return e.top},i.prototype.isVisible=function(t){var e,i,o,r,a=t.element.parentNode,s=a.parentNode;if(-1!=a.className.indexOf("slick-slide")&&("1"===a.getAttribute("data-anim")||0==n(a).opacity)||null!=s&&-1!=s.className.indexOf("slick-slide")&&("1"===s.getAttribute("data-anim")||0==n(s).opacity))return"hidden"!=n(t.element).visibility&&(t.element.className=t.element.className.replace("animated","").trim(),this.applyStyle(t,!0)),!1;if("hidden"!=n(t.element).visibility)return!1;for(var l=a,u=this.manualBoxes,h=u.length;l!=document;){if("hidden"==n(l).visibility)return!1;for(var d=0;d<h;d++){var p=u[d];if(p&&p.element==l){for(a=l;a!=document;){var c=a.getAttribute("data-popup-type");if(null!==c&&c.length>0){if(parseInt(c)>0)return"reverse"!=this.vendorCSS(l,"animation-direction");break}a=a.parentNode}break}}l=l.parentNode}return i=t.offset||0,0,r=0+Math.min(this.element.clientHeight,this.util().innerHeight())-i,e=(o=this.offsetTop(t.element))+t.element.clientHeight,o<=r&&e>=0},i.prototype.util=function(){return null!=this._util?this._util:this._util=new t},i}()}).call(this);
