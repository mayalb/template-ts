(()=>{"use strict";var t={424:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(15),o=n.n(r),i=n(645),u=n.n(i)()(o());u.push([t.id,"h1 {\r\n    color: red;\r\n}\r\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;IACI,UAAU;AACd",sourcesContent:["h1 {\r\n    color: red;\r\n}\r\n"],sourceRoot:""}]);const a=u},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},15:t=>{function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n,r,o=(r=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(n,r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],u=o[3];if(!u)return i;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),s="/*# ".concat(c," */"),l=u.sources.map((function(t){return"/*# sourceURL=".concat(u.sourceRoot||"").concat(t," */")}));return[i].concat(l).concat([s]).join("\n")}return[i].join("\n")}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},u=[],a=0;a<t.length;a++){var c=t[a],s=r.base?c[0]+r.base:c[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(e[f].references++,e[f].updater(p)):e.push({identifier:d,updater:o(p,r),references:1}),u.push(d)}return u}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var u=0;u<i.length;u++){var a=n(i[u]);e[a].references--}for(var c=r(t,o),s=0;s<i.length;s++){var l=n(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),u=n.n(i),a=n(565),c=n.n(a),s=n(216),l=n.n(s),d=n(589),f=n.n(d),p=n(424),m={};function h(t){document.getElementById("hour").innerText=t.actualHour.toString()}m.styleTagTransform=f(),m.setAttributes=c(),m.insert=u().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var v=new(function(){function t(){var t=new Date;this.actualHour=t.getHours(),this.actualMinute=t.getMinutes(),this.mode=0,this.increase=0,this.light=!0}return t.prototype.getActualHour=function(){return this.actualHour},t.prototype.getActualMinute=function(){return this.actualMinute},t.prototype.getMode=function(){return this.mode},t.prototype.getIncrease=function(){return this.increase},t.prototype.incrementHour=function(){this.actualHour++},t.prototype.incrementMinute=function(){this.actualMinute++},t.prototype.setHouTtoZero=function(){this.actualHour=0},t.prototype.setMinuteToZero=function(){this.actualMinute=0,this.actualHour<23?this.incrementHour():this.setHouTtoZero()},t.prototype.resetMode=function(){this.mode=0},t.prototype.switchMode=function(){this.mode++},t.prototype.setHour=function(t){this.actualHour=t},t.prototype.setMinute=function(t){this.actualMinute=t},t}());new Date,function t(){var e=new Date;console.log("means mode is 0",v.mode);var n=e.getHours(),r=e.getMinutes();document.getElementById("hour").innerText=n.toString(),document.getElementById("minute").innerText=r.toString(),setTimeout(t,500)}(),document.getElementById("modeBtn").addEventListener("click",(function(t){return function(t){console.log("Nous avons cliqué mode"),t.mode>=2?(t.resetMode(),alert("Vous avez désactiver les modifications")):t.switchMode()}(v)})),document.getElementById("increaseBtn").addEventListener("click",(function(t){return function(t){var e=t.getMode();console.log("Nous avons cliqué increase",e),1==e?(t.getActualHour()<23?t.incrementHour():t.setHouTtoZero(),h(t)):2==e?(t.getActualMinute()<59?t.incrementMinute():t.setMinuteToZero(),function(t){document.getElementById("minute").innerText=t.actualMinute.toString()}(t),h(t)):alert("Veuillez changer le mode")}(v)})),document.getElementById("lightBtn").addEventListener("click",(function(t){console.log("Nous avons cliqué mode")}))})()})();
//# sourceMappingURL=bundle.js.map