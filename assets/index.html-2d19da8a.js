import{r as v,a as ki,b as Ti,R as Y,j as g,c as _i}from"./client-8837fce7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qe.apply(this,arguments)}var se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(se||(se={}));const sn="popstate";function Li(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:c=""}=we(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),gr("",{pathname:a,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let c=o.location.href,l=c.indexOf("#");s=l===-1?c:c.slice(0,l)}return s+"#"+(typeof i=="string"?i:lt(i))}function n(o,i){xt(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ni(t,r,n,e)}function L(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mi(){return Math.random().toString(36).substr(2,8)}function cn(e,t){return{usr:e.state,key:e.key,idx:t}}function gr(e,t,r,n){return r===void 0&&(r=null),qe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?we(t):t,{state:r,key:t&&t.key||n||Mi()})}function lt(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function we(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ni(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,s=se.Pop,c=null,l=u();l==null&&(l=0,a.replaceState(qe({},a.state,{idx:l}),""));function u(){return(a.state||{idx:null}).idx}function f(){s=se.Pop;let b=u(),S=b==null?null:b-l;l=b,c&&c({action:s,location:m.location,delta:S})}function d(b,S){s=se.Push;let y=gr(m.location,b,S);r&&r(y,b),l=u()+1;let w=cn(y,l),E=m.createHref(y);try{a.pushState(w,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(E)}i&&c&&c({action:s,location:m.location,delta:1})}function p(b,S){s=se.Replace;let y=gr(m.location,b,S);r&&r(y,b),l=u();let w=cn(y,l),E=m.createHref(y);a.replaceState(w,"",E),i&&c&&c({action:s,location:m.location,delta:0})}function h(b){let S=o.location.origin!=="null"?o.location.origin:o.location.href,y=typeof b=="string"?b:lt(b);return L(S,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,S)}let m={get action(){return s},get location(){return e(o,a)},listen(b){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(sn,f),c=b,()=>{o.removeEventListener(sn,f),c=null}},createHref(b){return t(o,b)},createURL:h,encodeLocation(b){let S=h(b);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:d,replace:p,go(b){return a.go(b)}};return m}var ln;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ln||(ln={}));function Di(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?we(t):t,o=Lr(n.pathname||"/",r);if(o==null)return null;let i=ro(e);zi(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Ki(i[s],Ji(o));return a}function ro(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(L(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let l=ce([n,c.relativePath]),u=r.concat(c);i.children&&i.children.length>0&&(L(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),ro(i.children,t,u,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:Hi(l,i.index),routesMeta:u})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let c of no(i.path))o(i,a,c)}),t}function no(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=no(n.join("/")),s=[];return s.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function zi(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Gi(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Ui=/^:\w+$/,Fi=3,Bi=2,Wi=1,qi=10,Vi=-2,un=e=>e==="*";function Hi(e,t){let r=e.split("/"),n=r.length;return r.some(un)&&(n+=Vi),t&&(n+=Bi),r.filter(o=>!un(o)).reduce((o,i)=>o+(Ui.test(i)?Fi:i===""?Wi:qi),n)}function Gi(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Ki(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,l=o==="/"?t:t.slice(o.length)||"/",u=Yi({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l);if(!u)return null;Object.assign(n,u.params);let f=s.route;i.push({params:n,pathname:ce([o,u.pathname]),pathnameBase:ta(ce([o,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(o=ce([o,u.pathnameBase]))}return i}function Yi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Xi(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((l,u,f)=>{if(u==="*"){let d=s[f]||"";a=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return l[u]=Zi(s[f]||"",u),l},{}),pathname:i,pathnameBase:a,pattern:e}}function Xi(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),xt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(n.push(s),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Ji(e){try{return decodeURI(e)}catch(t){return xt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zi(e,t){try{return decodeURIComponent(e)}catch(r){return xt(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Lr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Qi(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?we(e):e;return{pathname:r?r.startsWith("/")?r:ea(r,t):t,search:ra(n),hash:na(o)}}function ea(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function rr(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oo(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function io(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=we(e):(o=qe({},e),L(!o.pathname||!o.pathname.includes("?"),rr("?","pathname","search",o)),L(!o.pathname||!o.pathname.includes("#"),rr("#","pathname","hash",o)),L(!o.search||!o.search.includes("#"),rr("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(n||a==null)s=r;else{let f=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}s=f>=0?t[f]:"/"}let c=Qi(o,s),l=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const ce=e=>e.join("/").replace(/\/\/+/g,"/"),ta=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ra=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,na=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function oa(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ao=["post","put","patch","delete"];new Set(ao);const ia=["get",...ao];new Set(ia);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ut.apply(this,arguments)}const Mr=v.createContext(null),aa=v.createContext(null),Le=v.createContext(null),Et=v.createContext(null),xe=v.createContext({outlet:null,matches:[],isDataRoute:!1}),so=v.createContext(null);function sa(e,t){let{relative:r}=t===void 0?{}:t;Je()||L(!1);let{basename:n,navigator:o}=v.useContext(Le),{hash:i,pathname:a,search:s}=lo(e,{relative:r}),c=a;return n!=="/"&&(c=a==="/"?n:ce([n,a])),o.createHref({pathname:c,search:s,hash:i})}function Je(){return v.useContext(Et)!=null}function Ct(){return Je()||L(!1),v.useContext(Et).location}function co(e){v.useContext(Le).static||v.useLayoutEffect(e)}function ca(){let{isDataRoute:e}=v.useContext(xe);return e?wa():la()}function la(){Je()||L(!1);let e=v.useContext(Mr),{basename:t,navigator:r}=v.useContext(Le),{matches:n}=v.useContext(xe),{pathname:o}=Ct(),i=JSON.stringify(oo(n).map(c=>c.pathnameBase)),a=v.useRef(!1);return co(()=>{a.current=!0}),v.useCallback(function(c,l){if(l===void 0&&(l={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=io(c,JSON.parse(i),o,l.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:ce([t,u.pathname])),(l.replace?r.replace:r.push)(u,l.state,l)},[t,r,i,o,e])}function lo(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=v.useContext(xe),{pathname:o}=Ct(),i=JSON.stringify(oo(n).map(a=>a.pathnameBase));return v.useMemo(()=>io(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function ua(e,t){return fa(e,t)}function fa(e,t,r){Je()||L(!1);let{navigator:n}=v.useContext(Le),{matches:o}=v.useContext(xe),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=Ct(),l;if(t){var u;let m=typeof t=="string"?we(t):t;s==="/"||(u=m.pathname)!=null&&u.startsWith(s)||L(!1),l=m}else l=c;let f=l.pathname||"/",d=s==="/"?f:f.slice(s.length)||"/",p=Di(e,{pathname:d}),h=ga(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:ce([s,n.encodeLocation?n.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:ce([s,n.encodeLocation?n.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,r);return t&&h?v.createElement(Et.Provider,{value:{location:ut({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:se.Pop}},h):h}function da(){let e=Sa(),t=oa(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:o},r):null,i)}const pa=v.createElement(da,null);class ha extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?v.createElement(xe.Provider,{value:this.props.routeContext},v.createElement(so.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ma(e){let{routeContext:t,match:r,children:n}=e,o=v.useContext(Mr);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(xe.Provider,{value:t},n)}function ga(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let i=e,a=(n=r)==null?void 0:n.errors;if(a!=null){let s=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));s>=0||L(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,c,l)=>{let u=c.route.id?a==null?void 0:a[c.route.id]:null,f=null;r&&(f=c.route.errorElement||pa);let d=t.concat(i.slice(0,l+1)),p=()=>{let h;return u?h=f:c.route.Component?h=v.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=s,v.createElement(ma,{match:c,routeContext:{outlet:s,matches:d,isDataRoute:r!=null},children:h})};return r&&(c.route.ErrorBoundary||c.route.errorElement||l===0)?v.createElement(ha,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var uo=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uo||{}),ft=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ft||{});function va(e){let t=v.useContext(Mr);return t||L(!1),t}function ya(e){let t=v.useContext(aa);return t||L(!1),t}function ba(e){let t=v.useContext(xe);return t||L(!1),t}function fo(e){let t=ba(),r=t.matches[t.matches.length-1];return r.route.id||L(!1),r.route.id}function Sa(){var e;let t=v.useContext(so),r=ya(ft.UseRouteError),n=fo(ft.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function wa(){let{router:e}=va(uo.UseNavigateStable),t=fo(ft.UseNavigateStable),r=v.useRef(!1);return co(()=>{r.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ut({fromRouteId:t},i)))},[e,t])}function vr(e){L(!1)}function xa(e){let{basename:t="/",children:r=null,location:n,navigationType:o=se.Pop,navigator:i,static:a=!1}=e;Je()&&L(!1);let s=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof n=="string"&&(n=we(n));let{pathname:l="/",search:u="",hash:f="",state:d=null,key:p="default"}=n,h=v.useMemo(()=>{let m=Lr(l,s);return m==null?null:{location:{pathname:m,search:u,hash:f,state:d,key:p},navigationType:o}},[s,l,u,f,d,p,o]);return h==null?null:v.createElement(Le.Provider,{value:c},v.createElement(Et.Provider,{children:r,value:h}))}function Ea(e){let{children:t,location:r}=e;return ua(yr(t),r)}new Promise(()=>{});function yr(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,o)=>{if(!v.isValidElement(n))return;let i=[...t,o];if(n.type===v.Fragment){r.push.apply(r,yr(n.props.children,i));return}n.type!==vr&&L(!1),!n.props.index||!n.props.children||L(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=yr(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},br.apply(this,arguments)}function Ca(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function $a(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Pa(e,t){return e.button===0&&(!t||t==="_self")&&!$a(e)}const Oa=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Aa="startTransition",fn=ki[Aa];function Ia(e){let{basename:t,children:r,future:n,window:o}=e,i=v.useRef();i.current==null&&(i.current=Li({window:o,v5Compat:!0}));let a=i.current,[s,c]=v.useState({action:a.action,location:a.location}),{v7_startTransition:l}=n||{},u=v.useCallback(f=>{l&&fn?fn(()=>c(f)):c(f)},[c,l]);return v.useLayoutEffect(()=>a.listen(u),[a,u]),v.createElement(xa,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a})}const Ra=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ja=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,po=v.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:s,target:c,to:l,preventScrollReset:u}=t,f=Ca(t,Oa),{basename:d}=v.useContext(Le),p,h=!1;if(typeof l=="string"&&ja.test(l)&&(p=l,Ra))try{let y=new URL(window.location.href),w=l.startsWith("//")?new URL(y.protocol+l):new URL(l),E=Lr(w.pathname,d);w.origin===y.origin&&E!=null?l=E+w.search+w.hash:h=!0}catch{}let m=sa(l,{relative:o}),b=ka(l,{replace:a,state:s,target:c,preventScrollReset:u,relative:o});function S(y){n&&n(y),y.defaultPrevented||b(y)}return v.createElement("a",br({},f,{href:p||m,onClick:h||i?n:S,ref:r,target:c}))});var dn;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(dn||(dn={}));var pn;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pn||(pn={}));function ka(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=ca(),c=Ct(),l=lo(e,{relative:a});return v.useCallback(u=>{if(Pa(u,r)){u.preventDefault();let f=n!==void 0?n:lt(c)===lt(l);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[c,s,l,n,o,r,e,i,a])}var ho={exports:{}},mo={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=v;function Ta(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _a=typeof Object.is=="function"?Object.is:Ta,La=Ae.useState,Ma=Ae.useEffect,Na=Ae.useLayoutEffect,Da=Ae.useDebugValue;function za(e,t){var r=t(),n=La({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return Na(function(){o.value=r,o.getSnapshot=t,nr(o)&&i({inst:o})},[e,r,t]),Ma(function(){return nr(o)&&i({inst:o}),e(function(){nr(o)&&i({inst:o})})},[e]),Da(r),r}function nr(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_a(e,r)}catch{return!0}}function Ua(e,t){return t()}var Fa=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ua:za;mo.useSyncExternalStore=Ae.useSyncExternalStore!==void 0?Ae.useSyncExternalStore:Fa;ho.exports=mo;var Ba=ho.exports,go={exports:{}},vo={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t=v,Wa=Ba;function qa(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Va=typeof Object.is=="function"?Object.is:qa,Ha=Wa.useSyncExternalStore,Ga=$t.useRef,Ka=$t.useEffect,Ya=$t.useMemo,Xa=$t.useDebugValue;vo.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=Ga(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Ya(function(){function c(p){if(!l){if(l=!0,u=p,p=n(p),o!==void 0&&a.hasValue){var h=a.value;if(o(h,p))return f=h}return f=p}if(h=f,Va(u,p))return h;var m=n(p);return o!==void 0&&o(h,m)?h:(u=p,f=m)}var l=!1,u,f,d=r===void 0?null:r;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,r,n,o]);var s=Ha(e,i[0],i[1]);return Ka(function(){a.hasValue=!0,a.value=s},[s]),Xa(s),s};go.exports=vo;var Ja=go.exports;function Za(e){e()}let yo=Za;const Qa=e=>yo=e,es=()=>yo,hn=Symbol.for("react-redux-context"),mn=typeof globalThis<"u"?globalThis:{};function ts(){var e;if(!v.createContext)return{};const t=(e=mn[hn])!=null?e:mn[hn]=new Map;let r=t.get(v.createContext);return r||(r=v.createContext(null),t.set(v.createContext,r)),r}const de=ts();function Nr(e=de){return function(){return v.useContext(e)}}const bo=Nr(),rs=()=>{throw new Error("uSES not initialized!")};let So=rs;const ns=e=>{So=e},os=(e,t)=>e===t;function is(e=de){const t=e===de?bo:Nr(e);return function(n,o={}){const{equalityFn:i=os,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:c,subscription:l,getServerState:u,stabilityCheck:f,noopCheck:d}=t();v.useRef(!0);const p=v.useCallback({[n.name](m){return n(m)}}[n.name],[n,f,a]),h=So(l.addNestedSub,c.getState,u||c.getState,p,i);return v.useDebugValue(h),h}}const W=is();var wo={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=typeof Symbol=="function"&&Symbol.for,Dr=N?Symbol.for("react.element"):60103,zr=N?Symbol.for("react.portal"):60106,Pt=N?Symbol.for("react.fragment"):60107,Ot=N?Symbol.for("react.strict_mode"):60108,At=N?Symbol.for("react.profiler"):60114,It=N?Symbol.for("react.provider"):60109,Rt=N?Symbol.for("react.context"):60110,Ur=N?Symbol.for("react.async_mode"):60111,jt=N?Symbol.for("react.concurrent_mode"):60111,kt=N?Symbol.for("react.forward_ref"):60112,Tt=N?Symbol.for("react.suspense"):60113,as=N?Symbol.for("react.suspense_list"):60120,_t=N?Symbol.for("react.memo"):60115,Lt=N?Symbol.for("react.lazy"):60116,ss=N?Symbol.for("react.block"):60121,cs=N?Symbol.for("react.fundamental"):60117,ls=N?Symbol.for("react.responder"):60118,us=N?Symbol.for("react.scope"):60119;function B(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dr:switch(e=e.type,e){case Ur:case jt:case Pt:case At:case Ot:case Tt:return e;default:switch(e=e&&e.$$typeof,e){case Rt:case kt:case Lt:case _t:case It:return e;default:return t}}case zr:return t}}}function xo(e){return B(e)===jt}I.AsyncMode=Ur;I.ConcurrentMode=jt;I.ContextConsumer=Rt;I.ContextProvider=It;I.Element=Dr;I.ForwardRef=kt;I.Fragment=Pt;I.Lazy=Lt;I.Memo=_t;I.Portal=zr;I.Profiler=At;I.StrictMode=Ot;I.Suspense=Tt;I.isAsyncMode=function(e){return xo(e)||B(e)===Ur};I.isConcurrentMode=xo;I.isContextConsumer=function(e){return B(e)===Rt};I.isContextProvider=function(e){return B(e)===It};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr};I.isForwardRef=function(e){return B(e)===kt};I.isFragment=function(e){return B(e)===Pt};I.isLazy=function(e){return B(e)===Lt};I.isMemo=function(e){return B(e)===_t};I.isPortal=function(e){return B(e)===zr};I.isProfiler=function(e){return B(e)===At};I.isStrictMode=function(e){return B(e)===Ot};I.isSuspense=function(e){return B(e)===Tt};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pt||e===jt||e===At||e===Ot||e===Tt||e===as||typeof e=="object"&&e!==null&&(e.$$typeof===Lt||e.$$typeof===_t||e.$$typeof===It||e.$$typeof===Rt||e.$$typeof===kt||e.$$typeof===cs||e.$$typeof===ls||e.$$typeof===us||e.$$typeof===ss)};I.typeOf=B;wo.exports=I;var fs=wo.exports,Eo=fs,ds={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ps={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Co={};Co[Eo.ForwardRef]=ds;Co[Eo.Memo]=ps;var R={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Nt=Symbol.for("react.strict_mode"),Dt=Symbol.for("react.profiler"),zt=Symbol.for("react.provider"),Ut=Symbol.for("react.context"),hs=Symbol.for("react.server_context"),Ft=Symbol.for("react.forward_ref"),Bt=Symbol.for("react.suspense"),Wt=Symbol.for("react.suspense_list"),qt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),ms=Symbol.for("react.offscreen"),$o;$o=Symbol.for("react.module.reference");function V(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fr:switch(e=e.type,e){case Mt:case Dt:case Nt:case Bt:case Wt:return e;default:switch(e=e&&e.$$typeof,e){case hs:case Ut:case Ft:case Vt:case qt:case zt:return e;default:return t}}case Br:return t}}}R.ContextConsumer=Ut;R.ContextProvider=zt;R.Element=Fr;R.ForwardRef=Ft;R.Fragment=Mt;R.Lazy=Vt;R.Memo=qt;R.Portal=Br;R.Profiler=Dt;R.StrictMode=Nt;R.Suspense=Bt;R.SuspenseList=Wt;R.isAsyncMode=function(){return!1};R.isConcurrentMode=function(){return!1};R.isContextConsumer=function(e){return V(e)===Ut};R.isContextProvider=function(e){return V(e)===zt};R.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr};R.isForwardRef=function(e){return V(e)===Ft};R.isFragment=function(e){return V(e)===Mt};R.isLazy=function(e){return V(e)===Vt};R.isMemo=function(e){return V(e)===qt};R.isPortal=function(e){return V(e)===Br};R.isProfiler=function(e){return V(e)===Dt};R.isStrictMode=function(e){return V(e)===Nt};R.isSuspense=function(e){return V(e)===Bt};R.isSuspenseList=function(e){return V(e)===Wt};R.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mt||e===Dt||e===Nt||e===Bt||e===Wt||e===ms||typeof e=="object"&&e!==null&&(e.$$typeof===Vt||e.$$typeof===qt||e.$$typeof===zt||e.$$typeof===Ut||e.$$typeof===Ft||e.$$typeof===$o||e.getModuleId!==void 0)};R.typeOf=V;function gs(){const e=es();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const gn={notify(){},get:()=>[]};function vs(e,t){let r,n=gn;function o(f){return c(),n.subscribe(f)}function i(){n.notify()}function a(){u.onStateChange&&u.onStateChange()}function s(){return!!r}function c(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=gs())}function l(){r&&(r(),r=void 0,n.clear(),n=gn)}const u={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:c,tryUnsubscribe:l,getListeners:()=>n};return u}const ys=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bs=ys?v.useLayoutEffect:v.useEffect;function vn(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Ve(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!vn(e[r[o]],t[r[o]]))return!1;return!0}function Ss({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){const a=v.useMemo(()=>{const l=vs(e);return{store:e,subscription:l,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[e,n,o,i]),s=v.useMemo(()=>e.getState(),[e]);bs(()=>{const{subscription:l}=a;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[a,s]);const c=t||de;return v.createElement(c.Provider,{value:a},r)}function Po(e=de){const t=e===de?bo:Nr(e);return function(){const{store:n}=t();return n}}const ws=Po();function xs(e=de){const t=e===de?ws:Po(e);return function(){return t().dispatch}}const Ee=xs();ns(Ja.useSyncExternalStoreWithSelector);Qa(Ti.unstable_batchedUpdates);var z=function(){return z=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},z.apply(this,arguments)};function He(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var k="-ms-",We="-moz-",O="-webkit-",Oo="comm",Ht="rule",Wr="decl",Es="@import",Ao="@keyframes",Cs="@layer",$s=Math.abs,qr=String.fromCharCode,Sr=Object.assign;function Ps(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function Io(e){return e.trim()}function Q(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function it(e,t){return e.indexOf(t)}function M(e,t){return e.charCodeAt(t)|0}function Ie(e,t,r){return e.slice(t,r)}function K(e){return e.length}function Ro(e){return e.length}function Fe(e,t){return t.push(e),e}function Os(e,t){return e.map(t).join("")}function yn(e,t){return e.filter(function(r){return!Q(r,t)})}var Gt=1,Re=1,jo=0,q=0,_=0,Me="";function Kt(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Gt,column:Re,length:a,return:"",siblings:s}}function ie(e,t){return Sr(Kt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ce(e){for(;e.root;)e=ie(e.root,{children:[e]});Fe(e,e.siblings)}function As(){return _}function Is(){return _=q>0?M(Me,--q):0,Re--,_===10&&(Re=1,Gt--),_}function G(){return _=q<jo?M(Me,q++):0,Re++,_===10&&(Re=1,Gt++),_}function be(){return M(Me,q)}function at(){return q}function Yt(e,t){return Ie(Me,e,t)}function wr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rs(e){return Gt=Re=1,jo=K(Me=e),q=0,[]}function js(e){return Me="",e}function or(e){return Io(Yt(q-1,xr(e===91?e+2:e===40?e+1:e)))}function ks(e){for(;(_=be())&&_<33;)G();return wr(e)>2||wr(_)>3?"":" "}function Ts(e,t){for(;--t&&G()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Yt(e,at()+(t<6&&be()==32&&G()==32))}function xr(e){for(;G();)switch(_){case e:return q;case 34:case 39:e!==34&&e!==39&&xr(_);break;case 40:e===41&&xr(e);break;case 92:G();break}return q}function _s(e,t){for(;G()&&e+_!==47+10;)if(e+_===42+42&&be()===47)break;return"/*"+Yt(t,q-1)+"*"+qr(e===47?e:G())}function Ls(e){for(;!wr(be());)G();return Yt(e,q)}function Ms(e){return js(st("",null,null,null,[""],e=Rs(e),0,[0],e))}function st(e,t,r,n,o,i,a,s,c){for(var l=0,u=0,f=a,d=0,p=0,h=0,m=1,b=1,S=1,y=0,w="",E=o,C=i,A=n,$=w;b;)switch(h=y,y=G()){case 40:if(h!=108&&M($,f-1)==58){it($+=P(or(y),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:$+=or(y);break;case 9:case 10:case 13:case 32:$+=ks(h);break;case 92:$+=Ts(at()-1,7);continue;case 47:switch(be()){case 42:case 47:Fe(Ns(_s(G(),at()),t,r,c),c);break;default:$+="/"}break;case 123*m:s[l++]=K($)*S;case 125*m:case 59:case 0:switch(y){case 0:case 125:b=0;case 59+u:S==-1&&($=P($,/\f/g,"")),p>0&&K($)-f&&Fe(p>32?Sn($+";",n,r,f-1,c):Sn(P($," ","")+";",n,r,f-2,c),c);break;case 59:$+=";";default:if(Fe(A=bn($,t,r,l,u,o,s,w,E=[],C=[],f,i),i),y===123)if(u===0)st($,t,A,A,E,i,f,s,C);else switch(d===99&&M($,3)===110?100:d){case 100:case 108:case 109:case 115:st(e,A,A,n&&Fe(bn(e,A,A,0,0,o,s,w,o,E=[],f,C),C),o,C,f,s,n?E:C);break;default:st($,A,A,A,[""],C,0,s,C)}}l=u=p=0,m=S=1,w=$="",f=a;break;case 58:f=1+K($),p=h;default:if(m<1){if(y==123)--m;else if(y==125&&m++==0&&Is()==125)continue}switch($+=qr(y),y*m){case 38:S=u>0?1:($+="\f",-1);break;case 44:s[l++]=(K($)-1)*S,S=1;break;case 64:be()===45&&($+=or(G())),d=be(),u=f=K(w=$+=Ls(at())),y++;break;case 45:h===45&&K($)==2&&(m=0)}}return i}function bn(e,t,r,n,o,i,a,s,c,l,u,f){for(var d=o-1,p=o===0?i:[""],h=Ro(p),m=0,b=0,S=0;m<n;++m)for(var y=0,w=Ie(e,d+1,d=$s(b=a[m])),E=e;y<h;++y)(E=Io(b>0?p[y]+" "+w:P(w,/&\f/g,p[y])))&&(c[S++]=E);return Kt(e,t,r,o===0?Ht:s,c,l,u,f)}function Ns(e,t,r,n){return Kt(e,t,r,Oo,qr(As()),Ie(e,2,-2),0,n)}function Sn(e,t,r,n,o){return Kt(e,t,r,Wr,Ie(e,0,n),Ie(e,n+1,-1),n,o)}function ko(e,t,r){switch(Ps(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return We+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+We+e+k+e+e;case 5936:switch(M(e,t+11)){case 114:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+k+e+e;case 6165:return O+e+k+"flex-"+e+e;case 5187:return O+e+P(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return O+e+k+"flex-item-"+P(e,/flex-|-self/g,"")+(Q(e,/flex-|baseline/)?"":k+"grid-row-"+P(e,/flex-|-self/g,""))+e;case 4675:return O+e+k+"flex-line-pack"+P(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+k+P(e,"shrink","negative")+e;case 5292:return O+e+k+P(e,"basis","preferred-size")+e;case 6060:return O+"box-"+P(e,"-grow","")+O+e+k+P(e,"grow","positive")+e;case 4554:return O+P(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!Q(e,/flex-|baseline/))return k+"grid-column-align"+Ie(e,t)+e;break;case 2592:case 3360:return k+P(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Q(n.props,/grid-\w+-end/)})?~it(e+(r=r[t].value),"span")?e:k+P(e,"-start","")+e+k+"grid-row-span:"+(~it(r,"span")?Q(r,/\d+/):+Q(r,/\d+/)-+Q(e,/\d+/))+";":k+P(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Q(n.props,/grid-\w+-start/)})?e:k+P(P(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(K(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+We+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~it(e,"stretch")?ko(P(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,s,c,l){return k+o+":"+i+l+(a?k+o+"-span:"+(s?c:+c-+i)+l:"")+e});case 4949:if(M(e,t+6)===121)return P(e,":",":"+O)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(M(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+k+"$2box$3")+e;case 100:return P(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,"scroll-","scroll-snap-")+e}return e}function dt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Ds(e,t,r,n){switch(e.type){case Cs:if(e.children.length)break;case Es:case Wr:return e.return=e.return||e.value;case Oo:return"";case Ao:return e.return=e.value+"{"+dt(e.children,n)+"}";case Ht:if(!K(e.value=e.props.join(",")))return""}return K(r=dt(e.children,n))?e.return=e.value+"{"+r+"}":""}function zs(e){var t=Ro(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}function Us(e){return function(t){t.root||(t=t.return)&&e(t)}}function Fs(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Wr:e.return=ko(e.value,e.length,r);return;case Ao:return dt([ie(e,{value:P(e.value,"@","@"+O)})],n);case Ht:if(e.length)return Os(r=e.props,function(o){switch(Q(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ce(ie(e,{props:[P(o,/:(read-\w+)/,":"+We+"$1")]})),Ce(ie(e,{props:[o]})),Sr(e,{props:yn(r,n)});break;case"::placeholder":Ce(ie(e,{props:[P(o,/:(plac\w+)/,":"+O+"input-$1")]})),Ce(ie(e,{props:[P(o,/:(plac\w+)/,":"+We+"$1")]})),Ce(ie(e,{props:[P(o,/:(plac\w+)/,k+"input-$1")]})),Ce(ie(e,{props:[o]})),Sr(e,{props:yn(r,n)});break}return""})}}var Bs={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Vr=typeof window<"u"&&"HTMLElement"in window,Ws=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),qs={},Xt=Object.freeze([]),ke=Object.freeze({});function To(e,t,r){return r===void 0&&(r=ke),e.theme!==r.theme&&e.theme||t||r.theme}var _o=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hs=/(^-|-$)/g;function wn(e){return e.replace(Vs,"-").replace(Hs,"")}var Gs=/(a)(d)/gi,xn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Er(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=xn(t%52)+r;return(xn(t%52)+r).replace(Gs,"$1-$2")}var ir,$e=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Lo=function(e){return $e(5381,e)};function Mo(e){return Er(Lo(e)>>>0)}function Ks(e){return e.displayName||e.name||"Component"}function ar(e){return typeof e=="string"&&!0}var No=typeof Symbol=="function"&&Symbol.for,Do=No?Symbol.for("react.memo"):60115,Ys=No?Symbol.for("react.forward_ref"):60112,Xs={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Js={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zs=((ir={})[Ys]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ir[Do]=zo,ir);function En(e){return("type"in(t=e)&&t.type.$$typeof)===Do?zo:"$$typeof"in e?Zs[e.$$typeof]:Xs;var t}var Qs=Object.defineProperty,ec=Object.getOwnPropertyNames,Cn=Object.getOwnPropertySymbols,tc=Object.getOwnPropertyDescriptor,rc=Object.getPrototypeOf,$n=Object.prototype;function Uo(e,t,r){if(typeof t!="string"){if($n){var n=rc(t);n&&n!==$n&&Uo(e,n,r)}var o=ec(t);Cn&&(o=o.concat(Cn(t)));for(var i=En(e),a=En(t),s=0;s<o.length;++s){var c=o[s];if(!(c in Js||r&&r[c]||a&&c in a||i&&c in i)){var l=tc(t,c);try{Qs(e,c,l)}catch{}}}}return e}function Te(e){return typeof e=="function"}function Hr(e){return typeof e=="object"&&"styledComponentId"in e}function ye(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Cr(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ge(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $r(e,t,r){if(r===void 0&&(r=!1),!r&&!Ge(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=$r(e[n],t[n]);else if(Ge(t))for(var n in t)e[n]=$r(e[n],t[n]);return e}function Gr(e,t){Object.defineProperty(e,"toString",{value:t})}function Ze(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nc=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Ze(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),ct=new Map,pt=new Map,sr=1,nt=function(e){if(ct.has(e))return ct.get(e);for(;pt.has(sr);)sr++;var t=sr++;return ct.set(e,t),pt.set(t,e),t},oc=function(e,t){ct.set(e,t),pt.set(t,e)},ic="style[".concat(je,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),ac=new RegExp("^".concat(je,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sc=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},cc=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var c=s.match(ac);if(c){var l=0|parseInt(c[1],10),u=c[2];l!==0&&(oc(u,l),sc(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}}};function lc(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var c=Array.from(s.querySelectorAll("style[".concat(je,"]")));return c[c.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(je,"active"),n.setAttribute("data-styled-version","6.0.7");var a=lc();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},uc=function(){function e(t){this.element=Fo(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Ze(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),fc=function(){function e(t){this.element=Fo(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),dc=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pn=Vr,pc={isServer:!Vr,useCSSOMInjection:!Ws},ht=function(){function e(t,r,n){t===void 0&&(t=ke),r===void 0&&(r={});var o=this;this.options=z(z({},pc),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Vr&&Pn&&(Pn=!1,function(i){for(var a=document.querySelectorAll(ic),s=0,c=a.length;s<c;s++){var l=a[s];l&&l.getAttribute(je)!=="active"&&(cc(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),Gr(this,function(){return function(i){for(var a=i.getTag(),s=a.length,c="",l=function(f){var d=function(S){return pt.get(S)}(f);if(d===void 0)return"continue";var p=i.names.get(d),h=a.getGroup(f);if(p===void 0||h.length===0)return"continue";var m="".concat(je,".g").concat(f,'[id="').concat(d,'"]'),b="";p!==void 0&&p.forEach(function(S){S.length>0&&(b+="".concat(S,","))}),c+="".concat(h).concat(m,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},u=0;u<s;u++)l(u);return c}(o)})}return e.registerId=function(t){return nt(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(z(z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new dc(o):n?new uc(o):new fc(o)}(this.options),new nc(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(nt(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(nt(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(nt(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),hc=/&/g,mc=/^\s*\/\/.*$/gm;function Bo(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Bo(r.children,t)),r})}function gc(e){var t,r,n,o=e===void 0?ke:e,i=o.options,a=i===void 0?ke:i,s=o.plugins,c=s===void 0?Xt:s,l=function(d,p,h){return h===r||h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):d},u=c.slice();u.push(function(d){d.type===Ht&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(hc,r).replace(n,l))}),a.prefix&&u.push(Fs),u.push(Ds);var f=function(d,p,h,m){p===void 0&&(p=""),h===void 0&&(h=""),m===void 0&&(m="&"),t=m,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var b=d.replace(mc,""),S=Ms(h||p?"".concat(h," ").concat(p," { ").concat(b," }"):b);a.namespace&&(S=Bo(S,a.namespace));var y=[];return dt(S,zs(u.concat(Us(function(w){return y.push(w)})))),y};return f.hash=c.length?c.reduce(function(d,p){return p.name||Ze(15),$e(d,p.name)},5381).toString():"",f}var vc=new ht,Pr=gc(),Wo=Y.createContext({shouldForwardProp:void 0,styleSheet:vc,stylis:Pr});Wo.Consumer;Y.createContext(void 0);function Or(){return v.useContext(Wo)}var yc=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Pr);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Gr(this,function(){throw Ze(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pr),this.name+t.hash},e}(),bc=function(e){return e>="A"&&e<="Z"};function On(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;bc(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var qo=function(e){return e==null||e===!1||e===""},Vo=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!qo(i)&&(Array.isArray(i)&&i.isCss||Te(i)?n.push("".concat(On(o),":"),i,";"):Ge(i)?n.push.apply(n,He(He(["".concat(o," {")],Vo(i),!1),["}"],!1)):n.push("".concat(On(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Bs||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function le(e,t,r,n){if(qo(e))return[];if(Hr(e))return[".".concat(e.styledComponentId)];if(Te(e)){if(!Te(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return le(o,t,r,n)}var i;return e instanceof yc?r?(e.inject(r,n),[e.getName(n)]):[e]:Ge(e)?Vo(e):Array.isArray(e)?Array.prototype.concat.apply(Xt,e.map(function(a){return le(a,t,r,n)})):[e.toString()]}function Ho(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Te(r)&&!Hr(r))return!1}return!0}var Sc=Lo("6.0.7"),wc=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Ho(t),this.componentId=r,this.baseHash=$e(Sc,r),this.baseStyle=n,ht.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=ye(o,this.staticRulesId);else{var i=Cr(le(this.rules,t,r,n)),a=Er($e(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}o=ye(o,a),this.staticRulesId=a}else{for(var c=$e(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")l+=f;else if(f){var d=Cr(le(f,t,r,n));c=$e(c,d),l+=d}}if(l){var p=Er(c>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),o=ye(o,p)}}return o},e}(),Kr=Y.createContext(void 0);Kr.Consumer;var cr={};function xc(e,t,r){var n=Hr(e),o=e,i=!ar(e),a=t.attrs,s=a===void 0?Xt:a,c=t.componentId,l=c===void 0?function(w,E){var C=typeof w!="string"?"sc":wn(w);cr[C]=(cr[C]||0)+1;var A="".concat(C,"-").concat(Mo("6.0.7"+C+cr[C]));return E?"".concat(E,"-").concat(A):A}(t.displayName,t.parentComponentId):c,u=t.displayName;u===void 0&&function(w){return ar(w)?"styled.".concat(w):"Styled(".concat(Ks(w),")")}(e);var f=t.displayName&&t.componentId?"".concat(wn(t.displayName),"-").concat(t.componentId):t.componentId||l,d=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,p=t.shouldForwardProp;if(n&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;p=function(w,E){return h(w,E)&&m(w,E)}}else p=h}var b=new wc(r,f,n?o.componentStyle:void 0);function S(w,E){return function(C,A,$){var he=C.attrs,te=C.componentStyle,U=C.defaultProps,me=C.foldedComponentIds,Ai=C.styledComponentId,Ii=C.target,Ri=Y.useContext(Kr),ji=Or(),Qt=C.shouldForwardProp||ji.shouldForwardProp,re=function(et,ze,tt){for(var Ue,ge=z(z({},ze),{className:void 0,theme:tt}),tr=0;tr<et.length;tr+=1){var rt=Te(Ue=et[tr])?Ue(ge):Ue;for(var oe in rt)ge[oe]=oe==="className"?ye(ge[oe],rt[oe]):oe==="style"?z(z({},ge[oe]),rt[oe]):rt[oe]}return ze.className&&(ge.className=ye(ge.className,ze.className)),ge}(he,A,To(A,Ri,U)||ke),Qe=re.as||Ii,De={};for(var ne in re)re[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"||(ne==="forwardedAs"?De.as=re.forwardedAs:Qt&&!Qt(ne,Qe)||(De[ne]=re[ne]));var an=function(et,ze){var tt=Or(),Ue=et.generateAndInjectStyles(ze,tt.styleSheet,tt.stylis);return Ue}(te,re),er=ye(me,Ai);return an&&(er+=" "+an),re.className&&(er+=" "+re.className),De[ar(Qe)&&!_o.has(Qe)?"class":"className"]=er,De.ref=$,v.createElement(Qe,De)}(y,w,E)}var y=Y.forwardRef(S);return y.attrs=d,y.componentStyle=b,y.shouldForwardProp=p,y.foldedComponentIds=n?ye(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=f,y.target=n?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=n?function(E){for(var C=[],A=1;A<arguments.length;A++)C[A-1]=arguments[A];for(var $=0,he=C;$<he.length;$++)$r(E,he[$],!0);return E}({},o.defaultProps,w):w}}),Gr(y,function(){return".".concat(y.styledComponentId)}),i&&Uo(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function An(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var In=function(e){return Object.assign(e,{isCss:!0})};function J(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Te(e)||Ge(e)){var n=e;return In(le(An(Xt,He([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?le(o):In(le(An(o,t)))}function Ar(e,t,r){if(r===void 0&&(r=ke),!t)throw Ze(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,J.apply(void 0,He([o],i,!1)))};return n.attrs=function(o){return Ar(e,t,z(z({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Ar(e,t,z(z({},r),o))},n}var Go=function(e){return Ar(xc,e)},x=Go;_o.forEach(function(e){x[e]=Go(e)});var Ec=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Ho(t),ht.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Cr(le(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&ht.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Cc(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=J.apply(void 0,He([e],t,!1)),o="sc-global-".concat(Mo(JSON.stringify(n))),i=new Ec(n,o),a=function(c){var l=Or(),u=Y.useContext(Kr),f=Y.useRef(l.styleSheet.allocateGSInstance(o)).current;return l.styleSheet.server&&s(f,c,l.styleSheet,u,l.stylis),Y.useLayoutEffect(function(){if(!l.styleSheet.server)return s(f,c,l.styleSheet,u,l.stylis),function(){return i.removeStyles(f,l.styleSheet)}},[f,c,l.styleSheet,u,l.stylis]),null};function s(c,l,u,f,d){if(i.isStatic)i.renderStyles(c,qs,u,d);else{var p=z(z({},l),{theme:To(l,f,a.defaultProps)});i.renderStyles(c,p,u,d)}}return Y.memo(a)}function H(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function pe(e){return!!e&&!!e[T]}function ee(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Tc}(e)||Array.isArray(e)||!!e[Mn]||!!(!((t=e.constructor)===null||t===void 0)&&t[Mn])||Yr(e)||Xr(e))}function Se(e,t,r){r===void 0&&(r=!1),Ne(e)===0?(r?Object.keys:Oe)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function Ne(e){var t=e[T];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Yr(e)?2:Xr(e)?3:0}function Pe(e,t){return Ne(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function $c(e,t){return Ne(e)===2?e.get(t):e[t]}function Ko(e,t,r){var n=Ne(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Yo(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Yr(e){return jc&&e instanceof Map}function Xr(e){return kc&&e instanceof Set}function ve(e){return e.o||e.t}function Jr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Jo(e);delete t[T];for(var r=Oe(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Zr(e,t){return t===void 0&&(t=!1),Qr(e)||pe(e)||!ee(e)||(Ne(e)>1&&(e.set=e.add=e.clear=e.delete=Pc),Object.freeze(e),t&&Se(e,function(r,n){return Zr(n,!0)},!0)),e}function Pc(){H(2)}function Qr(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function X(e){var t=kr[e];return t||H(18,e),t}function Oc(e,t){kr[e]||(kr[e]=t)}function Ir(){return Ke}function lr(e,t){t&&(X("Patches"),e.u=[],e.s=[],e.v=t)}function mt(e){Rr(e),e.p.forEach(Ac),e.p=null}function Rr(e){e===Ke&&(Ke=e.l)}function Rn(e){return Ke={p:[],l:Ke,h:e,m:!0,_:0}}function Ac(e){var t=e[T];t.i===0||t.i===1?t.j():t.g=!0}function ur(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||X("ES5").S(t,e,n),n?(r[T].P&&(mt(t),H(4)),ee(e)&&(e=gt(t,e),t.l||vt(t,e)),t.u&&X("Patches").M(r[T].t,e,t.u,t.s)):e=gt(t,r,[]),mt(t),t.u&&t.v(t.u,t.s),e!==Xo?e:void 0}function gt(e,t,r){if(Qr(t))return t;var n=t[T];if(!n)return Se(t,function(s,c){return jn(e,n,t,s,c,r)},!0),t;if(n.A!==e)return t;if(!n.P)return vt(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Jr(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),Se(i,function(s,c){return jn(e,n,o,s,c,r,a)}),vt(e,o,!1),r&&e.u&&X("Patches").N(n,r,e.u,e.s)}return n.o}function jn(e,t,r,n,o,i,a){if(pe(o)){var s=gt(e,o,i&&t&&t.i!==3&&!Pe(t.R,n)?i.concat(n):void 0);if(Ko(r,n,s),!pe(s))return;e.m=!1}else a&&r.add(o);if(ee(o)&&!Qr(o)){if(!e.h.D&&e._<1)return;gt(e,o),t&&t.A.l||vt(e,o)}}function vt(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Zr(t,r)}function fr(e,t){var r=e[T];return(r?ve(r):e)[t]}function kn(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ae(e){e.P||(e.P=!0,e.l&&ae(e.l))}function dr(e){e.o||(e.o=Jr(e.t))}function jr(e,t,r){var n=Yr(t)?X("MapSet").F(t,r):Xr(t)?X("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:Ir(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},c=s,l=Ye;a&&(c=[s],l=Be);var u=Proxy.revocable(c,l),f=u.revoke,d=u.proxy;return s.k=d,s.j=f,d}(t,r):X("ES5").J(t,r);return(r?r.A:Ir()).p.push(n),n}function Ic(e){return pe(e)||H(22,e),function t(r){if(!ee(r))return r;var n,o=r[T],i=Ne(r);if(o){if(!o.P&&(o.i<4||!X("ES5").K(o)))return o.t;o.I=!0,n=Tn(r,i),o.I=!1}else n=Tn(r,i);return Se(n,function(a,s){o&&$c(o.t,a)===s||Ko(n,a,t(s))}),i===3?new Set(n):n}(e)}function Tn(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Jr(e)}function Rc(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var c=this[T];return Ye.get(c,i)},set:function(c){var l=this[T];Ye.set(l,i,c)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][T];if(!s.P)switch(s.i){case 5:n(s)&&ae(s);break;case 4:r(s)&&ae(s)}}}function r(i){for(var a=i.t,s=i.k,c=Oe(s),l=c.length-1;l>=0;l--){var u=c[l];if(u!==T){var f=a[u];if(f===void 0&&!Pe(a,u))return!0;var d=s[u],p=d&&d[T];if(p?p.t!==f:!Yo(d,f))return!0}}var h=!!a[T];return c.length!==Oe(a).length+(h?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var c=0;c<a.length;c++)if(!a.hasOwnProperty(c))return!0;return!1}var o={};Oc("ES5",{J:function(i,a){var s=Array.isArray(i),c=function(u,f){if(u){for(var d=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(d,""+p,e(p,!0));return d}var h=Jo(f);delete h[T];for(var m=Oe(h),b=0;b<m.length;b++){var S=m[b];h[S]=e(S,u||!!h[S].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(s,i),l={i:s?5:4,A:a?a.A:Ir(),P:!1,I:!1,R:{},l:a,t:i,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,T,{value:l,writable:!0}),c},S:function(i,a,s){s?pe(a)&&a[T].A===i&&t(i.p):(i.u&&function c(l){if(l&&typeof l=="object"){var u=l[T];if(u){var f=u.t,d=u.k,p=u.R,h=u.i;if(h===4)Se(d,function(w){w!==T&&(f[w]!==void 0||Pe(f,w)?p[w]||c(d[w]):(p[w]=!0,ae(u)))}),Se(f,function(w){d[w]!==void 0||Pe(d,w)||(p[w]=!1,ae(u))});else if(h===5){if(n(u)&&(ae(u),p.length=!0),d.length<f.length)for(var m=d.length;m<f.length;m++)p[m]=!1;else for(var b=f.length;b<d.length;b++)p[b]=!0;for(var S=Math.min(d.length,f.length),y=0;y<S;y++)d.hasOwnProperty(y)||(p[y]=!0),p[y]===void 0&&c(d[y])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var _n,Ke,en=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",jc=typeof Map<"u",kc=typeof Set<"u",Ln=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Xo=en?Symbol.for("immer-nothing"):((_n={})["immer-nothing"]=!0,_n),Mn=en?Symbol.for("immer-draftable"):"__$immer_draftable",T=en?Symbol.for("immer-state"):"__$immer_state",Tc=""+Object.prototype.constructor,Oe=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Jo=Object.getOwnPropertyDescriptors||function(e){var t={};return Oe(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},kr={},Ye={get:function(e,t){if(t===T)return e;var r=ve(e);if(!Pe(r,t))return function(o,i,a){var s,c=kn(i,a);return c?"value"in c?c.value:(s=c.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!ee(n)?n:n===fr(e.t,t)?(dr(e),e.o[t]=jr(e.A.h,n,e)):n},has:function(e,t){return t in ve(e)},ownKeys:function(e){return Reflect.ownKeys(ve(e))},set:function(e,t,r){var n=kn(ve(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=fr(ve(e),t),i=o==null?void 0:o[T];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Yo(r,o)&&(r!==void 0||Pe(e.t,t)))return!0;dr(e),ae(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return fr(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,dr(e),ae(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=ve(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){H(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){H(12)}},Be={};Se(Ye,function(e,t){Be[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Be.deleteProperty=function(e,t){return Be.set.call(this,e,t,void 0)},Be.set=function(e,t,r){return Ye.set.call(this,e[0],t,r,e[0])};var _c=function(){function e(r){var n=this;this.O=Ln,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var c=n;return function(m){var b=this;m===void 0&&(m=s);for(var S=arguments.length,y=Array(S>1?S-1:0),w=1;w<S;w++)y[w-1]=arguments[w];return c.produce(m,function(E){var C;return(C=i).call.apply(C,[b,E].concat(y))})}}var l;if(typeof i!="function"&&H(6),a!==void 0&&typeof a!="function"&&H(7),ee(o)){var u=Rn(n),f=jr(n,o,void 0),d=!0;try{l=i(f),d=!1}finally{d?mt(u):Rr(u)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(m){return lr(u,a),ur(m,u)},function(m){throw mt(u),m}):(lr(u,a),ur(l,u))}if(!o||typeof o!="object"){if((l=i(o))===void 0&&(l=o),l===Xo&&(l=void 0),n.D&&Zr(l,!0),a){var p=[],h=[];X("Patches").M(o,l,p,h),a(p,h)}return l}H(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(l){for(var u=arguments.length,f=Array(u>1?u-1:0),d=1;d<u;d++)f[d-1]=arguments[d];return n.produceWithPatches(l,function(p){return o.apply(void 0,[p].concat(f))})};var a,s,c=n.produce(o,i,function(l,u){a=l,s=u});return typeof Promise<"u"&&c instanceof Promise?c.then(function(l){return[l,a,s]}):[c,a,s]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){ee(r)||H(8),pe(r)&&(r=Ic(r));var n=Rn(this),o=jr(this,r,void 0);return o[T].C=!0,Rr(n),o},t.finishDraft=function(r,n){var o=r&&r[T],i=o.A;return lr(i,n),ur(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!Ln&&H(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=X("Patches").$;return pe(r)?a(r,n):this.produce(r,function(s){return a(s,n)})},e}(),F=new _c,Zo=F.produce;F.produceWithPatches.bind(F);F.setAutoFreeze.bind(F);F.setUseProxies.bind(F);F.applyPatches.bind(F);F.createDraft.bind(F);F.finishDraft.bind(F);function Xe(e){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xe(e)}function Lc(e,t){if(Xe(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Xe(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mc(e){var t=Lc(e,"string");return Xe(t)==="symbol"?t:String(t)}function Nc(e,t,r){return t=Mc(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Nn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Dn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Nn(Object(r),!0).forEach(function(n){Nc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Nn(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function D(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var zn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),pr=function(){return Math.random().toString(36).substring(7).split("").join(".")},yt={INIT:"@@redux/INIT"+pr(),REPLACE:"@@redux/REPLACE"+pr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+pr()}};function Dc(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Qo(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(D(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(D(1));return r(Qo)(e,t)}if(typeof e!="function")throw new Error(D(2));var o=e,i=t,a=[],s=a,c=!1;function l(){s===a&&(s=a.slice())}function u(){if(c)throw new Error(D(3));return i}function f(m){if(typeof m!="function")throw new Error(D(4));if(c)throw new Error(D(5));var b=!0;return l(),s.push(m),function(){if(b){if(c)throw new Error(D(6));b=!1,l();var y=s.indexOf(m);s.splice(y,1),a=null}}}function d(m){if(!Dc(m))throw new Error(D(7));if(typeof m.type>"u")throw new Error(D(8));if(c)throw new Error(D(9));try{c=!0,i=o(i,m)}finally{c=!1}for(var b=a=s,S=0;S<b.length;S++){var y=b[S];y()}return m}function p(m){if(typeof m!="function")throw new Error(D(10));o=m,d({type:yt.REPLACE})}function h(){var m,b=f;return m={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(D(11));function w(){y.next&&y.next(u())}w();var E=b(w);return{unsubscribe:E}}},m[zn]=function(){return this},m}return d({type:yt.INIT}),n={dispatch:d,subscribe:f,getState:u,replaceReducer:p},n[zn]=h,n}function zc(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:yt.INIT});if(typeof n>"u")throw new Error(D(12));if(typeof r(void 0,{type:yt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(D(13))})}function Uc(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),a;try{zc(r)}catch(s){a=s}return function(c,l){if(c===void 0&&(c={}),a)throw a;for(var u=!1,f={},d=0;d<i.length;d++){var p=i[d],h=r[p],m=c[p],b=h(m,l);if(typeof b>"u")throw l&&l.type,new Error(D(14));f[p]=b,u=u||b!==m}return u=u||i.length!==Object.keys(c).length,u?f:c}}function bt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function Fc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(D(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(c){return c(a)});return i=bt.apply(void 0,s)(o.dispatch),Dn(Dn({},o),{},{dispatch:i})}}}var St="NOT_FOUND";function Bc(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:St},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function Wc(e,t){var r=[];function n(s){var c=r.findIndex(function(u){return t(s,u.key)});if(c>-1){var l=r[c];return c>0&&(r.splice(c,1),r.unshift(l)),l.value}return St}function o(s,c){n(s)===St&&(r.unshift({key:s,value:c}),r.length>e&&r.pop())}function i(){return r}function a(){r=[]}return{get:n,put:o,getEntries:i,clear:a}}var qc=function(t,r){return t===r};function Vc(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,i=0;i<o;i++)if(!e(r[i],n[i]))return!1;return!0}}function Hc(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?qc:n,i=r.maxSize,a=i===void 0?1:i,s=r.resultEqualityCheck,c=Vc(o),l=a===1?Bc(c):Wc(a,c);function u(){var f=l.get(arguments);if(f===St){if(f=e.apply(null,arguments),s){var d=l.getEntries(),p=d.find(function(h){return s(h.value,f)});p&&(f=p.value)}l.put(arguments,f)}return f}return u.clearCache=function(){return l.clear()},u}function Gc(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function Kc(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];var l=0,u,f={memoizeOptions:void 0},d=s.pop();if(typeof d=="object"&&(f=d,d=s.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var p=f,h=p.memoizeOptions,m=h===void 0?r:h,b=Array.isArray(m)?m:[m],S=Gc(s),y=e.apply(void 0,[function(){return l++,d.apply(null,arguments)}].concat(b)),w=e(function(){for(var C=[],A=S.length,$=0;$<A;$++)C.push(S[$].apply(null,arguments));return u=y.apply(null,C),u});return Object.assign(w,{resultFunc:d,memoizedResultFunc:y,dependencies:S,lastResult:function(){return u},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),w};return o}var j=Kc(Hc);function ei(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var ti=ei();ti.withExtraArgument=ei;const Un=ti;var ri=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Yc=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return c([l,u])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(u){l=[6,u],o=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},_e=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Xc=Object.defineProperty,Jc=Object.defineProperties,Zc=Object.getOwnPropertyDescriptors,Fn=Object.getOwnPropertySymbols,Qc=Object.prototype.hasOwnProperty,el=Object.prototype.propertyIsEnumerable,Bn=function(e,t,r){return t in e?Xc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ue=function(e,t){for(var r in t||(t={}))Qc.call(t,r)&&Bn(e,r,t[r]);if(Fn)for(var n=0,o=Fn(t);n<o.length;n++){var r=o[n];el.call(t,r)&&Bn(e,r,t[r])}return e},hr=function(e,t){return Jc(e,Zc(t))},tl=function(e,t,r){return new Promise(function(n,o){var i=function(c){try{s(r.next(c))}catch(l){o(l)}},a=function(c){try{s(r.throw(c))}catch(l){o(l)}},s=function(c){return c.done?n(c.value):Promise.resolve(c.value).then(i,a)};s((r=r.apply(e,t)).next())})},rl=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?bt:bt.apply(null,arguments)};function nl(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var ol=function(e){ri(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,_e([void 0],r[0].concat(this)))):new(t.bind.apply(t,_e([void 0],r.concat(this))))},t}(Array),il=function(e){ri(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,_e([void 0],r[0].concat(this)))):new(t.bind.apply(t,_e([void 0],r.concat(this))))},t}(Array);function Tr(e){return ee(e)?Zo(e,function(){}):e}function al(e){return typeof e=="boolean"}function sl(){return function(t){return cl(t)}}function cl(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new ol;return r&&(al(r)?n.push(Un):n.push(Un.withExtraArgument(r.extraArgument))),n}var ll=!0;function ul(e){var t=sl(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,a=i===void 0?t():i,s=r.devTools,c=s===void 0?!0:s,l=r.preloadedState,u=l===void 0?void 0:l,f=r.enhancers,d=f===void 0?void 0:f,p;if(typeof o=="function")p=o;else if(nl(o))p=Uc(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var m=Fc.apply(void 0,h),b=bt;c&&(b=rl(ue({trace:!ll},typeof c=="object"&&c)));var S=new il(m),y=S;Array.isArray(d)?y=_e([m],d):typeof d=="function"&&(y=d(S));var w=b.apply(void 0,y);return Qo(p,u,w)}function fe(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return ue(ue({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function ni(e){var t={},r=[],n,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return r.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function fl(e){return typeof e=="function"}function dl(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?ni(t):[t,r,n],i=o[0],a=o[1],s=o[2],c;if(fl(e))c=function(){return Tr(e())};else{var l=Tr(e);c=function(){return l}}function u(f,d){f===void 0&&(f=c());var p=_e([i[d.type]],a.filter(function(h){var m=h.matcher;return m(d)}).map(function(h){var m=h.reducer;return m}));return p.filter(function(h){return!!h}).length===0&&(p=[s]),p.reduce(function(h,m){if(m)if(pe(h)){var b=h,S=m(b,d);return S===void 0?h:S}else{if(ee(h))return Zo(h,function(y){return m(y,d)});var S=m(h,d);if(S===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return S}return h},f)}return u.getInitialState=c,u}function pl(e,t){return e+"/"+t}function oi(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:Tr(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},a={},s={};o.forEach(function(u){var f=n[u],d=pl(t,u),p,h;"reducer"in f?(p=f.reducer,h=f.prepare):p=f,i[u]=p,a[d]=p,s[u]=h?fe(d,h):fe(d)});function c(){var u=typeof e.extraReducers=="function"?ni(e.extraReducers):[e.extraReducers],f=u[0],d=f===void 0?{}:f,p=u[1],h=p===void 0?[]:p,m=u[2],b=m===void 0?void 0:m,S=ue(ue({},d),a);return dl(r,function(y){for(var w in S)y.addCase(w,S[w]);for(var E=0,C=h;E<C.length;E++){var A=C[E];y.addMatcher(A.matcher,A.reducer)}b&&y.addDefaultCase(b)})}var l;return{name:t,reducer:function(u,f){return l||(l=c()),l(u,f)},actions:s,caseReducers:i,getInitialState:function(){return l||(l=c()),l.getInitialState()}}}var hl="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ml=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=hl[Math.random()*64|0];return t},gl=["name","message","stack","code"],mr=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Wn=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),vl=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=gl;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=fe(t+"/fulfilled",function(l,u,f,d){return{payload:l,meta:hr(ue({},d||{}),{arg:f,requestId:u,requestStatus:"fulfilled"})}}),i=fe(t+"/pending",function(l,u,f){return{payload:void 0,meta:hr(ue({},f||{}),{arg:u,requestId:l,requestStatus:"pending"})}}),a=fe(t+"/rejected",function(l,u,f,d,p){return{payload:d,error:(n&&n.serializeError||vl)(l||"Rejected"),meta:hr(ue({},p||{}),{arg:f,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function c(l){return function(u,f,d){var p=n!=null&&n.idGenerator?n.idGenerator(l):ml(),h=new s,m;function b(y){m=y,h.abort()}var S=function(){return tl(this,null,function(){var y,w,E,C,A,$,he;return Yc(this,function(te){switch(te.label){case 0:return te.trys.push([0,4,,5]),C=(y=n==null?void 0:n.condition)==null?void 0:y.call(n,l,{getState:f,extra:d}),bl(C)?[4,C]:[3,2];case 1:C=te.sent(),te.label=2;case 2:if(C===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return A=new Promise(function(U,me){return h.signal.addEventListener("abort",function(){return me({name:"AbortError",message:m||"Aborted"})})}),u(i(p,l,(w=n==null?void 0:n.getPendingMeta)==null?void 0:w.call(n,{requestId:p,arg:l},{getState:f,extra:d}))),[4,Promise.race([A,Promise.resolve(r(l,{dispatch:u,getState:f,extra:d,requestId:p,signal:h.signal,abort:b,rejectWithValue:function(U,me){return new mr(U,me)},fulfillWithValue:function(U,me){return new Wn(U,me)}})).then(function(U){if(U instanceof mr)throw U;return U instanceof Wn?o(U.payload,p,l,U.meta):o(U,p,l)})])];case 3:return E=te.sent(),[3,5];case 4:return $=te.sent(),E=$ instanceof mr?a(null,p,l,$.payload,$.meta):a($,p,l),[3,5];case 5:return he=n&&!n.dispatchConditionRejection&&a.match(E)&&E.meta.condition,he||u(E),[2,E]}})})}();return Object.assign(S,{abort:b,requestId:p,arg:l,unwrap:function(){return S.then(yl)}})}}return Object.assign(c,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function yl(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function bl(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var tn="listenerMiddleware";fe(tn+"/add");fe(tn+"/removeAll");fe(tn+"/remove");var qn;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Rc();const Sl=(e,t)=>{if(!t)return Math.round(e);const r=Math.pow(10,t);return Math.round(e*r)/r},ii=(e,t,r)=>Math.min(Math.max(e,t),r),_r=(e,t,r,n,o,i)=>{var l;let a=(l=t.find(u=>u.id===e.id))==null?void 0:l.value;if(a===void 0&&(a=e.value),o)return a;const s=e.perMinute+(n||0),c=i?s:s/60;return Math.round(ii(a+c*r,0,e.max)*100)/100},ai=e=>{const t={};return e.forEach(r=>{r.effect.forEach(n=>{n.statId&&n.perMinute&&(t[n.statId]?t[n.statId]+=n.perMinute:t[n.statId]=n.perMinute)})}),t},wl=(e,t,r,n,o,i)=>{const a=(o-n)/1e3,s=ai(r);return a<=0?e.map(c=>({id:c.id,value:_r(c,t,a,s[c.id]||0,!0,i),max:c.max,label:c.label})):e.map(c=>({id:c.id,value:_r(c,t,a,s[c.id]||0,void 0,i),max:c.max,label:c.label}))},xl=(e,t,r,n,o,i)=>{const a=o&&n?(o-n)/1e3:0,s=ai(r);return e.map(c=>({id:c.id,value:_r(c,t,a,s[c.id],void 0,i)}))},Vn=(...e)=>{},wt=e=>e===void 0?[]:Array.isArray(e)?e:[e],El=(e,t)=>{if(e.length===0)return!0;for(let r=0;r<e.length;r++)if(e[r].when.length===0||e[r].when.filter(n=>t.indexOf(n)>-1).length===e[r].when.length)return e[r].then;return!1},si=(e,t)=>{for(let r=0;r<e.length;r++){const n=$l(e[r],t);if(n)return n}return null},Cl=(e,t,r)=>e.when.find(n=>!Il(n,t,r))?null:e.then,$l=(e,t)=>{let r=0;for(let n=0;n<e.when.length;n++)Array.isArray(e.when[n])?e.when[n].some(o=>t.includes(o))&&r++:t.indexOf(e.when[n])>-1&&r++;return r===e.when.length?Array.isArray(e.then)?si(e.then,t):e.then:null},Pl=e=>e.map(t=>({when:wt(t.when),then:t.then})),ci=e=>e.map(t=>Array.isArray(t.then)?{when:wt(t.when),then:ci(t.then)}:{when:wt(t.when),then:t.then}),Ol=e=>e?e.map(t=>({when:wt(t.when).map(n=>Al(n)).filter(n=>n!==null),then:t.then})):[],li={"=":(e,t)=>e===t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t},Al=e=>{try{const t=e.split("_"),r=t[0],o=t[1].split("%");return li[r]?{condition:r,criteria:Number(o[0]),isPercent:o.length>1}:(console.error(`parseExpressionString(): invalid condition "${r}" from expressionString "${e}"`),null)}catch{return console.error(`could not parse expressionString "${e}", expressionStrings must use one 
    of the following operators: [<=,<,=,>,>=] and follow a format like "<=_10%"`),null}},Il=(e,t,r)=>{try{const n=e.isPercent?Math.round(t/r*100):t;return li[e.condition](n,e.criteria)}catch{return console.log(`could not evaluate "whenNumber:${e}", "reference:${t}", "referenceMax:${t}"`),null}},Rl={debugMode:!1},ui=oi({name:"ui",initialState:Rl,reducers:{setDebugMode:(e,t)=>{e.debugMode=t.payload}}}),{setDebugMode:jl}=ui.actions,fi=e=>e.ui.debugMode,kl=ui.reducer,Tl={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},_l={activeIdx:-1,pets:[],interactions:[],cachedPets:[],lastRendered:new Date().getTime(),lastSaved:new Date().getTime()},Ll=(e,t)=>({stats:Fl(e.logic.stats,t),statuses:Bl(e.logic.statuses),behaviorRules:ci(e.logic.behaviorRules),behaviors:Ml(e.logic.behaviors||[],e.baseUrl),interactions:Ul(e.logic.interactions)}),Ml=(e,t)=>e.map(r=>({...r,type:r.type||"normal",imageUrl:r.image?`${t}/${r.image}`:r.imageUrl||"",bgImageUrl:r.bgImage?`${t}/${r.bgImage}`:"",position:r.position?r.position:"center",offsetX:r.offsetX?r.offsetX:0,offsetY:r.offsetY?r.offsetY:0})),Nl=e=>e?e.map(t=>({statId:t.statId,value:t.value||0,type:t.type||"incremental"})):[],Dl=e=>e?Pl(e):[],zl=e=>e?{defaultState:e.defaultState||"off",onState:e.onState,offState:e.offState}:null,Ul=e=>e?e.map(t=>({id:t.id,label:t.label,cooldown:t.cooldown,changeStats:Nl(t.changeStats),changeToggle:zl(t.changeToggle),availability:Dl(t.availability),hideWhenUnavailable:t.hideWhenUnavailable===!0})):[],Fl=(e,t)=>e.map(r=>{const n=t==null?void 0:t.stats.find(i=>i.id===r.id),o=Ol(r.statEffects);return n?{...r,value:n.value,statEffects:o}:{...r,statEffects:o}}),Bl=e=>Object.keys(e).map(t=>({id:t,label:e[t].label||"",message:e[t].message||"",alertType:e[t].alertType})),Wl=(e,t)=>{const r=t.defaultState||"off",n=r==="on"?t.onState:t.offState;return console.log("getDefaultToggleStatus, defaultEffect is ",n),{id:e,state:r,effect:n}},ql=(e,t,r)=>{const n=r.find(o=>o.id===e)||Wl(e,t);return n.state==="on"?(n.state="off",n.effect=t.offState):(n.state="on",n.effect=t.onState),r.filter(o=>o.id!==e).concat([n])},Vl=(e,t,r)=>e.map(n=>{const o=r.find(s=>s.statId===n.id),i=t.find(s=>n.id===s.id);if(!i)return console.error(`getUpdatedStats, invalid stat "${n.id}" requested`),n;if(!o||o.type==="incremental"&&o.value===0)return n;const a=o.type==="absolute"?o.value:n.value+o.value;return{...n,value:ii(a,0,i.max)}}),ot=(e,t)=>{const r=t!==void 0?t:new Date().getTime();e.lastSaved=r,e.lastRendered=r},di=oi({name:"petStore",initialState:_l,reducers:{pingStore:(e,t)=>{const r=t.payload.time;e.lastRendered=r,t.payload.doSave&&(e.lastSaved=r)},clearSave:()=>{window.localStorage.clear(),window.location.reload()},killActivePet:e=>{console.log("------ PET WAS KILLED ----------"),e.cachedPets[e.activeIdx]={...e.cachedPets[e.activeIdx],diedOn:new Date().getTime(),beingTracked:!1}},setActiveId:(e,t)=>{const r=e.pets.findIndex(n=>n.id===t.payload);r===-1?(console.log(`Cannot find pet with id "${t.payload}"`),e.activeIdx=0,ot(e)):(e.activeIdx=r,ot(e))},setActiveIdx:(e,t)=>{e.activeIdx=t.payload,ot(e)},setCachedPayload:(e,t)=>{const r=t.payload;e.cachedPets=r.pets},restoreInteractionFromSave:(e,t)=>{const r=t.payload;e.interactions.find(n=>n.id===r.id)||(console.log(`restoreInteractionFromSave ${r.id} with ${(r.endAt-new Date().getTime())/1e3} secs left`),e.interactions.push(r))},addNewInteractionEvent:(e,t)=>{var i,a;const{interaction:r,time:n}=t.payload;let o=!1;if(r.cooldown&&(o=!0,e.interactions.find(s=>s.id===r.id)||e.interactions.push({id:r.id,startAt:n,endAt:n+(r.cooldown||0)})),r.changeStats.length>0){o=!0;const s=e.pets[e.activeIdx],c=e.cachedPets.findIndex(l=>l.id===s.id);if(c>-1){const l=((i=e.cachedPets[c])==null?void 0:i.stats)||[],u=s.logic.stats;e.cachedPets[c]={...e.cachedPets[c],stats:Vl(l,u,r.changeStats)}}}if(r.changeToggle){console.log("interaction.changeToggle: ",r.changeToggle),o=!0;const s=e.pets[e.activeIdx],c=e.cachedPets.findIndex(l=>l.id===s.id);if(c>-1){const l=((a=e.cachedPets[c])==null?void 0:a.activeToggles)||[],u=ql(r.id,r.changeToggle,l);e.cachedPets[c]={...e.cachedPets[c],activeToggles:u}}}o&&ot(e,n)},removeInteractionEvent:(e,t)=>{const r=t.payload;e.interactions=e.interactions.filter(n=>n.id!==r)},createPet:(e,t)=>{Vn(`

createPet`,t.payload);const{petDefinition:r,initialState:n,isActive:o}=t.payload,i=e.pets.find(l=>l.id===r.id),a=new Date().getTime(),s=Ll(r,n||void 0);Vn(`>> createPet: ${r.id}, isActive? ${o}, beingTracked? ${n==null?void 0:n.beingTracked}`);const c={...r,logic:s,bornOn:(n==null?void 0:n.bornOn)||a,diedOn:(n==null?void 0:n.diedOn)||void 0,bgImage:r.bgImage?`${r.baseUrl}/${r.bgImage}`:null,bgColor:r.bgColor||null};i?e.pets=e.pets.map(l=>l.id===r.id?c:l):e.pets.push(c),n&&(e.cachedPets.find(l=>l.id===(n==null?void 0:n.id))||(e.cachedPets=[...e.cachedPets,{...n,lastSaved:(n==null?void 0:n.lastSaved)||a}]))}}}),{pingStore:Hn,createPet:Hl,setActiveIdx:pi,setActiveId:Gl,clearSave:Kl,setCachedPayload:Yl,addNewInteractionEvent:Xl,restoreInteractionFromSave:Jl,removeInteractionEvent:hi,killActivePet:Zl}=di.actions,mi=e=>e.petStore.activeIdx,gi=e=>e.petStore.pets,Ql=e=>e.petStore.interactions,Jt=e=>e.petStore.cachedPets,eu=e=>e.petStore.lastRendered,tu=e=>e.petStore.lastSaved,vi=j([tu],e=>e),ru=j([eu],e=>e),Z=j([gi,mi],(e,t)=>e[t]||null),rn=j([Z],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.stats)||[]}),nu=j([Z],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.statuses)||[]}),yi=j([Z],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.interactions)||[]}),ou=j([Z],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviorRules)||[]}),iu=j([Z],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviors)||[]}),au=j([Z],e=>({imageUrl:e==null?void 0:e.bgImage,bgColor:e==null?void 0:e.bgColor})),su=j([Jt],e=>e),nn=j([Jt,Z],(e,t)=>e.find(r=>r.id===t.id)||null);j([Jt],e=>e.map(t=>t.stats));const bi=j([nn],e=>e?e.stats||[]:[]),Zt=j([nn],e=>e?e.activeToggles||[]:[]),Si=j([Z],e=>e?{id:e.id,name:e.name,bio:e.bio}:null),wi=j([Ql],e=>e),xi=j([Jt,Z],(e,t)=>{var r;return t&&((r=e.find(n=>n.id===t.id))==null?void 0:r.lastSaved)||0}),Ei=j([rn,bi,Zt,xi,ru,fi],(e,t,r,n,o,i)=>wl(e,t,r,n,o,i)),on=j([Ei,rn,Zt,yi],(e,t,r,n)=>{const o=s=>e.find(c=>c.id===s);let i=[];for(let s=0;s<t.length;s++){const c=o(t[s].id);if(c)for(let l=0;l<t[s].statEffects.length;l++){const u=Cl(t[s].statEffects[l],c.value,c.max);u&&i.indexOf(u)===-1&&i.push(u)}}let a;return r.forEach(s=>{var l,u;const c=n.find(f=>f.id===s.id);c!=null&&c.changeToggle&&(s.state==="on"?a=((l=c.changeToggle.onState)==null?void 0:l.filter(f=>f.statusId).map(f=>f.statusId))||[]:a=((u=c.changeToggle.offState)==null?void 0:u.filter(f=>f.statusId).map(f=>f.statusId))||[]),i=i.concat(a.filter(f=>!i.includes(f)))}),i.map(s=>s).reverse()}),cu=j([on,nu],(e,t)=>e.map(r=>t.find(n=>n.id===r)).filter(r=>!!r)),Ci=j([on,ou,iu],(e,t,r)=>{const n=si(t,e);return r.find(o=>o.id===n)||null}),lu=j([Ci],e=>e&&e.type!=="dead"),uu=j([yi,wi,on],(e,t,r)=>e.map(n=>{const o=t.find(a=>a.id===n.id),i=El(n.availability,r);return{id:n.id,label:n.label,startAt:(o==null?void 0:o.startAt)||0,endAt:(o==null?void 0:o.endAt)||0,enabled:i,visible:i||!n.hideWhenUnavailable,definition:n,cooldownStatus:o}})),fu=j([gi,mi],(e,t)=>e.map((r,n)=>({name:r.name,id:r.id,isActive:n===t}))),du=j([rn,bi,xi,vi,fi,Zt],(e,t,r,n,o,i)=>r===n?null:xl(e,t,i,r,n,o)),pu=()=>{try{return JSON.parse(window.localStorage.getItem("browserbuddy")||"")}catch{return console.log('no localStorage entry found for "browserbuddy"'),null}},hu=()=>{try{return pu().pets}catch{return[]}};j([hu],e=>e);const mu=j([vi,du,Z,wi,su],(e,t,r,n,o)=>{if(!t)return null;if(!r)return Tl;const i=o.findIndex(s=>s.id===r.id);let a=[];if(i>-1)a=o.map(s=>{if(s.id===r.id){const c=s.beingTracked?t:s.stats;return{id:r.id,stats:c,bornOn:s.bornOn,diedOn:s.diedOn,lastSaved:e,beingTracked:s.diedOn===void 0,activeToggles:s.activeToggles}}return{...s,beingTracked:!1}});else{const s=r.logic.interactions.filter(c=>!!c.changeToggle).map(c=>{var f,d,p;const l=((f=c.changeToggle)==null?void 0:f.defaultState)||"off",u=l==="on"?(d=c.changeToggle)==null?void 0:d.onState:(p=c.changeToggle)==null?void 0:p.offState;return{id:c.id,state:l,effect:u||[]}});a=o.concat([{id:r.id,stats:t,bornOn:r.bornOn,diedOn:void 0,lastSaved:e,beingTracked:!1,activeToggles:s}])}return{config:{activePet:(r==null?void 0:r.id)||"",lastSaved:e},interactions:n,pets:a}}),gu=di.reducer,vu=x.div`
  padding: 1rem;
  color: var(--color-blue);
  min-width: 30rem;
`,yu=x.h1`
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
`,bu=()=>{const e=Ee();return g.jsxs(vu,{children:[g.jsx(yu,{children:"About BrowserBuddy"}),g.jsx("p",{children:"© Tom Yancey 2023"}),g.jsxs("div",{children:[g.jsx(po,{to:"/",children:g.jsx(Gn,{children:"Home"})}),g.jsx(Gn,{onClick:()=>{e(Kl())},children:"Clear Save"})]})]})};function Kn(e,t,r){const n=v.useRef();v.useEffect(()=>{const o=(r==null?void 0:r.current)||window;if(!(o&&o.addEventListener))return;n.current!==t&&(n.current=t);const i=a=>{n!=null&&n.current&&n.current(a)};return o.addEventListener(e,i),()=>{o.removeEventListener(e,i)}},[e,r,t])}function $i(e,t){const r=()=>{if(typeof window>"u")return t;try{const s=window.localStorage.getItem(e);return s?Su(s):t}catch(s){return console.warn(`Error reading localStorage key “${e}”:`,s),t}},[n,o]=v.useState(r),i=s=>{typeof window>"u"&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const c=s instanceof Function?s(n):s;window.localStorage.setItem(e,JSON.stringify(c)),o(c),window.dispatchEvent(new Event("local-storage"))}catch(c){console.warn(`Error setting localStorage key “${e}”:`,c)}};v.useEffect(()=>{o(r())},[]);const a=()=>{o(r())};return Kn("storage",a),Kn("local-storage",a),[n,i]}function Su(e){try{return e==="undefined"?void 0:JSON.parse(e??"")}catch{console.log("parsing error on",{value:e});return}}const wu=ul({reducer:{petStore:gu,ui:kl}}),Pi={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},xu=async(e,t,r)=>{const n=await Eu(e),o=await $u(n);Au(o,t,r)},Eu=async e=>(await Cu(e).then(r=>r.pets.map(n=>({id:n.id,baseUrl:n.baseUrl})))).filter(r=>!!r),Cu=async e=>{try{const t=await fetch(e,{mode:"cors"});if(!t.ok)return null;const r=await t.text();return JSON.parse(r)}catch(t){return console.error(`Error fetching or parsing manifest from ${e}`,t),null}},$u=async e=>{const t=[];return e.forEach(n=>t.push(Pu(n))),(await Promise.all(t)).filter(n=>!!n)},Pu=e=>new Promise(t=>t(Ou(e))),Ou=async e=>{const t=e.baseUrl+"/data.json";try{const r=await fetch(t,{mode:"cors"});if(!r.ok)return console.error(`bad response from ${t}`),null;const n=JSON.parse(await r.text());return n.baseUrl=e.baseUrl,n}catch(r){return console.error(`Error fetching or parsing pet manifest from ${t}`,r),null}},Au=(e,t,r)=>{const n=new Date().getTime();let o="";r.config.activePet&&(o=r.config.activePet),e.forEach(i=>{const a=(r==null?void 0:r.pets.find(s=>s.id===i.id))||null;!o&&a&&r.config.activePet===a.id&&(o=a.id),t(Hl({isActive:o===(a==null?void 0:a.id),petDefinition:i,initialState:a}))}),t(o?Gl(o):pi(0)),r.interactions.filter(i=>i.endAt>n).forEach(i=>{t(a=>{a(Jl(i)),window.setTimeout(()=>{a(hi(i.id))},i.endAt-n)})})},Iu=()=>{const e=Ee(),[t,r]=v.useState(!1),[n]=$i("browserbuddy",Pi);return v.useEffect(()=>{t||(r(!0),window.location.search.indexOf("debug")>-1&&e(jl(!0)),xu("data/pet-manifest.json",e,n))},[t,n,r,e]),null};function Ru(e,t){const r=v.useRef(e);v.useLayoutEffect(()=>{r.current=e},[e]),v.useEffect(()=>{if(!t&&t!==0)return;const n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[t])}const Yn=2e3,ju=2e3,ku=()=>{const[e,t]=v.useState(0),r=Ee();return Ru(()=>{const n=new Date().getTime(),o=e+1;t(o),o*Yn%ju===0?r(Hn({time:n,doSave:!0})):r(Hn({time:n,doSave:!1}))},Yn),null};let Xn=0;const Tu=()=>{const[,e]=$i("browserbuddy",Pi),t=W(mu),r=Ee();return v.useEffect(()=>{t&&t.config.activePet&&(e(()=>t),Xn!==t.config.lastSaved&&(Xn=t.config.lastSaved,r(Yl(t))))},[t,r,e]),null},_u=()=>g.jsxs(g.Fragment,{children:[g.jsx(Tu,{}),g.jsx(Iu,{}),g.jsx(ku,{})]}),Lu=x.div`
  display:inline-block;
  width:calc(50% - 1rem);
  margin-right:1rem;
`,Mu=x.h4`
  font-size: 1rem;
`,Nu=x.div`
  position:relative;
  border:.5rem solid var(--color-white);
  border-radius: 1rem;
  overflow:hidden;
  padding:.25rem .5rem;
  text-align:center;
  background-color: var(--color-white);

  box-shadow: 0px -2px 4px var(--color-grey-light);
`,Du=x.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  z-index:1;
`,zu=x.div`
  position:absolute;
  top:0;
  left:0;
  height:100%; 
  transition: width .3s ease-in-out, background-color .5s ease-in-out;
  background-color: var(--color-blue);
`,Uu=x.p`
`,Fu=x.p`
  opacity:.5;
  margin-top:.125rem;
  margin-bottom:0rem;
  font-size:1.25rem;
`,Bu=({label:e,max:t,value:r,hideStats:n=!1})=>{const o=Math.round(r/t*1e3)/10;return g.jsxs(Lu,{children:[g.jsx(Mu,{children:e.toLocaleUpperCase()}),g.jsxs(Nu,{children:[!n&&g.jsxs(Du,{children:[g.jsx(Uu,{children:`${Sl(r)} / ${t}`}),g.jsx(Fu,{children:`${o}%`})]}),g.jsx(zu,{style:{width:`${o}%`}})]})]})},Wu=x.div`
  width:100%;
`,qu=()=>{const e=W(Ei);return g.jsx(Wu,{children:e.map((t,r)=>g.jsx(Bu,{label:t.label,max:t.max,value:t.value},r))})},Vu=x.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`,Hu=x.div`
  background-color:var(--color-white);
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`,Gu=x.div`
  background-color:var(--color-red);
  position:absolute;
  height:100%;
  left:0;

  &.full{
    width:100% !important;
    background-color: var(--color-blue);
  }
  z-index:1;
`,Ku=({startProgress:e,duration:t})=>{const[r,n]=v.useState(!1);return v.useEffect(()=>{r||window.setTimeout(()=>n(!0),1)},[r,n]),g.jsxs(Vu,{children:[g.jsx(Gu,{className:r?"full":"",style:{transition:`all ${t}s linear`,width:`${e*100}%`}}),g.jsx(Hu,{})]})},Oi=x.div`
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

  ${e=>e.$toggleStyle==="on"&&J`
    background-color: var(--color-green);
  `}
  ${e=>e.$toggleStyle==="off"&&J`
    background-color: var(--color-red);
  `}
`,Yu=x(Oi)`
  background-color: var(--color-red);
  border-color: var(--color-white);
  color: var(--color-white);
  
  cursor:not-allowed;
`,Jn=x.li`
  text-align:center;

  ${e=>!e.$isEnabled&&J`
    opacity: .5;
    pointer-events:none;
  `}
`,Zn=x.p`
  display:block;
  position:relative;
  z-index:2;
  font-size: 2rem;
`,Xu=({cooldownStatus:e,isEnabled:t,interaction:r,toggleState:n,onClickHandler:o})=>{let i=r.label;const a=n?n.state:void 0;if(n&&(i=`${i}: ${n.state}`),e){const s=e.endAt-e.startAt,c=(s-(e.endAt-new Date().getTime()))/s,l=(e.endAt-new Date().getTime())/1e3;return g.jsx(Jn,{$isEnabled:t,children:g.jsxs(Yu,{$toggleStyle:a,children:[g.jsx(Zn,{children:i}),g.jsx(Ku,{startProgress:c,duration:l})]})})}else return g.jsx(Jn,{$isEnabled:t,onClick:()=>o&&o(),children:g.jsx(Oi,{$toggleStyle:a,children:g.jsx(Zn,{children:`${i}`})})})},Ju=x.ul`
  border-bottom: 0.25rem dashed black;
  display: flex;
  flex-wrap: wrap;

  > li {
    margin: 0.5rem;
    margin-left: 0.25rem;
    &:first-child {
      margin-left: 0.5rem;
    }
    flex: 1 auto;
    list-style: none;
  }
`,Zu=()=>{const e=W(uu,Ve),t=W(Zt,Ve),r=W(lu),n=Ee(),o=i=>{const a=new Date().getTime();n(s=>{s(Xl({interaction:i,time:a})),i.cooldown&&window.setTimeout(()=>{s(hi(i.id))},i.cooldown)})};return g.jsx(Ju,{children:e.filter(i=>i.visible).map(i=>g.jsx(Xu,{cooldownStatus:i.cooldownStatus,isEnabled:r?i.enabled:!1,interaction:i.definition,toggleState:t.find(a=>a.id===i.id),onClickHandler:()=>o(i.definition)},i.id))})},Qu=x.div`
  position:absolute;
  left:0;
  right:0;
  top:-2rem;
  bottom:0;

  background-color:var(--color-green);
  border:.5rem solid var(--color-white);
  border-radius:2rem;
  overflow:hidden;

  box-shadow: .25rem .25rem .55rem .45rem var(--color-grey);
`,ef=x.div`
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
`,tf=x.div`
  width:100%;
`,rf=x.h4`
  margin-top:1rem;
  margin-bottom:.5rem;
`,nf=x.p`
  margin-top:1rem;
  padding-left:1rem;
`,of=x.div`
  min-height:5rem;
  width:100%;
`,af=()=>{const e=W(Si);return e?g.jsxs(Qu,{children:[g.jsx(of,{children:g.jsx(Zu,{})}),g.jsxs(ef,{children:[g.jsx(qu,{}),g.jsx("hr",{}),g.jsxs(tf,{children:[g.jsx(rf,{children:"Description"}),g.jsx(nf,{children:e.bio})]})]})]}):null},sf=Cc`
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
`,cf=()=>J`
    border-radius: 2rem;
    border: 0.5rem solid;
  `,lf=(e,t="--color-white")=>J`
    ${cf()}
    border-color: var(${t});
    color: var(${t});
    background-color: var(${e});
  `,uf=x.div`
  color:var(--color-black);
  position:absolute;
  right:0;
  bottom:1rem;
  z-index:1;
`,ff=x.ul`
  max-width: 14rem;
  text-align: right;
`,df=x.li`
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
  ${e=>lf(e.$bubbleColors[0],e.$bubbleColors[1])}
`,pf=e=>{switch(e){case"alert":return["--color-red","--color-yellow"];case"warning":return["--color-yellow","--color-red"];case"reward":return["--color-green","--color-white"];default:return["--color-white","--color-grey"]}},hf=()=>-5+Math.random()*5,mf=e=>e*35,gf=()=>{const t=W(cu,Ve).filter(r=>r.label);return g.jsx(uf,{children:g.jsx(ff,{children:t.map((r,n)=>g.jsx(df,{id:r.id,$bubbleColors:pf(r.alertType),style:{bottom:mf(n),transform:`rotate(${hf()}deg)`},children:r.label},r.id))})})},Qn=x.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -2rem;
  padding-top: 2rem;
  bottom: -2rem;
  padding-bottom: 2rem;
  background-color: var(--color-blue);
  border: 0.5rem solid var(--color-white);

  ${e=>e.$bgImageUrl&&J`
      background-size: cover;
      background-position: center;
      background-image: url(${e.$bgImageUrl});
    `}
`,vf=x.div`
  position: absolute;
  inset: 0;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;

  > span {
    font-size: 8rem;
    color: var(--color-white);
    background-color: var(--color-red);
    display: block;
    padding: 6rem;
    border-radius: 5rem;
    border: 1rem solid var(--color-white);

    transform: rotate(2deg) translateY(200%);
    opacity: 0;
    transition: transform .3s ease-out, opacity .2s;

    ${e=>e.$isActive&&J`
      transform: rotate(-7deg) translateY(125%);
      opacity: 1;
    `}
  }
`,yf=x.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  text-align: center;

  position: absolute;
  bottom: 0;
  left: 0;
`,bf=x.p`
  font-size: 2rem;
  color: var(--color-white);
  opacity: 0.5;

  position: absolute;
  top: 1rem;
  right: 1rem;
`,Sf=()=>{const e=Ee(),t=W(Ci,Ve),{imageUrl:r,bgColor:n}=W(au,Ve);if(v.useEffect(()=>{(t==null?void 0:t.type)==="dead"&&e(Zl())},[t==null?void 0:t.type,e]),!t)return g.jsx(Qn,{$bgImageUrl:r});const o=t.bgImageUrl||r,i={backgroundImage:`url(${t.imageUrl})`,backgroundColor:n||"initial",backgroundPosition:`${t.position}`,left:`${t.offsetX}px`,bottom:`${t.offsetY}px`};return g.jsx(Qn,{$bgImageUrl:o,children:g.jsxs(g.Fragment,{children:[g.jsx(bf,{children:`behavior: ${t.id}`}),g.jsx(gf,{}),g.jsx(yf,{style:i}),g.jsx(vf,{$isActive:t.type==="dead",children:g.jsx("span",{children:"WASTED"})})]})})},wf=x.div`
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
`,xf=x.div`
  flex:1;

  >p{
    font-style:italic;
  }

  >h4{
    margin-top:-.5rem;
    margin-bottom: -.5rem;
  }
`,Ef=x.div`
  text-align:right;
  color: var(--color-white);
  
  >h4{
    margin:0;
    line-height: 5rem;
  }
`,Cf=x.h4`
  text-align:left;
  display:inline-block;
  flex:1;
`,eo=x.p`
  
`,to=e=>e?new Date(e).toLocaleString("en-us"):null,$f=()=>{var n;const e=W(Si),t=W(nn),r=(n=t==null?void 0:t.stats.find(o=>o.id==="level"))==null?void 0:n.value;return g.jsx(wf,{children:e&&g.jsxs(g.Fragment,{children:[g.jsxs(xf,{children:[g.jsx(Cf,{children:e.name}),(t==null?void 0:t.bornOn)&&g.jsx(eo,{children:`born on: ${to(t.bornOn)}`}),(t==null?void 0:t.diedOn)&&g.jsx(eo,{children:`died on: ${to(t.diedOn)}`})]}),g.jsx(Ef,{children:r&&g.jsx("h4",{children:`Level: ${r}`})})]})})},Pf=x.li`
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

  ${e=>e.$isActive&&J`
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
`,Of=()=>{const e=W(fu),t=Ee();return g.jsx("ul",{children:e.map((r,n)=>g.jsx(Pf,{onClick:()=>t(pi(n)),$isActive:r.isActive,children:n+1},n))})},Af=x.div`
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
`,If=x.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  > ul {
    flex: 1;
  }
`,Rf=()=>g.jsxs(If,{children:[g.jsx(Of,{}),g.jsx(po,{to:"/about",children:g.jsx(Af,{children:"?"})})]}),jf=x.header`
  position: relative;
  height:8rem;
  z-index:1;

  display:flex;
  flex-direction:column;
`,kf=x.div`
  flex: 0 0 3rem;
`,Tf=x.div`
  position:relative;
  z-index:1;
  flex: 1;
`,_f=()=>g.jsxs(jf,{children:[g.jsx(kf,{children:g.jsx(Rf,{})}),g.jsx(Tf,{children:g.jsx($f,{})})]}),Lf=x.div`
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
`,Mf=x.div`
  grid-area: header;
`,Nf=x.div`
  grid-area: body;
`,Df=x.div`
  grid-area: footer;
`,zf=()=>g.jsxs(Lf,{children:[g.jsx(_u,{}),g.jsx(Mf,{children:g.jsx(_f,{})}),g.jsx(Nf,{children:g.jsx(Sf,{})}),g.jsx(Df,{children:g.jsx(af,{})})]}),Uf=()=>g.jsxs(Ea,{children:[g.jsx(vr,{path:"/about",element:g.jsx(bu,{})}),g.jsx(vr,{path:"/",element:g.jsx(zf,{})})]});_i.createRoot(document.getElementById("root")).render(g.jsx(Y.StrictMode,{children:g.jsx(Ss,{store:wu,children:g.jsxs(Ia,{children:[g.jsx(Uf,{}),g.jsx(sf,{})]})})}));
