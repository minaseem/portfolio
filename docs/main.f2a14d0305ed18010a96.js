!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={},o=[],a=[];function i(e,t){var n,i,s,l,c=a;for(l=arguments.length;l-- >2;)o.push(arguments[l]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((i=o.pop())&&void 0!==i.pop)for(l=i.length;l--;)o.push(i[l]);else"boolean"==typeof i&&(i=null),(s="function"!=typeof e)&&(null==i?i="":"number"==typeof i?i=String(i):"string"!=typeof i&&(s=!1)),s&&n?c[c.length-1]+=i:c===a?c=[i]:c.push(i),n=s;var u=new function(){};return u.nodeName=e,u.children=c,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(u),u}function s(e,t){for(var n in t)e[n]=t[n];return e}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var c=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,u=[];function p(e){!e._dirty&&(e._dirty=!0)&&1==u.push(e)&&(r.debounceRendering||l)(f)}function f(){var e,t=u;for(u=[];e=t.pop();)e._dirty&&E(e)}function d(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function m(e){var t=s({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===c.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,y,i):e.removeEventListener(t,y,i),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function y(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var g=[],b=0,_=!1,x=!1;function w(){for(var e;e=g.pop();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function N(e,t,n,r,o,a){b++||(_=null!=o&&void 0!==o.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var i=k(e,t,n,r,a);return o&&i.parentNode!==o&&o.appendChild(i),--b||(x=!1,a||w()),i}function k(e,t,n,r,o){var a=e,i=_;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),C(e,!0))),a.__preactattr_=!0,a;var s,l,c=t.nodeName;if("function"==typeof c)return function(e,t,n,r){var o=e&&e._component,a=o,i=e,s=o&&e._componentConstructor===t.nodeName,l=s,c=m(t);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;o&&l&&(!r||o._component)?(P(o,c,3,n,r),e=o.base):(a&&!s&&(T(a),e=i=null),o=O(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,i=null),P(o,c,1,n,r),e=o.base,i&&e!==i&&(i._component=null,C(i,!1)));return e}(e,t,n,r);if(_="svg"===c||"foreignObject"!==c&&_,c=String(c),(!e||!d(e,c))&&(s=c,(l=_?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,a=l,e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),C(e,!0)}var u=a.firstChild,p=a.__preactattr_,f=t.children;if(null==p){p=a.__preactattr_={};for(var y=a.attributes,g=y.length;g--;)p[y[g].name]=y[g].value}return!x&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&function(e,t,n,r,o){var a,i,s,l,c,u=e.childNodes,p=[],f={},m=0,v=0,y=u.length,g=0,b=t?t.length:0;if(0!==y)for(var _=0;_<y;_++){var x=u[_],w=x.__preactattr_,N=b&&w?x._component?x._component.__key:w.key:null;null!=N?(m++,f[N]=x):(w||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(p[g++]=x)}if(0!==b)for(var _=0;_<b;_++){l=t[_],c=null;var N=l.key;if(null!=N)m&&void 0!==f[N]&&(c=f[N],f[N]=void 0,m--);else if(!c&&v<g)for(a=v;a<g;a++)if(void 0!==p[a]&&(S=i=p[a],O=o,"string"==typeof(j=l)||"number"==typeof j?void 0!==S.splitText:"string"==typeof j.nodeName?!S._componentConstructor&&d(S,j.nodeName):O||S._componentConstructor===j.nodeName)){c=i,p[a]=void 0,a===g-1&&g--,a===v&&v++;break}c=k(c,l,n,r),s=u[_],c&&c!==e&&c!==s&&(null==s?e.appendChild(c):c===s.nextSibling?h(s):e.insertBefore(c,s))}var S,j,O;if(m)for(var _ in f)void 0!==f[_]&&C(f[_],!1);for(;v<=g;)void 0!==(c=p[g--])&&C(c,!1)}(a,f,n,r,x||null!=p.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=void 0,_);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],_)}(a,t.attributes,p),_=i,a}function C(e,t){var n=e._component;n?T(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||h(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}var j={};function O(e,t,n){var r,o=j[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),L.call(r,t,n)):((r=new L(t,n)).constructor=e,r.render=I),o)for(var a=o.length;a--;)if(o[a].constructor===e){r.nextBase=o[a].nextBase,o.splice(a,1);break}return r}function I(e,t,n){return this.constructor(e,n)}function P(e,t,n,o,a){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?p(e):E(e,1,a)),e.__ref&&e.__ref(e))}function E(e,t,n,o){if(!e._disable){var a,i,l,c=e.props,u=e.state,p=e.context,f=e.prevProps||c,d=e.prevState||u,h=e.prevContext||p,v=e.base,y=e.nextBase,_=v||y,x=e._component,k=!1;if(v&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,u,p)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(c,u,p),e.props=c,e.state=u,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!k){a=e.render(c,u,p),e.getChildContext&&(p=s(s({},p),e.getChildContext()));var S,j,I=a&&a.nodeName;if("function"==typeof I){var L=m(a);(i=x)&&i.constructor===I&&L.key==i.__key?P(i,L,1,p,!1):(S=i,e._component=i=O(I,L,p),i.nextBase=i.nextBase||y,i._parentComponent=e,P(i,L,0,p,!1),E(i,1,n,!0)),j=i.base}else l=_,(S=x)&&(l=e._component=null),(_||1===t)&&(l&&(l._component=null),j=N(l,a,p,n||!v,_&&_.parentNode,!0));if(_&&j!==_&&i!==x){var M=_.parentNode;M&&j!==M&&(M.replaceChild(j,_),S||(_._component=null,C(_,!1)))}if(S&&T(S),e.base=j,j&&!o){for(var A=e,U=e;U=U._parentComponent;)(A=U).base=j;j._component=A,j._componentConstructor=A.constructor}}if(!v||n?g.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(f,d,h),r.afterUpdate&&r.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);b||o||w()}}function T(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?T(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,h(t),function(e){var t=e.constructor.name;(j[t]||(j[t]=[])).push(e)}(e),S(t)),e.__ref&&e.__ref(null)}function L(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function M(e,t,n){return N(n,e,{},!1,t,!1)}s(L.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=s({},n)),s(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),p(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),E(this,2)},render:function(){}});n(12),n(10);const A={html:{name:"HTML",items:[{name:"HTML5",icon:"html5"},{name:"JSX",icon:"react"},{name:"Pug",icon:"pug"}]},css:{name:"CSS",items:[{name:"CSS3",icon:"css3"},{name:"Bootstrap",icon:"bootstrap"},{name:"Materialize",icon:"materialize"}]},javascript:{name:"Javascript",items:[{name:"Javascript",icon:"javascript"},{name:"Typescript",icon:"typescript"},{name:"Node",icon:"node"},{name:"React",icon:"react"},{name:"Preact",icon:"preact"},{name:"Vue",icon:"vue"}]},backend:{name:"Back-End",items:[{name:"Java",icon:"java"},{name:"Hibernate",icon:"hibernate"},{name:"MySQL",icon:"mysql"}]}},U=[{name:"twitter",icon:"twitter",link:"https://twitter.com/imamudinnaseem",text:"https://twitter.com/imamudinnaseem"},{name:"linkedin",icon:"linkedin",link:"https://www.linkedin.com/in/imamudin-naseem",text:"https://www.linkedin.com/in/imamudin-naseem"},{name:"github",icon:"github",link:"https://github.com/minaseem",text:"https://github.com/minaseem"},{name:"mail",icon:"gmail",link:"mailto:naseem1992@gmail.com",text:"naseem1992@gmail.com"}],B=[{company:"Paytm",designation:"Frontend Engineer",icon:"paytm",link:"https://paytm.com/",duration:"Sep '18 - Present"},{company:"Flock",designation:"Full-Stack Web Developer",icon:"directi",link:"https://www.directi.com",duration:"Dec '16 - Sep '18"},{company:"Ola",designation:"Front-end Engineer",icon:"ola",duration:"Jan '16 - Dec '16",link:"https://www.olacabs.com/"},{company:"Metricstream",designation:"Front-end Engineer",icon:"metricstream",duration:"Aug '14 - Jan '16",link:"https://www.metricstream.com/"}],W=[{index:0,name:"About",icon:"fas fa-user-alt",href:"#about"},{index:1,name:"Experience",icon:"fas fa-chart-line",href:"#experience"},{index:3,name:"Skills",icon:"fas fa-signal",href:"#skills"},{index:4,name:"Education",icon:"fas fa-graduation-cap",href:"#education"},{index:5,name:"Contact",icon:"fas fa-envelope",href:"#contact"},{index:6,name:"Resume",icon:"fas fa-file",href:"https://drive.google.com/file/d/1iqs9-0oCogjaCdMSjecX_XuYXfv9dK33/view",target:"_blank"}];class D extends L{render(){return i("ul",{class:"navbar"},W.map(e=>i(V,{data:e})))}}class V extends L{render(e){let t=e.data;return i("li",{class:"item"},i("a",{href:e.data.href,target:t.target||"_self",onClick:n=>{t.target&&"_self"!==t.target||(n.preventDefault(),document.querySelector(e.data.href.toLowerCase()).scrollIntoView({behavior:"smooth",block:"start"}))}},i("i",{className:t.icon+" nav-icon"}),i("div",{className:"peg"}),i("span",{className:"nav-title"},t.name)))}}class F extends L{render(){return i("div",{className:"sidebar"},i(q,null),i(D,null))}}class q extends L{render(){return i("a",{className:"intro",href:"#home"},i("div",{className:"name"},"Imamudin Naseem"),i("div",{className:"title"},"Full Stack Web Developer"))}}n(8),n(6);class H extends L{render(){return i("div",{class:"banner content-item",id:"home"},i("a",{className:"intro",href:"#home"},i("div",{className:"name"},"Imamudin Naseem"),i("div",{className:"title"},"Full Stack Web Developer")),i("div",{className:"banner-text"},"Let's build Web!"))}}class J extends L{render(){return i("section",{id:"about",class:"content-item"},i("header",null,"About"),i("div",{className:"about-me"},"I am a Software Engineer, working on web to make it a better place"))}}n(4);class R extends L{render(){return i("div",{className:"card"},this.props.children)}}class z extends L{render(){return i("section",{id:"experience",className:"experience content-item"},i("header",null,"Experience"),B.map(e=>i(X,{data:e})))}}class X extends L{render(e){const t=e.data;return i(R,null,i("div",{class:"exp-wrapper"},i("div",{class:"exp-header"},i("a",{href:t.link,target:"_blank",className:"company-icon "+t.icon}),i("div",{className:"duration"},t.duration)),i("div",{className:"designation"},t.designation)))}}class $ extends L{render(){return i("section",{id:"skills",class:"content-item"},i("header",null,"Skills"),i(G,{skill:A.html}),i(G,{skill:A.css}),i(G,{skill:A.javascript}),i(G,{skill:A.backend}))}}class G extends L{render(e){const t=e.skill;return i(R,null,i("div",{className:"skill-header"},t.name),i("div",{className:"skill-content"},t.items.map(e=>i(K,{skill:e}))))}}class K extends L{render(e){return i("div",{class:"skill-item"},i("div",{class:e.skill.icon+" skill-icon"}),i("div",{class:"skill-name"},e.skill.name))}}class Q extends L{render(){return i("section",{id:"education",class:"education content-item"},i("header",null,"Education"),i(R,null,i("div",{className:"wrapper"},i("div",{className:"header"},i("a",{className:"university",href:"http://www.vit.ac.in",target:"_blank"},"VIT University"),i("div",{className:"loc"},"Vellore, TN, India"),i("a",{className:"vit-icon",href:"http://www.vit.ac.in",target:"_blank"})),i("div",{className:"courses"},"B. Tech in Computer Science & Engineering"))))}}class Y extends L{render(){return i("section",{id:"contact",className:"contacts content-item"},i("header",null,"Contact"),i(R,null,i("div",{className:"contact-wrapper"},U.map(e=>i(Z,{data:e})))),i("div",{className:"extraInfo"},"This Portfolio is old. Please ",i("a",{href:"mailto:naseem1992@gmail.com"},"connect")," with me directly to discuss the details"))}}class Z extends L{render(e){const t=e.data;return i("div",{class:"contact"},i("a",{href:t.link,className:"contact-icon "+t.icon,target:t.target||"_blank"}),i("a",{class:"title",href:t.link,target:t.target||"_blank"},t.text))}}function ee(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function te(e){return function t(n){return 0===arguments.length||ee(n)?t:e.apply(this,arguments)}}function ne(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return ee(n)?t:te(function(t){return e(n,t)});default:return ee(n)&&ee(r)?t:ee(n)?te(function(t){return e(t,r)}):ee(r)?te(function(t){return e(n,t)}):e(n,r)}}}function re(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,r){return t.apply(this,arguments)};case 4:return function(e,n,r,o){return t.apply(this,arguments)};case 5:return function(e,n,r,o,a){return t.apply(this,arguments)};case 6:return function(e,n,r,o,a,i){return t.apply(this,arguments)};case 7:return function(e,n,r,o,a,i,s){return t.apply(this,arguments)};case 8:return function(e,n,r,o,a,i,s,l){return t.apply(this,arguments)};case 9:return function(e,n,r,o,a,i,s,l,c){return t.apply(this,arguments)};case 10:return function(e,n,r,o,a,i,s,l,c,u){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function oe(e,t,n){return function(){for(var r=[],o=0,a=e,i=0;i<t.length||o<arguments.length;){var s;i<t.length&&(!ee(t[i])||o>=arguments.length)?s=t[i]:(s=arguments[o],o+=1),r[i]=s,ee(s)||(a-=1),i+=1}return a<=0?n.apply(this,r):re(a,oe(e,r,n))}}var ae=ne(function(e,t){return 1===e?te(t):re(e,oe(e,[],t))});function ie(e){return function t(n,r,o){switch(arguments.length){case 0:return t;case 1:return ee(n)?t:ne(function(t,r){return e(n,t,r)});case 2:return ee(n)&&ee(r)?t:ee(n)?ne(function(t,n){return e(t,r,n)}):ee(r)?ne(function(t,r){return e(n,t,r)}):te(function(t){return e(n,r,t)});default:return ee(n)&&ee(r)&&ee(o)?t:ee(n)&&ee(r)?ne(function(t,n){return e(t,n,o)}):ee(n)&&ee(o)?ne(function(t,n){return e(t,r,n)}):ee(r)&&ee(o)?ne(function(t,r){return e(n,t,r)}):ee(n)?te(function(t){return e(t,r,o)}):ee(r)?te(function(t){return e(n,t,o)}):ee(o)?te(function(t){return e(n,r,t)}):e(n,r,o)}}}var se=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function le(e){return"function"==typeof e["@@transducer/step"]}function ce(e,t,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),o=r.pop();if(!se(o)){for(var a=0;a<e.length;){if("function"==typeof o[e[a]])return o[e[a]].apply(o,r);a+=1}if(le(o))return t.apply(null,r)(o)}return n.apply(this,arguments)}}var ue={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}};function pe(e,t){for(var n=0,r=t.length,o=Array(r);n<r;)o[n]=e(t[n]),n+=1;return o}function fe(e){return"[object String]"===Object.prototype.toString.call(e)}var de=te(function(e){return!!se(e)||!!e&&("object"==typeof e&&(!fe(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))}),me=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();function he(e){return new me(e)}var ve=ne(function(e,t){return re(e.length,function(){return e.apply(t,arguments)})});function ye(e,t,n){for(var r=n.next();!r.done;){if((t=e["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=n.next()}return e["@@transducer/result"](t)}function ge(e,t,n,r){return e["@@transducer/result"](n[r](ve(e["@@transducer/step"],e),t))}var be="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function _e(e,t,n){if("function"==typeof e&&(e=he(e)),de(n))return function(e,t,n){for(var r=0,o=n.length;r<o;){if((t=e["@@transducer/step"](t,n[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return e["@@transducer/result"](t)}(e,t,n);if("function"==typeof n["fantasy-land/reduce"])return ge(e,t,n,"fantasy-land/reduce");if(null!=n[be])return ye(e,t,n[be]());if("function"==typeof n.next)return ye(e,t,n);if("function"==typeof n.reduce)return ge(e,t,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var xe=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=ue.init,e.prototype["@@transducer/result"]=ue.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),we=ne(function(e,t){return new xe(e,t)});function Ne(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var ke=Object.prototype.toString,Ce=function(){return"[object Arguments]"===ke.call(arguments)?function(e){return"[object Arguments]"===ke.call(e)}:function(e){return Ne("callee",e)}},Se=!{toString:null}.propertyIsEnumerable("toString"),je=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Oe=function(){return arguments.propertyIsEnumerable("length")}(),Ie=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},Pe=te("function"!=typeof Object.keys||Oe?function(e){if(Object(e)!==e)return[];var t,n,r=[],o=Oe&&Ce(e);for(t in e)!Ne(t,e)||o&&"length"===t||(r[r.length]=t);if(Se)for(n=je.length-1;n>=0;)Ne(t=je[n],e)&&!Ie(r,t)&&(r[r.length]=t),n-=1;return r}:function(e){return Object(e)!==e?[]:Object.keys(e)}),Ee=ne(ce(["fantasy-land/map","map"],we,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return ae(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return _e(function(n,r){return n[r]=e(t[r]),n},{},Pe(t));default:return pe(e,t)}})),Te=ne(function(e,t){for(var n=t,r=0;r<e.length;){if(null==n)return;n=n[e[r]],r+=1}return n}),Le=ie(_e);Number.isInteger;function Me(e,t){return function(){return t.call(this,e.apply(this,arguments))}}function Ae(e,t){return function(){var n=arguments.length;if(0===n)return t();var r=arguments[n-1];return se(r)||"function"!=typeof r[e]?t.apply(this,arguments):r[e].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var Ue=ie(Ae("slice",function(e,t,n){return Array.prototype.slice.call(n,e,t)})),Be=te(Ae("tail",Ue(1,1/0)));var We=te(function(e){return fe(e)?e.split("").reverse().join(""):Array.prototype.slice.call(e,0).reverse()});function De(){if(0===arguments.length)throw new Error("compose requires at least one argument");return function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return re(arguments[0].length,Le(Me,arguments[0],Be(arguments)))}.apply(this,We(arguments))}var Ve=function(e){return(e<10?"0":"")+e};Date.prototype.toISOString;function Fe(e){return e}var qe="function"==typeof Object.assign?Object.assign:function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1,r=arguments.length;n<r;){var o=arguments[n];if(null!=o)for(var a in o)Ne(a,o)&&(t[a]=o[a]);n+=1}return t},He=ne(function(e,t){var n={};return n[e]=t,n});Array,String,Object;function Je(e){return"[object Number]"===Object.prototype.toString.call(e)}var Re=te(function(e){return null!=e&&Je(e.length)?e.length:NaN});var ze=ne(function(e,t){return[Ue(0,e,t),Ue(e,Re(t),t)]});var Xe="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";String.prototype.trim,n(2);class $e extends L{constructor(){super(...arguments),this.onNavClick=(e=>{setTimeout(()=>this.props.onNavClick(e),200),this.disperse(e)})}disperse(e){this.setState({disperseIndex:e})}render(e,t){const n=e.slidingNavLastIndex>=0?e.slidingNavLastIndex:2;let r=t.disperseIndex>=0?t.disperseIndex:n;const o=De(ze(r+1),Ee(e=>i(Ge,{data:e,index:e.index,onClick:()=>this.onNavClick(e.index)}))),[a,s]=o(W),l=(r+1)/W.length,c=(W.length-(r+1))/W.length,u=r===t.disperseIndex?"go":"come";return i("div",{className:"full-screen sliding-nav"},i("nav",{className:`moving ${u}-up white-bg`,style:{flexGrow:l}},a),i("nav",{className:`moving ${u}-down white-bg`,style:{flexGrow:c}},s))}}class Ge extends L{constructor(){super(...arguments),this.onItemClick=(e=>{let t=Te(["props","index"],this),n=Te(["props","data"],this);n.target&&"_self"!==n.target||(e.preventDefault(),document.querySelector(n.href.toLowerCase()).scrollIntoView({block:"start"})),this.props.onClick(t)})}render({data:e}){return i("a",{className:"sliding-nav-item",href:e.href,target:e.target||"_self",onClick:this.onItemClick},e.name)}}class Ke extends L{constructor(){super(...arguments),this.hideNav=(e=>{this.setState({showNav:!1,slidingNavLastIndex:e})}),this.showNav=(()=>{this.setState({showNav:!0})})}render(e,t){return i("div",{className:"content"},t.showNav?i($e,{onNavClick:this.hideNav,slidingNavLastIndex:t.slidingNavLastIndex}):null,i(Qe,{onClick:this.showNav}),i(H,null),i(J,null),i(z,null),i($,null),i(Q,null),i(Y,null))}}class Qe extends L{render(e){return i("i",{className:"fas fa-bars ham",onClick:e.onClick})}}class Ye extends L{handleRoute(e){}render(){return i("div",{id:"app",className:"app-container"},i(F,null),i(Ke,null))}}let Ze;Ze=M(i(Ye,null),document.querySelector("#app"),Ze)},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){}]);