(()=>{"use strict";var e={9825:(e,t,r)=>{function n(e){let t={};if(Object.prototype.hasOwnProperty.call(e,"__VUE_DEVTOOLS_GLOBAL_HOOK__"))return;const n={Vue:null,_buffer:[],store:null,initialState:null,storeModules:null,flushStoreModules:null,apps:[],_replayBuffer(e){const t=this._buffer;this._buffer=[];for(let r=0,n=t.length;r<n;r++){const n=t[r];n[0]===e?this.emit.apply(this,n):this._buffer.push(n)}},on(e,r){const n="$"+e;t[n]?t[n].push(r):(t[n]=[r],this._replayBuffer(e))},once(e,t){const r=(...n)=>{this.off(e,r),t.apply(this,n)};this.on(e,r)},off(e,r){if(e="$"+e,arguments.length){const n=t[e];if(n)if(r)for(let e=0,t=n.length;e<t;e++){const t=n[e];if(t===r||t.fn===r){n.splice(e,1);break}}else t[e]=null}else t={}},emit(e,...r){const n="$"+e;let o=t[n];if(o){o=o.slice();for(let e=0,t=o.length;e<t;e++)o[e].apply(this,r)}else this._buffer.push([e,...r])}};n.once("init",(t=>{n.Vue=t,t&&(t.prototype.$inspect=function(){const t=e.__VUE_DEVTOOLS_INSPECT__;t&&t(this)})})),n.on("app:init",((e,t,r)=>{const o={app:e,version:t,types:r};n.apps.push(o),n.emit("app:add",o)})),n.once("vuex:init",(e=>{n.store=e,n.initialState=M(e.state);const t=e.replaceState.bind(e);let r,o;e.replaceState=e=>{n.initialState=M(e),t(e)},e.registerModule&&(n.storeModules=[],r=e.registerModule.bind(e),e.registerModule=(e,t,o)=>{"string"===typeof e&&(e=[e]),n.storeModules.push({path:e,module:t,options:o}),r(e,t,o)},o=e.unregisterModule.bind(e),e.unregisterModule=e=>{"string"===typeof e&&(e=[e]);const t=e.join("/"),r=n.storeModules.findIndex((e=>e.path.join("/")===t));-1!==r&&n.storeModules.splice(r,1),o(e)}),n.flushStoreModules=()=>(e.replaceState=t,e.registerModule&&(e.registerModule=r,e.unregisterModule=o),n.storeModules||[])})),Object.defineProperty(e,"__VUE_DEVTOOLS_GLOBAL_HOOK__",{get(){return n}});const{toString:o}=Function.prototype,{create:i,defineProperty:s,getOwnPropertyDescriptor:f,getOwnPropertyNames:l,getOwnPropertySymbols:a,getPrototypeOf:u}=Object,{hasOwnProperty:c,propertyIsEnumerable:d}=Object.prototype,p={SYMBOL_PROPERTIES:"function"===typeof a,WEAKSET:"function"===typeof WeakSet},h=()=>{if(p.WEAKSET)return new WeakSet;const e=i({add:t=>e._values.push(t),has:t=>!!~e._values.indexOf(t)});return e._values=[],e},g=(e,t)=>{if(!e.constructor)return i(null);const r=e.__proto__||u(e);if(e.constructor===t.Object)return r===t.Object.prototype?{}:i(r);if(~o.call(e.constructor).indexOf("[native code]"))try{return new e.constructor}catch(n){}return i(r)},y=(e,t,r,n)=>{const o=g(e,t);for(const i in e)c.call(e,i)&&(o[i]=r(e[i],n));if(p.SYMBOL_PROPERTIES){const t=a(e);if(t.length)for(let i,s=0;s<t.length;s++)i=t[s],d.call(e,i)&&(o[i]=r(e[i],n))}return o},w=(e,t,r,n)=>{const o=g(e,t),i=p.SYMBOL_PROPERTIES?[].concat(l(e),a(e)):l(e);if(i.length)for(let l,a,u=0;u<i.length;u++)l=i[u],"callee"!==l&&"caller"!==l&&(a=f(e,l),a.value=r(e[l],n),s(o,l,a));return o},O=e=>{let t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},{isArray:m}=Array,_=(()=>"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:void(console&&console.error&&console.error('Unable to locate global object, returning "this".')))();function M(e,t=null){const r=!(!t||!t.isStrict),n=t&&t.realm||_,o=r?w:y,i=(e,t)=>{if(!e||"object"!==typeof e||t.has(e))return e;if(e instanceof HTMLElement)return e.cloneNode(!1);const s=e.constructor;if(s===n.Object)return t.add(e),o(e,n,i,t);let f;if(m(e)){if(t.add(e),r)return w(e,n,i,t);f=new s;for(let r=0;r<e.length;r++)f[r]=i(e[r],t);return f}if(e instanceof n.Date)return new s(e.getTime());if(e instanceof n.RegExp)return f=new s(e.source,e.flags||O(e)),f.lastIndex=e.lastIndex,f;if(n.Map&&e instanceof n.Map)return t.add(e),f=new s,e.forEach(((e,r)=>{f.set(r,i(e,t))})),f;if(n.Set&&e instanceof n.Set)return t.add(e),f=new s,e.forEach((e=>{f.add(i(e,t))})),f;if(n.Buffer&&n.Buffer.isBuffer(e))return f=n.Buffer.allocUnsafe?n.Buffer.allocUnsafe(e.length):new s(e.length),e.copy(f),f;if(n.ArrayBuffer){if(n.ArrayBuffer.isView(e))return new s(e.buffer.slice(0));if(e instanceof n.ArrayBuffer)return e.slice(0)}return c.call(e,"then")&&"function"===typeof e.then||e instanceof Error||n.WeakMap&&e instanceof n.WeakMap||n.WeakSet&&e instanceof n.WeakSet?e:(t.add(e),o(e,n,i,t))};return i(e,h())}}t.U=void 0,t.U=n},8585:(e,t,r)=>{function n(e){e.prototype.hasOwnProperty("$isChrome")||(Object.defineProperties(e.prototype,{$isChrome:{get:()=>t.isChrome},$isFirefox:{get:()=>t.isFirefox},$isWindows:{get:()=>t.isWindows},$isMac:{get:()=>t.isMac},$isLinux:{get:()=>t.isLinux},$keys:{get:()=>t.keys}}),t.isWindows&&document.body.classList.add("platform-windows"),t.isMac&&document.body.classList.add("platform-mac"),t.isLinux&&document.body.classList.add("platform-linux"))}t.keys=t.isLinux=t.isMac=t.isWindows=t.isFirefox=t.isChrome=t.target=t.isBrowser=void 0,t.isBrowser="undefined"!==typeof navigator,t.target=t.isBrowser?window:"undefined"!==typeof r.g?r.g:{},t.isChrome="undefined"!==typeof t.target.chrome&&!!t.target.chrome.devtools,t.isFirefox=t.isBrowser&&navigator.userAgent.indexOf("Firefox")>-1,t.isWindows=t.isBrowser&&0===navigator.platform.indexOf("Win"),t.isMac=t.isBrowser&&"MacIntel"===navigator.platform,t.isLinux=t.isBrowser&&0===navigator.platform.indexOf("Linux"),t.keys={ctrl:t.isMac?"&#8984;":"Ctrl",shift:"Shift",alt:t.isMac?"&#8997;":"Alt",del:"Del",enter:"Enter",esc:"Esc"}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})();(()=>{var e=r(9825),t=r(8585);if(document instanceof HTMLDocument){var n=";("+e.U.toString()+")(window)";if(t.isFirefox)window.eval(n);else{var o=document.createElement("script");o.textContent=n,document.documentElement.appendChild(o),o.parentNode.removeChild(o)}}})()})();