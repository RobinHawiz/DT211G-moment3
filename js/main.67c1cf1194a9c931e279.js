!function(){var t={87:function(){function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){s=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw i}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var n=document.querySelector("html"),r=document.querySelector(".je-mappelle-hamburger"),o=document.querySelector("nav"),a=o.querySelector("ul"),i=document.querySelector(".logo");r.addEventListener("click",(function(){o.classList.contains("toggle")?(r.setAttribute("aria-label","Meny"),r.setAttribute("aria-expanded",!1)):(r.setAttribute("aria-label","Stäng meny"),r.setAttribute("aria-expanded",!0));var e,l=t(r.children);try{for(l.s();!(e=l.n()).done;){e.value.classList.toggle("toggle")}}catch(t){l.e(t)}finally{l.f()}o.classList.toggle("toggle"),i.classList.toggle("nav-opened"),n.classList.toggle("disable-nav-scrolling"),a.classList.contains("toggle")?setTimeout((function(){a.classList.toggle("toggle")}),"500"):a.classList.toggle("toggle")}))},337:function(){var t=document.querySelector(".logo a"),e=t.textContent.split(""),n=document.querySelectorAll(".je-mappelle-hamburger span");function r(n){t.innerHTML="";for(var r=0;r<=e.length-1;r++)t.innerHTML+='<span class="letter letter-'.concat(r,'">').concat(e[r],"</span>"),document.querySelector(".letter-".concat(r)).style.animation="0.5s ease ".concat(n+r/30,"s forwards logo-animation")}function o(t){n[0].style.animation="0.5s ease ".concat(t,"s forwards hamburger-span-1-animation"),n[1].style.animation="0.5s ease ".concat(t,"s forwards hamburger-span-2-animation")}"DT211G-moment3"===window.location.pathname.split("/").slice(-2)[0]?(r(2),o(2.5)):(r(0),o(.5))}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}!function(){"use strict";n(337),n(87)}()}();