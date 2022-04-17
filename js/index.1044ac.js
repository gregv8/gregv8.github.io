(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};ldv=function(t){var e=document.querySelector(t),r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.play()};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-616-1.png':'images/red-308-1.png');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-112-1.png':'images/red-56-1.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-62-2.png':'images/facebook-2-31-2.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-62-2.png':'images/linkedin-31-2.png');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-62-2.png':'images/instagram-31-2.png');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/img_6527-1200.jpeg':'images/img_6527-600.jpeg');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-492.png':'images/red-246.png');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-90.png':'images/red-45.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-48.png':'images/facebook-2-24.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-48.png':'images/linkedin-24.png');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-48.png':'images/instagram-24.png');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/img_6527-960.jpeg':'images/img_6527-480-1.jpeg');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-394.png':'images/red-197.png');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-72.png':'images/red-36.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-40.png':'images/facebook-2-20.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-40.png':'images/linkedin-20.png');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-40.png':'images/instagram-20.png');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/img_6527-768.jpeg':'images/img_6527-384.jpeg');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-332.png':'images/red-166.png');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-140.png':'images/red-70.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-108.png':'images/facebook-2-54.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-108.png':'images/linkedin-54.png');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-108.png':'images/instagram-54.png');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/img_6527-480.jpeg':'images/img_6527-240.jpeg');}else{var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-222-1.png':'images/red-111-1.png');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/red-94-1.png':'images/red-47-1.png');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook-2-72-1.png':'images/facebook-2-36-1.png');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/linkedin-72-1.png':'images/linkedin-36-1.png');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram-72-1.png':'images/instagram-36-1.png');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/img_6527-320.jpeg':'images/img_6527-160.jpeg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));l||(l=1);var n=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];o=(n.getBoundingClientRect().top+pageYOffset)*l}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var r=pageYOffset,a=null;requestAnimationFrame(function e(t){a||(a=t);var l=t-a;scrollTo(0,r<o?(o-r)*l/400+r:r-(r-o)*l/400),l<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
$('.c3').Stickyfill();
$('.c25').Stickyfill();
$('.un71').mouseenter(function() { $.loadImages('images/img_6527-4032.jpeg', function() { }) });
$('.un71').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade un71-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/img_6527-4032.jpeg'; } } });
wl=new woolite();
wl.init();
wl.addAnimation($('.un1'), "1.00s", "1.00s", 1, 11);
wl.addAnimation($('.un2'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un6'), "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.un7'), "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.un8'), "1.00s", "1.00s", 1, 15);
wl.addAnimation($('.un12'), "1.00s", "1.50s", 1, 10);
wl.addAnimation($('.un13'), "1.00s", "0.00s", 1, 100);
wl.start();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un66 source');ldsrcset('.un67 source');ldsrcset('.un68 source');ldsrcset('.un69 source');ldsrcset('.un70 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}