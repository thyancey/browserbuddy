import{r as v,a as ji,b as Ri,R as J,j as m,c as ki}from"./client-8837fce7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ve.apply(this,arguments)}var se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(se||(se={}));const an="popstate";function Ti(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:c=""}=xe(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),gr("",{pathname:a,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let c=o.location.href,l=c.indexOf("#");s=l===-1?c:c.slice(0,l)}return s+"#"+(typeof i=="string"?i:ut(i))}function n(o,i){Et(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Li(t,r,n,e)}function L(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Et(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _i(){return Math.random().toString(36).substr(2,8)}function sn(e,t){return{usr:e.state,key:e.key,idx:t}}function gr(e,t,r,n){return r===void 0&&(r=null),Ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xe(t):t,{state:r,key:t&&t.key||n||_i()})}function ut(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function xe(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Li(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,s=se.Pop,c=null,l=u();l==null&&(l=0,a.replaceState(Ve({},a.state,{idx:l}),""));function u(){return(a.state||{idx:null}).idx}function f(){s=se.Pop;let b=u(),w=b==null?null:b-l;l=b,c&&c({action:s,location:g.location,delta:w})}function d(b,w){s=se.Push;let y=gr(g.location,b,w);r&&r(y,b),l=u()+1;let S=sn(y,l),E=g.createHref(y);try{a.pushState(S,"",E)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;o.location.assign(E)}i&&c&&c({action:s,location:g.location,delta:1})}function p(b,w){s=se.Replace;let y=gr(g.location,b,w);r&&r(y,b),l=u();let S=sn(y,l),E=g.createHref(y);a.replaceState(S,"",E),i&&c&&c({action:s,location:g.location,delta:0})}function h(b){let w=o.location.origin!=="null"?o.location.origin:o.location.href,y=typeof b=="string"?b:ut(b);return L(w,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,w)}let g={get action(){return s},get location(){return e(o,a)},listen(b){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(an,f),c=b,()=>{o.removeEventListener(an,f),c=null}},createHref(b){return t(o,b)},createURL:h,encodeLocation(b){let w=h(b);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:p,go(b){return a.go(b)}};return g}var cn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cn||(cn={}));function Mi(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?xe(t):t,o=Tr(n.pathname||"/",r);if(o==null)return null;let i=to(e);Ni(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Hi(i[s],Yi(o));return a}function to(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(L(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let l=ce([n,c.relativePath]),u=r.concat(c);i.children&&i.children.length>0&&(L(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),to(i.children,t,u,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:qi(l,i.index),routesMeta:u})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let c of ro(i.path))o(i,a,c)}),t}function ro(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=ro(n.join("/")),s=[];return s.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ni(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Vi(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Di=/^:\w+$/,zi=3,Ui=2,Fi=1,Bi=10,Wi=-2,ln=e=>e==="*";function qi(e,t){let r=e.split("/"),n=r.length;return r.some(ln)&&(n+=Wi),t&&(n+=Ui),r.filter(o=>!ln(o)).reduce((o,i)=>o+(Di.test(i)?zi:i===""?Fi:Bi),n)}function Vi(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Hi(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,l=o==="/"?t:t.slice(o.length)||"/",u=Ki({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l);if(!u)return null;Object.assign(n,u.params);let f=s.route;i.push({params:n,pathname:ce([o,u.pathname]),pathnameBase:Qi(ce([o,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(o=ce([o,u.pathnameBase]))}return i}function Ki(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Gi(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((l,u,f)=>{if(u==="*"){let d=s[f]||"";a=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return l[u]=Xi(s[f]||"",u),l},{}),pathname:i,pathnameBase:a,pattern:e}}function Gi(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Et(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(n.push(s),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Yi(e){try{return decodeURI(e)}catch(t){return Et(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xi(e,t){try{return decodeURIComponent(e)}catch(r){return Et(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Tr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Ji(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?xe(e):e;return{pathname:r?r.startsWith("/")?r:Zi(r,t):t,search:ea(n),hash:ta(o)}}function Zi(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function tr(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function no(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function oo(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=xe(e):(o=Ve({},e),L(!o.pathname||!o.pathname.includes("?"),tr("?","pathname","search",o)),L(!o.pathname||!o.pathname.includes("#"),tr("#","pathname","hash",o)),L(!o.search||!o.search.includes("#"),tr("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(n||a==null)s=r;else{let f=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}s=f>=0?t[f]:"/"}let c=Ji(o,s),l=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const ce=e=>e.join("/").replace(/\/\/+/g,"/"),Qi=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ea=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ta=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ra(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const io=["post","put","patch","delete"];new Set(io);const na=["get",...io];new Set(na);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ft(){return ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ft.apply(this,arguments)}const _r=v.createContext(null),oa=v.createContext(null),Me=v.createContext(null),$t=v.createContext(null),Ee=v.createContext({outlet:null,matches:[],isDataRoute:!1}),ao=v.createContext(null);function ia(e,t){let{relative:r}=t===void 0?{}:t;Je()||L(!1);let{basename:n,navigator:o}=v.useContext(Me),{hash:i,pathname:a,search:s}=co(e,{relative:r}),c=a;return n!=="/"&&(c=a==="/"?n:ce([n,a])),o.createHref({pathname:c,search:s,hash:i})}function Je(){return v.useContext($t)!=null}function Ct(){return Je()||L(!1),v.useContext($t).location}function so(e){v.useContext(Me).static||v.useLayoutEffect(e)}function aa(){let{isDataRoute:e}=v.useContext(Ee);return e?ba():sa()}function sa(){Je()||L(!1);let e=v.useContext(_r),{basename:t,navigator:r}=v.useContext(Me),{matches:n}=v.useContext(Ee),{pathname:o}=Ct(),i=JSON.stringify(no(n).map(c=>c.pathnameBase)),a=v.useRef(!1);return so(()=>{a.current=!0}),v.useCallback(function(c,l){if(l===void 0&&(l={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=oo(c,JSON.parse(i),o,l.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:ce([t,u.pathname])),(l.replace?r.replace:r.push)(u,l.state,l)},[t,r,i,o,e])}function co(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=v.useContext(Ee),{pathname:o}=Ct(),i=JSON.stringify(no(n).map(a=>a.pathnameBase));return v.useMemo(()=>oo(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function ca(e,t){return la(e,t)}function la(e,t,r){Je()||L(!1);let{navigator:n}=v.useContext(Me),{matches:o}=v.useContext(Ee),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let c=Ct(),l;if(t){var u;let g=typeof t=="string"?xe(t):t;s==="/"||(u=g.pathname)!=null&&u.startsWith(s)||L(!1),l=g}else l=c;let f=l.pathname||"/",d=s==="/"?f:f.slice(s.length)||"/",p=Mi(e,{pathname:d}),h=ha(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:ce([s,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?s:ce([s,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,r);return t&&h?v.createElement($t.Provider,{value:{location:ft({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:se.Pop}},h):h}function ua(){let e=ya(),t=ra(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:o},r):null,i)}const fa=v.createElement(ua,null);class da extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?v.createElement(Ee.Provider,{value:this.props.routeContext},v.createElement(ao.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pa(e){let{routeContext:t,match:r,children:n}=e,o=v.useContext(_r);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Ee.Provider,{value:t},n)}function ha(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let i=e,a=(n=r)==null?void 0:n.errors;if(a!=null){let s=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));s>=0||L(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,c,l)=>{let u=c.route.id?a==null?void 0:a[c.route.id]:null,f=null;r&&(f=c.route.errorElement||fa);let d=t.concat(i.slice(0,l+1)),p=()=>{let h;return u?h=f:c.route.Component?h=v.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=s,v.createElement(pa,{match:c,routeContext:{outlet:s,matches:d,isDataRoute:r!=null},children:h})};return r&&(c.route.ErrorBoundary||c.route.errorElement||l===0)?v.createElement(da,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var lo=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lo||{}),dt=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dt||{});function ga(e){let t=v.useContext(_r);return t||L(!1),t}function ma(e){let t=v.useContext(oa);return t||L(!1),t}function va(e){let t=v.useContext(Ee);return t||L(!1),t}function uo(e){let t=va(),r=t.matches[t.matches.length-1];return r.route.id||L(!1),r.route.id}function ya(){var e;let t=v.useContext(ao),r=ma(dt.UseRouteError),n=uo(dt.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function ba(){let{router:e}=ga(lo.UseNavigateStable),t=uo(dt.UseNavigateStable),r=v.useRef(!1);return so(()=>{r.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ft({fromRouteId:t},i)))},[e,t])}function mr(e){L(!1)}function wa(e){let{basename:t="/",children:r=null,location:n,navigationType:o=se.Pop,navigator:i,static:a=!1}=e;Je()&&L(!1);let s=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof n=="string"&&(n=xe(n));let{pathname:l="/",search:u="",hash:f="",state:d=null,key:p="default"}=n,h=v.useMemo(()=>{let g=Tr(l,s);return g==null?null:{location:{pathname:g,search:u,hash:f,state:d,key:p},navigationType:o}},[s,l,u,f,d,p,o]);return h==null?null:v.createElement(Me.Provider,{value:c},v.createElement($t.Provider,{children:r,value:h}))}function Sa(e){let{children:t,location:r}=e;return ca(vr(t),r)}new Promise(()=>{});function vr(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,o)=>{if(!v.isValidElement(n))return;let i=[...t,o];if(n.type===v.Fragment){r.push.apply(r,vr(n.props.children,i));return}n.type!==mr&&L(!1),!n.props.index||!n.props.children||L(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=vr(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},yr.apply(this,arguments)}function xa(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Ea(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $a(e,t){return e.button===0&&(!t||t==="_self")&&!Ea(e)}const Ca=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Pa="startTransition",un=ji[Pa];function Oa(e){let{basename:t,children:r,future:n,window:o}=e,i=v.useRef();i.current==null&&(i.current=Ti({window:o,v5Compat:!0}));let a=i.current,[s,c]=v.useState({action:a.action,location:a.location}),{v7_startTransition:l}=n||{},u=v.useCallback(f=>{l&&un?un(()=>c(f)):c(f)},[c,l]);return v.useLayoutEffect(()=>a.listen(u),[a,u]),v.createElement(wa,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a})}const Ia=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Aa=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fo=v.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:s,target:c,to:l,preventScrollReset:u}=t,f=xa(t,Ca),{basename:d}=v.useContext(Me),p,h=!1;if(typeof l=="string"&&Aa.test(l)&&(p=l,Ia))try{let y=new URL(window.location.href),S=l.startsWith("//")?new URL(y.protocol+l):new URL(l),E=Tr(S.pathname,d);S.origin===y.origin&&E!=null?l=E+S.search+S.hash:h=!0}catch{}let g=ia(l,{relative:o}),b=ja(l,{replace:a,state:s,target:c,preventScrollReset:u,relative:o});function w(y){n&&n(y),y.defaultPrevented||b(y)}return v.createElement("a",yr({},f,{href:p||g,onClick:h||i?n:w,ref:r,target:c}))});var fn;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(fn||(fn={}));var dn;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dn||(dn={}));function ja(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=aa(),c=Ct(),l=co(e,{relative:a});return v.useCallback(u=>{if($a(u,r)){u.preventDefault();let f=n!==void 0?n:ut(c)===ut(l);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[c,s,l,n,o,r,e,i,a])}var po={exports:{}},ho={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=v;function Ra(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ka=typeof Object.is=="function"?Object.is:Ra,Ta=Ae.useState,_a=Ae.useEffect,La=Ae.useLayoutEffect,Ma=Ae.useDebugValue;function Na(e,t){var r=t(),n=Ta({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return La(function(){o.value=r,o.getSnapshot=t,rr(o)&&i({inst:o})},[e,r,t]),_a(function(){return rr(o)&&i({inst:o}),e(function(){rr(o)&&i({inst:o})})},[e]),Ma(r),r}function rr(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ka(e,r)}catch{return!0}}function Da(e,t){return t()}var za=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Da:Na;ho.useSyncExternalStore=Ae.useSyncExternalStore!==void 0?Ae.useSyncExternalStore:za;po.exports=ho;var Ua=po.exports,go={exports:{}},mo={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt=v,Fa=Ua;function Ba(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wa=typeof Object.is=="function"?Object.is:Ba,qa=Fa.useSyncExternalStore,Va=Pt.useRef,Ha=Pt.useEffect,Ka=Pt.useMemo,Ga=Pt.useDebugValue;mo.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=Va(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Ka(function(){function c(p){if(!l){if(l=!0,u=p,p=n(p),o!==void 0&&a.hasValue){var h=a.value;if(o(h,p))return f=h}return f=p}if(h=f,Wa(u,p))return h;var g=n(p);return o!==void 0&&o(h,g)?h:(u=p,f=g)}var l=!1,u,f,d=r===void 0?null:r;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,r,n,o]);var s=qa(e,i[0],i[1]);return Ha(function(){a.hasValue=!0,a.value=s},[s]),Ga(s),s};go.exports=mo;var Ya=go.exports;function Xa(e){e()}let vo=Xa;const Ja=e=>vo=e,Za=()=>vo,pn=Symbol.for("react-redux-context"),hn=typeof globalThis<"u"?globalThis:{};function Qa(){var e;if(!v.createContext)return{};const t=(e=hn[pn])!=null?e:hn[pn]=new Map;let r=t.get(v.createContext);return r||(r=v.createContext(null),t.set(v.createContext,r)),r}const de=Qa();function Lr(e=de){return function(){return v.useContext(e)}}const yo=Lr(),es=()=>{throw new Error("uSES not initialized!")};let bo=es;const ts=e=>{bo=e},rs=(e,t)=>e===t;function ns(e=de){const t=e===de?yo:Lr(e);return function(n,o={}){const{equalityFn:i=rs,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:c,subscription:l,getServerState:u,stabilityCheck:f,noopCheck:d}=t();v.useRef(!0);const p=v.useCallback({[n.name](g){return n(g)}}[n.name],[n,f,a]),h=bo(l.addNestedSub,c.getState,u||c.getState,p,i);return v.useDebugValue(h),h}}const U=ns();var wo={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=typeof Symbol=="function"&&Symbol.for,Mr=N?Symbol.for("react.element"):60103,Nr=N?Symbol.for("react.portal"):60106,Ot=N?Symbol.for("react.fragment"):60107,It=N?Symbol.for("react.strict_mode"):60108,At=N?Symbol.for("react.profiler"):60114,jt=N?Symbol.for("react.provider"):60109,Rt=N?Symbol.for("react.context"):60110,Dr=N?Symbol.for("react.async_mode"):60111,kt=N?Symbol.for("react.concurrent_mode"):60111,Tt=N?Symbol.for("react.forward_ref"):60112,_t=N?Symbol.for("react.suspense"):60113,os=N?Symbol.for("react.suspense_list"):60120,Lt=N?Symbol.for("react.memo"):60115,Mt=N?Symbol.for("react.lazy"):60116,is=N?Symbol.for("react.block"):60121,as=N?Symbol.for("react.fundamental"):60117,ss=N?Symbol.for("react.responder"):60118,cs=N?Symbol.for("react.scope"):60119;function W(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mr:switch(e=e.type,e){case Dr:case kt:case Ot:case At:case It:case _t:return e;default:switch(e=e&&e.$$typeof,e){case Rt:case Tt:case Mt:case Lt:case jt:return e;default:return t}}case Nr:return t}}}function So(e){return W(e)===kt}A.AsyncMode=Dr;A.ConcurrentMode=kt;A.ContextConsumer=Rt;A.ContextProvider=jt;A.Element=Mr;A.ForwardRef=Tt;A.Fragment=Ot;A.Lazy=Mt;A.Memo=Lt;A.Portal=Nr;A.Profiler=At;A.StrictMode=It;A.Suspense=_t;A.isAsyncMode=function(e){return So(e)||W(e)===Dr};A.isConcurrentMode=So;A.isContextConsumer=function(e){return W(e)===Rt};A.isContextProvider=function(e){return W(e)===jt};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr};A.isForwardRef=function(e){return W(e)===Tt};A.isFragment=function(e){return W(e)===Ot};A.isLazy=function(e){return W(e)===Mt};A.isMemo=function(e){return W(e)===Lt};A.isPortal=function(e){return W(e)===Nr};A.isProfiler=function(e){return W(e)===At};A.isStrictMode=function(e){return W(e)===It};A.isSuspense=function(e){return W(e)===_t};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ot||e===kt||e===At||e===It||e===_t||e===os||typeof e=="object"&&e!==null&&(e.$$typeof===Mt||e.$$typeof===Lt||e.$$typeof===jt||e.$$typeof===Rt||e.$$typeof===Tt||e.$$typeof===as||e.$$typeof===ss||e.$$typeof===cs||e.$$typeof===is)};A.typeOf=W;wo.exports=A;var ls=wo.exports,xo=ls,us={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Eo={};Eo[xo.ForwardRef]=us;Eo[xo.Memo]=fs;var j={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),Ut=Symbol.for("react.provider"),Ft=Symbol.for("react.context"),ds=Symbol.for("react.server_context"),Bt=Symbol.for("react.forward_ref"),Wt=Symbol.for("react.suspense"),qt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),ps=Symbol.for("react.offscreen"),$o;$o=Symbol.for("react.module.reference");function H(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zr:switch(e=e.type,e){case Nt:case zt:case Dt:case Wt:case qt:return e;default:switch(e=e&&e.$$typeof,e){case ds:case Ft:case Bt:case Ht:case Vt:case Ut:return e;default:return t}}case Ur:return t}}}j.ContextConsumer=Ft;j.ContextProvider=Ut;j.Element=zr;j.ForwardRef=Bt;j.Fragment=Nt;j.Lazy=Ht;j.Memo=Vt;j.Portal=Ur;j.Profiler=zt;j.StrictMode=Dt;j.Suspense=Wt;j.SuspenseList=qt;j.isAsyncMode=function(){return!1};j.isConcurrentMode=function(){return!1};j.isContextConsumer=function(e){return H(e)===Ft};j.isContextProvider=function(e){return H(e)===Ut};j.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr};j.isForwardRef=function(e){return H(e)===Bt};j.isFragment=function(e){return H(e)===Nt};j.isLazy=function(e){return H(e)===Ht};j.isMemo=function(e){return H(e)===Vt};j.isPortal=function(e){return H(e)===Ur};j.isProfiler=function(e){return H(e)===zt};j.isStrictMode=function(e){return H(e)===Dt};j.isSuspense=function(e){return H(e)===Wt};j.isSuspenseList=function(e){return H(e)===qt};j.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nt||e===zt||e===Dt||e===Wt||e===qt||e===ps||typeof e=="object"&&e!==null&&(e.$$typeof===Ht||e.$$typeof===Vt||e.$$typeof===Ut||e.$$typeof===Ft||e.$$typeof===Bt||e.$$typeof===$o||e.getModuleId!==void 0)};j.typeOf=H;function hs(){const e=Za();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const gn={notify(){},get:()=>[]};function gs(e,t){let r,n=gn;function o(f){return c(),n.subscribe(f)}function i(){n.notify()}function a(){u.onStateChange&&u.onStateChange()}function s(){return!!r}function c(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=hs())}function l(){r&&(r(),r=void 0,n.clear(),n=gn)}const u={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:c,tryUnsubscribe:l,getListeners:()=>n};return u}const ms=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vs=ms?v.useLayoutEffect:v.useEffect;function mn(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function ye(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!mn(e[r[o]],t[r[o]]))return!1;return!0}function ys({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){const a=v.useMemo(()=>{const l=gs(e);return{store:e,subscription:l,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[e,n,o,i]),s=v.useMemo(()=>e.getState(),[e]);vs(()=>{const{subscription:l}=a;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[a,s]);const c=t||de;return v.createElement(c.Provider,{value:a},r)}function Co(e=de){const t=e===de?yo:Lr(e);return function(){const{store:n}=t();return n}}const bs=Co();function ws(e=de){const t=e===de?bs:Co(e);return function(){return t().dispatch}}const $e=ws();ts(Ya.useSyncExternalStoreWithSelector);Ja(Ri.unstable_batchedUpdates);var z=function(){return z=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},z.apply(this,arguments)};function He(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var R="-ms-",qe="-moz-",O="-webkit-",Po="comm",Kt="rule",Fr="decl",Ss="@import",Oo="@keyframes",xs="@layer",Es=Math.abs,Br=String.fromCharCode,br=Object.assign;function $s(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function Io(e){return e.trim()}function Q(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function at(e,t){return e.indexOf(t)}function M(e,t){return e.charCodeAt(t)|0}function je(e,t,r){return e.slice(t,r)}function X(e){return e.length}function Ao(e){return e.length}function Be(e,t){return t.push(e),e}function Cs(e,t){return e.map(t).join("")}function vn(e,t){return e.filter(function(r){return!Q(r,t)})}var Gt=1,Re=1,jo=0,q=0,_=0,Ne="";function Yt(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Gt,column:Re,length:a,return:"",siblings:s}}function ie(e,t){return br(Yt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ce(e){for(;e.root;)e=ie(e.root,{children:[e]});Be(e,e.siblings)}function Ps(){return _}function Os(){return _=q>0?M(Ne,--q):0,Re--,_===10&&(Re=1,Gt--),_}function G(){return _=q<jo?M(Ne,q++):0,Re++,_===10&&(Re=1,Gt++),_}function we(){return M(Ne,q)}function st(){return q}function Xt(e,t){return je(Ne,e,t)}function wr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Is(e){return Gt=Re=1,jo=X(Ne=e),q=0,[]}function As(e){return Ne="",e}function nr(e){return Io(Xt(q-1,Sr(e===91?e+2:e===40?e+1:e)))}function js(e){for(;(_=we())&&_<33;)G();return wr(e)>2||wr(_)>3?"":" "}function Rs(e,t){for(;--t&&G()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Xt(e,st()+(t<6&&we()==32&&G()==32))}function Sr(e){for(;G();)switch(_){case e:return q;case 34:case 39:e!==34&&e!==39&&Sr(_);break;case 40:e===41&&Sr(e);break;case 92:G();break}return q}function ks(e,t){for(;G()&&e+_!==47+10;)if(e+_===42+42&&we()===47)break;return"/*"+Xt(t,q-1)+"*"+Br(e===47?e:G())}function Ts(e){for(;!wr(we());)G();return Xt(e,q)}function _s(e){return As(ct("",null,null,null,[""],e=Is(e),0,[0],e))}function ct(e,t,r,n,o,i,a,s,c){for(var l=0,u=0,f=a,d=0,p=0,h=0,g=1,b=1,w=1,y=0,S="",E=o,$=i,I=n,C=S;b;)switch(h=y,y=G()){case 40:if(h!=108&&M(C,f-1)==58){at(C+=P(nr(y),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:C+=nr(y);break;case 9:case 10:case 13:case 32:C+=js(h);break;case 92:C+=Rs(st()-1,7);continue;case 47:switch(we()){case 42:case 47:Be(Ls(ks(G(),st()),t,r,c),c);break;default:C+="/"}break;case 123*g:s[l++]=X(C)*w;case 125*g:case 59:case 0:switch(y){case 0:case 125:b=0;case 59+u:w==-1&&(C=P(C,/\f/g,"")),p>0&&X(C)-f&&Be(p>32?bn(C+";",n,r,f-1,c):bn(P(C," ","")+";",n,r,f-2,c),c);break;case 59:C+=";";default:if(Be(I=yn(C,t,r,l,u,o,s,S,E=[],$=[],f,i),i),y===123)if(u===0)ct(C,t,I,I,E,i,f,s,$);else switch(d===99&&M(C,3)===110?100:d){case 100:case 108:case 109:case 115:ct(e,I,I,n&&Be(yn(e,I,I,0,0,o,s,S,o,E=[],f,$),$),o,$,f,s,n?E:$);break;default:ct(C,I,I,I,[""],$,0,s,$)}}l=u=p=0,g=w=1,S=C="",f=a;break;case 58:f=1+X(C),p=h;default:if(g<1){if(y==123)--g;else if(y==125&&g++==0&&Os()==125)continue}switch(C+=Br(y),y*g){case 38:w=u>0?1:(C+="\f",-1);break;case 44:s[l++]=(X(C)-1)*w,w=1;break;case 64:we()===45&&(C+=nr(G())),d=we(),u=f=X(S=C+=Ts(st())),y++;break;case 45:h===45&&X(C)==2&&(g=0)}}return i}function yn(e,t,r,n,o,i,a,s,c,l,u,f){for(var d=o-1,p=o===0?i:[""],h=Ao(p),g=0,b=0,w=0;g<n;++g)for(var y=0,S=je(e,d+1,d=Es(b=a[g])),E=e;y<h;++y)(E=Io(b>0?p[y]+" "+S:P(S,/&\f/g,p[y])))&&(c[w++]=E);return Yt(e,t,r,o===0?Kt:s,c,l,u,f)}function Ls(e,t,r,n){return Yt(e,t,r,Po,Br(Ps()),je(e,2,-2),0,n)}function bn(e,t,r,n,o){return Yt(e,t,r,Fr,je(e,0,n),je(e,n+1,-1),n,o)}function Ro(e,t,r){switch($s(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return qe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+qe+e+R+e+e;case 5936:switch(M(e,t+11)){case 114:return O+e+R+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+R+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+R+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+R+e+e;case 6165:return O+e+R+"flex-"+e+e;case 5187:return O+e+P(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return O+e+R+"flex-item-"+P(e,/flex-|-self/g,"")+(Q(e,/flex-|baseline/)?"":R+"grid-row-"+P(e,/flex-|-self/g,""))+e;case 4675:return O+e+R+"flex-line-pack"+P(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+R+P(e,"shrink","negative")+e;case 5292:return O+e+R+P(e,"basis","preferred-size")+e;case 6060:return O+"box-"+P(e,"-grow","")+O+e+R+P(e,"grow","positive")+e;case 4554:return O+P(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!Q(e,/flex-|baseline/))return R+"grid-column-align"+je(e,t)+e;break;case 2592:case 3360:return R+P(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Q(n.props,/grid-\w+-end/)})?~at(e+(r=r[t].value),"span")?e:R+P(e,"-start","")+e+R+"grid-row-span:"+(~at(r,"span")?Q(r,/\d+/):+Q(r,/\d+/)-+Q(e,/\d+/))+";":R+P(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Q(n.props,/grid-\w+-start/)})?e:R+P(P(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(X(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+qe+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~at(e,"stretch")?Ro(P(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,s,c,l){return R+o+":"+i+l+(a?R+o+"-span:"+(s?c:+c-+i)+l:"")+e});case 4949:if(M(e,t+6)===121)return P(e,":",":"+O)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(M(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+R+"$2box$3")+e;case 100:return P(e,":",":"+R)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,"scroll-","scroll-snap-")+e}return e}function pt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Ms(e,t,r,n){switch(e.type){case xs:if(e.children.length)break;case Ss:case Fr:return e.return=e.return||e.value;case Po:return"";case Oo:return e.return=e.value+"{"+pt(e.children,n)+"}";case Kt:if(!X(e.value=e.props.join(",")))return""}return X(r=pt(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ns(e){var t=Ao(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}function Ds(e){return function(t){t.root||(t=t.return)&&e(t)}}function zs(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Fr:e.return=Ro(e.value,e.length,r);return;case Oo:return pt([ie(e,{value:P(e.value,"@","@"+O)})],n);case Kt:if(e.length)return Cs(r=e.props,function(o){switch(Q(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ce(ie(e,{props:[P(o,/:(read-\w+)/,":"+qe+"$1")]})),Ce(ie(e,{props:[o]})),br(e,{props:vn(r,n)});break;case"::placeholder":Ce(ie(e,{props:[P(o,/:(plac\w+)/,":"+O+"input-$1")]})),Ce(ie(e,{props:[P(o,/:(plac\w+)/,":"+qe+"$1")]})),Ce(ie(e,{props:[P(o,/:(plac\w+)/,R+"input-$1")]})),Ce(ie(e,{props:[o]})),br(e,{props:vn(r,n)});break}return""})}}var Us={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ke=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Wr=typeof window<"u"&&"HTMLElement"in window,Fs=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Bs={},Jt=Object.freeze([]),Te=Object.freeze({});function ko(e,t,r){return r===void 0&&(r=Te),e.theme!==r.theme&&e.theme||t||r.theme}var To=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ws=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qs=/(^-|-$)/g;function wn(e){return e.replace(Ws,"-").replace(qs,"")}var Vs=/(a)(d)/gi,Sn=function(e){return String.fromCharCode(e+(e>25?39:97))};function xr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Sn(t%52)+r;return(Sn(t%52)+r).replace(Vs,"$1-$2")}var or,Pe=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},_o=function(e){return Pe(5381,e)};function Lo(e){return xr(_o(e)>>>0)}function Hs(e){return e.displayName||e.name||"Component"}function ir(e){return typeof e=="string"&&!0}var Mo=typeof Symbol=="function"&&Symbol.for,No=Mo?Symbol.for("react.memo"):60115,Ks=Mo?Symbol.for("react.forward_ref"):60112,Gs={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ys={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Do={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xs=((or={})[Ks]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},or[No]=Do,or);function xn(e){return("type"in(t=e)&&t.type.$$typeof)===No?Do:"$$typeof"in e?Xs[e.$$typeof]:Gs;var t}var Js=Object.defineProperty,Zs=Object.getOwnPropertyNames,En=Object.getOwnPropertySymbols,Qs=Object.getOwnPropertyDescriptor,ec=Object.getPrototypeOf,$n=Object.prototype;function zo(e,t,r){if(typeof t!="string"){if($n){var n=ec(t);n&&n!==$n&&zo(e,n,r)}var o=Zs(t);En&&(o=o.concat(En(t)));for(var i=xn(e),a=xn(t),s=0;s<o.length;++s){var c=o[s];if(!(c in Ys||r&&r[c]||a&&c in a||i&&c in i)){var l=Qs(t,c);try{Js(e,c,l)}catch{}}}}return e}function _e(e){return typeof e=="function"}function qr(e){return typeof e=="object"&&"styledComponentId"in e}function be(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Er(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ke(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $r(e,t,r){if(r===void 0&&(r=!1),!r&&!Ke(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=$r(e[n],t[n]);else if(Ke(t))for(var n in t)e[n]=$r(e[n],t[n]);return e}function Vr(e,t){Object.defineProperty(e,"toString",{value:t})}function Ze(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tc=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Ze(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),lt=new Map,ht=new Map,ar=1,ot=function(e){if(lt.has(e))return lt.get(e);for(;ht.has(ar);)ar++;var t=ar++;return lt.set(e,t),ht.set(t,e),t},rc=function(e,t){lt.set(e,t),ht.set(t,e)},nc="style[".concat(ke,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),oc=new RegExp("^".concat(ke,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ic=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},ac=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var c=s.match(oc);if(c){var l=0|parseInt(c[1],10),u=c[2];l!==0&&(rc(u,l),ic(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}}};function sc(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Uo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var c=Array.from(s.querySelectorAll("style[".concat(ke,"]")));return c[c.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(ke,"active"),n.setAttribute("data-styled-version","6.0.7");var a=sc();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},cc=function(){function e(t){this.element=Uo(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Ze(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),lc=function(){function e(t){this.element=Uo(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),uc=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cn=Wr,fc={isServer:!Wr,useCSSOMInjection:!Fs},gt=function(){function e(t,r,n){t===void 0&&(t=Te),r===void 0&&(r={});var o=this;this.options=z(z({},fc),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Wr&&Cn&&(Cn=!1,function(i){for(var a=document.querySelectorAll(nc),s=0,c=a.length;s<c;s++){var l=a[s];l&&l.getAttribute(ke)!=="active"&&(ac(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),Vr(this,function(){return function(i){for(var a=i.getTag(),s=a.length,c="",l=function(f){var d=function(w){return ht.get(w)}(f);if(d===void 0)return"continue";var p=i.names.get(d),h=a.getGroup(f);if(p===void 0||h.length===0)return"continue";var g="".concat(ke,".g").concat(f,'[id="').concat(d,'"]'),b="";p!==void 0&&p.forEach(function(w){w.length>0&&(b+="".concat(w,","))}),c+="".concat(h).concat(g,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},u=0;u<s;u++)l(u);return c}(o)})}return e.registerId=function(t){return ot(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(z(z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new uc(o):n?new cc(o):new lc(o)}(this.options),new tc(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ot(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ot(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ot(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dc=/&/g,pc=/^\s*\/\/.*$/gm;function Fo(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Fo(r.children,t)),r})}function hc(e){var t,r,n,o=e===void 0?Te:e,i=o.options,a=i===void 0?Te:i,s=o.plugins,c=s===void 0?Jt:s,l=function(d,p,h){return h===r||h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):d},u=c.slice();u.push(function(d){d.type===Kt&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(dc,r).replace(n,l))}),a.prefix&&u.push(zs),u.push(Ms);var f=function(d,p,h,g){p===void 0&&(p=""),h===void 0&&(h=""),g===void 0&&(g="&"),t=g,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var b=d.replace(pc,""),w=_s(h||p?"".concat(h," ").concat(p," { ").concat(b," }"):b);a.namespace&&(w=Fo(w,a.namespace));var y=[];return pt(w,Ns(u.concat(Ds(function(S){return y.push(S)})))),y};return f.hash=c.length?c.reduce(function(d,p){return p.name||Ze(15),Pe(d,p.name)},5381).toString():"",f}var gc=new gt,Cr=hc(),Bo=J.createContext({shouldForwardProp:void 0,styleSheet:gc,stylis:Cr});Bo.Consumer;J.createContext(void 0);function Pr(){return v.useContext(Bo)}var mc=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Cr);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Vr(this,function(){throw Ze(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Cr),this.name+t.hash},e}(),vc=function(e){return e>="A"&&e<="Z"};function Pn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;vc(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Wo=function(e){return e==null||e===!1||e===""},qo=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Wo(i)&&(Array.isArray(i)&&i.isCss||_e(i)?n.push("".concat(Pn(o),":"),i,";"):Ke(i)?n.push.apply(n,He(He(["".concat(o," {")],qo(i),!1),["}"],!1)):n.push("".concat(Pn(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Us||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function le(e,t,r,n){if(Wo(e))return[];if(qr(e))return[".".concat(e.styledComponentId)];if(_e(e)){if(!_e(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return le(o,t,r,n)}var i;return e instanceof mc?r?(e.inject(r,n),[e.getName(n)]):[e]:Ke(e)?qo(e):Array.isArray(e)?Array.prototype.concat.apply(Jt,e.map(function(a){return le(a,t,r,n)})):[e.toString()]}function Vo(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(_e(r)&&!qr(r))return!1}return!0}var yc=_o("6.0.7"),bc=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Vo(t),this.componentId=r,this.baseHash=Pe(yc,r),this.baseStyle=n,gt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=be(o,this.staticRulesId);else{var i=Er(le(this.rules,t,r,n)),a=xr(Pe(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}o=be(o,a),this.staticRulesId=a}else{for(var c=Pe(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")l+=f;else if(f){var d=Er(le(f,t,r,n));c=Pe(c,d),l+=d}}if(l){var p=xr(c>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),o=be(o,p)}}return o},e}(),Hr=J.createContext(void 0);Hr.Consumer;var sr={};function wc(e,t,r){var n=qr(e),o=e,i=!ir(e),a=t.attrs,s=a===void 0?Jt:a,c=t.componentId,l=c===void 0?function(S,E){var $=typeof S!="string"?"sc":wn(S);sr[$]=(sr[$]||0)+1;var I="".concat($,"-").concat(Lo("6.0.7"+$+sr[$]));return E?"".concat(E,"-").concat(I):I}(t.displayName,t.parentComponentId):c,u=t.displayName;u===void 0&&function(S){return ir(S)?"styled.".concat(S):"Styled(".concat(Hs(S),")")}(e);var f=t.displayName&&t.componentId?"".concat(wn(t.displayName),"-").concat(t.componentId):t.componentId||l,d=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,p=t.shouldForwardProp;if(n&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;p=function(S,E){return h(S,E)&&g(S,E)}}else p=h}var b=new bc(r,f,n?o.componentStyle:void 0);function w(S,E){return function($,I,C){var he=$.attrs,te=$.componentStyle,F=$.defaultProps,ge=$.foldedComponentIds,Pi=$.styledComponentId,Oi=$.target,Ii=J.useContext(Hr),Ai=Pr(),Zt=$.shouldForwardProp||Ai.shouldForwardProp,re=function(tt,Ue,rt){for(var Fe,me=z(z({},Ue),{className:void 0,theme:rt}),er=0;er<tt.length;er+=1){var nt=_e(Fe=tt[er])?Fe(me):Fe;for(var oe in nt)me[oe]=oe==="className"?be(me[oe],nt[oe]):oe==="style"?z(z({},me[oe]),nt[oe]):nt[oe]}return Ue.className&&(me.className=be(me.className,Ue.className)),me}(he,I,ko(I,Ii,F)||Te),et=re.as||Oi,ze={};for(var ne in re)re[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"||(ne==="forwardedAs"?ze.as=re.forwardedAs:Zt&&!Zt(ne,et)||(ze[ne]=re[ne]));var on=function(tt,Ue){var rt=Pr(),Fe=tt.generateAndInjectStyles(Ue,rt.styleSheet,rt.stylis);return Fe}(te,re),Qt=be(ge,Pi);return on&&(Qt+=" "+on),re.className&&(Qt+=" "+re.className),ze[ir(et)&&!To.has(et)?"class":"className"]=Qt,ze.ref=C,v.createElement(et,ze)}(y,S,E)}var y=J.forwardRef(w);return y.attrs=d,y.componentStyle=b,y.shouldForwardProp=p,y.foldedComponentIds=n?be(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=f,y.target=n?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(E){for(var $=[],I=1;I<arguments.length;I++)$[I-1]=arguments[I];for(var C=0,he=$;C<he.length;C++)$r(E,he[C],!0);return E}({},o.defaultProps,S):S}}),Vr(y,function(){return".".concat(y.styledComponentId)}),i&&zo(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function On(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var In=function(e){return Object.assign(e,{isCss:!0})};function V(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(_e(e)||Ke(e)){var n=e;return In(le(On(Jt,He([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?le(o):In(le(On(o,t)))}function Or(e,t,r){if(r===void 0&&(r=Te),!t)throw Ze(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,V.apply(void 0,He([o],i,!1)))};return n.attrs=function(o){return Or(e,t,z(z({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Or(e,t,z(z({},r),o))},n}var Ho=function(e){return Or(wc,e)},x=Ho;To.forEach(function(e){x[e]=Ho(e)});var Sc=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Vo(t),gt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Er(le(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&gt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function xc(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=V.apply(void 0,He([e],t,!1)),o="sc-global-".concat(Lo(JSON.stringify(n))),i=new Sc(n,o),a=function(c){var l=Pr(),u=J.useContext(Hr),f=J.useRef(l.styleSheet.allocateGSInstance(o)).current;return l.styleSheet.server&&s(f,c,l.styleSheet,u,l.stylis),J.useLayoutEffect(function(){if(!l.styleSheet.server)return s(f,c,l.styleSheet,u,l.stylis),function(){return i.removeStyles(f,l.styleSheet)}},[f,c,l.styleSheet,u,l.stylis]),null};function s(c,l,u,f,d){if(i.isStatic)i.renderStyles(c,Bs,u,d);else{var p=z(z({},l),{theme:ko(l,f,a.defaultProps)});i.renderStyles(c,p,u,d)}}return J.memo(a)}function K(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function pe(e){return!!e&&!!e[k]}function ee(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Rc}(e)||Array.isArray(e)||!!e[Ln]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ln])||Kr(e)||Gr(e))}function Se(e,t,r){r===void 0&&(r=!1),De(e)===0?(r?Object.keys:Ie)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function De(e){var t=e[k];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Kr(e)?2:Gr(e)?3:0}function Oe(e,t){return De(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Ec(e,t){return De(e)===2?e.get(t):e[t]}function Ko(e,t,r){var n=De(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Go(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Kr(e){return Ac&&e instanceof Map}function Gr(e){return jc&&e instanceof Set}function ve(e){return e.o||e.t}function Yr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Xo(e);delete t[k];for(var r=Ie(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Xr(e,t){return t===void 0&&(t=!1),Jr(e)||pe(e)||!ee(e)||(De(e)>1&&(e.set=e.add=e.clear=e.delete=$c),Object.freeze(e),t&&Se(e,function(r,n){return Xr(n,!0)},!0)),e}function $c(){K(2)}function Jr(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Z(e){var t=Rr[e];return t||K(18,e),t}function Cc(e,t){Rr[e]||(Rr[e]=t)}function Ir(){return Ge}function cr(e,t){t&&(Z("Patches"),e.u=[],e.s=[],e.v=t)}function mt(e){Ar(e),e.p.forEach(Pc),e.p=null}function Ar(e){e===Ge&&(Ge=e.l)}function An(e){return Ge={p:[],l:Ge,h:e,m:!0,_:0}}function Pc(e){var t=e[k];t.i===0||t.i===1?t.j():t.g=!0}function lr(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||Z("ES5").S(t,e,n),n?(r[k].P&&(mt(t),K(4)),ee(e)&&(e=vt(t,e),t.l||yt(t,e)),t.u&&Z("Patches").M(r[k].t,e,t.u,t.s)):e=vt(t,r,[]),mt(t),t.u&&t.v(t.u,t.s),e!==Yo?e:void 0}function vt(e,t,r){if(Jr(t))return t;var n=t[k];if(!n)return Se(t,function(s,c){return jn(e,n,t,s,c,r)},!0),t;if(n.A!==e)return t;if(!n.P)return yt(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Yr(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),Se(i,function(s,c){return jn(e,n,o,s,c,r,a)}),yt(e,o,!1),r&&e.u&&Z("Patches").N(n,r,e.u,e.s)}return n.o}function jn(e,t,r,n,o,i,a){if(pe(o)){var s=vt(e,o,i&&t&&t.i!==3&&!Oe(t.R,n)?i.concat(n):void 0);if(Ko(r,n,s),!pe(s))return;e.m=!1}else a&&r.add(o);if(ee(o)&&!Jr(o)){if(!e.h.D&&e._<1)return;vt(e,o),t&&t.A.l||yt(e,o)}}function yt(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Xr(t,r)}function ur(e,t){var r=e[k];return(r?ve(r):e)[t]}function Rn(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ae(e){e.P||(e.P=!0,e.l&&ae(e.l))}function fr(e){e.o||(e.o=Yr(e.t))}function jr(e,t,r){var n=Kr(t)?Z("MapSet").F(t,r):Gr(t)?Z("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:Ir(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},c=s,l=Ye;a&&(c=[s],l=We);var u=Proxy.revocable(c,l),f=u.revoke,d=u.proxy;return s.k=d,s.j=f,d}(t,r):Z("ES5").J(t,r);return(r?r.A:Ir()).p.push(n),n}function Oc(e){return pe(e)||K(22,e),function t(r){if(!ee(r))return r;var n,o=r[k],i=De(r);if(o){if(!o.P&&(o.i<4||!Z("ES5").K(o)))return o.t;o.I=!0,n=kn(r,i),o.I=!1}else n=kn(r,i);return Se(n,function(a,s){o&&Ec(o.t,a)===s||Ko(n,a,t(s))}),i===3?new Set(n):n}(e)}function kn(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Yr(e)}function Ic(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var c=this[k];return Ye.get(c,i)},set:function(c){var l=this[k];Ye.set(l,i,c)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][k];if(!s.P)switch(s.i){case 5:n(s)&&ae(s);break;case 4:r(s)&&ae(s)}}}function r(i){for(var a=i.t,s=i.k,c=Ie(s),l=c.length-1;l>=0;l--){var u=c[l];if(u!==k){var f=a[u];if(f===void 0&&!Oe(a,u))return!0;var d=s[u],p=d&&d[k];if(p?p.t!==f:!Go(d,f))return!0}}var h=!!a[k];return c.length!==Ie(a).length+(h?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var c=0;c<a.length;c++)if(!a.hasOwnProperty(c))return!0;return!1}var o={};Cc("ES5",{J:function(i,a){var s=Array.isArray(i),c=function(u,f){if(u){for(var d=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(d,""+p,e(p,!0));return d}var h=Xo(f);delete h[k];for(var g=Ie(h),b=0;b<g.length;b++){var w=g[b];h[w]=e(w,u||!!h[w].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(s,i),l={i:s?5:4,A:a?a.A:Ir(),P:!1,I:!1,R:{},l:a,t:i,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,k,{value:l,writable:!0}),c},S:function(i,a,s){s?pe(a)&&a[k].A===i&&t(i.p):(i.u&&function c(l){if(l&&typeof l=="object"){var u=l[k];if(u){var f=u.t,d=u.k,p=u.R,h=u.i;if(h===4)Se(d,function(S){S!==k&&(f[S]!==void 0||Oe(f,S)?p[S]||c(d[S]):(p[S]=!0,ae(u)))}),Se(f,function(S){d[S]!==void 0||Oe(d,S)||(p[S]=!1,ae(u))});else if(h===5){if(n(u)&&(ae(u),p.length=!0),d.length<f.length)for(var g=d.length;g<f.length;g++)p[g]=!1;else for(var b=f.length;b<d.length;b++)p[b]=!0;for(var w=Math.min(d.length,f.length),y=0;y<w;y++)d.hasOwnProperty(y)||(p[y]=!0),p[y]===void 0&&c(d[y])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var Tn,Ge,Zr=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Ac=typeof Map<"u",jc=typeof Set<"u",_n=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Yo=Zr?Symbol.for("immer-nothing"):((Tn={})["immer-nothing"]=!0,Tn),Ln=Zr?Symbol.for("immer-draftable"):"__$immer_draftable",k=Zr?Symbol.for("immer-state"):"__$immer_state",Rc=""+Object.prototype.constructor,Ie=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Xo=Object.getOwnPropertyDescriptors||function(e){var t={};return Ie(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Rr={},Ye={get:function(e,t){if(t===k)return e;var r=ve(e);if(!Oe(r,t))return function(o,i,a){var s,c=Rn(i,a);return c?"value"in c?c.value:(s=c.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!ee(n)?n:n===ur(e.t,t)?(fr(e),e.o[t]=jr(e.A.h,n,e)):n},has:function(e,t){return t in ve(e)},ownKeys:function(e){return Reflect.ownKeys(ve(e))},set:function(e,t,r){var n=Rn(ve(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=ur(ve(e),t),i=o==null?void 0:o[k];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Go(r,o)&&(r!==void 0||Oe(e.t,t)))return!0;fr(e),ae(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return ur(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,fr(e),ae(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=ve(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){K(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){K(12)}},We={};Se(Ye,function(e,t){We[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),We.deleteProperty=function(e,t){return We.set.call(this,e,t,void 0)},We.set=function(e,t,r){return Ye.set.call(this,e[0],t,r,e[0])};var kc=function(){function e(r){var n=this;this.O=_n,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var c=n;return function(g){var b=this;g===void 0&&(g=s);for(var w=arguments.length,y=Array(w>1?w-1:0),S=1;S<w;S++)y[S-1]=arguments[S];return c.produce(g,function(E){var $;return($=i).call.apply($,[b,E].concat(y))})}}var l;if(typeof i!="function"&&K(6),a!==void 0&&typeof a!="function"&&K(7),ee(o)){var u=An(n),f=jr(n,o,void 0),d=!0;try{l=i(f),d=!1}finally{d?mt(u):Ar(u)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(g){return cr(u,a),lr(g,u)},function(g){throw mt(u),g}):(cr(u,a),lr(l,u))}if(!o||typeof o!="object"){if((l=i(o))===void 0&&(l=o),l===Yo&&(l=void 0),n.D&&Xr(l,!0),a){var p=[],h=[];Z("Patches").M(o,l,p,h),a(p,h)}return l}K(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(l){for(var u=arguments.length,f=Array(u>1?u-1:0),d=1;d<u;d++)f[d-1]=arguments[d];return n.produceWithPatches(l,function(p){return o.apply(void 0,[p].concat(f))})};var a,s,c=n.produce(o,i,function(l,u){a=l,s=u});return typeof Promise<"u"&&c instanceof Promise?c.then(function(l){return[l,a,s]}):[c,a,s]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){ee(r)||K(8),pe(r)&&(r=Oc(r));var n=An(this),o=jr(this,r,void 0);return o[k].C=!0,Ar(n),o},t.finishDraft=function(r,n){var o=r&&r[k],i=o.A;return cr(i,n),lr(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!_n&&K(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=Z("Patches").$;return pe(r)?a(r,n):this.produce(r,function(s){return a(s,n)})},e}(),B=new kc,Jo=B.produce;B.produceWithPatches.bind(B);B.setAutoFreeze.bind(B);B.setUseProxies.bind(B);B.applyPatches.bind(B);B.createDraft.bind(B);B.finishDraft.bind(B);function Xe(e){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xe(e)}function Tc(e,t){if(Xe(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Xe(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _c(e){var t=Tc(e,"string");return Xe(t)==="symbol"?t:String(t)}function Lc(e,t,r){return t=_c(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Nn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Mn(Object(r),!0).forEach(function(n){Lc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Mn(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function D(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Dn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),dr=function(){return Math.random().toString(36).substring(7).split("").join(".")},bt={INIT:"@@redux/INIT"+dr(),REPLACE:"@@redux/REPLACE"+dr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+dr()}};function Mc(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Zo(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(D(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(D(1));return r(Zo)(e,t)}if(typeof e!="function")throw new Error(D(2));var o=e,i=t,a=[],s=a,c=!1;function l(){s===a&&(s=a.slice())}function u(){if(c)throw new Error(D(3));return i}function f(g){if(typeof g!="function")throw new Error(D(4));if(c)throw new Error(D(5));var b=!0;return l(),s.push(g),function(){if(b){if(c)throw new Error(D(6));b=!1,l();var y=s.indexOf(g);s.splice(y,1),a=null}}}function d(g){if(!Mc(g))throw new Error(D(7));if(typeof g.type>"u")throw new Error(D(8));if(c)throw new Error(D(9));try{c=!0,i=o(i,g)}finally{c=!1}for(var b=a=s,w=0;w<b.length;w++){var y=b[w];y()}return g}function p(g){if(typeof g!="function")throw new Error(D(10));o=g,d({type:bt.REPLACE})}function h(){var g,b=f;return g={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(D(11));function S(){y.next&&y.next(u())}S();var E=b(S);return{unsubscribe:E}}},g[Dn]=function(){return this},g}return d({type:bt.INIT}),n={dispatch:d,subscribe:f,getState:u,replaceReducer:p},n[Dn]=h,n}function Nc(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:bt.INIT});if(typeof n>"u")throw new Error(D(12));if(typeof r(void 0,{type:bt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(D(13))})}function Dc(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),a;try{Nc(r)}catch(s){a=s}return function(c,l){if(c===void 0&&(c={}),a)throw a;for(var u=!1,f={},d=0;d<i.length;d++){var p=i[d],h=r[p],g=c[p],b=h(g,l);if(typeof b>"u")throw l&&l.type,new Error(D(14));f[p]=b,u=u||b!==g}return u=u||i.length!==Object.keys(c).length,u?f:c}}function wt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function zc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(D(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(c){return c(a)});return i=wt.apply(void 0,s)(o.dispatch),Nn(Nn({},o),{},{dispatch:i})}}}var St="NOT_FOUND";function Uc(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:St},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function Fc(e,t){var r=[];function n(s){var c=r.findIndex(function(u){return t(s,u.key)});if(c>-1){var l=r[c];return c>0&&(r.splice(c,1),r.unshift(l)),l.value}return St}function o(s,c){n(s)===St&&(r.unshift({key:s,value:c}),r.length>e&&r.pop())}function i(){return r}function a(){r=[]}return{get:n,put:o,getEntries:i,clear:a}}var Bc=function(t,r){return t===r};function Wc(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,i=0;i<o;i++)if(!e(r[i],n[i]))return!1;return!0}}function qc(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?Bc:n,i=r.maxSize,a=i===void 0?1:i,s=r.resultEqualityCheck,c=Wc(o),l=a===1?Uc(c):Fc(a,c);function u(){var f=l.get(arguments);if(f===St){if(f=e.apply(null,arguments),s){var d=l.getEntries(),p=d.find(function(h){return s(h.value,f)});p&&(f=p.value)}l.put(arguments,f)}return f}return u.clearCache=function(){return l.clear()},u}function Vc(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function Hc(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];var l=0,u,f={memoizeOptions:void 0},d=s.pop();if(typeof d=="object"&&(f=d,d=s.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var p=f,h=p.memoizeOptions,g=h===void 0?r:h,b=Array.isArray(g)?g:[g],w=Vc(s),y=e.apply(void 0,[function(){return l++,d.apply(null,arguments)}].concat(b)),S=e(function(){for(var $=[],I=w.length,C=0;C<I;C++)$.push(w[C].apply(null,arguments));return u=y.apply(null,$),u});return Object.assign(S,{resultFunc:d,memoizedResultFunc:y,dependencies:w,lastResult:function(){return u},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),S};return o}var T=Hc(qc);function Qo(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var ei=Qo();ei.withExtraArgument=Qo;const zn=ei;var ti=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Kc=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return c([l,u])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(u){l=[6,u],o=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Le=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Gc=Object.defineProperty,Yc=Object.defineProperties,Xc=Object.getOwnPropertyDescriptors,Un=Object.getOwnPropertySymbols,Jc=Object.prototype.hasOwnProperty,Zc=Object.prototype.propertyIsEnumerable,Fn=function(e,t,r){return t in e?Gc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ue=function(e,t){for(var r in t||(t={}))Jc.call(t,r)&&Fn(e,r,t[r]);if(Un)for(var n=0,o=Un(t);n<o.length;n++){var r=o[n];Zc.call(t,r)&&Fn(e,r,t[r])}return e},pr=function(e,t){return Yc(e,Xc(t))},Qc=function(e,t,r){return new Promise(function(n,o){var i=function(c){try{s(r.next(c))}catch(l){o(l)}},a=function(c){try{s(r.throw(c))}catch(l){o(l)}},s=function(c){return c.done?n(c.value):Promise.resolve(c.value).then(i,a)};s((r=r.apply(e,t)).next())})},el=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wt:wt.apply(null,arguments)};function tl(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var rl=function(e){ti(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Le([void 0],r[0].concat(this)))):new(t.bind.apply(t,Le([void 0],r.concat(this))))},t}(Array),nl=function(e){ti(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Le([void 0],r[0].concat(this)))):new(t.bind.apply(t,Le([void 0],r.concat(this))))},t}(Array);function kr(e){return ee(e)?Jo(e,function(){}):e}function ol(e){return typeof e=="boolean"}function il(){return function(t){return al(t)}}function al(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new rl;return r&&(ol(r)?n.push(zn):n.push(zn.withExtraArgument(r.extraArgument))),n}var sl=!0;function cl(e){var t=il(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,a=i===void 0?t():i,s=r.devTools,c=s===void 0?!0:s,l=r.preloadedState,u=l===void 0?void 0:l,f=r.enhancers,d=f===void 0?void 0:f,p;if(typeof o=="function")p=o;else if(tl(o))p=Dc(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var g=zc.apply(void 0,h),b=wt;c&&(b=el(ue({trace:!sl},typeof c=="object"&&c)));var w=new nl(g),y=w;Array.isArray(d)?y=Le([g],d):typeof d=="function"&&(y=d(w));var S=b.apply(void 0,y);return Zo(p,u,S)}function fe(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return ue(ue({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function ri(e){var t={},r=[],n,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return r.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function ll(e){return typeof e=="function"}function ul(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?ri(t):[t,r,n],i=o[0],a=o[1],s=o[2],c;if(ll(e))c=function(){return kr(e())};else{var l=kr(e);c=function(){return l}}function u(f,d){f===void 0&&(f=c());var p=Le([i[d.type]],a.filter(function(h){var g=h.matcher;return g(d)}).map(function(h){var g=h.reducer;return g}));return p.filter(function(h){return!!h}).length===0&&(p=[s]),p.reduce(function(h,g){if(g)if(pe(h)){var b=h,w=g(b,d);return w===void 0?h:w}else{if(ee(h))return Jo(h,function(y){return g(y,d)});var w=g(h,d);if(w===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}return h},f)}return u.getInitialState=c,u}function fl(e,t){return e+"/"+t}function ni(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:kr(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},a={},s={};o.forEach(function(u){var f=n[u],d=fl(t,u),p,h;"reducer"in f?(p=f.reducer,h=f.prepare):p=f,i[u]=p,a[d]=p,s[u]=h?fe(d,h):fe(d)});function c(){var u=typeof e.extraReducers=="function"?ri(e.extraReducers):[e.extraReducers],f=u[0],d=f===void 0?{}:f,p=u[1],h=p===void 0?[]:p,g=u[2],b=g===void 0?void 0:g,w=ue(ue({},d),a);return ul(r,function(y){for(var S in w)y.addCase(S,w[S]);for(var E=0,$=h;E<$.length;E++){var I=$[E];y.addMatcher(I.matcher,I.reducer)}b&&y.addDefaultCase(b)})}var l;return{name:t,reducer:function(u,f){return l||(l=c()),l(u,f)},actions:s,caseReducers:i,getInitialState:function(){return l||(l=c()),l.getInitialState()}}}var dl="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",pl=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=dl[Math.random()*64|0];return t},hl=["name","message","stack","code"],hr=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Bn=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),gl=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=hl;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=fe(t+"/fulfilled",function(l,u,f,d){return{payload:l,meta:pr(ue({},d||{}),{arg:f,requestId:u,requestStatus:"fulfilled"})}}),i=fe(t+"/pending",function(l,u,f){return{payload:void 0,meta:pr(ue({},f||{}),{arg:u,requestId:l,requestStatus:"pending"})}}),a=fe(t+"/rejected",function(l,u,f,d,p){return{payload:d,error:(n&&n.serializeError||gl)(l||"Rejected"),meta:pr(ue({},p||{}),{arg:f,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function c(l){return function(u,f,d){var p=n!=null&&n.idGenerator?n.idGenerator(l):pl(),h=new s,g;function b(y){g=y,h.abort()}var w=function(){return Qc(this,null,function(){var y,S,E,$,I,C,he;return Kc(this,function(te){switch(te.label){case 0:return te.trys.push([0,4,,5]),$=(y=n==null?void 0:n.condition)==null?void 0:y.call(n,l,{getState:f,extra:d}),vl($)?[4,$]:[3,2];case 1:$=te.sent(),te.label=2;case 2:if($===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return I=new Promise(function(F,ge){return h.signal.addEventListener("abort",function(){return ge({name:"AbortError",message:g||"Aborted"})})}),u(i(p,l,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:p,arg:l},{getState:f,extra:d}))),[4,Promise.race([I,Promise.resolve(r(l,{dispatch:u,getState:f,extra:d,requestId:p,signal:h.signal,abort:b,rejectWithValue:function(F,ge){return new hr(F,ge)},fulfillWithValue:function(F,ge){return new Bn(F,ge)}})).then(function(F){if(F instanceof hr)throw F;return F instanceof Bn?o(F.payload,p,l,F.meta):o(F,p,l)})])];case 3:return E=te.sent(),[3,5];case 4:return C=te.sent(),E=C instanceof hr?a(null,p,l,C.payload,C.meta):a(C,p,l),[3,5];case 5:return he=n&&!n.dispatchConditionRejection&&a.match(E)&&E.meta.condition,he||u(E),[2,E]}})})}();return Object.assign(w,{abort:b,requestId:p,arg:l,unwrap:function(){return w.then(ml)}})}}return Object.assign(c,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function ml(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function vl(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Qr="listenerMiddleware";fe(Qr+"/add");fe(Qr+"/removeAll");fe(Qr+"/remove");var Wn;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Ic();const yl=(e,t)=>{if(!t)return Math.round(e);const r=Math.pow(10,t);return Math.round(e*r)/r},oi=(e,t,r)=>Math.min(Math.max(e,t),r),bl=(e,t,r,n,o,i)=>{var l;let a=(l=t.find(u=>u.id===e.id))==null?void 0:l.value;if(a===void 0&&(a=e.value),o)return a;const s=e.perMinute+(n||0),c=i?s/3:s/60;return Math.round(oi(a+c*r,0,e.max)*100)/100},wl=e=>{const t={};return e.forEach(r=>{r.effect.forEach(n=>{n.statId&&n.perMinute&&(t[n.statId]?t[n.statId]+=n.perMinute:t[n.statId]=n.perMinute)})}),t},Sl=(e,t,r,n,o,i)=>{const a=o&&n?(o-n)/1e3:0,s=wl(r);return e.map(c=>({id:c.id,value:bl(c,t,a,s[c.id],void 0,i),label:c.label,max:c.max}))},qn=(...e)=>{},xt=e=>e===void 0?[]:Array.isArray(e)?e:[e],xl=(e,t)=>{if(e.length===0)return!0;for(let r=0;r<e.length;r++)if(e[r].when.length===0||e[r].when.filter(n=>t.indexOf(n)>-1).length===e[r].when.length)return e[r].then;return!1},ii=(e,t)=>{for(let r=0;r<e.length;r++){const n=$l(e[r],t);if(n)return n}return null},El=(e,t,r)=>e.when.find(n=>!Il(n,t,r))?null:e.then,$l=(e,t)=>{let r=0;for(let n=0;n<e.when.length;n++)Array.isArray(e.when[n])?e.when[n].some(o=>t.includes(o))&&r++:t.indexOf(e.when[n])>-1&&r++;return r===e.when.length?Array.isArray(e.then)?ii(e.then,t):e.then:null},Cl=e=>e.map(t=>({when:xt(t.when),then:t.then})),ai=e=>e.map(t=>Array.isArray(t.then)?{when:xt(t.when),then:ai(t.then)}:{when:xt(t.when),then:t.then}),Pl=e=>e?e.map(t=>({when:xt(t.when).map(n=>Ol(n)).filter(n=>n!==null),then:t.then})):[],si={"=":(e,t)=>e===t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t},Ol=e=>{try{const t=e.split("_"),r=t[0],o=t[1].split("%");return si[r]?{condition:r,criteria:Number(o[0]),isPercent:o.length>1}:(console.error(`parseExpressionString(): invalid condition "${r}" from expressionString "${e}"`),null)}catch{return console.error(`could not parse expressionString "${e}", expressionStrings must use one 
    of the following operators: [<=,<,=,>,>=] and follow a format like "<=_10%"`),null}},Il=(e,t,r)=>{try{const n=e.isPercent?Math.round(t/r*100):t;return si[e.condition](n,e.criteria)}catch{return console.log(`could not evaluate "whenNumber:${e}", "reference:${t}", "referenceMax:${t}"`),null}},Al={debugMode:!1},ci=ni({name:"ui",initialState:Al,reducers:{setDebugMode:(e,t)=>{e.debugMode=t.payload}}}),{setDebugMode:jl}=ci.actions,Rl=e=>e.ui.debugMode,kl=ci.reducer,Tl={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},_l={activeIdx:-1,pets:[],interactions:[],deltaPets:[],lastRendered:new Date().getTime(),lastSaved:new Date().getTime()},Ll=(e,t)=>({stats:Fl(e.logic.stats,t),statuses:Bl(e.logic.statuses,e.baseUrl),behaviorRules:ai(e.logic.behaviorRules),behaviors:Ml(e.logic.behaviors||[],e.baseUrl),interactions:Ul(e.logic.interactions)}),Ml=(e,t)=>e.map(r=>({...r,type:r.type||"normal",imageUrl:r.image?`${t}/${r.image}`:r.imageUrl||"",bgImageUrl:r.bgImage?`${t}/${r.bgImage}`:"",position:r.position?r.position:"center",offsetX:r.offsetX?r.offsetX:0,offsetY:r.offsetY?r.offsetY:0})),Nl=e=>e?e.map(t=>({statId:t.statId,value:t.value||0,type:t.type||"incremental"})):[],Dl=e=>e?Cl(e):[],zl=e=>e?{defaultState:e.defaultState||"off",onState:e.onState,offState:e.offState}:null,Ul=e=>e?e.map(t=>({id:t.id,label:t.label,cooldown:t.cooldown,changeStats:Nl(t.changeStats),changeToggle:zl(t.changeToggle),availability:Dl(t.availability),hideWhenUnavailable:t.hideWhenUnavailable===!0})):[],Fl=(e,t)=>e.map(r=>{const n=t==null?void 0:t.stats.find(i=>i.id===r.id),o=Pl(r.statEffects);return n?{...r,value:n.value,statEffects:o}:{...r,statEffects:o}}),Bl=(e,t)=>Object.keys(e).map(r=>({id:r,label:e[r].label||"",message:e[r].message||"",fgImage:e[r].fgImage?`${t}/${e[r].fgImage}`:"",bgImage:e[r].bgImage?`${t}/${e[r].bgImage}`:"",alertType:e[r].alertType})),Wl=(e,t)=>{const r=t.defaultState||"off",n=r==="on"?t.onState:t.offState;return console.log("getDefaultToggleStatus, defaultEffect is ",n),{id:e,state:r,effect:n}},ql=(e,t,r)=>{const n=r.find(o=>o.id===e)||Wl(e,t);return n.state==="on"?(n.state="off",n.effect=t.offState):(n.state="on",n.effect=t.onState),r.filter(o=>o.id!==e).concat([n])},Vl=(e,t,r)=>e.map(n=>{const o=r.find(s=>s.statId===n.id),i=t.find(s=>n.id===s.id);if(!i)return console.error(`getUpdatedStats, invalid stat "${n.id}" requested`),n;if(!o||o.type==="incremental"&&o.value===0)return n;const a=o.type==="absolute"?o.value:n.value+o.value;return{...n,value:oi(a,0,i.max)}}),it=(e,t)=>{const r=t!==void 0?t:new Date().getTime();e.lastSaved=r},li=ni({name:"petStore",initialState:_l,reducers:{pingStore:(e,t)=>{const r=t.payload.time;e.lastSaved=r},clearSave:()=>{window.localStorage.clear(),window.location.reload()},resetActivePet:e=>{console.log("resetting",e.activeIdx)},killActivePet:e=>{console.log("------ PET WAS KILLED ----------"),e.deltaPets[e.activeIdx]={...e.deltaPets[e.activeIdx],diedOn:new Date().getTime(),beingTracked:!1}},setActiveId:(e,t)=>{const r=e.pets.findIndex(n=>n.id===t.payload);r===-1?(console.log(`Cannot find pet with id "${t.payload}"`),e.activeIdx=0,it(e)):(e.activeIdx=r,it(e))},setActiveIdx:(e,t)=>{e.activeIdx=t.payload,it(e)},setDeltaPayload:(e,t)=>{const r=t.payload;e.deltaPets=r.pets},restoreInteractionFromSave:(e,t)=>{const r=t.payload;e.interactions.find(n=>n.id===r.id)||(console.log(`restoreInteractionFromSave ${r.id} with ${(r.endAt-new Date().getTime())/1e3} secs left`),e.interactions.push(r))},addNewInteractionEvent:(e,t)=>{var i,a;const{interaction:r,time:n}=t.payload;let o=!1;if(r.cooldown&&(o=!0,e.interactions.find(s=>s.id===r.id)||e.interactions.push({id:r.id,startAt:n,endAt:n+(r.cooldown||0)})),r.changeStats.length>0){o=!0;const s=e.pets[e.activeIdx],c=e.deltaPets.findIndex(l=>l.id===s.id);if(c>-1){const l=((i=e.deltaPets[c])==null?void 0:i.stats)||[],u=s.logic.stats;e.deltaPets[c]={...e.deltaPets[c],stats:Vl(l,u,r.changeStats)}}}if(r.changeToggle){o=!0;const s=e.pets[e.activeIdx],c=e.deltaPets.findIndex(l=>l.id===s.id);if(c>-1){const l=((a=e.deltaPets[c])==null?void 0:a.activeToggles)||[],u=ql(r.id,r.changeToggle,l);e.deltaPets[c]={...e.deltaPets[c],activeToggles:u}}}o&&it(e,n)},removeInteractionEvent:(e,t)=>{const r=t.payload;e.interactions=e.interactions.filter(n=>n.id!==r)},createPet:(e,t)=>{qn(`

createPet`,t.payload);const{petDefinition:r,initialState:n,isActive:o}=t.payload,i=e.pets.find(l=>l.id===r.id),a=new Date().getTime(),s=Ll(r,n||void 0);qn(`>> createPet: ${r.id}, isActive? ${o}, beingTracked? ${n==null?void 0:n.beingTracked}`);const c={...r,logic:s,bornOn:(n==null?void 0:n.bornOn)||a,diedOn:(n==null?void 0:n.diedOn)||void 0,bgImage:r.bgImage?`${r.baseUrl}/${r.bgImage}`:null,bgColor:r.bgColor||null};if(i?e.pets=e.pets.map(l=>l.id===r.id?c:l):e.pets.push(c),n)e.deltaPets.find(l=>l.id===(n==null?void 0:n.id))||(e.deltaPets=[...e.deltaPets,{...n,lastSaved:(n==null?void 0:n.lastSaved)||a}]);else{const l=e.deltaPets.findIndex(u=>u.id===r.id);l>-1&&(e.deltaPets=e.deltaPets.filter((u,f)=>f!==l))}}}}),{pingStore:Hl,createPet:ui,setActiveIdx:fi,setActiveId:Kl,clearSave:Gl,resetActivePet:zf,setDeltaPayload:Yl,addNewInteractionEvent:Xl,restoreInteractionFromSave:Jl,removeInteractionEvent:di,killActivePet:Zl}=li.actions,pi=e=>e.petStore.activeIdx,hi=e=>e.petStore.pets,Ql=e=>e.petStore.interactions,en=e=>e.petStore.deltaPets,eu=e=>e.petStore.lastSaved,gi=T([eu],e=>e),Y=T([hi,pi],(e,t)=>e[t]||null),mi=T([Y],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.stats)||[]}),tu=T([Y],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.statuses)||[]}),vi=T([Y],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.interactions)||[]}),ru=T([Y],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviorRules)||[]}),nu=T([Y],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviors)||[]}),ou=T([Y],e=>({imageUrl:e==null?void 0:e.bgImage,bgColor:e==null?void 0:e.bgColor})),Qe=T([en,Y],(e,t)=>t&&e.find(r=>r.id===t.id)||null),iu=T([Qe],e=>e?e.stats||[]:[]),tn=T([Qe],e=>e?e.activeToggles||[]:[]),yi=T([Y],e=>e?{id:e.id,name:e.name,bio:e.bio}:null),bi=T([Ql],e=>e),au=T([en,Y],(e,t)=>{var r;return t&&((r=e.find(n=>n.id===t.id))==null?void 0:r.lastSaved)||0}),rn=T([mi,iu,tn,au,gi,Rl],(e,t,r,n,o,i)=>Sl(e,t,r,n,o,i)),nn=T([Qe,rn,mi,tn,vi],(e,t,r,n,o)=>{if(e&&!e.beingTracked&&e.diedOn===void 0)return[];const i=c=>t.find(l=>l.id===c);let a=[];for(let c=0;c<r.length;c++){const l=i(r[c].id);if(l)for(let u=0;u<r[c].statEffects.length;u++){const f=El(r[c].statEffects[u],l.value,l.max);f&&a.indexOf(f)===-1&&a.push(f)}}let s;return n.forEach(c=>{var u,f;const l=o.find(d=>d.id===c.id);l!=null&&l.changeToggle&&(c.state==="on"?s=((u=l.changeToggle.onState)==null?void 0:u.filter(d=>d.statusId).map(d=>d.statusId))||[]:s=((f=l.changeToggle.offState)==null?void 0:f.filter(d=>d.statusId).map(d=>d.statusId))||[]),a=a.concat(s.filter(d=>!a.includes(d)))}),a.map(c=>c).reverse()}),wi=T([nn,tu],(e,t)=>e.map(r=>t.find(n=>n.id===r)).filter(r=>!!r)),Si=T([Qe,nn,ru,nu],(e,t,r,n)=>{if(!e)return null;const o=ii(r,t);return n.find(i=>i.id===o)||null}),su=T([Si],e=>e&&e.type!=="dead"),cu=T([vi,bi,nn],(e,t,r)=>e.map(n=>{const o=t.find(a=>a.id===n.id),i=xl(n.availability,r);return{id:n.id,label:n.label,startAt:(o==null?void 0:o.startAt)||0,endAt:(o==null?void 0:o.endAt)||0,enabled:i,visible:i||!n.hideWhenUnavailable,definition:n,cooldownStatus:o}})),lu=T([hi,pi],(e,t)=>e.map((r,n)=>({name:r.name,id:r.id,isActive:n===t}))),uu=()=>{try{return JSON.parse(window.localStorage.getItem("browserbuddy")||"")}catch{return console.log('no localStorage entry found for "browserbuddy"'),null}},fu=()=>{try{return uu().pets}catch{return[]}};T([fu],e=>e);const du=T([gi,rn,Y,bi,en],(e,t,r,n,o)=>{if(!t)return null;if(!r)return Tl;const i=o.findIndex(s=>s.id===r.id);let a=[];if(i>-1)a=o.map(s=>{if(s.id===r.id){const c=s.beingTracked?t:s.stats;return{id:r.id,stats:c,bornOn:s.bornOn,diedOn:s.diedOn,lastSaved:e,beingTracked:s.diedOn===void 0,activeToggles:s.activeToggles}}return{...s,beingTracked:!1}});else{const s=r.logic.interactions.filter(c=>!!c.changeToggle).map(c=>{var f,d,p;const l=((f=c.changeToggle)==null?void 0:f.defaultState)||"off",u=l==="on"?(d=c.changeToggle)==null?void 0:d.onState:(p=c.changeToggle)==null?void 0:p.offState;return{id:c.id,state:l,effect:u||[]}});a=o.concat([{id:r.id,stats:t,bornOn:r.bornOn,diedOn:void 0,lastSaved:e,beingTracked:!1,activeToggles:s}])}return{config:{activePet:(r==null?void 0:r.id)||"",lastSaved:e},interactions:n,pets:a}}),pu=li.reducer,hu=x.div`
  padding: 1rem;
  color: var(--color-blue);
  min-width: 30rem;
`,gu=x.h1`
  font-size: 2rem;
  text-align: left;
`,Vn=x.button`
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
`,mu=()=>{const e=$e();return m.jsxs(hu,{children:[m.jsx(gu,{children:"About BrowserBuddy"}),m.jsx("p",{children:"© Tom Yancey 2023"}),m.jsxs("div",{children:[m.jsx(fo,{to:"/",children:m.jsx(Vn,{children:"Home"})}),m.jsx(Vn,{onClick:()=>{e(Gl())},children:"Clear Save"})]})]})};function Hn(e,t,r){const n=v.useRef();v.useEffect(()=>{const o=(r==null?void 0:r.current)||window;if(!(o&&o.addEventListener))return;n.current!==t&&(n.current=t);const i=a=>{n!=null&&n.current&&n.current(a)};return o.addEventListener(e,i),()=>{o.removeEventListener(e,i)}},[e,r,t])}function xi(e,t){const r=()=>{if(typeof window>"u")return t;try{const s=window.localStorage.getItem(e);return s?vu(s):t}catch(s){return console.warn(`Error reading localStorage key “${e}”:`,s),t}},[n,o]=v.useState(r),i=s=>{typeof window>"u"&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const c=s instanceof Function?s(n):s;window.localStorage.setItem(e,JSON.stringify(c)),o(c),window.dispatchEvent(new Event("local-storage"))}catch(c){console.warn(`Error setting localStorage key “${e}”:`,c)}};v.useEffect(()=>{o(r())},[]);const a=()=>{o(r())};return Hn("storage",a),Hn("local-storage",a),[n,i]}function vu(e){try{return e==="undefined"?void 0:JSON.parse(e??"")}catch{console.log("parsing error on",{value:e});return}}const yu=cl({reducer:{petStore:pu,ui:kl}}),Ei={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},bu=async(e,t,r)=>{const n=await wu(e),o=await xu(n);Cu(o,t,r)},wu=async e=>(await Su(e).then(r=>r.pets.map(n=>({id:n.id,baseUrl:n.baseUrl})))).filter(r=>!!r),Su=async e=>{try{const t=await fetch(e,{mode:"cors"});if(!t.ok)return null;const r=await t.text();return JSON.parse(r)}catch(t){return console.error(`Error fetching or parsing manifest from ${e}`,t),null}},xu=async e=>{const t=[];return e.forEach(n=>t.push(Eu(n))),(await Promise.all(t)).filter(n=>!!n)},Eu=e=>new Promise(t=>t($u(e))),$u=async e=>{const t=e.baseUrl+"/data.json";try{const r=await fetch(t,{mode:"cors"});if(!r.ok)return console.error(`bad response from ${t}`),null;const n=JSON.parse(await r.text());return n.baseUrl=e.baseUrl,n}catch(r){return console.error(`Error fetching or parsing pet manifest from ${t}`,r),null}},Cu=(e,t,r)=>{const n=new Date().getTime();let o="";r.config.activePet&&(o=r.config.activePet),globalThis.rawPetsJson=e,e.forEach(i=>{const a=(r==null?void 0:r.pets.find(s=>s.id===i.id))||null;!o&&a&&r.config.activePet===a.id&&(o=a.id),t(ui({isActive:o===(a==null?void 0:a.id),petDefinition:i,initialState:a}))}),t(o?Kl(o):fi(0)),r.interactions.filter(i=>i.endAt>n).forEach(i=>{t(a=>{a(Jl(i)),window.setTimeout(()=>{a(di(i.id))},i.endAt-n)})})},Pu=()=>{const e=$e(),[t,r]=v.useState(!1),[n]=xi("browserbuddy",Ei);return v.useEffect(()=>{t||(r(!0),window.location.search.indexOf("debug")>-1&&e(jl(!0)),bu("data/pet-manifest.json",e,n))},[t,n,r,e]),null};function Ou(e,t){const r=v.useRef(e);v.useLayoutEffect(()=>{r.current=e},[e]),v.useEffect(()=>{if(!t&&t!==0)return;const n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[t])}const Iu=2e3,Au=()=>{const e=$e();return Ou(()=>{const t=new Date().getTime();e(Hl({time:t}))},Iu),null};let Kn=0;const ju=()=>{const[,e]=xi("browserbuddy",Ei),t=U(du),r=$e();return v.useEffect(()=>{t&&t.config.lastSaved>-1&&Kn!==t.config.lastSaved&&(Kn=t.config.lastSaved,e(()=>t),r(Yl(t)))},[t,r,e]),null},Ru=()=>m.jsxs(m.Fragment,{children:[m.jsx(ju,{}),m.jsx(Pu,{}),m.jsx(Au,{})]}),ku=x.div`
  display:inline-block;
  width:calc(50% - 1rem);
  margin-right:1rem;
`,Tu=x.h4`
  font-size: 1rem;
`,_u=x.div`
  position:relative;
  border:.5rem solid var(--color-white);
  border-radius: 1rem;
  overflow:hidden;
  padding:.25rem .5rem;
  text-align:center;
  background-color: var(--color-white);

  box-shadow: 0px -2px 4px var(--color-grey-light);
`,Lu=x.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  z-index:1;
`,Mu=x.div`
  position:absolute;
  top:0;
  left:0;
  height:100%; 
  transition: width .3s ease-in-out, background-color .5s ease-in-out;
  background-color: var(--color-blue);
`,Nu=x.p`
`,Du=x.p`
  opacity:.5;
  margin-top:.125rem;
  margin-bottom:0rem;
  font-size:1.25rem;
`,zu=({label:e,max:t,value:r,hideStats:n=!1})=>{const o=Math.round(r/t*1e3)/10;return e?m.jsxs(ku,{children:[m.jsx(Tu,{children:e.toLocaleUpperCase()}),m.jsxs(_u,{children:[!n&&m.jsxs(Lu,{children:[m.jsx(Nu,{children:`${yl(r)} / ${t}`}),m.jsx(Du,{children:`${o}%`})]}),m.jsx(Mu,{style:{width:`${o}%`}})]})]}):null},Uu=x.div`
  width:100%;
`,Fu=()=>{const e=U(rn)||[];return m.jsx(Uu,{children:e.map((t,r)=>m.jsx(zu,{label:t.label,max:t.max,value:t.value},r))})},Bu=x.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`,Wu=x.div`
  background-color:var(--color-white);
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`,qu=x.div`
  background-color:var(--color-red);
  position:absolute;
  height:100%;
  left:0;

  &.full{
    width:100% !important;
    background-color: var(--color-blue);
  }
  z-index:1;
`,Vu=({startProgress:e,duration:t})=>{const[r,n]=v.useState(!1);return v.useEffect(()=>{r||window.setTimeout(()=>n(!0),1)},[r,n]),m.jsxs(Bu,{children:[m.jsx(qu,{className:r?"full":"",style:{transition:`all ${t}s linear`,width:`${e*100}%`}}),m.jsx(Wu,{})]})},$i=x.div`
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

  ${e=>e.$toggleStyle==="on"&&V`
    background-color: var(--color-green);
  `}
  ${e=>e.$toggleStyle==="off"&&V`
    background-color: var(--color-red);
  `}
`,Hu=x($i)`
  background-color: var(--color-red);
  border-color: var(--color-white);
  color: var(--color-white);
  
  cursor:not-allowed;
`,Gn=x.li`
  text-align:center;

  ${e=>!e.$isEnabled&&V`
    opacity: .5;
    pointer-events:none;
  `}
`,Yn=x.p`
  display:block;
  position:relative;
  z-index:2;
  font-size: 2rem;
`,Ku=({cooldownStatus:e,isEnabled:t,interaction:r,toggleState:n,onClickHandler:o})=>{let i=r.label;const a=n?n.state:void 0;if(n&&(i=`${i}: ${n.state}`),e){const s=e.endAt-e.startAt,c=(s-(e.endAt-new Date().getTime()))/s,l=(e.endAt-new Date().getTime())/1e3;return m.jsx(Gn,{$isEnabled:t,children:m.jsxs(Hu,{$toggleStyle:a,children:[m.jsx(Yn,{children:i}),m.jsx(Vu,{startProgress:c,duration:l})]})})}else return m.jsx(Gn,{$isEnabled:t,onClick:()=>o&&o(),children:m.jsx($i,{$toggleStyle:a,children:m.jsx(Yn,{children:`${i}`})})})},Gu=x.ul`
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
`,Yu=()=>{const e=U(cu,ye),t=U(tn,ye),r=U(su),n=$e(),o=i=>{const a=new Date().getTime();n(s=>{s(Xl({interaction:i,time:a})),i.cooldown&&window.setTimeout(()=>{s(di(i.id))},i.cooldown)})};return m.jsx(Gu,{children:e.filter(i=>i.visible).map(i=>m.jsx(Ku,{cooldownStatus:i.cooldownStatus,isEnabled:r?i.enabled:!1,interaction:i.definition,toggleState:t.find(a=>a.id===i.id),onClickHandler:()=>o(i.definition)},i.id))})},Xu=x.div`
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
`,Ju=x.div`
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
`,Zu=x.div`
  width:100%;
`,Qu=x.h4`
  margin-top:1rem;
  margin-bottom:.5rem;
`,ef=x.p`
  margin-top:1rem;
  padding-left:1rem;
`,tf=x.div`
  min-height:5rem;
  width:100%;
`,rf=()=>{const e=U(yi);return e?m.jsxs(Xu,{children:[m.jsx(tf,{children:m.jsx(Yu,{})}),m.jsxs(Ju,{children:[m.jsx(Fu,{}),m.jsx("hr",{}),m.jsxs(Zu,{children:[m.jsx(Qu,{children:"Description"}),m.jsx(ef,{children:e.bio})]})]})]}):null},nf=xc`
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
`,of=()=>V`
    border-radius: 2rem;
    border: 0.5rem solid;
  `,af=(e,t="--color-white")=>V`
    ${of()}
    border-color: var(${t});
    color: var(${t});
    background-color: var(${e});
  `,sf=x.div`
  color:var(--color-black);
  position:absolute;
  right:0;
  bottom:1rem;
  z-index:1;
`,cf=x.ul`
  max-width: 14rem;
  text-align: right;
`,lf=x.li`
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
  ${e=>af(e.$bubbleColors[0],e.$bubbleColors[1])}
`,uf=e=>{switch(e){case"alert":return["--color-red","--color-yellow"];case"warning":return["--color-yellow","--color-red"];case"reward":return["--color-green","--color-white"];default:return["--color-white","--color-grey"]}},ff=()=>-5+Math.random()*5,df=e=>e*35,pf=()=>{const t=U(wi,ye).filter(r=>r.label);return m.jsx(sf,{children:m.jsx(cf,{children:t.map((r,n)=>m.jsx(lf,{id:r.id,$bubbleColors:uf(r.alertType),style:{bottom:df(n),transform:`rotate(${ff()}deg)`},children:r.label},r.id))})})},Xn=x.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -2rem;
  padding-top: 2rem;
  bottom: -2rem;
  padding-bottom: 2rem;
  background-color: var(--color-blue);
  border: 0.5rem solid var(--color-white);

  ${e=>e.$bgImageUrl&&V`
      background-size: cover;
      background-position: center;
      background-image: url(${e.$bgImageUrl});
    `}
`,Ci=x.div`
  color: var(--color-white);
  background-color: var(--color-red);
  display: block;
  padding: 6rem;
  border-radius: 5rem;
  border: 1rem solid var(--color-white);
  text-align: center;

  transform: rotate(2deg) translateY(200%);
  opacity: 0;
  transition: transform 0.3s ease-out, opacity 0.2s;

  span {
    font-size: 8rem;
  }

  &:before {
    content: 'WASTED';
    font-size: 8rem;
  }

  &:hover {
    background-color: var(--color-green);

    &:before {
      content: 'reset all pets?';
    }
  }
  /* cursor: pointer; */

  /* 
      transform: rotate(-7deg) translateY(125%);
      opacity: 1;


      &:hover {
        background-color: var(--color-green);
        &:after {
          content: 'revive?';
          position: absolute;
          display: block;
          margin-top: 4rem;
          background-color: var(--color-blue);
          border: 1rem solid var(--color-white);
          border-radius: 5rem;
          padding: 2rem;
          font-size: 4rem;
        }
      }
    } */
`,hf=x.div`
  position: absolute;
  inset: 0;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
  ${e=>e.$isActive&&V`
      pointer-events: all;

      ${Ci} {
        transform: rotate(-7deg) translateY(125%);
        opacity: 1;
        cursor: pointer;
      }
    `}
`,gf=x.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  text-align: center;

  position: absolute;
  bottom: 0;
  left: 0;
`,mf=x.p`
  font-size: 2rem;
  color: var(--color-white);
  opacity: 0.5;

  position: absolute;
  top: 1rem;
  right: 1rem;
`,Jn=x.div`
  opacity: 0;
  transition: opacity 0.5s;

  ${e=>e.$isActive&&V`
      opacity: 1;
    `}
`,Zn=x.div`
  position: absolute;
  inset: 0;
  /* z-index: 9; */

  ${e=>e.$bgImageUrl&&V`
      background-size: cover;
      background-position: center;
      background-image: url(${e.$bgImageUrl});
    `}
`,vf=()=>{const e=$e(),t=U(Y,ye),r=U(Si,ye),n=U(wi,ye),{imageUrl:o,bgColor:i}=U(ou,ye),a=n.filter(f=>f.bgImage).map(f=>f.bgImage),s=n.filter(f=>f.fgImage).map(f=>f.fgImage);v.useEffect(()=>{(r==null?void 0:r.type)==="dead"&&e(Zl())},[r==null?void 0:r.type,e]);const c=v.useCallback(()=>{const f=window.rawPetsJson.find(d=>d.id===t.id);console.log("resetting",f),e(ui({isActive:!0,petDefinition:f,initialState:null}))},[e,t==null?void 0:t.id]);if(!r)return m.jsx(Xn,{$bgImageUrl:o});const l=r.bgImageUrl||o,u={backgroundImage:`url(${r.imageUrl})`,backgroundColor:i||"initial",backgroundPosition:`${r.position}`,left:`${r.offsetX}px`,bottom:`${r.offsetY}px`};return m.jsx(Xn,{$bgImageUrl:l,children:m.jsxs(m.Fragment,{children:[m.jsx(Jn,{$isActive:a.length>0,children:a.map((f,d)=>m.jsx(Zn,{$bgImageUrl:f},d))}),m.jsx(mf,{children:`behavior: ${r.id}`}),m.jsx(pf,{}),m.jsx(gf,{style:u}),m.jsx(hf,{$isActive:r.type==="dead",children:m.jsx(Ci,{onClick:()=>c()})}),m.jsx(Jn,{$isActive:s.length>0,children:s.map((f,d)=>m.jsx(Zn,{$bgImageUrl:f},d))})]})})},yf=x.div`
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
`,bf=x.div`
  flex:1;

  >p{
    font-style:italic;
  }

  >h4{
    margin-top:-.5rem;
    margin-bottom: -.5rem;
  }
`,wf=x.div`
  text-align:right;
  color: var(--color-white);
  
  >h4{
    margin:0;
    line-height: 5rem;
  }
`,Sf=x.h4`
  text-align:left;
  display:inline-block;
  flex:1;
`,Qn=x.p`
  
`,eo=e=>e?new Date(e).toLocaleString("en-us"):null,xf=()=>{var n;const e=U(yi),t=U(Qe),r=(n=t==null?void 0:t.stats.find(o=>o.id==="level"))==null?void 0:n.value;return m.jsx(yf,{children:e&&m.jsxs(m.Fragment,{children:[m.jsxs(bf,{children:[m.jsx(Sf,{children:e.name}),(t==null?void 0:t.bornOn)&&m.jsx(Qn,{children:`born on: ${eo(t.bornOn)}`}),(t==null?void 0:t.diedOn)&&m.jsx(Qn,{children:`died on: ${eo(t.diedOn)}`})]}),m.jsx(wf,{children:r&&m.jsx("h4",{children:`Level: ${r}`})})]})})},Ef=x.li`
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

  ${e=>e.$isActive&&V`
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
`,$f=()=>{const e=U(lu),t=$e();return m.jsx("ul",{children:e.map((r,n)=>m.jsx(Ef,{onClick:()=>t(fi(n)),$isActive:r.isActive,children:n+1},n))})},Cf=x.div`
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
`,Pf=x.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  > ul {
    flex: 1;
  }
`,Of=()=>m.jsxs(Pf,{children:[m.jsx($f,{}),m.jsx(fo,{to:"/about",children:m.jsx(Cf,{children:"?"})})]}),If=x.header`
  position: relative;
  height:8rem;
  z-index:1;

  display:flex;
  flex-direction:column;
`,Af=x.div`
  flex: 0 0 3rem;
`,jf=x.div`
  position:relative;
  z-index:1;
  flex: 1;
`,Rf=()=>m.jsxs(If,{children:[m.jsx(Af,{children:m.jsx(Of,{})}),m.jsx(jf,{children:m.jsx(xf,{})})]}),kf=x.div`
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
`,Tf=x.div`
  grid-area: header;
`,_f=x.div`
  grid-area: body;
`,Lf=x.div`
  grid-area: footer;
`,Mf=()=>m.jsxs(kf,{children:[m.jsx(Ru,{}),m.jsx(Tf,{children:m.jsx(Rf,{})}),m.jsx(_f,{children:m.jsx(vf,{})}),m.jsx(Lf,{children:m.jsx(rf,{})})]}),Nf=()=>m.jsxs(Sa,{children:[m.jsx(mr,{path:"/about",element:m.jsx(mu,{})}),m.jsx(mr,{path:"/",element:m.jsx(Mf,{})})]});ki.createRoot(document.getElementById("root")).render(m.jsx(J.StrictMode,{children:m.jsx(ys,{store:yu,children:m.jsxs(Oa,{children:[m.jsx(Nf,{}),m.jsx(nf,{})]})})}));
