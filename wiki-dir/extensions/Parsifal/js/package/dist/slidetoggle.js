!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.slidetoggle=o():t.slidetoggle=o()}(this,(function(){return(()=>{"use strict";var t,o,e,n={d:(t,o)=>{for(var e in o)n.o(o,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};n.r(r),n.d(r,{hide:()=>u,show:()=>p,toggle:()=>f}),function(t){t.parseOrElse=function(t,o){return void 0===o&&(o="0"),t?parseInt(t):o&&"string"==typeof o?parseInt(o):0}}(t||(t={})),function(o){var e=function(t){return t instanceof HTMLElement};o.setStyles=function(t,o){Object.keys(o).map((function(e){t.style[e]=o[e]}))},o.getBoxStyles=function(o){var e=window.getComputedStyle(o);return{height:t.parseOrElse(e.height),padding:{top:t.parseOrElse(e.paddingTop),bottom:t.parseOrElse(e.paddingBottom)},border:{top:t.parseOrElse(e.borderTopWidth),bottom:t.parseOrElse(e.borderBottomWidth)}}},o.getElement=function(t){if(e(t))return t;var o=document.querySelector(t);if(e(o))return o;throw new Error("Your element does not exist in the DOM.")},o.setAttribute=function(t,o,e){t.setAttribute(o,e)},o.getAttribute=function(t,o){return t.getAttribute(o)}}(o||(o={})),function(t){t.on=function(t,o,e){return t.addEventListener(o,e),{destroy:function(){return t&&t.removeEventListener(o,e)}}}}(e||(e={}));var i,d,l=function(t,o){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(e[n[r]]=t[n[r]])}return e};!function(t){var n="data-slide-toggle",r=function(t){requestAnimationFrame(t)},i=function(t){var o=t.miliseconds,e=void 0===o?200:o,n=t.transitionFunction;return"all "+e+"ms "+(void 0===n?"linear":n)+" 0s"};t.shouldCollapse=function(t){if(!o.getAttribute(t,n)){var e=o.getBoxStyles(t).height;return e&&e>0}return"true"===o.getAttribute(t,n)},t.hide=function(t,d){var a;if(!function(t){return"false"===o.getAttribute(t,n)}(t)){null===(a=d.onAnimationStart)||void 0===a||a.call(d);var u=o.getBoxStyles(t),s=u.height,p=l(u,["height"]);o.setStyles(t,{transition:""}),r((function(){o.setStyles(t,{overflow:"hidden",height:s+"px",paddingTop:p.padding.top+"px",paddingBottom:p.padding.bottom+"px",borderTopWidth:p.border.top+"px",borderBottomWidth:p.border.bottom+"px",transition:i(d)}),r((function(){o.setStyles(t,{height:"0",paddingTop:"0",paddingBottom:"0",borderTopWidth:"0",borderBottomWidth:"0"});var n=e.on(t,"transitionend",(function(){var t;n.destroy(),null===(t=d.onAnimationEnd)||void 0===t||t.call(d)}))}))})),o.setAttribute(t,n,"false")}},t.show=function(t,d){var a;if(!function(t){return"true"===o.getAttribute(t,n)}(t)){var u=d.elementDisplayStyle,s=void 0===u?"block":u;null===(a=d.onAnimationStart)||void 0===a||a.call(d),o.setStyles(t,{transition:"",display:s,height:"auto",paddingTop:"",paddingBottom:"",borderTopWidth:"",borderBottomWidth:""});var p=o.getBoxStyles(t),c=p.height,f=l(p,["height"]);o.setStyles(t,{display:"none"}),r((function(){o.setStyles(t,{display:s,overflow:"hidden",height:"0",paddingTop:"0",paddingBottom:"0",borderTopWidth:"0",borderBottomWidth:"0",transition:i(d)}),r((function(){o.setStyles(t,{height:c+"px",paddingTop:f.padding.top+"px",paddingBottom:f.padding.bottom+"px",borderTopWidth:f.border.top+"px",borderBottomWidth:f.border.bottom+"px"});var n=e.on(t,"transitionend",(function(){var e;o.setStyles(t,{height:"",overflow:"",paddingTop:"",paddingBottom:"",borderTopWidth:"",borderBottomWidth:""}),n.destroy(),null===(e=d.onAnimationEnd)||void 0===e||e.call(d)}))}))})),o.setAttribute(t,n,"true")}}}(i||(i={})),function(t){t.on=function(t,o){i.hide(t,o)}}(d||(d={}));var a,u=function(t,e){d.on(o.getElement(t),e)};!function(t){t.on=function(t,o){i.show(t,o)}}(a||(a={}));var s,p=function(t,e){a.on(o.getElement(t),e)},c=function(){return(c=Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++)for(var r in o=arguments[e])Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t}).apply(this,arguments)};!function(t){var o=function(t){return function(){var o,e;null===(o=t.onClose)||void 0===o||o.call(t),null===(e=t.onAnimationEnd)||void 0===e||e.call(t)}},e=function(t){return function(){var o,e;null===(o=t.onOpen)||void 0===o||o.call(t),null===(e=t.onAnimationEnd)||void 0===e||e.call(t)}};t.on=function(t,n){i.shouldCollapse(t)?i.hide(t,c(c({},n),{onAnimationEnd:o(n)})):i.show(t,c(c({},n),{onAnimationEnd:e(n)}))}}(s||(s={}));var f=function(t,e){s.on(o.getElement(t),e)};return r})()}));
//# sourceMappingURL=slidetoggle.js.map