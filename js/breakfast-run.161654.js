(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};ldv=function(t){var e=document.querySelector(t),r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.play()};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/42d81000-95dc-4b0f-8786-abf617a617c3-1736.jpg':'images/42d81000-95dc-4b0f-8786-abf617a617c3-868.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/040da0b6-022b-4678-bb7b-cc1af257bcc1-1736.jpg':'images/040da0b6-022b-4678-bb7b-cc1af257bcc1-868.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/c11f472e-0053-4dad-bd4f-c61a2f873a9e-958.jpg':'images/c11f472e-0053-4dad-bd4f-c61a2f873a9e-479.jpg');
var e=document.querySelector('.un7');e.setAttribute('src',(dpi>1)?'images/68d1e9c3-579c-46c4-acf9-aa9673e9c1b8-1732.jpg':'images/68d1e9c3-579c-46c4-acf9-aa9673e9c1b8-866.jpg');};
if(!window.HTMLPictureElement){r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));l||(l=1);var n=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];o=(n.getBoundingClientRect().top+pageYOffset)*l}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var r=pageYOffset,a=null;requestAnimationFrame(function e(t){a||(a=t);var l=t-a;scrollTo(0,r<o?(o-r)*l/400+r:r-(r-o)*l/400),l<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
$('.un11').mouseenter(function() { $.loadImages('images/42d81000-95dc-4b0f-8786-abf617a617c3-4272.jpg', function() { }) });
$('.un11').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade un11-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/42d81000-95dc-4b0f-8786-abf617a617c3-4272.jpg'; } } });
$('.un13').mouseenter(function() { $.loadImages('images/040da0b6-022b-4678-bb7b-cc1af257bcc1-4032.jpg', function() { }) });
$('.un13').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade un13-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/040da0b6-022b-4678-bb7b-cc1af257bcc1-4032.jpg'; } } });
$('.un15').mouseenter(function() { $.loadImages('images/c11f472e-0053-4dad-bd4f-c61a2f873a9e-2871.jpg', function() { }) });
$('.un15').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade un15-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/c11f472e-0053-4dad-bd4f-c61a2f873a9e-2871.jpg'; } } });
$('.un17').mouseenter(function() { $.loadImages('images/68d1e9c3-579c-46c4-acf9-aa9673e9c1b8-4272.jpg', function() { }) });
$('.un17').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade un17-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/68d1e9c3-579c-46c4-acf9-aa9673e9c1b8-4272.jpg'; } } });
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un12 source');ldsrcset('.un14 source');ldsrcset('.un16 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}