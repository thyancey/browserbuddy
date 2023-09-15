import{r as y,a as Ri,b as Ai,R as K,j as v,c as Ii}from"./client-8837fce7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ve.apply(this,arguments)}var se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(se||(se={}));const on="popstate";function ji(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:c=""}=Se(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),mr("",{pathname:a,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let c=o.location.href,l=c.indexOf("#");s=l===-1?c:c.slice(0,l)}return s+"#"+(typeof i=="string"?i:lt(i))}function n(o,i){xt(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ti(t,r,n,e)}function L(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ki(){return Math.random().toString(36).substr(2,8)}function an(e,t){return{usr:e.state,key:e.key,idx:t}}function mr(e,t,r,n){return r===void 0&&(r=null),Ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Se(t):t,{state:r,key:t&&t.key||n||ki()})}function lt(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Se(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ti(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,s=se.Pop,c=null,l=u();l==null&&(l=0,a.replaceState(Ve({},a.state,{idx:l}),""));function u(){return(a.state||{idx:null}).idx}function f(){s=se.Pop;let b=u(),w=b==null?null:b-l;l=b,c&&c({action:s,location:m.location,delta:w})}function d(b,w){s=se.Push;let g=mr(m.location,b,w);r&&r(g,b),l=u()+1;let S=an(g,l),E=m.createHref(g);try{a.pushState(S,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(E)}i&&c&&c({action:s,location:m.location,delta:1})}function p(b,w){s=se.Replace;let g=mr(m.location,b,w);r&&r(g,b),l=u();let S=an(g,l),E=m.createHref(g);a.replaceState(S,"",E),i&&c&&c({action:s,location:m.location,delta:0})}function h(b){let w=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof b=="string"?b:lt(b);return L(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let m={get action(){return s},get location(){return e(o,a)},listen(b){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(on,f),c=b,()=>{o.removeEventListener(on,f),c=null}},createHref(b){return t(o,b)},createURL:h,encodeLocation(b){let w=h(b);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:p,go(b){return a.go(b)}};return m}var sn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sn||(sn={}));function _i(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?Se(t):t,o=_r(n.pathname||"/",r);if(o==null)return null;let i=Zn(e);Li(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Vi(i[s],Gi(o));return a}function Zn(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(L(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let l=ce([n,c.relativePath]),u=r.concat(c);i.children&&i.children.length>0&&(L(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Zn(i.children,t,u,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:Bi(l,i.index),routesMeta:u})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let c of Qn(i.path))o(i,a,c)}),t}function Qn(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=Qn(n.join("/")),s=[];return s.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Li(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Wi(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Ni=/^:\w+$/,Mi=3,Di=2,zi=1,Ui=10,Fi=-2,cn=e=>e==="*";function Bi(e,t){let r=e.split("/"),n=r.length;return r.some(cn)&&(n+=Fi),t&&(n+=Di),r.filter(o=>!cn(o)).reduce((o,i)=>o+(Ni.test(i)?Mi:i===""?zi:Ui),n)}function Wi(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Vi(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,l=o==="/"?t:t.slice(o.length)||"/",u=qi({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l);if(!u)return null;Object.assign(n,u.params);let f=s.route;i.push({params:n,pathname:ce([o,u.pathname]),pathnameBase:Ji(ce([o,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(o=ce([o,u.pathnameBase]))}return i}function qi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Hi(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((l,u,f)=>{if(u==="*"){let d=s[f]||"";a=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return l[u]=Ki(s[f]||"",u),l},{}),pathname:i,pathnameBase:a,pattern:e}}function Hi(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),xt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(n.push(s),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Gi(e){try{return decodeURI(e)}catch(t){return xt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ki(e,t){try{return decodeURIComponent(e)}catch(r){return xt(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function _r(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Yi(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Se(e):e;return{pathname:r?r.startsWith("/")?r:Xi(r,t):t,search:Zi(n),hash:Qi(o)}}function Xi(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function tr(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eo(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function to(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=Se(e):(o=Ve({},e),L(!o.pathname||!o.pathname.includes("?"),tr("?","pathname","search",o)),L(!o.pathname||!o.pathname.includes("#"),tr("#","pathname","hash",o)),L(!o.search||!o.search.includes("#"),tr("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(n||a==null)s=r;else{let f=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}s=f>=0?t[f]:"/"}let c=Yi(o,s),l=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const ce=e=>e.join("/").replace(/\/\/+/g,"/"),Ji=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zi=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qi=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ea(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ro=["post","put","patch","delete"];new Set(ro);const ta=["get",...ro];new Set(ta);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ut.apply(this,arguments)}const Lr=y.createContext(null),ra=y.createContext(null),_e=y.createContext(null),Et=y.createContext(null),xe=y.createContext({outlet:null,matches:[],isDataRoute:!1}),no=y.createContext(null);function na(e,t){let{relative:r}=t===void 0?{}:t;Je()||L(!1);let{basename:n,navigator:o}=y.useContext(_e),{hash:i,pathname:a,search:s}=io(e,{relative:r}),c=a;return n!=="/"&&(c=a==="/"?n:ce([n,a])),o.createHref({pathname:c,search:s,hash:i})}function Je(){return y.useContext(Et)!=null}function Ct(){return Je()||L(!1),y.useContext(Et).location}function oo(e){y.useContext(_e).static||y.useLayoutEffect(e)}function oa(){let{isDataRoute:e}=y.useContext(xe);return e?va():ia()}function ia(){Je()||L(!1);let e=y.useContext(Lr),{basename:t,navigator:r}=y.useContext(_e),{matches:n}=y.useContext(xe),{pathname:o}=Ct(),i=JSON.stringify(eo(n).map(c=>c.pathnameBase)),a=y.useRef(!1);return oo(()=>{a.current=!0}),y.useCallback(function(c,l){if(l===void 0&&(l={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=to(c,JSON.parse(i),o,l.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:ce([t,u.pathname])),(l.replace?r.replace:r.push)(u,l.state,l)},[t,r,i,o,e])}function io(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=y.useContext(xe),{pathname:o}=Ct(),i=JSON.stringify(eo(n).map(a=>a.pathnameBase));return y.useMemo(()=>to(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function aa(e,t){return sa(e,t)}function sa(e,t,r){Je()||L(!1);let{navigator:n}=y.useContext(_e),{matches:o}=y.useContext(xe),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=Ct(),l;if(t){var u;let m=typeof t=="string"?Se(t):t;s==="/"||(u=m.pathname)!=null&&u.startsWith(s)||L(!1),l=m}else l=c;let f=l.pathname||"/",d=s==="/"?f:f.slice(s.length)||"/",p=_i(e,{pathname:d}),h=da(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:ce([s,n.encodeLocation?n.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:ce([s,n.encodeLocation?n.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,r);return t&&h?y.createElement(Et.Provider,{value:{location:ut({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:se.Pop}},h):h}function ca(){let e=ga(),t=ea(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:o},r):null,i)}const la=y.createElement(ca,null);class ua extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?y.createElement(xe.Provider,{value:this.props.routeContext},y.createElement(no.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fa(e){let{routeContext:t,match:r,children:n}=e,o=y.useContext(Lr);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(xe.Provider,{value:t},n)}function da(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let i=e,a=(n=r)==null?void 0:n.errors;if(a!=null){let s=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));s>=0||L(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,c,l)=>{let u=c.route.id?a==null?void 0:a[c.route.id]:null,f=null;r&&(f=c.route.errorElement||la);let d=t.concat(i.slice(0,l+1)),p=()=>{let h;return u?h=f:c.route.Component?h=y.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=s,y.createElement(fa,{match:c,routeContext:{outlet:s,matches:d,isDataRoute:r!=null},children:h})};return r&&(c.route.ErrorBoundary||c.route.errorElement||l===0)?y.createElement(ua,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var ao=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ao||{}),ft=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ft||{});function pa(e){let t=y.useContext(Lr);return t||L(!1),t}function ha(e){let t=y.useContext(ra);return t||L(!1),t}function ma(e){let t=y.useContext(xe);return t||L(!1),t}function so(e){let t=ma(),r=t.matches[t.matches.length-1];return r.route.id||L(!1),r.route.id}function ga(){var e;let t=y.useContext(no),r=ha(ft.UseRouteError),n=so(ft.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function va(){let{router:e}=pa(ao.UseNavigateStable),t=so(ft.UseNavigateStable),r=y.useRef(!1);return oo(()=>{r.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ut({fromRouteId:t},i)))},[e,t])}function gr(e){L(!1)}function ya(e){let{basename:t="/",children:r=null,location:n,navigationType:o=se.Pop,navigator:i,static:a=!1}=e;Je()&&L(!1);let s=t.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof n=="string"&&(n=Se(n));let{pathname:l="/",search:u="",hash:f="",state:d=null,key:p="default"}=n,h=y.useMemo(()=>{let m=_r(l,s);return m==null?null:{location:{pathname:m,search:u,hash:f,state:d,key:p},navigationType:o}},[s,l,u,f,d,p,o]);return h==null?null:y.createElement(_e.Provider,{value:c},y.createElement(Et.Provider,{children:r,value:h}))}function ba(e){let{children:t,location:r}=e;return aa(vr(t),r)}new Promise(()=>{});function vr(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(n,o)=>{if(!y.isValidElement(n))return;let i=[...t,o];if(n.type===y.Fragment){r.push.apply(r,vr(n.props.children,i));return}n.type!==gr&&L(!1),!n.props.index||!n.props.children||L(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=vr(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},yr.apply(this,arguments)}function wa(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Sa(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xa(e,t){return e.button===0&&(!t||t==="_self")&&!Sa(e)}const Ea=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ca="startTransition",ln=Ri[Ca];function $a(e){let{basename:t,children:r,future:n,window:o}=e,i=y.useRef();i.current==null&&(i.current=ji({window:o,v5Compat:!0}));let a=i.current,[s,c]=y.useState({action:a.action,location:a.location}),{v7_startTransition:l}=n||{},u=y.useCallback(f=>{l&&ln?ln(()=>c(f)):c(f)},[c,l]);return y.useLayoutEffect(()=>a.listen(u),[a,u]),y.createElement(ya,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a})}const Pa=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Oa=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,co=y.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:s,target:c,to:l,preventScrollReset:u}=t,f=wa(t,Ea),{basename:d}=y.useContext(_e),p,h=!1;if(typeof l=="string"&&Oa.test(l)&&(p=l,Pa))try{let g=new URL(window.location.href),S=l.startsWith("//")?new URL(g.protocol+l):new URL(l),E=_r(S.pathname,d);S.origin===g.origin&&E!=null?l=E+S.search+S.hash:h=!0}catch{}let m=na(l,{relative:o}),b=Ra(l,{replace:a,state:s,target:c,preventScrollReset:u,relative:o});function w(g){n&&n(g),g.defaultPrevented||b(g)}return y.createElement("a",yr({},f,{href:p||m,onClick:h||i?n:w,ref:r,target:c}))});var un;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(un||(un={}));var fn;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fn||(fn={}));function Ra(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=oa(),c=Ct(),l=io(e,{relative:a});return y.useCallback(u=>{if(xa(u,r)){u.preventDefault();let f=n!==void 0?n:lt(c)===lt(l);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[c,s,l,n,o,r,e,i,a])}var lo={exports:{}},uo={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=y;function Aa(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ia=typeof Object.is=="function"?Object.is:Aa,ja=Oe.useState,ka=Oe.useEffect,Ta=Oe.useLayoutEffect,_a=Oe.useDebugValue;function La(e,t){var r=t(),n=ja({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return Ta(function(){o.value=r,o.getSnapshot=t,rr(o)&&i({inst:o})},[e,r,t]),ka(function(){return rr(o)&&i({inst:o}),e(function(){rr(o)&&i({inst:o})})},[e]),_a(r),r}function rr(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ia(e,r)}catch{return!0}}function Na(e,t){return t()}var Ma=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Na:La;uo.useSyncExternalStore=Oe.useSyncExternalStore!==void 0?Oe.useSyncExternalStore:Ma;lo.exports=uo;var Da=lo.exports,fo={exports:{}},po={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t=y,za=Da;function Ua(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fa=typeof Object.is=="function"?Object.is:Ua,Ba=za.useSyncExternalStore,Wa=$t.useRef,Va=$t.useEffect,qa=$t.useMemo,Ha=$t.useDebugValue;po.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=Wa(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=qa(function(){function c(p){if(!l){if(l=!0,u=p,p=n(p),o!==void 0&&a.hasValue){var h=a.value;if(o(h,p))return f=h}return f=p}if(h=f,Fa(u,p))return h;var m=n(p);return o!==void 0&&o(h,m)?h:(u=p,f=m)}var l=!1,u,f,d=r===void 0?null:r;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,r,n,o]);var s=Ba(e,i[0],i[1]);return Va(function(){a.hasValue=!0,a.value=s},[s]),Ha(s),s};fo.exports=po;var Ga=fo.exports;function Ka(e){e()}let ho=Ka;const Ya=e=>ho=e,Xa=()=>ho,dn=Symbol.for("react-redux-context"),pn=typeof globalThis<"u"?globalThis:{};function Ja(){var e;if(!y.createContext)return{};const t=(e=pn[dn])!=null?e:pn[dn]=new Map;let r=t.get(y.createContext);return r||(r=y.createContext(null),t.set(y.createContext,r)),r}const de=Ja();function Nr(e=de){return function(){return y.useContext(e)}}const mo=Nr(),Za=()=>{throw new Error("uSES not initialized!")};let go=Za;const Qa=e=>{go=e},es=(e,t)=>e===t;function ts(e=de){const t=e===de?mo:Nr(e);return function(n,o={}){const{equalityFn:i=es,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:c,subscription:l,getServerState:u,stabilityCheck:f,noopCheck:d}=t();y.useRef(!0);const p=y.useCallback({[n.name](m){return n(m)}}[n.name],[n,f,a]),h=go(l.addNestedSub,c.getState,u||c.getState,p,i);return y.useDebugValue(h),h}}const X=ts();var vo={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=typeof Symbol=="function"&&Symbol.for,Mr=M?Symbol.for("react.element"):60103,Dr=M?Symbol.for("react.portal"):60106,Pt=M?Symbol.for("react.fragment"):60107,Ot=M?Symbol.for("react.strict_mode"):60108,Rt=M?Symbol.for("react.profiler"):60114,At=M?Symbol.for("react.provider"):60109,It=M?Symbol.for("react.context"):60110,zr=M?Symbol.for("react.async_mode"):60111,jt=M?Symbol.for("react.concurrent_mode"):60111,kt=M?Symbol.for("react.forward_ref"):60112,Tt=M?Symbol.for("react.suspense"):60113,rs=M?Symbol.for("react.suspense_list"):60120,_t=M?Symbol.for("react.memo"):60115,Lt=M?Symbol.for("react.lazy"):60116,ns=M?Symbol.for("react.block"):60121,os=M?Symbol.for("react.fundamental"):60117,is=M?Symbol.for("react.responder"):60118,as=M?Symbol.for("react.scope"):60119;function B(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mr:switch(e=e.type,e){case zr:case jt:case Pt:case Rt:case Ot:case Tt:return e;default:switch(e=e&&e.$$typeof,e){case It:case kt:case Lt:case _t:case At:return e;default:return t}}case Dr:return t}}}function yo(e){return B(e)===jt}A.AsyncMode=zr;A.ConcurrentMode=jt;A.ContextConsumer=It;A.ContextProvider=At;A.Element=Mr;A.ForwardRef=kt;A.Fragment=Pt;A.Lazy=Lt;A.Memo=_t;A.Portal=Dr;A.Profiler=Rt;A.StrictMode=Ot;A.Suspense=Tt;A.isAsyncMode=function(e){return yo(e)||B(e)===zr};A.isConcurrentMode=yo;A.isContextConsumer=function(e){return B(e)===It};A.isContextProvider=function(e){return B(e)===At};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr};A.isForwardRef=function(e){return B(e)===kt};A.isFragment=function(e){return B(e)===Pt};A.isLazy=function(e){return B(e)===Lt};A.isMemo=function(e){return B(e)===_t};A.isPortal=function(e){return B(e)===Dr};A.isProfiler=function(e){return B(e)===Rt};A.isStrictMode=function(e){return B(e)===Ot};A.isSuspense=function(e){return B(e)===Tt};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pt||e===jt||e===Rt||e===Ot||e===Tt||e===rs||typeof e=="object"&&e!==null&&(e.$$typeof===Lt||e.$$typeof===_t||e.$$typeof===At||e.$$typeof===It||e.$$typeof===kt||e.$$typeof===os||e.$$typeof===is||e.$$typeof===as||e.$$typeof===ns)};A.typeOf=B;vo.exports=A;var ss=vo.exports,bo=ss,cs={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ls={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wo={};wo[bo.ForwardRef]=cs;wo[bo.Memo]=ls;var I={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),Mt=Symbol.for("react.strict_mode"),Dt=Symbol.for("react.profiler"),zt=Symbol.for("react.provider"),Ut=Symbol.for("react.context"),us=Symbol.for("react.server_context"),Ft=Symbol.for("react.forward_ref"),Bt=Symbol.for("react.suspense"),Wt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),fs=Symbol.for("react.offscreen"),So;So=Symbol.for("react.module.reference");function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ur:switch(e=e.type,e){case Nt:case Dt:case Mt:case Bt:case Wt:return e;default:switch(e=e&&e.$$typeof,e){case us:case Ut:case Ft:case qt:case Vt:case zt:return e;default:return t}}case Fr:return t}}}I.ContextConsumer=Ut;I.ContextProvider=zt;I.Element=Ur;I.ForwardRef=Ft;I.Fragment=Nt;I.Lazy=qt;I.Memo=Vt;I.Portal=Fr;I.Profiler=Dt;I.StrictMode=Mt;I.Suspense=Bt;I.SuspenseList=Wt;I.isAsyncMode=function(){return!1};I.isConcurrentMode=function(){return!1};I.isContextConsumer=function(e){return V(e)===Ut};I.isContextProvider=function(e){return V(e)===zt};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur};I.isForwardRef=function(e){return V(e)===Ft};I.isFragment=function(e){return V(e)===Nt};I.isLazy=function(e){return V(e)===qt};I.isMemo=function(e){return V(e)===Vt};I.isPortal=function(e){return V(e)===Fr};I.isProfiler=function(e){return V(e)===Dt};I.isStrictMode=function(e){return V(e)===Mt};I.isSuspense=function(e){return V(e)===Bt};I.isSuspenseList=function(e){return V(e)===Wt};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nt||e===Dt||e===Mt||e===Bt||e===Wt||e===fs||typeof e=="object"&&e!==null&&(e.$$typeof===qt||e.$$typeof===Vt||e.$$typeof===zt||e.$$typeof===Ut||e.$$typeof===Ft||e.$$typeof===So||e.getModuleId!==void 0)};I.typeOf=V;function ds(){const e=Xa();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const hn={notify(){},get:()=>[]};function ps(e,t){let r,n=hn;function o(f){return c(),n.subscribe(f)}function i(){n.notify()}function a(){u.onStateChange&&u.onStateChange()}function s(){return!!r}function c(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=ds())}function l(){r&&(r(),r=void 0,n.clear(),n=hn)}const u={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:c,tryUnsubscribe:l,getListeners:()=>n};return u}const hs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ms=hs?y.useLayoutEffect:y.useEffect;function mn(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function qe(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!mn(e[r[o]],t[r[o]]))return!1;return!0}function gs({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){const a=y.useMemo(()=>{const l=ps(e);return{store:e,subscription:l,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[e,n,o,i]),s=y.useMemo(()=>e.getState(),[e]);ms(()=>{const{subscription:l}=a;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[a,s]);const c=t||de;return y.createElement(c.Provider,{value:a},r)}function xo(e=de){const t=e===de?mo:Nr(e);return function(){const{store:n}=t();return n}}const vs=xo();function ys(e=de){const t=e===de?vs:xo(e);return function(){return t().dispatch}}const Le=ys();Qa(Ga.useSyncExternalStoreWithSelector);Ya(Ai.unstable_batchedUpdates);var z=function(){return z=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},z.apply(this,arguments)};function He(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var k="-ms-",We="-moz-",O="-webkit-",Eo="comm",Ht="rule",Br="decl",bs="@import",Co="@keyframes",ws="@layer",Ss=Math.abs,Wr=String.fromCharCode,br=Object.assign;function xs(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function $o(e){return e.trim()}function Z(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function it(e,t){return e.indexOf(t)}function N(e,t){return e.charCodeAt(t)|0}function Re(e,t,r){return e.slice(t,r)}function G(e){return e.length}function Po(e){return e.length}function Fe(e,t){return t.push(e),e}function Es(e,t){return e.map(t).join("")}function gn(e,t){return e.filter(function(r){return!Z(r,t)})}var Gt=1,Ae=1,Oo=0,W=0,_=0,Ne="";function Kt(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Gt,column:Ae,length:a,return:"",siblings:s}}function ie(e,t){return br(Kt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ee(e){for(;e.root;)e=ie(e.root,{children:[e]});Fe(e,e.siblings)}function Cs(){return _}function $s(){return _=W>0?N(Ne,--W):0,Ae--,_===10&&(Ae=1,Gt--),_}function H(){return _=W<Oo?N(Ne,W++):0,Ae++,_===10&&(Ae=1,Gt++),_}function be(){return N(Ne,W)}function at(){return W}function Yt(e,t){return Re(Ne,e,t)}function wr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ps(e){return Gt=Ae=1,Oo=G(Ne=e),W=0,[]}function Os(e){return Ne="",e}function nr(e){return $o(Yt(W-1,Sr(e===91?e+2:e===40?e+1:e)))}function Rs(e){for(;(_=be())&&_<33;)H();return wr(e)>2||wr(_)>3?"":" "}function As(e,t){for(;--t&&H()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Yt(e,at()+(t<6&&be()==32&&H()==32))}function Sr(e){for(;H();)switch(_){case e:return W;case 34:case 39:e!==34&&e!==39&&Sr(_);break;case 40:e===41&&Sr(e);break;case 92:H();break}return W}function Is(e,t){for(;H()&&e+_!==47+10;)if(e+_===42+42&&be()===47)break;return"/*"+Yt(t,W-1)+"*"+Wr(e===47?e:H())}function js(e){for(;!wr(be());)H();return Yt(e,W)}function ks(e){return Os(st("",null,null,null,[""],e=Ps(e),0,[0],e))}function st(e,t,r,n,o,i,a,s,c){for(var l=0,u=0,f=a,d=0,p=0,h=0,m=1,b=1,w=1,g=0,S="",E=o,C=i,R=n,$=S;b;)switch(h=g,g=H()){case 40:if(h!=108&&N($,f-1)==58){it($+=P(nr(g),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:$+=nr(g);break;case 9:case 10:case 13:case 32:$+=Rs(h);break;case 92:$+=As(at()-1,7);continue;case 47:switch(be()){case 42:case 47:Fe(Ts(Is(H(),at()),t,r,c),c);break;default:$+="/"}break;case 123*m:s[l++]=G($)*w;case 125*m:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+u:w==-1&&($=P($,/\f/g,"")),p>0&&G($)-f&&Fe(p>32?yn($+";",n,r,f-1,c):yn(P($," ","")+";",n,r,f-2,c),c);break;case 59:$+=";";default:if(Fe(R=vn($,t,r,l,u,o,s,S,E=[],C=[],f,i),i),g===123)if(u===0)st($,t,R,R,E,i,f,s,C);else switch(d===99&&N($,3)===110?100:d){case 100:case 108:case 109:case 115:st(e,R,R,n&&Fe(vn(e,R,R,0,0,o,s,S,o,E=[],f,C),C),o,C,f,s,n?E:C);break;default:st($,R,R,R,[""],C,0,s,C)}}l=u=p=0,m=w=1,S=$="",f=a;break;case 58:f=1+G($),p=h;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&$s()==125)continue}switch($+=Wr(g),g*m){case 38:w=u>0?1:($+="\f",-1);break;case 44:s[l++]=(G($)-1)*w,w=1;break;case 64:be()===45&&($+=nr(H())),d=be(),u=f=G(S=$+=js(at())),g++;break;case 45:h===45&&G($)==2&&(m=0)}}return i}function vn(e,t,r,n,o,i,a,s,c,l,u,f){for(var d=o-1,p=o===0?i:[""],h=Po(p),m=0,b=0,w=0;m<n;++m)for(var g=0,S=Re(e,d+1,d=Ss(b=a[m])),E=e;g<h;++g)(E=$o(b>0?p[g]+" "+S:P(S,/&\f/g,p[g])))&&(c[w++]=E);return Kt(e,t,r,o===0?Ht:s,c,l,u,f)}function Ts(e,t,r,n){return Kt(e,t,r,Eo,Wr(Cs()),Re(e,2,-2),0,n)}function yn(e,t,r,n,o){return Kt(e,t,r,Br,Re(e,0,n),Re(e,n+1,-1),n,o)}function Ro(e,t,r){switch(xs(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return We+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+We+e+k+e+e;case 5936:switch(N(e,t+11)){case 114:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+k+e+e;case 6165:return O+e+k+"flex-"+e+e;case 5187:return O+e+P(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return O+e+k+"flex-item-"+P(e,/flex-|-self/g,"")+(Z(e,/flex-|baseline/)?"":k+"grid-row-"+P(e,/flex-|-self/g,""))+e;case 4675:return O+e+k+"flex-line-pack"+P(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+k+P(e,"shrink","negative")+e;case 5292:return O+e+k+P(e,"basis","preferred-size")+e;case 6060:return O+"box-"+P(e,"-grow","")+O+e+k+P(e,"grow","positive")+e;case 4554:return O+P(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!Z(e,/flex-|baseline/))return k+"grid-column-align"+Re(e,t)+e;break;case 2592:case 3360:return k+P(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Z(n.props,/grid-\w+-end/)})?~it(e+(r=r[t].value),"span")?e:k+P(e,"-start","")+e+k+"grid-row-span:"+(~it(r,"span")?Z(r,/\d+/):+Z(r,/\d+/)-+Z(e,/\d+/))+";":k+P(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Z(n.props,/grid-\w+-start/)})?e:k+P(P(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(G(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+We+(N(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~it(e,"stretch")?Ro(P(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,s,c,l){return k+o+":"+i+l+(a?k+o+"-span:"+(s?c:+c-+i)+l:"")+e});case 4949:if(N(e,t+6)===121)return P(e,":",":"+O)+e;break;case 6444:switch(N(e,N(e,14)===45?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(N(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+k+"$2box$3")+e;case 100:return P(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,"scroll-","scroll-snap-")+e}return e}function dt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function _s(e,t,r,n){switch(e.type){case ws:if(e.children.length)break;case bs:case Br:return e.return=e.return||e.value;case Eo:return"";case Co:return e.return=e.value+"{"+dt(e.children,n)+"}";case Ht:if(!G(e.value=e.props.join(",")))return""}return G(r=dt(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ls(e){var t=Po(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}function Ns(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ms(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Br:e.return=Ro(e.value,e.length,r);return;case Co:return dt([ie(e,{value:P(e.value,"@","@"+O)})],n);case Ht:if(e.length)return Es(r=e.props,function(o){switch(Z(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ee(ie(e,{props:[P(o,/:(read-\w+)/,":"+We+"$1")]})),Ee(ie(e,{props:[o]})),br(e,{props:gn(r,n)});break;case"::placeholder":Ee(ie(e,{props:[P(o,/:(plac\w+)/,":"+O+"input-$1")]})),Ee(ie(e,{props:[P(o,/:(plac\w+)/,":"+We+"$1")]})),Ee(ie(e,{props:[P(o,/:(plac\w+)/,k+"input-$1")]})),Ee(ie(e,{props:[o]})),br(e,{props:gn(r,n)});break}return""})}}var Ds={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ie=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Vr=typeof window<"u"&&"HTMLElement"in window,zs=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Us={},Xt=Object.freeze([]),je=Object.freeze({});function Ao(e,t,r){return r===void 0&&(r=je),e.theme!==r.theme&&e.theme||t||r.theme}var Io=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bs=/(^-|-$)/g;function bn(e){return e.replace(Fs,"-").replace(Bs,"")}var Ws=/(a)(d)/gi,wn=function(e){return String.fromCharCode(e+(e>25?39:97))};function xr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=wn(t%52)+r;return(wn(t%52)+r).replace(Ws,"$1-$2")}var or,Ce=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},jo=function(e){return Ce(5381,e)};function ko(e){return xr(jo(e)>>>0)}function Vs(e){return e.displayName||e.name||"Component"}function ir(e){return typeof e=="string"&&!0}var To=typeof Symbol=="function"&&Symbol.for,_o=To?Symbol.for("react.memo"):60115,qs=To?Symbol.for("react.forward_ref"):60112,Hs={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gs={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ks=((or={})[qs]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},or[_o]=Lo,or);function Sn(e){return("type"in(t=e)&&t.type.$$typeof)===_o?Lo:"$$typeof"in e?Ks[e.$$typeof]:Hs;var t}var Ys=Object.defineProperty,Xs=Object.getOwnPropertyNames,xn=Object.getOwnPropertySymbols,Js=Object.getOwnPropertyDescriptor,Zs=Object.getPrototypeOf,En=Object.prototype;function No(e,t,r){if(typeof t!="string"){if(En){var n=Zs(t);n&&n!==En&&No(e,n,r)}var o=Xs(t);xn&&(o=o.concat(xn(t)));for(var i=Sn(e),a=Sn(t),s=0;s<o.length;++s){var c=o[s];if(!(c in Gs||r&&r[c]||a&&c in a||i&&c in i)){var l=Js(t,c);try{Ys(e,c,l)}catch{}}}}return e}function ke(e){return typeof e=="function"}function qr(e){return typeof e=="object"&&"styledComponentId"in e}function ye(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Er(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ge(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cr(e,t,r){if(r===void 0&&(r=!1),!r&&!Ge(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Cr(e[n],t[n]);else if(Ge(t))for(var n in t)e[n]=Cr(e[n],t[n]);return e}function Hr(e,t){Object.defineProperty(e,"toString",{value:t})}function Ze(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qs=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Ze(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),ct=new Map,pt=new Map,ar=1,nt=function(e){if(ct.has(e))return ct.get(e);for(;pt.has(ar);)ar++;var t=ar++;return ct.set(e,t),pt.set(t,e),t},ec=function(e,t){ct.set(e,t),pt.set(t,e)},tc="style[".concat(Ie,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),rc=new RegExp("^".concat(Ie,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nc=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},oc=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var c=s.match(rc);if(c){var l=0|parseInt(c[1],10),u=c[2];l!==0&&(ec(u,l),nc(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}}};function ic(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var c=Array.from(s.querySelectorAll("style[".concat(Ie,"]")));return c[c.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Ie,"active"),n.setAttribute("data-styled-version","6.0.7");var a=ic();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},ac=function(){function e(t){this.element=Mo(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Ze(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),sc=function(){function e(t){this.element=Mo(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cc=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cn=Vr,lc={isServer:!Vr,useCSSOMInjection:!zs},ht=function(){function e(t,r,n){t===void 0&&(t=je),r===void 0&&(r={});var o=this;this.options=z(z({},lc),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Vr&&Cn&&(Cn=!1,function(i){for(var a=document.querySelectorAll(tc),s=0,c=a.length;s<c;s++){var l=a[s];l&&l.getAttribute(Ie)!=="active"&&(oc(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),Hr(this,function(){return function(i){for(var a=i.getTag(),s=a.length,c="",l=function(f){var d=function(w){return pt.get(w)}(f);if(d===void 0)return"continue";var p=i.names.get(d),h=a.getGroup(f);if(p===void 0||h.length===0)return"continue";var m="".concat(Ie,".g").concat(f,'[id="').concat(d,'"]'),b="";p!==void 0&&p.forEach(function(w){w.length>0&&(b+="".concat(w,","))}),c+="".concat(h).concat(m,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},u=0;u<s;u++)l(u);return c}(o)})}return e.registerId=function(t){return nt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(z(z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new cc(o):n?new ac(o):new sc(o)}(this.options),new Qs(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(nt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(nt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(nt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),uc=/&/g,fc=/^\s*\/\/.*$/gm;function Do(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Do(r.children,t)),r})}function dc(e){var t,r,n,o=e===void 0?je:e,i=o.options,a=i===void 0?je:i,s=o.plugins,c=s===void 0?Xt:s,l=function(d,p,h){return h===r||h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):d},u=c.slice();u.push(function(d){d.type===Ht&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(uc,r).replace(n,l))}),a.prefix&&u.push(Ms),u.push(_s);var f=function(d,p,h,m){p===void 0&&(p=""),h===void 0&&(h=""),m===void 0&&(m="&"),t=m,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var b=d.replace(fc,""),w=ks(h||p?"".concat(h," ").concat(p," { ").concat(b," }"):b);a.namespace&&(w=Do(w,a.namespace));var g=[];return dt(w,Ls(u.concat(Ns(function(S){return g.push(S)})))),g};return f.hash=c.length?c.reduce(function(d,p){return p.name||Ze(15),Ce(d,p.name)},5381).toString():"",f}var pc=new ht,$r=dc(),zo=K.createContext({shouldForwardProp:void 0,styleSheet:pc,stylis:$r});zo.Consumer;K.createContext(void 0);function Pr(){return y.useContext(zo)}var hc=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=$r);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Hr(this,function(){throw Ze(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$r),this.name+t.hash},e}(),mc=function(e){return e>="A"&&e<="Z"};function $n(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;mc(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Uo=function(e){return e==null||e===!1||e===""},Fo=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Uo(i)&&(Array.isArray(i)&&i.isCss||ke(i)?n.push("".concat($n(o),":"),i,";"):Ge(i)?n.push.apply(n,He(He(["".concat(o," {")],Fo(i),!1),["}"],!1)):n.push("".concat($n(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Ds||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function le(e,t,r,n){if(Uo(e))return[];if(qr(e))return[".".concat(e.styledComponentId)];if(ke(e)){if(!ke(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return le(o,t,r,n)}var i;return e instanceof hc?r?(e.inject(r,n),[e.getName(n)]):[e]:Ge(e)?Fo(e):Array.isArray(e)?Array.prototype.concat.apply(Xt,e.map(function(a){return le(a,t,r,n)})):[e.toString()]}function Bo(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ke(r)&&!qr(r))return!1}return!0}var gc=jo("6.0.7"),vc=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Bo(t),this.componentId=r,this.baseHash=Ce(gc,r),this.baseStyle=n,ht.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=ye(o,this.staticRulesId);else{var i=Er(le(this.rules,t,r,n)),a=xr(Ce(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}o=ye(o,a),this.staticRulesId=a}else{for(var c=Ce(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")l+=f;else if(f){var d=Er(le(f,t,r,n));c=Ce(c,d),l+=d}}if(l){var p=xr(c>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),o=ye(o,p)}}return o},e}(),Gr=K.createContext(void 0);Gr.Consumer;var sr={};function yc(e,t,r){var n=qr(e),o=e,i=!ir(e),a=t.attrs,s=a===void 0?Xt:a,c=t.componentId,l=c===void 0?function(S,E){var C=typeof S!="string"?"sc":bn(S);sr[C]=(sr[C]||0)+1;var R="".concat(C,"-").concat(ko("6.0.7"+C+sr[C]));return E?"".concat(E,"-").concat(R):R}(t.displayName,t.parentComponentId):c,u=t.displayName;u===void 0&&function(S){return ir(S)?"styled.".concat(S):"Styled(".concat(Vs(S),")")}(e);var f=t.displayName&&t.componentId?"".concat(bn(t.displayName),"-").concat(t.componentId):t.componentId||l,d=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,p=t.shouldForwardProp;if(n&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;p=function(S,E){return h(S,E)&&m(S,E)}}else p=h}var b=new vc(r,f,n?o.componentStyle:void 0);function w(S,E){return function(C,R,$){var he=C.attrs,te=C.componentStyle,U=C.defaultProps,me=C.foldedComponentIds,Ci=C.styledComponentId,$i=C.target,Pi=K.useContext(Gr),Oi=Pr(),Zt=C.shouldForwardProp||Oi.shouldForwardProp,re=function(et,ze,tt){for(var Ue,ge=z(z({},ze),{className:void 0,theme:tt}),er=0;er<et.length;er+=1){var rt=ke(Ue=et[er])?Ue(ge):Ue;for(var oe in rt)ge[oe]=oe==="className"?ye(ge[oe],rt[oe]):oe==="style"?z(z({},ge[oe]),rt[oe]):rt[oe]}return ze.className&&(ge.className=ye(ge.className,ze.className)),ge}(he,R,Ao(R,Pi,U)||je),Qe=re.as||$i,De={};for(var ne in re)re[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"||(ne==="forwardedAs"?De.as=re.forwardedAs:Zt&&!Zt(ne,Qe)||(De[ne]=re[ne]));var nn=function(et,ze){var tt=Pr(),Ue=et.generateAndInjectStyles(ze,tt.styleSheet,tt.stylis);return Ue}(te,re),Qt=ye(me,Ci);return nn&&(Qt+=" "+nn),re.className&&(Qt+=" "+re.className),De[ir(Qe)&&!Io.has(Qe)?"class":"className"]=Qt,De.ref=$,y.createElement(Qe,De)}(g,S,E)}var g=K.forwardRef(w);return g.attrs=d,g.componentStyle=b,g.shouldForwardProp=p,g.foldedComponentIds=n?ye(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=f,g.target=n?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(E){for(var C=[],R=1;R<arguments.length;R++)C[R-1]=arguments[R];for(var $=0,he=C;$<he.length;$++)Cr(E,he[$],!0);return E}({},o.defaultProps,S):S}}),Hr(g,function(){return".".concat(g.styledComponentId)}),i&&No(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Pn(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var On=function(e){return Object.assign(e,{isCss:!0})};function Q(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ke(e)||Ge(e)){var n=e;return On(le(Pn(Xt,He([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?le(o):On(le(Pn(o,t)))}function Or(e,t,r){if(r===void 0&&(r=je),!t)throw Ze(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Q.apply(void 0,He([o],i,!1)))};return n.attrs=function(o){return Or(e,t,z(z({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Or(e,t,z(z({},r),o))},n}var Wo=function(e){return Or(yc,e)},x=Wo;Io.forEach(function(e){x[e]=Wo(e)});var bc=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Bo(t),ht.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Er(le(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&ht.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function wc(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Q.apply(void 0,He([e],t,!1)),o="sc-global-".concat(ko(JSON.stringify(n))),i=new bc(n,o),a=function(c){var l=Pr(),u=K.useContext(Gr),f=K.useRef(l.styleSheet.allocateGSInstance(o)).current;return l.styleSheet.server&&s(f,c,l.styleSheet,u,l.stylis),K.useLayoutEffect(function(){if(!l.styleSheet.server)return s(f,c,l.styleSheet,u,l.stylis),function(){return i.removeStyles(f,l.styleSheet)}},[f,c,l.styleSheet,u,l.stylis]),null};function s(c,l,u,f,d){if(i.isStatic)i.renderStyles(c,Us,u,d);else{var p=z(z({},l),{theme:Ao(l,f,a.defaultProps)});i.renderStyles(c,p,u,d)}}return K.memo(a)}function q(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function pe(e){return!!e&&!!e[T]}function ee(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Ac}(e)||Array.isArray(e)||!!e[_n]||!!(!((t=e.constructor)===null||t===void 0)&&t[_n])||Kr(e)||Yr(e))}function we(e,t,r){r===void 0&&(r=!1),Me(e)===0?(r?Object.keys:Pe)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function Me(e){var t=e[T];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Kr(e)?2:Yr(e)?3:0}function $e(e,t){return Me(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Sc(e,t){return Me(e)===2?e.get(t):e[t]}function Vo(e,t,r){var n=Me(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function qo(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Kr(e){return Oc&&e instanceof Map}function Yr(e){return Rc&&e instanceof Set}function ve(e){return e.o||e.t}function Xr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Go(e);delete t[T];for(var r=Pe(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Jr(e,t){return t===void 0&&(t=!1),Zr(e)||pe(e)||!ee(e)||(Me(e)>1&&(e.set=e.add=e.clear=e.delete=xc),Object.freeze(e),t&&we(e,function(r,n){return Jr(n,!0)},!0)),e}function xc(){q(2)}function Zr(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Y(e){var t=jr[e];return t||q(18,e),t}function Ec(e,t){jr[e]||(jr[e]=t)}function Rr(){return Ke}function cr(e,t){t&&(Y("Patches"),e.u=[],e.s=[],e.v=t)}function mt(e){Ar(e),e.p.forEach(Cc),e.p=null}function Ar(e){e===Ke&&(Ke=e.l)}function Rn(e){return Ke={p:[],l:Ke,h:e,m:!0,_:0}}function Cc(e){var t=e[T];t.i===0||t.i===1?t.j():t.g=!0}function lr(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||Y("ES5").S(t,e,n),n?(r[T].P&&(mt(t),q(4)),ee(e)&&(e=gt(t,e),t.l||vt(t,e)),t.u&&Y("Patches").M(r[T].t,e,t.u,t.s)):e=gt(t,r,[]),mt(t),t.u&&t.v(t.u,t.s),e!==Ho?e:void 0}function gt(e,t,r){if(Zr(t))return t;var n=t[T];if(!n)return we(t,function(s,c){return An(e,n,t,s,c,r)},!0),t;if(n.A!==e)return t;if(!n.P)return vt(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Xr(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),we(i,function(s,c){return An(e,n,o,s,c,r,a)}),vt(e,o,!1),r&&e.u&&Y("Patches").N(n,r,e.u,e.s)}return n.o}function An(e,t,r,n,o,i,a){if(pe(o)){var s=gt(e,o,i&&t&&t.i!==3&&!$e(t.R,n)?i.concat(n):void 0);if(Vo(r,n,s),!pe(s))return;e.m=!1}else a&&r.add(o);if(ee(o)&&!Zr(o)){if(!e.h.D&&e._<1)return;gt(e,o),t&&t.A.l||vt(e,o)}}function vt(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Jr(t,r)}function ur(e,t){var r=e[T];return(r?ve(r):e)[t]}function In(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ae(e){e.P||(e.P=!0,e.l&&ae(e.l))}function fr(e){e.o||(e.o=Xr(e.t))}function Ir(e,t,r){var n=Kr(t)?Y("MapSet").F(t,r):Yr(t)?Y("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:Rr(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},c=s,l=Ye;a&&(c=[s],l=Be);var u=Proxy.revocable(c,l),f=u.revoke,d=u.proxy;return s.k=d,s.j=f,d}(t,r):Y("ES5").J(t,r);return(r?r.A:Rr()).p.push(n),n}function $c(e){return pe(e)||q(22,e),function t(r){if(!ee(r))return r;var n,o=r[T],i=Me(r);if(o){if(!o.P&&(o.i<4||!Y("ES5").K(o)))return o.t;o.I=!0,n=jn(r,i),o.I=!1}else n=jn(r,i);return we(n,function(a,s){o&&Sc(o.t,a)===s||Vo(n,a,t(s))}),i===3?new Set(n):n}(e)}function jn(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Xr(e)}function Pc(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var c=this[T];return Ye.get(c,i)},set:function(c){var l=this[T];Ye.set(l,i,c)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][T];if(!s.P)switch(s.i){case 5:n(s)&&ae(s);break;case 4:r(s)&&ae(s)}}}function r(i){for(var a=i.t,s=i.k,c=Pe(s),l=c.length-1;l>=0;l--){var u=c[l];if(u!==T){var f=a[u];if(f===void 0&&!$e(a,u))return!0;var d=s[u],p=d&&d[T];if(p?p.t!==f:!qo(d,f))return!0}}var h=!!a[T];return c.length!==Pe(a).length+(h?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var c=0;c<a.length;c++)if(!a.hasOwnProperty(c))return!0;return!1}var o={};Ec("ES5",{J:function(i,a){var s=Array.isArray(i),c=function(u,f){if(u){for(var d=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(d,""+p,e(p,!0));return d}var h=Go(f);delete h[T];for(var m=Pe(h),b=0;b<m.length;b++){var w=m[b];h[w]=e(w,u||!!h[w].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(s,i),l={i:s?5:4,A:a?a.A:Rr(),P:!1,I:!1,R:{},l:a,t:i,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,T,{value:l,writable:!0}),c},S:function(i,a,s){s?pe(a)&&a[T].A===i&&t(i.p):(i.u&&function c(l){if(l&&typeof l=="object"){var u=l[T];if(u){var f=u.t,d=u.k,p=u.R,h=u.i;if(h===4)we(d,function(S){S!==T&&(f[S]!==void 0||$e(f,S)?p[S]||c(d[S]):(p[S]=!0,ae(u)))}),we(f,function(S){d[S]!==void 0||$e(d,S)||(p[S]=!1,ae(u))});else if(h===5){if(n(u)&&(ae(u),p.length=!0),d.length<f.length)for(var m=d.length;m<f.length;m++)p[m]=!1;else for(var b=f.length;b<d.length;b++)p[b]=!0;for(var w=Math.min(d.length,f.length),g=0;g<w;g++)d.hasOwnProperty(g)||(p[g]=!0),p[g]===void 0&&c(d[g])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var kn,Ke,Qr=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Oc=typeof Map<"u",Rc=typeof Set<"u",Tn=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Ho=Qr?Symbol.for("immer-nothing"):((kn={})["immer-nothing"]=!0,kn),_n=Qr?Symbol.for("immer-draftable"):"__$immer_draftable",T=Qr?Symbol.for("immer-state"):"__$immer_state",Ac=""+Object.prototype.constructor,Pe=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Go=Object.getOwnPropertyDescriptors||function(e){var t={};return Pe(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},jr={},Ye={get:function(e,t){if(t===T)return e;var r=ve(e);if(!$e(r,t))return function(o,i,a){var s,c=In(i,a);return c?"value"in c?c.value:(s=c.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!ee(n)?n:n===ur(e.t,t)?(fr(e),e.o[t]=Ir(e.A.h,n,e)):n},has:function(e,t){return t in ve(e)},ownKeys:function(e){return Reflect.ownKeys(ve(e))},set:function(e,t,r){var n=In(ve(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=ur(ve(e),t),i=o==null?void 0:o[T];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(qo(r,o)&&(r!==void 0||$e(e.t,t)))return!0;fr(e),ae(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return ur(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,fr(e),ae(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=ve(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){q(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){q(12)}},Be={};we(Ye,function(e,t){Be[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Be.deleteProperty=function(e,t){return Be.set.call(this,e,t,void 0)},Be.set=function(e,t,r){return Ye.set.call(this,e[0],t,r,e[0])};var Ic=function(){function e(r){var n=this;this.O=Tn,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var c=n;return function(m){var b=this;m===void 0&&(m=s);for(var w=arguments.length,g=Array(w>1?w-1:0),S=1;S<w;S++)g[S-1]=arguments[S];return c.produce(m,function(E){var C;return(C=i).call.apply(C,[b,E].concat(g))})}}var l;if(typeof i!="function"&&q(6),a!==void 0&&typeof a!="function"&&q(7),ee(o)){var u=Rn(n),f=Ir(n,o,void 0),d=!0;try{l=i(f),d=!1}finally{d?mt(u):Ar(u)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(m){return cr(u,a),lr(m,u)},function(m){throw mt(u),m}):(cr(u,a),lr(l,u))}if(!o||typeof o!="object"){if((l=i(o))===void 0&&(l=o),l===Ho&&(l=void 0),n.D&&Jr(l,!0),a){var p=[],h=[];Y("Patches").M(o,l,p,h),a(p,h)}return l}q(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(l){for(var u=arguments.length,f=Array(u>1?u-1:0),d=1;d<u;d++)f[d-1]=arguments[d];return n.produceWithPatches(l,function(p){return o.apply(void 0,[p].concat(f))})};var a,s,c=n.produce(o,i,function(l,u){a=l,s=u});return typeof Promise<"u"&&c instanceof Promise?c.then(function(l){return[l,a,s]}):[c,a,s]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){ee(r)||q(8),pe(r)&&(r=$c(r));var n=Rn(this),o=Ir(this,r,void 0);return o[T].C=!0,Ar(n),o},t.finishDraft=function(r,n){var o=r&&r[T],i=o.A;return cr(i,n),lr(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!Tn&&q(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=Y("Patches").$;return pe(r)?a(r,n):this.produce(r,function(s){return a(s,n)})},e}(),F=new Ic,Ko=F.produce;F.produceWithPatches.bind(F);F.setAutoFreeze.bind(F);F.setUseProxies.bind(F);F.applyPatches.bind(F);F.createDraft.bind(F);F.finishDraft.bind(F);function Xe(e){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xe(e)}function jc(e,t){if(Xe(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Xe(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kc(e){var t=jc(e,"string");return Xe(t)==="symbol"?t:String(t)}function Tc(e,t,r){return t=kc(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ln(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Nn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ln(Object(r),!0).forEach(function(n){Tc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ln(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function D(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Mn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),dr=function(){return Math.random().toString(36).substring(7).split("").join(".")},yt={INIT:"@@redux/INIT"+dr(),REPLACE:"@@redux/REPLACE"+dr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+dr()}};function _c(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Yo(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(D(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(D(1));return r(Yo)(e,t)}if(typeof e!="function")throw new Error(D(2));var o=e,i=t,a=[],s=a,c=!1;function l(){s===a&&(s=a.slice())}function u(){if(c)throw new Error(D(3));return i}function f(m){if(typeof m!="function")throw new Error(D(4));if(c)throw new Error(D(5));var b=!0;return l(),s.push(m),function(){if(b){if(c)throw new Error(D(6));b=!1,l();var g=s.indexOf(m);s.splice(g,1),a=null}}}function d(m){if(!_c(m))throw new Error(D(7));if(typeof m.type>"u")throw new Error(D(8));if(c)throw new Error(D(9));try{c=!0,i=o(i,m)}finally{c=!1}for(var b=a=s,w=0;w<b.length;w++){var g=b[w];g()}return m}function p(m){if(typeof m!="function")throw new Error(D(10));o=m,d({type:yt.REPLACE})}function h(){var m,b=f;return m={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(D(11));function S(){g.next&&g.next(u())}S();var E=b(S);return{unsubscribe:E}}},m[Mn]=function(){return this},m}return d({type:yt.INIT}),n={dispatch:d,subscribe:f,getState:u,replaceReducer:p},n[Mn]=h,n}function Lc(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:yt.INIT});if(typeof n>"u")throw new Error(D(12));if(typeof r(void 0,{type:yt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(D(13))})}function Nc(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),a;try{Lc(r)}catch(s){a=s}return function(c,l){if(c===void 0&&(c={}),a)throw a;for(var u=!1,f={},d=0;d<i.length;d++){var p=i[d],h=r[p],m=c[p],b=h(m,l);if(typeof b>"u")throw l&&l.type,new Error(D(14));f[p]=b,u=u||b!==m}return u=u||i.length!==Object.keys(c).length,u?f:c}}function bt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function Mc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(D(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(c){return c(a)});return i=bt.apply(void 0,s)(o.dispatch),Nn(Nn({},o),{},{dispatch:i})}}}var wt="NOT_FOUND";function Dc(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:wt},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function zc(e,t){var r=[];function n(s){var c=r.findIndex(function(u){return t(s,u.key)});if(c>-1){var l=r[c];return c>0&&(r.splice(c,1),r.unshift(l)),l.value}return wt}function o(s,c){n(s)===wt&&(r.unshift({key:s,value:c}),r.length>e&&r.pop())}function i(){return r}function a(){r=[]}return{get:n,put:o,getEntries:i,clear:a}}var Uc=function(t,r){return t===r};function Fc(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,i=0;i<o;i++)if(!e(r[i],n[i]))return!1;return!0}}function Bc(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?Uc:n,i=r.maxSize,a=i===void 0?1:i,s=r.resultEqualityCheck,c=Fc(o),l=a===1?Dc(c):zc(a,c);function u(){var f=l.get(arguments);if(f===wt){if(f=e.apply(null,arguments),s){var d=l.getEntries(),p=d.find(function(h){return s(h.value,f)});p&&(f=p.value)}l.put(arguments,f)}return f}return u.clearCache=function(){return l.clear()},u}function Wc(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function Vc(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];var l=0,u,f={memoizeOptions:void 0},d=s.pop();if(typeof d=="object"&&(f=d,d=s.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var p=f,h=p.memoizeOptions,m=h===void 0?r:h,b=Array.isArray(m)?m:[m],w=Wc(s),g=e.apply(void 0,[function(){return l++,d.apply(null,arguments)}].concat(b)),S=e(function(){for(var C=[],R=w.length,$=0;$<R;$++)C.push(w[$].apply(null,arguments));return u=g.apply(null,C),u});return Object.assign(S,{resultFunc:d,memoizedResultFunc:g,dependencies:w,lastResult:function(){return u},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),S};return o}var j=Vc(Bc);function Xo(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var Jo=Xo();Jo.withExtraArgument=Xo;const Dn=Jo;var Zo=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),qc=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return c([l,u])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(u){l=[6,u],o=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Te=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Hc=Object.defineProperty,Gc=Object.defineProperties,Kc=Object.getOwnPropertyDescriptors,zn=Object.getOwnPropertySymbols,Yc=Object.prototype.hasOwnProperty,Xc=Object.prototype.propertyIsEnumerable,Un=function(e,t,r){return t in e?Hc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ue=function(e,t){for(var r in t||(t={}))Yc.call(t,r)&&Un(e,r,t[r]);if(zn)for(var n=0,o=zn(t);n<o.length;n++){var r=o[n];Xc.call(t,r)&&Un(e,r,t[r])}return e},pr=function(e,t){return Gc(e,Kc(t))},Jc=function(e,t,r){return new Promise(function(n,o){var i=function(c){try{s(r.next(c))}catch(l){o(l)}},a=function(c){try{s(r.throw(c))}catch(l){o(l)}},s=function(c){return c.done?n(c.value):Promise.resolve(c.value).then(i,a)};s((r=r.apply(e,t)).next())})},Zc=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?bt:bt.apply(null,arguments)};function Qc(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var el=function(e){Zo(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Te([void 0],r[0].concat(this)))):new(t.bind.apply(t,Te([void 0],r.concat(this))))},t}(Array),tl=function(e){Zo(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Te([void 0],r[0].concat(this)))):new(t.bind.apply(t,Te([void 0],r.concat(this))))},t}(Array);function kr(e){return ee(e)?Ko(e,function(){}):e}function rl(e){return typeof e=="boolean"}function nl(){return function(t){return ol(t)}}function ol(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new el;return r&&(rl(r)?n.push(Dn):n.push(Dn.withExtraArgument(r.extraArgument))),n}var il=!0;function al(e){var t=nl(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,a=i===void 0?t():i,s=r.devTools,c=s===void 0?!0:s,l=r.preloadedState,u=l===void 0?void 0:l,f=r.enhancers,d=f===void 0?void 0:f,p;if(typeof o=="function")p=o;else if(Qc(o))p=Nc(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var m=Mc.apply(void 0,h),b=bt;c&&(b=Zc(ue({trace:!il},typeof c=="object"&&c)));var w=new tl(m),g=w;Array.isArray(d)?g=Te([m],d):typeof d=="function"&&(g=d(w));var S=b.apply(void 0,g);return Yo(p,u,S)}function fe(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return ue(ue({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function Qo(e){var t={},r=[],n,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return r.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function sl(e){return typeof e=="function"}function cl(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?Qo(t):[t,r,n],i=o[0],a=o[1],s=o[2],c;if(sl(e))c=function(){return kr(e())};else{var l=kr(e);c=function(){return l}}function u(f,d){f===void 0&&(f=c());var p=Te([i[d.type]],a.filter(function(h){var m=h.matcher;return m(d)}).map(function(h){var m=h.reducer;return m}));return p.filter(function(h){return!!h}).length===0&&(p=[s]),p.reduce(function(h,m){if(m)if(pe(h)){var b=h,w=m(b,d);return w===void 0?h:w}else{if(ee(h))return Ko(h,function(g){return m(g,d)});var w=m(h,d);if(w===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}return h},f)}return u.getInitialState=c,u}function ll(e,t){return e+"/"+t}function ei(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:kr(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},a={},s={};o.forEach(function(u){var f=n[u],d=ll(t,u),p,h;"reducer"in f?(p=f.reducer,h=f.prepare):p=f,i[u]=p,a[d]=p,s[u]=h?fe(d,h):fe(d)});function c(){var u=typeof e.extraReducers=="function"?Qo(e.extraReducers):[e.extraReducers],f=u[0],d=f===void 0?{}:f,p=u[1],h=p===void 0?[]:p,m=u[2],b=m===void 0?void 0:m,w=ue(ue({},d),a);return cl(r,function(g){for(var S in w)g.addCase(S,w[S]);for(var E=0,C=h;E<C.length;E++){var R=C[E];g.addMatcher(R.matcher,R.reducer)}b&&g.addDefaultCase(b)})}var l;return{name:t,reducer:function(u,f){return l||(l=c()),l(u,f)},actions:s,caseReducers:i,getInitialState:function(){return l||(l=c()),l.getInitialState()}}}var ul="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",fl=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=ul[Math.random()*64|0];return t},dl=["name","message","stack","code"],hr=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Fn=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),pl=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=dl;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=fe(t+"/fulfilled",function(l,u,f,d){return{payload:l,meta:pr(ue({},d||{}),{arg:f,requestId:u,requestStatus:"fulfilled"})}}),i=fe(t+"/pending",function(l,u,f){return{payload:void 0,meta:pr(ue({},f||{}),{arg:u,requestId:l,requestStatus:"pending"})}}),a=fe(t+"/rejected",function(l,u,f,d,p){return{payload:d,error:(n&&n.serializeError||pl)(l||"Rejected"),meta:pr(ue({},p||{}),{arg:f,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function c(l){return function(u,f,d){var p=n!=null&&n.idGenerator?n.idGenerator(l):fl(),h=new s,m;function b(g){m=g,h.abort()}var w=function(){return Jc(this,null,function(){var g,S,E,C,R,$,he;return qc(this,function(te){switch(te.label){case 0:return te.trys.push([0,4,,5]),C=(g=n==null?void 0:n.condition)==null?void 0:g.call(n,l,{getState:f,extra:d}),ml(C)?[4,C]:[3,2];case 1:C=te.sent(),te.label=2;case 2:if(C===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return R=new Promise(function(U,me){return h.signal.addEventListener("abort",function(){return me({name:"AbortError",message:m||"Aborted"})})}),u(i(p,l,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:p,arg:l},{getState:f,extra:d}))),[4,Promise.race([R,Promise.resolve(r(l,{dispatch:u,getState:f,extra:d,requestId:p,signal:h.signal,abort:b,rejectWithValue:function(U,me){return new hr(U,me)},fulfillWithValue:function(U,me){return new Fn(U,me)}})).then(function(U){if(U instanceof hr)throw U;return U instanceof Fn?o(U.payload,p,l,U.meta):o(U,p,l)})])];case 3:return E=te.sent(),[3,5];case 4:return $=te.sent(),E=$ instanceof hr?a(null,p,l,$.payload,$.meta):a($,p,l),[3,5];case 5:return he=n&&!n.dispatchConditionRejection&&a.match(E)&&E.meta.condition,he||u(E),[2,E]}})})}();return Object.assign(w,{abort:b,requestId:p,arg:l,unwrap:function(){return w.then(hl)}})}}return Object.assign(c,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function hl(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ml(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var en="listenerMiddleware";fe(en+"/add");fe(en+"/removeAll");fe(en+"/remove");var Bn;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Pc();const gl=(e,t)=>{if(!t)return Math.round(e);const r=Math.pow(10,t);return Math.round(e*r)/r},ti=(e,t,r)=>Math.min(Math.max(e,t),r),Tr=(e,t,r,n,o)=>{var s;let i=(s=t.find(c=>c.id===e.id))==null?void 0:s.value;if(i===void 0&&(i=e.value),n)return i;const a=o?e.perMinute:e.perMinute/60;return Math.round(ti(i+a*r,0,e.max)*100)/100},vl=(e,t,r,n,o)=>{const i=(n-r)/1e3;return i<=0?e.map(a=>({id:a.id,value:Tr(a,t,i,!0,o),max:a.max,label:a.label})):e.map(a=>({id:a.id,value:Tr(a,t,i,void 0,o),max:a.max,label:a.label}))},yl=(e,t,r,n,o)=>{const i=n&&r?(n-r)/1e3:0;return e.map(a=>({id:a.id,value:Tr(a,t,i,void 0,o)}))},Wn=(...e)=>{},St=e=>e===void 0?[]:Array.isArray(e)?e:[e],bl=(e,t)=>{if(e.length===0)return!0;for(let r=0;r<e.length;r++)if(e[r].when.length===0||e[r].when.filter(n=>t.indexOf(n)>-1).length===e[r].when.length)return e[r].then;return!1},ri=(e,t)=>{for(let r=0;r<e.length;r++){const n=Sl(e[r],t);if(n)return n}return null},wl=(e,t,r)=>e.when.find(n=>!$l(n,t,r))?null:e.then,Sl=(e,t)=>{let r=0;for(let n=0;n<e.when.length;n++)Array.isArray(e.when[n])?e.when[n].some(o=>t.includes(o))&&r++:t.indexOf(e.when[n])>-1&&r++;return r===e.when.length?Array.isArray(e.then)?ri(e.then,t):e.then:null},xl=e=>e.map(t=>({when:St(t.when),then:t.then})),ni=e=>e.map(t=>Array.isArray(t.then)?{when:St(t.when),then:ni(t.then)}:{when:St(t.when),then:t.then}),El=e=>e?e.map(t=>({when:St(t.when).map(n=>Cl(n)).filter(n=>n!==null),then:t.then})):[],oi={"=":(e,t)=>e===t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t},Cl=e=>{try{const t=e.split("_"),r=t[0],o=t[1].split("%");return oi[r]?{condition:r,criteria:Number(o[0]),isPercent:o.length>1}:(console.error(`parseExpressionString(): invalid condition "${r}" from expressionString "${e}"`),null)}catch{return console.error(`could not parse expressionString "${e}", expressionStrings must use one 
    of the following operators: [<=,<,=,>,>=] and follow a format like "<=_10%"`),null}},$l=(e,t,r)=>{try{const n=e.isPercent?Math.round(t/r*100):t;return oi[e.condition](n,e.criteria)}catch{return console.log(`could not evaluate "whenNumber:${e}", "reference:${t}", "referenceMax:${t}"`),null}},Pl={debugMode:!1},ii=ei({name:"ui",initialState:Pl,reducers:{setDebugMode:(e,t)=>{e.debugMode=t.payload}}}),{setDebugMode:Ol}=ii.actions,ai=e=>e.ui.debugMode,Rl=ii.reducer,Al={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},Il={activeIdx:-1,pets:[],interactions:[],cachedPets:[],lastRendered:new Date().getTime(),lastSaved:new Date().getTime()},jl=(e,t)=>({stats:Ml(e.logic.stats,t),statuses:Dl(e.logic.statuses),behaviorRules:ni(e.logic.behaviorRules),behaviors:kl(e.logic.behaviors||[],e.baseUrl),interactions:Nl(e.logic.interactions)}),kl=(e,t)=>e.map(r=>({...r,imageUrl:r.image?`${t}/${r.image}`:r.imageUrl||"",bgImageUrl:r.backgroundImage?`${t}/${r.backgroundImage}`:"",position:r.position?r.position:"center",offsetX:r.offsetX?r.offsetX:0,offsetY:r.offsetY?r.offsetY:0})),Tl=(e=[])=>e.map(t=>({statId:t.statId,value:t.value||0})),_l=e=>e?xl(e):[],Ll=e=>e?{on:e.on||"",off:e.off||"",defaultState:e.defaultState||"off"}:null,Nl=e=>e?e.map(t=>({id:t.id,label:t.label,cooldown:t.cooldown,changeStats:Tl(t.changeStats),changeToggle:Ll(t.changeToggle),availability:_l(t.availability)})):[],Ml=(e,t)=>e.map(r=>{const n=t==null?void 0:t.stats.find(i=>i.id===r.id),o=El(r.statEffects);return n?{...r,value:n.value,statEffects:o}:{...r,statEffects:o}}),Dl=e=>Object.keys(e).map(t=>({id:t,label:e[t].label||"",message:e[t].message||"",alertType:e[t].alertType})),zl=(e,t,r)=>{const n=r.find(o=>o.id===e)||{id:e,state:t.defaultState||"off"};return n.state=n.state==="on"?"off":"on",r.filter(o=>o.id!==e).concat([n])},Ul=(e,t,r)=>{const n=(o,i,a)=>{var u;const s=a.find(f=>f.statId===o.id);if(!s)return o.value;const c=o.value+s.value,l=(u=i.find(f=>o.id===f.id))==null?void 0:u.max;return l?ti(c,0,l):c>0?c:0};return e.map(o=>({id:o.id,value:n(o,t,r)}))},ot=(e,t)=>{const r=t!==void 0?t:new Date().getTime();e.lastSaved=r,e.lastRendered=r},si=ei({name:"petStore",initialState:Il,reducers:{pingStore:(e,t)=>{const r=t.payload.time;e.lastRendered=r,t.payload.doSave&&(e.lastSaved=r)},clearSave:()=>{window.localStorage.clear(),window.location.reload()},setActiveId:(e,t)=>{const r=e.pets.findIndex(n=>n.id===t.payload);r===-1?(console.log(`Cannot find pet with id "${t.payload}"`),e.activeIdx=0,ot(e)):(e.activeIdx=r,ot(e))},setActiveIdx:(e,t)=>{e.activeIdx=t.payload,ot(e)},setCachedPayload:(e,t)=>{const r=t.payload;e.cachedPets=r.pets},restoreInteractionFromSave:(e,t)=>{const r=t.payload;e.interactions.find(n=>n.id===r.id)||(console.log(`restoreInteractionFromSave ${r.id} with ${(r.endAt-new Date().getTime())/1e3} secs left`),e.interactions.push(r))},addNewInteractionEvent:(e,t)=>{var i,a;const{interaction:r,time:n}=t.payload;console.log("addNewInteractioNEvent",r);let o=!1;if(r.cooldown&&(o=!0,e.interactions.find(s=>s.id===r.id)||e.interactions.push({id:r.id,startAt:n,endAt:n+(r.cooldown||0)})),r.changeStats.length>0){o=!0;const s=e.pets[e.activeIdx],c=e.cachedPets.findIndex(l=>l.id===s.id);if(c>-1){const l=((i=e.cachedPets[c])==null?void 0:i.stats)||[],u=s.logic.stats;e.cachedPets[c]={...e.cachedPets[c],stats:Ul(l,u,r.changeStats)}}}if(r.changeToggle){console.log("interaction.changeToggle: ",r.changeToggle),o=!0;const s=e.pets[e.activeIdx],c=e.cachedPets.findIndex(l=>l.id===s.id);if(c>-1){const l=((a=e.cachedPets[c])==null?void 0:a.activeToggles)||[],u=zl(r.id,r.changeToggle,l);e.cachedPets[c]={...e.cachedPets[c],activeToggles:u}}}o&&ot(e,n)},removeInteractionEvent:(e,t)=>{const r=t.payload;e.interactions=e.interactions.filter(n=>n.id!==r)},createPet:(e,t)=>{Wn(`

createPet`,t.payload);const{petDefinition:r,initialState:n,isActive:o}=t.payload,i=e.pets.find(l=>l.id===r.id),a=new Date().getTime(),s=jl(r,n||void 0);Wn(`>> createPet: ${r.id}, isActive? ${o}, beingTracked? ${n==null?void 0:n.beingTracked}`);const c={...r,logic:s,bornOn:(n==null?void 0:n.bornOn)||a,bgImage:r.backgroundImage?`${r.baseUrl}/${r.backgroundImage}`:null,bgColor:r.backgroundColor||null};i?e.pets=e.pets.map(l=>l.id===r.id?c:l):e.pets.push(c),n&&(e.cachedPets.find(l=>l.id===(n==null?void 0:n.id))||(e.cachedPets=[...e.cachedPets,{...n,lastSaved:(n==null?void 0:n.lastSaved)||a}]))}}}),{pingStore:Vn,createPet:Fl,setActiveIdx:ci,setActiveId:Bl,clearSave:Wl,setCachedPayload:Vl,addNewInteractionEvent:ql,restoreInteractionFromSave:Hl,removeInteractionEvent:li}=si.actions,ui=e=>e.petStore.activeIdx,fi=e=>e.petStore.pets,Gl=e=>e.petStore.interactions,Jt=e=>e.petStore.cachedPets,Kl=e=>e.petStore.lastRendered,Yl=e=>e.petStore.lastSaved,di=j([Yl],e=>e),Xl=j([Kl],e=>e),J=j([fi,ui],(e,t)=>e[t]||null),tn=j([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.stats)||[]}),Jl=j([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.statuses)||[]}),pi=j([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.interactions)||[]}),Zl=j([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviorRules)||[]}),Ql=j([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviors)||[]}),eu=j([J],e=>({imageUrl:e==null?void 0:e.bgImage,backgroundColor:e==null?void 0:e.bgColor})),tu=j([Jt],e=>e),hi=j([Jt,J],(e,t)=>e.find(r=>r.id===t.id)||null);j([Jt],e=>e.map(t=>t.stats));const mi=j([hi],e=>e?e.stats||[]:[]),gi=j([hi],e=>e?e.activeToggles||[]:[]),vi=j([J],e=>e?{id:e.id,name:e.name,level:e.level,bio:e.bio,bornOn:e.bornOn}:null),yi=j([Gl],e=>e),bi=j([Jt,J],(e,t)=>{var r;return t&&((r=e.find(n=>n.id===t.id))==null?void 0:r.lastSaved)||0}),wi=j([tn,mi,bi,Xl,ai],(e,t,r,n,o)=>vl(e,t,r,n,o)),rn=j([wi,tn,gi,pi],(e,t,r,n)=>{const o=s=>e.find(c=>c.id===s),i=[];for(let s=0;s<t.length;s++){const c=o(t[s].id);if(c)for(let l=0;l<t[s].statEffects.length;l++){const u=wl(t[s].statEffects[l],c.value,c.max);u&&i.indexOf(u)===-1&&i.push(u)}}let a="";return r.forEach(s=>{const c=n.find(l=>l.id===s.id);c!=null&&c.changeToggle&&(s.state==="on"?a=c.changeToggle.on:a=c.changeToggle.off),a&&!i.includes(a)&&i.push(a)}),i.map(s=>s).reverse()}),ru=j([rn,Jl],(e,t)=>e.map(r=>t.find(n=>n.id===r)).filter(r=>!!r)),nu=j([rn,Zl,Ql],(e,t,r)=>{const n=ri(t,e);return r.find(o=>o.id===n)||null}),ou=j([pi,yi,rn],(e,t,r)=>e.map(n=>{const o=t.find(a=>a.id===n.id),i=bl(n.availability,r);return{id:n.id,label:n.label,startAt:(o==null?void 0:o.startAt)||0,endAt:(o==null?void 0:o.endAt)||0,enabled:i,definition:n,cooldownStatus:o}})),iu=j([fi,ui],(e,t)=>e.map((r,n)=>({name:r.name,id:r.id,isActive:n===t}))),au=j([tn,mi,bi,di,ai],(e,t,r,n,o)=>r===n?null:yl(e,t,r,n,o)),su=()=>{try{return JSON.parse(window.localStorage.getItem("browserbuddy")||"")}catch{return console.log('no localStorage entry found for "browserbuddy"'),null}},cu=()=>{try{return su().pets}catch{return[]}};j([cu],e=>e);const lu=j([di,au,J,yi,tu],(e,t,r,n,o)=>{if(!t)return null;if(!r)return Al;const i=o.findIndex(s=>s.id===r.id);let a=[];if(i>-1)a=o.map(s=>{if(s.id===r.id){const c=s.beingTracked?t:s.stats;return{id:r.id,stats:c,bornOn:r.bornOn,lastSaved:e,beingTracked:!0,activeToggles:s.activeToggles}}return{...s,beingTracked:!1}});else{const s=r.logic.interactions.filter(c=>!!c.changeToggle).map(c=>{var l;return{id:c.id,state:((l=c.changeToggle)==null?void 0:l.defaultState)||"off"}});a=o.concat([{id:r.id,stats:t,bornOn:r.bornOn,lastSaved:e,beingTracked:!1,activeToggles:s}])}return{config:{activePet:(r==null?void 0:r.id)||"",lastSaved:e},interactions:n,pets:a}}),uu=si.reducer,fu=x.div`
  padding: 1rem;
  color: var(--color-blue);
  min-width: 30rem;
`,du=x.h1`
  font-size: 2rem;
  text-align: left;
`,qn=x.button`
  border: 0;
  margin: 1rem;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-green);
  border: 0.5rem solid var(--color-white);
  border-radius: 1rem;

  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
`,pu=()=>{const e=Le();return v.jsxs(fu,{children:[v.jsx(du,{children:"About BrowserBuddy"}),v.jsx("p",{children:"© Tom Yancey 2023"}),v.jsxs("div",{children:[v.jsx(co,{to:"/",children:v.jsx(qn,{children:"Home"})}),v.jsx(qn,{onClick:()=>{e(Wl())},children:"Clear Save"})]})]})};function Hn(e,t,r){const n=y.useRef();y.useEffect(()=>{const o=(r==null?void 0:r.current)||window;if(!(o&&o.addEventListener))return;n.current!==t&&(n.current=t);const i=a=>{n!=null&&n.current&&n.current(a)};return o.addEventListener(e,i),()=>{o.removeEventListener(e,i)}},[e,r,t])}function Si(e,t){const r=()=>{if(typeof window>"u")return t;try{const s=window.localStorage.getItem(e);return s?hu(s):t}catch(s){return console.warn(`Error reading localStorage key “${e}”:`,s),t}},[n,o]=y.useState(r),i=s=>{typeof window>"u"&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const c=s instanceof Function?s(n):s;window.localStorage.setItem(e,JSON.stringify(c)),o(c),window.dispatchEvent(new Event("local-storage"))}catch(c){console.warn(`Error setting localStorage key “${e}”:`,c)}};y.useEffect(()=>{o(r())},[]);const a=()=>{o(r())};return Hn("storage",a),Hn("local-storage",a),[n,i]}function hu(e){try{return e==="undefined"?void 0:JSON.parse(e??"")}catch{console.log("parsing error on",{value:e});return}}const mu=al({reducer:{petStore:uu,ui:Rl}}),xi={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},gu=async(e,t,r)=>{const n=await vu(e),o=await bu(n);xu(o,t,r)},vu=async e=>(await yu(e).then(r=>r.pets.map(n=>({id:n.id,baseUrl:n.baseUrl})))).filter(r=>!!r),yu=async e=>{try{const t=await fetch(e,{mode:"cors"});if(!t.ok)return null;const r=await t.text();return JSON.parse(r)}catch(t){return console.error(`Error fetching or parsing manifest from ${e}`,t),null}},bu=async e=>{const t=[];return e.forEach(n=>t.push(wu(n))),(await Promise.all(t)).filter(n=>!!n)},wu=e=>new Promise(t=>t(Su(e))),Su=async e=>{const t=e.baseUrl+"/data.json";try{const r=await fetch(t,{mode:"cors"});if(!r.ok)return console.error(`bad response from ${t}`),null;const n=JSON.parse(await r.text());return n.baseUrl=e.baseUrl,n}catch(r){return console.error(`Error fetching or parsing pet manifest from ${t}`,r),null}},xu=(e,t,r)=>{const n=new Date().getTime();let o="";r.config.activePet&&(o=r.config.activePet),e.forEach(i=>{const a=(r==null?void 0:r.pets.find(s=>s.id===i.id))||null;!o&&a&&r.config.activePet===a.id&&(o=a.id),t(Fl({isActive:o===(a==null?void 0:a.id),petDefinition:i,initialState:a}))}),t(o?Bl(o):ci(0)),r.interactions.filter(i=>i.endAt>n).forEach(i=>{t(a=>{a(Hl(i)),window.setTimeout(()=>{a(li(i.id))},i.endAt-n)})})},Eu=()=>{const e=Le(),[t,r]=y.useState(!1),[n]=Si("browserbuddy",xi);return y.useEffect(()=>{t||(r(!0),window.location.search.indexOf("debug")>-1&&e(Ol(!0)),gu("data/pet-manifest.json",e,n))},[t,n,r,e]),null};function Cu(e,t){const r=y.useRef(e);y.useLayoutEffect(()=>{r.current=e},[e]),y.useEffect(()=>{if(!t&&t!==0)return;const n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[t])}const Gn=2e3,$u=2e3,Pu=()=>{const[e,t]=y.useState(0),r=Le();return Cu(()=>{const n=new Date().getTime(),o=e+1;t(o),o*Gn%$u===0?r(Vn({time:n,doSave:!0})):r(Vn({time:n,doSave:!1}))},Gn),null};let Kn=0;const Ou=()=>{const[,e]=Si("browserbuddy",xi),t=X(lu),r=Le();return y.useEffect(()=>{t&&t.config.activePet&&(e(()=>t),Kn!==t.config.lastSaved&&(Kn=t.config.lastSaved,r(Vl(t))))},[t,r,e]),null},Ru=()=>v.jsxs(v.Fragment,{children:[v.jsx(Ou,{}),v.jsx(Eu,{}),v.jsx(Pu,{})]}),Au=x.div`
  display:inline-block;
  width:calc(50% - 1rem);
  margin-right:1rem;
`,Iu=x.h4`
  font-size: 1rem;
`,ju=x.div`
  position:relative;
  border:.5rem solid var(--color-white);
  border-radius: 1rem;
  overflow:hidden;
  padding:.25rem .5rem;
  text-align:center;
  background-color: var(--color-white);

  box-shadow: 0px -2px 4px var(--color-grey-light);
`,ku=x.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  z-index:1;
`,Tu=x.div`
  position:absolute;
  top:0;
  left:0;
  height:100%; 
  transition: width .3s ease-in-out, background-color .5s ease-in-out;
  background-color: var(--color-blue);
`,_u=x.p`
`,Lu=x.p`
  opacity:.5;
  margin-top:.125rem;
  margin-bottom:0rem;
  font-size:1.25rem;
`,Nu=({label:e,max:t,value:r,hideStats:n=!1})=>{const o=Math.round(r/t*1e3)/10;return v.jsxs(Au,{children:[v.jsx(Iu,{children:e.toLocaleUpperCase()}),v.jsxs(ju,{children:[!n&&v.jsxs(ku,{children:[v.jsx(_u,{children:`${gl(r)} / ${t}`}),v.jsx(Lu,{children:`${o}%`})]}),v.jsx(Tu,{style:{width:`${o}%`}})]})]})},Mu=x.div`
  width:100%;
`,Du=()=>{const e=X(wi);return v.jsx(Mu,{children:e.map((t,r)=>v.jsx(Nu,{label:t.label,max:t.max,value:t.value},r))})},zu=x.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`,Uu=x.div`
  background-color:var(--color-white);
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`,Fu=x.div`
  background-color:var(--color-red);
  position:absolute;
  height:100%;
  left:0;
  width: ${e=>e.$startWidth};

  &.full{
    width:100% !important;
    background-color: var(--color-blue);
  }
  z-index:1;
`,Bu=({startProgress:e,duration:t})=>{const[r,n]=y.useState(!1);return y.useEffect(()=>{r||window.setTimeout(()=>n(!0),1)},[r,n]),v.jsxs(zu,{children:[v.jsx(Fu,{$startWidth:`${e*100}%`,className:r?"full":"",style:{transition:`all ${t}s linear`}}),v.jsx(Uu,{})]})},Ei=x.div`
  font-weight:bold;
  font-size: 2rem;

  padding:1rem .5rem;

  position:relative;
  overflow: hidden;
  cursor:pointer;

  
  background-color: var(--color-blue);
  color: var(--color-white);
  border: .5rem solid var(--color-white);
  border-radius: 1rem;

  ${e=>e.$toggleStyle==="on"&&Q`
    background-color: var(--color-green);
  `}
  ${e=>e.$toggleStyle==="off"&&Q`
    background-color: var(--color-red);
  `}
`,Wu=x(Ei)`
  background-color: var(--color-red);
  border-color: var(--color-white);
  color: var(--color-white);
  
  cursor:not-allowed;
`,Yn=x.li`
  text-align:center;

  ${e=>!e.$isEnabled&&Q`
    opacity: .5;
    pointer-events:none;
  `}
`,Xn=x.p`
  display:block;
  position:relative;
  z-index:2;
  font-size: 2rem;
`,Vu=({cooldownStatus:e,isEnabled:t,interaction:r,toggleState:n,onClickHandler:o})=>{let i=r.label;const a=n?n.state:void 0;if(n&&(i=`${i}: ${n.state}`),e){const s=e.endAt-e.startAt,c=(s-(e.endAt-new Date().getTime()))/s,l=(e.endAt-new Date().getTime())/1e3;return v.jsx(Yn,{$isEnabled:t,children:v.jsxs(Wu,{$toggleStyle:a,children:[v.jsx(Xn,{children:i}),v.jsx(Bu,{startProgress:c,duration:l})]})})}else return v.jsx(Yn,{$isEnabled:t,onClick:()=>o&&o(),children:v.jsx(Ei,{$toggleStyle:a,children:v.jsx(Xn,{children:`${i}`})})})},qu=x.ul`
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
`,Hu=()=>{const e=X(ou,qe),t=X(gi,qe),r=Le(),n=o=>{const i=new Date().getTime();r(a=>{a(ql({interaction:o,time:i})),o.cooldown&&window.setTimeout(()=>{a(li(o.id))},o.cooldown)})};return v.jsx(qu,{children:e.map(o=>v.jsx(Vu,{cooldownStatus:o.cooldownStatus,isEnabled:o.enabled,interaction:o.definition,toggleState:t.find(i=>i.id===o.id),onClickHandler:()=>n(o.definition)},o.id))})},Gu=x.div`
  position:absolute;
  left:0;
  right:0;
  top:-.5rem;
  bottom:0;

  background-color:var(--color-green);
  border:.5rem solid var(--color-white);
  border-radius:2rem;
  overflow:hidden;

  box-shadow: .25rem .25rem .55rem .45rem var(--color-grey);
`,Ku=x.div`
  width:100%;
  height:16rem;

  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight:500;
  padding: 1rem;
  padding-top: .5rem ;
  
  color: var(--color-black);
  

  overflow-y:auto;

  hr{
    border-color:var(--color-blue);
    border-style:dashed;
    margin-top:.5rem;
    margin-bottom:.5rem;

    margin-left:10%;
    width:80%;
  }
`,Yu=x.div`
  width:100%;
`,Xu=x.h4`
  margin-top:1rem;
  margin-bottom:.5rem;
`,Ju=x.p`
  margin-top:1rem;
  padding-left:1rem;
`,Zu=x.div`
  min-height:5rem;
  width:100%;
`,Qu=()=>{const e=X(vi);return e?v.jsxs(Gu,{children:[v.jsx(Zu,{children:v.jsx(Hu,{})}),v.jsxs(Ku,{children:[v.jsx(Du,{}),v.jsx("hr",{}),v.jsxs(Yu,{children:[v.jsx(Xu,{children:"Description"}),v.jsx(Ju,{children:e.bio})]})]})]}):null},ef=wc`
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
  
  html{
    --val-min-width: 35rem;
    --val-min-height: 60rem;

    --color-black: #0f0e0b;
    --color-grey: #373737;
    --color-grey-light: #A39F8E;
    --color-white: #fef8dd;
    --color-blue: #1fb9f3;
    --color-blue-light: #80cbe7;
    --color-green: #51f249;
    --color-yellow: #fff249;
    --color-red: #F55658;
    --color-red-light: #f18283;
    --color-purple: #6b1ff3;

    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Cabin', sans-serif;
    background-color: var(--color-black);
    color: var(--color-white);
  }

  #root{
    margin:0 auto;
    /* for chrome extension */
    min-width:var(--val-min-width);
    min-height:var(--val-min-height);
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
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    text-decoration: none;
    &:active {
      color: inherit;
    }
    &:visited {
      text-decoration: none;
    }
  }
`,tf=()=>Q`
    border-radius: 2rem;
    border: 0.5rem solid;
  `,rf=(e,t="--color-white")=>Q`
    ${tf()}
    border-color: var(${t});
    color: var(${t});
    background-color: var(${e});
  `,nf=x.div`
  color:var(--color-black);
  position:absolute;
  right:0;
  bottom:1rem;
  z-index:1;
`,of=x.ul`
  max-width: 14rem;
  text-align: right;
`,af=x.li`
  /* display:inline-block; */
  white-space:nowrap;
  text-align:right;
  z-index:1;
  
  list-style:none;
  color:var(--color-black);
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
  ${e=>rf(e.$bubbleColors[0],e.$bubbleColors[1])}
`,sf=e=>{switch(e){case"alert":return["--color-red","--color-yellow"];case"warning":return["--color-yellow","--color-red"];case"reward":return["--color-green","--color-white"];default:return["--color-white","--color-grey"]}},cf=()=>-5+Math.random()*5,lf=e=>e*35,uf=()=>{const t=X(ru,qe).filter(r=>r.label);return v.jsx(nf,{children:v.jsx(of,{children:t.map((r,n)=>v.jsx(af,{id:r.id,$bubbleColors:sf(r.alertType),style:{bottom:lf(n),transform:`rotate(${cf()}deg)`},children:r.label},r.id))})})},Jn=x.div`
  position:absolute;
  left:0;
  right:0;
  top:-2rem;
  padding-top:2rem;
  bottom:-2rem;
  padding-bottom:2rem;
  background-color: var(--color-blue);
  border:.5rem solid var(--color-white);

  ${e=>e.$bgImageUrl&&Q`
    background-size:cover;
    background-position: center;
    background-image:url(${e.$bgImageUrl});
  `}
`,ff=x.div`
  background-size:contain;
  background-repeat:no-repeat;
  background-position:center;
  width:100%;
  height:100%;
  text-align:center;

  position:absolute;
  bottom:0;
  left:0;
`,df=x.p`
  font-size:2rem;
  color:var(--color-white);
  opacity: .5;

  position:absolute;
  top:1rem;
  right:1rem;
`,pf=()=>{const e=X(nu,qe),{imageUrl:t,backgroundColor:r}=X(eu,qe);if(!e)return v.jsx(Jn,{$bgImageUrl:t});const n=e.bgImageUrl||t,o={backgroundImage:`url(${e.imageUrl})`,backgroundPosition:`${e.position}`,left:`${e.offsetX}px`,bottom:`${e.offsetY}px`,backgroundColor:r||"initial"};return v.jsx(Jn,{$bgImageUrl:n,children:v.jsxs(v.Fragment,{children:[v.jsx(df,{children:`behavior: ${e.id}`}),v.jsx(uf,{}),v.jsx(ff,{style:o})]})})},hf=x.div`
  width:100%;
  height:100%;
  
  color:var(--color-white);
  background-color: var(--color-blue);
  border:.5rem solid var(--color-white);
  border-radius: 1rem;
  position:relative;
  padding:0.5rem 1rem;

  display:flex;
  box-shadow: .25rem .25rem .25rem .05rem var(--color-grey);

  >div{
    display:inline-block;
    vertical-align:middle;
    height:100%;
  }
`,mf=x.div`
  flex:1;

  >p{
    font-style:italic;
  }

  >h4{
    margin-top:-.5rem;
    margin-bottom: -.5rem;
  }
`,gf=x.div`
  text-align:right;
  color: var(--color-white);
  
  >h4{
    margin:0;
    line-height: 5rem;
  }
`,vf=x.h4`
  text-align:left;
  display:inline-block;
  flex:1;
`,yf=x.p`
  
`,bf=e=>e?new Date(e).toLocaleString("en-us"):null,wf=()=>{const e=X(vi);return v.jsx(hf,{children:e&&v.jsxs(v.Fragment,{children:[v.jsxs(mf,{children:[v.jsx(vf,{children:e.name}),v.jsx(yf,{children:`born on: ${bf(e.bornOn)}`})]}),v.jsx(gf,{})]})})},Sf=x.li`
  list-style: none;
  position: relative;
  z-index: 1;
  min-width: 3rem;
  text-align: center;

  cursor: pointer;

  display: inline-block;
  vertical-align: bottom;
  background-color: var(--color-white);
  color: var(--color-black);

  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  padding: 0.2rem 0.2rem 1rem 0.2rem;
  margin: 0 -0.75rem -3.25rem 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem var(--color-black);

  border: 0.5rem solid var(--color-white);
  border-radius: 1rem 1rem 0 0;

  background-color: var(--color-blue);
  border-bottom-color: var(--color-white);
  color: var(--color-black);
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-blue-light);
  }

  ${e=>e.$isActive&&Q`
      cursor: default;
      &:hover {
        background-color: var(--color-green);
      }
      
      background-color: var(--color-green);
      color: var(--color-black);
      padding: .75rem;
      transition: all 0.2s ease-out;
      font-size: 2.5rem;
      z-index: 2;
      margin-left: .25rem;
      margin-right: -1.25rem;
      margin-bottom: -2rem;

      border-radius: 1rem;
      box-shadow: 0.2rem 0.2rem 0.4rem 0.05rem var(--color-black);

      :first-child {
        margin-left: 0rem;
      }
    `};
`,xf=()=>{const e=X(iu),t=Le();return v.jsx("ul",{children:e.map((r,n)=>v.jsx(Sf,{onClick:()=>t(ci(n)),$isActive:r.isActive,children:n+1},n))})},Ef=x.div`
  padding: 1rem;
  padding-bottom: 1.5rem;
  margin-bottom: -1rem;

  border-radius: 1rem 1rem 0 0;
  background-color: var(--color-red);
  color: var(--color-white);


  text-decoration: none;
  &:visited {
    text-decoration: none;
  }

  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 2rem;
  text-shadow: 1px 1px 1px var(--color-black);
  border: 0.5rem solid var(--color-white);

  cursor: pointer;
  &:hover {
    background-color: var(--color-red-light);
  }
`,Cf=x.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  > ul {
    flex: 1;
  }
`,$f=()=>v.jsxs(Cf,{children:[v.jsx(xf,{}),v.jsx(co,{to:"/about",children:v.jsx(Ef,{children:"?"})})]}),Pf=x.header`
  position: relative;
  height:8rem;
  z-index:1;

  display:flex;
  flex-direction:column;
`,Of=x.div`
  flex: 0 0 3rem;
`,Rf=x.div`
  position:relative;
  z-index:1;
  flex: 1;
`,Af=()=>v.jsxs(Pf,{children:[v.jsx(Of,{children:v.jsx($f,{})}),v.jsx(Rf,{children:v.jsx(wf,{})})]}),If=x.div`
  position: absolute;
  inset: 0;
  margin: auto auto;
  padding: 1rem;
  min-width:var(--val-min-width);
  min-height:var(--val-min-height);
  max-width: 90rem;
  max-height: 100rem;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10rem auto 20rem;
  grid-template-areas:
    'header'
    'body'
    'footer';
    
  color: var(--color-blue);

  > div {
    position: relative;
  }
`,jf=x.div`
  grid-area: header;
`,kf=x.div`
  grid-area: body;
`,Tf=x.div`
  grid-area: footer;
`,_f=()=>v.jsxs(If,{children:[v.jsx(Ru,{}),v.jsx(jf,{children:v.jsx(Af,{})}),v.jsx(kf,{children:v.jsx(pf,{})}),v.jsx(Tf,{children:v.jsx(Qu,{})})]}),Lf=()=>v.jsxs(ba,{children:[v.jsx(gr,{path:"/about",element:v.jsx(pu,{})}),v.jsx(gr,{path:"/",element:v.jsx(_f,{})})]});Ii.createRoot(document.getElementById("root")).render(v.jsx(K.StrictMode,{children:v.jsx(gs,{store:mu,children:v.jsxs($a,{children:[v.jsx(Lf,{}),v.jsx(ef,{})]})})}));
