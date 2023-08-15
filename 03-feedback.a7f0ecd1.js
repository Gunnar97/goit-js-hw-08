var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={save:(e,t)=>{try{let r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},o={},n="Expected a function",i=0/0,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return i;if(b(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=b(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=f.test(e);return o||l.test(e)?c(e.slice(2),o?2:8):u.test(e)?i:+e}o=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return b(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(n);function v(t){var r=o,n=i;return o=i=void 0,c=t,u=e.apply(n,r)}function S(e){var r=e-l,o=e-c;return void 0===l||r>=t||r<0||d&&o>=a}function j(){var e,r,o,n=y();if(S(n))return x(n);f=setTimeout(j,(e=n-l,r=n-c,o=t-e,d?g(o,a-r):o))}function x(e){return(f=void 0,m&&o)?v(e):(o=i=void 0,u)}function O(){var e,r=y(),n=S(r);if(o=arguments,i=this,l=r,n){if(void 0===f)return c=e=l,f=setTimeout(j,t),s?v(e):u;if(d)return f=setTimeout(j,t),v(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=h(t)||0,b(r)&&(s=!!r.leading,a=(d="maxWait"in r)?p(h(r.maxWait)||0,t):a,m="trailing"in r?!!r.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},O.flush=function(){return void 0===f?u:x(y())},O}(e,t,{leading:o,maxWait:t,trailing:i})};const S={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),submit:document.querySelector("button")};S.form.addEventListener("input",((e=o)&&e.__esModule?e.default:e)(function(e){let t=e.target.value,o=e.target.name;j[o]=t,r.save("feedback-form-state",j)},500));let j={};!function(){let e=r.load("feedback-form-state")||{};j=e,S.input.value=e?.email||"",S.textarea.value=e?.message||""}(),S.form.addEventListener("submit",function(e){e.preventDefault(),""===S.input.value||""===S.textarea.value?alert("Both fields must be filled"):(console.log(j),j={},e.target.reset(),r.remove("feedback-form-state"))});
//# sourceMappingURL=03-feedback.a7f0ecd1.js.map
