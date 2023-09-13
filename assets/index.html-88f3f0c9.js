import{r as y,a as Ci,b as $i,R as K,j as v,c as Pi}from"./client-8837fce7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ve.apply(this,arguments)}var ae;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ae||(ae={}));const an="popstate";function Oi(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:u=""}=we(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),gr("",{pathname:a,search:s,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let u=o.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof i=="string"?i:ut(i))}function n(o,i){Et(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return ji(t,r,n,e)}function L(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Et(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ri(){return Math.random().toString(36).substr(2,8)}function sn(e,t){return{usr:e.state,key:e.key,idx:t}}function gr(e,t,r,n){return r===void 0&&(r=null),Ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?we(t):t,{state:r,key:t&&t.key||n||Ri()})}function ut(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function we(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function ji(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,s=ae.Pop,u=null,c=l();c==null&&(c=0,a.replaceState(Ve({},a.state,{idx:c}),""));function l(){return(a.state||{idx:null}).idx}function f(){s=ae.Pop;let b=l(),w=b==null?null:b-c;c=b,u&&u({action:s,location:m.location,delta:w})}function d(b,w){s=ae.Push;let g=gr(m.location,b,w);r&&r(g,b),c=l()+1;let S=sn(g,c),E=m.createHref(g);try{a.pushState(S,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(E)}i&&u&&u({action:s,location:m.location,delta:1})}function p(b,w){s=ae.Replace;let g=gr(m.location,b,w);r&&r(g,b),c=l();let S=sn(g,c),E=m.createHref(g);a.replaceState(S,"",E),i&&u&&u({action:s,location:m.location,delta:0})}function h(b){let w=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof b=="string"?b:ut(b);return L(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let m={get action(){return s},get location(){return e(o,a)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(an,f),u=b,()=>{o.removeEventListener(an,f),u=null}},createHref(b){return t(o,b)},createURL:h,encodeLocation(b){let w=h(b);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:p,go(b){return a.go(b)}};return m}var cn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cn||(cn={}));function Ai(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?we(t):t,o=Lr(n.pathname||"/",r);if(o==null)return null;let i=Qn(e);Ii(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Ui(i[s],Wi(o));return a}function Qn(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(L(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let c=se([n,u.relativePath]),l=r.concat(u);i.children&&i.children.length>0&&(L(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Qn(i.children,t,l,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Di(c,i.index),routesMeta:l})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let u of eo(i.path))o(i,a,u)}),t}function eo(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=eo(n.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Ii(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:zi(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const ki=/^:\w+$/,Ti=3,_i=2,Li=1,Mi=10,Ni=-2,un=e=>e==="*";function Di(e,t){let r=e.split("/"),n=r.length;return r.some(un)&&(n+=Ni),t&&(n+=_i),r.filter(o=>!un(o)).reduce((o,i)=>o+(ki.test(i)?Ti:i===""?Li:Mi),n)}function zi(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Ui(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",l=Fi({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!l)return null;Object.assign(n,l.params);let f=s.route;i.push({params:n,pathname:se([o,l.pathname]),pathnameBase:Hi(se([o,l.pathnameBase])),route:f}),l.pathnameBase!=="/"&&(o=se([o,l.pathnameBase]))}return i}function Fi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Bi(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((c,l,f)=>{if(l==="*"){let d=s[f]||"";a=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return c[l]=Vi(s[f]||"",l),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Bi(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Et(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(n.push(s),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Wi(e){try{return decodeURI(e)}catch(t){return Et(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vi(e,t){try{return decodeURIComponent(e)}catch(r){return Et(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Lr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function qi(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?we(e):e;return{pathname:r?r.startsWith("/")?r:Gi(r,t):t,search:Ki(n),hash:Yi(o)}}function Gi(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function rr(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function to(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ro(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=we(e):(o=Ve({},e),L(!o.pathname||!o.pathname.includes("?"),rr("?","pathname","search",o)),L(!o.pathname||!o.pathname.includes("#"),rr("#","pathname","hash",o)),L(!o.search||!o.search.includes("#"),rr("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(n||a==null)s=r;else{let f=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}s=f>=0?t[f]:"/"}let u=qi(o,s),c=a&&a!=="/"&&a.endsWith("/"),l=(i||a===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||l)&&(u.pathname+="/"),u}const se=e=>e.join("/").replace(/\/\/+/g,"/"),Hi=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ki=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yi=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xi(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const no=["post","put","patch","delete"];new Set(no);const Ji=["get",...no];new Set(Ji);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lt(){return lt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},lt.apply(this,arguments)}const Mr=y.createContext(null),Zi=y.createContext(null),_e=y.createContext(null),Ct=y.createContext(null),Se=y.createContext({outlet:null,matches:[],isDataRoute:!1}),oo=y.createContext(null);function Qi(e,t){let{relative:r}=t===void 0?{}:t;Je()||L(!1);let{basename:n,navigator:o}=y.useContext(_e),{hash:i,pathname:a,search:s}=ao(e,{relative:r}),u=a;return n!=="/"&&(u=a==="/"?n:se([n,a])),o.createHref({pathname:u,search:s,hash:i})}function Je(){return y.useContext(Ct)!=null}function $t(){return Je()||L(!1),y.useContext(Ct).location}function io(e){y.useContext(_e).static||y.useLayoutEffect(e)}function ea(){let{isDataRoute:e}=y.useContext(Se);return e?pa():ta()}function ta(){Je()||L(!1);let e=y.useContext(Mr),{basename:t,navigator:r}=y.useContext(_e),{matches:n}=y.useContext(Se),{pathname:o}=$t(),i=JSON.stringify(to(n).map(u=>u.pathnameBase)),a=y.useRef(!1);return io(()=>{a.current=!0}),y.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let l=ro(u,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:se([t,l.pathname])),(c.replace?r.replace:r.push)(l,c.state,c)},[t,r,i,o,e])}function ao(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=y.useContext(Se),{pathname:o}=$t(),i=JSON.stringify(to(n).map(a=>a.pathnameBase));return y.useMemo(()=>ro(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function ra(e,t){return na(e,t)}function na(e,t,r){Je()||L(!1);let{navigator:n}=y.useContext(_e),{matches:o}=y.useContext(Se),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=$t(),c;if(t){var l;let m=typeof t=="string"?we(t):t;s==="/"||(l=m.pathname)!=null&&l.startsWith(s)||L(!1),c=m}else c=u;let f=c.pathname||"/",d=s==="/"?f:f.slice(s.length)||"/",p=Ai(e,{pathname:d}),h=ca(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:se([s,n.encodeLocation?n.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:se([s,n.encodeLocation?n.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,r);return t&&h?y.createElement(Ct.Provider,{value:{location:lt({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ae.Pop}},h):h}function oa(){let e=da(),t=Xi(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:o},r):null,i)}const ia=y.createElement(oa,null);class aa extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?y.createElement(Se.Provider,{value:this.props.routeContext},y.createElement(oo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sa(e){let{routeContext:t,match:r,children:n}=e,o=y.useContext(Mr);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(Se.Provider,{value:t},n)}function ca(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let i=e,a=(n=r)==null?void 0:n.errors;if(a!=null){let s=i.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));s>=0||L(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,u,c)=>{let l=u.route.id?a==null?void 0:a[u.route.id]:null,f=null;r&&(f=u.route.errorElement||ia);let d=t.concat(i.slice(0,c+1)),p=()=>{let h;return l?h=f:u.route.Component?h=y.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=s,y.createElement(sa,{match:u,routeContext:{outlet:s,matches:d,isDataRoute:r!=null},children:h})};return r&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?y.createElement(aa,{location:r.location,revalidation:r.revalidation,component:f,error:l,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var so=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(so||{}),ft=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ft||{});function ua(e){let t=y.useContext(Mr);return t||L(!1),t}function la(e){let t=y.useContext(Zi);return t||L(!1),t}function fa(e){let t=y.useContext(Se);return t||L(!1),t}function co(e){let t=fa(),r=t.matches[t.matches.length-1];return r.route.id||L(!1),r.route.id}function da(){var e;let t=y.useContext(oo),r=la(ft.UseRouteError),n=co(ft.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function pa(){let{router:e}=ua(so.UseNavigateStable),t=co(ft.UseNavigateStable),r=y.useRef(!1);return io(()=>{r.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,lt({fromRouteId:t},i)))},[e,t])}function vr(e){L(!1)}function ha(e){let{basename:t="/",children:r=null,location:n,navigationType:o=ae.Pop,navigator:i,static:a=!1}=e;Je()&&L(!1);let s=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof n=="string"&&(n=we(n));let{pathname:c="/",search:l="",hash:f="",state:d=null,key:p="default"}=n,h=y.useMemo(()=>{let m=Lr(c,s);return m==null?null:{location:{pathname:m,search:l,hash:f,state:d,key:p},navigationType:o}},[s,c,l,f,d,p,o]);return h==null?null:y.createElement(_e.Provider,{value:u},y.createElement(Ct.Provider,{children:r,value:h}))}function ma(e){let{children:t,location:r}=e;return ra(yr(t),r)}new Promise(()=>{});function yr(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(n,o)=>{if(!y.isValidElement(n))return;let i=[...t,o];if(n.type===y.Fragment){r.push.apply(r,yr(n.props.children,i));return}n.type!==vr&&L(!1),!n.props.index||!n.props.children||L(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=yr(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},br.apply(this,arguments)}function ga(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function va(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ya(e,t){return e.button===0&&(!t||t==="_self")&&!va(e)}const ba=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],wa="startTransition",ln=Ci[wa];function Sa(e){let{basename:t,children:r,future:n,window:o}=e,i=y.useRef();i.current==null&&(i.current=Oi({window:o,v5Compat:!0}));let a=i.current,[s,u]=y.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},l=y.useCallback(f=>{c&&ln?ln(()=>u(f)):u(f)},[u,c]);return y.useLayoutEffect(()=>a.listen(l),[a,l]),y.createElement(ha,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a})}const xa=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ea=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uo=y.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:s,target:u,to:c,preventScrollReset:l}=t,f=ga(t,ba),{basename:d}=y.useContext(_e),p,h=!1;if(typeof c=="string"&&Ea.test(c)&&(p=c,xa))try{let g=new URL(window.location.href),S=c.startsWith("//")?new URL(g.protocol+c):new URL(c),E=Lr(S.pathname,d);S.origin===g.origin&&E!=null?c=E+S.search+S.hash:h=!0}catch{}let m=Qi(c,{relative:o}),b=Ca(c,{replace:a,state:s,target:u,preventScrollReset:l,relative:o});function w(g){n&&n(g),g.defaultPrevented||b(g)}return y.createElement("a",br({},f,{href:p||m,onClick:h||i?n:w,ref:r,target:u}))});var fn;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(fn||(fn={}));var dn;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dn||(dn={}));function Ca(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=ea(),u=$t(),c=ao(e,{relative:a});return y.useCallback(l=>{if(ya(l,r)){l.preventDefault();let f=n!==void 0?n:ut(u)===ut(c);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[u,s,c,n,o,r,e,i,a])}var lo={exports:{}},fo={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=y;function $a(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pa=typeof Object.is=="function"?Object.is:$a,Oa=Oe.useState,Ra=Oe.useEffect,ja=Oe.useLayoutEffect,Aa=Oe.useDebugValue;function Ia(e,t){var r=t(),n=Oa({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return ja(function(){o.value=r,o.getSnapshot=t,nr(o)&&i({inst:o})},[e,r,t]),Ra(function(){return nr(o)&&i({inst:o}),e(function(){nr(o)&&i({inst:o})})},[e]),Aa(r),r}function nr(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Pa(e,r)}catch{return!0}}function ka(e,t){return t()}var Ta=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ka:Ia;fo.useSyncExternalStore=Oe.useSyncExternalStore!==void 0?Oe.useSyncExternalStore:Ta;lo.exports=fo;var _a=lo.exports,po={exports:{}},ho={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt=y,La=_a;function Ma(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Na=typeof Object.is=="function"?Object.is:Ma,Da=La.useSyncExternalStore,za=Pt.useRef,Ua=Pt.useEffect,Fa=Pt.useMemo,Ba=Pt.useDebugValue;ho.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=za(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Fa(function(){function u(p){if(!c){if(c=!0,l=p,p=n(p),o!==void 0&&a.hasValue){var h=a.value;if(o(h,p))return f=h}return f=p}if(h=f,Na(l,p))return h;var m=n(p);return o!==void 0&&o(h,m)?h:(l=p,f=m)}var c=!1,l,f,d=r===void 0?null:r;return[function(){return u(t())},d===null?void 0:function(){return u(d())}]},[t,r,n,o]);var s=Da(e,i[0],i[1]);return Ua(function(){a.hasValue=!0,a.value=s},[s]),Ba(s),s};po.exports=ho;var Wa=po.exports;function Va(e){e()}let mo=Va;const qa=e=>mo=e,Ga=()=>mo,pn=Symbol.for("react-redux-context"),hn=typeof globalThis<"u"?globalThis:{};function Ha(){var e;if(!y.createContext)return{};const t=(e=hn[pn])!=null?e:hn[pn]=new Map;let r=t.get(y.createContext);return r||(r=y.createContext(null),t.set(y.createContext,r)),r}const fe=Ha();function Nr(e=fe){return function(){return y.useContext(e)}}const go=Nr(),Ka=()=>{throw new Error("uSES not initialized!")};let vo=Ka;const Ya=e=>{vo=e},Xa=(e,t)=>e===t;function Ja(e=fe){const t=e===fe?go:Nr(e);return function(n,o={}){const{equalityFn:i=Xa,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:u,subscription:c,getServerState:l,stabilityCheck:f,noopCheck:d}=t();y.useRef(!0);const p=y.useCallback({[n.name](m){return n(m)}}[n.name],[n,f,a]),h=vo(c.addNestedSub,u.getState,l||u.getState,p,i);return y.useDebugValue(h),h}}const Z=Ja();var yo={exports:{}},j={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=typeof Symbol=="function"&&Symbol.for,Dr=N?Symbol.for("react.element"):60103,zr=N?Symbol.for("react.portal"):60106,Ot=N?Symbol.for("react.fragment"):60107,Rt=N?Symbol.for("react.strict_mode"):60108,jt=N?Symbol.for("react.profiler"):60114,At=N?Symbol.for("react.provider"):60109,It=N?Symbol.for("react.context"):60110,Ur=N?Symbol.for("react.async_mode"):60111,kt=N?Symbol.for("react.concurrent_mode"):60111,Tt=N?Symbol.for("react.forward_ref"):60112,_t=N?Symbol.for("react.suspense"):60113,Za=N?Symbol.for("react.suspense_list"):60120,Lt=N?Symbol.for("react.memo"):60115,Mt=N?Symbol.for("react.lazy"):60116,Qa=N?Symbol.for("react.block"):60121,es=N?Symbol.for("react.fundamental"):60117,ts=N?Symbol.for("react.responder"):60118,rs=N?Symbol.for("react.scope"):60119;function B(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dr:switch(e=e.type,e){case Ur:case kt:case Ot:case jt:case Rt:case _t:return e;default:switch(e=e&&e.$$typeof,e){case It:case Tt:case Mt:case Lt:case At:return e;default:return t}}case zr:return t}}}function bo(e){return B(e)===kt}j.AsyncMode=Ur;j.ConcurrentMode=kt;j.ContextConsumer=It;j.ContextProvider=At;j.Element=Dr;j.ForwardRef=Tt;j.Fragment=Ot;j.Lazy=Mt;j.Memo=Lt;j.Portal=zr;j.Profiler=jt;j.StrictMode=Rt;j.Suspense=_t;j.isAsyncMode=function(e){return bo(e)||B(e)===Ur};j.isConcurrentMode=bo;j.isContextConsumer=function(e){return B(e)===It};j.isContextProvider=function(e){return B(e)===At};j.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr};j.isForwardRef=function(e){return B(e)===Tt};j.isFragment=function(e){return B(e)===Ot};j.isLazy=function(e){return B(e)===Mt};j.isMemo=function(e){return B(e)===Lt};j.isPortal=function(e){return B(e)===zr};j.isProfiler=function(e){return B(e)===jt};j.isStrictMode=function(e){return B(e)===Rt};j.isSuspense=function(e){return B(e)===_t};j.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ot||e===kt||e===jt||e===Rt||e===_t||e===Za||typeof e=="object"&&e!==null&&(e.$$typeof===Mt||e.$$typeof===Lt||e.$$typeof===At||e.$$typeof===It||e.$$typeof===Tt||e.$$typeof===es||e.$$typeof===ts||e.$$typeof===rs||e.$$typeof===Qa)};j.typeOf=B;yo.exports=j;var ns=yo.exports,wo=ns,os={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},is={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},So={};So[wo.ForwardRef]=os;So[wo.Memo]=is;var A={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),Ut=Symbol.for("react.provider"),Ft=Symbol.for("react.context"),as=Symbol.for("react.server_context"),Bt=Symbol.for("react.forward_ref"),Wt=Symbol.for("react.suspense"),Vt=Symbol.for("react.suspense_list"),qt=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),ss=Symbol.for("react.offscreen"),xo;xo=Symbol.for("react.module.reference");function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fr:switch(e=e.type,e){case Nt:case zt:case Dt:case Wt:case Vt:return e;default:switch(e=e&&e.$$typeof,e){case as:case Ft:case Bt:case Gt:case qt:case Ut:return e;default:return t}}case Br:return t}}}A.ContextConsumer=Ft;A.ContextProvider=Ut;A.Element=Fr;A.ForwardRef=Bt;A.Fragment=Nt;A.Lazy=Gt;A.Memo=qt;A.Portal=Br;A.Profiler=zt;A.StrictMode=Dt;A.Suspense=Wt;A.SuspenseList=Vt;A.isAsyncMode=function(){return!1};A.isConcurrentMode=function(){return!1};A.isContextConsumer=function(e){return V(e)===Ft};A.isContextProvider=function(e){return V(e)===Ut};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr};A.isForwardRef=function(e){return V(e)===Bt};A.isFragment=function(e){return V(e)===Nt};A.isLazy=function(e){return V(e)===Gt};A.isMemo=function(e){return V(e)===qt};A.isPortal=function(e){return V(e)===Br};A.isProfiler=function(e){return V(e)===zt};A.isStrictMode=function(e){return V(e)===Dt};A.isSuspense=function(e){return V(e)===Wt};A.isSuspenseList=function(e){return V(e)===Vt};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nt||e===zt||e===Dt||e===Wt||e===Vt||e===ss||typeof e=="object"&&e!==null&&(e.$$typeof===Gt||e.$$typeof===qt||e.$$typeof===Ut||e.$$typeof===Ft||e.$$typeof===Bt||e.$$typeof===xo||e.getModuleId!==void 0)};A.typeOf=V;function cs(){const e=Ga();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const mn={notify(){},get:()=>[]};function us(e,t){let r,n=mn;function o(f){return u(),n.subscribe(f)}function i(){n.notify()}function a(){l.onStateChange&&l.onStateChange()}function s(){return!!r}function u(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=cs())}function c(){r&&(r(),r=void 0,n.clear(),n=mn)}const l={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>n};return l}const ls=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fs=ls?y.useLayoutEffect:y.useEffect;function gn(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function dt(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!gn(e[r[o]],t[r[o]]))return!1;return!0}function ds({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){const a=y.useMemo(()=>{const c=us(e);return{store:e,subscription:c,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[e,n,o,i]),s=y.useMemo(()=>e.getState(),[e]);fs(()=>{const{subscription:c}=a;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[a,s]);const u=t||fe;return y.createElement(u.Provider,{value:a},r)}function Eo(e=fe){const t=e===fe?go:Nr(e);return function(){const{store:n}=t();return n}}const ps=Eo();function hs(e=fe){const t=e===fe?ps:Eo(e);return function(){return t().dispatch}}const Le=hs();Ya(Wa.useSyncExternalStoreWithSelector);qa($i.unstable_batchedUpdates);var z=function(){return z=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},z.apply(this,arguments)};function qe(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var I="-ms-",We="-moz-",O="-webkit-",Co="comm",Ht="rule",Wr="decl",ms="@import",$o="@keyframes",gs="@layer",vs=Math.abs,Vr=String.fromCharCode,wr=Object.assign;function ys(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function Po(e){return e.trim()}function J(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function it(e,t){return e.indexOf(t)}function M(e,t){return e.charCodeAt(t)|0}function Re(e,t,r){return e.slice(t,r)}function H(e){return e.length}function Oo(e){return e.length}function Fe(e,t){return t.push(e),e}function bs(e,t){return e.map(t).join("")}function vn(e,t){return e.filter(function(r){return!J(r,t)})}var Kt=1,je=1,Ro=0,W=0,_=0,Me="";function Yt(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Kt,column:je,length:a,return:"",siblings:s}}function oe(e,t){return wr(Yt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ee(e){for(;e.root;)e=oe(e.root,{children:[e]});Fe(e,e.siblings)}function ws(){return _}function Ss(){return _=W>0?M(Me,--W):0,je--,_===10&&(je=1,Kt--),_}function G(){return _=W<Ro?M(Me,W++):0,je++,_===10&&(je=1,Kt++),_}function ye(){return M(Me,W)}function at(){return W}function Xt(e,t){return Re(Me,e,t)}function Sr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xs(e){return Kt=je=1,Ro=H(Me=e),W=0,[]}function Es(e){return Me="",e}function or(e){return Po(Xt(W-1,xr(e===91?e+2:e===40?e+1:e)))}function Cs(e){for(;(_=ye())&&_<33;)G();return Sr(e)>2||Sr(_)>3?"":" "}function $s(e,t){for(;--t&&G()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Xt(e,at()+(t<6&&ye()==32&&G()==32))}function xr(e){for(;G();)switch(_){case e:return W;case 34:case 39:e!==34&&e!==39&&xr(_);break;case 40:e===41&&xr(e);break;case 92:G();break}return W}function Ps(e,t){for(;G()&&e+_!==47+10;)if(e+_===42+42&&ye()===47)break;return"/*"+Xt(t,W-1)+"*"+Vr(e===47?e:G())}function Os(e){for(;!Sr(ye());)G();return Xt(e,W)}function Rs(e){return Es(st("",null,null,null,[""],e=xs(e),0,[0],e))}function st(e,t,r,n,o,i,a,s,u){for(var c=0,l=0,f=a,d=0,p=0,h=0,m=1,b=1,w=1,g=0,S="",E=o,C=i,R=n,$=S;b;)switch(h=g,g=G()){case 40:if(h!=108&&M($,f-1)==58){it($+=P(or(g),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:$+=or(g);break;case 9:case 10:case 13:case 32:$+=Cs(h);break;case 92:$+=$s(at()-1,7);continue;case 47:switch(ye()){case 42:case 47:Fe(js(Ps(G(),at()),t,r,u),u);break;default:$+="/"}break;case 123*m:s[c++]=H($)*w;case 125*m:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+l:w==-1&&($=P($,/\f/g,"")),p>0&&H($)-f&&Fe(p>32?bn($+";",n,r,f-1,u):bn(P($," ","")+";",n,r,f-2,u),u);break;case 59:$+=";";default:if(Fe(R=yn($,t,r,c,l,o,s,S,E=[],C=[],f,i),i),g===123)if(l===0)st($,t,R,R,E,i,f,s,C);else switch(d===99&&M($,3)===110?100:d){case 100:case 108:case 109:case 115:st(e,R,R,n&&Fe(yn(e,R,R,0,0,o,s,S,o,E=[],f,C),C),o,C,f,s,n?E:C);break;default:st($,R,R,R,[""],C,0,s,C)}}c=l=p=0,m=w=1,S=$="",f=a;break;case 58:f=1+H($),p=h;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&Ss()==125)continue}switch($+=Vr(g),g*m){case 38:w=l>0?1:($+="\f",-1);break;case 44:s[c++]=(H($)-1)*w,w=1;break;case 64:ye()===45&&($+=or(G())),d=ye(),l=f=H(S=$+=Os(at())),g++;break;case 45:h===45&&H($)==2&&(m=0)}}return i}function yn(e,t,r,n,o,i,a,s,u,c,l,f){for(var d=o-1,p=o===0?i:[""],h=Oo(p),m=0,b=0,w=0;m<n;++m)for(var g=0,S=Re(e,d+1,d=vs(b=a[m])),E=e;g<h;++g)(E=Po(b>0?p[g]+" "+S:P(S,/&\f/g,p[g])))&&(u[w++]=E);return Yt(e,t,r,o===0?Ht:s,u,c,l,f)}function js(e,t,r,n){return Yt(e,t,r,Co,Vr(ws()),Re(e,2,-2),0,n)}function bn(e,t,r,n,o){return Yt(e,t,r,Wr,Re(e,0,n),Re(e,n+1,-1),n,o)}function jo(e,t,r){switch(ys(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return We+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+We+e+I+e+e;case 5936:switch(M(e,t+11)){case 114:return O+e+I+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+I+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+I+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+I+e+e;case 6165:return O+e+I+"flex-"+e+e;case 5187:return O+e+P(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+I+"flex-$1$2")+e;case 5443:return O+e+I+"flex-item-"+P(e,/flex-|-self/g,"")+(J(e,/flex-|baseline/)?"":I+"grid-row-"+P(e,/flex-|-self/g,""))+e;case 4675:return O+e+I+"flex-line-pack"+P(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+I+P(e,"shrink","negative")+e;case 5292:return O+e+I+P(e,"basis","preferred-size")+e;case 6060:return O+"box-"+P(e,"-grow","")+O+e+I+P(e,"grow","positive")+e;case 4554:return O+P(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!J(e,/flex-|baseline/))return I+"grid-column-align"+Re(e,t)+e;break;case 2592:case 3360:return I+P(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,J(n.props,/grid-\w+-end/)})?~it(e+(r=r[t].value),"span")?e:I+P(e,"-start","")+e+I+"grid-row-span:"+(~it(r,"span")?J(r,/\d+/):+J(r,/\d+/)-+J(e,/\d+/))+";":I+P(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return J(n.props,/grid-\w+-start/)})?e:I+P(P(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(H(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+We+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~it(e,"stretch")?jo(P(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,s,u,c){return I+o+":"+i+c+(a?I+o+"-span:"+(s?u:+u-+i)+c:"")+e});case 4949:if(M(e,t+6)===121)return P(e,":",":"+O)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(M(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+I+"$2box$3")+e;case 100:return P(e,":",":"+I)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,"scroll-","scroll-snap-")+e}return e}function pt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function As(e,t,r,n){switch(e.type){case gs:if(e.children.length)break;case ms:case Wr:return e.return=e.return||e.value;case Co:return"";case $o:return e.return=e.value+"{"+pt(e.children,n)+"}";case Ht:if(!H(e.value=e.props.join(",")))return""}return H(r=pt(e.children,n))?e.return=e.value+"{"+r+"}":""}function Is(e){var t=Oo(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}function ks(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ts(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Wr:e.return=jo(e.value,e.length,r);return;case $o:return pt([oe(e,{value:P(e.value,"@","@"+O)})],n);case Ht:if(e.length)return bs(r=e.props,function(o){switch(J(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ee(oe(e,{props:[P(o,/:(read-\w+)/,":"+We+"$1")]})),Ee(oe(e,{props:[o]})),wr(e,{props:vn(r,n)});break;case"::placeholder":Ee(oe(e,{props:[P(o,/:(plac\w+)/,":"+O+"input-$1")]})),Ee(oe(e,{props:[P(o,/:(plac\w+)/,":"+We+"$1")]})),Ee(oe(e,{props:[P(o,/:(plac\w+)/,I+"input-$1")]})),Ee(oe(e,{props:[o]})),wr(e,{props:vn(r,n)});break}return""})}}var _s={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ae=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",qr=typeof window<"u"&&"HTMLElement"in window,Ls=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Ms={},Jt=Object.freeze([]),Ie=Object.freeze({});function Ao(e,t,r){return r===void 0&&(r=Ie),e.theme!==r.theme&&e.theme||t||r.theme}var Io=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ns=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ds=/(^-|-$)/g;function wn(e){return e.replace(Ns,"-").replace(Ds,"")}var zs=/(a)(d)/gi,Sn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Er(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Sn(t%52)+r;return(Sn(t%52)+r).replace(zs,"$1-$2")}var ir,Ce=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ko=function(e){return Ce(5381,e)};function To(e){return Er(ko(e)>>>0)}function Us(e){return e.displayName||e.name||"Component"}function ar(e){return typeof e=="string"&&!0}var _o=typeof Symbol=="function"&&Symbol.for,Lo=_o?Symbol.for("react.memo"):60115,Fs=_o?Symbol.for("react.forward_ref"):60112,Bs={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ws={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vs=((ir={})[Fs]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ir[Lo]=Mo,ir);function xn(e){return("type"in(t=e)&&t.type.$$typeof)===Lo?Mo:"$$typeof"in e?Vs[e.$$typeof]:Bs;var t}var qs=Object.defineProperty,Gs=Object.getOwnPropertyNames,En=Object.getOwnPropertySymbols,Hs=Object.getOwnPropertyDescriptor,Ks=Object.getPrototypeOf,Cn=Object.prototype;function No(e,t,r){if(typeof t!="string"){if(Cn){var n=Ks(t);n&&n!==Cn&&No(e,n,r)}var o=Gs(t);En&&(o=o.concat(En(t)));for(var i=xn(e),a=xn(t),s=0;s<o.length;++s){var u=o[s];if(!(u in Ws||r&&r[u]||a&&u in a||i&&u in i)){var c=Hs(t,u);try{qs(e,u,c)}catch{}}}}return e}function ke(e){return typeof e=="function"}function Gr(e){return typeof e=="object"&&"styledComponentId"in e}function ve(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Cr(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ge(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $r(e,t,r){if(r===void 0&&(r=!1),!r&&!Ge(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=$r(e[n],t[n]);else if(Ge(t))for(var n in t)e[n]=$r(e[n],t[n]);return e}function Hr(e,t){Object.defineProperty(e,"toString",{value:t})}function Ze(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ys=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Ze(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),u=(a=0,r.length);a<u;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),ct=new Map,ht=new Map,sr=1,nt=function(e){if(ct.has(e))return ct.get(e);for(;ht.has(sr);)sr++;var t=sr++;return ct.set(e,t),ht.set(t,e),t},Xs=function(e,t){ct.set(e,t),ht.set(t,e)},Js="style[".concat(Ae,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Zs=new RegExp("^".concat(Ae,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qs=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},ec=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var u=s.match(Zs);if(u){var c=0|parseInt(u[1],10),l=u[2];c!==0&&(Xs(l,c),Qs(e,l,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}};function tc(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Do=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var u=Array.from(s.querySelectorAll("style[".concat(Ae,"]")));return u[u.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Ae,"active"),n.setAttribute("data-styled-version","6.0.7");var a=tc();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},rc=function(){function e(t){this.element=Do(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Ze(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),nc=function(){function e(t){this.element=Do(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),oc=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$n=qr,ic={isServer:!qr,useCSSOMInjection:!Ls},mt=function(){function e(t,r,n){t===void 0&&(t=Ie),r===void 0&&(r={});var o=this;this.options=z(z({},ic),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&qr&&$n&&($n=!1,function(i){for(var a=document.querySelectorAll(Js),s=0,u=a.length;s<u;s++){var c=a[s];c&&c.getAttribute(Ae)!=="active"&&(ec(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Hr(this,function(){return function(i){for(var a=i.getTag(),s=a.length,u="",c=function(f){var d=function(w){return ht.get(w)}(f);if(d===void 0)return"continue";var p=i.names.get(d),h=a.getGroup(f);if(p===void 0||h.length===0)return"continue";var m="".concat(Ae,".g").concat(f,'[id="').concat(d,'"]'),b="";p!==void 0&&p.forEach(function(w){w.length>0&&(b+="".concat(w,","))}),u+="".concat(h).concat(m,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},l=0;l<s;l++)c(l);return u}(o)})}return e.registerId=function(t){return nt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(z(z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new oc(o):n?new rc(o):new nc(o)}(this.options),new Ys(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(nt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(nt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(nt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ac=/&/g,sc=/^\s*\/\/.*$/gm;function zo(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=zo(r.children,t)),r})}function cc(e){var t,r,n,o=e===void 0?Ie:e,i=o.options,a=i===void 0?Ie:i,s=o.plugins,u=s===void 0?Jt:s,c=function(d,p,h){return h===r||h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):d},l=u.slice();l.push(function(d){d.type===Ht&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(ac,r).replace(n,c))}),a.prefix&&l.push(Ts),l.push(As);var f=function(d,p,h,m){p===void 0&&(p=""),h===void 0&&(h=""),m===void 0&&(m="&"),t=m,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var b=d.replace(sc,""),w=Rs(h||p?"".concat(h," ").concat(p," { ").concat(b," }"):b);a.namespace&&(w=zo(w,a.namespace));var g=[];return pt(w,Is(l.concat(ks(function(S){return g.push(S)})))),g};return f.hash=u.length?u.reduce(function(d,p){return p.name||Ze(15),Ce(d,p.name)},5381).toString():"",f}var uc=new mt,Pr=cc(),Uo=K.createContext({shouldForwardProp:void 0,styleSheet:uc,stylis:Pr});Uo.Consumer;K.createContext(void 0);function Or(){return y.useContext(Uo)}var lc=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Pr);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Hr(this,function(){throw Ze(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pr),this.name+t.hash},e}(),fc=function(e){return e>="A"&&e<="Z"};function Pn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;fc(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Fo=function(e){return e==null||e===!1||e===""},Bo=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Fo(i)&&(Array.isArray(i)&&i.isCss||ke(i)?n.push("".concat(Pn(o),":"),i,";"):Ge(i)?n.push.apply(n,qe(qe(["".concat(o," {")],Bo(i),!1),["}"],!1)):n.push("".concat(Pn(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in _s||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function ce(e,t,r,n){if(Fo(e))return[];if(Gr(e))return[".".concat(e.styledComponentId)];if(ke(e)){if(!ke(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return ce(o,t,r,n)}var i;return e instanceof lc?r?(e.inject(r,n),[e.getName(n)]):[e]:Ge(e)?Bo(e):Array.isArray(e)?Array.prototype.concat.apply(Jt,e.map(function(a){return ce(a,t,r,n)})):[e.toString()]}function Wo(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ke(r)&&!Gr(r))return!1}return!0}var dc=ko("6.0.7"),pc=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Wo(t),this.componentId=r,this.baseHash=Ce(dc,r),this.baseStyle=n,mt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=ve(o,this.staticRulesId);else{var i=Cr(ce(this.rules,t,r,n)),a=Er(Ce(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}o=ve(o,a),this.staticRulesId=a}else{for(var u=Ce(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var f=this.rules[l];if(typeof f=="string")c+=f;else if(f){var d=Cr(ce(f,t,r,n));u=Ce(u,d),c+=d}}if(c){var p=Er(u>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(c,".".concat(p),void 0,this.componentId)),o=ve(o,p)}}return o},e}(),Kr=K.createContext(void 0);Kr.Consumer;var cr={};function hc(e,t,r){var n=Gr(e),o=e,i=!ar(e),a=t.attrs,s=a===void 0?Jt:a,u=t.componentId,c=u===void 0?function(S,E){var C=typeof S!="string"?"sc":wn(S);cr[C]=(cr[C]||0)+1;var R="".concat(C,"-").concat(To("6.0.7"+C+cr[C]));return E?"".concat(E,"-").concat(R):R}(t.displayName,t.parentComponentId):u,l=t.displayName;l===void 0&&function(S){return ar(S)?"styled.".concat(S):"Styled(".concat(Us(S),")")}(e);var f=t.displayName&&t.componentId?"".concat(wn(t.displayName),"-").concat(t.componentId):t.componentId||c,d=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,p=t.shouldForwardProp;if(n&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;p=function(S,E){return h(S,E)&&m(S,E)}}else p=h}var b=new pc(r,f,n?o.componentStyle:void 0);function w(S,E){return function(C,R,$){var pe=C.attrs,ee=C.componentStyle,U=C.defaultProps,he=C.foldedComponentIds,wi=C.styledComponentId,Si=C.target,xi=K.useContext(Kr),Ei=Or(),Qt=C.shouldForwardProp||Ei.shouldForwardProp,te=function(et,ze,tt){for(var Ue,me=z(z({},ze),{className:void 0,theme:tt}),tr=0;tr<et.length;tr+=1){var rt=ke(Ue=et[tr])?Ue(me):Ue;for(var ne in rt)me[ne]=ne==="className"?ve(me[ne],rt[ne]):ne==="style"?z(z({},me[ne]),rt[ne]):rt[ne]}return ze.className&&(me.className=ve(me.className,ze.className)),me}(pe,R,Ao(R,xi,U)||Ie),Qe=te.as||Si,De={};for(var re in te)te[re]===void 0||re[0]==="$"||re==="as"||re==="theme"||(re==="forwardedAs"?De.as=te.forwardedAs:Qt&&!Qt(re,Qe)||(De[re]=te[re]));var on=function(et,ze){var tt=Or(),Ue=et.generateAndInjectStyles(ze,tt.styleSheet,tt.stylis);return Ue}(ee,te),er=ve(he,wi);return on&&(er+=" "+on),te.className&&(er+=" "+te.className),De[ar(Qe)&&!Io.has(Qe)?"class":"className"]=er,De.ref=$,y.createElement(Qe,De)}(g,S,E)}var g=K.forwardRef(w);return g.attrs=d,g.componentStyle=b,g.shouldForwardProp=p,g.foldedComponentIds=n?ve(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=f,g.target=n?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(E){for(var C=[],R=1;R<arguments.length;R++)C[R-1]=arguments[R];for(var $=0,pe=C;$<pe.length;$++)$r(E,pe[$],!0);return E}({},o.defaultProps,S):S}}),Hr(g,function(){return".".concat(g.styledComponentId)}),i&&No(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function On(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Rn=function(e){return Object.assign(e,{isCss:!0})};function xe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ke(e)||Ge(e)){var n=e;return Rn(ce(On(Jt,qe([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?ce(o):Rn(ce(On(o,t)))}function Rr(e,t,r){if(r===void 0&&(r=Ie),!t)throw Ze(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,xe.apply(void 0,qe([o],i,!1)))};return n.attrs=function(o){return Rr(e,t,z(z({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Rr(e,t,z(z({},r),o))},n}var Vo=function(e){return Rr(hc,e)},x=Vo;Io.forEach(function(e){x[e]=Vo(e)});var mc=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Wo(t),mt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Cr(ce(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&mt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function gc(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=xe.apply(void 0,qe([e],t,!1)),o="sc-global-".concat(To(JSON.stringify(n))),i=new mc(n,o),a=function(u){var c=Or(),l=K.useContext(Kr),f=K.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&s(f,u,c.styleSheet,l,c.stylis),K.useLayoutEffect(function(){if(!c.styleSheet.server)return s(f,u,c.styleSheet,l,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,l,c.stylis]),null};function s(u,c,l,f,d){if(i.isStatic)i.renderStyles(u,Ms,l,d);else{var p=z(z({},c),{theme:Ao(c,f,a.defaultProps)});i.renderStyles(u,p,l,d)}}return K.memo(a)}function q(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function de(e){return!!e&&!!e[k]}function Q(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===$c}(e)||Array.isArray(e)||!!e[Ln]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ln])||Yr(e)||Xr(e))}function be(e,t,r){r===void 0&&(r=!1),Ne(e)===0?(r?Object.keys:Pe)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function Ne(e){var t=e[k];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Yr(e)?2:Xr(e)?3:0}function $e(e,t){return Ne(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function vc(e,t){return Ne(e)===2?e.get(t):e[t]}function qo(e,t,r){var n=Ne(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Go(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Yr(e){return Ec&&e instanceof Map}function Xr(e){return Cc&&e instanceof Set}function ge(e){return e.o||e.t}function Jr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Ko(e);delete t[k];for(var r=Pe(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Zr(e,t){return t===void 0&&(t=!1),Qr(e)||de(e)||!Q(e)||(Ne(e)>1&&(e.set=e.add=e.clear=e.delete=yc),Object.freeze(e),t&&be(e,function(r,n){return Zr(n,!0)},!0)),e}function yc(){q(2)}function Qr(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Y(e){var t=kr[e];return t||q(18,e),t}function bc(e,t){kr[e]||(kr[e]=t)}function jr(){return He}function ur(e,t){t&&(Y("Patches"),e.u=[],e.s=[],e.v=t)}function gt(e){Ar(e),e.p.forEach(wc),e.p=null}function Ar(e){e===He&&(He=e.l)}function jn(e){return He={p:[],l:He,h:e,m:!0,_:0}}function wc(e){var t=e[k];t.i===0||t.i===1?t.j():t.g=!0}function lr(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||Y("ES5").S(t,e,n),n?(r[k].P&&(gt(t),q(4)),Q(e)&&(e=vt(t,e),t.l||yt(t,e)),t.u&&Y("Patches").M(r[k].t,e,t.u,t.s)):e=vt(t,r,[]),gt(t),t.u&&t.v(t.u,t.s),e!==Ho?e:void 0}function vt(e,t,r){if(Qr(t))return t;var n=t[k];if(!n)return be(t,function(s,u){return An(e,n,t,s,u,r)},!0),t;if(n.A!==e)return t;if(!n.P)return yt(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Jr(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),be(i,function(s,u){return An(e,n,o,s,u,r,a)}),yt(e,o,!1),r&&e.u&&Y("Patches").N(n,r,e.u,e.s)}return n.o}function An(e,t,r,n,o,i,a){if(de(o)){var s=vt(e,o,i&&t&&t.i!==3&&!$e(t.R,n)?i.concat(n):void 0);if(qo(r,n,s),!de(s))return;e.m=!1}else a&&r.add(o);if(Q(o)&&!Qr(o)){if(!e.h.D&&e._<1)return;vt(e,o),t&&t.A.l||yt(e,o)}}function yt(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Zr(t,r)}function fr(e,t){var r=e[k];return(r?ge(r):e)[t]}function In(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ie(e){e.P||(e.P=!0,e.l&&ie(e.l))}function dr(e){e.o||(e.o=Jr(e.t))}function Ir(e,t,r){var n=Yr(t)?Y("MapSet").F(t,r):Xr(t)?Y("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:jr(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},u=s,c=Ke;a&&(u=[s],c=Be);var l=Proxy.revocable(u,c),f=l.revoke,d=l.proxy;return s.k=d,s.j=f,d}(t,r):Y("ES5").J(t,r);return(r?r.A:jr()).p.push(n),n}function Sc(e){return de(e)||q(22,e),function t(r){if(!Q(r))return r;var n,o=r[k],i=Ne(r);if(o){if(!o.P&&(o.i<4||!Y("ES5").K(o)))return o.t;o.I=!0,n=kn(r,i),o.I=!1}else n=kn(r,i);return be(n,function(a,s){o&&vc(o.t,a)===s||qo(n,a,t(s))}),i===3?new Set(n):n}(e)}function kn(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Jr(e)}function xc(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var u=this[k];return Ke.get(u,i)},set:function(u){var c=this[k];Ke.set(c,i,u)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][k];if(!s.P)switch(s.i){case 5:n(s)&&ie(s);break;case 4:r(s)&&ie(s)}}}function r(i){for(var a=i.t,s=i.k,u=Pe(s),c=u.length-1;c>=0;c--){var l=u[c];if(l!==k){var f=a[l];if(f===void 0&&!$e(a,l))return!0;var d=s[l],p=d&&d[k];if(p?p.t!==f:!Go(d,f))return!0}}var h=!!a[k];return u.length!==Pe(a).length+(h?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var u=0;u<a.length;u++)if(!a.hasOwnProperty(u))return!0;return!1}var o={};bc("ES5",{J:function(i,a){var s=Array.isArray(i),u=function(l,f){if(l){for(var d=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(d,""+p,e(p,!0));return d}var h=Ko(f);delete h[k];for(var m=Pe(h),b=0;b<m.length;b++){var w=m[b];h[w]=e(w,l||!!h[w].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(s,i),c={i:s?5:4,A:a?a.A:jr(),P:!1,I:!1,R:{},l:a,t:i,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,k,{value:c,writable:!0}),u},S:function(i,a,s){s?de(a)&&a[k].A===i&&t(i.p):(i.u&&function u(c){if(c&&typeof c=="object"){var l=c[k];if(l){var f=l.t,d=l.k,p=l.R,h=l.i;if(h===4)be(d,function(S){S!==k&&(f[S]!==void 0||$e(f,S)?p[S]||u(d[S]):(p[S]=!0,ie(l)))}),be(f,function(S){d[S]!==void 0||$e(d,S)||(p[S]=!1,ie(l))});else if(h===5){if(n(l)&&(ie(l),p.length=!0),d.length<f.length)for(var m=d.length;m<f.length;m++)p[m]=!1;else for(var b=f.length;b<d.length;b++)p[b]=!0;for(var w=Math.min(d.length,f.length),g=0;g<w;g++)d.hasOwnProperty(g)||(p[g]=!0),p[g]===void 0&&u(d[g])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var Tn,He,en=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Ec=typeof Map<"u",Cc=typeof Set<"u",_n=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Ho=en?Symbol.for("immer-nothing"):((Tn={})["immer-nothing"]=!0,Tn),Ln=en?Symbol.for("immer-draftable"):"__$immer_draftable",k=en?Symbol.for("immer-state"):"__$immer_state",$c=""+Object.prototype.constructor,Pe=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ko=Object.getOwnPropertyDescriptors||function(e){var t={};return Pe(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},kr={},Ke={get:function(e,t){if(t===k)return e;var r=ge(e);if(!$e(r,t))return function(o,i,a){var s,u=In(i,a);return u?"value"in u?u.value:(s=u.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!Q(n)?n:n===fr(e.t,t)?(dr(e),e.o[t]=Ir(e.A.h,n,e)):n},has:function(e,t){return t in ge(e)},ownKeys:function(e){return Reflect.ownKeys(ge(e))},set:function(e,t,r){var n=In(ge(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=fr(ge(e),t),i=o==null?void 0:o[k];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Go(r,o)&&(r!==void 0||$e(e.t,t)))return!0;dr(e),ie(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return fr(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,dr(e),ie(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=ge(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){q(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){q(12)}},Be={};be(Ke,function(e,t){Be[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Be.deleteProperty=function(e,t){return Be.set.call(this,e,t,void 0)},Be.set=function(e,t,r){return Ke.set.call(this,e[0],t,r,e[0])};var Pc=function(){function e(r){var n=this;this.O=_n,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var u=n;return function(m){var b=this;m===void 0&&(m=s);for(var w=arguments.length,g=Array(w>1?w-1:0),S=1;S<w;S++)g[S-1]=arguments[S];return u.produce(m,function(E){var C;return(C=i).call.apply(C,[b,E].concat(g))})}}var c;if(typeof i!="function"&&q(6),a!==void 0&&typeof a!="function"&&q(7),Q(o)){var l=jn(n),f=Ir(n,o,void 0),d=!0;try{c=i(f),d=!1}finally{d?gt(l):Ar(l)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(m){return ur(l,a),lr(m,l)},function(m){throw gt(l),m}):(ur(l,a),lr(c,l))}if(!o||typeof o!="object"){if((c=i(o))===void 0&&(c=o),c===Ho&&(c=void 0),n.D&&Zr(c,!0),a){var p=[],h=[];Y("Patches").M(o,c,p,h),a(p,h)}return c}q(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(c){for(var l=arguments.length,f=Array(l>1?l-1:0),d=1;d<l;d++)f[d-1]=arguments[d];return n.produceWithPatches(c,function(p){return o.apply(void 0,[p].concat(f))})};var a,s,u=n.produce(o,i,function(c,l){a=c,s=l});return typeof Promise<"u"&&u instanceof Promise?u.then(function(c){return[c,a,s]}):[u,a,s]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){Q(r)||q(8),de(r)&&(r=Sc(r));var n=jn(this),o=Ir(this,r,void 0);return o[k].C=!0,Ar(n),o},t.finishDraft=function(r,n){var o=r&&r[k],i=o.A;return ur(i,n),lr(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!_n&&q(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=Y("Patches").$;return de(r)?a(r,n):this.produce(r,function(s){return a(s,n)})},e}(),F=new Pc,Yo=F.produce;F.produceWithPatches.bind(F);F.setAutoFreeze.bind(F);F.setUseProxies.bind(F);F.applyPatches.bind(F);F.createDraft.bind(F);F.finishDraft.bind(F);function Ye(e){"@babel/helpers - typeof";return Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ye(e)}function Oc(e,t){if(Ye(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ye(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rc(e){var t=Oc(e,"string");return Ye(t)==="symbol"?t:String(t)}function jc(e,t,r){return t=Rc(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Nn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Mn(Object(r),!0).forEach(function(n){jc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Mn(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function D(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Dn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),pr=function(){return Math.random().toString(36).substring(7).split("").join(".")},bt={INIT:"@@redux/INIT"+pr(),REPLACE:"@@redux/REPLACE"+pr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+pr()}};function Ac(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Xo(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(D(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(D(1));return r(Xo)(e,t)}if(typeof e!="function")throw new Error(D(2));var o=e,i=t,a=[],s=a,u=!1;function c(){s===a&&(s=a.slice())}function l(){if(u)throw new Error(D(3));return i}function f(m){if(typeof m!="function")throw new Error(D(4));if(u)throw new Error(D(5));var b=!0;return c(),s.push(m),function(){if(b){if(u)throw new Error(D(6));b=!1,c();var g=s.indexOf(m);s.splice(g,1),a=null}}}function d(m){if(!Ac(m))throw new Error(D(7));if(typeof m.type>"u")throw new Error(D(8));if(u)throw new Error(D(9));try{u=!0,i=o(i,m)}finally{u=!1}for(var b=a=s,w=0;w<b.length;w++){var g=b[w];g()}return m}function p(m){if(typeof m!="function")throw new Error(D(10));o=m,d({type:bt.REPLACE})}function h(){var m,b=f;return m={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(D(11));function S(){g.next&&g.next(l())}S();var E=b(S);return{unsubscribe:E}}},m[Dn]=function(){return this},m}return d({type:bt.INIT}),n={dispatch:d,subscribe:f,getState:l,replaceReducer:p},n[Dn]=h,n}function Ic(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:bt.INIT});if(typeof n>"u")throw new Error(D(12));if(typeof r(void 0,{type:bt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(D(13))})}function kc(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),a;try{Ic(r)}catch(s){a=s}return function(u,c){if(u===void 0&&(u={}),a)throw a;for(var l=!1,f={},d=0;d<i.length;d++){var p=i[d],h=r[p],m=u[p],b=h(m,c);if(typeof b>"u")throw c&&c.type,new Error(D(14));f[p]=b,l=l||b!==m}return l=l||i.length!==Object.keys(u).length,l?f:u}}function wt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function Tc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(D(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(u){return u(a)});return i=wt.apply(void 0,s)(o.dispatch),Nn(Nn({},o),{},{dispatch:i})}}}var St="NOT_FOUND";function _c(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:St},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function Lc(e,t){var r=[];function n(s){var u=r.findIndex(function(l){return t(s,l.key)});if(u>-1){var c=r[u];return u>0&&(r.splice(u,1),r.unshift(c)),c.value}return St}function o(s,u){n(s)===St&&(r.unshift({key:s,value:u}),r.length>e&&r.pop())}function i(){return r}function a(){r=[]}return{get:n,put:o,getEntries:i,clear:a}}var Mc=function(t,r){return t===r};function Nc(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,i=0;i<o;i++)if(!e(r[i],n[i]))return!1;return!0}}function Dc(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?Mc:n,i=r.maxSize,a=i===void 0?1:i,s=r.resultEqualityCheck,u=Nc(o),c=a===1?_c(u):Lc(a,u);function l(){var f=c.get(arguments);if(f===St){if(f=e.apply(null,arguments),s){var d=c.getEntries(),p=d.find(function(h){return s(h.value,f)});p&&(f=p.value)}c.put(arguments,f)}return f}return l.clearCache=function(){return c.clear()},l}function zc(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function Uc(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];var c=0,l,f={memoizeOptions:void 0},d=s.pop();if(typeof d=="object"&&(f=d,d=s.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var p=f,h=p.memoizeOptions,m=h===void 0?r:h,b=Array.isArray(m)?m:[m],w=zc(s),g=e.apply(void 0,[function(){return c++,d.apply(null,arguments)}].concat(b)),S=e(function(){for(var C=[],R=w.length,$=0;$<R;$++)C.push(w[$].apply(null,arguments));return l=g.apply(null,C),l});return Object.assign(S,{resultFunc:d,memoizedResultFunc:g,dependencies:w,lastResult:function(){return l},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),S};return o}var T=Uc(Dc);function Jo(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var Zo=Jo();Zo.withExtraArgument=Jo;const zn=Zo;var Qo=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Fc=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(c[0]===6&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(l){c=[6,l],o=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Te=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Bc=Object.defineProperty,Wc=Object.defineProperties,Vc=Object.getOwnPropertyDescriptors,Un=Object.getOwnPropertySymbols,qc=Object.prototype.hasOwnProperty,Gc=Object.prototype.propertyIsEnumerable,Fn=function(e,t,r){return t in e?Bc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ue=function(e,t){for(var r in t||(t={}))qc.call(t,r)&&Fn(e,r,t[r]);if(Un)for(var n=0,o=Un(t);n<o.length;n++){var r=o[n];Gc.call(t,r)&&Fn(e,r,t[r])}return e},hr=function(e,t){return Wc(e,Vc(t))},Hc=function(e,t,r){return new Promise(function(n,o){var i=function(u){try{s(r.next(u))}catch(c){o(c)}},a=function(u){try{s(r.throw(u))}catch(c){o(c)}},s=function(u){return u.done?n(u.value):Promise.resolve(u.value).then(i,a)};s((r=r.apply(e,t)).next())})},Kc=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wt:wt.apply(null,arguments)};function Yc(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var Xc=function(e){Qo(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Te([void 0],r[0].concat(this)))):new(t.bind.apply(t,Te([void 0],r.concat(this))))},t}(Array),Jc=function(e){Qo(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Te([void 0],r[0].concat(this)))):new(t.bind.apply(t,Te([void 0],r.concat(this))))},t}(Array);function Tr(e){return Q(e)?Yo(e,function(){}):e}function Zc(e){return typeof e=="boolean"}function Qc(){return function(t){return eu(t)}}function eu(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new Xc;return r&&(Zc(r)?n.push(zn):n.push(zn.withExtraArgument(r.extraArgument))),n}var tu=!0;function ru(e){var t=Qc(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,a=i===void 0?t():i,s=r.devTools,u=s===void 0?!0:s,c=r.preloadedState,l=c===void 0?void 0:c,f=r.enhancers,d=f===void 0?void 0:f,p;if(typeof o=="function")p=o;else if(Yc(o))p=kc(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var m=Tc.apply(void 0,h),b=wt;u&&(b=Kc(ue({trace:!tu},typeof u=="object"&&u)));var w=new Jc(m),g=w;Array.isArray(d)?g=Te([m],d):typeof d=="function"&&(g=d(w));var S=b.apply(void 0,g);return Xo(p,l,S)}function le(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return ue(ue({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function ei(e){var t={},r=[],n,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return r.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function nu(e){return typeof e=="function"}function ou(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?ei(t):[t,r,n],i=o[0],a=o[1],s=o[2],u;if(nu(e))u=function(){return Tr(e())};else{var c=Tr(e);u=function(){return c}}function l(f,d){f===void 0&&(f=u());var p=Te([i[d.type]],a.filter(function(h){var m=h.matcher;return m(d)}).map(function(h){var m=h.reducer;return m}));return p.filter(function(h){return!!h}).length===0&&(p=[s]),p.reduce(function(h,m){if(m)if(de(h)){var b=h,w=m(b,d);return w===void 0?h:w}else{if(Q(h))return Yo(h,function(g){return m(g,d)});var w=m(h,d);if(w===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}return h},f)}return l.getInitialState=u,l}function iu(e,t){return e+"/"+t}function ti(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:Tr(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},a={},s={};o.forEach(function(l){var f=n[l],d=iu(t,l),p,h;"reducer"in f?(p=f.reducer,h=f.prepare):p=f,i[l]=p,a[d]=p,s[l]=h?le(d,h):le(d)});function u(){var l=typeof e.extraReducers=="function"?ei(e.extraReducers):[e.extraReducers],f=l[0],d=f===void 0?{}:f,p=l[1],h=p===void 0?[]:p,m=l[2],b=m===void 0?void 0:m,w=ue(ue({},d),a);return ou(r,function(g){for(var S in w)g.addCase(S,w[S]);for(var E=0,C=h;E<C.length;E++){var R=C[E];g.addMatcher(R.matcher,R.reducer)}b&&g.addDefaultCase(b)})}var c;return{name:t,reducer:function(l,f){return c||(c=u()),c(l,f)},actions:s,caseReducers:i,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var au="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",su=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=au[Math.random()*64|0];return t},cu=["name","message","stack","code"],mr=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Bn=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),uu=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=cu;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=le(t+"/fulfilled",function(c,l,f,d){return{payload:c,meta:hr(ue({},d||{}),{arg:f,requestId:l,requestStatus:"fulfilled"})}}),i=le(t+"/pending",function(c,l,f){return{payload:void 0,meta:hr(ue({},f||{}),{arg:l,requestId:c,requestStatus:"pending"})}}),a=le(t+"/rejected",function(c,l,f,d,p){return{payload:d,error:(n&&n.serializeError||uu)(c||"Rejected"),meta:hr(ue({},p||{}),{arg:f,requestId:l,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(l,f,d){var p=n!=null&&n.idGenerator?n.idGenerator(c):su(),h=new s,m;function b(g){m=g,h.abort()}var w=function(){return Hc(this,null,function(){var g,S,E,C,R,$,pe;return Fc(this,function(ee){switch(ee.label){case 0:return ee.trys.push([0,4,,5]),C=(g=n==null?void 0:n.condition)==null?void 0:g.call(n,c,{getState:f,extra:d}),fu(C)?[4,C]:[3,2];case 1:C=ee.sent(),ee.label=2;case 2:if(C===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return R=new Promise(function(U,he){return h.signal.addEventListener("abort",function(){return he({name:"AbortError",message:m||"Aborted"})})}),l(i(p,c,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:p,arg:c},{getState:f,extra:d}))),[4,Promise.race([R,Promise.resolve(r(c,{dispatch:l,getState:f,extra:d,requestId:p,signal:h.signal,abort:b,rejectWithValue:function(U,he){return new mr(U,he)},fulfillWithValue:function(U,he){return new Bn(U,he)}})).then(function(U){if(U instanceof mr)throw U;return U instanceof Bn?o(U.payload,p,c,U.meta):o(U,p,c)})])];case 3:return E=ee.sent(),[3,5];case 4:return $=ee.sent(),E=$ instanceof mr?a(null,p,c,$.payload,$.meta):a($,p,c),[3,5];case 5:return pe=n&&!n.dispatchConditionRejection&&a.match(E)&&E.meta.condition,pe||l(E),[2,E]}})})}();return Object.assign(w,{abort:b,requestId:p,arg:c,unwrap:function(){return w.then(lu)}})}}return Object.assign(u,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function lu(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function fu(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var tn="listenerMiddleware";le(tn+"/add");le(tn+"/removeAll");le(tn+"/remove");var Wn;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);xc();const du=(e,t)=>{if(!t)return Math.round(e);const r=Math.pow(10,t);return Math.round(e*r)/r},ri=(e,t,r)=>Math.min(Math.max(e,t),r),_r=(e,t,r,n,o)=>{var s;let i=(s=t.find(u=>u.id===e.id))==null?void 0:s.value;if(i===void 0&&(i=e.value),n)return i;const a=o?e.perMinute:e.perMinute/1e3;return Math.round(ri(i+a*r,0,e.max)*100)/100},pu=(e,t,r,n,o)=>{const i=(n-r)/1e3;return i<=0?e.map(a=>({id:a.id,value:_r(a,t,i,!0,o),max:a.max,label:a.label})):e.map(a=>({id:a.id,value:_r(a,t,i,void 0,o),max:a.max,label:a.label}))},hu=(e,t,r,n,o)=>{const i=n&&r?(n-r)/1e3:0;return e.map(a=>({id:a.id,value:_r(a,t,i,void 0,o)}))},Vn=(...e)=>{},Xe=e=>Array.isArray(e)?e:[e],mu=(e,t)=>{if(e.length===0)return!0;for(let r=0;r<e.length;r++)if(e[r].when.length===0||e[r].when.filter(n=>t.indexOf(n)>-1).length===e[r].when.length)return xt(e[r].then);return!1},gu=(e,t)=>{for(let r=0;r<e.length;r++){const n=yu(e[r],t);if(n)return n}return null},xt=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e,vu=(e,t,r)=>e.when.find(n=>!Eu(n,t,r))?null:xt(e.then),yu=(e,t)=>e.when.find(r=>t.indexOf(r)===-1)?null:xt(e.then),bu=e=>e.map(t=>({when:Xe(t.when),then:t.then})),wu=e=>e.map(t=>({when:Xe(t.when),then:Xe(t.then)})),Su=e=>e?e.map(t=>({when:Xe(t.when).map(n=>xu(n)).filter(n=>n!==null),then:Xe(t.then)})):[],ni={"=":(e,t)=>e===t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t},xu=e=>{try{const t=e.split("_"),r=t[0],o=t[1].split("%");return ni[r]?{condition:r,criteria:Number(o[0]),isPercent:o.length>1}:(console.error(`parseExpressionString(): invalid condition "${r}" from expressionString "${e}"`),null)}catch{return console.error(`could not parse expressionString "${e}", expressionStrings must use one 
    of the following operators: [<=,<,=,>,>=] and follow a format like "<=_10%"`),null}},Eu=(e,t,r)=>{try{const n=e.isPercent?Math.round(t/r*100):t;return ni[e.condition](n,e.criteria)}catch{return console.log(`could not evaluate "whenNumber:${e}", "reference:${t}", "referenceMax:${t}"`),null}},Cu={debugMode:!1},oi=ti({name:"ui",initialState:Cu,reducers:{setDebugMode:(e,t)=>{e.debugMode=t.payload}}}),{setDebugMode:$u}=oi.actions,ii=e=>e.ui.debugMode,Pu=oi.reducer,Ou={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},Ru={activeIdx:-1,pets:[],interactions:[],cachedPets:[],lastRendered:new Date().getTime(),lastSaved:new Date().getTime()},ju=(e,t)=>({stats:_u(e.logic.stats,t),statuses:e.logic.statuses||[],behaviorRules:wu(e.logic.behaviorRules),behaviors:Au(e.logic.behaviors||[],e.baseUrl),interactions:Tu(e.logic.interactions)}),Au=(e,t)=>e.map(r=>({...r,imageUrl:r.image?`${t}/${r.image}`:r.imageUrl||"",position:r.position?r.position:"center",offsetX:r.offsetX?r.offsetX:0,offsetY:r.offsetY?r.offsetY:0})),Iu=(e=[])=>e.map(t=>({statId:t.statId,value:t.value||0})),ku=e=>e?bu(e):[],Tu=e=>e?e.map(t=>({id:t.id,label:t.label,cooldown:t.cooldown,changeStats:Iu(t.changeStats),availability:ku(t.availability)})):[],_u=(e,t)=>e.map(r=>{const n=t==null?void 0:t.stats.find(i=>i.id===r.id),o=Su(r.statEffects);return n?{...r,value:n.value,statEffects:o}:{...r,statEffects:o}}),Lu=(e,t,r)=>{const n=(o,i,a)=>{var l;const s=a.find(f=>f.statId===o.id);if(!s)return o.value;const u=o.value+s.value,c=(l=i.find(f=>o.id===f.id))==null?void 0:l.max;return c?ri(u,0,c):u>0?u:0};return e.map(o=>({id:o.id,value:n(o,t,r)}))},ot=(e,t)=>{const r=t!==void 0?t:new Date().getTime();e.lastSaved=r,e.lastRendered=r},ai=ti({name:"petStore",initialState:Ru,reducers:{pingStore:(e,t)=>{const r=t.payload.time;e.lastRendered=r,t.payload.doSave&&(e.lastSaved=r)},clearSave:()=>{window.localStorage.clear(),window.location.reload()},setActiveId:(e,t)=>{const r=e.pets.findIndex(n=>n.id===t.payload);r===-1?(console.log(`Cannot find pet with id "${t.payload}"`),e.activeIdx=0,ot(e)):(e.activeIdx=r,ot(e))},setActiveIdx:(e,t)=>{e.activeIdx=t.payload,ot(e)},setCachedPayload:(e,t)=>{const r=t.payload;e.cachedPets=r.pets},restoreInteractionFromSave:(e,t)=>{const r=t.payload;e.interactions.find(n=>n.id===r.id)||(console.log(`restoreInteractionFromSave ${r.id} with ${(r.endAt-new Date().getTime())/1e3} secs left`),e.interactions.push(r))},addNewInteractionEvent:(e,t)=>{var i;const{interaction:r,time:n}=t.payload;let o=!1;if(r.cooldown&&(o=!0,e.interactions.find(a=>a.id===r.id)||e.interactions.push({id:r.id,startAt:n,endAt:n+(r.cooldown||0)})),r.changeStats.length>0){o=!0;const a=e.pets[e.activeIdx],s=e.cachedPets.findIndex(u=>u.id===a.id);if(s>-1){const u=((i=e.cachedPets[s])==null?void 0:i.stats)||[],c=a.logic.stats;e.cachedPets[s]={...e.cachedPets[s],stats:Lu(u,c,r.changeStats)}}}o&&ot(e,n)},removeInteractionEvent:(e,t)=>{const r=t.payload;e.interactions=e.interactions.filter(n=>n.id!==r)},createPet:(e,t)=>{Vn(`

createPet`,t.payload);const{petDefinition:r,initialState:n,isActive:o}=t.payload,i=e.pets.find(c=>c.id===r.id),a=new Date().getTime(),s=ju(r,n||void 0);Vn(`>> createPet: ${r.id}, isActive? ${o}, beingTracked? ${n==null?void 0:n.beingTracked}`);const u={...r,logic:s,bornOn:(n==null?void 0:n.bornOn)||a,bgImage:r.backgroundImage?`${r.baseUrl}/${r.backgroundImage}`:null,bgColor:r.backgroundColor||null};i?e.pets=e.pets.map(c=>c.id===r.id?u:c):e.pets.push(u),n&&(e.cachedPets.find(c=>c.id===(n==null?void 0:n.id))||(e.cachedPets=[...e.cachedPets,{...n,lastSaved:(n==null?void 0:n.lastSaved)||a}]))}}}),{pingStore:qn,createPet:Mu,setActiveIdx:si,setActiveId:Nu,clearSave:Du,setCachedPayload:zu,addNewInteractionEvent:Uu,restoreInteractionFromSave:Fu,removeInteractionEvent:ci}=ai.actions,ui=e=>e.petStore.activeIdx,li=e=>e.petStore.pets,Bu=e=>e.petStore.interactions,Zt=e=>e.petStore.cachedPets,Wu=e=>e.petStore.lastRendered,Vu=e=>e.petStore.lastSaved,fi=T([Vu],e=>e),qu=T([Wu],e=>e),X=T([li,ui],(e,t)=>e[t]||null),rn=T([X],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.stats)||[]}),Gu=T([X],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.statuses)||[]}),Hu=T([X],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.interactions)||[]}),Ku=T([X],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviorRules)||[]}),Yu=T([X],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviors)||[]}),Xu=T([X],e=>({imageUrl:e==null?void 0:e.bgImage,backgroundColor:e==null?void 0:e.bgColor})),Ju=T([Zt],e=>e);T([Zt],e=>e.map(t=>t.stats));const di=T([Zt,X],(e,t)=>{var r;return t?((r=e.find(n=>n.id===t.id))==null?void 0:r.stats)||[]:[]}),pi=T([X],e=>e?{id:e.id,name:e.name,level:e.level,bio:e.bio,bornOn:e.bornOn}:null),hi=T([Bu],e=>e),mi=T([Zt,X],(e,t)=>{var r;return t&&((r=e.find(n=>n.id===t.id))==null?void 0:r.lastSaved)||0}),gi=T([rn,di,mi,qu,ii],(e,t,r,n,o)=>pu(e,t,r,n,o)),nn=T([gi,rn],(e,t)=>{const r=o=>e.find(i=>i.id===o),n=[];for(let o=0;o<t.length;o++){const i=r(t[o].id);if(i)for(let a=0;a<t[o].statEffects.length;a++){const s=vu(t[o].statEffects[a],i.value,i.max);s&&n.indexOf(s)===-1&&n.push(s)}}return n.map(o=>o).reverse()}),Zu=T([nn,Gu],(e,t)=>e.map(r=>t.find(n=>n.id===r)).filter(r=>!!r)),Qu=T([nn,Ku,Yu],(e,t,r)=>{const n=gu(t,e);return r.find(o=>o.id===n)||null}),el=T([Hu,hi,nn],(e,t,r)=>e.map(n=>{const o=t.find(a=>a.id===n.id),i=mu(n.availability,r);return{id:n.id,label:n.label,startAt:(o==null?void 0:o.startAt)||0,endAt:(o==null?void 0:o.endAt)||0,enabled:i,definition:n,cooldownStatus:o}})),tl=T([li,ui],(e,t)=>e.map((r,n)=>({name:r.name,id:r.id,isActive:n===t}))),rl=T([rn,di,mi,fi,ii],(e,t,r,n,o)=>r===n?null:hu(e,t,r,n,o)),nl=()=>{try{return JSON.parse(window.localStorage.getItem("browserbuddy")||"")}catch{return console.log('no localStorage entry found for "browserbuddy"'),null}},ol=()=>{try{return nl().pets}catch{return[]}};T([ol],e=>e);const il=T([fi,rl,X,hi,Ju],(e,t,r,n,o)=>{if(!t)return null;if(!r)return Ou;const i=o.findIndex(s=>s.id===r.id);let a=[];return i>-1?a=o.map(s=>{if(s.id===r.id){const u=s.beingTracked?t:s.stats;return{id:r.id,stats:u,bornOn:r.bornOn,lastSaved:e,beingTracked:!0}}return{...s,beingTracked:!1}}):a=o.concat([{id:r.id,stats:t,bornOn:r.bornOn,lastSaved:e,beingTracked:!1}]),{config:{activePet:(r==null?void 0:r.id)||"",lastSaved:e},interactions:n,pets:a}}),al=ai.reducer,sl=x.div`
  padding: 1rem;
  color: var(--color-blue);
  min-width: 30rem;
`,cl=x.h1`
  font-size: 2rem;
  text-align: left;
`,Gn=x.button`
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
`,ul=()=>{const e=Le();return v.jsxs(sl,{children:[v.jsx(cl,{children:"About BrowserBuddy"}),v.jsx("p",{children:"© Tom Yancey 2023"}),v.jsxs("div",{children:[v.jsx(uo,{to:"/",children:v.jsx(Gn,{children:"Home"})}),v.jsx(Gn,{onClick:()=>{e(Du())},children:"Clear Save"})]})]})};function Hn(e,t,r){const n=y.useRef();y.useEffect(()=>{const o=(r==null?void 0:r.current)||window;if(!(o&&o.addEventListener))return;n.current!==t&&(n.current=t);const i=a=>{n!=null&&n.current&&n.current(a)};return o.addEventListener(e,i),()=>{o.removeEventListener(e,i)}},[e,r,t])}function vi(e,t){const r=()=>{if(typeof window>"u")return t;try{const s=window.localStorage.getItem(e);return s?ll(s):t}catch(s){return console.warn(`Error reading localStorage key “${e}”:`,s),t}},[n,o]=y.useState(r),i=s=>{typeof window>"u"&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const u=s instanceof Function?s(n):s;window.localStorage.setItem(e,JSON.stringify(u)),o(u),window.dispatchEvent(new Event("local-storage"))}catch(u){console.warn(`Error setting localStorage key “${e}”:`,u)}};y.useEffect(()=>{o(r())},[]);const a=()=>{o(r())};return Hn("storage",a),Hn("local-storage",a),[n,i]}function ll(e){try{return e==="undefined"?void 0:JSON.parse(e??"")}catch{console.log("parsing error on",{value:e});return}}const fl=ru({reducer:{petStore:al,ui:Pu}}),yi={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},dl=async(e,t,r)=>{const n=await pl(e),o=await ml(n);yl(o,t,r)},pl=async e=>(await hl(e).then(r=>r.pets.map(n=>({id:n.id,baseUrl:n.baseUrl})))).filter(r=>!!r),hl=async e=>{try{const t=await fetch(e,{mode:"cors"});if(!t.ok)return null;const r=await t.text();return JSON.parse(r)}catch(t){return console.error(`Error fetching or parsing manifest from ${e}`,t),null}},ml=async e=>{const t=[];return e.forEach(n=>t.push(gl(n))),(await Promise.all(t)).filter(n=>!!n)},gl=e=>new Promise(t=>t(vl(e))),vl=async e=>{const t=e.baseUrl+"/data.json";try{const r=await fetch(t,{mode:"cors"});if(!r.ok)return console.error(`bad response from ${t}`),null;const n=JSON.parse(await r.text());return n.baseUrl=e.baseUrl,n}catch(r){return console.error(`Error fetching or parsing pet manifest from ${t}`,r),null}},yl=(e,t,r)=>{const n=new Date().getTime();let o="";r.config.activePet&&(o=r.config.activePet),e.forEach(i=>{const a=(r==null?void 0:r.pets.find(s=>s.id===i.id))||null;!o&&a&&r.config.activePet===a.id&&(o=a.id),t(Mu({isActive:o===(a==null?void 0:a.id),petDefinition:i,initialState:a}))}),t(o?Nu(o):si(0)),r.interactions.filter(i=>i.endAt>n).forEach(i=>{t(a=>{a(Fu(i)),window.setTimeout(()=>{a(ci(i.id))},i.endAt-n)})})},bl=()=>{const e=Le(),[t,r]=y.useState(!1),[n]=vi("browserbuddy",yi);return y.useEffect(()=>{t||(r(!0),window.location.search.indexOf("debug")>-1&&e($u(!0)),dl("data/pet-manifest.json",e,n))},[t,n,r,e]),null};function wl(e,t){const r=y.useRef(e);y.useLayoutEffect(()=>{r.current=e},[e]),y.useEffect(()=>{if(!t&&t!==0)return;const n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[t])}const Kn=2e3,Sl=2e3,xl=()=>{const[e,t]=y.useState(0),r=Le();return wl(()=>{const n=new Date().getTime(),o=e+1;t(o),o*Kn%Sl===0?r(qn({time:n,doSave:!0})):r(qn({time:n,doSave:!1}))},Kn),null};let Yn=0;const El=()=>{const[,e]=vi("browserbuddy",yi),t=Z(il),r=Le();return y.useEffect(()=>{t&&t.config.activePet&&(e(()=>t),Yn!==t.config.lastSaved&&(Yn=t.config.lastSaved,r(zu(t))))},[t,r,e]),null},Cl=()=>v.jsxs(v.Fragment,{children:[v.jsx(El,{}),v.jsx(bl,{}),v.jsx(xl,{})]}),$l=x.div`
  display:inline-block;
  width:calc(50% - 1rem);
  margin-right:1rem;
`,Pl=x.h4`
  font-size: 1rem;
`,Ol=x.div`
  position:relative;
  border:.5rem solid var(--color-white);
  border-radius: 1rem;
  overflow:hidden;
  padding:.25rem .5rem;
  text-align:center;
  background-color: var(--color-white);

  box-shadow: 0px -2px 4px var(--color-grey-light);
`,Rl=x.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  z-index:1;
`,jl=x.div`
  position:absolute;
  top:0;
  left:0;
  height:100%; 
  transition: width .3s ease-in-out, background-color .5s ease-in-out;
  background-color: var(--color-blue);
`,Al=x.p`
`,Il=x.p`
  opacity:.5;
  margin-top:.125rem;
  margin-bottom:0rem;
  font-size:1.25rem;
`,kl=({label:e,max:t,value:r,hideStats:n=!1})=>{const o=Math.round(r/t*1e3)/10;return v.jsxs($l,{children:[v.jsx(Pl,{children:e.toLocaleUpperCase()}),v.jsxs(Ol,{children:[!n&&v.jsxs(Rl,{children:[v.jsx(Al,{children:`${du(r)} / ${t}`}),v.jsx(Il,{children:`${o}%`})]}),v.jsx(jl,{style:{width:`${o}%`}})]})]})},Tl=x.div`
  width:100%;
`,_l=()=>{const e=Z(gi);return v.jsx(Tl,{children:e.map((t,r)=>v.jsx(kl,{label:t.label,max:t.max,value:t.value},r))})},Ll=x.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`,Ml=x.div`
  background-color:var(--color-white);
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`,Nl=x.div`
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
`,Dl=({startProgress:e,duration:t})=>{const[r,n]=y.useState(!1);return y.useEffect(()=>{r||window.setTimeout(()=>n(!0),1)},[r,n]),v.jsxs(Ll,{children:[v.jsx(Nl,{$startWidth:`${e*100}%`,className:r?"full":"",style:{transition:`all ${t}s linear`}}),v.jsx(Ml,{})]})},Xn=x.li`
  text-align:center;

  ${e=>!e.$isEnabled&&xe`
    opacity: .5;
    pointer-events:none;
  `}
`,bi=x.div`
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
`,zl=x(bi)`
  background-color: var(--color-red);
  border-color: var(--color-white);
  color: var(--color-white);

  cursor:not-allowed;
`,Jn=x.p`
  display:block;
  position:relative;
  z-index:2;
  font-size: 2rem;
`,Ul=({cooldownStatus:e,isEnabled:t,interaction:r,onClickHandler:n})=>{if(e){const o=e.endAt-e.startAt,i=(o-(e.endAt-new Date().getTime()))/o,a=(e.endAt-new Date().getTime())/1e3;return v.jsx(Xn,{$isEnabled:t,children:v.jsxs(zl,{children:[v.jsx(Jn,{children:r.label}),v.jsx(Dl,{startProgress:i,duration:a})]})})}else return v.jsx(Xn,{$isEnabled:t,onClick:()=>n&&n(),children:v.jsx(bi,{children:v.jsx(Jn,{children:`${r.label}`})})})},Fl=x.ul`
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
`,Bl=()=>{const e=Z(el,dt),t=Le(),r=n=>{const o=new Date().getTime();t(i=>{i(Uu({interaction:n,time:o})),n.cooldown&&window.setTimeout(()=>{i(ci(n.id))},n.cooldown)})};return v.jsx(Fl,{children:e.map(n=>v.jsx(Ul,{cooldownStatus:n.cooldownStatus,isEnabled:n.enabled,interaction:n.definition,onClickHandler:()=>r(n.definition)},n.id))})},Wl=x.div`
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
`,Vl=x.div`
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
`,ql=x.div`
  width:100%;
`,Gl=x.h4`
  margin-top:1rem;
  margin-bottom:.5rem;
`,Hl=x.p`
  margin-top:1rem;
  padding-left:1rem;
`,Kl=x.div`
  min-height:5rem;
  width:100%;
`,Yl=()=>{const e=Z(pi);return e?v.jsxs(Wl,{children:[v.jsx(Kl,{children:v.jsx(Bl,{})}),v.jsxs(Vl,{children:[v.jsx(_l,{}),v.jsx("hr",{}),v.jsxs(ql,{children:[v.jsx(Gl,{children:"Description"}),v.jsx(Hl,{children:e.bio})]})]})]}):null},Xl=gc`
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
`,Jl=()=>xe`
    border-radius: 2rem;
    border: 0.5rem solid;
  `,Zl=(e,t="--color-white")=>xe`
    ${Jl()}
    border-color: var(${t});
    color: var(${t});
    background-color: var(${e});
  `,Ql=x.div`
  color:var(--color-black);
  position:absolute;
  right:0;
  bottom:1rem;
  z-index:1;
`,ef=x.ul`
  max-width: 14rem;
  text-align: right;
`,tf=x.li`
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
  ${e=>Zl(e.$bubbleColors[0],e.$bubbleColors[1])}
`,rf=e=>{switch(e){case"alert":return["--color-red","--color-yellow"];case"warning":return["--color-yellow","--color-red"];case"reward":return["--color-green","--color-white"];default:return["--color-white","--color-red"]}},nf=()=>-5+Math.random()*5,of=e=>e*35,af=()=>{const e=Z(Zu,dt);return v.jsx(Ql,{children:v.jsx(ef,{children:e.map((t,r)=>v.jsx(tf,{id:t.id,$bubbleColors:rf(t.alertType),style:{bottom:of(r),transform:`rotate(${nf()}deg)`},children:t.label},t.id))})})},Zn=x.div`
  position:absolute;
  left:0;
  right:0;
  top:-2rem;
  padding-top:2rem;
  bottom:-2rem;
  padding-bottom:2rem;
  background-color: var(--color-blue);
  border:.5rem solid var(--color-white);

  ${e=>e.$bgImageUrl&&xe`
    background-size:cover;
    background-position: center;
    background-image:url(${e.$bgImageUrl});
  `}
`,sf=x.div`
  background-size:contain;
  background-repeat:no-repeat;
  background-position:center;
  width:100%;
  height:100%;
  text-align:center;

  position:absolute;
  bottom:0;
  left:0;
`,cf=x.p`
  font-size:2rem;
  color:var(--color-white);
  opacity: .5;

  position:absolute;
  top:1rem;
  right:1rem;
`,uf=()=>{const e=Z(Qu,dt),{imageUrl:t,backgroundColor:r}=Z(Xu,dt);if(!e)return v.jsx(Zn,{$bgImageUrl:t});const n={backgroundImage:`url(${e.imageUrl})`,backgroundPosition:`${e.position}`,left:`${e.offsetX}px`,bottom:`${e.offsetY}px`,backgroundColor:r||"initial"};return v.jsx(Zn,{$bgImageUrl:t,children:v.jsxs(v.Fragment,{children:[v.jsx(cf,{children:`behavior: ${e.id}`}),v.jsx(af,{}),v.jsx(sf,{style:n})]})})},lf=x.div`
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
`,ff=x.div`
  flex:1;

  >p{
    font-style:italic;
  }

  >h4{
    margin-top:-.5rem;
    margin-bottom: -.5rem;
  }
`,df=x.div`
  text-align:right;
  color: var(--color-white);
  
  >h4{
    margin:0;
    line-height: 5rem;
  }
`,pf=x.h4`
  text-align:left;
  display:inline-block;
  flex:1;
`,hf=x.p`
  
`,mf=e=>e?new Date(e).toLocaleString("en-us"):null,gf=()=>{const e=Z(pi);return v.jsx(lf,{children:e&&v.jsxs(v.Fragment,{children:[v.jsxs(ff,{children:[v.jsx(pf,{children:e.name}),v.jsx(hf,{children:`born on: ${mf(e.bornOn)}`})]}),v.jsx(df,{})]})})},vf=x.li`
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

  ${e=>e.$isActive&&xe`
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
`,yf=()=>{const e=Z(tl),t=Le();return v.jsx("ul",{children:e.map((r,n)=>v.jsx(vf,{onClick:()=>t(si(n)),$isActive:r.isActive,children:n+1},n))})},bf=x.div`
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
`,wf=x.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  > ul {
    flex: 1;
  }
`,Sf=()=>v.jsxs(wf,{children:[v.jsx(yf,{}),v.jsx(uo,{to:"/about",children:v.jsx(bf,{children:"?"})})]}),xf=x.header`
  position: relative;
  height:8rem;
  z-index:1;

  display:flex;
  flex-direction:column;
`,Ef=x.div`
  flex: 0 0 3rem;
`,Cf=x.div`
  position:relative;
  z-index:1;
  flex: 1;
`,$f=()=>v.jsxs(xf,{children:[v.jsx(Ef,{children:v.jsx(Sf,{})}),v.jsx(Cf,{children:v.jsx(gf,{})})]}),Pf=x.div`
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
`,Of=x.div`
  grid-area: header;
`,Rf=x.div`
  grid-area: body;
`,jf=x.div`
  grid-area: footer;
`,Af=()=>v.jsxs(Pf,{children:[v.jsx(Cl,{}),v.jsx(Of,{children:v.jsx($f,{})}),v.jsx(Rf,{children:v.jsx(uf,{})}),v.jsx(jf,{children:v.jsx(Yl,{})})]}),If=()=>v.jsxs(ma,{children:[v.jsx(vr,{path:"/about",element:v.jsx(ul,{})}),v.jsx(vr,{path:"/",element:v.jsx(Af,{})})]});Pi.createRoot(document.getElementById("root")).render(v.jsx(K.StrictMode,{children:v.jsx(ds,{store:fl,children:v.jsxs(Sa,{children:[v.jsx(If,{}),v.jsx(Xl,{})]})})}));
