import{r as v,a as ji,b as Ii,R as X,j as h,c as Ai}from"./client-8837fce7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qe.apply(this,arguments)}var se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(se||(se={}));const fn="popstate";function ki(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:c="",hash:s=""}=xe(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),gr("",{pathname:a,search:c,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(o,i){let a=o.document.querySelector("base"),c="";if(a&&a.getAttribute("href")){let s=o.location.href,l=s.indexOf("#");c=l===-1?s:s.slice(0,l)}return c+"#"+(typeof i=="string"?i:ut(i))}function n(o,i){Et(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ti(t,r,n,e)}function M(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Et(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ri(){return Math.random().toString(36).substr(2,8)}function dn(e,t){return{usr:e.state,key:e.key,idx:t}}function gr(e,t,r,n){return r===void 0&&(r=null),qe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xe(t):t,{state:r,key:t&&t.key||n||Ri()})}function ut(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function xe(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ti(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,c=se.Pop,s=null,l=u();l==null&&(l=0,a.replaceState(qe({},a.state,{idx:l}),""));function u(){return(a.state||{idx:null}).idx}function f(){c=se.Pop;let b=u(),w=b==null?null:b-l;l=b,s&&s({action:c,location:g.location,delta:w})}function d(b,w){c=se.Push;let y=gr(g.location,b,w);r&&r(y,b),l=u()+1;let S=dn(y,l),E=g.createHref(y);try{a.pushState(S,"",E)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;o.location.assign(E)}i&&s&&s({action:c,location:g.location,delta:1})}function p(b,w){c=se.Replace;let y=gr(g.location,b,w);r&&r(y,b),l=u();let S=dn(y,l),E=g.createHref(y);a.replaceState(S,"",E),i&&s&&s({action:c,location:g.location,delta:0})}function m(b){let w=o.location.origin!=="null"?o.location.origin:o.location.href,y=typeof b=="string"?b:ut(b);return M(w,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,w)}let g={get action(){return c},get location(){return e(o,a)},listen(b){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(fn,f),s=b,()=>{o.removeEventListener(fn,f),s=null}},createHref(b){return t(o,b)},createURL:m,encodeLocation(b){let w=m(b);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:d,replace:p,go(b){return a.go(b)}};return g}var pn;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pn||(pn={}));function _i(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?xe(t):t,o=Lr(n.pathname||"/",r);if(o==null)return null;let i=ro(e);Mi(i);let a=null;for(let c=0;a==null&&c<i.length;++c)a=Vi(i[c],Gi(o));return a}function ro(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,c)=>{let s={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(M(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let l=ce([n,s.relativePath]),u=r.concat(s);i.children&&i.children.length>0&&(M(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),ro(i.children,t,u,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:Bi(l,i.index),routesMeta:u})};return e.forEach((i,a)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))o(i,a);else for(let s of no(i.path))o(i,a,s)}),t}function no(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=no(n.join("/")),c=[];return c.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&c.push(...a),c.map(s=>e.startsWith("/")&&s===""?"/":s)}function Mi(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Wi(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Li=/^:\w+$/,Ni=3,Di=2,zi=1,Ui=10,Fi=-2,hn=e=>e==="*";function Bi(e,t){let r=e.split("/"),n=r.length;return r.some(hn)&&(n+=Fi),t&&(n+=Di),r.filter(o=>!hn(o)).reduce((o,i)=>o+(Li.test(i)?Ni:i===""?zi:Ui),n)}function Wi(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Vi(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let c=r[a],s=a===r.length-1,l=o==="/"?t:t.slice(o.length)||"/",u=qi({path:c.relativePath,caseSensitive:c.caseSensitive,end:s},l);if(!u)return null;Object.assign(n,u.params);let f=c.route;i.push({params:n,pathname:ce([o,u.pathname]),pathnameBase:Ji(ce([o,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(o=ce([o,u.pathnameBase]))}return i}function qi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Hi(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:n.reduce((l,u,f)=>{if(u==="*"){let d=c[f]||"";a=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return l[u]=Ki(c[f]||"",u),l},{}),pathname:i,pathnameBase:a,pattern:e}}function Hi(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Et(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,c)=>(n.push(c),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Gi(e){try{return decodeURI(e)}catch(t){return Et(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ki(e,t){try{return decodeURIComponent(e)}catch(r){return Et(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Lr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Yi(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?xe(e):e;return{pathname:r?r.startsWith("/")?r:Xi(r,t):t,search:Zi(n),hash:Qi(o)}}function Xi(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function tr(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oo(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function io(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=xe(e):(o=qe({},e),M(!o.pathname||!o.pathname.includes("?"),tr("?","pathname","search",o)),M(!o.pathname||!o.pathname.includes("#"),tr("#","pathname","hash",o)),M(!o.search||!o.search.includes("#"),tr("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,c;if(n||a==null)c=r;else{let f=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}c=f>=0?t[f]:"/"}let s=Yi(o,c),l=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(l||u)&&(s.pathname+="/"),s}const ce=e=>e.join("/").replace(/\/\/+/g,"/"),Ji=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zi=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qi=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ea(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ao=["post","put","patch","delete"];new Set(ao);const ta=["get",...ao];new Set(ta);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ft(){return ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ft.apply(this,arguments)}const Nr=v.createContext(null),ra=v.createContext(null),Le=v.createContext(null),$t=v.createContext(null),Ee=v.createContext({outlet:null,matches:[],isDataRoute:!1}),so=v.createContext(null);function na(e,t){let{relative:r}=t===void 0?{}:t;Je()||M(!1);let{basename:n,navigator:o}=v.useContext(Le),{hash:i,pathname:a,search:c}=lo(e,{relative:r}),s=a;return n!=="/"&&(s=a==="/"?n:ce([n,a])),o.createHref({pathname:s,search:c,hash:i})}function Je(){return v.useContext($t)!=null}function Ct(){return Je()||M(!1),v.useContext($t).location}function co(e){v.useContext(Le).static||v.useLayoutEffect(e)}function oa(){let{isDataRoute:e}=v.useContext(Ee);return e?va():ia()}function ia(){Je()||M(!1);let e=v.useContext(Nr),{basename:t,navigator:r}=v.useContext(Le),{matches:n}=v.useContext(Ee),{pathname:o}=Ct(),i=JSON.stringify(oo(n).map(s=>s.pathnameBase)),a=v.useRef(!1);return co(()=>{a.current=!0}),v.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){r.go(s);return}let u=io(s,JSON.parse(i),o,l.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:ce([t,u.pathname])),(l.replace?r.replace:r.push)(u,l.state,l)},[t,r,i,o,e])}function lo(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=v.useContext(Ee),{pathname:o}=Ct(),i=JSON.stringify(oo(n).map(a=>a.pathnameBase));return v.useMemo(()=>io(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function aa(e,t){return sa(e,t)}function sa(e,t,r){Je()||M(!1);let{navigator:n}=v.useContext(Le),{matches:o}=v.useContext(Ee),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let s=Ct(),l;if(t){var u;let g=typeof t=="string"?xe(t):t;c==="/"||(u=g.pathname)!=null&&u.startsWith(c)||M(!1),l=g}else l=s;let f=l.pathname||"/",d=c==="/"?f:f.slice(c.length)||"/",p=_i(e,{pathname:d}),m=da(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:ce([c,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:ce([c,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,r);return t&&m?v.createElement($t.Provider,{value:{location:ft({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:se.Pop}},m):m}function ca(){let e=ga(),t=ea(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:o},r):null,i)}const la=v.createElement(ca,null);class ua extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?v.createElement(Ee.Provider,{value:this.props.routeContext},v.createElement(so.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fa(e){let{routeContext:t,match:r,children:n}=e,o=v.useContext(Nr);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Ee.Provider,{value:t},n)}function da(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let i=e,a=(n=r)==null?void 0:n.errors;if(a!=null){let c=i.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));c>=0||M(!1),i=i.slice(0,Math.min(i.length,c+1))}return i.reduceRight((c,s,l)=>{let u=s.route.id?a==null?void 0:a[s.route.id]:null,f=null;r&&(f=s.route.errorElement||la);let d=t.concat(i.slice(0,l+1)),p=()=>{let m;return u?m=f:s.route.Component?m=v.createElement(s.route.Component,null):s.route.element?m=s.route.element:m=c,v.createElement(fa,{match:s,routeContext:{outlet:c,matches:d,isDataRoute:r!=null},children:m})};return r&&(s.route.ErrorBoundary||s.route.errorElement||l===0)?v.createElement(ua,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var uo=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uo||{}),dt=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dt||{});function pa(e){let t=v.useContext(Nr);return t||M(!1),t}function ha(e){let t=v.useContext(ra);return t||M(!1),t}function ma(e){let t=v.useContext(Ee);return t||M(!1),t}function fo(e){let t=ma(),r=t.matches[t.matches.length-1];return r.route.id||M(!1),r.route.id}function ga(){var e;let t=v.useContext(so),r=ha(dt.UseRouteError),n=fo(dt.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function va(){let{router:e}=pa(uo.UseNavigateStable),t=fo(dt.UseNavigateStable),r=v.useRef(!1);return co(()=>{r.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ft({fromRouteId:t},i)))},[e,t])}function vr(e){M(!1)}function ya(e){let{basename:t="/",children:r=null,location:n,navigationType:o=se.Pop,navigator:i,static:a=!1}=e;Je()&&M(!1);let c=t.replace(/^\/*/,"/"),s=v.useMemo(()=>({basename:c,navigator:i,static:a}),[c,i,a]);typeof n=="string"&&(n=xe(n));let{pathname:l="/",search:u="",hash:f="",state:d=null,key:p="default"}=n,m=v.useMemo(()=>{let g=Lr(l,c);return g==null?null:{location:{pathname:g,search:u,hash:f,state:d,key:p},navigationType:o}},[c,l,u,f,d,p,o]);return m==null?null:v.createElement(Le.Provider,{value:s},v.createElement($t.Provider,{children:r,value:m}))}function ba(e){let{children:t,location:r}=e;return aa(yr(t),r)}new Promise(()=>{});function yr(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,o)=>{if(!v.isValidElement(n))return;let i=[...t,o];if(n.type===v.Fragment){r.push.apply(r,yr(n.props.children,i));return}n.type!==vr&&M(!1),!n.props.index||!n.props.children||M(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=yr(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},br.apply(this,arguments)}function wa(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Sa(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xa(e,t){return e.button===0&&(!t||t==="_self")&&!Sa(e)}const Ea=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],$a="startTransition",mn=ji[$a];function Ca(e){let{basename:t,children:r,future:n,window:o}=e,i=v.useRef();i.current==null&&(i.current=ki({window:o,v5Compat:!0}));let a=i.current,[c,s]=v.useState({action:a.action,location:a.location}),{v7_startTransition:l}=n||{},u=v.useCallback(f=>{l&&mn?mn(()=>s(f)):s(f)},[s,l]);return v.useLayoutEffect(()=>a.listen(u),[a,u]),v.createElement(ya,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:a})}const Pa=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Oa=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,po=v.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:c,target:s,to:l,preventScrollReset:u}=t,f=wa(t,Ea),{basename:d}=v.useContext(Le),p,m=!1;if(typeof l=="string"&&Oa.test(l)&&(p=l,Pa))try{let y=new URL(window.location.href),S=l.startsWith("//")?new URL(y.protocol+l):new URL(l),E=Lr(S.pathname,d);S.origin===y.origin&&E!=null?l=E+S.search+S.hash:m=!0}catch{}let g=na(l,{relative:o}),b=ja(l,{replace:a,state:c,target:s,preventScrollReset:u,relative:o});function w(y){n&&n(y),y.defaultPrevented||b(y)}return v.createElement("a",br({},f,{href:p||g,onClick:m||i?n:w,ref:r,target:s}))});var gn;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(gn||(gn={}));var vn;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vn||(vn={}));function ja(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,c=oa(),s=Ct(),l=lo(e,{relative:a});return v.useCallback(u=>{if(xa(u,r)){u.preventDefault();let f=n!==void 0?n:ut(s)===ut(l);c(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[s,c,l,n,o,r,e,i,a])}var ho={exports:{}},mo={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=v;function Ia(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Aa=typeof Object.is=="function"?Object.is:Ia,ka=Ie.useState,Ra=Ie.useEffect,Ta=Ie.useLayoutEffect,_a=Ie.useDebugValue;function Ma(e,t){var r=t(),n=ka({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return Ta(function(){o.value=r,o.getSnapshot=t,rr(o)&&i({inst:o})},[e,r,t]),Ra(function(){return rr(o)&&i({inst:o}),e(function(){rr(o)&&i({inst:o})})},[e]),_a(r),r}function rr(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Aa(e,r)}catch{return!0}}function La(e,t){return t()}var Na=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?La:Ma;mo.useSyncExternalStore=Ie.useSyncExternalStore!==void 0?Ie.useSyncExternalStore:Na;ho.exports=mo;var Da=ho.exports,go={exports:{}},vo={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt=v,za=Da;function Ua(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fa=typeof Object.is=="function"?Object.is:Ua,Ba=za.useSyncExternalStore,Wa=Pt.useRef,Va=Pt.useEffect,qa=Pt.useMemo,Ha=Pt.useDebugValue;vo.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=Wa(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=qa(function(){function s(p){if(!l){if(l=!0,u=p,p=n(p),o!==void 0&&a.hasValue){var m=a.value;if(o(m,p))return f=m}return f=p}if(m=f,Fa(u,p))return m;var g=n(p);return o!==void 0&&o(m,g)?m:(u=p,f=g)}var l=!1,u,f,d=r===void 0?null:r;return[function(){return s(t())},d===null?void 0:function(){return s(d())}]},[t,r,n,o]);var c=Ba(e,i[0],i[1]);return Va(function(){a.hasValue=!0,a.value=c},[c]),Ha(c),c};go.exports=vo;var Ga=go.exports;function Ka(e){e()}let yo=Ka;const Ya=e=>yo=e,Xa=()=>yo,yn=Symbol.for("react-redux-context"),bn=typeof globalThis<"u"?globalThis:{};function Ja(){var e;if(!v.createContext)return{};const t=(e=bn[yn])!=null?e:bn[yn]=new Map;let r=t.get(v.createContext);return r||(r=v.createContext(null),t.set(v.createContext,r)),r}const de=Ja();function Dr(e=de){return function(){return v.useContext(e)}}const bo=Dr(),Za=()=>{throw new Error("uSES not initialized!")};let wo=Za;const Qa=e=>{wo=e},es=(e,t)=>e===t;function ts(e=de){const t=e===de?bo:Dr(e);return function(n,o={}){const{equalityFn:i=es,stabilityCheck:a=void 0,noopCheck:c=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:s,subscription:l,getServerState:u,stabilityCheck:f,noopCheck:d}=t();v.useRef(!0);const p=v.useCallback({[n.name](g){return n(g)}}[n.name],[n,f,a]),m=wo(l.addNestedSub,s.getState,u||s.getState,p,i);return v.useDebugValue(m),m}}const U=ts();var So={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=typeof Symbol=="function"&&Symbol.for,zr=N?Symbol.for("react.element"):60103,Ur=N?Symbol.for("react.portal"):60106,Ot=N?Symbol.for("react.fragment"):60107,jt=N?Symbol.for("react.strict_mode"):60108,It=N?Symbol.for("react.profiler"):60114,At=N?Symbol.for("react.provider"):60109,kt=N?Symbol.for("react.context"):60110,Fr=N?Symbol.for("react.async_mode"):60111,Rt=N?Symbol.for("react.concurrent_mode"):60111,Tt=N?Symbol.for("react.forward_ref"):60112,_t=N?Symbol.for("react.suspense"):60113,rs=N?Symbol.for("react.suspense_list"):60120,Mt=N?Symbol.for("react.memo"):60115,Lt=N?Symbol.for("react.lazy"):60116,ns=N?Symbol.for("react.block"):60121,os=N?Symbol.for("react.fundamental"):60117,is=N?Symbol.for("react.responder"):60118,as=N?Symbol.for("react.scope"):60119;function W(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zr:switch(e=e.type,e){case Fr:case Rt:case Ot:case It:case jt:case _t:return e;default:switch(e=e&&e.$$typeof,e){case kt:case Tt:case Lt:case Mt:case At:return e;default:return t}}case Ur:return t}}}function xo(e){return W(e)===Rt}I.AsyncMode=Fr;I.ConcurrentMode=Rt;I.ContextConsumer=kt;I.ContextProvider=At;I.Element=zr;I.ForwardRef=Tt;I.Fragment=Ot;I.Lazy=Lt;I.Memo=Mt;I.Portal=Ur;I.Profiler=It;I.StrictMode=jt;I.Suspense=_t;I.isAsyncMode=function(e){return xo(e)||W(e)===Fr};I.isConcurrentMode=xo;I.isContextConsumer=function(e){return W(e)===kt};I.isContextProvider=function(e){return W(e)===At};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr};I.isForwardRef=function(e){return W(e)===Tt};I.isFragment=function(e){return W(e)===Ot};I.isLazy=function(e){return W(e)===Lt};I.isMemo=function(e){return W(e)===Mt};I.isPortal=function(e){return W(e)===Ur};I.isProfiler=function(e){return W(e)===It};I.isStrictMode=function(e){return W(e)===jt};I.isSuspense=function(e){return W(e)===_t};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ot||e===Rt||e===It||e===jt||e===_t||e===rs||typeof e=="object"&&e!==null&&(e.$$typeof===Lt||e.$$typeof===Mt||e.$$typeof===At||e.$$typeof===kt||e.$$typeof===Tt||e.$$typeof===os||e.$$typeof===is||e.$$typeof===as||e.$$typeof===ns)};I.typeOf=W;So.exports=I;var ss=So.exports,Eo=ss,cs={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ls={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$o={};$o[Eo.ForwardRef]=cs;$o[Eo.Memo]=ls;var A={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),Dt=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),Ut=Symbol.for("react.provider"),Ft=Symbol.for("react.context"),us=Symbol.for("react.server_context"),Bt=Symbol.for("react.forward_ref"),Wt=Symbol.for("react.suspense"),Vt=Symbol.for("react.suspense_list"),qt=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),fs=Symbol.for("react.offscreen"),Co;Co=Symbol.for("react.module.reference");function q(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Br:switch(e=e.type,e){case Nt:case zt:case Dt:case Wt:case Vt:return e;default:switch(e=e&&e.$$typeof,e){case us:case Ft:case Bt:case Ht:case qt:case Ut:return e;default:return t}}case Wr:return t}}}A.ContextConsumer=Ft;A.ContextProvider=Ut;A.Element=Br;A.ForwardRef=Bt;A.Fragment=Nt;A.Lazy=Ht;A.Memo=qt;A.Portal=Wr;A.Profiler=zt;A.StrictMode=Dt;A.Suspense=Wt;A.SuspenseList=Vt;A.isAsyncMode=function(){return!1};A.isConcurrentMode=function(){return!1};A.isContextConsumer=function(e){return q(e)===Ft};A.isContextProvider=function(e){return q(e)===Ut};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br};A.isForwardRef=function(e){return q(e)===Bt};A.isFragment=function(e){return q(e)===Nt};A.isLazy=function(e){return q(e)===Ht};A.isMemo=function(e){return q(e)===qt};A.isPortal=function(e){return q(e)===Wr};A.isProfiler=function(e){return q(e)===zt};A.isStrictMode=function(e){return q(e)===Dt};A.isSuspense=function(e){return q(e)===Wt};A.isSuspenseList=function(e){return q(e)===Vt};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nt||e===zt||e===Dt||e===Wt||e===Vt||e===fs||typeof e=="object"&&e!==null&&(e.$$typeof===Ht||e.$$typeof===qt||e.$$typeof===Ut||e.$$typeof===Ft||e.$$typeof===Bt||e.$$typeof===Co||e.getModuleId!==void 0)};A.typeOf=q;function ds(){const e=Xa();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const wn={notify(){},get:()=>[]};function ps(e,t){let r,n=wn;function o(f){return s(),n.subscribe(f)}function i(){n.notify()}function a(){u.onStateChange&&u.onStateChange()}function c(){return!!r}function s(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=ds())}function l(){r&&(r(),r=void 0,n.clear(),n=wn)}const u={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:c,trySubscribe:s,tryUnsubscribe:l,getListeners:()=>n};return u}const hs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ms=hs?v.useLayoutEffect:v.useEffect;function Sn(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function ye(e,t){if(Sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!Sn(e[r[o]],t[r[o]]))return!1;return!0}function gs({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){const a=v.useMemo(()=>{const l=ps(e);return{store:e,subscription:l,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[e,n,o,i]),c=v.useMemo(()=>e.getState(),[e]);ms(()=>{const{subscription:l}=a;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),c!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[a,c]);const s=t||de;return v.createElement(s.Provider,{value:a},r)}function Po(e=de){const t=e===de?bo:Dr(e);return function(){const{store:n}=t();return n}}const vs=Po();function ys(e=de){const t=e===de?vs:Po(e);return function(){return t().dispatch}}const $e=ys();Qa(Ga.useSyncExternalStoreWithSelector);Ya(Ii.unstable_batchedUpdates);var z=function(){return z=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},z.apply(this,arguments)};function He(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var k="-ms-",Ve="-moz-",O="-webkit-",Oo="comm",Gt="rule",Vr="decl",bs="@import",jo="@keyframes",ws="@layer",Ss=Math.abs,qr=String.fromCharCode,wr=Object.assign;function xs(e,t){return L(e,0)^45?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}function Io(e){return e.trim()}function Q(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function at(e,t){return e.indexOf(t)}function L(e,t){return e.charCodeAt(t)|0}function Ae(e,t,r){return e.slice(t,r)}function Y(e){return e.length}function Ao(e){return e.length}function Be(e,t){return t.push(e),e}function Es(e,t){return e.map(t).join("")}function xn(e,t){return e.filter(function(r){return!Q(r,t)})}var Kt=1,ke=1,ko=0,V=0,_=0,Ne="";function Yt(e,t,r,n,o,i,a,c){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Kt,column:ke,length:a,return:"",siblings:c}}function ie(e,t){return wr(Yt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ce(e){for(;e.root;)e=ie(e.root,{children:[e]});Be(e,e.siblings)}function $s(){return _}function Cs(){return _=V>0?L(Ne,--V):0,ke--,_===10&&(ke=1,Kt--),_}function G(){return _=V<ko?L(Ne,V++):0,ke++,_===10&&(ke=1,Kt++),_}function we(){return L(Ne,V)}function st(){return V}function Xt(e,t){return Ae(Ne,e,t)}function Sr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ps(e){return Kt=ke=1,ko=Y(Ne=e),V=0,[]}function Os(e){return Ne="",e}function nr(e){return Io(Xt(V-1,xr(e===91?e+2:e===40?e+1:e)))}function js(e){for(;(_=we())&&_<33;)G();return Sr(e)>2||Sr(_)>3?"":" "}function Is(e,t){for(;--t&&G()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return Xt(e,st()+(t<6&&we()==32&&G()==32))}function xr(e){for(;G();)switch(_){case e:return V;case 34:case 39:e!==34&&e!==39&&xr(_);break;case 40:e===41&&xr(e);break;case 92:G();break}return V}function As(e,t){for(;G()&&e+_!==47+10;)if(e+_===42+42&&we()===47)break;return"/*"+Xt(t,V-1)+"*"+qr(e===47?e:G())}function ks(e){for(;!Sr(we());)G();return Xt(e,V)}function Rs(e){return Os(ct("",null,null,null,[""],e=Ps(e),0,[0],e))}function ct(e,t,r,n,o,i,a,c,s){for(var l=0,u=0,f=a,d=0,p=0,m=0,g=1,b=1,w=1,y=0,S="",E=o,$=i,j=n,C=S;b;)switch(m=y,y=G()){case 40:if(m!=108&&L(C,f-1)==58){at(C+=P(nr(y),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:C+=nr(y);break;case 9:case 10:case 13:case 32:C+=js(m);break;case 92:C+=Is(st()-1,7);continue;case 47:switch(we()){case 42:case 47:Be(Ts(As(G(),st()),t,r,s),s);break;default:C+="/"}break;case 123*g:c[l++]=Y(C)*w;case 125*g:case 59:case 0:switch(y){case 0:case 125:b=0;case 59+u:w==-1&&(C=P(C,/\f/g,"")),p>0&&Y(C)-f&&Be(p>32?$n(C+";",n,r,f-1,s):$n(P(C," ","")+";",n,r,f-2,s),s);break;case 59:C+=";";default:if(Be(j=En(C,t,r,l,u,o,c,S,E=[],$=[],f,i),i),y===123)if(u===0)ct(C,t,j,j,E,i,f,c,$);else switch(d===99&&L(C,3)===110?100:d){case 100:case 108:case 109:case 115:ct(e,j,j,n&&Be(En(e,j,j,0,0,o,c,S,o,E=[],f,$),$),o,$,f,c,n?E:$);break;default:ct(C,j,j,j,[""],$,0,c,$)}}l=u=p=0,g=w=1,S=C="",f=a;break;case 58:f=1+Y(C),p=m;default:if(g<1){if(y==123)--g;else if(y==125&&g++==0&&Cs()==125)continue}switch(C+=qr(y),y*g){case 38:w=u>0?1:(C+="\f",-1);break;case 44:c[l++]=(Y(C)-1)*w,w=1;break;case 64:we()===45&&(C+=nr(G())),d=we(),u=f=Y(S=C+=ks(st())),y++;break;case 45:m===45&&Y(C)==2&&(g=0)}}return i}function En(e,t,r,n,o,i,a,c,s,l,u,f){for(var d=o-1,p=o===0?i:[""],m=Ao(p),g=0,b=0,w=0;g<n;++g)for(var y=0,S=Ae(e,d+1,d=Ss(b=a[g])),E=e;y<m;++y)(E=Io(b>0?p[y]+" "+S:P(S,/&\f/g,p[y])))&&(s[w++]=E);return Yt(e,t,r,o===0?Gt:c,s,l,u,f)}function Ts(e,t,r,n){return Yt(e,t,r,Oo,qr($s()),Ae(e,2,-2),0,n)}function $n(e,t,r,n,o){return Yt(e,t,r,Vr,Ae(e,0,n),Ae(e,n+1,-1),n,o)}function Ro(e,t,r){switch(xs(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return Ve+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Ve+e+k+e+e;case 5936:switch(L(e,t+11)){case 114:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+k+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+k+e+e;case 6165:return O+e+k+"flex-"+e+e;case 5187:return O+e+P(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return O+e+k+"flex-item-"+P(e,/flex-|-self/g,"")+(Q(e,/flex-|baseline/)?"":k+"grid-row-"+P(e,/flex-|-self/g,""))+e;case 4675:return O+e+k+"flex-line-pack"+P(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+k+P(e,"shrink","negative")+e;case 5292:return O+e+k+P(e,"basis","preferred-size")+e;case 6060:return O+"box-"+P(e,"-grow","")+O+e+k+P(e,"grow","positive")+e;case 4554:return O+P(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!Q(e,/flex-|baseline/))return k+"grid-column-align"+Ae(e,t)+e;break;case 2592:case 3360:return k+P(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Q(n.props,/grid-\w+-end/)})?~at(e+(r=r[t].value),"span")?e:k+P(e,"-start","")+e+k+"grid-row-span:"+(~at(r,"span")?Q(r,/\d+/):+Q(r,/\d+/)-+Q(e,/\d+/))+";":k+P(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Q(n.props,/grid-\w+-start/)})?e:k+P(P(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Y(e)-1-t>6)switch(L(e,t+1)){case 109:if(L(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Ve+(L(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~at(e,"stretch")?Ro(P(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return P(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,c,s,l){return k+o+":"+i+l+(a?k+o+"-span:"+(c?s:+s-+i)+l:"")+e});case 4949:if(L(e,t+6)===121)return P(e,":",":"+O)+e;break;case 6444:switch(L(e,L(e,14)===45?18:11)){case 120:return P(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(L(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+k+"$2box$3")+e;case 100:return P(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(e,"scroll-","scroll-snap-")+e}return e}function pt(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function _s(e,t,r,n){switch(e.type){case ws:if(e.children.length)break;case bs:case Vr:return e.return=e.return||e.value;case Oo:return"";case jo:return e.return=e.value+"{"+pt(e.children,n)+"}";case Gt:if(!Y(e.value=e.props.join(",")))return""}return Y(r=pt(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ms(e){var t=Ao(e);return function(r,n,o,i){for(var a="",c=0;c<t;c++)a+=e[c](r,n,o,i)||"";return a}}function Ls(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ns(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Vr:e.return=Ro(e.value,e.length,r);return;case jo:return pt([ie(e,{value:P(e.value,"@","@"+O)})],n);case Gt:if(e.length)return Es(r=e.props,function(o){switch(Q(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ce(ie(e,{props:[P(o,/:(read-\w+)/,":"+Ve+"$1")]})),Ce(ie(e,{props:[o]})),wr(e,{props:xn(r,n)});break;case"::placeholder":Ce(ie(e,{props:[P(o,/:(plac\w+)/,":"+O+"input-$1")]})),Ce(ie(e,{props:[P(o,/:(plac\w+)/,":"+Ve+"$1")]})),Ce(ie(e,{props:[P(o,/:(plac\w+)/,k+"input-$1")]})),Ce(ie(e,{props:[o]})),wr(e,{props:xn(r,n)});break}return""})}}var Ds={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Re=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Hr=typeof window<"u"&&"HTMLElement"in window,zs=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Us={},Jt=Object.freeze([]),Te=Object.freeze({});function To(e,t,r){return r===void 0&&(r=Te),e.theme!==r.theme&&e.theme||t||r.theme}var _o=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bs=/(^-|-$)/g;function Cn(e){return e.replace(Fs,"-").replace(Bs,"")}var Ws=/(a)(d)/gi,Pn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Er(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Pn(t%52)+r;return(Pn(t%52)+r).replace(Ws,"$1-$2")}var or,Pe=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Mo=function(e){return Pe(5381,e)};function Lo(e){return Er(Mo(e)>>>0)}function Vs(e){return e.displayName||e.name||"Component"}function ir(e){return typeof e=="string"&&!0}var No=typeof Symbol=="function"&&Symbol.for,Do=No?Symbol.for("react.memo"):60115,qs=No?Symbol.for("react.forward_ref"):60112,Hs={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gs={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ks=((or={})[qs]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},or[Do]=zo,or);function On(e){return("type"in(t=e)&&t.type.$$typeof)===Do?zo:"$$typeof"in e?Ks[e.$$typeof]:Hs;var t}var Ys=Object.defineProperty,Xs=Object.getOwnPropertyNames,jn=Object.getOwnPropertySymbols,Js=Object.getOwnPropertyDescriptor,Zs=Object.getPrototypeOf,In=Object.prototype;function Uo(e,t,r){if(typeof t!="string"){if(In){var n=Zs(t);n&&n!==In&&Uo(e,n,r)}var o=Xs(t);jn&&(o=o.concat(jn(t)));for(var i=On(e),a=On(t),c=0;c<o.length;++c){var s=o[c];if(!(s in Gs||r&&r[s]||a&&s in a||i&&s in i)){var l=Js(t,s);try{Ys(e,s,l)}catch{}}}}return e}function _e(e){return typeof e=="function"}function Gr(e){return typeof e=="object"&&"styledComponentId"in e}function be(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $r(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ge(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cr(e,t,r){if(r===void 0&&(r=!1),!r&&!Ge(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Cr(e[n],t[n]);else if(Ge(t))for(var n in t)e[n]=Cr(e[n],t[n]);return e}function Kr(e,t){Object.defineProperty(e,"toString",{value:t})}function Ze(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qs=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Ze(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(t+1),s=(a=0,r.length);a<s;a++)this.tag.insertRule(c,r[a])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),lt=new Map,ht=new Map,ar=1,ot=function(e){if(lt.has(e))return lt.get(e);for(;ht.has(ar);)ar++;var t=ar++;return lt.set(e,t),ht.set(t,e),t},ec=function(e,t){lt.set(e,t),ht.set(t,e)},tc="style[".concat(Re,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),rc=new RegExp("^".concat(Re,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nc=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},oc=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var c=n[i].trim();if(c){var s=c.match(rc);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(ec(u,l),nc(e,u,s[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(c)}}};function ic(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(c){var s=Array.from(c.querySelectorAll("style[".concat(Re,"]")));return s[s.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Re,"active"),n.setAttribute("data-styled-version","6.0.7");var a=ic();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},ac=function(){function e(t){this.element=Fo(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Ze(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),sc=function(){function e(t){this.element=Fo(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cc=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),An=Hr,lc={isServer:!Hr,useCSSOMInjection:!zs},mt=function(){function e(t,r,n){t===void 0&&(t=Te),r===void 0&&(r={});var o=this;this.options=z(z({},lc),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Hr&&An&&(An=!1,function(i){for(var a=document.querySelectorAll(tc),c=0,s=a.length;c<s;c++){var l=a[c];l&&l.getAttribute(Re)!=="active"&&(oc(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),Kr(this,function(){return function(i){for(var a=i.getTag(),c=a.length,s="",l=function(f){var d=function(w){return ht.get(w)}(f);if(d===void 0)return"continue";var p=i.names.get(d),m=a.getGroup(f);if(p===void 0||m.length===0)return"continue";var g="".concat(Re,".g").concat(f,'[id="').concat(d,'"]'),b="";p!==void 0&&p.forEach(function(w){w.length>0&&(b+="".concat(w,","))}),s+="".concat(m).concat(g,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},u=0;u<c;u++)l(u);return s}(o)})}return e.registerId=function(t){return ot(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(z(z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new cc(o):n?new ac(o):new sc(o)}(this.options),new Qs(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ot(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ot(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ot(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),uc=/&/g,fc=/^\s*\/\/.*$/gm;function Bo(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Bo(r.children,t)),r})}function dc(e){var t,r,n,o=e===void 0?Te:e,i=o.options,a=i===void 0?Te:i,c=o.plugins,s=c===void 0?Jt:c,l=function(d,p,m){return m===r||m.startsWith(r)&&m.endsWith(r)&&m.replaceAll(r,"").length>0?".".concat(t):d},u=s.slice();u.push(function(d){d.type===Gt&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(uc,r).replace(n,l))}),a.prefix&&u.push(Ns),u.push(_s);var f=function(d,p,m,g){p===void 0&&(p=""),m===void 0&&(m=""),g===void 0&&(g="&"),t=g,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var b=d.replace(fc,""),w=Rs(m||p?"".concat(m," ").concat(p," { ").concat(b," }"):b);a.namespace&&(w=Bo(w,a.namespace));var y=[];return pt(w,Ms(u.concat(Ls(function(S){return y.push(S)})))),y};return f.hash=s.length?s.reduce(function(d,p){return p.name||Ze(15),Pe(d,p.name)},5381).toString():"",f}var pc=new mt,Pr=dc(),Wo=X.createContext({shouldForwardProp:void 0,styleSheet:pc,stylis:Pr});Wo.Consumer;X.createContext(void 0);function Or(){return v.useContext(Wo)}var hc=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Pr);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Kr(this,function(){throw Ze(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pr),this.name+t.hash},e}(),mc=function(e){return e>="A"&&e<="Z"};function kn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;mc(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Vo=function(e){return e==null||e===!1||e===""},qo=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Vo(i)&&(Array.isArray(i)&&i.isCss||_e(i)?n.push("".concat(kn(o),":"),i,";"):Ge(i)?n.push.apply(n,He(He(["".concat(o," {")],qo(i),!1),["}"],!1)):n.push("".concat(kn(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Ds||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function le(e,t,r,n){if(Vo(e))return[];if(Gr(e))return[".".concat(e.styledComponentId)];if(_e(e)){if(!_e(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return le(o,t,r,n)}var i;return e instanceof hc?r?(e.inject(r,n),[e.getName(n)]):[e]:Ge(e)?qo(e):Array.isArray(e)?Array.prototype.concat.apply(Jt,e.map(function(a){return le(a,t,r,n)})):[e.toString()]}function Ho(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(_e(r)&&!Gr(r))return!1}return!0}var gc=Mo("6.0.7"),vc=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Ho(t),this.componentId=r,this.baseHash=Pe(gc,r),this.baseStyle=n,mt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=be(o,this.staticRulesId);else{var i=$r(le(this.rules,t,r,n)),a=Er(Pe(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var c=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,c)}o=be(o,a),this.staticRulesId=a}else{for(var s=Pe(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")l+=f;else if(f){var d=$r(le(f,t,r,n));s=Pe(s,d),l+=d}}if(l){var p=Er(s>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),o=be(o,p)}}return o},e}(),Yr=X.createContext(void 0);Yr.Consumer;var sr={};function yc(e,t,r){var n=Gr(e),o=e,i=!ir(e),a=t.attrs,c=a===void 0?Jt:a,s=t.componentId,l=s===void 0?function(S,E){var $=typeof S!="string"?"sc":Cn(S);sr[$]=(sr[$]||0)+1;var j="".concat($,"-").concat(Lo("6.0.7"+$+sr[$]));return E?"".concat(E,"-").concat(j):j}(t.displayName,t.parentComponentId):s,u=t.displayName;u===void 0&&function(S){return ir(S)?"styled.".concat(S):"Styled(".concat(Vs(S),")")}(e);var f=t.displayName&&t.componentId?"".concat(Cn(t.displayName),"-").concat(t.componentId):t.componentId||l,d=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,p=t.shouldForwardProp;if(n&&o.shouldForwardProp){var m=o.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;p=function(S,E){return m(S,E)&&g(S,E)}}else p=m}var b=new vc(r,f,n?o.componentStyle:void 0);function w(S,E){return function($,j,C){var he=$.attrs,te=$.componentStyle,F=$.defaultProps,me=$.foldedComponentIds,$i=$.styledComponentId,Ci=$.target,Pi=X.useContext(Yr),Oi=Or(),Zt=$.shouldForwardProp||Oi.shouldForwardProp,re=function(tt,Ue,rt){for(var Fe,ge=z(z({},Ue),{className:void 0,theme:rt}),er=0;er<tt.length;er+=1){var nt=_e(Fe=tt[er])?Fe(ge):Fe;for(var oe in nt)ge[oe]=oe==="className"?be(ge[oe],nt[oe]):oe==="style"?z(z({},ge[oe]),nt[oe]):nt[oe]}return Ue.className&&(ge.className=be(ge.className,Ue.className)),ge}(he,j,To(j,Pi,F)||Te),et=re.as||Ci,ze={};for(var ne in re)re[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"||(ne==="forwardedAs"?ze.as=re.forwardedAs:Zt&&!Zt(ne,et)||(ze[ne]=re[ne]));var un=function(tt,Ue){var rt=Or(),Fe=tt.generateAndInjectStyles(Ue,rt.styleSheet,rt.stylis);return Fe}(te,re),Qt=be(me,$i);return un&&(Qt+=" "+un),re.className&&(Qt+=" "+re.className),ze[ir(et)&&!_o.has(et)?"class":"className"]=Qt,ze.ref=C,v.createElement(et,ze)}(y,S,E)}var y=X.forwardRef(w);return y.attrs=d,y.componentStyle=b,y.shouldForwardProp=p,y.foldedComponentIds=n?be(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=f,y.target=n?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(E){for(var $=[],j=1;j<arguments.length;j++)$[j-1]=arguments[j];for(var C=0,he=$;C<he.length;C++)Cr(E,he[C],!0);return E}({},o.defaultProps,S):S}}),Kr(y,function(){return".".concat(y.styledComponentId)}),i&&Uo(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Rn(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Tn=function(e){return Object.assign(e,{isCss:!0})};function Z(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(_e(e)||Ge(e)){var n=e;return Tn(le(Rn(Jt,He([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?le(o):Tn(le(Rn(o,t)))}function jr(e,t,r){if(r===void 0&&(r=Te),!t)throw Ze(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Z.apply(void 0,He([o],i,!1)))};return n.attrs=function(o){return jr(e,t,z(z({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return jr(e,t,z(z({},r),o))},n}var Go=function(e){return jr(yc,e)},x=Go;_o.forEach(function(e){x[e]=Go(e)});var bc=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Ho(t),mt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o($r(le(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&mt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function wc(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Z.apply(void 0,He([e],t,!1)),o="sc-global-".concat(Lo(JSON.stringify(n))),i=new bc(n,o),a=function(s){var l=Or(),u=X.useContext(Yr),f=X.useRef(l.styleSheet.allocateGSInstance(o)).current;return l.styleSheet.server&&c(f,s,l.styleSheet,u,l.stylis),X.useLayoutEffect(function(){if(!l.styleSheet.server)return c(f,s,l.styleSheet,u,l.stylis),function(){return i.removeStyles(f,l.styleSheet)}},[f,s,l.styleSheet,u,l.stylis]),null};function c(s,l,u,f,d){if(i.isStatic)i.renderStyles(s,Us,u,d);else{var p=z(z({},l),{theme:To(l,f,a.defaultProps)});i.renderStyles(s,p,u,d)}}return X.memo(a)}function H(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function pe(e){return!!e&&!!e[R]}function ee(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Ic}(e)||Array.isArray(e)||!!e[Un]||!!(!((t=e.constructor)===null||t===void 0)&&t[Un])||Xr(e)||Jr(e))}function Se(e,t,r){r===void 0&&(r=!1),De(e)===0?(r?Object.keys:je)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function De(e){var t=e[R];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Xr(e)?2:Jr(e)?3:0}function Oe(e,t){return De(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Sc(e,t){return De(e)===2?e.get(t):e[t]}function Ko(e,t,r){var n=De(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Yo(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Xr(e){return Oc&&e instanceof Map}function Jr(e){return jc&&e instanceof Set}function ve(e){return e.o||e.t}function Zr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Jo(e);delete t[R];for(var r=je(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Qr(e,t){return t===void 0&&(t=!1),en(e)||pe(e)||!ee(e)||(De(e)>1&&(e.set=e.add=e.clear=e.delete=xc),Object.freeze(e),t&&Se(e,function(r,n){return Qr(n,!0)},!0)),e}function xc(){H(2)}function en(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function J(e){var t=Rr[e];return t||H(18,e),t}function Ec(e,t){Rr[e]||(Rr[e]=t)}function Ir(){return Ke}function cr(e,t){t&&(J("Patches"),e.u=[],e.s=[],e.v=t)}function gt(e){Ar(e),e.p.forEach($c),e.p=null}function Ar(e){e===Ke&&(Ke=e.l)}function _n(e){return Ke={p:[],l:Ke,h:e,m:!0,_:0}}function $c(e){var t=e[R];t.i===0||t.i===1?t.j():t.g=!0}function lr(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||J("ES5").S(t,e,n),n?(r[R].P&&(gt(t),H(4)),ee(e)&&(e=vt(t,e),t.l||yt(t,e)),t.u&&J("Patches").M(r[R].t,e,t.u,t.s)):e=vt(t,r,[]),gt(t),t.u&&t.v(t.u,t.s),e!==Xo?e:void 0}function vt(e,t,r){if(en(t))return t;var n=t[R];if(!n)return Se(t,function(c,s){return Mn(e,n,t,c,s,r)},!0),t;if(n.A!==e)return t;if(!n.P)return yt(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Zr(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),Se(i,function(c,s){return Mn(e,n,o,c,s,r,a)}),yt(e,o,!1),r&&e.u&&J("Patches").N(n,r,e.u,e.s)}return n.o}function Mn(e,t,r,n,o,i,a){if(pe(o)){var c=vt(e,o,i&&t&&t.i!==3&&!Oe(t.R,n)?i.concat(n):void 0);if(Ko(r,n,c),!pe(c))return;e.m=!1}else a&&r.add(o);if(ee(o)&&!en(o)){if(!e.h.D&&e._<1)return;vt(e,o),t&&t.A.l||yt(e,o)}}function yt(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Qr(t,r)}function ur(e,t){var r=e[R];return(r?ve(r):e)[t]}function Ln(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ae(e){e.P||(e.P=!0,e.l&&ae(e.l))}function fr(e){e.o||(e.o=Zr(e.t))}function kr(e,t,r){var n=Xr(t)?J("MapSet").F(t,r):Jr(t)?J("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),c={i:a?1:0,A:i?i.A:Ir(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},s=c,l=Ye;a&&(s=[c],l=We);var u=Proxy.revocable(s,l),f=u.revoke,d=u.proxy;return c.k=d,c.j=f,d}(t,r):J("ES5").J(t,r);return(r?r.A:Ir()).p.push(n),n}function Cc(e){return pe(e)||H(22,e),function t(r){if(!ee(r))return r;var n,o=r[R],i=De(r);if(o){if(!o.P&&(o.i<4||!J("ES5").K(o)))return o.t;o.I=!0,n=Nn(r,i),o.I=!1}else n=Nn(r,i);return Se(n,function(a,c){o&&Sc(o.t,a)===c||Ko(n,a,t(c))}),i===3?new Set(n):n}(e)}function Nn(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Zr(e)}function Pc(){function e(i,a){var c=o[i];return c?c.enumerable=a:o[i]=c={configurable:!0,enumerable:a,get:function(){var s=this[R];return Ye.get(s,i)},set:function(s){var l=this[R];Ye.set(l,i,s)}},c}function t(i){for(var a=i.length-1;a>=0;a--){var c=i[a][R];if(!c.P)switch(c.i){case 5:n(c)&&ae(c);break;case 4:r(c)&&ae(c)}}}function r(i){for(var a=i.t,c=i.k,s=je(c),l=s.length-1;l>=0;l--){var u=s[l];if(u!==R){var f=a[u];if(f===void 0&&!Oe(a,u))return!0;var d=c[u],p=d&&d[R];if(p?p.t!==f:!Yo(d,f))return!0}}var m=!!a[R];return s.length!==je(a).length+(m?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var c=Object.getOwnPropertyDescriptor(a,a.length-1);if(c&&!c.get)return!0;for(var s=0;s<a.length;s++)if(!a.hasOwnProperty(s))return!0;return!1}var o={};Ec("ES5",{J:function(i,a){var c=Array.isArray(i),s=function(u,f){if(u){for(var d=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(d,""+p,e(p,!0));return d}var m=Jo(f);delete m[R];for(var g=je(m),b=0;b<g.length;b++){var w=g[b];m[w]=e(w,u||!!m[w].enumerable)}return Object.create(Object.getPrototypeOf(f),m)}(c,i),l={i:c?5:4,A:a?a.A:Ir(),P:!1,I:!1,R:{},l:a,t:i,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,R,{value:l,writable:!0}),s},S:function(i,a,c){c?pe(a)&&a[R].A===i&&t(i.p):(i.u&&function s(l){if(l&&typeof l=="object"){var u=l[R];if(u){var f=u.t,d=u.k,p=u.R,m=u.i;if(m===4)Se(d,function(S){S!==R&&(f[S]!==void 0||Oe(f,S)?p[S]||s(d[S]):(p[S]=!0,ae(u)))}),Se(f,function(S){d[S]!==void 0||Oe(d,S)||(p[S]=!1,ae(u))});else if(m===5){if(n(u)&&(ae(u),p.length=!0),d.length<f.length)for(var g=d.length;g<f.length;g++)p[g]=!1;else for(var b=f.length;b<d.length;b++)p[b]=!0;for(var w=Math.min(d.length,f.length),y=0;y<w;y++)d.hasOwnProperty(y)||(p[y]=!0),p[y]===void 0&&s(d[y])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var Dn,Ke,tn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Oc=typeof Map<"u",jc=typeof Set<"u",zn=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Xo=tn?Symbol.for("immer-nothing"):((Dn={})["immer-nothing"]=!0,Dn),Un=tn?Symbol.for("immer-draftable"):"__$immer_draftable",R=tn?Symbol.for("immer-state"):"__$immer_state",Ic=""+Object.prototype.constructor,je=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Jo=Object.getOwnPropertyDescriptors||function(e){var t={};return je(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Rr={},Ye={get:function(e,t){if(t===R)return e;var r=ve(e);if(!Oe(r,t))return function(o,i,a){var c,s=Ln(i,a);return s?"value"in s?s.value:(c=s.get)===null||c===void 0?void 0:c.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!ee(n)?n:n===ur(e.t,t)?(fr(e),e.o[t]=kr(e.A.h,n,e)):n},has:function(e,t){return t in ve(e)},ownKeys:function(e){return Reflect.ownKeys(ve(e))},set:function(e,t,r){var n=Ln(ve(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=ur(ve(e),t),i=o==null?void 0:o[R];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Yo(r,o)&&(r!==void 0||Oe(e.t,t)))return!0;fr(e),ae(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return ur(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,fr(e),ae(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=ve(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){H(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){H(12)}},We={};Se(Ye,function(e,t){We[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),We.deleteProperty=function(e,t){return We.set.call(this,e,t,void 0)},We.set=function(e,t,r){return Ye.set.call(this,e[0],t,r,e[0])};var Ac=function(){function e(r){var n=this;this.O=zn,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var c=i;i=o;var s=n;return function(g){var b=this;g===void 0&&(g=c);for(var w=arguments.length,y=Array(w>1?w-1:0),S=1;S<w;S++)y[S-1]=arguments[S];return s.produce(g,function(E){var $;return($=i).call.apply($,[b,E].concat(y))})}}var l;if(typeof i!="function"&&H(6),a!==void 0&&typeof a!="function"&&H(7),ee(o)){var u=_n(n),f=kr(n,o,void 0),d=!0;try{l=i(f),d=!1}finally{d?gt(u):Ar(u)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(g){return cr(u,a),lr(g,u)},function(g){throw gt(u),g}):(cr(u,a),lr(l,u))}if(!o||typeof o!="object"){if((l=i(o))===void 0&&(l=o),l===Xo&&(l=void 0),n.D&&Qr(l,!0),a){var p=[],m=[];J("Patches").M(o,l,p,m),a(p,m)}return l}H(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(l){for(var u=arguments.length,f=Array(u>1?u-1:0),d=1;d<u;d++)f[d-1]=arguments[d];return n.produceWithPatches(l,function(p){return o.apply(void 0,[p].concat(f))})};var a,c,s=n.produce(o,i,function(l,u){a=l,c=u});return typeof Promise<"u"&&s instanceof Promise?s.then(function(l){return[l,a,c]}):[s,a,c]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){ee(r)||H(8),pe(r)&&(r=Cc(r));var n=_n(this),o=kr(this,r,void 0);return o[R].C=!0,Ar(n),o},t.finishDraft=function(r,n){var o=r&&r[R],i=o.A;return cr(i,n),lr(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!zn&&H(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=J("Patches").$;return pe(r)?a(r,n):this.produce(r,function(c){return a(c,n)})},e}(),B=new Ac,Zo=B.produce;B.produceWithPatches.bind(B);B.setAutoFreeze.bind(B);B.setUseProxies.bind(B);B.applyPatches.bind(B);B.createDraft.bind(B);B.finishDraft.bind(B);function Xe(e){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xe(e)}function kc(e,t){if(Xe(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Xe(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rc(e){var t=kc(e,"string");return Xe(t)==="symbol"?t:String(t)}function Tc(e,t,r){return t=Rc(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Fn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Bn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Fn(Object(r),!0).forEach(function(n){Tc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fn(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function D(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Wn=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),dr=function(){return Math.random().toString(36).substring(7).split("").join(".")},bt={INIT:"@@redux/INIT"+dr(),REPLACE:"@@redux/REPLACE"+dr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+dr()}};function _c(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Qo(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(D(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(D(1));return r(Qo)(e,t)}if(typeof e!="function")throw new Error(D(2));var o=e,i=t,a=[],c=a,s=!1;function l(){c===a&&(c=a.slice())}function u(){if(s)throw new Error(D(3));return i}function f(g){if(typeof g!="function")throw new Error(D(4));if(s)throw new Error(D(5));var b=!0;return l(),c.push(g),function(){if(b){if(s)throw new Error(D(6));b=!1,l();var y=c.indexOf(g);c.splice(y,1),a=null}}}function d(g){if(!_c(g))throw new Error(D(7));if(typeof g.type>"u")throw new Error(D(8));if(s)throw new Error(D(9));try{s=!0,i=o(i,g)}finally{s=!1}for(var b=a=c,w=0;w<b.length;w++){var y=b[w];y()}return g}function p(g){if(typeof g!="function")throw new Error(D(10));o=g,d({type:bt.REPLACE})}function m(){var g,b=f;return g={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(D(11));function S(){y.next&&y.next(u())}S();var E=b(S);return{unsubscribe:E}}},g[Wn]=function(){return this},g}return d({type:bt.INIT}),n={dispatch:d,subscribe:f,getState:u,replaceReducer:p},n[Wn]=m,n}function Mc(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:bt.INIT});if(typeof n>"u")throw new Error(D(12));if(typeof r(void 0,{type:bt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(D(13))})}function Lc(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),a;try{Mc(r)}catch(c){a=c}return function(s,l){if(s===void 0&&(s={}),a)throw a;for(var u=!1,f={},d=0;d<i.length;d++){var p=i[d],m=r[p],g=s[p],b=m(g,l);if(typeof b>"u")throw l&&l.type,new Error(D(14));f[p]=b,u=u||b!==g}return u=u||i.length!==Object.keys(s).length,u?f:s}}function wt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function Nc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(D(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},c=t.map(function(s){return s(a)});return i=wt.apply(void 0,c)(o.dispatch),Bn(Bn({},o),{},{dispatch:i})}}}var St="NOT_FOUND";function Dc(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:St},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function zc(e,t){var r=[];function n(c){var s=r.findIndex(function(u){return t(c,u.key)});if(s>-1){var l=r[s];return s>0&&(r.splice(s,1),r.unshift(l)),l.value}return St}function o(c,s){n(c)===St&&(r.unshift({key:c,value:s}),r.length>e&&r.pop())}function i(){return r}function a(){r=[]}return{get:n,put:o,getEntries:i,clear:a}}var Uc=function(t,r){return t===r};function Fc(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,i=0;i<o;i++)if(!e(r[i],n[i]))return!1;return!0}}function Bc(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?Uc:n,i=r.maxSize,a=i===void 0?1:i,c=r.resultEqualityCheck,s=Fc(o),l=a===1?Dc(s):zc(a,s);function u(){var f=l.get(arguments);if(f===St){if(f=e.apply(null,arguments),c){var d=l.getEntries(),p=d.find(function(m){return c(m.value,f)});p&&(f=p.value)}l.put(arguments,f)}return f}return u.clearCache=function(){return l.clear()},u}function Wc(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function Vc(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];var l=0,u,f={memoizeOptions:void 0},d=c.pop();if(typeof d=="object"&&(f=d,d=c.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var p=f,m=p.memoizeOptions,g=m===void 0?r:m,b=Array.isArray(g)?g:[g],w=Wc(c),y=e.apply(void 0,[function(){return l++,d.apply(null,arguments)}].concat(b)),S=e(function(){for(var $=[],j=w.length,C=0;C<j;C++)$.push(w[C].apply(null,arguments));return u=y.apply(null,$),u});return Object.assign(S,{resultFunc:d,memoizedResultFunc:y,dependencies:w,lastResult:function(){return u},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),S};return o}var T=Vc(Bc);function ei(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(a){return function(c){return typeof c=="function"?c(o,i,e):a(c)}}};return t}var ti=ei();ti.withExtraArgument=ei;const Vn=ti;var ri=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),qc=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(l){return function(u){return s([l,u])}}function s(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(u){l=[6,u],o=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Me=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Hc=Object.defineProperty,Gc=Object.defineProperties,Kc=Object.getOwnPropertyDescriptors,qn=Object.getOwnPropertySymbols,Yc=Object.prototype.hasOwnProperty,Xc=Object.prototype.propertyIsEnumerable,Hn=function(e,t,r){return t in e?Hc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ue=function(e,t){for(var r in t||(t={}))Yc.call(t,r)&&Hn(e,r,t[r]);if(qn)for(var n=0,o=qn(t);n<o.length;n++){var r=o[n];Xc.call(t,r)&&Hn(e,r,t[r])}return e},pr=function(e,t){return Gc(e,Kc(t))},Jc=function(e,t,r){return new Promise(function(n,o){var i=function(s){try{c(r.next(s))}catch(l){o(l)}},a=function(s){try{c(r.throw(s))}catch(l){o(l)}},c=function(s){return s.done?n(s.value):Promise.resolve(s.value).then(i,a)};c((r=r.apply(e,t)).next())})},Zc=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wt:wt.apply(null,arguments)};function Qc(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var el=function(e){ri(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Me([void 0],r[0].concat(this)))):new(t.bind.apply(t,Me([void 0],r.concat(this))))},t}(Array),tl=function(e){ri(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Me([void 0],r[0].concat(this)))):new(t.bind.apply(t,Me([void 0],r.concat(this))))},t}(Array);function Tr(e){return ee(e)?Zo(e,function(){}):e}function rl(e){return typeof e=="boolean"}function nl(){return function(t){return ol(t)}}function ol(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new el;return r&&(rl(r)?n.push(Vn):n.push(Vn.withExtraArgument(r.extraArgument))),n}var il=!0;function al(e){var t=nl(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,a=i===void 0?t():i,c=r.devTools,s=c===void 0?!0:c,l=r.preloadedState,u=l===void 0?void 0:l,f=r.enhancers,d=f===void 0?void 0:f,p;if(typeof o=="function")p=o;else if(Qc(o))p=Lc(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var m=a;typeof m=="function"&&(m=m(t));var g=Nc.apply(void 0,m),b=wt;s&&(b=Zc(ue({trace:!il},typeof s=="object"&&s)));var w=new tl(g),y=w;Array.isArray(d)?y=Me([g],d):typeof d=="function"&&(y=d(w));var S=b.apply(void 0,y);return Qo(p,u,S)}function fe(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return ue(ue({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function ni(e){var t={},r=[],n,o={addCase:function(i,a){var c=typeof i=="string"?i:i.type;if(c in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[c]=a,o},addMatcher:function(i,a){return r.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function sl(e){return typeof e=="function"}function cl(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?ni(t):[t,r,n],i=o[0],a=o[1],c=o[2],s;if(sl(e))s=function(){return Tr(e())};else{var l=Tr(e);s=function(){return l}}function u(f,d){f===void 0&&(f=s());var p=Me([i[d.type]],a.filter(function(m){var g=m.matcher;return g(d)}).map(function(m){var g=m.reducer;return g}));return p.filter(function(m){return!!m}).length===0&&(p=[c]),p.reduce(function(m,g){if(g)if(pe(m)){var b=m,w=g(b,d);return w===void 0?m:w}else{if(ee(m))return Zo(m,function(y){return g(y,d)});var w=g(m,d);if(w===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}return m},f)}return u.getInitialState=s,u}function ll(e,t){return e+"/"+t}function oi(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:Tr(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},a={},c={};o.forEach(function(u){var f=n[u],d=ll(t,u),p,m;"reducer"in f?(p=f.reducer,m=f.prepare):p=f,i[u]=p,a[d]=p,c[u]=m?fe(d,m):fe(d)});function s(){var u=typeof e.extraReducers=="function"?ni(e.extraReducers):[e.extraReducers],f=u[0],d=f===void 0?{}:f,p=u[1],m=p===void 0?[]:p,g=u[2],b=g===void 0?void 0:g,w=ue(ue({},d),a);return cl(r,function(y){for(var S in w)y.addCase(S,w[S]);for(var E=0,$=m;E<$.length;E++){var j=$[E];y.addMatcher(j.matcher,j.reducer)}b&&y.addDefaultCase(b)})}var l;return{name:t,reducer:function(u,f){return l||(l=s()),l(u,f)},actions:c,caseReducers:i,getInitialState:function(){return l||(l=s()),l.getInitialState()}}}var ul="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",fl=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=ul[Math.random()*64|0];return t},dl=["name","message","stack","code"],hr=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Gn=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),pl=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=dl;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=fe(t+"/fulfilled",function(l,u,f,d){return{payload:l,meta:pr(ue({},d||{}),{arg:f,requestId:u,requestStatus:"fulfilled"})}}),i=fe(t+"/pending",function(l,u,f){return{payload:void 0,meta:pr(ue({},f||{}),{arg:u,requestId:l,requestStatus:"pending"})}}),a=fe(t+"/rejected",function(l,u,f,d,p){return{payload:d,error:(n&&n.serializeError||pl)(l||"Rejected"),meta:pr(ue({},p||{}),{arg:f,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),c=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function s(l){return function(u,f,d){var p=n!=null&&n.idGenerator?n.idGenerator(l):fl(),m=new c,g;function b(y){g=y,m.abort()}var w=function(){return Jc(this,null,function(){var y,S,E,$,j,C,he;return qc(this,function(te){switch(te.label){case 0:return te.trys.push([0,4,,5]),$=(y=n==null?void 0:n.condition)==null?void 0:y.call(n,l,{getState:f,extra:d}),ml($)?[4,$]:[3,2];case 1:$=te.sent(),te.label=2;case 2:if($===!1||m.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return j=new Promise(function(F,me){return m.signal.addEventListener("abort",function(){return me({name:"AbortError",message:g||"Aborted"})})}),u(i(p,l,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:p,arg:l},{getState:f,extra:d}))),[4,Promise.race([j,Promise.resolve(r(l,{dispatch:u,getState:f,extra:d,requestId:p,signal:m.signal,abort:b,rejectWithValue:function(F,me){return new hr(F,me)},fulfillWithValue:function(F,me){return new Gn(F,me)}})).then(function(F){if(F instanceof hr)throw F;return F instanceof Gn?o(F.payload,p,l,F.meta):o(F,p,l)})])];case 3:return E=te.sent(),[3,5];case 4:return C=te.sent(),E=C instanceof hr?a(null,p,l,C.payload,C.meta):a(C,p,l),[3,5];case 5:return he=n&&!n.dispatchConditionRejection&&a.match(E)&&E.meta.condition,he||u(E),[2,E]}})})}();return Object.assign(w,{abort:b,requestId:p,arg:l,unwrap:function(){return w.then(hl)}})}}return Object.assign(s,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function hl(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ml(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var rn="listenerMiddleware";fe(rn+"/add");fe(rn+"/removeAll");fe(rn+"/remove");var Kn;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Pc();const ii=(e,t,r)=>Math.min(Math.max(e,t),r),gl=(e,t,r,n,o,i)=>{var l;let a=(l=t.find(u=>u.id===e.id))==null?void 0:l.value;if(a===void 0&&(a=e.value),o)return a;const c=e.perMinute+(n||0),s=i?c/3:c/60;return Math.round(ii(a+s*r,0,e.max)*100)/100},vl=e=>{const t={};return e.forEach(r=>{r.effect.forEach(n=>{n.statId&&n.perMinute&&(t[n.statId]?t[n.statId]+=n.perMinute:t[n.statId]=n.perMinute)})}),t},yl=(e,t,r,n,o,i)=>{const a=o&&n?(o-n)/1e3:0,c=vl(r);return e.map(s=>({id:s.id,value:gl(s,t,a,c[s.id],void 0,i),label:s.label,max:s.max,displayType:s.displayType}))},Yn=(...e)=>{},xt=e=>e===void 0?[]:Array.isArray(e)?e:[e],bl=(e,t)=>{if(e.length===0)return!0;for(let r=0;r<e.length;r++)if(e[r].when.length===0||e[r].when.filter(n=>t.indexOf(n)>-1).length===e[r].when.length)return e[r].then;return!1},ai=(e,t)=>{for(let r=0;r<e.length;r++){const n=Sl(e[r],t);if(n)return n}return null},wl=(e,t,r)=>e.when.find(n=>!Cl(n,t,r))?null:e.then,Sl=(e,t)=>{let r=0;for(let n=0;n<e.when.length;n++)Array.isArray(e.when[n])?e.when[n].some(o=>t.includes(o))&&r++:t.indexOf(e.when[n])>-1&&r++;return r===e.when.length?Array.isArray(e.then)?ai(e.then,t):e.then:null},xl=e=>e.map(t=>({when:xt(t.when),then:t.then})),si=e=>e.map(t=>Array.isArray(t.then)?{when:xt(t.when),then:si(t.then)}:{when:xt(t.when),then:t.then}),El=e=>e?e.map(t=>({when:xt(t.when).map(n=>$l(n)).filter(n=>n!==null),then:t.then})):[],ci={"=":(e,t)=>e===t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t},$l=e=>{try{const t=e.split("_"),r=t[0],o=t[1].split("%");return ci[r]?{condition:r,criteria:Number(o[0]),isPercent:o.length>1}:(console.error(`parseExpressionString(): invalid condition "${r}" from expressionString "${e}"`),null)}catch{return console.error(`could not parse expressionString "${e}", expressionStrings must use one 
    of the following operators: [<=,<,=,>,>=] and follow a format like "<=_10%"`),null}},Cl=(e,t,r)=>{try{const n=e.isPercent?Math.round(t/r*100):t;return ci[e.condition](n,e.criteria)}catch{return console.log(`could not evaluate "whenNumber:${e}", "reference:${t}", "referenceMax:${t}"`),null}},Pl={debugMode:!1},li=oi({name:"ui",initialState:Pl,reducers:{setDebugMode:(e,t)=>{e.debugMode=t.payload}}}),{setDebugMode:Ol}=li.actions,jl=e=>e.ui.debugMode,Il=li.reducer,Al={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},kl={activeIdx:-1,pets:[],interactions:[],deltaPets:[],lastRendered:new Date().getTime(),lastSaved:new Date().getTime()},Rl=e=>{const t={"color-primary":"var(--color-black)","color-secondary":"var(--color-blue)","color-highlight":"var(--color-white)"};return e&&Object.keys(e).forEach(r=>{t[r]=e[r]}),t},Tl=(e,t)=>({stats:zl(e.logic.stats,t),statuses:Ul(e.logic.statuses,e.baseUrl),behaviorRules:si(e.logic.behaviorRules),behaviors:_l(e.logic.behaviors||[],e.baseUrl),interactions:Dl(e.logic.interactions)}),_l=(e,t)=>e.map(r=>({...r,type:r.type||"normal",imageUrl:r.image?`${t}/${r.image}`:r.imageUrl||"",bgImageUrl:r.bgImage?`${t}/${r.bgImage}`:"",position:r.position?r.position:"center",offsetX:r.offsetX?r.offsetX:0,offsetY:r.offsetY?r.offsetY:0})),Ml=e=>e?e.map(t=>({statId:t.statId,value:t.value||0,type:t.type||"incremental"})):[],Ll=e=>e?xl(e):[],Nl=e=>e?{defaultState:e.defaultState||"off",onState:e.onState,offState:e.offState}:null,Dl=e=>e?e.map(t=>({id:t.id,label:t.label,cooldown:t.cooldown,changeStats:Ml(t.changeStats),changeToggle:Nl(t.changeToggle),availability:Ll(t.availability),hideWhenUnavailable:t.hideWhenUnavailable===!0})):[],zl=(e,t)=>e.map(r=>{const n=t==null?void 0:t.stats.find(i=>i.id===r.id),o=El(r.statEffects);return n?{...r,value:n.value,displayType:r.displayType||"percent",statEffects:o}:{...r,displayType:r.displayType||"percent",statEffects:o}}),Ul=(e,t)=>Object.keys(e).map(r=>({id:r,label:e[r].label||"",message:e[r].message||"",fgImage:e[r].fgImage?`${t}/${e[r].fgImage}`:"",bgImage:e[r].bgImage?`${t}/${e[r].bgImage}`:"",alertType:e[r].alertType})),Fl=(e,t)=>{const r=t.defaultState||"off",n=r==="on"?t.onState:t.offState;return console.log("getDefaultToggleStatus, defaultEffect is ",n),{id:e,state:r,effect:n}},Bl=(e,t,r)=>{const n=r.find(o=>o.id===e)||Fl(e,t);return n.state==="on"?(n.state="off",n.effect=t.offState):(n.state="on",n.effect=t.onState),r.filter(o=>o.id!==e).concat([n])},Wl=(e,t,r)=>e.map(n=>{const o=r.find(c=>c.statId===n.id),i=t.find(c=>n.id===c.id);if(!i)return console.error(`getUpdatedStats, invalid stat "${n.id}" requested`),n;if(!o||o.type==="incremental"&&o.value===0)return n;const a=o.type==="absolute"?o.value:n.value+o.value;return{...n,value:ii(a,0,i.max)}}),it=(e,t)=>{const r=t!==void 0?t:new Date().getTime();e.lastSaved=r},ui=oi({name:"petStore",initialState:kl,reducers:{pingStore:(e,t)=>{const r=t.payload.time;e.lastSaved=r},clearSave:()=>{window.localStorage.clear(),window.location.reload()},resetActivePet:e=>{console.log("resetting",e.activeIdx)},killActivePet:e=>{console.log("------ PET WAS KILLED ----------"),e.deltaPets[e.activeIdx]={...e.deltaPets[e.activeIdx],diedOn:new Date().getTime(),beingTracked:!1}},setActiveId:(e,t)=>{const r=e.pets.findIndex(n=>n.id===t.payload);r===-1?(console.log(`Cannot find pet with id "${t.payload}"`),e.activeIdx=0,it(e)):(e.activeIdx=r,it(e))},setActiveIdx:(e,t)=>{e.activeIdx=t.payload,it(e)},setDeltaPayload:(e,t)=>{const r=t.payload;e.deltaPets=r.pets},restoreInteractionFromSave:(e,t)=>{const r=t.payload;e.interactions.find(n=>n.id===r.id)||(console.log(`restoreInteractionFromSave ${r.id} with ${(r.endAt-new Date().getTime())/1e3} secs left`),e.interactions.push(r))},addNewInteractionEvent:(e,t)=>{var i,a;const{interaction:r,time:n}=t.payload;let o=!1;if(r.cooldown&&(o=!0,e.interactions.find(c=>c.id===r.id)||e.interactions.push({id:r.id,startAt:n,endAt:n+(r.cooldown||0)})),r.changeStats.length>0){o=!0;const c=e.pets[e.activeIdx],s=e.deltaPets.findIndex(l=>l.id===c.id);if(s>-1){const l=((i=e.deltaPets[s])==null?void 0:i.stats)||[],u=c.logic.stats;e.deltaPets[s]={...e.deltaPets[s],stats:Wl(l,u,r.changeStats)}}}if(r.changeToggle){o=!0;const c=e.pets[e.activeIdx],s=e.deltaPets.findIndex(l=>l.id===c.id);if(s>-1){const l=((a=e.deltaPets[s])==null?void 0:a.activeToggles)||[],u=Bl(r.id,r.changeToggle,l);e.deltaPets[s]={...e.deltaPets[s],activeToggles:u}}}o&&it(e,n)},removeInteractionEvent:(e,t)=>{const r=t.payload;e.interactions=e.interactions.filter(n=>n.id!==r)},createPet:(e,t)=>{Yn(`

createPet`,t.payload);const{petDefinition:r,initialState:n,isActive:o}=t.payload,i=e.pets.find(l=>l.id===r.id),a=new Date().getTime(),c=Tl(r,n||void 0);Yn(`>> createPet: ${r.id}, isActive? ${o}, beingTracked? ${n==null?void 0:n.beingTracked}`);const s={...r,logic:c,bornOn:(n==null?void 0:n.bornOn)||a,diedOn:(n==null?void 0:n.diedOn)||void 0,bgImage:r.bgImage?`${r.baseUrl}/${r.bgImage}`:null,bgColor:r.bgColor||null,theme:Rl(r.theme)};if(i?e.pets=e.pets.map(l=>l.id===r.id?s:l):e.pets.push(s),n)e.deltaPets.find(l=>l.id===(n==null?void 0:n.id))||(e.deltaPets=[...e.deltaPets,{...n,lastSaved:(n==null?void 0:n.lastSaved)||a}]);else{const l=e.deltaPets.findIndex(u=>u.id===r.id);l>-1&&(e.deltaPets=e.deltaPets.filter((u,f)=>f!==l))}}}}),{pingStore:Vl,createPet:fi,setActiveIdx:di,setActiveId:ql,clearSave:Hl,resetActivePet:kf,setDeltaPayload:Gl,addNewInteractionEvent:Kl,restoreInteractionFromSave:Yl,removeInteractionEvent:pi,killActivePet:Xl}=ui.actions,nn=e=>e.petStore.activeIdx,hi=e=>e.petStore.pets,Jl=e=>e.petStore.interactions,on=e=>e.petStore.deltaPets,Zl=e=>e.petStore.lastSaved,mi=T([Zl],e=>e),K=T([hi,nn],(e,t)=>e[t]||null),gi=T([K],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.stats)||[]}),Ql=T([K],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.statuses)||[]}),vi=T([K],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.interactions)||[]}),eu=T([K],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviorRules)||[]}),tu=T([K],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviors)||[]}),ru=T([K],e=>({imageUrl:e==null?void 0:e.bgImage,bgColor:e==null?void 0:e.bgColor})),Qe=T([on,K],(e,t)=>t&&e.find(r=>r.id===t.id)||null),nu=T([Qe],e=>e?e.stats||[]:[]),an=T([Qe],e=>e?e.activeToggles||[]:[]),sn=T([K,nn],(e,t)=>e?{idx:t,id:e.id,name:e.name,bio:e.bio}:null),yi=T([Jl],e=>e),ou=T([on,K],(e,t)=>{var r;return t&&((r=e.find(n=>n.id===t.id))==null?void 0:r.lastSaved)||0}),cn=T([gi,nu,an,ou,mi,jl],(e,t,r,n,o,i)=>yl(e,t,r,n,o,i)),ln=T([Qe,cn,gi,an,vi],(e,t,r,n,o)=>{if(e&&!e.beingTracked&&e.diedOn===void 0)return[];const i=s=>t.find(l=>l.id===s);let a=[];for(let s=0;s<r.length;s++){const l=i(r[s].id);if(l)for(let u=0;u<r[s].statEffects.length;u++){const f=wl(r[s].statEffects[u],l.value,l.max);f&&a.indexOf(f)===-1&&a.push(f)}}let c;return n.forEach(s=>{var u,f;const l=o.find(d=>d.id===s.id);l!=null&&l.changeToggle&&(s.state==="on"?c=((u=l.changeToggle.onState)==null?void 0:u.filter(d=>d.statusId).map(d=>d.statusId))||[]:c=((f=l.changeToggle.offState)==null?void 0:f.filter(d=>d.statusId).map(d=>d.statusId))||[]),a=a.concat(c.filter(d=>!a.includes(d)))}),a.map(s=>s).reverse()}),bi=T([ln,Ql],(e,t)=>e.map(r=>t.find(n=>n.id===r)).filter(r=>!!r)),wi=T([Qe,ln,eu,tu],(e,t,r,n)=>{if(!e)return null;const o=ai(r,t);return n.find(i=>i.id===o)||null}),iu=T([wi],e=>e&&e.type!=="dead"),au=T([vi,yi,ln],(e,t,r)=>e.map(n=>{const o=t.find(a=>a.id===n.id),i=bl(n.availability,r);return{id:n.id,label:n.label,startAt:(o==null?void 0:o.startAt)||0,endAt:(o==null?void 0:o.endAt)||0,enabled:i,visible:i||!n.hideWhenUnavailable,definition:n,cooldownStatus:o}})),su=T([hi,nn],(e,t)=>e.map((r,n)=>({name:r.name,id:r.id,isActive:n===t}))),cu=()=>{try{return JSON.parse(window.localStorage.getItem("browserbuddy")||"")}catch{return console.log('no localStorage entry found for "browserbuddy"'),null}},lu=()=>{try{return cu().pets}catch{return[]}};T([lu],e=>e);const uu=T([mi,cn,K,yi,on],(e,t,r,n,o)=>{if(!t)return null;if(!r)return Al;const i=o.findIndex(c=>c.id===r.id);let a=[];if(i>-1)a=o.map(c=>{if(c.id===r.id){const s=c.beingTracked?t:c.stats;return{id:r.id,stats:s,bornOn:c.bornOn,diedOn:c.diedOn,lastSaved:e,beingTracked:c.diedOn===void 0,activeToggles:c.activeToggles}}return{...c,beingTracked:!1}});else{const c=r.logic.interactions.filter(s=>!!s.changeToggle).map(s=>{var f,d,p;const l=((f=s.changeToggle)==null?void 0:f.defaultState)||"off",u=l==="on"?(d=s.changeToggle)==null?void 0:d.onState:(p=s.changeToggle)==null?void 0:p.offState;return{id:s.id,state:l,effect:u||[]}});a=o.concat([{id:r.id,stats:t,bornOn:r.bornOn,diedOn:void 0,lastSaved:e,beingTracked:!1,activeToggles:c}])}return{config:{activePet:(r==null?void 0:r.id)||"",lastSaved:e},interactions:n,pets:a}}),fu=ui.reducer,du=x.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  inset: 0rem;

  h2:not(:first-child) { 
    margin-top: 2rem;
  }

  > div {
    padding: 1rem 2rem;
    &:first-child {
      border-bottom: var(--border-width) dashed var(--theme-color-secondary);
      display: flex;
      align-items: center;

      h1 {
        display: inline;
        margin-left: 2rem;
        line-height: 4rem;
      }
    }
    &:nth-child(2) {
      flex: 1;
      overflow-y: auto;
    }
    &:nth-child(3) {
      border-top: var(--border-width) dashed var(--theme-color-secondary);
    }
  }

  hr {
    margin: 2rem 0;
    border: 0;
    border-top: var(--border-width) dashed var(--theme-color-secondary);
    color: var(--theme-color-secondary);
    width: 100%;
    display: block;
  }

  p,
  li {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  ol li {
    margin-left: 3rem;
  }
`,_r=x.button`
  font-size: 2rem;
  padding: 0.75rem 1rem 0.5rem 1rem;
  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius);

  text-align: center;
`,pu=x.div`
  text-align: center;

  ${_r} {
    font-size: 3rem;
    border-width: 0.75rem;
    border-radius: 3rem;
    padding: 1rem 2rem;
    font-family: var(--font-display);
  }

  p {
    margin-top: 2rem;
  }
`,hu=x.div`
  text-align: center;

  > a {
    font-size: 2rem;
    color: var(--theme-color-secondary);

    &:visited {
      color: var(--theme-color-secondary);
    }

    &:hover {
      color: var(--theme-color-highlight);
    }
  }
`,mu=()=>{const e=$e();return h.jsxs(du,{children:[h.jsxs("div",{children:[h.jsx(po,{to:"/",children:h.jsx(_r,{children:"Back"})}),h.jsx("h1",{children:"BrowserBuddy"})]}),h.jsxs("div",{children:[h.jsx("h2",{children:"What is this thing?"}),h.jsx("p",{children:"A simple webpage you can visit from time to time, to grow critters and try to keep em alive."}),h.jsx("h2",{children:"How does it work?"}),h.jsx("p",{children:`When you close the webpage, your pet will still keep eatin and shiddin' while you're away. The code isn't running in the background - whenever you load it back up, information stored in a cookie determines how long it has been since it was last open. "It has been 200 minutes since last opened, this pet gets 1 point of hungry every minute, so add 200 points of hungry to the pet. It's a little more complicated than that, but that's basically it.`}),h.jsx("br",{}),h.jsx("p",{children:'Only the currently selected pet will "age" when you leave. Pets not currently selected will be paused'}),h.jsx("br",{}),h.jsx("p",{children:`If you're a little tech savvy, and want to see the schema for a pet (it's very flexible!) open the web inspector and look for a "data.json" files for each pet. Hot Doug currently has the most complicated one.`}),h.jsx("h2",{children:"How to play"}),h.jsxs("ol",{children:[h.jsx("li",{children:"watch the meters, click interaction buttons (directly below the pet) to make things better"}),h.jsx("li",{children:'some of the meters can kill the pet if they get to either the minimum or maximum value. The pet description ("?" next to name) should tell you what to be careful about.'})]}),h.jsx("hr",{}),h.jsxs(pu,{children:[h.jsx(_r,{onClick:()=>{e(Hl())},children:"Clear Save"}),h.jsx("p",{children:"Erases data for all pets. Use it when you have bugs, cause man.. this thing is buggy"})]})]}),h.jsx(hu,{children:h.jsx("a",{href:"https://www.thomasyancey.com",target:"_blank",children:"© Tom Yancey 2023"})})]})};function Xn(e,t,r){const n=v.useRef();v.useEffect(()=>{const o=(r==null?void 0:r.current)||window;if(!(o&&o.addEventListener))return;n.current!==t&&(n.current=t);const i=a=>{n!=null&&n.current&&n.current(a)};return o.addEventListener(e,i),()=>{o.removeEventListener(e,i)}},[e,r,t])}function Si(e,t){const r=()=>{if(typeof window>"u")return t;try{const c=window.localStorage.getItem(e);return c?gu(c):t}catch(c){return console.warn(`Error reading localStorage key “${e}”:`,c),t}},[n,o]=v.useState(r),i=c=>{typeof window>"u"&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const s=c instanceof Function?c(n):c;window.localStorage.setItem(e,JSON.stringify(s)),o(s),window.dispatchEvent(new Event("local-storage"))}catch(s){console.warn(`Error setting localStorage key “${e}”:`,s)}};v.useEffect(()=>{o(r())},[]);const a=()=>{o(r())};return Xn("storage",a),Xn("local-storage",a),[n,i]}function gu(e){try{return e==="undefined"?void 0:JSON.parse(e??"")}catch{console.log("parsing error on",{value:e});return}}const vu=al({reducer:{petStore:fu,ui:Il}}),xi={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},yu=async(e,t,r)=>{const n=await bu(e),o=await Su(n);$u(o,t,r)},bu=async e=>(await wu(e).then(r=>r.pets.map(n=>({id:n.id,baseUrl:n.baseUrl})))).filter(r=>!!r),wu=async e=>{try{const t=await fetch(e,{mode:"cors"});if(!t.ok)return null;const r=await t.text();return JSON.parse(r)}catch(t){return console.error(`Error fetching or parsing manifest from ${e}`,t),null}},Su=async e=>{const t=[];return e.forEach(n=>t.push(xu(n))),(await Promise.all(t)).filter(n=>!!n)},xu=e=>new Promise(t=>t(Eu(e))),Eu=async e=>{const t=e.baseUrl+"/data.json";try{const r=await fetch(t,{mode:"cors"});if(!r.ok)return console.error(`bad response from ${t}`),null;const n=JSON.parse(await r.text());return n.baseUrl=e.baseUrl,n}catch(r){return console.error(`Error fetching or parsing pet manifest from ${t}`,r),null}},$u=(e,t,r)=>{const n=new Date().getTime();let o="";r.config.activePet&&(o=r.config.activePet),globalThis.rawPetsJson=e,e.forEach(i=>{const a=(r==null?void 0:r.pets.find(c=>c.id===i.id))||null;!o&&a&&r.config.activePet===a.id&&(o=a.id),t(fi({isActive:o===(a==null?void 0:a.id),petDefinition:i,initialState:a}))}),t(o?ql(o):di(0)),r.interactions.filter(i=>i.endAt>n).forEach(i=>{t(a=>{a(Yl(i)),window.setTimeout(()=>{a(pi(i.id))},i.endAt-n)})})},Cu=()=>{const e=$e(),[t,r]=v.useState(!1),[n]=Si("browserbuddy",xi);return v.useEffect(()=>{t||(r(!0),window.location.search.indexOf("debug")>-1&&e(Ol(!0)),yu("data/pet-manifest.json",e,n))},[t,n,r,e]),null};function Pu(e,t){const r=v.useRef(e);v.useLayoutEffect(()=>{r.current=e},[e]),v.useEffect(()=>{if(!t&&t!==0)return;const n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[t])}const Ou=2e3,ju=()=>{const e=$e();return Pu(()=>{const t=new Date().getTime();e(Vl({time:t}))},Ou),null};let Jn=0;const Iu=()=>{const[,e]=Si("browserbuddy",xi),t=U(uu),r=$e();return v.useEffect(()=>{t&&t.config.lastSaved>-1&&Jn!==t.config.lastSaved&&(Jn=t.config.lastSaved,e(()=>t),r(Gl(t)))},[t,r,e]),null},Au=()=>h.jsxs(h.Fragment,{children:[h.jsx(Iu,{}),h.jsx(Cu,{}),h.jsx(ju,{})]}),ku=x.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`,Ru=x.div`
  background-color:var(--theme-color-primary);
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`,Tu=x.div`
  background-color:var(--theme-color-secondary);
  position:absolute;
  height:100%;
  left:0;

  &.full{
    width:100% !important;
    background-color: var(--theme-color-secondary);
  }
  z-index:1;
`,_u=({startProgress:e,duration:t})=>{const[r,n]=v.useState(!1);return v.useEffect(()=>{r||window.setTimeout(()=>n(!0),1)},[r,n]),h.jsxs(ku,{children:[h.jsx(Tu,{className:r?"full":"",style:{transition:`all ${t}s linear`,width:`${e*100}%`}}),h.jsx(Ru,{})]})},Ei=x.div`
  padding: 1rem 0.5rem;
  p {
    font-family: var(--font-display);
  }

  position: relative;
  overflow: hidden;
  cursor: pointer;

  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius);

  background-color: var(--theme-color-secondary);
  color: var(--theme-color-primary);

  ${e=>e.$toggleStyle==="on"&&Z`
      background-color: var(--theme-color-secondary);
      color: var(--theme-color-primary);
    `}
  ${e=>e.$toggleStyle==="off"&&Z`
      background-color: var(--theme-color-primary);
      color: var(--theme-color-secondary);
    `}
`,Mu=x(Ei)`
  background-color: var(--theme-color-secondary);
  color: var(--theme-color-primary);

  cursor: not-allowed;
`,Zn=x.li`
  text-align: center;

  ${e=>!e.$isEnabled&&Z`
      opacity: 0.5;
      pointer-events: none;
    `}
`,Qn=x.p`
  display: block;
  position: relative;
  z-index: 2;
  font-size: 2rem;
`,Lu=({cooldownStatus:e,isEnabled:t,interaction:r,toggleState:n,onClickHandler:o})=>{let i=r.label;const a=n?n.state:void 0;if(n&&(i=`${i} (status: ${n.state})`),e){const c=e.endAt-e.startAt,s=(c-(e.endAt-new Date().getTime()))/c,l=(e.endAt-new Date().getTime())/1e3;return h.jsx(Zn,{$isEnabled:t,children:h.jsxs(Mu,{$toggleStyle:a,children:[h.jsx(Qn,{children:i}),h.jsx(_u,{startProgress:s,duration:l})]})})}else return h.jsx(Zn,{$isEnabled:t,onClick:()=>o&&o(),children:h.jsx(Ei,{$toggleStyle:a,children:h.jsx(Qn,{children:`${i}`})})})},Nu=x.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  > li {
    flex: 1 auto;
    list-style: none;
  }
`,Du=()=>{const e=U(au,ye),t=U(an,ye),r=U(iu),n=$e(),o=i=>{const a=new Date().getTime();n(c=>{c(Kl({interaction:i,time:a})),i.cooldown&&window.setTimeout(()=>{c(pi(i.id))},i.cooldown)})};return h.jsx(Nu,{children:e.filter(i=>i.visible).map(i=>h.jsx(Lu,{cooldownStatus:i.cooldownStatus,isEnabled:r?i.enabled:!1,interaction:i.definition,toggleState:t.find(a=>a.id===i.id),onClickHandler:()=>o(i.definition)},i.id))})},zu=x.div``,Uu=x.p`
  font-size: 1.5rem;
  font-weight: bold;
`,Fu=x.div`
  margin-top: 0.25rem;
  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius);
  overflow: hidden;
`,Bu=x.div`
  position: relative;
  height: 4rem;
  width: calc(100% - 5.7rem);
`,Wu=x.div`
  position: absolute;
  /* top: 0; */
  top: 0.3rem;
  left: 0.3rem;
  bottom: 0.3rem;
  z-index: 1;
  transition: width 0.3s ease-in-out, background-color 0.5s ease-in-out;
  background-color: var(--theme-color-secondary);
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 0.5rem;
  border-radius: 0.5rem;

  span {
    color: var(--theme-color-primary);
    font-size: 2rem;
    font-family: var(--font-display);

    /* tiny % symbol */
    &:nth-child(2) {
      font-size: 1rem;
      margin-left: 0.25rem;
      margin-top: 0.75rem;
    }
  }
`,Vu=x.div`
  position: absolute;
  inset: 0;
  background-color: var(--theme-color-primary);
  right: -4rem;
`,qu=({label:e,displayType:t="value",max:r,value:n})=>{const o=Math.round(n/r*1e3)/10,i=v.useMemo(()=>t==="percent"?h.jsxs(h.Fragment,{children:[h.jsx("span",{children:o}),h.jsx("span",{children:"%"})]}):t==="roundedValue"?h.jsx(h.Fragment,{children:h.jsx("span",{children:Math.round(n)})}):h.jsx(h.Fragment,{children:h.jsx("span",{children:n})}),[t,o,n]);return e?h.jsxs(zu,{children:[h.jsx(Uu,{children:e}),h.jsx(Fu,{children:h.jsxs(Bu,{children:[h.jsx(Wu,{style:{width:`calc(${o}% + 5rem)`},children:i}),h.jsx(Vu,{})]})})]}):null},Hu=x.div`
  position: absolute;
  inset: 0;
  padding: 1rem;

  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius-outer);

  overflow: hidden;

  h3 {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  hr {
    /* margin: 1rem 0; */
  }

  display: flex;
  flex-direction: column;
`,Gu=x.div`
  &:after {
    content: '';
    display: block;
    border-top: var(--border-width) dashed var(--theme-color-secondary);
    width: 100%;
    margin-top: 1rem;
  }
`,Ku=x.div`
  margin-top: 1rem;
  overflow-y: auto;
  h3 {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }
`,Yu=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-right: 1rem;
  > div {
    /* flex: 1; */
    width: calc(50% - 0.5rem);
  }
`,Xu=()=>{const e=U(sn),t=U(cn)||[];return e?h.jsxs(Hu,{children:[h.jsx(Gu,{children:h.jsx(Du,{})}),h.jsxs(Ku,{children:[h.jsx("h3",{children:"stats"}),h.jsx(Yu,{children:t.map((r,n)=>h.jsx(qu,{label:r.label,max:r.max,value:r.value,displayType:r.displayType},n))})]})]}):null},Ju=x.div`
  position: absolute;
  right: 0;
  bottom: 1rem;
  z-index: 1;
`,Zu=x.ul`
  max-width: 14rem;
  text-align: right;
`,Qu=x.li`
  /* display:inline-block; */
  white-space: nowrap;
  text-align: right;
  z-index: 1;

  list-style: none;
  margin-top: -0.5rem;
  margin-right: -1rem;
  font-weight: bold;
  font-size: 2rem;
  padding: 0.5rem 1rem;

  position: absolute;
  bottom: 0;
  right: 0;

  /* transition: transform .2s ease-in-out, bottom .2s ease-out; */
  -webkit-transition: all 0.2s cubic-bezier(0.72, 1.79, 0.4, 0.8);
  transition: all 0.2s cubic-bezier(0.72, 1.79, 0.4, 0.8);
  ${e=>Z`
    border-radius: var(--border-radius);
    border: var(--border-width) solid;
    border-color: var(${e.$bubbleColors[1]});
    color: var(${e.$bubbleColors[2]});
    background-color: var(${e.$bubbleColors[0]});
  `}
`,ef=()=>["--theme-color-primary","--theme-color-secondary","--theme-color-secondary"],tf=()=>-5+Math.random()*5,rf=e=>e*35,nf=()=>{const t=U(bi,ye).filter(r=>r.label);return h.jsx(Ju,{children:h.jsx(Zu,{children:t.map((r,n)=>h.jsx(Qu,{id:r.id,$bubbleColors:ef(),style:{bottom:rf(n),transform:`rotate(${tf()}deg)`},children:r.label},r.id))})})},of=x.div`
  position: absolute;
  inset: 0;
  color: green;
  overflow: hidden;
  background-color: var(--theme-color-primary);
  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius-outer);
`,Mr=x.div`
  display: block;
  padding: 3rem;
  text-align: center;

  background-color: var(--theme-color-primary);
  border: 1rem dashed var(--theme-color-secondary);
  border-radius: 3rem;
  color: var(--theme-color-secondary);

  transform: rotate(2deg) translateY(200%);
  opacity: 0;
  transition: transform 0.3s ease-out, opacity 0.2s, background-color 0.3s;

  font-family: var(--font-display);

  span {
    font-size: 6rem;
  }

  &:before {
    content: 'WASTED';
    font-size: 6rem;
  }

  &:hover {
    background-color: var(--theme-color-secondary);
    color: var(--theme-color-primary);

    &:before {
      content: 'RESET?';
    }
  }
`,af=x.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;

  ${Mr} {
    transform: rotate(7deg) translateY(100%);
  }

  ${e=>e.$isActive&&Z`
      pointer-events: all;

      ${Mr} {
        transform: rotate(-7deg) translateY(0%);
        opacity: 1;
        cursor: pointer;
      }
    `}
`,sf=x.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  text-align: center;

  position: absolute;
  bottom: 0;
  left: 0;
`,cf=x.p`
  font-size: 2rem;
  opacity: 0.5;

  position: absolute;
  top: 1rem;
  right: 1rem;
`,eo=x.div`
  opacity: 0;
  transition: opacity 0.5s;

  ${e=>e.$isActive&&Z`
      opacity: 1;
    `}
`,mr=x.div`
  position: absolute;
  inset: 0;
  /* z-index: 9; */

  ${e=>e.$bgImageUrl&&Z`
      background-size: cover;
      background-position: center;
      background-image: url(${e.$bgImageUrl});
    `}
`,lf=e=>{if(e){const t=document.documentElement;Object.keys(e).forEach(r=>{t.style.setProperty(`--theme-${r}`,e[r])})}},uf=()=>{const e=$e(),t=U(K,ye),r=U(wi,ye),n=U(bi,ye),{imageUrl:o,bgColor:i}=U(ru,ye),a=n.filter(u=>u.bgImage).map(u=>u.bgImage),c=n.filter(u=>u.fgImage).map(u=>u.fgImage);v.useEffect(()=>{(r==null?void 0:r.type)==="dead"&&e(Xl())},[r==null?void 0:r.type,e]),v.useEffect(()=>{t&&lf(t.theme)},[t]);const s=v.useCallback(()=>{const u=window.rawPetsJson.find(f=>f.id===t.id);console.log("resetting",u),e(fi({isActive:!0,petDefinition:u,initialState:null}))},[e,t==null?void 0:t.id]);if(!r)return null;const l={backgroundImage:`url(${r.imageUrl})`,backgroundColor:i||"initial",backgroundPosition:`${r.position}`,left:`${r.offsetX}px`,bottom:`${r.offsetY}px`};return h.jsxs(h.Fragment,{children:[h.jsxs(of,{children:[h.jsx(mr,{$bgImageUrl:o}),h.jsx(eo,{$isActive:a.length>0,children:a.map((u,f)=>h.jsx(mr,{$bgImageUrl:u},f))}),h.jsx(cf,{children:`behavior: ${r.id}`}),h.jsx(sf,{style:l}),h.jsx(eo,{$isActive:c.length>0,children:c.map((u,f)=>h.jsx(mr,{$bgImageUrl:u},f))})]}),h.jsx(af,{$isActive:r.type==="dead",children:h.jsx(Mr,{onClick:()=>s()})}),h.jsx(nf,{})]})},ff=x.div`
  position: relative;
  min-height: 6rem;
  /* for animation, should accomodate both born on and died on dates */
  max-height: 8rem;

  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius);

  transition: max-height 0.3s ease-out;

  &.bio-visible {
    max-height: 15rem;
  }
`,df=x.button`
  position: absolute;
  right: 1rem;
  top: 0.75rem;
  bottom: 0.75rem;
  padding: 0rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-display);
  font-size: 2rem;

  .bio-visible & {
    background-color: var(--theme-color-secondary);
    color: var(--theme-color-primary);
    border-color: var(--theme-color-primary);

    &:hover {
      background-color: var(--theme-color-primary);
      color: var(--theme-color-secondary);
    }
  }
`,pf=x.div`
  padding: 0.5rem 4rem 0.5rem 1.5rem;
`,hf=x.div`
  background-color: var(--theme-color-secondary);
  color: var(--theme-color-primary);
  opacity: 0;

  padding: 1.25rem 7rem 1.25rem 1.5rem;

  line-height: 1.75rem;

  span:first-child {
    font-family: var(--font-display);
    font-size: 2rem;
  }
  span:last-child {
    margin-left: 0.5rem;
  }

  .bio-visible & {
    opacity: 1;
  }
`,mf=x.h4`
  text-align: left;
  display: inline-block;
  flex: 1;
`,to=e=>e?new Date(e).toLocaleString("en-us"):null,gf=()=>{const e=U(sn),t=U(Qe),[r,n]=v.useState(!1);return e?h.jsxs(ff,{className:r?"bio-visible":"",children:[r?h.jsxs(hf,{children:[h.jsx("span",{children:e.name}),h.jsx("span",{children:e.bio})]}):h.jsxs(pf,{children:[h.jsx(mf,{children:e.name}),(t==null?void 0:t.bornOn)&&h.jsx("p",{children:`born on: ${to(t.bornOn)}`}),(t==null?void 0:t.diedOn)&&h.jsx("p",{children:`died on: ${to(t.diedOn)}`})]}),h.jsx(df,{onClick:()=>n(o=>!o),children:r?"X":"?"})]}):null},vf=x.header`
  position: relative;

  display: grid;
  grid-template-columns: 5rem auto;
  grid-template-rows: 2.5rem auto;
  gap: 1rem;
`,yf=x.div`
  grid-column: 1;
  grid-row: 1 / span 2;

  > div {
    height: 100%;
    width: 100%;

    border: var(--border-width) solid var(--theme-color-secondary);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
`,bf=x.div`
  grid-column: 2;
  grid-row: 1;

  display: flex;
  flex-direction: row;
  height: 100%;

  > ul {
    flex: 1;
  }

  h1 {
    font-size: 2rem;
    text-align: right;
    margin-right: 1rem;
    color: var(--theme-color-secondary);
    display: inline-block;
  }

  a {
    &:hover {
      h1 {
        color: var(--theme-color-highlight);
      }
    }
  }
`,wf=x.div`
  grid-column: 2;
  grid-row: 2;
`,Sf=x.li`
  display: inline-block;
  margin-right: 1rem;
  border: var(--border-width) solid var(--theme-color-secondary);
  border-radius: var(--border-radius);
  padding: 0.25rem 0.75rem;
  min-width: 3rem;
  font-size: 1.5rem;
  text-align: center;

  transition: color 0.3s ease, background-color 0.3s ease;

  cursor: pointer;

  ${e=>e.$isActive&&Z`
      background-color: var(--theme-color-secondary);
      color: var(--theme-color-primary);
    `}

  &:hover {
    background-color: var(--theme-color-secondary);
    color: var(--theme-color-primary);
  }
`,xf=x.ul`
  list-style: none;
`,Ef=()=>{const e=U(sn),t=U(su),r=$e(),n=(e==null?void 0:e.idx)||0;return h.jsxs(vf,{children:[h.jsx(yf,{children:h.jsx("div",{children:n+1})}),h.jsxs(bf,{children:[h.jsx(xf,{children:t.map((o,i)=>h.jsx(Sf,{$isActive:i===n,onClick:()=>r(di(i)),children:i+1},i))}),h.jsx(po,{to:"/about",children:h.jsx("h1",{children:"BrowserBuddy"})})]}),h.jsx(wf,{children:h.jsx(gf,{})})]})},$f=x.div`
  position: absolute;
  inset: 0;
  margin: auto auto;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  background-color: var(--theme-color-primary);
  transition: background-color .5s ease, color .5s ease;
`,Cf=x.div`
  flex: 1;
  position: relative;
`,Pf=x.div`
  flex: 0 0 33%;
  position: relative;
`,Of=()=>h.jsxs($f,{children:[h.jsx(Au,{}),h.jsx(Ef,{}),h.jsx(Cf,{children:h.jsx(uf,{})}),h.jsx(Pf,{children:h.jsx(Xu,{})})]}),jf=()=>h.jsxs(ba,{children:[h.jsx(vr,{path:"/about",element:h.jsx(mu,{})}),h.jsx(vr,{path:"/",element:h.jsx(Of,{})})]});const If=wc`
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
    --color-white: #fef8dd;
    --color-blue: #1fb9f3;

    font-size: 70%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Cabin', sans-serif;

    --theme-color-primary: #0f0e0b;
    --theme-color-secondary: #fef8dd;
    --theme-color-highlight: #FFFFFF;
  
    --border-radius: 1rem;
    --border-radius-outer: 1.5rem;
    --border-width: .3rem;

    --font-display: 'Paytone One', 'sans-serif';
    --font-copy: 'Cabin', sans-serif;
    
    background-color: var(--theme-color-primary);
    color: var(--theme-color-secondary);
  }

  #root{
    margin:0 auto;
    /* for chrome extension */
    min-width:var(--val-min-width);
    min-height:var(--val-min-height);
  }
  h1, h2, h3, h4, h5, h6{
    font-family: var(--font-display);
  }
  a, p, span {
    font-family: var(--font-copy);
  }
  h1{
    font-size: 4rem;
  }
  h2{
    font-size: 3rem;
  }
  h3{
    font-size: 2.5rem;
  }
  h4{
    font-size: 2rem;
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

  button {
    background-color: var(--theme-color-primary);
    color: var(--theme-color-secondary);

    border: var(--border-width) solid var(--theme-color-secondary);
    border-radius: var(--border-radius);

    cursor: pointer;

    &:hover{
      background-color: var(--theme-color-secondary);
      color: var(--theme-color-primary);
    }
  }
`;Ai.createRoot(document.getElementById("root")).render(h.jsx(X.StrictMode,{children:h.jsx(gs,{store:vu,children:h.jsxs(Ca,{children:[h.jsx(jf,{}),h.jsx(If,{})]})})}));
