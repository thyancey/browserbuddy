import{r as y,a as Pi,b as Oi,R as Y,j as g,c as Ri}from"./client-8837fce7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qe(){return qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qe.apply(this,arguments)}var se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(se||(se={}));const cn="popstate";function ji(e){e===void 0&&(e={});function t(o,i){let{pathname:a="/",search:s="",hash:u=""}=we(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),yr("",{pathname:a,search:s,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(o,i){let a=o.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let u=o.location.href,c=u.indexOf("#");s=c===-1?u:u.slice(0,c)}return s+"#"+(typeof i=="string"?i:lt(i))}function n(o,i){Ct(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ii(t,r,n,e)}function N(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ct(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ai(){return Math.random().toString(36).substr(2,8)}function un(e,t){return{usr:e.state,key:e.key,idx:t}}function yr(e,t,r,n){return r===void 0&&(r=null),qe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?we(t):t,{state:r,key:t&&t.key||n||Ai()})}function lt(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function we(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ii(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,s=se.Pop,u=null,c=l();c==null&&(c=0,a.replaceState(qe({},a.state,{idx:c}),""));function l(){return(a.state||{idx:null}).idx}function f(){s=se.Pop;let b=l(),S=b==null?null:b-c;c=b,u&&u({action:s,location:m.location,delta:S})}function d(b,S){s=se.Push;let v=yr(m.location,b,S);r&&r(v,b),c=l()+1;let w=un(v,c),$=m.createHref(v);try{a.pushState(w,"",$)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign($)}i&&u&&u({action:s,location:m.location,delta:1})}function p(b,S){s=se.Replace;let v=yr(m.location,b,S);r&&r(v,b),c=l();let w=un(v,c),$=m.createHref(v);a.replaceState(w,"",$),i&&u&&u({action:s,location:m.location,delta:0})}function h(b){let S=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof b=="string"?b:lt(b);return N(S,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,S)}let m={get action(){return s},get location(){return e(o,a)},listen(b){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(cn,f),u=b,()=>{o.removeEventListener(cn,f),u=null}},createHref(b){return t(o,b)},createURL:h,encodeLocation(b){let S=h(b);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:d,replace:p,go(b){return a.go(b)}};return m}var ln;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ln||(ln={}));function ki(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?we(t):t,o=Mr(n.pathname||"/",r);if(o==null)return null;let i=to(e);Ti(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Fi(i[s],qi(o));return a}function to(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(N(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let c=ce([n,u.relativePath]),l=r.concat(u);i.children&&i.children.length>0&&(N(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),to(i.children,t,l,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Ui(c,i.index),routesMeta:l})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let u of ro(i.path))o(i,a,u)}),t}function ro(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=ro(n.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Ti(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Bi(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const _i=/^:\w+$/,Li=3,Ni=2,Mi=1,Di=10,zi=-2,fn=e=>e==="*";function Ui(e,t){let r=e.split("/"),n=r.length;return r.some(fn)&&(n+=zi),t&&(n+=Ni),r.filter(o=>!fn(o)).reduce((o,i)=>o+(_i.test(i)?Li:i===""?Mi:Di),n)}function Bi(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Fi(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",l=Wi({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!l)return null;Object.assign(n,l.params);let f=s.route;i.push({params:n,pathname:ce([o,l.pathname]),pathnameBase:Yi(ce([o,l.pathnameBase])),route:f}),l.pathnameBase!=="/"&&(o=ce([o,l.pathnameBase]))}return i}function Wi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Vi(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((c,l,f)=>{if(l==="*"){let d=s[f]||"";a=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return c[l]=Gi(s[f]||"",l),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Vi(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Ct(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(n.push(s),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function qi(e){try{return decodeURI(e)}catch(t){return Ct(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gi(e,t){try{return decodeURIComponent(e)}catch(r){return Ct(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Mr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Hi(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?we(e):e;return{pathname:r?r.startsWith("/")?r:Ki(r,t):t,search:Xi(n),hash:Ji(o)}}function Ki(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function or(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function no(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function oo(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=we(e):(o=qe({},e),N(!o.pathname||!o.pathname.includes("?"),or("?","pathname","search",o)),N(!o.pathname||!o.pathname.includes("#"),or("#","pathname","hash",o)),N(!o.search||!o.search.includes("#"),or("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(n||a==null)s=r;else{let f=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}s=f>=0?t[f]:"/"}let u=Hi(o,s),c=a&&a!=="/"&&a.endsWith("/"),l=(i||a===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||l)&&(u.pathname+="/"),u}const ce=e=>e.join("/").replace(/\/\/+/g,"/"),Yi=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xi=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ji=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zi(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const io=["post","put","patch","delete"];new Set(io);const Qi=["get",...io];new Set(Qi);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ft(){return ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ft.apply(this,arguments)}const Dr=y.createContext(null),ea=y.createContext(null),Ne=y.createContext(null),Pt=y.createContext(null),xe=y.createContext({outlet:null,matches:[],isDataRoute:!1}),ao=y.createContext(null);function ta(e,t){let{relative:r}=t===void 0?{}:t;Ze()||N(!1);let{basename:n,navigator:o}=y.useContext(Ne),{hash:i,pathname:a,search:s}=co(e,{relative:r}),u=a;return n!=="/"&&(u=a==="/"?n:ce([n,a])),o.createHref({pathname:u,search:s,hash:i})}function Ze(){return y.useContext(Pt)!=null}function Ot(){return Ze()||N(!1),y.useContext(Pt).location}function so(e){y.useContext(Ne).static||y.useLayoutEffect(e)}function ra(){let{isDataRoute:e}=y.useContext(xe);return e?ma():na()}function na(){Ze()||N(!1);let e=y.useContext(Dr),{basename:t,navigator:r}=y.useContext(Ne),{matches:n}=y.useContext(xe),{pathname:o}=Ot(),i=JSON.stringify(no(n).map(u=>u.pathnameBase)),a=y.useRef(!1);return so(()=>{a.current=!0}),y.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let l=oo(u,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:ce([t,l.pathname])),(c.replace?r.replace:r.push)(l,c.state,c)},[t,r,i,o,e])}function co(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=y.useContext(xe),{pathname:o}=Ot(),i=JSON.stringify(no(n).map(a=>a.pathnameBase));return y.useMemo(()=>oo(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function oa(e,t){return ia(e,t)}function ia(e,t,r){Ze()||N(!1);let{navigator:n}=y.useContext(Ne),{matches:o}=y.useContext(xe),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Ot(),c;if(t){var l;let m=typeof t=="string"?we(t):t;s==="/"||(l=m.pathname)!=null&&l.startsWith(s)||N(!1),c=m}else c=u;let f=c.pathname||"/",d=s==="/"?f:f.slice(s.length)||"/",p=ki(e,{pathname:d}),h=la(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:ce([s,n.encodeLocation?n.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:ce([s,n.encodeLocation?n.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,r);return t&&h?y.createElement(Pt.Provider,{value:{location:ft({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:se.Pop}},h):h}function aa(){let e=ha(),t=Zi(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:o},r):null,i)}const sa=y.createElement(aa,null);class ca extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?y.createElement(xe.Provider,{value:this.props.routeContext},y.createElement(ao.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ua(e){let{routeContext:t,match:r,children:n}=e,o=y.useContext(Dr);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(xe.Provider,{value:t},n)}function la(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let i=e,a=(n=r)==null?void 0:n.errors;if(a!=null){let s=i.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));s>=0||N(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,u,c)=>{let l=u.route.id?a==null?void 0:a[u.route.id]:null,f=null;r&&(f=u.route.errorElement||sa);let d=t.concat(i.slice(0,c+1)),p=()=>{let h;return l?h=f:u.route.Component?h=y.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=s,y.createElement(ua,{match:u,routeContext:{outlet:s,matches:d,isDataRoute:r!=null},children:h})};return r&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?y.createElement(ca,{location:r.location,revalidation:r.revalidation,component:f,error:l,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var uo=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uo||{}),dt=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dt||{});function fa(e){let t=y.useContext(Dr);return t||N(!1),t}function da(e){let t=y.useContext(ea);return t||N(!1),t}function pa(e){let t=y.useContext(xe);return t||N(!1),t}function lo(e){let t=pa(),r=t.matches[t.matches.length-1];return r.route.id||N(!1),r.route.id}function ha(){var e;let t=y.useContext(ao),r=da(dt.UseRouteError),n=lo(dt.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function ma(){let{router:e}=fa(uo.UseNavigateStable),t=lo(dt.UseNavigateStable),r=y.useRef(!1);return so(()=>{r.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ft({fromRouteId:t},i)))},[e,t])}function br(e){N(!1)}function ga(e){let{basename:t="/",children:r=null,location:n,navigationType:o=se.Pop,navigator:i,static:a=!1}=e;Ze()&&N(!1);let s=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof n=="string"&&(n=we(n));let{pathname:c="/",search:l="",hash:f="",state:d=null,key:p="default"}=n,h=y.useMemo(()=>{let m=Mr(c,s);return m==null?null:{location:{pathname:m,search:l,hash:f,state:d,key:p},navigationType:o}},[s,c,l,f,d,p,o]);return h==null?null:y.createElement(Ne.Provider,{value:u},y.createElement(Pt.Provider,{children:r,value:h}))}function va(e){let{children:t,location:r}=e;return oa(Sr(t),r)}new Promise(()=>{});function Sr(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(n,o)=>{if(!y.isValidElement(n))return;let i=[...t,o];if(n.type===y.Fragment){r.push.apply(r,Sr(n.props.children,i));return}n.type!==br&&N(!1),!n.props.index||!n.props.children||N(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=Sr(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wr.apply(this,arguments)}function ya(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function ba(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sa(e,t){return e.button===0&&(!t||t==="_self")&&!ba(e)}const wa=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],xa="startTransition",dn=Pi[xa];function $a(e){let{basename:t,children:r,future:n,window:o}=e,i=y.useRef();i.current==null&&(i.current=ji({window:o,v5Compat:!0}));let a=i.current,[s,u]=y.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},l=y.useCallback(f=>{c&&dn?dn(()=>u(f)):u(f)},[u,c]);return y.useLayoutEffect(()=>a.listen(l),[a,l]),y.createElement(ga,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:a})}const Ea=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ca=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fo=y.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:s,target:u,to:c,preventScrollReset:l}=t,f=ya(t,wa),{basename:d}=y.useContext(Ne),p,h=!1;if(typeof c=="string"&&Ca.test(c)&&(p=c,Ea))try{let v=new URL(window.location.href),w=c.startsWith("//")?new URL(v.protocol+c):new URL(c),$=Mr(w.pathname,d);w.origin===v.origin&&$!=null?c=$+w.search+w.hash:h=!0}catch{}let m=ta(c,{relative:o}),b=Pa(c,{replace:a,state:s,target:u,preventScrollReset:l,relative:o});function S(v){n&&n(v),v.defaultPrevented||b(v)}return y.createElement("a",wr({},f,{href:p||m,onClick:h||i?n:S,ref:r,target:u}))});var pn;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(pn||(pn={}));var hn;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hn||(hn={}));function Pa(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a}=t===void 0?{}:t,s=ra(),u=Ot(),c=co(e,{relative:a});return y.useCallback(l=>{if(Sa(l,r)){l.preventDefault();let f=n!==void 0?n:lt(u)===lt(c);s(e,{replace:f,state:o,preventScrollReset:i,relative:a})}},[u,s,c,n,o,r,e,i,a])}var po={exports:{}},ho={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=y;function Oa(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ra=typeof Object.is=="function"?Object.is:Oa,ja=je.useState,Aa=je.useEffect,Ia=je.useLayoutEffect,ka=je.useDebugValue;function Ta(e,t){var r=t(),n=ja({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return Ia(function(){o.value=r,o.getSnapshot=t,ir(o)&&i({inst:o})},[e,r,t]),Aa(function(){return ir(o)&&i({inst:o}),e(function(){ir(o)&&i({inst:o})})},[e]),ka(r),r}function ir(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ra(e,r)}catch{return!0}}function _a(e,t){return t()}var La=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_a:Ta;ho.useSyncExternalStore=je.useSyncExternalStore!==void 0?je.useSyncExternalStore:La;po.exports=ho;var Na=po.exports,mo={exports:{}},go={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rt=y,Ma=Na;function Da(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var za=typeof Object.is=="function"?Object.is:Da,Ua=Ma.useSyncExternalStore,Ba=Rt.useRef,Fa=Rt.useEffect,Wa=Rt.useMemo,Va=Rt.useDebugValue;go.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=Ba(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Wa(function(){function u(p){if(!c){if(c=!0,l=p,p=n(p),o!==void 0&&a.hasValue){var h=a.value;if(o(h,p))return f=h}return f=p}if(h=f,za(l,p))return h;var m=n(p);return o!==void 0&&o(h,m)?h:(l=p,f=m)}var c=!1,l,f,d=r===void 0?null:r;return[function(){return u(t())},d===null?void 0:function(){return u(d())}]},[t,r,n,o]);var s=Ua(e,i[0],i[1]);return Fa(function(){a.hasValue=!0,a.value=s},[s]),Va(s),s};mo.exports=go;var qa=mo.exports;function Ga(e){e()}let vo=Ga;const Ha=e=>vo=e,Ka=()=>vo,mn=Symbol.for("react-redux-context"),gn=typeof globalThis<"u"?globalThis:{};function Ya(){var e;if(!y.createContext)return{};const t=(e=gn[mn])!=null?e:gn[mn]=new Map;let r=t.get(y.createContext);return r||(r=y.createContext(null),t.set(y.createContext,r)),r}const de=Ya();function zr(e=de){return function(){return y.useContext(e)}}const yo=zr(),Xa=()=>{throw new Error("uSES not initialized!")};let bo=Xa;const Ja=e=>{bo=e},Za=(e,t)=>e===t;function Qa(e=de){const t=e===de?yo:zr(e);return function(n,o={}){const{equalityFn:i=Za,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:u,subscription:c,getServerState:l,stabilityCheck:f,noopCheck:d}=t();y.useRef(!0);const p=y.useCallback({[n.name](m){return n(m)}}[n.name],[n,f,a]),h=bo(c.addNestedSub,u.getState,l||u.getState,p,i);return y.useDebugValue(h),h}}const Q=Qa();var So={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D=typeof Symbol=="function"&&Symbol.for,Ur=D?Symbol.for("react.element"):60103,Br=D?Symbol.for("react.portal"):60106,jt=D?Symbol.for("react.fragment"):60107,At=D?Symbol.for("react.strict_mode"):60108,It=D?Symbol.for("react.profiler"):60114,kt=D?Symbol.for("react.provider"):60109,Tt=D?Symbol.for("react.context"):60110,Fr=D?Symbol.for("react.async_mode"):60111,_t=D?Symbol.for("react.concurrent_mode"):60111,Lt=D?Symbol.for("react.forward_ref"):60112,Nt=D?Symbol.for("react.suspense"):60113,es=D?Symbol.for("react.suspense_list"):60120,Mt=D?Symbol.for("react.memo"):60115,Dt=D?Symbol.for("react.lazy"):60116,ts=D?Symbol.for("react.block"):60121,rs=D?Symbol.for("react.fundamental"):60117,ns=D?Symbol.for("react.responder"):60118,os=D?Symbol.for("react.scope"):60119;function W(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ur:switch(e=e.type,e){case Fr:case _t:case jt:case It:case At:case Nt:return e;default:switch(e=e&&e.$$typeof,e){case Tt:case Lt:case Dt:case Mt:case kt:return e;default:return t}}case Br:return t}}}function wo(e){return W(e)===_t}A.AsyncMode=Fr;A.ConcurrentMode=_t;A.ContextConsumer=Tt;A.ContextProvider=kt;A.Element=Ur;A.ForwardRef=Lt;A.Fragment=jt;A.Lazy=Dt;A.Memo=Mt;A.Portal=Br;A.Profiler=It;A.StrictMode=At;A.Suspense=Nt;A.isAsyncMode=function(e){return wo(e)||W(e)===Fr};A.isConcurrentMode=wo;A.isContextConsumer=function(e){return W(e)===Tt};A.isContextProvider=function(e){return W(e)===kt};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur};A.isForwardRef=function(e){return W(e)===Lt};A.isFragment=function(e){return W(e)===jt};A.isLazy=function(e){return W(e)===Dt};A.isMemo=function(e){return W(e)===Mt};A.isPortal=function(e){return W(e)===Br};A.isProfiler=function(e){return W(e)===It};A.isStrictMode=function(e){return W(e)===At};A.isSuspense=function(e){return W(e)===Nt};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===jt||e===_t||e===It||e===At||e===Nt||e===es||typeof e=="object"&&e!==null&&(e.$$typeof===Dt||e.$$typeof===Mt||e.$$typeof===kt||e.$$typeof===Tt||e.$$typeof===Lt||e.$$typeof===rs||e.$$typeof===ns||e.$$typeof===os||e.$$typeof===ts)};A.typeOf=W;So.exports=A;var is=So.exports,xo=is,as={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ss={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$o={};$o[xo.ForwardRef]=as;$o[xo.Memo]=ss;var I={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),zt=Symbol.for("react.fragment"),Ut=Symbol.for("react.strict_mode"),Bt=Symbol.for("react.profiler"),Ft=Symbol.for("react.provider"),Wt=Symbol.for("react.context"),cs=Symbol.for("react.server_context"),Vt=Symbol.for("react.forward_ref"),qt=Symbol.for("react.suspense"),Gt=Symbol.for("react.suspense_list"),Ht=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),us=Symbol.for("react.offscreen"),Eo;Eo=Symbol.for("react.module.reference");function q(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Wr:switch(e=e.type,e){case zt:case Bt:case Ut:case qt:case Gt:return e;default:switch(e=e&&e.$$typeof,e){case cs:case Wt:case Vt:case Kt:case Ht:case Ft:return e;default:return t}}case Vr:return t}}}I.ContextConsumer=Wt;I.ContextProvider=Ft;I.Element=Wr;I.ForwardRef=Vt;I.Fragment=zt;I.Lazy=Kt;I.Memo=Ht;I.Portal=Vr;I.Profiler=Bt;I.StrictMode=Ut;I.Suspense=qt;I.SuspenseList=Gt;I.isAsyncMode=function(){return!1};I.isConcurrentMode=function(){return!1};I.isContextConsumer=function(e){return q(e)===Wt};I.isContextProvider=function(e){return q(e)===Ft};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr};I.isForwardRef=function(e){return q(e)===Vt};I.isFragment=function(e){return q(e)===zt};I.isLazy=function(e){return q(e)===Kt};I.isMemo=function(e){return q(e)===Ht};I.isPortal=function(e){return q(e)===Vr};I.isProfiler=function(e){return q(e)===Bt};I.isStrictMode=function(e){return q(e)===Ut};I.isSuspense=function(e){return q(e)===qt};I.isSuspenseList=function(e){return q(e)===Gt};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zt||e===Bt||e===Ut||e===qt||e===Gt||e===us||typeof e=="object"&&e!==null&&(e.$$typeof===Kt||e.$$typeof===Ht||e.$$typeof===Ft||e.$$typeof===Wt||e.$$typeof===Vt||e.$$typeof===Eo||e.getModuleId!==void 0)};I.typeOf=q;function ls(){const e=Ka();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const vn={notify(){},get:()=>[]};function fs(e,t){let r,n=vn;function o(f){return u(),n.subscribe(f)}function i(){n.notify()}function a(){l.onStateChange&&l.onStateChange()}function s(){return!!r}function u(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=ls())}function c(){r&&(r(),r=void 0,n.clear(),n=vn)}const l={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>n};return l}const ds=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ps=ds?y.useLayoutEffect:y.useEffect;function yn(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function pt(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!yn(e[r[o]],t[r[o]]))return!1;return!0}function hs({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",noopCheck:i="once"}){const a=y.useMemo(()=>{const c=fs(e);return{store:e,subscription:c,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:i}},[e,n,o,i]),s=y.useMemo(()=>e.getState(),[e]);ps(()=>{const{subscription:c}=a;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[a,s]);const u=t||de;return y.createElement(u.Provider,{value:a},r)}function Co(e=de){const t=e===de?yo:zr(e);return function(){const{store:n}=t();return n}}const ms=Co();function gs(e=de){const t=e===de?ms:Co(e);return function(){return t().dispatch}}const $e=gs();Ja(qa.useSyncExternalStoreWithSelector);Ha(Oi.unstable_batchedUpdates);var U=function(){return U=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},U.apply(this,arguments)};function Ge(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var k="-ms-",Ve="-moz-",R="-webkit-",Po="comm",Yt="rule",qr="decl",vs="@import",Oo="@keyframes",ys="@layer",bs=Math.abs,Gr=String.fromCharCode,xr=Object.assign;function Ss(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function Ro(e){return e.trim()}function Z(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,r){return e.replace(t,r)}function at(e,t){return e.indexOf(t)}function M(e,t){return e.charCodeAt(t)|0}function Ae(e,t,r){return e.slice(t,r)}function K(e){return e.length}function jo(e){return e.length}function Fe(e,t){return t.push(e),e}function ws(e,t){return e.map(t).join("")}function bn(e,t){return e.filter(function(r){return!Z(r,t)})}var Xt=1,Ie=1,Ao=0,V=0,L=0,Me="";function Jt(e,t,r,n,o,i,a,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Xt,column:Ie,length:a,return:"",siblings:s}}function ie(e,t){return xr(Jt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ce(e){for(;e.root;)e=ie(e.root,{children:[e]});Fe(e,e.siblings)}function xs(){return L}function $s(){return L=V>0?M(Me,--V):0,Ie--,L===10&&(Ie=1,Xt--),L}function H(){return L=V<Ao?M(Me,V++):0,Ie++,L===10&&(Ie=1,Xt++),L}function be(){return M(Me,V)}function st(){return V}function Zt(e,t){return Ae(Me,e,t)}function $r(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Es(e){return Xt=Ie=1,Ao=K(Me=e),V=0,[]}function Cs(e){return Me="",e}function ar(e){return Ro(Zt(V-1,Er(e===91?e+2:e===40?e+1:e)))}function Ps(e){for(;(L=be())&&L<33;)H();return $r(e)>2||$r(L)>3?"":" "}function Os(e,t){for(;--t&&H()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Zt(e,st()+(t<6&&be()==32&&H()==32))}function Er(e){for(;H();)switch(L){case e:return V;case 34:case 39:e!==34&&e!==39&&Er(L);break;case 40:e===41&&Er(e);break;case 92:H();break}return V}function Rs(e,t){for(;H()&&e+L!==47+10;)if(e+L===42+42&&be()===47)break;return"/*"+Zt(t,V-1)+"*"+Gr(e===47?e:H())}function js(e){for(;!$r(be());)H();return Zt(e,V)}function As(e){return Cs(ct("",null,null,null,[""],e=Es(e),0,[0],e))}function ct(e,t,r,n,o,i,a,s,u){for(var c=0,l=0,f=a,d=0,p=0,h=0,m=1,b=1,S=1,v=0,w="",$=o,E=i,j=n,P=w;b;)switch(h=v,v=H()){case 40:if(h!=108&&M(P,f-1)==58){at(P+=O(ar(v),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:P+=ar(v);break;case 9:case 10:case 13:case 32:P+=Ps(h);break;case 92:P+=Os(st()-1,7);continue;case 47:switch(be()){case 42:case 47:Fe(Is(Rs(H(),st()),t,r,u),u);break;default:P+="/"}break;case 123*m:s[c++]=K(P)*S;case 125*m:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+l:S==-1&&(P=O(P,/\f/g,"")),p>0&&K(P)-f&&Fe(p>32?wn(P+";",n,r,f-1,u):wn(O(P," ","")+";",n,r,f-2,u),u);break;case 59:P+=";";default:if(Fe(j=Sn(P,t,r,c,l,o,s,w,$=[],E=[],f,i),i),v===123)if(l===0)ct(P,t,j,j,$,i,f,s,E);else switch(d===99&&M(P,3)===110?100:d){case 100:case 108:case 109:case 115:ct(e,j,j,n&&Fe(Sn(e,j,j,0,0,o,s,w,o,$=[],f,E),E),o,E,f,s,n?$:E);break;default:ct(P,j,j,j,[""],E,0,s,E)}}c=l=p=0,m=S=1,w=P="",f=a;break;case 58:f=1+K(P),p=h;default:if(m<1){if(v==123)--m;else if(v==125&&m++==0&&$s()==125)continue}switch(P+=Gr(v),v*m){case 38:S=l>0?1:(P+="\f",-1);break;case 44:s[c++]=(K(P)-1)*S,S=1;break;case 64:be()===45&&(P+=ar(H())),d=be(),l=f=K(w=P+=js(st())),v++;break;case 45:h===45&&K(P)==2&&(m=0)}}return i}function Sn(e,t,r,n,o,i,a,s,u,c,l,f){for(var d=o-1,p=o===0?i:[""],h=jo(p),m=0,b=0,S=0;m<n;++m)for(var v=0,w=Ae(e,d+1,d=bs(b=a[m])),$=e;v<h;++v)($=Ro(b>0?p[v]+" "+w:O(w,/&\f/g,p[v])))&&(u[S++]=$);return Jt(e,t,r,o===0?Yt:s,u,c,l,f)}function Is(e,t,r,n){return Jt(e,t,r,Po,Gr(xs()),Ae(e,2,-2),0,n)}function wn(e,t,r,n,o){return Jt(e,t,r,qr,Ae(e,0,n),Ae(e,n+1,-1),n,o)}function Io(e,t,r){switch(Ss(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 4789:return Ve+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+Ve+e+k+e+e;case 5936:switch(M(e,t+11)){case 114:return R+e+k+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+k+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+k+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return R+e+k+e+e;case 6165:return R+e+k+"flex-"+e+e;case 5187:return R+e+O(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+k+"flex-$1$2")+e;case 5443:return R+e+k+"flex-item-"+O(e,/flex-|-self/g,"")+(Z(e,/flex-|baseline/)?"":k+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return R+e+k+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return R+e+k+O(e,"shrink","negative")+e;case 5292:return R+e+k+O(e,"basis","preferred-size")+e;case 6060:return R+"box-"+O(e,"-grow","")+R+e+k+O(e,"grow","positive")+e;case 4554:return R+O(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4200:if(!Z(e,/flex-|baseline/))return k+"grid-column-align"+Ae(e,t)+e;break;case 2592:case 3360:return k+O(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,Z(n.props,/grid-\w+-end/)})?~at(e+(r=r[t].value),"span")?e:k+O(e,"-start","")+e+k+"grid-row-span:"+(~at(r,"span")?Z(r,/\d+/):+Z(r,/\d+/)-+Z(e,/\d+/))+";":k+O(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return Z(n.props,/grid-\w+-start/)})?e:k+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(K(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+Ve+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~at(e,"stretch")?Io(O(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,s,u,c){return k+o+":"+i+c+(a?k+o+"-span:"+(s?u:+u-+i)+c:"")+e});case 4949:if(M(e,t+6)===121)return O(e,":",":"+R)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+R+(M(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+k+"$2box$3")+e;case 100:return O(e,":",":"+k)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function ht(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ks(e,t,r,n){switch(e.type){case ys:if(e.children.length)break;case vs:case qr:return e.return=e.return||e.value;case Po:return"";case Oo:return e.return=e.value+"{"+ht(e.children,n)+"}";case Yt:if(!K(e.value=e.props.join(",")))return""}return K(r=ht(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ts(e){var t=jo(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}function _s(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ls(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case qr:e.return=Io(e.value,e.length,r);return;case Oo:return ht([ie(e,{value:O(e.value,"@","@"+R)})],n);case Yt:if(e.length)return ws(r=e.props,function(o){switch(Z(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ce(ie(e,{props:[O(o,/:(read-\w+)/,":"+Ve+"$1")]})),Ce(ie(e,{props:[o]})),xr(e,{props:bn(r,n)});break;case"::placeholder":Ce(ie(e,{props:[O(o,/:(plac\w+)/,":"+R+"input-$1")]})),Ce(ie(e,{props:[O(o,/:(plac\w+)/,":"+Ve+"$1")]})),Ce(ie(e,{props:[O(o,/:(plac\w+)/,k+"input-$1")]})),Ce(ie(e,{props:[o]})),xr(e,{props:bn(r,n)});break}return""})}}var Ns={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ke=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Hr=typeof window<"u"&&"HTMLElement"in window,Ms=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Ds={},Qt=Object.freeze([]),Te=Object.freeze({});function ko(e,t,r){return r===void 0&&(r=Te),e.theme!==r.theme&&e.theme||t||r.theme}var To=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Us=/(^-|-$)/g;function xn(e){return e.replace(zs,"-").replace(Us,"")}var Bs=/(a)(d)/gi,$n=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cr(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=$n(t%52)+r;return($n(t%52)+r).replace(Bs,"$1-$2")}var sr,Pe=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},_o=function(e){return Pe(5381,e)};function Lo(e){return Cr(_o(e)>>>0)}function Fs(e){return e.displayName||e.name||"Component"}function cr(e){return typeof e=="string"&&!0}var No=typeof Symbol=="function"&&Symbol.for,Mo=No?Symbol.for("react.memo"):60115,Ws=No?Symbol.for("react.forward_ref"):60112,Vs={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qs={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Do={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gs=((sr={})[Ws]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sr[Mo]=Do,sr);function En(e){return("type"in(t=e)&&t.type.$$typeof)===Mo?Do:"$$typeof"in e?Gs[e.$$typeof]:Vs;var t}var Hs=Object.defineProperty,Ks=Object.getOwnPropertyNames,Cn=Object.getOwnPropertySymbols,Ys=Object.getOwnPropertyDescriptor,Xs=Object.getPrototypeOf,Pn=Object.prototype;function zo(e,t,r){if(typeof t!="string"){if(Pn){var n=Xs(t);n&&n!==Pn&&zo(e,n,r)}var o=Ks(t);Cn&&(o=o.concat(Cn(t)));for(var i=En(e),a=En(t),s=0;s<o.length;++s){var u=o[s];if(!(u in qs||r&&r[u]||a&&u in a||i&&u in i)){var c=Ys(t,u);try{Hs(e,u,c)}catch{}}}}return e}function _e(e){return typeof e=="function"}function Kr(e){return typeof e=="object"&&"styledComponentId"in e}function ye(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pr(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function He(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Or(e,t,r){if(r===void 0&&(r=!1),!r&&!He(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Or(e[n],t[n]);else if(He(t))for(var n in t)e[n]=Or(e[n],t[n]);return e}function Yr(e,t){Object.defineProperty(e,"toString",{value:t})}function Qe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Js=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Qe(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),u=(a=0,r.length);a<u;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return r},e}(),ut=new Map,mt=new Map,ur=1,ot=function(e){if(ut.has(e))return ut.get(e);for(;mt.has(ur);)ur++;var t=ur++;return ut.set(e,t),mt.set(t,e),t},Zs=function(e,t){ut.set(e,t),mt.set(t,e)},Qs="style[".concat(ke,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),ec=new RegExp("^".concat(ke,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tc=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},rc=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,a=n.length;i<a;i++){var s=n[i].trim();if(s){var u=s.match(ec);if(u){var c=0|parseInt(u[1],10),l=u[2];c!==0&&(Zs(l,c),tc(e,l,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}};function nc(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Uo=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var u=Array.from(s.querySelectorAll("style[".concat(ke,"]")));return u[u.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(ke,"active"),n.setAttribute("data-styled-version","6.0.7");var a=nc();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},oc=function(){function e(t){this.element=Uo(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw Qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),ic=function(){function e(t){this.element=Uo(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ac=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),On=Hr,sc={isServer:!Hr,useCSSOMInjection:!Ms},gt=function(){function e(t,r,n){t===void 0&&(t=Te),r===void 0&&(r={});var o=this;this.options=U(U({},sc),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Hr&&On&&(On=!1,function(i){for(var a=document.querySelectorAll(Qs),s=0,u=a.length;s<u;s++){var c=a[s];c&&c.getAttribute(ke)!=="active"&&(rc(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Yr(this,function(){return function(i){for(var a=i.getTag(),s=a.length,u="",c=function(f){var d=function(S){return mt.get(S)}(f);if(d===void 0)return"continue";var p=i.names.get(d),h=a.getGroup(f);if(p===void 0||h.length===0)return"continue";var m="".concat(ke,".g").concat(f,'[id="').concat(d,'"]'),b="";p!==void 0&&p.forEach(function(S){S.length>0&&(b+="".concat(S,","))}),u+="".concat(h).concat(m,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},l=0;l<s;l++)c(l);return u}(o)})}return e.registerId=function(t){return ot(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(U(U({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new ac(o):n?new oc(o):new ic(o)}(this.options),new Js(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ot(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ot(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ot(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),cc=/&/g,uc=/^\s*\/\/.*$/gm;function Bo(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Bo(r.children,t)),r})}function lc(e){var t,r,n,o=e===void 0?Te:e,i=o.options,a=i===void 0?Te:i,s=o.plugins,u=s===void 0?Qt:s,c=function(d,p,h){return h===r||h.startsWith(r)&&h.endsWith(r)&&h.replaceAll(r,"").length>0?".".concat(t):d},l=u.slice();l.push(function(d){d.type===Yt&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(cc,r).replace(n,c))}),a.prefix&&l.push(Ls),l.push(ks);var f=function(d,p,h,m){p===void 0&&(p=""),h===void 0&&(h=""),m===void 0&&(m="&"),t=m,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var b=d.replace(uc,""),S=As(h||p?"".concat(h," ").concat(p," { ").concat(b," }"):b);a.namespace&&(S=Bo(S,a.namespace));var v=[];return ht(S,Ts(l.concat(_s(function(w){return v.push(w)})))),v};return f.hash=u.length?u.reduce(function(d,p){return p.name||Qe(15),Pe(d,p.name)},5381).toString():"",f}var fc=new gt,Rr=lc(),Fo=Y.createContext({shouldForwardProp:void 0,styleSheet:fc,stylis:Rr});Fo.Consumer;Y.createContext(void 0);function jr(){return y.useContext(Fo)}var dc=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Rr);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Yr(this,function(){throw Qe(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Rr),this.name+t.hash},e}(),pc=function(e){return e>="A"&&e<="Z"};function Rn(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;pc(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Wo=function(e){return e==null||e===!1||e===""},Vo=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Wo(i)&&(Array.isArray(i)&&i.isCss||_e(i)?n.push("".concat(Rn(o),":"),i,";"):He(i)?n.push.apply(n,Ge(Ge(["".concat(o," {")],Vo(i),!1),["}"],!1)):n.push("".concat(Rn(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Ns||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function ue(e,t,r,n){if(Wo(e))return[];if(Kr(e))return[".".concat(e.styledComponentId)];if(_e(e)){if(!_e(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return ue(o,t,r,n)}var i;return e instanceof dc?r?(e.inject(r,n),[e.getName(n)]):[e]:He(e)?Vo(e):Array.isArray(e)?Array.prototype.concat.apply(Qt,e.map(function(a){return ue(a,t,r,n)})):[e.toString()]}function qo(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(_e(r)&&!Kr(r))return!1}return!0}var hc=_o("6.0.7"),mc=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&qo(t),this.componentId=r,this.baseHash=Pe(hc,r),this.baseStyle=n,gt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=ye(o,this.staticRulesId);else{var i=Pr(ue(this.rules,t,r,n)),a=Cr(Pe(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}o=ye(o,a),this.staticRulesId=a}else{for(var u=Pe(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var f=this.rules[l];if(typeof f=="string")c+=f;else if(f){var d=Pr(ue(f,t,r,n));u=Pe(u,d),c+=d}}if(c){var p=Cr(u>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(c,".".concat(p),void 0,this.componentId)),o=ye(o,p)}}return o},e}(),Xr=Y.createContext(void 0);Xr.Consumer;var lr={};function gc(e,t,r){var n=Kr(e),o=e,i=!cr(e),a=t.attrs,s=a===void 0?Qt:a,u=t.componentId,c=u===void 0?function(w,$){var E=typeof w!="string"?"sc":xn(w);lr[E]=(lr[E]||0)+1;var j="".concat(E,"-").concat(Lo("6.0.7"+E+lr[E]));return $?"".concat($,"-").concat(j):j}(t.displayName,t.parentComponentId):u,l=t.displayName;l===void 0&&function(w){return cr(w)?"styled.".concat(w):"Styled(".concat(Fs(w),")")}(e);var f=t.displayName&&t.componentId?"".concat(xn(t.displayName),"-").concat(t.componentId):t.componentId||c,d=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,p=t.shouldForwardProp;if(n&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;p=function(w,$){return h(w,$)&&m(w,$)}}else p=h}var b=new mc(r,f,n?o.componentStyle:void 0);function S(w,$){return function(E,j,P){var he=E.attrs,te=E.componentStyle,B=E.defaultProps,me=E.foldedComponentIds,xi=E.styledComponentId,$i=E.target,Ei=Y.useContext(Xr),Ci=jr(),tr=E.shouldForwardProp||Ci.shouldForwardProp,re=function(tt,Ue,rt){for(var Be,ge=U(U({},Ue),{className:void 0,theme:rt}),nr=0;nr<tt.length;nr+=1){var nt=_e(Be=tt[nr])?Be(ge):Be;for(var oe in nt)ge[oe]=oe==="className"?ye(ge[oe],nt[oe]):oe==="style"?U(U({},ge[oe]),nt[oe]):nt[oe]}return Ue.className&&(ge.className=ye(ge.className,Ue.className)),ge}(he,j,ko(j,Ei,B)||Te),et=re.as||$i,ze={};for(var ne in re)re[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"||(ne==="forwardedAs"?ze.as=re.forwardedAs:tr&&!tr(ne,et)||(ze[ne]=re[ne]));var sn=function(tt,Ue){var rt=jr(),Be=tt.generateAndInjectStyles(Ue,rt.styleSheet,rt.stylis);return Be}(te,re),rr=ye(me,xi);return sn&&(rr+=" "+sn),re.className&&(rr+=" "+re.className),ze[cr(et)&&!To.has(et)?"class":"className"]=rr,ze.ref=P,y.createElement(et,ze)}(v,w,$)}var v=Y.forwardRef(S);return v.attrs=d,v.componentStyle=b,v.shouldForwardProp=p,v.foldedComponentIds=n?ye(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=f,v.target=n?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=n?function($){for(var E=[],j=1;j<arguments.length;j++)E[j-1]=arguments[j];for(var P=0,he=E;P<he.length;P++)Or($,he[P],!0);return $}({},o.defaultProps,w):w}}),Yr(v,function(){return".".concat(v.styledComponentId)}),i&&zo(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function jn(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var An=function(e){return Object.assign(e,{isCss:!0})};function Ee(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(_e(e)||He(e)){var n=e;return An(ue(jn(Qt,Ge([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?ue(o):An(ue(jn(o,t)))}function Ar(e,t,r){if(r===void 0&&(r=Te),!t)throw Qe(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,Ee.apply(void 0,Ge([o],i,!1)))};return n.attrs=function(o){return Ar(e,t,U(U({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Ar(e,t,U(U({},r),o))},n}var Go=function(e){return Ar(gc,e)},x=Go;To.forEach(function(e){x[e]=Go(e)});var vc=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=qo(t),gt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Pr(ue(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&gt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function yc(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Ee.apply(void 0,Ge([e],t,!1)),o="sc-global-".concat(Lo(JSON.stringify(n))),i=new vc(n,o),a=function(u){var c=jr(),l=Y.useContext(Xr),f=Y.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&s(f,u,c.styleSheet,l,c.stylis),Y.useLayoutEffect(function(){if(!c.styleSheet.server)return s(f,u,c.styleSheet,l,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,l,c.stylis]),null};function s(u,c,l,f,d){if(i.isStatic)i.renderStyles(u,Ds,l,d);else{var p=U(U({},c),{theme:ko(c,f,a.defaultProps)});i.renderStyles(u,p,l,d)}}return Y.memo(a)}const bc=yc`
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
`,C=e=>xc.colors[e],vt=(e,t)=>{const r=Ho[e]||e;let n=parseInt(r.substring(1,3),16),o=parseInt(r.substring(3,5),16),i=parseInt(r.substring(5,7),16);n=Math.round(n*(100+t)/100),o=Math.round(o*(100+t)/100),i=Math.round(i*(100+t)/100),n=n<255?n:255,o=o<255?o:255,i=i<255?i:255;const a=n.toString(16).length===1?"0"+n.toString(16):n.toString(16),s=o.toString(16).length===1?"0"+o.toString(16):o.toString(16),u=i.toString(16).length===1?"0"+i.toString(16):i.toString(16);return"#"+a+s+u},Sc={z1:"-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.16)",z2:"-0.1rem 0.1rem .25rem .1rem rgba(0,0,0,0.36)",z3:"-.2rem .5rem 1rem .2rem rgba(0,0,0,.36)"},Ho={black:"#000000",grey:"#373737",grey_light:"#A39F8E",white:"#fef8dd",blue:"#1fb9f3",green:"#51f249",yellow:"#fff249",red:"#F55658",purple:"#6b1ff3"},wc={mobile_tiny:"300px",mobile_medium:"400px",mobile_large:"500px",tablet:"768px",desktop:"1024px"},xc={colors:Ho,shadows:Sc,breakpoints:wc},$c=()=>Ee`
    border-radius:2rem;
    border: .5rem solid;
  `,Ec=(e,t="white")=>Ee`
    ${$c()}
    border-color: ${C(t)};
    color: ${C(t)};
    background-color: ${C(e)};
  `;function G(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function pe(e){return!!e&&!!e[T]}function ee(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Tc}(e)||Array.isArray(e)||!!e[Mn]||!!(!((t=e.constructor)===null||t===void 0)&&t[Mn])||Jr(e)||Zr(e))}function Se(e,t,r){r===void 0&&(r=!1),De(e)===0?(r?Object.keys:Re)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function De(e){var t=e[T];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Jr(e)?2:Zr(e)?3:0}function Oe(e,t){return De(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Cc(e,t){return De(e)===2?e.get(t):e[t]}function Ko(e,t,r){var n=De(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Yo(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Jr(e){return Ic&&e instanceof Map}function Zr(e){return kc&&e instanceof Set}function ve(e){return e.o||e.t}function Qr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Jo(e);delete t[T];for(var r=Re(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function en(e,t){return t===void 0&&(t=!1),tn(e)||pe(e)||!ee(e)||(De(e)>1&&(e.set=e.add=e.clear=e.delete=Pc),Object.freeze(e),t&&Se(e,function(r,n){return en(n,!0)},!0)),e}function Pc(){G(2)}function tn(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function X(e){var t=_r[e];return t||G(18,e),t}function Oc(e,t){_r[e]||(_r[e]=t)}function Ir(){return Ke}function fr(e,t){t&&(X("Patches"),e.u=[],e.s=[],e.v=t)}function yt(e){kr(e),e.p.forEach(Rc),e.p=null}function kr(e){e===Ke&&(Ke=e.l)}function In(e){return Ke={p:[],l:Ke,h:e,m:!0,_:0}}function Rc(e){var t=e[T];t.i===0||t.i===1?t.j():t.g=!0}function dr(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||X("ES5").S(t,e,n),n?(r[T].P&&(yt(t),G(4)),ee(e)&&(e=bt(t,e),t.l||St(t,e)),t.u&&X("Patches").M(r[T].t,e,t.u,t.s)):e=bt(t,r,[]),yt(t),t.u&&t.v(t.u,t.s),e!==Xo?e:void 0}function bt(e,t,r){if(tn(t))return t;var n=t[T];if(!n)return Se(t,function(s,u){return kn(e,n,t,s,u,r)},!0),t;if(n.A!==e)return t;if(!n.P)return St(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Qr(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),Se(i,function(s,u){return kn(e,n,o,s,u,r,a)}),St(e,o,!1),r&&e.u&&X("Patches").N(n,r,e.u,e.s)}return n.o}function kn(e,t,r,n,o,i,a){if(pe(o)){var s=bt(e,o,i&&t&&t.i!==3&&!Oe(t.R,n)?i.concat(n):void 0);if(Ko(r,n,s),!pe(s))return;e.m=!1}else a&&r.add(o);if(ee(o)&&!tn(o)){if(!e.h.D&&e._<1)return;bt(e,o),t&&t.A.l||St(e,o)}}function St(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&en(t,r)}function pr(e,t){var r=e[T];return(r?ve(r):e)[t]}function Tn(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ae(e){e.P||(e.P=!0,e.l&&ae(e.l))}function hr(e){e.o||(e.o=Qr(e.t))}function Tr(e,t,r){var n=Jr(t)?X("MapSet").F(t,r):Zr(t)?X("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:Ir(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},u=s,c=Ye;a&&(u=[s],c=We);var l=Proxy.revocable(u,c),f=l.revoke,d=l.proxy;return s.k=d,s.j=f,d}(t,r):X("ES5").J(t,r);return(r?r.A:Ir()).p.push(n),n}function jc(e){return pe(e)||G(22,e),function t(r){if(!ee(r))return r;var n,o=r[T],i=De(r);if(o){if(!o.P&&(o.i<4||!X("ES5").K(o)))return o.t;o.I=!0,n=_n(r,i),o.I=!1}else n=_n(r,i);return Se(n,function(a,s){o&&Cc(o.t,a)===s||Ko(n,a,t(s))}),i===3?new Set(n):n}(e)}function _n(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Qr(e)}function Ac(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var u=this[T];return Ye.get(u,i)},set:function(u){var c=this[T];Ye.set(c,i,u)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][T];if(!s.P)switch(s.i){case 5:n(s)&&ae(s);break;case 4:r(s)&&ae(s)}}}function r(i){for(var a=i.t,s=i.k,u=Re(s),c=u.length-1;c>=0;c--){var l=u[c];if(l!==T){var f=a[l];if(f===void 0&&!Oe(a,l))return!0;var d=s[l],p=d&&d[T];if(p?p.t!==f:!Yo(d,f))return!0}}var h=!!a[T];return u.length!==Re(a).length+(h?0:1)}function n(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var u=0;u<a.length;u++)if(!a.hasOwnProperty(u))return!0;return!1}var o={};Oc("ES5",{J:function(i,a){var s=Array.isArray(i),u=function(l,f){if(l){for(var d=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(d,""+p,e(p,!0));return d}var h=Jo(f);delete h[T];for(var m=Re(h),b=0;b<m.length;b++){var S=m[b];h[S]=e(S,l||!!h[S].enumerable)}return Object.create(Object.getPrototypeOf(f),h)}(s,i),c={i:s?5:4,A:a?a.A:Ir(),P:!1,I:!1,R:{},l:a,t:i,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,T,{value:c,writable:!0}),u},S:function(i,a,s){s?pe(a)&&a[T].A===i&&t(i.p):(i.u&&function u(c){if(c&&typeof c=="object"){var l=c[T];if(l){var f=l.t,d=l.k,p=l.R,h=l.i;if(h===4)Se(d,function(w){w!==T&&(f[w]!==void 0||Oe(f,w)?p[w]||u(d[w]):(p[w]=!0,ae(l)))}),Se(f,function(w){d[w]!==void 0||Oe(d,w)||(p[w]=!1,ae(l))});else if(h===5){if(n(l)&&(ae(l),p.length=!0),d.length<f.length)for(var m=d.length;m<f.length;m++)p[m]=!1;else for(var b=f.length;b<d.length;b++)p[b]=!0;for(var S=Math.min(d.length,f.length),v=0;v<S;v++)d.hasOwnProperty(v)||(p[v]=!0),p[v]===void 0&&u(d[v])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var Ln,Ke,rn=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Ic=typeof Map<"u",kc=typeof Set<"u",Nn=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Xo=rn?Symbol.for("immer-nothing"):((Ln={})["immer-nothing"]=!0,Ln),Mn=rn?Symbol.for("immer-draftable"):"__$immer_draftable",T=rn?Symbol.for("immer-state"):"__$immer_state",Tc=""+Object.prototype.constructor,Re=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Jo=Object.getOwnPropertyDescriptors||function(e){var t={};return Re(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},_r={},Ye={get:function(e,t){if(t===T)return e;var r=ve(e);if(!Oe(r,t))return function(o,i,a){var s,u=Tn(i,a);return u?"value"in u?u.value:(s=u.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!ee(n)?n:n===pr(e.t,t)?(hr(e),e.o[t]=Tr(e.A.h,n,e)):n},has:function(e,t){return t in ve(e)},ownKeys:function(e){return Reflect.ownKeys(ve(e))},set:function(e,t,r){var n=Tn(ve(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=pr(ve(e),t),i=o==null?void 0:o[T];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Yo(r,o)&&(r!==void 0||Oe(e.t,t)))return!0;hr(e),ae(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return pr(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,hr(e),ae(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=ve(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){G(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){G(12)}},We={};Se(Ye,function(e,t){We[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),We.deleteProperty=function(e,t){return We.set.call(this,e,t,void 0)},We.set=function(e,t,r){return Ye.set.call(this,e[0],t,r,e[0])};var _c=function(){function e(r){var n=this;this.O=Nn,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var u=n;return function(m){var b=this;m===void 0&&(m=s);for(var S=arguments.length,v=Array(S>1?S-1:0),w=1;w<S;w++)v[w-1]=arguments[w];return u.produce(m,function($){var E;return(E=i).call.apply(E,[b,$].concat(v))})}}var c;if(typeof i!="function"&&G(6),a!==void 0&&typeof a!="function"&&G(7),ee(o)){var l=In(n),f=Tr(n,o,void 0),d=!0;try{c=i(f),d=!1}finally{d?yt(l):kr(l)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(m){return fr(l,a),dr(m,l)},function(m){throw yt(l),m}):(fr(l,a),dr(c,l))}if(!o||typeof o!="object"){if((c=i(o))===void 0&&(c=o),c===Xo&&(c=void 0),n.D&&en(c,!0),a){var p=[],h=[];X("Patches").M(o,c,p,h),a(p,h)}return c}G(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(c){for(var l=arguments.length,f=Array(l>1?l-1:0),d=1;d<l;d++)f[d-1]=arguments[d];return n.produceWithPatches(c,function(p){return o.apply(void 0,[p].concat(f))})};var a,s,u=n.produce(o,i,function(c,l){a=c,s=l});return typeof Promise<"u"&&u instanceof Promise?u.then(function(c){return[c,a,s]}):[u,a,s]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){ee(r)||G(8),pe(r)&&(r=jc(r));var n=In(this),o=Tr(this,r,void 0);return o[T].C=!0,kr(n),o},t.finishDraft=function(r,n){var o=r&&r[T],i=o.A;return fr(i,n),dr(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!Nn&&G(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=X("Patches").$;return pe(r)?a(r,n):this.produce(r,function(s){return a(s,n)})},e}(),F=new _c,Zo=F.produce;F.produceWithPatches.bind(F);F.setAutoFreeze.bind(F);F.setUseProxies.bind(F);F.applyPatches.bind(F);F.createDraft.bind(F);F.finishDraft.bind(F);function Xe(e){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xe(e)}function Lc(e,t){if(Xe(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Xe(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nc(e){var t=Lc(e,"string");return Xe(t)==="symbol"?t:String(t)}function Mc(e,t,r){return t=Nc(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Dn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function zn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Dn(Object(r),!0).forEach(function(n){Mc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Dn(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function z(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Un=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),mr=function(){return Math.random().toString(36).substring(7).split("").join(".")},wt={INIT:"@@redux/INIT"+mr(),REPLACE:"@@redux/REPLACE"+mr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+mr()}};function Dc(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Qo(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(z(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(z(1));return r(Qo)(e,t)}if(typeof e!="function")throw new Error(z(2));var o=e,i=t,a=[],s=a,u=!1;function c(){s===a&&(s=a.slice())}function l(){if(u)throw new Error(z(3));return i}function f(m){if(typeof m!="function")throw new Error(z(4));if(u)throw new Error(z(5));var b=!0;return c(),s.push(m),function(){if(b){if(u)throw new Error(z(6));b=!1,c();var v=s.indexOf(m);s.splice(v,1),a=null}}}function d(m){if(!Dc(m))throw new Error(z(7));if(typeof m.type>"u")throw new Error(z(8));if(u)throw new Error(z(9));try{u=!0,i=o(i,m)}finally{u=!1}for(var b=a=s,S=0;S<b.length;S++){var v=b[S];v()}return m}function p(m){if(typeof m!="function")throw new Error(z(10));o=m,d({type:wt.REPLACE})}function h(){var m,b=f;return m={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(z(11));function w(){v.next&&v.next(l())}w();var $=b(w);return{unsubscribe:$}}},m[Un]=function(){return this},m}return d({type:wt.INIT}),n={dispatch:d,subscribe:f,getState:l,replaceReducer:p},n[Un]=h,n}function zc(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:wt.INIT});if(typeof n>"u")throw new Error(z(12));if(typeof r(void 0,{type:wt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(z(13))})}function Uc(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),a;try{zc(r)}catch(s){a=s}return function(u,c){if(u===void 0&&(u={}),a)throw a;for(var l=!1,f={},d=0;d<i.length;d++){var p=i[d],h=r[p],m=u[p],b=h(m,c);if(typeof b>"u")throw c&&c.type,new Error(z(14));f[p]=b,l=l||b!==m}return l=l||i.length!==Object.keys(u).length,l?f:u}}function xt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function Bc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(z(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(u){return u(a)});return i=xt.apply(void 0,s)(o.dispatch),zn(zn({},o),{},{dispatch:i})}}}var $t="NOT_FOUND";function Fc(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:$t},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function Wc(e,t){var r=[];function n(s){var u=r.findIndex(function(l){return t(s,l.key)});if(u>-1){var c=r[u];return u>0&&(r.splice(u,1),r.unshift(c)),c.value}return $t}function o(s,u){n(s)===$t&&(r.unshift({key:s,value:u}),r.length>e&&r.pop())}function i(){return r}function a(){r=[]}return{get:n,put:o,getEntries:i,clear:a}}var Vc=function(t,r){return t===r};function qc(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,i=0;i<o;i++)if(!e(r[i],n[i]))return!1;return!0}}function Gc(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?Vc:n,i=r.maxSize,a=i===void 0?1:i,s=r.resultEqualityCheck,u=qc(o),c=a===1?Fc(u):Wc(a,u);function l(){var f=c.get(arguments);if(f===$t){if(f=e.apply(null,arguments),s){var d=c.getEntries(),p=d.find(function(h){return s(h.value,f)});p&&(f=p.value)}c.put(arguments,f)}return f}return l.clearCache=function(){return c.clear()},l}function Hc(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function Kc(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];var c=0,l,f={memoizeOptions:void 0},d=s.pop();if(typeof d=="object"&&(f=d,d=s.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var p=f,h=p.memoizeOptions,m=h===void 0?r:h,b=Array.isArray(m)?m:[m],S=Hc(s),v=e.apply(void 0,[function(){return c++,d.apply(null,arguments)}].concat(b)),w=e(function(){for(var E=[],j=S.length,P=0;P<j;P++)E.push(S[P].apply(null,arguments));return l=v.apply(null,E),l});return Object.assign(w,{resultFunc:d,memoizedResultFunc:v,dependencies:S,lastResult:function(){return l},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),w};return o}var _=Kc(Gc);function ei(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var ti=ei();ti.withExtraArgument=ei;const Bn=ti;var ri=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Yc=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(c[0]===6&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(l){c=[6,l],o=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Le=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Xc=Object.defineProperty,Jc=Object.defineProperties,Zc=Object.getOwnPropertyDescriptors,Fn=Object.getOwnPropertySymbols,Qc=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable,Wn=function(e,t,r){return t in e?Xc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},le=function(e,t){for(var r in t||(t={}))Qc.call(t,r)&&Wn(e,r,t[r]);if(Fn)for(var n=0,o=Fn(t);n<o.length;n++){var r=o[n];eu.call(t,r)&&Wn(e,r,t[r])}return e},gr=function(e,t){return Jc(e,Zc(t))},tu=function(e,t,r){return new Promise(function(n,o){var i=function(u){try{s(r.next(u))}catch(c){o(c)}},a=function(u){try{s(r.throw(u))}catch(c){o(c)}},s=function(u){return u.done?n(u.value):Promise.resolve(u.value).then(i,a)};s((r=r.apply(e,t)).next())})},ru=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?xt:xt.apply(null,arguments)};function nu(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var ou=function(e){ri(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Le([void 0],r[0].concat(this)))):new(t.bind.apply(t,Le([void 0],r.concat(this))))},t}(Array),iu=function(e){ri(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,Le([void 0],r[0].concat(this)))):new(t.bind.apply(t,Le([void 0],r.concat(this))))},t}(Array);function Lr(e){return ee(e)?Zo(e,function(){}):e}function au(e){return typeof e=="boolean"}function su(){return function(t){return cu(t)}}function cu(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new ou;return r&&(au(r)?n.push(Bn):n.push(Bn.withExtraArgument(r.extraArgument))),n}var uu=!0;function lu(e){var t=su(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,a=i===void 0?t():i,s=r.devTools,u=s===void 0?!0:s,c=r.preloadedState,l=c===void 0?void 0:c,f=r.enhancers,d=f===void 0?void 0:f,p;if(typeof o=="function")p=o;else if(nu(o))p=Uc(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var m=Bc.apply(void 0,h),b=xt;u&&(b=ru(le({trace:!uu},typeof u=="object"&&u)));var S=new iu(m),v=S;Array.isArray(d)?v=Le([m],d):typeof d=="function"&&(v=d(S));var w=b.apply(void 0,v);return Qo(p,l,w)}function fe(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return le(le({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function ni(e){var t={},r=[],n,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return r.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function fu(e){return typeof e=="function"}function du(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?ni(t):[t,r,n],i=o[0],a=o[1],s=o[2],u;if(fu(e))u=function(){return Lr(e())};else{var c=Lr(e);u=function(){return c}}function l(f,d){f===void 0&&(f=u());var p=Le([i[d.type]],a.filter(function(h){var m=h.matcher;return m(d)}).map(function(h){var m=h.reducer;return m}));return p.filter(function(h){return!!h}).length===0&&(p=[s]),p.reduce(function(h,m){if(m)if(pe(h)){var b=h,S=m(b,d);return S===void 0?h:S}else{if(ee(h))return Zo(h,function(v){return m(v,d)});var S=m(h,d);if(S===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return S}return h},f)}return l.getInitialState=u,l}function pu(e,t){return e+"/"+t}function oi(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:Lr(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},a={},s={};o.forEach(function(l){var f=n[l],d=pu(t,l),p,h;"reducer"in f?(p=f.reducer,h=f.prepare):p=f,i[l]=p,a[d]=p,s[l]=h?fe(d,h):fe(d)});function u(){var l=typeof e.extraReducers=="function"?ni(e.extraReducers):[e.extraReducers],f=l[0],d=f===void 0?{}:f,p=l[1],h=p===void 0?[]:p,m=l[2],b=m===void 0?void 0:m,S=le(le({},d),a);return du(r,function(v){for(var w in S)v.addCase(w,S[w]);for(var $=0,E=h;$<E.length;$++){var j=E[$];v.addMatcher(j.matcher,j.reducer)}b&&v.addDefaultCase(b)})}var c;return{name:t,reducer:function(l,f){return c||(c=u()),c(l,f)},actions:s,caseReducers:i,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var hu="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",mu=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=hu[Math.random()*64|0];return t},gu=["name","message","stack","code"],vr=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Vn=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),vu=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=gu;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=fe(t+"/fulfilled",function(c,l,f,d){return{payload:c,meta:gr(le({},d||{}),{arg:f,requestId:l,requestStatus:"fulfilled"})}}),i=fe(t+"/pending",function(c,l,f){return{payload:void 0,meta:gr(le({},f||{}),{arg:l,requestId:c,requestStatus:"pending"})}}),a=fe(t+"/rejected",function(c,l,f,d,p){return{payload:d,error:(n&&n.serializeError||vu)(c||"Rejected"),meta:gr(le({},p||{}),{arg:f,requestId:l,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(l,f,d){var p=n!=null&&n.idGenerator?n.idGenerator(c):mu(),h=new s,m;function b(v){m=v,h.abort()}var S=function(){return tu(this,null,function(){var v,w,$,E,j,P,he;return Yc(this,function(te){switch(te.label){case 0:return te.trys.push([0,4,,5]),E=(v=n==null?void 0:n.condition)==null?void 0:v.call(n,c,{getState:f,extra:d}),bu(E)?[4,E]:[3,2];case 1:E=te.sent(),te.label=2;case 2:if(E===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return j=new Promise(function(B,me){return h.signal.addEventListener("abort",function(){return me({name:"AbortError",message:m||"Aborted"})})}),l(i(p,c,(w=n==null?void 0:n.getPendingMeta)==null?void 0:w.call(n,{requestId:p,arg:c},{getState:f,extra:d}))),[4,Promise.race([j,Promise.resolve(r(c,{dispatch:l,getState:f,extra:d,requestId:p,signal:h.signal,abort:b,rejectWithValue:function(B,me){return new vr(B,me)},fulfillWithValue:function(B,me){return new Vn(B,me)}})).then(function(B){if(B instanceof vr)throw B;return B instanceof Vn?o(B.payload,p,c,B.meta):o(B,p,c)})])];case 3:return $=te.sent(),[3,5];case 4:return P=te.sent(),$=P instanceof vr?a(null,p,c,P.payload,P.meta):a(P,p,c),[3,5];case 5:return he=n&&!n.dispatchConditionRejection&&a.match($)&&$.meta.condition,he||l($),[2,$]}})})}();return Object.assign(S,{abort:b,requestId:p,arg:c,unwrap:function(){return S.then(yu)}})}}return Object.assign(u,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function yu(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function bu(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var nn="listenerMiddleware";fe(nn+"/add");fe(nn+"/removeAll");fe(nn+"/remove");var qn;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Ac();const Su=(e,t)=>{if(!t)return Math.round(e);const r=Math.pow(10,t);return Math.round(e*r)/r},ii=(e,t,r)=>Math.min(Math.max(e,t),r),Nr=(e,t,r,n)=>{var i;let o=(i=t.find(a=>a.id===e.id))==null?void 0:i.value;return o===void 0&&(o=e.value),n?o:Math.round(ii(o+e.perSecond*r,0,e.max)*100)/100},wu=(e,t,r,n)=>{const o=(n-r)/1e3;return o<=0?e.map(i=>({id:i.id,value:Nr(i,t,o,!0),max:i.max,label:i.label})):e.map(i=>({id:i.id,value:Nr(i,t,o),max:i.max,label:i.label}))},xu=(e,t,r,n)=>{const o=n&&r?(n-r)/1e3:0;return e.map(i=>({id:i.id,value:Nr(i,t,o)}))},Gn=(...e)=>{},Je=e=>Array.isArray(e)?e:[e],$u=(e,t)=>{if(e.length===0)return!0;for(let r=0;r<e.length;r++)if(e[r].when.length===0||e[r].when.filter(n=>t.indexOf(n)>-1).length===e[r].when.length)return Et(e[r].then);return!1},Eu=(e,t)=>{for(let r=0;r<e.length;r++){let n=Pu(e[r],t);if(n)return n}return null},Et=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e,Cu=(e,t,r)=>e.when.find(n=>!Iu(n,t,r))?null:Et(e.then),Pu=(e,t)=>e.when.find(r=>t.indexOf(r)===-1)?null:Et(e.then),Ou=e=>e.map(t=>({when:Je(t.when),then:t.then})),Ru=e=>e.map(t=>({when:Je(t.when),then:Je(t.then)})),ju=e=>e?e.map(t=>({when:Je(t.when).map(n=>Au(n)).filter(n=>n!==null),then:Je(t.then)})):[],ai={"=":(e,t)=>e===t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t},Au=e=>{try{const t=e.split("_"),r=t[0],o=t[1].split("%");return ai[r]?{condition:r,criteria:Number(o[0]),isPercent:o.length>1}:(console.error(`parseExpressionString(): invalid condition "${r}" from expressionString "${e}"`),null)}catch{return console.error(`could not parse expressionString "${e}", expressionStrings must use one 
    of the following operators: [<=,<,=,>,>=] and follow a format like "<=_10%"`),null}},Iu=(e,t,r)=>{try{const n=e.isPercent?Math.round(t/r*100):t;return ai[e.condition](n,e.criteria)}catch{return console.log(`could not evaluate "whenNumber:${e}", "reference:${t}", "referenceMax:${t}"`),null}},ku={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},Tu={activeIdx:-1,pets:[],interactions:[],cachedPets:[],lastRendered:new Date().getTime(),lastSaved:new Date().getTime()},_u=(e,t)=>({stats:zu(e.logic.stats,t),statuses:e.logic.statuses||[],behaviorRules:Ru(e.logic.behaviorRules),behaviors:Lu(e.logic.behaviors||[],e.baseUrl),interactions:Du(e.logic.interactions)}),Lu=(e,t)=>e.map(r=>({...r,imageUrl:r.image?`${t}/${r.image}`:r.imageUrl||"",position:r.position?r.position:"center",offsetX:r.offsetX?r.offsetX:0,offsetY:r.offsetY?r.offsetY:0})),Nu=(e=[])=>e.map(t=>({statId:t.statId,value:t.value||0})),Mu=e=>e?Ou(e):[],Du=e=>e?e.map(t=>({id:t.id,label:t.label,cooldown:t.cooldown,changeStats:Nu(t.changeStats),availability:Mu(t.availability)})):[],zu=(e,t)=>e.map(r=>{const n=t==null?void 0:t.stats.find(i=>i.id===r.id),o=ju(r.statEffects);return n?{...r,value:n.value,statEffects:o}:{...r,statEffects:o}}),Uu=(e,t,r)=>{const n=(o,i,a)=>{var l;const s=a.find(f=>f.statId===o.id);if(!s)return o.value;const u=o.value+s.value,c=(l=i.find(f=>o.id===f.id))==null?void 0:l.max;return c?ii(u,0,c):u>0?u:0};return e.map(o=>({id:o.id,value:n(o,t,r)}))},it=(e,t)=>{const r=t!==void 0?t:new Date().getTime();e.lastSaved=r,e.lastRendered=r},si=oi({name:"petStore",initialState:Tu,reducers:{pingStore:(e,t)=>{const r=t.payload.time;e.lastRendered=r,t.payload.doSave&&(e.lastSaved=r)},clearSave:()=>{window.localStorage.clear(),window.location.reload()},setActiveId:(e,t)=>{const r=e.pets.findIndex(n=>n.id===t.payload);r===-1?(console.log(`Cannot find pet with id "${t.payload}"`),e.activeIdx=0,it(e)):(e.activeIdx=r,it(e))},setActiveIdx:(e,t)=>{e.activeIdx=t.payload,it(e)},setCachedPayload:(e,t)=>{const r=t.payload;e.cachedPets=r.pets},restoreInteractionFromSave:(e,t)=>{const r=t.payload;e.interactions.find(n=>n.id===r.id)||(console.log(`restoreInteractionFromSave ${r.id} with ${(r.endAt-new Date().getTime())/1e3} secs left`),e.interactions.push(r))},addNewInteractionEvent:(e,t)=>{var i;const{interaction:r,time:n}=t.payload;let o=!1;if(r.cooldown&&(o=!0,e.interactions.find(a=>a.id===r.id)||e.interactions.push({id:r.id,startAt:n,endAt:n+(r.cooldown||0)})),r.changeStats.length>0){o=!0;const a=e.pets[e.activeIdx],s=e.cachedPets.findIndex(u=>u.id===a.id);if(s>-1){const u=((i=e.cachedPets[s])==null?void 0:i.stats)||[],c=a.logic.stats;e.cachedPets[s]={...e.cachedPets[s],stats:Uu(u,c,r.changeStats)}}}o&&it(e,n)},removeInteractionEvent:(e,t)=>{const r=t.payload;e.interactions=e.interactions.filter(n=>n.id!==r)},createPet:(e,t)=>{Gn(`

createPet`,t.payload);const{petDefinition:r,initialState:n,isActive:o}=t.payload,i=e.pets.find(c=>c.id===r.id),a=new Date().getTime(),s=_u(r,n);Gn(`>> createPet: ${r.id}, isActive? ${o}, beingTracked? ${n==null?void 0:n.beingTracked}`);const u={...r,logic:s,bornOn:(n==null?void 0:n.bornOn)||a,bgImage:r.backgroundImage?`${r.baseUrl}/${r.backgroundImage}`:null,bgColor:r.backgroundColor||null};i?e.pets=e.pets.map(c=>c.id===r.id?u:c):e.pets.push(u),n&&(e.cachedPets.find(c=>c.id===(n==null?void 0:n.id))||(e.cachedPets=[...e.cachedPets,{...n,lastSaved:(n==null?void 0:n.lastSaved)||a}]))}}}),{pingStore:Hn,createPet:Bu,setActiveIdx:ci,setActiveId:Fu,clearSave:ui,setCachedPayload:Wu,addNewInteractionEvent:Vu,restoreInteractionFromSave:qu,removeInteractionEvent:li}=si.actions,fi=e=>e.petStore.activeIdx,di=e=>e.petStore.pets,Gu=e=>e.petStore.interactions,er=e=>e.petStore.cachedPets,Hu=e=>e.petStore.lastRendered,Ku=e=>e.petStore.lastSaved,pi=_([Ku],e=>e),Yu=_([Hu],e=>e),J=_([di,fi],(e,t)=>e[t]||null),on=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.stats)||[]}),Xu=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.statuses)||[]}),Ju=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.interactions)||[]}),Zu=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviorRules)||[]}),Qu=_([J],e=>{var t;return((t=e==null?void 0:e.logic)==null?void 0:t.behaviors)||[]}),el=_([J],e=>({imageUrl:e==null?void 0:e.bgImage,backgroundColor:e==null?void 0:e.bgColor})),tl=_([er],e=>e);_([er],e=>e.map(t=>t.stats));const hi=_([er,J],(e,t)=>{var r;return t?((r=e.find(n=>n.id===t.id))==null?void 0:r.stats)||[]:[]}),mi=_([J],e=>e?{id:e.id,name:e.name,level:e.level,bio:e.bio,bornOn:e.bornOn}:null),gi=_([Gu],e=>e),vi=_([er,J],(e,t)=>{var r;return t&&((r=e.find(n=>n.id===t.id))==null?void 0:r.lastSaved)||0}),yi=_([on,hi,vi,Yu],(e,t,r,n)=>wu(e,t,r,n)),an=_([yi,on],(e,t)=>{const r=o=>e.find(i=>i.id===o),n=[];for(let o=0;o<t.length;o++){const i=r(t[o].id);if(i)for(let a=0;a<t[o].statEffects.length;a++){const s=Cu(t[o].statEffects[a],i.value,i.max);s&&n.indexOf(s)===-1&&n.push(s)}}return n.map(o=>o).reverse()}),rl=_([an,Xu],(e,t)=>e.map(r=>t.find(n=>n.id===r)).filter(r=>!!r)),nl=_([an,Zu,Qu],(e,t,r)=>{const n=Eu(t,e);return r.find(o=>o.id===n)||null}),ol=_([Ju,gi,an],(e,t,r)=>e.map(n=>{const o=t.find(a=>a.id===n.id),i=$u(n.availability,r);return{id:n.id,label:n.label,startAt:(o==null?void 0:o.startAt)||0,endAt:(o==null?void 0:o.endAt)||0,enabled:i,definition:n,cooldownStatus:o}})),il=_([di,fi],(e,t)=>e.map((r,n)=>({name:r.name,id:r.id,isActive:n===t}))),al=_([on,hi,vi,pi],(e,t,r,n)=>r===n?null:xu(e,t,r,n)),sl=()=>{try{return JSON.parse(global.localStorage.getItem("browserpet"))}catch{return console.log('no localStorage entry found for "browserpet"'),null}},cl=()=>{try{return sl().pets}catch{return[]}};_([cl],e=>e);const ul=_([pi,al,J,gi,tl],(e,t,r,n,o)=>{if(!t)return null;if(!r)return ku;const i=o.findIndex(s=>s.id===r.id);let a=[];return i>-1?a=o.map(s=>{if(s.id===r.id){const u=s.beingTracked?t:s.stats;return{id:r.id,stats:u,bornOn:r.bornOn,lastSaved:e,beingTracked:!0}}return{...s,beingTracked:!1}}):a=o.concat([{id:r.id,stats:t,bornOn:r.bornOn,lastSaved:e,beingTracked:!1}]),{config:{activePet:(r==null?void 0:r.id)||"",lastSaved:e},interactions:n,pets:a}}),ll=si.reducer,fl=x.div`
  padding: 1rem;
  color: ${C("blue")};
  min-width: 30rem;
`,dl=x.h1`
  font-size: 2rem;
  text-align: left;
`,Kn=x.button`
  border: 0;
  margin: 0;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: ${C("green")};
  border: 0.5rem solid ${C("white")};
  border-radius: 1rem;

  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
`,pl=()=>{const e=$e();return g.jsxs(fl,{children:[g.jsx(dl,{children:"About BrowserPet"}),g.jsx("p",{children:"© Tom Yancey 2022"}),g.jsx(Kn,{children:g.jsx(fo,{to:"/",children:"BACK"})}),g.jsx(Kn,{onClick:()=>{e(ui())},children:"Clear Save"})]})};function Yn(e,t,r){const n=y.useRef();y.useEffect(()=>{const o=(r==null?void 0:r.current)||window;if(!(o&&o.addEventListener))return;n.current!==t&&(n.current=t);const i=a=>{n!=null&&n.current&&n.current(a)};return o.addEventListener(e,i),()=>{o.removeEventListener(e,i)}},[e,r,t])}function bi(e,t){const r=()=>{if(typeof window>"u")return t;try{const s=window.localStorage.getItem(e);return s?hl(s):t}catch(s){return console.warn(`Error reading localStorage key “${e}”:`,s),t}},[n,o]=y.useState(r),i=s=>{typeof window>"u"&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const u=s instanceof Function?s(n):s;window.localStorage.setItem(e,JSON.stringify(u)),o(u),window.dispatchEvent(new Event("local-storage"))}catch(u){console.warn(`Error setting localStorage key “${e}”:`,u)}};y.useEffect(()=>{o(r())},[]);const a=()=>{o(r())};return Yn("storage",a),Yn("local-storage",a),[n,i]}function hl(e){try{return e==="undefined"?void 0:JSON.parse(e??"")}catch{console.log("parsing error on",{value:e});return}}const ml={},gl=oi({name:"ui",initialState:ml,reducers:{}}),vl=gl.reducer,yl=lu({reducer:{petStore:ll,ui:vl}}),Si={config:{activePet:"",lastSaved:-1},interactions:[],pets:[]},bl=async(e,t,r)=>{const n=await Sl(e),o=await xl(n);Cl(o,t,r)},Sl=async e=>(await wl(e).then(r=>r.pets.map(n=>({id:n.id,baseUrl:n.baseUrl})))).filter(r=>!!r),wl=async e=>{try{const t=await fetch(e,{mode:"cors"});if(!t.ok)return null;const r=await t.text();return JSON.parse(r)}catch(t){return console.error(`Error fetching or parsing manifest from ${e}`,t),null}},xl=async e=>{const t=[];return e.forEach(n=>t.push($l(n))),(await Promise.all(t)).filter(n=>!!n)},$l=e=>new Promise(t=>t(El(e))),El=async e=>{const t=e.baseUrl+"/data.json";try{const r=await fetch(t,{mode:"cors"});if(!r.ok)return console.error(`bad response from ${t}`),null;const n=JSON.parse(await r.text());return n.baseUrl=e.baseUrl,n}catch(r){return console.error(`Error fetching or parsing pet manifest from ${t}`,r),null}},Cl=(e,t,r)=>{const n=new Date().getTime();let o="";r.config.activePet&&(o=r.config.activePet),e.forEach(i=>{const a=(r==null?void 0:r.pets.find(s=>s.id===i.id))||null;!o&&a&&r.config.activePet===a.id&&(o=a.id),t(Bu({isActive:o===(a==null?void 0:a.id),petDefinition:i,initialState:a}))}),t(o?Fu(o):ci(0)),r.interactions.filter(i=>i.endAt>n).forEach(i=>{t(a=>{a(qu(i)),window.setTimeout(()=>{a(li(i.id))},i.endAt-n)})})},Pl=()=>{const e=$e(),[t,r]=y.useState(!1),[n]=bi("browserpet",Si);return y.useEffect(()=>{t||(r(!0),bl("data/pet-manifest.json",e,n))},[t,n,r,e]),null};function Ol(e,t){const r=y.useRef(e);y.useLayoutEffect(()=>{r.current=e},[e]),y.useEffect(()=>{if(!t&&t!==0)return;const n=setInterval(()=>r.current(),t);return()=>clearInterval(n)},[t])}const Xn=2e3,Rl=2e3,jl=()=>{const[e,t]=y.useState(0),r=$e();return Ol(()=>{const n=new Date().getTime(),o=e+1;t(o),o*Xn%Rl===0?r(Hn({time:n,doSave:!0})):r(Hn({time:n,doSave:!1}))},Xn),null};let Jn=0;const Al=()=>{const[,e]=bi("browserpet",Si),t=Q(ul),r=$e();return y.useEffect(()=>{t&&t.config.activePet&&(e(()=>t),Jn!==t.config.lastSaved&&(Jn=t.config.lastSaved,r(Wu(t))))},[t,r,e]),null},Il=()=>g.jsxs(g.Fragment,{children:[g.jsx(Al,{}),g.jsx(Pl,{}),g.jsx(jl,{})]}),kl=x.div`
  display:inline-block;
  width:calc(50% - 1rem);
  margin-right:1rem;
`,Tl=x.h4`
  font-size: 1rem;
`,_l=x.div`
  position:relative;
  border:.5rem solid ${C("white")};
  border-radius: 1rem;
  overflow:hidden;
  padding:.25rem .5rem;
  text-align:center;
  background-color: ${C("white")};

  box-shadow: 0px -2px 4px ${vt("white",-40)};
`,Ll=x.div`
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  z-index:1;
`,Nl=x.div`
  position:absolute;
  top:0;
  left:0;
  height:100%; 
  transition: width .3s ease-in-out, background-color .5s ease-in-out;
  background-color: ${C("blue")};
`,Ml=x.p`
`,Dl=x.p`
  opacity:.5;
  margin-top:.125rem;
  margin-bottom:0rem;
  font-size:1.25rem;
`,zl=({label:e,max:t,value:r,hideStats:n=!1})=>{const o=Math.round(r/t*1e3)/10;return g.jsxs(kl,{children:[g.jsx(Tl,{children:e.toLocaleUpperCase()}),g.jsxs(_l,{children:[!n&&g.jsxs(Ll,{children:[g.jsx(Ml,{children:`${Su(r)} / ${t}`}),g.jsx(Dl,{children:`${o}%`})]}),g.jsx(Nl,{style:{width:`${o}%`}})]})]})},Ul=x.div`
  width:100%;
`,Bl=()=>{const e=Q(yi);return g.jsx(Ul,{children:e.map((t,r)=>g.jsx(zl,{label:t.label,max:t.max,value:t.value},r))})},Fl=x.div`
  position:absolute;
  left:0;
  bottom:0;
  height:100%;
  width:100%;
`,Wl=x.div`
  background-color:${C("white")};
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
`,Vl=x.div`
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
`,ql=({startProgress:e,duration:t})=>{const[r,n]=y.useState(!1);return y.useEffect(()=>{r||window.setTimeout(()=>n(!0),1)},[r,n]),g.jsxs(Fl,{children:[g.jsx(Vl,{$startWidth:`${e*100}%`,className:r?"full":"",style:{transition:`all ${t}s linear`}}),g.jsx(Wl,{})]})},Zn=x.li`
  text-align:center;

  ${e=>!e.$isEnabled&&Ee`
    opacity: .5;
    pointer-events:none;
  `}
`,wi=x.div`
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
`,Gl=x(wi)`
  background-color: ${C("red")};
  border-color: ${C("white")};
  color: ${C("white")};

  cursor:not-allowed;
`,Qn=x.p`
  display:block;
  position:relative;
  z-index:2;
  font-size: 2rem;
`,Hl=({cooldownStatus:e,isEnabled:t,interaction:r,onClickHandler:n})=>{if(e){const o=e.endAt-e.startAt,i=(o-(e.endAt-new Date().getTime()))/o,a=(e.endAt-new Date().getTime())/1e3;return g.jsx(Zn,{$isEnabled:t,children:g.jsxs(Gl,{children:[g.jsx(Qn,{children:r.label}),g.jsx(ql,{startProgress:i,duration:a})]})})}else return g.jsx(Zn,{$isEnabled:t,onClick:()=>n&&n(),children:g.jsx(wi,{children:g.jsx(Qn,{children:`${r.label}`})})})},Kl=x.ul`
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
`,Yl=()=>{const e=Q(ol,pt),t=$e(),r=n=>{const o=new Date().getTime();t(i=>{i(Vu({interaction:n,time:o})),n.cooldown&&window.setTimeout(()=>{i(li(n.id))},n.cooldown)})};return g.jsx(Kl,{children:e.map(n=>g.jsx(Hl,{cooldownStatus:n.cooldownStatus,isEnabled:n.enabled,interaction:n.definition,onClickHandler:()=>r(n.definition)},n.id))})},Xl=x.div`
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
`,Jl=x.div`
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
`,Zl=x.div`
  width:100%;
`,Ql=x.h4`
  margin-top:1rem;
  margin-bottom:.5rem;
`,ef=x.p`
  margin-top:1rem;
  padding-left:1rem;
`,tf=x.div`
  min-height:5rem;
  width:100%;
`,rf=()=>{const e=Q(mi);return e?g.jsxs(Xl,{children:[g.jsx(tf,{children:g.jsx(Yl,{})}),g.jsxs(Jl,{children:[g.jsx(Bl,{}),g.jsx("hr",{}),g.jsxs(Zl,{children:[g.jsx(Ql,{children:"Description"}),g.jsx(ef,{children:e.bio})]})]})]}):null},nf=x.div`
  color:${C("black")};
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
  ${e=>Ec(e.$bubbleColors[0],e.$bubbleColors[1])}
`,sf=e=>{switch(e){case"alert":return["red","yellow"];case"warning":return["yellow","red"];case"reward":return["green","white"];default:return["white","red"]}},cf=()=>-5+Math.random()*5,uf=e=>e*35,lf=()=>{const e=Q(rl,pt);return g.jsx(nf,{children:g.jsx(of,{children:e.map((t,r)=>g.jsx(af,{id:t.id,$bubbleColors:sf(t.alertType),style:{bottom:uf(r),transform:`rotate(${cf()}deg)`},children:t.label},t.id))})})},eo=x.div`
  position:absolute;
  left:0;
  right:0;
  top:-2rem;
  padding-top:2rem;
  bottom:-2rem;
  padding-bottom:2rem;
  background-color: ${C("blue")};
  border:.5rem solid ${C("white")};

  ${e=>e.$bgImageUrl&&Ee`
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
  color:${C("white")};
  opacity: .5;

  position:absolute;
  top:1rem;
  right:1rem;
`,pf=()=>{const e=Q(nl,pt),{imageUrl:t,backgroundColor:r}=Q(el,pt);if(!e)return g.jsx(eo,{$bgImageUrl:t});const n={backgroundImage:`url(${e.imageUrl})`,backgroundPosition:`${e.position}`,left:`${e.offsetX}px`,bottom:`${e.offsetY}px`,backgroundColor:r||"initial"};return g.jsx(eo,{$bgImageUrl:t,children:g.jsxs(g.Fragment,{children:[g.jsx(df,{children:`behavior: ${e.id}`}),g.jsx(lf,{}),g.jsx(ff,{style:n})]})})},hf=x.div`
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
  color: ${C("white")};
  
  >h4{
    margin:0;
    line-height: 5rem;
  }
`,vf=x.h4`
  text-align:left;
  display:inline-block;
  flex:1;
`,yf=x.p`
  
`,bf=e=>e?new Date(e).toLocaleString("en-us"):null,Sf=()=>{const e=Q(mi);return g.jsx(hf,{children:e&&g.jsxs(g.Fragment,{children:[g.jsxs(mf,{children:[g.jsx(vf,{children:e.name}),g.jsx(yf,{children:`born on: ${bf(e.bornOn)}`})]}),g.jsx(gf,{})]})})},wf=x.ul`
  position:absolute;
  width:100%; 
  padding-left:1rem;
  left:0;
  bottom:-.5rem;
`,xf=x.li`
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
    background-color:${vt("blue",20)};
  }
  
  ${e=>e.$isActive&&Ee`

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
      background-color:${vt("green",40)};
    }
    
    :first-child{
      margin-left:0rem;
    }
  `};

  cursor:pointer;
`,$f=()=>{const e=Q(il),t=$e();return g.jsx(wf,{children:e.map((r,n)=>g.jsx(xf,{onClick:()=>t(ci(n)),$isActive:r.isActive,children:n+1},n))})},Ef=x.div`
  position: absolute;
  right: 0rem;
  bottom: -0.5rem;
  width: 7rem;
  height: 3rem;

  border-radius: 1rem 1rem 0 0;
  background-color: ${C("red")};
  color: ${C("white")};

  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 2rem;
  text-shadow: 1px 1px 1px ${C("black")};
  border: 0.5rem solid ${C("white")};

  cursor: pointer;
  &:hover {
    background-color: ${vt("red",40)};
  }
`,Cf=x.h1`
  position: absolute;
  right: 8rem;
  bottom: 0;
  width: 20rem;
  z-index: 1;

  font-size: 1.5rem;
  text-align: right;
`,Pf=x.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  > div {
    flex: 1;
    position: relative;
  }
`,Of=()=>{const e=$e();return g.jsxs(Pf,{children:[g.jsx("div",{children:g.jsx($f,{})}),g.jsxs("div",{children:[g.jsx(Cf,{children:g.jsx(fo,{to:"/about",children:"Browser Pet"})}),g.jsx(Ef,{onClick:()=>e(ui()),children:"RESET"})]})]})},Rf=x.header`
  position: relative;
  height:8rem;
  z-index:1;

  display:flex;
  flex-direction:column;
`,jf=x.div`
  flex: 0 0 3rem;
`,Af=x.div`
  position:relative;
  z-index:1;
  flex: 1;
`,If=()=>g.jsxs(Rf,{children:[g.jsx(jf,{children:g.jsx(Of,{})}),g.jsx(Af,{children:g.jsx(Sf,{})})]}),kf=x.div`
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
`,Tf=x.div`
  grid-area: header;
`,_f=x.div`
  grid-area: body;
`,Lf=x.div`
  grid-area: footer;
`,Nf=()=>g.jsxs(kf,{children:[g.jsx(Il,{}),g.jsx(Tf,{children:g.jsx(If,{})}),g.jsx(_f,{children:g.jsx(pf,{})}),g.jsx(Lf,{children:g.jsx(rf,{})})]}),Mf=()=>g.jsxs(va,{children:[g.jsx(br,{path:"/about",element:g.jsx(pl,{})}),g.jsx(br,{path:"/",element:g.jsx(Nf,{})})]});Ri.createRoot(document.getElementById("root")).render(g.jsx(Y.StrictMode,{children:g.jsxs(hs,{store:yl,children:[g.jsx("h1",{children:"hello"}),g.jsxs($a,{children:[g.jsx(Mf,{}),g.jsx(bc,{})]})]})}));
