function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form");let s=0,u=0;const a=document.querySelector(".green-values"),d=document.querySelector(".red-values");function c(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}l.addEventListener("submit",(n=>{n.preventDefault();const t=parseInt(l.elements.delay.value),o=parseInt(l.elements.step.value),r=parseInt(l.elements.amount.value);for(let n=0;n<r;n+=1){c(n+1,t+n*o).then((({position:n,delay:t})=>{s+=1,a.textContent=`Zielony licznik wynosi: ${s}`,e(i).Notify.success(`\n          ✅\n          Fulfilled promise ${n} in ${t}ms\n        `)})).catch((({position:n,delay:t})=>{u+=1,d.textContent=`Czerwony licznik wynosi: ${u}`,e(i).Notify.failure(`\n          ❌\n          Rejected promise ${n} in ${t}ms\n        `)}))}}));
//# sourceMappingURL=03-promises.c6e3b993.js.map