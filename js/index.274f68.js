(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};ldv=function(t){var e=document.querySelector(t),r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.play()};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.un3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-616-1.png':'images/red-308-1.png');
var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-112-1.png':'images/red-56-1.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-62-2.png':'images/facebook-2-31-2.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-62-2.png':'images/linkedin-31-2.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-62-2.png':'images/instagram-31-2.png');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.un3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-492.png':'images/red-246.png');
var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-90.png':'images/red-45.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-48.png':'images/facebook-2-24.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-48.png':'images/linkedin-24.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-48.png':'images/instagram-24.png');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.un3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-394.png':'images/red-197.png');
var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-72.png':'images/red-36.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-40.png':'images/facebook-2-20.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-40.png':'images/linkedin-20.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-40.png':'images/instagram-20.png');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.un3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-332.png':'images/red-166.png');
var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-140.png':'images/red-70.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-108.png':'images/facebook-2-54.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-108.png':'images/linkedin-54.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-108.png':'images/instagram-54.png');}else{var a='data-src';var e=document.querySelector('.un3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-222-1.png':'images/red-111-1.png');
var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-94-1.png':'images/red-47-1.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-72-1.png':'images/facebook-2-36-1.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-72-1.png':'images/linkedin-36-1.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-72-1.png':'images/instagram-36-1.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
$('.c3').Stickyfill();
$('.c25').Stickyfill();
wl=new woolite();
wl.init();
wl.addAnimation($('.un1'), "1.00s", "1.00s", 1, 11);
wl.addAnimation($('.un2'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un5'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un6'), "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.un7'), "1.00s", "1.00s", 1, 15);
wl.addAnimation($('.un11'), "1.00s", "1.50s", 1, 10);
wl.addAnimation($('.un12'), "1.00s", "0.00s", 1, 100);
wl.start();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un61 source');ldsrcset('.un62 source');ldsrcset('.un63 source');ldsrcset('.un64 source');ldsrcset('.un65 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}