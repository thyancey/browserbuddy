import{r as b,a as mi,b as gi,R as H,j as g,c as vi}from"./client-8837fce7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function it(){return it=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},it.apply(this,arguments)}var se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(se||(se={}));const en="popstate";function yi(e){e===void 0&&(e={});function t(n,o){let{pathname:i,search:a,hash:s}=n.location;return lr("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Yn(o)}return wi(t,r,null,e)}function B(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bi(){return Math.random().toString(36).substr(2,8)}function tn(e,t){return{usr:e.state,key:e.key,idx:t}}function lr(e,t,r,n){return r===void 0&&(r=null),it({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yt(t):t,{state:r,key:t&&t.key||n||bi()})}function Yn(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function yt(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function wi(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,s=se.Pop,u=null,c=l();c==null&&(c=0,a.replaceState(it({},a.state,{idx:c}),""));function l(){return(a.state||{idx:null}).idx}function f(){s=se.Pop;let y=l(),w=y==null?null:y-c;c=y,u&&u({action:s,location:m.location,delta:w})}function d(y,w){s=se.Push;let v=lr(m.location,y,w);r&&r(v,y),c=l()+1;let S=tn(v,c),E=m.createHref(v);try{a.pushState(S,"",E)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;o.location.assign(E)}i&&u&&u({action:s,location:m.location,delta:1})}function p(y,w){s=se.Replace;let v=lr(m.location,y,w);r&&r(v,y),c=l();let S=tn(v,c),E=m.createHref(v);a.replaceState(S,"",E),i&&u&&u({action:s,location:m.location,delta:0})}function h(y){let w=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof y=="string"?y:Yn(y);return B(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let m={get action(){return s},get location(){return e(o,a)},listen(y){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(en,f),u=y,()=>{o.removeEventListener(en,f),u=null}},createHref(y){return t(o,y)},createURL:h,encodeLocation(y){let w=h(y);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:p,go(y){return a.go(y)}};return m}var rn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rn||(rn={}));function Si(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?yt(t):t,o=Jn(n.pathname||"/",r);if(o==null)return null;let i=Hn(e);xi(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Ii(i[s],_i(o));return a}function Hn(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(B(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let c=Ee([n,u.relativePath]),l=r.concat(u);i.children&&i.children.length>0&&(B(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Hn(i.children,t,l,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:ji(c,i.index),routesMeta:l})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let u of Xn(i.path))o(i,a,u)}),t}function Xn(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=Xn(n.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function xi(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ri(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const $i=/^:\w+$/,Ei=3,Ci=2,Pi=1,Oi=10,Ai=-2,nn=e=>e==="*";function ji(e,t){let r=e.split("/"),n=r.length;return r.some(nn)&&(n+=Ai),t&&(n+=Ci),r.filter(o=>!nn(o)).reduce((o,i)=>o+($i.test(i)?Ei:i===""?Pi:Oi),n)}function Ri(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Ii(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",l=ki({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!l)return null;Object.assign(n,l.params);let f=s.route;i.push({params:n,pathname:Ee([o,l.pathname]),pathnameBase:Li(Ee([o,l.pathnameBase])),route:f}),l.pathnameBase!=="/"&&(o=Ee([o,l.pathnameBase]))}return i}function ki(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Ti(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((c,l,f)=>{if(l==="*"){let d=s[f]||"";a=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return c[l]=Mi(s[f]||"",l),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Ti(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Rr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(n.push(s),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function _i(e){try{return decodeURI(e)}catch(t){return Rr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Mi(e,t){try{return decodeURIComponent(e)}catch(r){return Rr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Ee=e=>e.join("/").replace(/\/\/+/g,"/"),Li=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function Ni(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zn=["post","put","patch","delete"];new Set(Zn);const Di=["get",...Zn];new Set(Di);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fr.apply(this,arguments)}const zi=b.createContext(null),Bi=b.createContext(null),Qn=b.createContext(null),bt=b.createContext(null),wt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),eo=b.createContext(null);function Ir(){return b.useContext(bt)!=null}function Fi(){return Ir()||B(!1),b.useContext(bt).location}function Ui(e,t){return Wi(e,t)}function Wi(e,t,r){Ir()||B(!1);let{navigator:n}=b.useContext(Qn),{matches:o}=b.useContext(wt),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Fi(),c;if(t){var l;let m=typeof t=="string"?yt(t):t;s==="/"||(l=m.pathname)!=null&&l.startsWith(s)||B(!1),c=m}else c=u;let f=c.pathname||"/",d=s==="/"?f:f.slice(s.length)||"/",p=Si(e,{pathname:d}),h=Yi(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Ee([s,n.encodeLocation?n.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:Ee([s,n.encodeLocation?n.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,r);return t&&h?b.createElement(bt.Provider,{value:{location:fr({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:se.Pop}},h):h}function Vi(){let e=Zi(),t=Ni(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:o},r):null,i)}const qi=b.createElement(Vi,null);class Gi extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?b.createElement(wt.Provider,{value:this.props.routeContext},b.createElement(eo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ki(e){let{routeContext:t,match:r,children:n}=e,o=b.useContext(zi);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(wt.Provider,{value:t},n)}function Yi(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let i=e,a=(n=r)==null?void 0:n.errors;if(a!=null){let s=i.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));s>=0||B(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,u,c)=>{let l=u.route.id?a==null?void 0:a[u.route.id]:null,f=null;r&&(f=u.route.errorElement||qi);let d=t.concat(i.slice(0,c+1)),p=()=>{let h;return l?h=f:u.route.Component?h=b.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=s,b.createElement(Ki,{match:u,routeContext:{outlet:s,matches:d,isDataRoute:r!=null},children:h})};return r&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?b.createElement(Gi,{location:r.location,revalidation:r.revalidation,component:f,error:l,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var dr=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dr||{});function Hi(e){let t=b.useContext(Bi);return t||B(!1),t}function Xi(e){let t=b.useContext(wt);return t||B(!1),t}function Ji(e){let t=Xi(),r=t.matches[t.matches.length-1];return r.route.id||B(!1),r.route.id}function Zi(){var e;let t=b.useContext(eo),r=Hi(dr.UseRouteError),n=Ji(dr.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function pr(e){B(!1)}function Qi(e){let{basename:t="/",children:r=null,location:n,navigationType:o=se.Pop,navigator:i,static:a=!1}=e;Ir()&&B(!1);let s=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof n=="string"&&(n=yt(n));let{pathname:c="/",search:l="",hash:f="",state:d=null,key:p="default"}=n,h=b.useMemo(()=>{let m=Jn(c,s);return m==null?null:{location:{pathname:m,search:l,hash:f,state:d,key:p},navigationType:o}},[s,c,l,f,d,p,o]);return h==null?null:b.createElement(Qn.Provider,{value:u},b.createElement(bt.Provider,{children:r,value:h}))}function ea(e){let{children:t,location:r}=e;return Ui(hr(t),r)}new Promise(()=>{});function hr(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(n,o)=>{if(!b.isValidElement(n))return;let i=[...t,o];if(n.type===b.Fragment){r.push.apply(r,hr(n.props.children,i));return}n.type!==pr&&B(!1),!n.props.index||!n.props.children||B(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=hr(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ta="startTransition",on=mi[ta];function ra(e){let{basename:t,children:r,future:n,window:o}=e,i=b.useRef();i.current==null&&(i.current=yi({window:o,v5Compat:!0}));let a=i.current,[s,u]=b.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},l=b.useCallback(f=>{c&&on?on(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>a.listen(l),[a,l]),b.createElement(Qi,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a})}var an;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(an||(an={}));var sn;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sn||(sn={}));var to={exports:{}},ro={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=b;function na(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var oa=typeof Object.is=="function"?Object.is:na,ia=Oe.useState,aa=Oe.useEffect,sa=Oe.useLayoutEffect,ca=Oe.useDebugValue;function ua(e,t){var r=t(),n=ia({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return sa(function(){o.value=r,o.getSnapshot=t,Jt(o)&&i({inst:o})},[e,r,t]),aa(function(){return Jt(o)&&i({inst:o}),e(function(){Jt(o)&&i({inst:o})})},[e]),ca(r),r}function Jt(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!oa(e,r)}catch{return!0}}function la(e,t){return t()}var fa=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?la:ua;ro.useSyncExternalStore=Oe.useSyncExternalStore!==void 0?Oe.useSyncExternalStore:fa;to.exports=ro;var da=to.exports,no={exports:{}},oo={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var St=b,pa=da;function ha(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ma=typeof Object.is=="function"?Object.is:ha,ga=pa.useSyncExternalStore,va=St.useRef,ya=St.useEffect,ba=St.useMemo,wa=St.useDebugValue;oo.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=va(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=ba(function(){function u(p){if(!c){if(c=!0,l=p,p=n(p),o!==void 0&&a.hasValue){var h=a.value;if(o(h,p))return f=h}return f=p}if(h=f,ma(l,p))return h;var m=n(p);return o!==void 0&&o(h,m)?h:(l=p,f=m)}var c=!1,l,f,d=r===void 0?null:r;return[function(){return u(t())},d===null?void 0:function(){return u(d())}]},[t,r,n,o]);var s=ga(e,i[0],i[1]);return ya(function(){a.hasValue=!0,a.value=s},[s]),wa(s),s};no.exports=oo;var Sa=no.exports;function xa(e){e()}let io=xa;const $a=e=>io=e,Ea=()=>io,cn=Symbol.for("react-redux-context"),un=typeof globalThis<"u"?globalThis:{};function Ca(){var e;if(!b.createContext)return{};const t=(e=un[cn])!=null?e:un[cn]=new Map;let r=t.get(b.createContext);return r||(r=b.createContext(null),t.set(b.createContext,r)),r}const fe=Ca();function kr(e=fe){return function(){return b.useContext(e)}}const ao=kr(),Pa=()=>{throw new Error("uSES not initialized!")};let so=Pa;const Oa=e=>{so=e},Aa=(e,t)=>e===t;function ja(e=fe){const t=e===fe?ao:kr(e);return function(n,o={}){const{equalityFn:i=Aa,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:u,subscription:c,getServerState:l,stabilityCheck:f,noopCheck:d}=t();b.useRef(!0);const p=b.useCallback({[n.name](m){return n(m)}}[n.name],[n,f,a]),h=so(c.addNestedSub,u.getState,l||u.getState,p,i);return b.useDebugValue(h),h}}const Q=ja();var co={exports:{}},R={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=typeof Symbol=="function"&&Symbol.for,Tr=N?Symbol.for("react.element"):60103,_r=N?Symbol.for("react.portal"):60106,xt=N?Symbol.for("react.fragment"):60107,$t=N?Symbol.for("react.strict_mode"):60108,Et=N?Symbol.for("react.profiler"):60114,Ct=N?Symbol.for("react.provider"):60109,Pt=N?Symbol.for("react.context"):60110,Mr=N?Symbol.for("react.async_mode"):60111,Ot=N?Symbol.for("react.concurrent_mode"):60111,At=N?Symbol.for("react.forward_ref"):60112,jt=N?Symbol.for("react.suspense"):60113,Ra=N?Symbol.for("react.suspense_list"):60120,Rt=N?Symbol.for("react.memo"):60115,It=N?Symbol.for("react.lazy"):60116,Ia=N?Symbol.for("react.block"):60121,ka=N?Symbol.for("react.fundamental"):60117,Ta=N?Symbol.for("react.responder"):60118,_a=N?Symbol.for("react.scope"):60119;function W(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Tr:switch(e=e.type,e){case Mr:case Ot:case xt:case Et:case $t:case jt:return e;default:switch(e=e&&e.$$typeof,e){case Pt:case At:case It:case Rt:case Ct:return e;default:return t}}case _r:return t}}}function uo(e){return W(e)===Ot}R.AsyncMode=Mr;R.ConcurrentMode=Ot;R.ContextConsumer=Pt;R.ContextProvider=Ct;R.Element=Tr;R.ForwardRef=At;R.Fragment=xt;R.Lazy=It;R.Memo=Rt;R.Portal=_r;R.Profiler=Et;R.StrictMode=$t;R.Suspense=jt;R.isAsyncMode=function(e){return uo(e)||W(e)===Mr};R.isConcurrentMode=uo;R.isContextConsumer=function(e){return W(e)===Pt};R.isContextProvider=function(e){return W(e)===Ct};R.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr};R.isForwardRef=function(e){return W(e)===At};R.isFragment=function(e){return W(e)===xt};R.isLazy=function(e){return W(e)===It};R.isMemo=function(e){return W(e)===Rt};R.isPortal=function(e){return W(e)===_r};R.isProfiler=function(e){return W(e)===Et};R.isStrictMode=function(e){return W(e)===$t};R.isSuspense=function(e){return W(e)===jt};R.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xt||e===Ot||e===Et||e===$t||e===jt||e===Ra||typeof e=="object"&&e!==null&&(e.$$typeof===It||e.$$typeof===Rt||e.$$typeof===Ct||e.$$typeof===Pt||e.$$typeof===At||e.$$typeof===ka||e.$$typeof===Ta||e.$$typeof===_a||e.$$typeof===Ia)};R.typeOf=W;co.exports=R;var Ma=co.exports,lo=Ma,La={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Na={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fo={};fo[lo.ForwardRef]=La;fo[lo.Memo]=Na;var I={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),kt=Symbol.for("react.fragment"),Tt=Symbol.for("react.strict_mode"),_t=Symbol.for("react.profiler"),Mt=Symbol.for("react.provider"),Lt=Symbol.for("react.context"),Da=Symbol.for("react.server_context"),Nt=Symbol.for("react.forward_ref"),Dt=Symbol.for("react.suspense"),zt=Symbol.for("react.suspense_list"),Bt=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),za=Symbol.for("react.offscreen"),po;po=Symbol.for("react.module.reference");function q(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Lr:switch(e=e.type,e){case kt:case _t:case Tt:case Dt:case zt:return e;default:switch(e=e&&e.$$typeof,e){case Da:case Lt:case Nt:case Ft:case Bt:case Mt:return e;default:return t}}case Nr:return t}}}I.ContextConsumer=Lt;I.ContextProvider=Mt;I.Element=Lr;I.ForwardRef=Nt;I.Fragment=kt;I.Lazy=Ft;I.Memo=Bt;I.Portal=Nr;I.Profiler=_t;I.StrictMode=Tt;I.Suspense=Dt;I.SuspenseList=zt;I.isAsyncMode=function(){return!1};I.isConcurrentMode=function(){return!1};I.isContextConsumer=function(e){return q(e)===Lt};I.isContextProvider=function(e){return q(e)===Mt};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr};I.isForwardRef=function(e){return q(e)===Nt};I.isFragment=function(e){return q(e)===kt};I.isLazy=function(e){return q(e)===Ft};I.isMemo=function(e){return q(e)===Bt};I.isPortal=function(e){return q(e)===Nr};I.isProfiler=function(e){return q(e)===_t};I.isStrictMode=function(e){return q(e)===Tt};I.isSuspense=function(e){return q(e)===Dt};I.isSuspenseList=function(e){return q(e)===zt};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kt||e===_t||e===Tt||e===Dt||e===zt||e===za||typeof e=="object"&&e!==null&&(e.$$typeof===Ft||e.$$typeof===Bt||e.$$typeof===Mt||e.$$typeof===Lt||e.$$typeof===Nt||e.$$typeof===po||e.getModuleId!==void 0)};I.typeOf=q;function Ba(){const e=Ea();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const ln={notify(){},get:()=>[]};function Fa(e,t){let r,n=ln;function o(f){return u(),n.subscribe(f)}function i(){n.notify()}function a(){l.onStateChange&&l.onStateChange()}function s(){return!!r}function u(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=Ba())}function c(){r&&(r(),r=void 0,n.clear(),n=ln)}const l={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>n};return l}const Ua=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wa=Ua?b.useLayoutEffect:b.useEffect;function fn(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function at(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!fn(e[r[o]],t[r[o]]))return!1;return!0}function Va({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){const a=b.useMemo(()=>{const c=Fa(e);return{store:e,subscription:c,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[e,n,o,i]),s=b.useMemo(()=>e.getState(),[e]);Wa(()=>{const{subscription:c}=a;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[a,s]);const u=t||fe;return b.createElement(u.Provider,{value:a},r)}function ho(e=fe){const t=e===fe?ao:kr(e);return function(){const{store:n}=t();return n}}const qa=ho();function Ga(e=fe){const t=e===fe?qa:ho(e);return function(){return t().dispatch}}const we=Ga();Oa(Sa.useSyncExternalStoreWithSelector);$a(gi.unstable_batchedUpdates);var z=function(){return z=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},z.apply(this,arguments)};function Ue(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var k="-ms-",Fe="-moz-",A="-webkit-",mo="comm",Ut="rule",Dr="decl",Ka="@import",go="@keyframes",Ya="@layer",Ha=Math.abs,zr=String.fromCharCode,mr=Object.assign;function Xa(e,t){return L(e,0)^45?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}function vo(e){return e.trim()}function Z(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,r){return e.replace(t,r)}function tt(e,t){return e.indexOf(t)}function L(e,t){return e.charCodeAt(t)|0}function Ae(e,t,r){return e.slice(t,r)}function Y(e){return e.length}function yo(e){return e.length}function ze(e,t){return t.push(e),e}function Ja(e,t){return e.map(t).join("")}function dn(e,t){return e.filter(function(r){return!Z(r,t)})}var Wt=1,je=1,bo=0,V=0,M=0,_e="";function Vt(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Wt,column:je,length:a,return:"",siblings:s}}function ie(e,t){return mr(Vt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xe(e){for(;e.root;)e=ie(e.root,{children:[e]});ze(e,e.siblings)}function Za(){return M}function Qa(){return M=V>0?L(_e,--V):0,je--,M===10&&(je=1,Wt--),M}function K(){return M=V<bo?L(_e,V++):0,je++,M===10&&(je=1,Wt++),M}function ye(){return L(_e,V)}function rt(){return V}function qt(e,t){return Ae(_e,e,t)}function gr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function es(e){return Wt=je=1,bo=Y(_e=e),V=0,[]}function ts(e){return _e="",e}function Zt(e){return vo(qt(V-1,vr(e===91?e+2:e===40?e+1:e)))}function rs(e){for(;(M=ye())&&M<33;)K();return gr(e)>2||gr(M)>3?"":" "}function ns(e,t){for(;--t&&K()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return qt(e,rt()+(t<6&&ye()==32&&K()==32))}function vr(e){for(;K();)switch(M){case e:return V;case 34:case 39:e!==34&&e!==39&&vr(M);break;case 40:e===41&&vr(e);break;case 92:K();break}return V}function os(e,t){for(;K()&&e+M!==47+10;)if(e+M===42+42&&ye()===47)break;return"/*"+qt(t,V-1)+"*"+zr(e===47?e:K())}function is(e){for(;!gr(ye());)K();return qt(e,V)}function as(e){return ts(nt("",null,null,null,[""],e=es(e),0,[0],e))}function nt(e,t,r,n,o,i,a,s,u){for(var c=0,l=0,f=a,d=0,p=0,h=0,m=1,y=1,w=1,v=0,S="",E=o,$=i,j=n,P=S;y;)switch(h=v,v=K()){case 40:if(h!=108&&L(P,f-1)==58){tt(P+=O(Zt(v),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:P+=Zt(v);break;case 9:case 10:case 13:case 32:P+=rs(h);break;case 92:P+=ns(rt()-1,7);continue;case 47:switch(ye()){case 42:case 47:ze(ss(os(K(),rt()),t,r,u),u);break;default:P+="/"}break;case 123*m:s[c++]=Y(P)*w;case 125*m:case 59:case 0:switch(v){case 0:case 125:y=0;case 59+l:w==-1&&(P=O(P,/\f/g,"")),p>0&&Y(P)-f&&ze(p>32?hn(P+";",n,r,f-1,u):hn(O(P," ","")+";",n,r,f-2,u),u);break;case 59:P+=";";default:if(ze(j=pn(P,t,r,c,l,o,s,S,E=[],$=[],f,i),i),v===123)if(l===0)nt(P,t,j,j,E,i,f,s,$);else switch(d===99&&L(P,3)===110?100:d){case 100:case 108:case 109:case 115:nt(e,j,j,n&&ze(pn(e,j,j,0,0,o,s,S,o,E=[],f,$),$),o,$,f,s,n?E:$);break;default:nt(P,j,j,j,[""],$,0,s,$)}}c=l=p=0,m=w=1,S=P="",f=a;break;case 58:f=1+Y(P),p=h;default:if(m<1){if(v==123)--m;else if(v==125&&m++==0&&Qa()==125)continue}switch(P+=zr(v),v*m){case 38:w=l>0?1:(P+="\f",-1);break;case 44:s[c++]=(Y(P)-1)*w,w=1;break;case 64:ye()===45&&(P+=Zt(K())),d=ye(),l=f=Y(S=P+=is(rt())),v++;break;case 45:h===45&&Y(P)==2&&(m=0)}}return i}function pn(e,t,r,n,o,i,a,s,u,c,l,f){for(var d=o-1,p=o===0?i:[""],h=yo(p),m=0,y=0,w=0;m<n;++m)for(var v=0,S=Ae(e,d+1,d=Ha(y=a[m])),E=e;v<h;++v)(E=vo(y>0?p[v]+" "+S:O(S,/&\f/g,p[v])))&&(u[w++]=E);return Vt(e,t,r,o===0?Ut:s,u,c,l,f)}function ss(e,t,r,n){return Vt(e,t,r,mo,zr(Za()),Ae(e,2,-2),0,n)}function hn(e,t,r,n,o){return Vt(e,t,r,Dr,Ae(e,0,n),Ae(e,n+1,-1),n,o)}function wo(e,t,r){switch(Xa(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return Fe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Fe+e+k+e+e;case 5936:switch(L(e,t+11)){case 114:return A+e+k+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+k+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+k+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+k+e+e;case 6165:return A+e+k+"flex-"+e+e;case 5187:return A+e+O(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return A+e+k+"flex-item-"+O(e,/flex-|-self/g,"")+(Z(e,/flex-|baseline/)?"":k+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return A+e+k+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+k+O(e,"shrink","negative")+e;case 5292:return A+e+k+O(e,"basis","preferred-size")+e;case 6060:return A+"box-"+O(e,"-grow","")+A+e+k+O(e,"grow","positive")+e;case 4554:return A+O(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!Z(e,/flex-|baseline/))return k+"grid-column-align"+Ae(e,t)+e;break;case 2592:case 3360:return k+O(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Z(n.props,/grid-\w+-end/)})?~tt(e+(r=r[t].value),"span")?e:k+O(e,"-start","")+e+k+"grid-row-span:"+(~tt(r,"span")?Z(r,/\d+/):+Z(r,/\d+/)-+Z(e,/\d+/))+";":k+O(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Z(n.props,/grid-\w+-start/)})?e:k+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Y(e)-1-t>6)switch(L(e,t+1)){case 109:if(L(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Fe+(L(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~tt(e,"stretch")?wo(O(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,s,u,c){return k+o+":"+i+c+(a?k+o+"-span:"+(s?u:+u-+i)+c:"")+e});case 4949:if(L(e,t+6)===121)return O(e,":",":"+A)+e;break;case 6444:switch(L(e,L(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(L(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+k+"$2box$3")+e;case 100:return O(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function st(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function cs(e,t,r,n){switch(e.type){case Ya:if(e.children.length)break;case Ka:case Dr:return e.return=e.return||e.value;case mo:return"";case go:return e.return=e.value+"{"+st(e.children,n)+"}";case Ut:if(!Y(e.value=e.props.join(",")))return""}return Y(r=st(e.children,n))?e.return=e.value+"{"+r+"}":""}function us(e){var t=yo(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}function ls(e){return function(t){t.root||(t=t.return)&&e(t)}}function fs(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Dr:e.return=wo(e.value,e.length,r);return;case go:return st([ie(e,{value:O(e.value,"@","@"+A)})],n);case Ut:if(e.length)return Ja(r=e.props,function(o){switch(Z(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xe(ie(e,{props:[O(o,/:(read-\w+)/,":"+Fe+"$1")]})),xe(ie(e,{props:[o]})),mr(e,{props:dn(r,n)});break;case"::placeholder":xe(ie(e,{props:[O(o,/:(plac\w+)/,":"+A+"input-$1")]})),xe(ie(e,{props:[O(o,/:(plac\w+)/,":"+Fe+"$1")]})),xe(ie(e,{props:[O(o,/:(plac\w+)/,k+"input-$1")]})),xe(ie(e,{props:[o]})),mr(e,{props:dn(r,n)});break}return""})}}var ds={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Re=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Br=typeof window<"u"&&"HTMLElement"in window,ps=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),hs={},Gt=Object.freeze([]),Ie=Object.freeze({});function So(e,t,r){return r===void 0&&(r=Ie),e.theme!==r.theme&&e.theme||t||r.theme}var xo=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ms=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gs=/(^-|-$)/g;function mn(e){return e.replace(ms,"-").replace(gs,"")}var vs=/(a)(d)/gi,gn=function(e){return String.fromCharCode(e+(e>25?39:97))};function yr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=gn(t%52)+r;return(gn(t%52)+r).replace(vs,"$1-$2")}var Qt,$e=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},$o=function(e){return $e(5381,e)};function Eo(e){return yr($o(e)>>>0)}function ys(e){return e.displayName||e.name||"Component"}function er(e){return typeof e=="string"&&!0}var Co=typeof Symbol=="function"&&Symbol.for,Po=Co?Symbol.for("react.memo"):60115,bs=Co?Symbol.for("react.forward_ref"):60112,ws={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ss={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Oo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xs=((Qt={})[bs]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qt[Po]=Oo,Qt);function vn(e){return("type"in(t=e)&&t.type.$$typeof)===Po?Oo:"$$typeof"in e?xs[e.$$typeof]:ws;var t}var $s=Object.defineProperty,Es=Object.getOwnPropertyNames,yn=Object.getOwnPropertySymbols,Cs=Object.getOwnPropertyDescriptor,Ps=Object.getPrototypeOf,bn=Object.prototype;function Ao(e,t,r){if(typeof t!="string"){if(bn){var n=Ps(t);n&&n!==bn&&Ao(e,n,r)}var o=Es(t);yn&&(o=o.concat(yn(t)));for(var i=vn(e),a=vn(t),s=0;s<o.length;++s){var u=o[s];if(!(u in Ss||r&&r[u]||a&&u in a||i&&u in i)){var c=Cs(t,u);try{$s(e,u,c)}catch{}}}}return e}function ke(e){return typeof e=="function"}function Fr(e){return typeof e=="object"&&"styledComponentId"in e}function ve(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function br(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function We(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wr(e,t,r){if(r===void 0&&(r=!1),!r&&!We(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=wr(e[n],t[n]);else if(We(t))for(var n in t)e[n]=wr(e[n],t[n]);return e}function Ur(e,t){Object.defineProperty(e,"toString",{value:t})}function Ye(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Os=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Ye(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),u=(a=0,r.length);a<u;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),ot=new Map,ct=new Map,tr=1,Qe=function(e){if(ot.has(e))return ot.get(e);for(;ct.has(tr);)tr++;var t=tr++;return ot.set(e,t),ct.set(t,e),t},As=function(e,t){ot.set(e,t),ct.set(t,e)},js="style[".concat(Re,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Rs=new RegExp("^".concat(Re,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Is=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},ks=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var u=s.match(Rs);if(u){var c=0|parseInt(u[1],10),l=u[2];c!==0&&(As(l,c),Is(e,l,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}};function Ts(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var u=Array.from(s.querySelectorAll("style[".concat(Re,"]")));return u[u.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Re,"active"),n.setAttribute("data-styled-version","6.0.7");var a=Ts();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},_s=function(){function e(t){this.element=jo(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Ye(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Ms=function(){function e(t){this.element=jo(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ls=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),wn=Br,Ns={isServer:!Br,useCSSOMInjection:!ps},ut=function(){function e(t,r,n){t===void 0&&(t=Ie),r===void 0&&(r={});var o=this;this.options=z(z({},Ns),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Br&&wn&&(wn=!1,function(i){for(var a=document.querySelectorAll(js),s=0,u=a.length;s<u;s++){var c=a[s];c&&c.getAttribute(Re)!=="active"&&(ks(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Ur(this,function(){return function(i){for(var a=i.getTag(),s=a.length,u="",c=function(f){var d=function(w){return ct.get(w)}(f);if(d===void 0)return"continue";var p=i.names.get(d),h=a.getGroup(f);if(p===void 0||h.length===0)return"continue";var m="".concat(Re,".g").concat(f,'[id="').concat(d,'"]'),y="";p!==void 0&&p.forEach(function(w){w.length>0&&(y+="".concat(w,","))}),u+="".concat(h).concat(m,'{content:"').concat(y,'"}').concat(`/*!sc*/
`)},l=0;l<s;l++)c(l);return u}(o)})}return e.registerId=function(t){return Qe(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(z(z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Ls(o):n?new _s(o):new Ms(o)}(this.options),new Os(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Qe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Qe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ds=/&/g,zs=/^\s*\/\/.*$/gm;function Ro(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ro(r.children,t)),r})}function Bs(e){var t,r,n,o=e===void 0?Ie:e,i=o.options,a=i===void 0?Ie:i,s=o.plugins,u=s===void 0?Gt:s,c=function(d,p,h){return h===r||h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):d},l=u.slice();l.push(function(d){d.type===Ut&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Ds,r).replace(n,c))}),a.prefix&&l.push(fs),l.push(cs);var f=function(d,p,h,m){p===void 0&&(p=""),h===void 0&&(h=""),m===void 0&&(m="&"),t=m,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var y=d.replace(zs,""),w=as(h||p?"".concat(h," ").concat(p," { ").concat(y," }"):y);a.namespace&&(w=Ro(w,a.namespace));var v=[];return st(w,us(l.concat(ls(function(S){return v.push(S)})))),v};return f.hash=u.length?u.reduce(function(d,p){return p.name||Ye(15),$e(d,p.name)},5381).toString():"",f}var Fs=new ut,Sr=Bs(),Io=H.createContext({shouldForwardProp:void 0,styleSheet:Fs,stylis:Sr});Io.Consumer;H.createContext(void 0);function xr(){return b.useContext(Io)}var Us=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Sr);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ur(this,function(){throw Ye(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Sr),this.name+t.hash},e}(),Ws=function(e){return e>="A"&&e<="Z"};function Sn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Ws(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var ko=function(e){return e==null||e===!1||e===""},To=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!ko(i)&&(Array.isArray(i)&&i.isCss||ke(i)?n.push("".concat(Sn(o),":"),i,";"):We(i)?n.push.apply(n,Ue(Ue(["".concat(o," {")],To(i),!1),["}"],!1)):n.push("".concat(Sn(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in ds||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function ce(e,t,r,n){if(ko(e))return[];if(Fr(e))return[".".concat(e.styledComponentId)];if(ke(e)){if(!ke(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return ce(o,t,r,n)}var i;return e instanceof Us?r?(e.inject(r,n),[e.getName(n)]):[e]:We(e)?To(e):Array.isArray(e)?Array.prototype.concat.apply(Gt,e.map(function(a){return ce(a,t,r,n)})):[e.toString()]}function _o(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ke(r)&&!Fr(r))return!1}return!0}var Vs=$o("6.0.7"),qs=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&_o(t),this.componentId=r,this.baseHash=$e(Vs,r),this.baseStyle=n,ut.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=ve(o,this.staticRulesId);else{var i=br(ce(this.rules,t,r,n)),a=yr($e(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}o=ve(o,a),this.staticRulesId=a}else{for(var u=$e(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var f=this.rules[l];if(typeof f=="string")c+=f;else if(f){var d=br(ce(f,t,r,n));u=$e(u,d),c+=d}}if(c){var p=yr(u>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(c,".".concat(p),void 0,this.componentId)),o=ve(o,p)}}return o},e}(),Wr=H.createContext(void 0);Wr.Consumer;var rr={};function Gs(e,t,r){var n=Fr(e),o=e,i=!er(e),a=t.attrs,s=a===void 0?Gt:a,u=t.componentId,c=u===void 0?function(S,E){var $=typeof S!="string"?"sc":mn(S);rr[$]=(rr[$]||0)+1;var j="".concat($,"-").concat(Eo("6.0.7"+$+rr[$]));return E?"".concat(E,"-").concat(j):j}(t.displayName,t.parentComponentId):u,l=t.displayName;l===void 0&&function(S){return er(S)?"styled.".concat(S):"Styled(".concat(ys(S),")")}(e);var f=t.displayName&&t.componentId?"".concat(mn(t.displayName),"-").concat(t.componentId):t.componentId||c,d=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,p=t.shouldForwardProp;if(n&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;p=function(S,E){return h(S,E)&&m(S,E)}}else p=h}var y=new qs(r,f,n?o.componentStyle:void 0);function w(S,E){return function($,j,P){var pe=$.attrs,te=$.componentStyle,F=$.defaultProps,he=$.foldedComponentIds,fi=$.styledComponentId,di=$.target,pi=H.useContext(Wr),hi=xr(),Yt=$.shouldForwardProp||hi.shouldForwardProp,re=function(Xe,Ne,Je){for(var De,me=z(z({},Ne),{className:void 0,theme:Je}),Xt=0;Xt<Xe.length;Xt+=1){var Ze=ke(De=Xe[Xt])?De(me):De;for(var oe in Ze)me[oe]=oe==="className"?ve(me[oe],Ze[oe]):oe==="style"?z(z({},me[oe]),Ze[oe]):Ze[oe]}return Ne.className&&(me.className=ve(me.className,Ne.className)),me}(pe,j,So(j,pi,F)||Ie),He=re.as||di,Le={};for(var ne in re)re[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"||(ne==="forwardedAs"?Le.as=re.forwardedAs:Yt&&!Yt(ne,He)||(Le[ne]=re[ne]));var Qr=function(Xe,Ne){var Je=xr(),De=Xe.generateAndInjectStyles(Ne,Je.styleSheet,Je.stylis);return De}(te,re),Ht=ve(he,fi);return Qr&&(Ht+=" "+Qr),re.className&&(Ht+=" "+re.className),Le[er(He)&&!xo.has(He)?"class":"className"]=Ht,Le.ref=P,b.createElement(He,Le)}(v,S,E)}var v=H.forwardRef(w);return v.attrs=d,v.componentStyle=y,v.shouldForwardProp=p,v.foldedComponentIds=n?ve(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=f,v.target=n?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(E){for(var $=[],j=1;j<arguments.length;j++)$[j-1]=arguments[j];for(var P=0,pe=$;P<pe.length;P++)wr(E,pe[P],!0);return E}({},o.defaultProps,S):S}}),Ur(v,function(){return".".concat(v.styledComponentId)}),i&&Ao(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function xn(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var $n=function(e){return Object.assign(e,{isCss:!0})};function Se(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ke(e)||We(e)){var n=e;return $n(ce(xn(Gt,Ue([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?ce(o):$n(ce(xn(o,t)))}function $r(e,t,r){if(r===void 0&&(r=Ie),!t)throw Ye(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Se.apply(void 0,Ue([o],i,!1)))};return n.attrs=function(o){return $r(e,t,z(z({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return $r(e,t,z(z({},r),o))},n}var Mo=function(e){return $r(Gs,e)},x=Mo;xo.forEach(function(e){x[e]=Mo(e)});var Ks=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=_o(t),ut.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(br(ce(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&ut.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Ys(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Se.apply(void 0,Ue([e],t,!1)),o="sc-global-".concat(Eo(JSON.stringify(n))),i=new Ks(n,o),a=function(u){var c=xr(),l=H.useContext(Wr),f=H.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&s(f,u,c.styleSheet,l,c.stylis),H.useLayoutEffect(function(){if(!c.styleSheet.server)return s(f,u,c.styleSheet,l,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,l,c.stylis]),null};function s(u,c,l,f,d){if(i.isStatic)i.renderStyles(u,hs,l,d);else{var p=z(z({},c),{theme:So(c,f,a.defaultProps)});i.renderStyles(u,p,l,d)}}return H.memo(a)}const Hs=Ys`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }

  /* prevent text selection */
  * {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
  
  #root{
    margin:0 auto;
    /* for chrome extension */
    min-width:35rem;
    min-height:60rem;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Bevan', cursive;
  }
  a, p, span {
    font-family: 'Cabin', sans-serif;
  }
  h1{
    font-size: 5rem;
  }
  h2{
    font-size: 4rem;
  }
  h3{
    font-size: 3.5rem;
  }
  h4{
    font-size: 2.5rem;
  }
  h5{
    font-size: 1.5rem;
  }
  p, span{
    font-size:1.5rem;
    line-height: 1.5rem;
  }

  html{
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Cabin', sans-serif;
    background-color: black;
    color: white;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`,C=e=>Zs.colors[e],lt=(e,t)=>{const r=Lo[e]||e;let n=parseInt(r.substring(1,3),16),o=parseInt(r.substring(3,5),16),i=parseInt(r.substring(5,7),16);n=Math.round(n*(100+t)/100),o=Math.round(o*(100+t)/100),i=Math.round(i*(100+t)/100),n=n<255?n:255,o=o<255?o:255,i=i<255?i:255;const a=n.toString(16).length===1?"0"+n.toString(16):n.toString(16),s=o.toString(16).length===1?"0"+o.toString(16):o.toString(16),u=i.toString(16).length===1?"0"+i.toString(16):i.toString(16);return"#"+a+s+u},Xs={z1:"-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.16)",z2:"-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.36)",z3:"-.2rem .5rem 1rem .2rem rgba(0,0,0,.36)"},Lo={black:"#000000",grey:"#373737",grey_light:"#A39F8E",white:"#fef8dd",blue:"#1fb9f3",green:"#51f249",yellow:"#fff249",red:"#F55658",purple:"#6b1ff3"},Js={mobile_tiny:"300px",mobile_medium:"400px",mobile_large:"500px",tablet:"768px",desktop:"1024px"},Zs={colors:Lo,shadows:Xs,breakpoints:Js},Qs=()=>Se`
    border-radius:2rem;
    border: .5rem solid;
  `,ec=(e,t="white")=>Se`
    ${Qs()}
    border-color: ${C(t)};
    color: ${C(t)};
    background-color: ${C(e)};
  `;function G(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function de(e){return!!e&&!!e[T]}function ee(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===uc}(e)||Array.isArray(e)||!!e[Rn]||!!(!((t=e.constructor)===null||t===void 0)&&t[Rn])||Vr(e)||qr(e))}function be(e,t,r){r===void 0&&(r=!1),Me(e)===0?(r?Object.keys:Pe)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function Me(e){var t=e[T];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Vr(e)?2:qr(e)?3:0}function Ce(e,t){return Me(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function tc(e,t){return Me(e)===2?e.get(t):e[t]}function No(e,t,r){var n=Me(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Do(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Vr(e){return sc&&e instanceof Map}function qr(e){return cc&&e instanceof Set}function ge(e){return e.o||e.t}function Gr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Bo(e);delete t[T];for(var r=Pe(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Kr(e,t){return t===void 0&&(t=!1),Yr(e)||de(e)||!ee(e)||(Me(e)>1&&(e.set=e.add=e.clear=e.delete=rc),Object.freeze(e),t&&be(e,function(r,n){return Kr(n,!0)},!0)),e}function rc(){G(2)}function Yr(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function X(e){var t=Or[e];return t||G(18,e),t}function nc(e,t){Or[e]||(Or[e]=t)}function Er(){return Ve}function nr(e,t){t&&(X("Patches"),e.u=[],e.s=[],e.v=t)}function ft(e){Cr(e),e.p.forEach(oc),e.p=null}function Cr(e){e===Ve&&(Ve=e.l)}function En(e){return Ve={p:[],l:Ve,h:e,m:!0,_:0}}function oc(e){var t=e[T];t.i===0||t.i===1?t.j():t.g=!0}function or(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||X("ES5").S(t,e,n),n?(r[T].P&&(ft(t),G(4)),ee(e)&&(e=dt(t,e),t.l||pt(t,e)),t.u&&X("Patches").M(r[T].t,e,t.u,t.s)):e=dt(t,r,[]),ft(t),t.u&&t.v(t.u,t.s),e!==zo?e:void 0}function dt(e,t,r){if(Yr(t))return t;var n=t[T];if(!n)return be(t,function(s,u){return Cn(e,n,t,s,u,r)},!0),t;if(n.A!==e)return t;if(!n.P)return pt(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Gr(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),be(i,function(s,u){return Cn(e,n,o,s,u,r,a)}),pt(e,o,!1),r&&e.u&&X("Patches").N(n,r,e.u,e.s)}return n.o}function Cn(e,t,r,n,o,i,a){if(de(o)){var s=dt(e,o,i&&t&&t.i!==3&&!Ce(t.R,n)?i.concat(n):void 0);if(No(r,n,s),!de(s))return;e.m=!1}else a&&r.add(o);if(ee(o)&&!Yr(o)){if(!e.h.D&&e._<1)return;dt(e,o),t&&t.A.l||pt(e,o)}}function pt(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Kr(t,r)}function ir(e,t){var r=e[T];return(r?ge(r):e)[t]}function Pn(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ae(e){e.P||(e.P=!0,e.l&&ae(e.l))}function ar(e){e.o||(e.o=Gr(e.t))}function Pr(e,t,r){var n=Vr(t)?X("MapSet").F(t,r):qr(t)?X("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:Er(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},u=s,c=qe;a&&(u=[s],c=Be);var l=Proxy.revocable(u,c),f=l.revoke,d=l.proxy;return s.k=d,s.j=f,d}(t,r):X("ES5").J(t,r);return(r?r.A:Er()).p.push(n),n}function ic(e){return de(e)||G(22,e),function t(r){if(!ee(r))return r;var n,o=r[T],i=Me(r);if(o){if(!o.P&&(o.i<4||!X("ES5").K(o)))return o.t;o.I=!0,n=On(r,i),o.I=!1}else n=On(r,i);return be(n,function(a,s){o&&tc(o.t,a)===s||No(n,a,t(s))}),i===3?new Set(n):n}(e)}function On(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Gr(e)}function ac(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var u=this[T];return qe.get(u,i)},set:function(u){var c=this[T];qe.set(c,i,u)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][T];if(!s.P)switch(s.i){case 5:n(s)&&ae(s);break;case 4:r(s)&&ae(s)}}}function r(i){for(var a=i.t,s=i.k,u=Pe(s),c=u.length-1;c>=0;c--){var l=u[c];if(l!==T){var f=a[l];if(f===void 0&&!Ce(a,l))return!0;var d=s[l],p=d&&d[T];if(p?p.t!==f:!Do(d,f))return!0}}var h=!!a[T];return u.length!==Pe(a).length+(h?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var u=0;u<a.length;u++)if(!a.hasOwnProperty(u))return!0;return!1}var o={};nc("ES5",{J:function(i,a){var s=Array.isArray(i),u=function(l,f){if(l){for(var d=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(d,""+p,e(p,!0));return d}var h=Bo(f);delete h[T];for(var m=Pe(h),y=0;y<m.length;y++){var w=m[y];h[w]=e(w,l||!!h[w].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(s,i),c={i:s?5:4,A:a?a.A:Er(),P:!1,I:!1,R:{},l:a,t:i,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,T,{value:c,writable:!0}),u},S:function(i,a,s){s?de(a)&&a[T].A===i&&t(i.p):(i.u&&function u(c){if(c&&typeof c=="object"){var l=c[T];if(l){var f=l.t,d=l.k,p=l.R,h=l.i;if(h===4)be(d,function(S){S!==T&&(f[S]!==void 0||Ce(f,S)?p[S]||u(d[S]):(p[S]=!0,ae(l)))}),be(f,function(S){d[S]!==void 0||Ce(d,S)||(p[S]=!1,ae(l))});else if(h===5){if(n(l)&&(ae(l),p.length=!0),d.length<f.length)for(var m=d.length;m<f.length;m++)p[m]=!1;else for(var y=f.length;y<d.length;y++)p[y]=!0;for(var w=Math.min(d.length,f.length),v=0;v<w;v++)d.hasOwnProperty(v)||(p[v]=!0),p[v]===void 0&&u(d[v])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var An,Ve,Hr=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",sc=typeof Map<"u",cc=typeof Set<"u",jn=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",zo=Hr?Symbol.for("immer-nothing"):((An={})["immer-nothing"]=!0,An),Rn=Hr?Symbol.for("immer-draftable"):"__$immer_draftable",T=Hr?Symbol.for("immer-state"):"__$immer_state",uc=""+Object.prototype.constructor,Pe=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Bo=Object.getOwnPropertyDescriptors||function(e){var t={};return Pe(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Or={},qe={get:function(e,t){if(t===T)return e;var r=ge(e);if(!Ce(r,t))return function(o,i,a){var s,u=Pn(i,a);return u?"value"in u?u.value:(s=u.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!ee(n)?n:n===ir(e.t,t)?(ar(e),e.o[t]=Pr(e.A.h,n,e)):n},has:function(e,t){return t in ge(e)},ownKeys:function(e){return Reflect.ownKeys(ge(e))},set:function(e,t,r){var n=Pn(ge(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=ir(ge(e),t),i=o==null?void 0:o[T];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Do(r,o)&&(r!==void 0||Ce(e.t,t)))return!0;ar(e),ae(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return ir(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,ar(e),ae(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=ge(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){G(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){G(12)}},Be={};be(qe,function(e,t){Be[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Be.deleteProperty=function(e,t){return Be.set.call(this,e,t,void 0)},Be.set=function(e,t,r){return qe.set.call(this,e[0],t,r,e[0])};var lc=function(){function e(r){var n=this;this.O=jn,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var u=n;return function(m){var y=this;m===void 0&&(m=s);for(var w=arguments.length,v=Array(w>1?w-1:0),S=1;S<w;S++)v[S-1]=arguments[S];return u.produce(m,function(E){var $;return($=i).call.apply($,[y,E].concat(v))})}}var c;if(typeof i!="function"&&G(6),a!==void 0&&typeof a!="function"&&G(7),ee(o)){var l=En(n),f=Pr(n,o,void 0),d=!0;try{c=i(f),d=!1}finally{d?ft(l):Cr(l)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(m){return nr(l,a),or(m,l)},function(m){throw ft(l),m}):(nr(l,a),or(c,l))}if(!o||typeof o!="object"){if((c=i(o))===void 0&&(c=o),c===zo&&(c=void 0),n.D&&Kr(c,!0),a){var p=[],h=[];X("Patches").M(o,c,p,h),a(p,h)}return c}G(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(c){for(var l=arguments.length,f=Array(l>1?l-1:0),d=1;d<l;d++)f[d-1]=arguments[d];return n.produceWithPatches(c,function(p){return o.apply(void 0,[p].concat(f))})};var a,s,u=n.produce(o,i,function(c,l){a=c,s=l});return typeof Promise<"u"&&u instanceof Promise?u.then(function(c){return[c,a,s]}):[u,a,s]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){ee(r)||G(8),de(r)&&(r=ic(r));var n=En(this),o=Pr(this,r,void 0);return o[T].C=!0,Cr(n),o},t.finishDraft=function(r,n){var o=r&&r[T],i=o.A;return nr(i,n),or(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!jn&&G(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=X("Patches").$;return de(r)?a(r,n):this.produce(r,function(s){return a(s,n)})},e}(),U=new lc,Fo=U.produce;U.produceWithPatches.bind(U);U.setAutoFreeze.bind(U);U.setUseProxies.bind(U);U.applyPatches.bind(U);U.createDraft.bind(U);U.finishDraft.bind(U);function Ge(e){"@babel/helpers - typeof";return Ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ge(e)}function fc(e,t){if(Ge(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ge(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dc(e){var t=fc(e,"string");return Ge(t)==="symbol"?t:String(t)}function pc(e,t,r){return t=dc(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function In(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function kn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?In(Object(r),!0).forEach(function(n){pc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):In(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function D(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Tn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),sr=function(){return Math.random().toString(36).substring(7).split("").join(".")},ht={INIT:"@@redux/INIT"+sr(),REPLACE:"@@redux/REPLACE"+sr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+sr()}};function hc(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Uo(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(D(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(D(1));return r(Uo)(e,t)}if(typeof e!="function")throw new Error(D(2));var o=e,i=t,a=[],s=a,u=!1;function c(){s===a&&(s=a.slice())}function l(){if(u)throw new Error(D(3));return i}function f(m){if(typeof m!="function")throw new Error(D(4));if(u)throw new Error(D(5));var y=!0;return c(),s.push(m),function(){if(y){if(u)throw new Error(D(6));y=!1,c();var v=s.indexOf(m);s.splice(v,1),a=null}}}function d(m){if(!hc(m))throw new Error(D(7));if(typeof m.type>"u")throw new Error(D(8));if(u)throw new Error(D(9));try{u=!0,i=o(i,m)}finally{u=!1}for(var y=a=s,w=0;w<y.length;w++){var v=y[w];v()}return m}function p(m){if(typeof m!="function")throw new Error(D(10));o=m,d({type:ht.REPLACE})}function h(){var m,y=f;return m={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(D(11));function S(){v.next&&v.next(l())}S();var E=y(S);return{unsubscribe:E}}},m[Tn]=function(){return this},m}return d({type:ht.INIT}),n={dispatch:d,subscribe:f,getState:l,replaceReducer:p},n[Tn]=h,n}function mc(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:ht.INIT});if(typeof n>"u")throw new Error(D(12));if(typeof r(void 0,{type:ht.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(D(13))})}function gc(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),a;try{mc(r)}catch(s){a=s}return function(u,c){if(u===void 0&&(u={}),a)throw a;for(var l=!1,f={},d=0;d<i.length;d++){var p=i[d],h=r[p],m=u[p],y=h(m,c);if(typeof y>"u")throw c&&c.type,new Error(D(14));f[p]=y,l=l||y!==m}return l=l||i.length!==Object.keys(u).length,l?f:u}}function mt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function vc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(D(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(u){return u(a)});return i=mt.apply(void 0,s)(o.dispatch),kn(kn({},o),{},{dispatch:i})}}}var gt="NOT_FOUND";function yc(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:gt},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function bc(e,t){var r=[];function n(s){var u=r.findIndex(function(l){return t(s,l.key)});if(u>-1){var c=r[u];return u>0&&(r.splice(u,1),r.unshift(c)),c.value}return gt}function o(s,u){n(s)===gt&&(r.unshift({key:s,value:u}),r.length>e&&r.pop())}function i(){return r}function a(){r=[]}return{get:n,put:o,getEntries:i,clear:a}}var wc=function(t,r){return t===r};function Sc(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,i=0;i<o;i++)if(!e(r[i],n[i]))return!1;return!0}}function xc(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?wc:n,i=r.maxSize,a=i===void 0?1:i,s=r.resultEqualityCheck,u=Sc(o),c=a===1?yc(u):bc(a,u);function l(){var f=c.get(arguments);if(f===gt){if(f=e.apply(null,arguments),s){var d=c.getEntries(),p=d.find(function(h){return s(h.value,f)});p&&(f=p.value)}c.put(arguments,f)}return f}return l.clearCache=function(){return c.clear()},l}function $c(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function Ec(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];var c=0,l,f={memoizeOptions:void 0},d=s.pop();if(typeof d=="object"&&(f=d,d=s.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var p=f,h=p.memoizeOptions,m=h===void 0?r:h,y=Array.isArray(m)?m:[m],w=$c(s),v=e.apply(void 0,[function(){return c++,d.apply(null,arguments)}].concat(y)),S=e(function(){for(var $=[],j=w.length,P=0;P<j;P++)$.push(w[P].apply(null,arguments));return l=v.apply(null,$),l});return Object.assign(S,{resultFunc:d,memoizedResultFunc:v,dependencies:w,lastResult:function(){return l},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),S};return o}var _=Ec(xc);function Wo(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var Vo=Wo();Vo.withExtraArgument=Wo;const _n=Vo;var qo=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Cc=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(c[0]===6&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(l){c=[6,l],o=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Te=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Pc=Object.defineProperty,Oc=Object.defineProperties,Ac=Object.getOwnPropertyDescriptors,Mn=Object.getOwnPropertySymbols,jc=Object.prototype.hasOwnProperty,Rc=Object.prototype.propertyIsEnumerable,Ln=function(e,t,r){return t in e?Pc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ue=function(e,t){for(var r in t||(t={}))jc.call(t,r)&&Ln(e,r,t[r]);if(Mn)for(var n=0,o=Mn(t);n<o.length;n++){var r=o[n];Rc.call(t,r)&&Ln(e,r,t[r])}return e},cr=function(e,t){return Oc(e,Ac(t))},Ic=function(e,t,r){return new Promise(function(n,o){var i=function(u){try{s(r.next(u))}catch(c){o(c)}},a=function(u){try{s(r.throw(u))}catch(c){o(c)}},s=function(u){return u.done?n(u.value):Promise.resolve(u.value).then(i,a)};s((r=r.apply(e,t)).next())})},kc=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?mt:mt.apply(null,arguments)};function Tc(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var _c=function(e){qo(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Te([void 0],r[0].concat(this)))):new(t.bind.apply(t,Te([void 0],r.concat(this))))},t}(Array),Mc=function(e){qo(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Te([void 0],r[0].concat(this)))):new(t.bind.apply(t,Te([void 0],r.concat(this))))},t}(Array);function Ar(e){return ee(e)?Fo(e,function(){}):e}function Lc(e){return typeof e=="boolean"}function Nc(){return function(t){return Dc(t)}}function Dc(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new _c;return r&&(Lc(r)?n.push(_n):n.push(_n.withExtraArgument(r.extraArgument))),n}var zc=!0;function Bc(e){var t=Nc(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,a=i===void 0?t():i,s=r.devTools,u=s===void 0?!0:s,c=r.preloadedState,l=c===void 0?void 0:c,f=r.enhancers,d=f===void 0?void 0:f,p;if(typeof o=="function")p=o;else if(Tc(o))p=gc(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var m=vc.apply(void 0,h),y=mt;u&&(y=kc(ue({trace:!zc},typeof u=="object"&&u)));var w=new Mc(m),v=w;Array.isArray(d)?v=Te([m],d):typeof d=="function"&&(v=d(w));var S=y.apply(void 0,v);return Uo(p,l,S)}function le(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return ue(ue({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function Go(e){var t={},r=[],n,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return r.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function Fc(e){return typeof e=="function"}function Uc(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?Go(t):[t,r,n],i=o[0],a=o[1],s=o[2],u;if(Fc(e))u=function(){return Ar(e())};else{var c=Ar(e);u=function(){return c}}function l(f,d){f===void 0&&(f=u());var p=Te([i[d.type]],a.filter(function(h){var m=h.matcher;return m(d)}).map(function(h){var m=h.reducer;return m}));return p.filter(function(h){return!!h}).length===0&&(p=[s]),p.reduce(function(h,m){if(m)if(de(h)){var y=h,w=m(y,d);return w===void 0?h:w}else{if(ee(h))return Fo(h,function(v){return m(v,d)});var w=m(h,d);if(w===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}return h},f)}return l.getInitialState=u,l}function Wc(e,t){return e+"/"+t}function Ko(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:Ar(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},a={},s={};o.forEach(function(l){var f=n[l],d=Wc(t,l),p,h;"reducer"in f?(p=f.reducer,h=f.prepare):p=f,i[l]=p,a[d]=p,s[l]=h?le(d,h):le(d)});function u(){var l=typeof e.extraReducers=="function"?Go(e.extraReducers):[e.extraReducers],f=l[0],d=f===void 0?{}:f,p=l[1],h=p===void 0?[]:p,m=l[2],y=m===void 0?void 0:m,w=ue(ue({},d),a);return Uc(r,function(v){for(var S in w)v.addCase(S,w[S]);for(var E=0,$=h;E<$.length;E++){var j=$[E];v.addMatcher(j.matcher,j.reducer)}y&&v.addDefaultCase(y)})}var c;return{name:t,reducer:function(l,f){return c||(c=u()),c(l,f)},actions:s,caseReducers:i,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var Vc="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",qc=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=Vc[Math.random()*64|0];return t},Gc=["name","message","stack","code"],ur=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Nn=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Kc=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=Gc;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=le(t+"/fulfilled",function(c,l,f,d){return{payload:c,meta:cr(ue({},d||{}),{arg:f,requestId:l,requestStatus:"fulfilled"})}}),i=le(t+"/pending",function(c,l,f){return{payload:void 0,meta:cr(ue({},f||{}),{arg:l,requestId:c,requestStatus:"pending"})}}),a=le(t+"/rejected",function(c,l,f,d,p){return{payload:d,error:(n&&n.serializeError||Kc)(c||"Rejected"),meta:cr(ue({},p||{}),{arg:f,requestId:l,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(l,f,d){var p=n!=null&&n.idGenerator?n.idGenerator(c):qc(),h=new s,m;function y(v){m=v,h.abort()}var w=function(){return Ic(this,null,function(){var v,S,E,$,j,P,pe;return Cc(this,function(te){switch(te.label){case 0:return te.trys.push([0,4,,5]),$=(v=n==null?void 0:n.condition)==null?void 0:v.call(n,c,{getState:f,extra:d}),Hc($)?[4,$]:[3,2];case 1:$=te.sent(),te.label=2;case 2:if($===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return j=new Promise(function(F,he){return h.signal.addEventListener("abort",function(){return he({name:"AbortError",message:m||"Aborted"})})}),l(i(p,c,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:p,arg:c},{getState:f,extra:d}))),[4,Promise.race([j,Promise.resolve(r(c,{dispatch:l,getState:f,extra:d,requestId:p,signal:h.signal,abort:y,rejectWithValue:function(F,he){return new ur(F,he)},fulfillWithValue:function(F,he){return new Nn(F,he)}})).then(function(F){if(F instanceof ur)throw F;return F instanceof Nn?o(F.payload,p,c,F.meta):o(F,p,c)})])];case 3:return E=te.sent(),[3,5];case 4:return P=te.sent(),E=P instanceof ur?a(null,p,c,P.payload,P.meta):a(P,p,c),[3,5];case 5:return pe=n&&!n.dispatchConditionRejection&&a.match(E)&&E.meta.condition,pe||l(E),[2,E]}})})}();return Object.assign(w,{abort:y,requestId:p,arg:c,unwrap:function(){return w.then(Yc)}})}}return Object.assign(u,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function Yc(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Hc(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Xr="listenerMiddleware";le(Xr+"/add");le(Xr+"/removeAll");le(Xr+"/remove");var Dn;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ac();const Xc=(e,t)=>{if(!t)return Math.round(e);const r=Math.pow(10,t);return Math.round(e*r)/r},Yo=(e,t,r)=>Math.min(Math.max(e,t),r),jr=(e,t,r,n)=>{var i;let o=(i=t.find(a=>a.id===e.id))==null?void 0:i.value;return o===void 0&&(o=e.value),n?o:Math.round(Yo(o+e.perSecond*r,0,e.max)*100)/100},Jc=(e,t,r,n)=>{const o=(n-r)/1e3;return o<=0?e.map(i=>({id:i.id,value:jr(i,t,o,!0),max:i.max,label:i.label})):e.map(i=>({id:i.id,value:jr(i,t,o),max:i.max,label:i.label}))},Zc=(e,t,r,n)=>{const o=n&&r?(n-r)/1e3:0;return e.map(i=>({id:i.id,value:jr(i,t,o)}))},zn=(...e)=>{},Ke=e=>Array.isArray(e)?e:[e],Qc=(e,t)=>{if(e.length===0)return!0;for(let r=0;r<e.length;r++)if(e[r].when.length===0||e[r].when.filter(n=>t.indexOf(n)>-1).length===e[r].when.length)return vt(e[r].then);return!1},eu=(e,t)=>{for(let r=0;r<e.length;r++){let n=ru(e[r],t);if(n)return n}return null},vt=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e,tu=(e,t,r)=>e.when.find(n=>!su(n,t,r))?null:vt(e.then),ru=(e,t)=>e.when.find(r=>t.indexOf(r)===-1)?null:vt(e.then),nu=e=>e.map(t=>({when:Ke(t.when),then:t.then})),ou=e=>e.map(t=>({when:Ke(t.when),then:Ke(t.then)})),iu=e=>e?e.map(t=>({when:Ke(t.when).map(n=>au(n)).filter(n=>n!==null),then:Ke(t.then)})):[],Ho={"=":(e,t)=>e===t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t},au=e=>{try{const t=e.split("_"),r=t[0],o=t[1].split("%");return Ho[r]?{condition:r,criteria:Number(o[0]),isPercent:o.length>1}:(console.error(`parseExpressionString(): invalid condition "${r}" from expressionString "${e}"`),null)}catch{return console.error(`could not parse expressionString "${e}", expressionStrings must use one 
    of the following operators: [<=,<,=,>,>=] and follow a format like "<=_10%"`),null}},su=(e,t,r)=>{try{const n=e.isPercent?Math.round(t/r*100):t;return Ho[e.condition](n,e.criteria)}catch{return console.log(`could not evaluate "whenNumber:${e}", "reference:${t}", "referenceMax:${t}"`),null}},cu={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},uu={activeIdx:-1,pets:[],interactions:[],cachedPets:[],lastRendered:new Date().getTime(),lastSaved:new Date().getTime()},lu=(e,t)=>({stats:mu(e.logic.stats,t),statuses:e.logic.statuses||[],behaviorRules:ou(e.logic.behaviorRules),behaviors:fu(e.logic.behaviors||[],e.baseUrl),interactions:hu(e.logic.interactions)}),fu=(e,t)=>e.map(r=>({...r,imageUrl:r.image?`${t}/${r.image}`:r.imageUrl||"",position:r.position?r.position:"center",offsetX:r.offsetX?r.offsetX:0,offsetY:r.offsetY?r.offsetY:0})),du=(e=[])=>e.map(t=>({statId:t.statId,value:t.value||0})),pu=e=>e?nu(e):[],hu=e=>e?e.map(t=>({id:t.id,label:t.label,cooldown:t.cooldown,changeStats:du(t.changeStats),availability:pu(t.availability)})):[],mu=(e,t)=>e.map(r=>{const n=t==null?void 0:t.stats.find(i=>i.id===r.id),o=iu(r.statEffects);return n?{...r,value:n.value,statEffects:o}:{...r,statEffects:o}}),gu=(e,t,r)=>{const n=(o,i,a)=>{var l;const s=a.find(f=>f.statId===o.id);if(!s)return o.value;const u=o.value+s.value,c=(l=i.find(f=>o.id===f.id))==null?void 0:l.max;return c?Yo(u,0,c):u>0?u:0};return e.map(o=>({id:o.id,value:n(o,t,r)}))},et=(e,t)=>{const r=t!==void 0?t:new Date().getTime();e.lastSaved=r,e.lastRendered=r},Xo=Ko({name:"petStore",initialState:uu,reducers:{pingStore:(e,t)=>{const r=t.payload.time;e.lastRendered=r,t.payload.doSave&&(e.lastSaved=r)},clearSave:()=>{window.localStorage.clear(),window.location.reload()},setActiveId:(e,t)=>{const r=e.pets.findIndex(n=>n.id===t.payload);r===-1?(console.log(`Cannot find pet with id "${t.payload}"`),e.activeIdx=0,et(e)):(e.activeIdx=r,et(e))},setActiveIdx:(e,t)=>{e.activeIdx=t.payload,et(e)},setCachedPayload:(e,t)=>{const r=t.payload;e.cachedPets=r.pets},restoreInteractionFromSave:(e,t)=>{const r=t.payload;e.interactions.find(n=>n.id===r.id)||(console.log(`restoreInteractionFromSave ${r.id} with ${(r.endAt-new Date().getTime())/1e3} secs left`),e.interactions.push(r))},addNewInteractionEvent:(e,t)=>{var i;const{interaction:r,time:n}=t.payload;let o=!1;if(r.cooldown&&(o=!0,e.interactions.find(a=>a.id===r.id)||e.interactions.push({id:r.id,startAt:n,endAt:n+(r.cooldown||0)})),r.changeStats.length>0){o=!0;const a=e.pets[e.activeIdx],s=e.cachedPets.findIndex(u=>u.id===a.id);if(s>-1){const u=((i=e.cachedPets[s])==null?void 0:i.stats)||[],c=a.logic.stats;e.cachedPets[s]={...e.cachedPets[s],stats:gu(u,c,r.changeStats)}}}o&&et(e,n)},removeInteractionEvent:(e,t)=>{const r=t.payload;e.interactions=e.interactions.filter(n=>n.id!==r)},createPet:(e,t)=>{zn(`

createPet`,t.payload);const{petDefinition:r,initialState:n,isActive:o}=t.payload,i=e.pets.find(c=>c.id===r.id),a=new Date().getTime(),s=lu(r,n);zn(`>> createPet: ${r.id}, isActive? ${o}, beingTracked? ${n==null?void 0:n.beingTracked}`);const u={...r,logic:s,bornOn:(n==null?void 0:n.bornOn)||a,bgImage:r.backgroundImage?`${r.baseUrl}/${r.backgroundImage}`:null,bgColor:r.backgroundColor||null};i?e.pets=e.pets.map(c=>c.id===r.id?u:c):e.pets.push(u),n&&(e.cachedPets.find(c=>c.id===(n==null?void 0:n.id))||(e.cachedPets=[...e.cachedPets,{...n,lastSaved:(n==null?void 0:n.lastSaved)||a}]))}}}),{pingStore:Bn,createPet:vu,setActiveIdx:Jo,setActiveId:yu,clearSave:Zo,setCachedPayload:bu,addNewInteractionEvent:wu,restoreInteractionFromSave:Su,removeInteractionEvent:Qo}=Xo.actions,ei=e=>e.petStore.activeIdx,ti=e=>e.petStore.pets,xu=e=>e.petStore.interactions,Kt=e=>e.petStore.cachedPets,$u=e=>e.petStore.lastRendered,Eu=e=>e.petStore.lastSaved,ri=_([Eu],e=>e),Cu=_([$u],e=>e),J=_([ti,ei],(e,t)=>e[t]||null),Jr=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.stats)||[]}),Pu=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.statuses)||[]}),Ou=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.interactions)||[]}),Au=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviorRules)||[]}),ju=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviors)||[]}),Ru=_([J],e=>({imageUrl:e==null?void 0:e.bgImage,backgroundColor:e==null?void 0:e.bgColor})),Iu=_([Kt],e=>e);_([Kt],e=>e.map(t=>t.stats));const ni=_([Kt,J],(e,t)=>{var r;return t?((r=e.find(n=>n.id===t.id))==null?void 0:r.stats)||[]:[]}),oi=_([J],e=>e?{id:e.id,name:e.name,level:e.level,bio:e.bio,bornOn:e.bornOn}:null),ii=_([xu],e=>e),ai=_([Kt,J],(e,t)=>{var r;return t&&((r=e.find(n=>n.id===t.id))==null?void 0:r.lastSaved)||0}),si=_([Jr,ni,ai,Cu],(e,t,r,n)=>Jc(e,t,r,n)),Zr=_([si,Jr],(e,t)=>{const r=o=>e.find(i=>i.id===o),n=[];for(let o=0;o<t.length;o++){const i=r(t[o].id);if(i)for(let a=0;a<t[o].statEffects.length;a++){const s=tu(t[o].statEffects[a],i.value,i.max);s&&n.indexOf(s)===-1&&n.push(s)}}return n.map(o=>o).reverse()}),ku=_([Zr,Pu],(e,t)=>e.map(r=>t.find(n=>n.id===r)).filter(r=>!!r)),Tu=_([Zr,Au,ju],(e,t,r)=>{const n=eu(t,e);return r.find(o=>o.id===n)||null}),_u=_([Ou,ii,Zr],(e,t,r)=>e.map(n=>{const o=t.find(a=>a.id===n.id),i=Qc(n.availability,r);return{id:n.id,label:n.label,startAt:(o==null?void 0:o.startAt)||0,endAt:(o==null?void 0:o.endAt)||0,enabled:i,definition:n,cooldownStatus:o}})),Mu=_([ti,ei],(e,t)=>e.map((r,n)=>({name:r.name,id:r.id,isActive:n===t}))),Lu=_([Jr,ni,ai,ri],(e,t,r,n)=>r===n?null:Zc(e,t,r,n)),Nu=()=>{try{return JSON.parse(global.localStorage.getItem("browserpet"))}catch{return console.log('no localStorage entry found for "browserpet"'),null}},Du=()=>{try{return Nu().pets}catch{return[]}};_([Du],e=>e);const zu=_([ri,Lu,J,ii,Iu],(e,t,r,n,o)=>{if(!t)return null;if(!r)return cu;const i=o.findIndex(s=>s.id===r.id);let a=[];return i>-1?a=o.map(s=>{if(s.id===r.id){const u=s.beingTracked?t:s.stats;return{id:r.id,stats:u,bornOn:r.bornOn,lastSaved:e,beingTracked:!0}}return{...s,beingTracked:!1}}):a=o.concat([{id:r.id,stats:t,bornOn:r.bornOn,lastSaved:e,beingTracked:!1}]),{config:{activePet:(r==null?void 0:r.id)||"",lastSaved:e},interactions:n,pets:a}}),Bu=Xo.reducer,Fu=x.div`
  padding:1rem;
  color: ${C("blue")};
  min-width:30rem;
`,Uu=x.h1`
  font-size:2rem;
  text-align:left;
`,Fn=x.button`
  border:0;
  margin:0;
  font-size:2rem;
  padding:.5rem 1rem;
  background-color: ${C("green")};
  border: .5rem solid ${C("white")};
  border-radius: 1rem;

  margin-top:2rem;
  text-align:center;
  cursor:pointer;
`,Wu=()=>{const e=we();return g.jsxs(Fu,{children:[g.jsx(Uu,{children:"About BrowserPet"}),g.jsx("p",{children:"© Tom Yancey 2022"}),g.jsx(Fn,{onClick:()=>{},children:"BACK"}),g.jsx(Fn,{onClick:()=>{e(Zo())},children:"Clear Save"})]})};function Un(e,t,r){const n=b.useRef();b.useEffect(()=>{const o=(r==null?void 0:r.current)||window;if(!(o&&o.addEventListener))return;n.current!==t&&(n.current=t);const i=a=>{n!=null&&n.current&&n.current(a)};return o.addEventListener(e,i),()=>{o.removeEventListener(e,i)}},[e,r,t])}function ci(e,t){const r=()=>{if(typeof window>"u")return t;try{const s=window.localStorage.getItem(e);return s?Vu(s):t}catch(s){return console.warn(`Error reading localStorage key “${e}”:`,s),t}},[n,o]=b.useState(r),i=s=>{typeof window>"u"&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const u=s instanceof Function?s(n):s;window.localStorage.setItem(e,JSON.stringify(u)),o(u),window.dispatchEvent(new Event("local-storage"))}catch(u){console.warn(`Error setting localStorage key “${e}”:`,u)}};b.useEffect(()=>{o(r())},[]);const a=()=>{o(r())};return Un("storage",a),Un("local-storage",a),[n,i]}function Vu(e){try{return e==="undefined"?void 0:JSON.parse(e??"")}catch{console.log("parsing error on",{value:e});return}}const qu={},Gu=Ko({name:"ui",initialState:qu,reducers:{}}),Ku=Gu.reducer,Yu=Bc({reducer:{petStore:Bu,ui:Ku}}),ui={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},Hu=async(e,t,r)=>{const n=await Xu(e),o=await Zu(n);tl(o,t,r)},Xu=async e=>(await Ju(e).then(r=>r.pets.map(n=>({id:n.id,baseUrl:n.baseUrl})))).filter(r=>!!r),Ju=async e=>{try{const t=await fetch(e,{mode:"cors"});if(!t.ok)return null;const r=await t.text();return JSON.parse(r)}catch(t){return console.error(`Error fetching or parsing manifest from ${e}`,t),null}},Zu=async e=>{const t=[];return e.forEach(n=>t.push(Qu(n))),(await Promise.all(t)).filter(n=>!!n)},Qu=e=>new Promise(t=>t(el(e))),el=async e=>{const t=e.baseUrl+"/data.json";try{const r=await fetch(t,{mode:"cors"});if(!r.ok)return console.error(`bad response from ${t}`),null;const n=JSON.parse(await r.text());return n.baseUrl=e.baseUrl,n}catch(r){return console.error(`Error fetching or parsing pet manifest from ${t}`,r),null}},tl=(e,t,r)=>{const n=new Date().getTime();let o="";r.config.activePet&&(o=r.config.activePet),e.forEach(i=>{const a=(r==null?void 0:r.pets.find(s=>s.id===i.id))||null;!o&&a&&r.config.activePet===a.id&&(o=a.id),t(vu({isActive:o===(a==null?void 0:a.id),petDefinition:i,initialState:a}))}),t(o?yu(o):Jo(0)),r.interactions.filter(i=>i.endAt>n).forEach(i=>{t(a=>{a(Su(i)),window.setTimeout(()=>{a(Qo(i.id))},i.endAt-n)})})},rl=()=>{const e=we(),[t,r]=b.useState(!1),[n]=ci("browserpet",ui);return b.useEffect(()=>{t||(r(!0),Hu("data/pet-manifest.json",e,n))},[t,n,r,e]),null};function nl(e,t){const r=b.useRef(e);b.useLayoutEffect(()=>{r.current=e},[e]),b.useEffect(()=>{if(!t&&t!==0)return;const n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[t])}const Wn=2e3,ol=2e3,il=()=>{const[e,t]=b.useState(0),r=we();return nl(()=>{const n=new Date().getTime(),o=e+1;t(o),o*Wn%ol===0?r(Bn({time:n,doSave:!0})):r(Bn({time:n,doSave:!1}))},Wn),null};let Vn=0;const al=()=>{const[,e]=ci("browserpet",ui),t=Q(zu),r=we();return b.useEffect(()=>{t&&t.config.activePet&&(e(()=>t),Vn!==t.config.lastSaved&&(Vn=t.config.lastSaved,r(bu(t))))},[t,r,e]),null},sl=()=>g.jsxs(g.Fragment,{children:[g.jsx(al,{}),g.jsx(rl,{}),g.jsx(il,{})]}),cl=x.div`
  display:inline-block;
  width:calc(50% - 1rem);
  margin-right:1rem;
`,ul=x.h4`
  font-size: 1rem;
`,ll=x.div`
  position:relative;
  border:.5rem solid ${C("white")};
  border-radius: 1rem;
  overflow:hidden;
  padding:.25rem .5rem;
  text-align:center;
  background-color: ${C("white")};

  box-shadow: 0px -2px 4px ${lt("white",-40)};
`,fl=x.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  z-index:1;
`,dl=x.div`
  position:absolute;
  top:0;
  left:0;
  height:100%; 
  transition: width .3s ease-in-out, background-color .5s ease-in-out;
  background-color: ${C("blue")};
`,pl=x.p`
`,hl=x.p`
  opacity:.5;
  margin-top:.125rem;
  margin-bottom:0rem;
  font-size:1.25rem;
`,ml=({label:e,max:t,value:r,hideStats:n=!1})=>{const o=Math.round(r/t*1e3)/10;return g.jsxs(cl,{children:[g.jsx(ul,{children:e.toLocaleUpperCase()}),g.jsxs(ll,{children:[!n&&g.jsxs(fl,{children:[g.jsx(pl,{children:`${Xc(r)} / ${t}`}),g.jsx(hl,{children:`${o}%`})]}),g.jsx(dl,{style:{width:`${o}%`}})]})]})},gl=x.div`
  width:100%;
`,vl=()=>{const e=Q(si);return g.jsx(gl,{children:e.map((t,r)=>g.jsx(ml,{label:t.label,max:t.max,value:t.value},r))})},yl=x.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`,bl=x.div`
  background-color:${C("white")};
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`,wl=x.div`
  background-color:${C("red")};
  position:absolute;
  height:100%;
  left:0;
  width: ${e=>e.$startWidth};

  &.full{
    width:100% !important;
    background-color: ${C("blue")};
  }
  z-index:1;
`,Sl=({startProgress:e,duration:t})=>{const[r,n]=b.useState(!1);return b.useEffect(()=>{r||window.setTimeout(()=>n(!0),1)},[r,n]),g.jsxs(yl,{children:[g.jsx(wl,{$startWidth:`${e*100}%`,className:r?"full":"",style:{transition:`all ${t}s linear`}}),g.jsx(bl,{})]})},qn=x.li`
  text-align:center;

  ${e=>!e.$isEnabled&&Se`
    opacity: .5;
    pointer-events:none;
  `}
`,li=x.div`
  font-weight:bold;
  font-size: 2rem;

  padding:1rem .5rem;

  position:relative;
  overflow: hidden;
  cursor:pointer;

  
  background-color: ${C("blue")};
  color: ${C("white")};
  border: .5rem solid ${C("white")};
  border-radius: 1rem;
`,xl=x(li)`
  background-color: ${C("red")};
  border-color: ${C("white")};
  color: ${C("white")};

  cursor:not-allowed;
`,Gn=x.p`
  display:block;
  position:relative;
  z-index:2;
  font-size: 2rem;
`,$l=({cooldownStatus:e,isEnabled:t,interaction:r,onClickHandler:n})=>{if(e){const o=e.endAt-e.startAt,i=(o-(e.endAt-new Date().getTime()))/o,a=(e.endAt-new Date().getTime())/1e3;return g.jsx(qn,{$isEnabled:t,children:g.jsxs(xl,{children:[g.jsx(Gn,{children:r.label}),g.jsx(Sl,{startProgress:i,duration:a})]})})}else return g.jsx(qn,{$isEnabled:t,onClick:()=>n&&n(),children:g.jsx(li,{children:g.jsx(Gn,{children:`${r.label}`})})})},El=x.ul`
  border-bottom: .25rem dashed black;
  display: flex;
  flex-wrap: wrap;

  >li{
    margin:.5rem;
    margin-left: .25rem;
    &:first-child{
      margin-left: .5rem;
    }
    flex: 1 auto;
    list-style:none;
  }
`,Cl=()=>{const e=Q(_u,at),t=we(),r=n=>{const o=new Date().getTime();t(i=>{i(wu({interaction:n,time:o})),n.cooldown&&window.setTimeout(()=>{i(Qo(n.id))},n.cooldown)})};return g.jsx(El,{children:e.map(n=>g.jsx($l,{cooldownStatus:n.cooldownStatus,isEnabled:n.enabled,interaction:n.definition,onClickHandler:()=>r(n.definition)},n.id))})},Pl=x.div`
  position:absolute;
  left:0;
  right:0;
  top:-.5rem;
  bottom:0;

  background-color:${C("green")};
  border:.5rem solid ${C("white")};
  border-radius:2rem;
  overflow:hidden;

  box-shadow: .25rem .25rem .55rem .45rem ${C("grey")};
`,Ol=x.div`
  width:100%;
  height:16rem;

  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight:500;
  padding: 1rem;
  padding-top: .5rem ;
  
  color: black;
  

  overflow-y:auto;

  hr{
    border-color:${C("blue")};
    border-style:dashed;
    margin-top:.5rem;
    margin-bottom:.5rem;

    margin-left:10%;
    width:80%;
  }
`,Al=x.div`
  width:100%;
`,jl=x.h4`
  margin-top:1rem;
  margin-bottom:.5rem;
`,Rl=x.p`
  margin-top:1rem;
  padding-left:1rem;
`,Il=x.div`
  min-height:5rem;
  width:100%;
`,kl=()=>{const e=Q(oi);return e?g.jsxs(Pl,{children:[g.jsx(Il,{children:g.jsx(Cl,{})}),g.jsxs(Ol,{children:[g.jsx(vl,{}),g.jsx("hr",{}),g.jsxs(Al,{children:[g.jsx(jl,{children:"Description"}),g.jsx(Rl,{children:e.bio})]})]})]}):null},Tl=x.div`
  color:${C("black")};
  position:absolute;
  right:0;
  bottom:1rem;
  z-index:1;
`,_l=x.ul`
  max-width: 14rem;
  text-align: right;
`,Ml=x.li`
  /* display:inline-block; */
  white-space:nowrap;
  text-align:right;
  z-index:1;
  
  list-style:none;
  color:black;
  margin-top: -.5rem;
  margin-right: -1rem;
  font-weight:bold;
  font-size: 2rem;

  /* border-top-left-radius: 0; */
  border-bottom-right-radius: 0;
  padding:.5rem 1rem;

  position:absolute;
  bottom:0;
  right:0;

  /* transition: transform .2s ease-in-out, bottom .2s ease-out; */
  -webkit-transition: all 0.2s cubic-bezier(.72,1.79,.4,.8);
  transition: all 0.2s cubic-bezier(.72,1.79,.4,.8);
  ${e=>ec(e.$bubbleColors[0],e.$bubbleColors[1])}
`,Ll=e=>{switch(e){case"alert":return["red","yellow"];case"warning":return["yellow","red"];case"reward":return["green","white"];default:return["white","red"]}},Nl=()=>-5+Math.random()*5,Dl=e=>e*35,zl=()=>{const e=Q(ku,at);return g.jsx(Tl,{children:g.jsx(_l,{children:e.map((t,r)=>g.jsx(Ml,{id:t.id,$bubbleColors:Ll(t.alertType),style:{bottom:Dl(r),transform:`rotate(${Nl()}deg)`},children:t.label},t.id))})})},Kn=x.div`
  position:absolute;
  left:0;
  right:0;
  top:-2rem;
  padding-top:2rem;
  bottom:-2rem;
  padding-bottom:2rem;
  background-color: ${C("blue")};
  border:.5rem solid ${C("white")};

  ${e=>e.$bgImageUrl&&Se`
    background-size:cover;
    background-position: center;
    background-image:url(${e.$bgImageUrl});
  `}
`,Bl=x.div`
  background-size:contain;
  background-repeat:no-repeat;
  background-position:center;
  width:100%;
  height:100%;
  text-align:center;

  position:absolute;
  bottom:0;
  left:0;
`,Fl=x.p`
  font-size:2rem;
  color:${C("white")};
  opacity: .5;

  position:absolute;
  top:1rem;
  right:1rem;
`,Ul=()=>{const e=Q(Tu,at),{imageUrl:t,backgroundColor:r}=Q(Ru,at);if(!e)return g.jsx(Kn,{$bgImageUrl:t});const n={backgroundImage:`url(${e.imageUrl})`,backgroundPosition:`${e.position}`,left:`${e.offsetX}px`,bottom:`${e.offsetY}px`,backgroundColor:r||"initial"};return g.jsx(Kn,{$bgImageUrl:t,children:g.jsxs(g.Fragment,{children:[g.jsx(Fl,{children:`behavior: ${e.id}`}),g.jsx(zl,{}),g.jsx(Bl,{style:n})]})})},Wl=x.div`
  width:100%;
  height:100%;
  
  color:${C("white")};
  background-color: ${C("blue")};
  border:.5rem solid ${C("white")};
  border-radius: 1rem;
  position:relative;
  padding:0rem 1rem;

  display:flex;
  box-shadow: .25rem .25rem .25rem .05rem ${C("grey")};

  >div{
    display:inline-block;
    vertical-align:middle;
    height:100%;
  }
`,Vl=x.div`
  flex:1;

  >p{
    font-style:italic;
  }

  >h4{
    margin-top:-.5rem;
    margin-bottom: -.5rem;
  }
`,ql=x.div`
  text-align:right;
  color: ${C("white")};
  
  >h4{
    margin:0;
    line-height: 5rem;
  }
`,Gl=x.h4`
  text-align:left;
  display:inline-block;
  flex:1;
`,Kl=x.p`
  
`,Yl=e=>e?new Date(e).toLocaleString("en-us"):null,Hl=()=>{const e=Q(oi);return g.jsx(Wl,{children:e&&g.jsxs(g.Fragment,{children:[g.jsxs(Vl,{children:[g.jsx(Gl,{children:e.name}),g.jsx(Kl,{children:`born on: ${Yl(e.bornOn)}`})]}),g.jsx(ql,{})]})})},Xl=x.ul`
  position:absolute;
  width:100%; 
  padding-left:1rem;
  left:0;
  bottom:-.5rem;
`,Jl=x.li`
  list-style:none;
  margin:none;
  position:relative;
  z-index:1;
  
  display:inline-block;
  vertical-align:bottom;
  background-color:white;
  color: black;

  font-size:2rem;
  line-height:2rem;
  font-weight:bold;
  padding: .1rem .2rem;
  padding-bottom: 0rem;
  margin-right:-.75rem;
  margin-bottom: -.25rem;
  box-shadow: .2rem .2rem .2rem .2rem ${C("black")};

  border:.5rem solid ${C("white")};
  border-radius:1rem 1rem 0 0;

  background-color:${C("blue")};
  border-bottom-color: ${C("white")};
  color:${C("black")};
  transition: all .1s;

  &:hover{
    background-color:${lt("blue",20)};
  }
  
  ${e=>e.$isActive&&Se`

    background-color:${C("green")};
    /* padding-bottom: .5rem;
    padding-top: .5rem; */
    padding: .5rem;
    transition: all .2s ease-out;
    font-size: 3rem;
    z-index:2;
    margin-right: -.25rem;
    margin-left: 0.25rem;
    margin-bottom: 0rem;
    border-radius:1rem;
    box-shadow: .2rem .2rem .4rem .05rem ${C("black")};

    &:hover{
      background-color:${lt("green",40)};
    }
    
    :first-child{
      margin-left:0rem;
    }
  `};

  cursor:pointer;
`,Zl=()=>{const e=Q(Mu),t=we();return g.jsx(Xl,{children:e.map((r,n)=>g.jsx(Jl,{onClick:()=>t(Jo(n)),$isActive:r.isActive,children:n+1},n))})},Ql=x.div`
  position:absolute;
  right:0rem;
  bottom:-.5rem;
  width:7rem;
  height:3rem;

  border-radius:1rem 1rem 0 0;
  background-color: ${C("red")};
  color: ${C("white")};

  font-size:1.5rem;
  font-weight:bold;
  text-align:center;
  line-height:2rem;
  text-shadow:1px 1px 1px ${C("black")};
  border:.5rem solid ${C("white")};

  cursor:pointer;
  &:hover{
    background-color: ${lt("red",40)};
  }
`,ef=x.h1`
  position:absolute;
  right:8rem;
  bottom:0;
  width:20rem;
  z-index:-1;

  font-size:1.5rem;
  text-align:right;
`,tf=x.div`
  display:flex;
  flex-direction:row;
  height:100%;

  >div{
    flex:1;
    position:relative;
  }
`,rf=()=>{const e=we();return g.jsxs(tf,{children:[g.jsx("div",{children:g.jsx(Zl,{})}),g.jsxs("div",{children:[g.jsx(ef,{children:"Browser Pet"}),g.jsx(Ql,{onClick:()=>e(Zo()),children:"RESET"})]})]})},nf=x.header`
  position: relative;
  height:8rem;
  z-index:1;

  display:flex;
  flex-direction:column;
`,of=x.div`
  flex: 0 0 3rem;
`,af=x.div`
  position:relative;
  z-index:1;
  flex: 1;
`,sf=()=>g.jsxs(nf,{children:[g.jsx(of,{children:g.jsx(rf,{})}),g.jsx(af,{children:g.jsx(Hl,{})})]}),cf=x.div`
  padding:1rem;
  color: ${C("blue")};
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;

  display:grid;
  grid-template-columns: auto;
  grid-template-rows: 10rem auto 20rem;
  grid-template-areas:
    "header"
    "body"
    "footer";

  >div{
    position:relative;
  }
`,uf=x.div`
  grid-area: header;
`,lf=x.div`
  grid-area: body;
`,ff=x.div`
  grid-area: footer;
`,df=()=>g.jsxs(cf,{children:[g.jsx(sl,{}),g.jsx(uf,{children:g.jsx(sf,{})}),g.jsx(lf,{children:g.jsx(Ul,{})}),g.jsx(ff,{children:g.jsx(kl,{})})]}),pf=()=>g.jsxs(ea,{children:[g.jsx(pr,{path:"/about",element:g.jsx(Wu,{})}),g.jsx(pr,{path:"/",element:g.jsx(df,{})})]});vi.createRoot(document.getElementById("root")).render(g.jsx(H.StrictMode,{children:g.jsxs(Va,{store:Yu,children:[g.jsx("h1",{children:"hello"}),g.jsxs(ra,{children:[g.jsx(pf,{}),g.jsx(Hs,{})]})]})}));
