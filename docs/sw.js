!function(e){var t={}; function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="sw-helper-",c=1,o="store",a="url",u="timestamp",s={};t.default={getDb:function(e){return e in s||(s[e]=function(e){return new Promise(function(t,n){var s=indexedDB.open(r+e,c);s.onupgradeneeded=function(){s.result.createObjectStore(o,{keyPath:a}).createIndex(u,u,{unique:!1})},s.onsuccess=function(){t(s.result)},s.onerror=function(){n(s.error)}})}(e)),s[e]},setTimestampForUrl:function(e,t){return new Promise(function(n,r){var c=e.transaction(o,"readwrite");c.objectStore(o).put(t),c.oncomplete=function(){n(e)},c.onabort=function(){r(c.error)}})},expireEntries:function(e){return function(e){return new Promise(function(t,n){var r=[],c=e.transaction(o,"readwrite"),s=c.objectStore(o),i=s.index(u);let l=Date.now();i.openCursor().onsuccess=function(e){let t=e.target.result;if(t&&l>t.value[u]){let e=t.value[a];r.push(e),s.delete(e),t.continue()}},c.oncomplete=function(){t(r)},c.onabort=n})}(e).then(function(e){return e})},getTimestampForUrl:function(e,t){return new Promise(function(n,r){var c=e.transaction(o,"readonly").objectStore(o).get(t);c.onsuccess=function(){n(c.result)},c.onerror=function(){r(c.result)}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6),c=n(5),o=n(4);var a={prefetchFiles:[],cacheFiles:[],cacheName:"SW-V1",strategy:"CacheFirst",getKey:e=>e};t.default=(e=>{var{cacheFiles:t=a.cacheFiles,cacheName:n=a.cacheName,strategy:u=a.strategy,prefetchFiles:s=a.prefetchFiles,getKey:i=a.getKey}=e;r.default({prefetchFiles:s,cacheName:n}),c.default({cacheName:n}),o.default({cacheName:n,strategy:u,cacheFiles:t,prefetchFiles:s,getKey:i})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);var c=function(e){var t=e.request.clone();return fetch(t).then(function(t){if(!t||t.status>=400)console.log("[SW] Invalid response from fetch ");else{var n=t.clone();caches.open(e.cacheName).then(function(t){t.put(e.getKey(e.request),n),console.log("[SW] New Data Cached",e.request.url),void 0!==e.config.maxAgeSeconds&&r.default.getDb(e.cacheName).then(t=>r.default.setTimestampForUrl(t,{url:JSON.stringify(e.getKey(e.request)),timestamp:Date.now()+1e3*e.config.maxAgeSeconds})).then(e=>{r.default.expireEntries(e).then(e=>{var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){console.log("Done with cache cleanup.")})})})})}return t}).catch(function(e){console.log("[SW] Error Fetching & Caching New Data",e)})};t.default=((e,t,n,o,a)=>{e.respondWith(caches.match(o(e.request)).then(function(n){return n?(console.log("[SW] Found in Cache",e.request.url,n),a.maxAgeSeconds?r.default.getDb(t).then(u=>r.default.getTimestampForUrl(u,JSON.stringify(o(e.request))).then(r=>r&&r.timestamp>Date.now()?(setTimeout(()=>c({request:e.request,cacheName:t,getKey:o,config:a}),0),n):(console.log("[SW] Cache expired for ",e.request.url),c({request:e.request,cacheName:t,getKey:o,config:a})))):(setTimeout(()=>c({request:e.request,cacheName:t,getKey:o,config:a}),0),n)):c({request:e.request,cacheName:t,getKey:o,config:a})}))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);var c=function(e){var t=e.request.clone();return fetch(t).then(function(t){if(!t||t.status>=400)console.log("[SW] Invalid response from fetch ");else{var n=t.clone();caches.open(e.cacheName).then(function(t){t.put(e.getKey(e.request),n),console.log("[SW] New Data Cached",e.request.url),void 0!==e.config.maxAgeSeconds&&r.default.getDb(e.cacheName).then(t=>r.default.setTimestampForUrl(t,{url:JSON.stringify(e.getKey(e.request)),timestamp:Date.now()+1e3*e.config.maxAgeSeconds})).then(e=>{r.default.expireEntries(e).then(e=>{var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){console.log("Done with cache cleanup.")})})})})}return t}).catch(function(e){console.log("[SW] Error Fetching & Caching New Data",e)})};t.default=((e,t,n,o,a)=>{e.respondWith(caches.match(o(e.request)).then(function(n){return n?(console.log("[SW] Found in Cache",e.request.url,n),a.maxAgeSeconds?r.default.getDb(t).then(u=>r.default.getTimestampForUrl(u,JSON.stringify(o(e.request))).then(r=>r&&r.timestamp>Date.now()?n:(console.log("[SW] Cache expired for ",e.request.url),c({request:e.request,cacheName:t,getKey:o,config:a})))):n):c({request:e.request,cacheName:t,getKey:o,config:a})}))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3),c=n(2);t.default=(({strategy:e,cacheName:t,cacheFiles:n,prefetchFiles:o,getKey:a})=>{self.addEventListener("fetch",function(u){console.log("[SW] Fetch",u.request.url);const s=(({mode:e,url:t},n)=>{var r=new URL(t).pathname;return n.find(t=>"index.html"===t.url&&"navigate"===e||(t.url instanceof RegExp?t.url.test(r):r.indexOf(t.url)>-1))})(u.request,n);if(s){const i=Array.prototype.concat(n,o);switch(s.strategy||e){case"cacheFirst":r.default(u,t,i,a,s);break;case"cacheFirstUpdate":c.default(u,t,i,a,s);break;default:r.default(u,t,i,a,s)}}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(({cacheName:e})=>{self.addEventListener("activate",function(t){console.log("[SW] Activated"),self.clients.claim(),t.waitUntil(caches.keys().then(function(t){return Promise.all(t.map(function(t){return t!==e&&(console.log("[SW] Removing Cached Files from Cache - ",t),caches.delete(t))}))}))})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(({cacheName:e,prefetchFiles:t})=>{self.addEventListener("install",function(n){console.log("[SW] Installed"),n.waitUntil(caches.open(e).then(function(e){return console.log("[SW] Caching cacheFiles"),e.addAll(t)}).then(function(){return self.skipWaiting()}))})})},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=[{url:"index.html",maxAgeSeconds:604800,strategy:"cacheFirstUpdate"},{url:new RegExp("((?!/sw\\.js).)*((\\.)(js)){1}.*$")},{url:new RegExp(".*\\.(css|jpg|png|svg)")}];c()({cacheName:"v1",cacheFiles:o,strategy:"cacheFirst"})}]);