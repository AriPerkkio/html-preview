import{S as j,i as q,s as W,e as w,t as O,c as T,a as R,h as D,d as h,g as I,J as E,L as F,K as Z,k as S,m as U,b as C,M as te,N as oe,v as ue,O as B,l as J,w as G,x as H,y as z,P as K,q as P,o as V,B as Q,n as fe,Q as _e,p as me,R as he,T as X,U as pe,V as ge,W as be}from"../chunks/vendor-f9d32276.js";import{_ as ve,b as re}from"../chunks/paths-fb6b994c.js";function ne(i){let e,t,n,s;return{c(){e=w("button"),t=O("Remove editor")},l(o){e=T(o,"BUTTON",{});var r=R(e);t=D(r,"Remove editor"),r.forEach(h)},m(o,r){I(o,e,r),E(e,t),n||(s=F(e,"click",i[3]),n=!0)},p:Z,d(o){o&&h(e),n=!1,s()}}}function ye(i){let e,t,n,s=i[1]&&ne(i);return{c(){s&&s.c(),e=S(),t=w("div"),n=w("textarea"),this.h()},l(o){s&&s.l(o),e=U(o),t=T(o,"DIV",{class:!0});var r=R(t);n=T(r,"TEXTAREA",{class:!0}),R(n).forEach(h),r.forEach(h),this.h()},h(){C(n,"class","svelte-1awo5ji"),C(t,"class","codemirror-container svelte-1awo5ji"),te(t,"active",i[0])},m(o,r){s&&s.m(o,r),I(o,e,r),I(o,t,r),E(t,n),i[6](n)},p(o,[r]){o[1]?s?s.p(o,r):(s=ne(o),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r&1&&te(t,"active",o[0])},i:Z,o:Z,d(o){s&&s.d(o),o&&h(e),o&&h(t),i[6](null)}}}function Ee(i,e,t){const n=oe();let{code:s=""}=e,{editorId:o}=e,{active:r=!1}=e,{canBeRemoved:f=!0}=e,l;ue(async()=>{let a=await ve(()=>import("../chunks/codemirror-f605f246.js"),["chunks/codemirror-f605f246.js","assets/codemirror-6f45da0e.css"]);await m(a.default)});async function m(a){if(!l)throw new Error("Missing ref to textarea");const u=a.fromTextArea(l,{lineNumbers:!0,lineWrapping:!0,mode:"htmlmixed",autoCloseBrackets:!0,autoCloseTags:!0,value:s});u.on("change",_=>{t(4,s=_.getValue()),n("change",{value:s,editorId:o})}),u.setValue(s)}function p(){n("remove",{editorId:o})}function g(a){B[a?"unshift":"push"](()=>{l=a,t(2,l)})}return i.$$set=a=>{"code"in a&&t(4,s=a.code),"editorId"in a&&t(5,o=a.editorId),"active"in a&&t(0,r=a.active),"canBeRemoved"in a&&t(1,f=a.canBeRemoved)},i.$$.update=()=>{i.$$.dirty&49&&r&&n("change",{value:s,editorId:o})},[r,f,l,p,s,o,g]}class ie extends j{constructor(e){super();q(this,e,Ee,ye,W,{code:4,editorId:5,active:0,canBeRemoved:1})}}function se(i,e,t){const n=i.slice();return n[9]=e[t],n[10]=e,n[11]=t,n}function de(i,e){let t,n,s,o;function r(l){e[6](l,e[9])}let f={canBeRemoved:e[9].id!==L,active:e[9].id===e[1],editorId:e[9].id};return e[9].code!==void 0&&(f.code=e[9].code),n=new ie({props:f}),B.push(()=>X(n,"code",r)),n.$on("change",e[5]),n.$on("remove",e[3]),{key:i,first:null,c(){t=J(),G(n.$$.fragment),this.h()},l(l){t=J(),H(n.$$.fragment,l),this.h()},h(){this.first=t},m(l,m){I(l,t,m),z(n,l,m),o=!0},p(l,m){e=l;const p={};m&1&&(p.canBeRemoved=e[9].id!==L),m&3&&(p.active=e[9].id===e[1]),m&1&&(p.editorId=e[9].id),!s&&m&1&&(s=!0,p.code=e[9].code,K(()=>s=!1)),n.$set(p)},i(l){o||(P(n.$$.fragment,l),o=!0)},o(l){V(n.$$.fragment,l),o=!1},d(l){l&&h(t),Q(n,l)}}}function ke(i){let e,t,n,s,o,r,f=[],l=new Map,m,p,g,a,u=i[0];const _=d=>d[9].id;for(let d=0;d<u.length;d+=1){let c=se(i,u,d),v=_(c);l.set(v,f[d]=de(v,c))}return{c(){e=w("button"),t=O("Next state"),n=S(),s=w("button"),o=O("Add editor"),r=S();for(let d=0;d<f.length;d+=1)f[d].c();m=J()},l(d){e=T(d,"BUTTON",{});var c=R(e);t=D(c,"Next state"),c.forEach(h),n=U(d),s=T(d,"BUTTON",{});var v=R(s);o=D(v,"Add editor"),v.forEach(h),r=U(d);for(let A=0;A<f.length;A+=1)f[A].l(d);m=J()},m(d,c){I(d,e,c),E(e,t),I(d,n,c),I(d,s,c),E(s,o),I(d,r,c);for(let v=0;v<f.length;v+=1)f[v].m(d,c);I(d,m,c),p=!0,g||(a=[F(e,"click",i[4]),F(s,"click",i[2])],g=!0)},p(d,[c]){c&43&&(u=d[0],fe(),f=_e(f,c,_,1,d,u,l,m.parentNode,pe,de,m,se),me())},i(d){if(!p){for(let c=0;c<u.length;c+=1)P(f[c]);p=!0}},o(d){for(let c=0;c<f.length;c+=1)V(f[c]);p=!1},d(d){d&&h(e),d&&h(n),d&&h(s),d&&h(r);for(let c=0;c<f.length;c+=1)f[c].d(d);d&&h(m),g=!1,he(a)}}}const L=1;function Ie(i,e,t){var a;let n;const s=oe();let{editors:o=[{id:L,code:""}]}=e,r=((a=o[0])==null?void 0:a.id)||L;function f(){var _;const u=((_=o.find(d=>d.id===n))==null?void 0:_.code)||"";t(0,o=[...o,{id:1+n,code:u}])}function l(u){const{editorId:_}=u.detail;if(r===_){const d=o.findIndex(v=>v.id===_),c=o[d-1];t(1,r=(c==null?void 0:c.id)||L)}t(0,o=o.filter(d=>d.id!==_))}function m(){const u=o.map(d=>d.id);if(r===n){t(1,r=Math.min(...u));return}const _=u.indexOf(r);t(1,r=u[1+_])}function p(u){const{value:_,editorId:d}=u.detail;d===r&&s("change",{value:_})}function g(u,_){i.$$.not_equal(_.code,u)&&(_.code=u,t(0,o))}return i.$$set=u=>{"editors"in u&&t(0,o=u.editors)},i.$$.update=()=>{i.$$.dirty&1&&(n=Math.max(...o.map(u=>u.id)))},[o,r,f,l,m,p,g]}class we extends j{constructor(e){super();q(this,e,Ie,ke,W,{editors:0})}}function Te(i){let e,t,n;function s(r){i[1](r)}let o={editorId:0,canBeRemoved:!1};return i[0]!==void 0&&(o.code=i[0]),e=new ie({props:o}),B.push(()=>X(e,"code",s)),e.$on("change",i[2]),{c(){G(e.$$.fragment)},l(r){H(e.$$.fragment,r)},m(r,f){z(e,r,f),n=!0},p(r,[f]){const l={};!t&&f&1&&(t=!0,l.code=r[0],K(()=>t=!1)),e.$set(l)},i(r){n||(P(e.$$.fragment,r),n=!0)},o(r){V(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function Re(i,e,t){let{code:n=""}=e;function s(r){n=r,t(0,n)}function o(r){ge.call(this,i,r)}return i.$$set=r=>{"code"in r&&t(0,n=r.code)},[n,s,o]}class Ne extends j{constructor(e){super();q(this,e,Re,Te,W,{code:0})}}function Ce(){const i={editors:[{id:1,code:""}],style:`<style>
  
</style>`},e=new URLSearchParams(document.location.search).get("code");let t;if(e)try{const n=atob(decodeURIComponent(e));t=JSON.parse(n)}catch(n){console.error("Unable to parse url search parameters",n)}return Y(t,"style")&&typeof t.style=="string"&&Y(t,"editors")&&Array.isArray(t.editors)&&t.editors.every(Ue)?{style:t.style,editors:t.editors}:i}function Se(i){const e=btoa(JSON.stringify(i)),t=new URL(re,window.location.origin);return t.searchParams.set("code",encodeURIComponent(e)),t}function Ue(i){return Y(i,"id")&&typeof i.id=="number"&&Y(i,"code")&&typeof i.code=="string"}function Y(i,e){return i?e in i:!1}function ae(i){let e;return{c(){e=O("Copied to clipboard!")},l(t){e=D(t,"Copied to clipboard!")},m(t,n){I(t,e,n)},d(t){t&&h(e)}}}function Ae(i){let e,t,n,s,o,r,f,l,m,p,g,a,u,_,d,c,v,A,y=i[2]&&ae();function ce(b){i[7](b)}let x={};i[1]!==void 0&&(x.code=i[1]),g=new Ne({props:x}),B.push(()=>X(g,"code",ce));function le(b){i[8](b)}let $={};return i[3]!==void 0&&($.editors=i[3]),_=new we({props:$}),B.push(()=>X(_,"editors",le)),_.$on("change",i[4]),{c(){e=w("div"),t=w("iframe"),s=S(),o=w("div"),r=w("button"),f=O("Export"),l=S(),m=w("span"),y&&y.c(),p=S(),G(g.$$.fragment),u=S(),G(_.$$.fragment),this.h()},l(b){e=T(b,"DIV",{class:!0});var N=R(e);t=T(N,"IFRAME",{security:!0,src:!0,title:!0}),R(t).forEach(h),s=U(N),o=T(N,"DIV",{});var k=R(o);r=T(k,"BUTTON",{class:!0});var M=R(r);f=D(M,"Export"),M.forEach(h),l=U(k),m=T(k,"SPAN",{"aria-live":!0});var ee=R(m);y&&y.l(ee),ee.forEach(h),p=U(k),H(g.$$.fragment,k),u=U(k),H(_.$$.fragment,k),k.forEach(h),N.forEach(h),this.h()},h(){C(t,"security","restricted"),be(t.src,n=""+(re+"/sandbox"))||C(t,"src",n),C(t,"title","Sandbox"),C(r,"class","export-btn svelte-1d5ock9"),C(m,"aria-live","polite"),C(e,"class","wrapper svelte-1d5ock9")},m(b,N){I(b,e,N),E(e,t),i[6](t),E(e,s),E(e,o),E(o,r),E(r,f),E(o,l),E(o,m),y&&y.m(m,null),E(o,p),z(g,o,null),E(o,u),z(_,o,null),c=!0,v||(A=F(r,"click",i[5]),v=!0)},p(b,[N]){b[2]?y||(y=ae(),y.c(),y.m(m,null)):y&&(y.d(1),y=null);const k={};!a&&N&2&&(a=!0,k.code=b[1],K(()=>a=!1)),g.$set(k);const M={};!d&&N&8&&(d=!0,M.editors=b[3],K(()=>d=!1)),_.$set(M)},i(b){c||(P(g.$$.fragment,b),P(_.$$.fragment,b),c=!0)},o(b){V(g.$$.fragment,b),V(_.$$.fragment,b),c=!1},d(b){b&&h(e),i[6](null),y&&y.d(),Q(g),Q(_),v=!1,A()}}}function Be(i,e,t){const n={};let s,{editors:o,style:r}=Ce();function f(a){var _,d;const{value:u}=a.detail;(d=(_=n.sandbox)==null?void 0:_.contentWindow)==null||d.postMessage({type:"CONTENT_CHANGE",value:u})}function l(){const a=Se({style:r,editors:o});window.history.pushState({},"",a),t(2,s=a.toString()),navigator.clipboard.writeText(s).then(()=>{setTimeout(()=>{t(2,s="")},3e3)})}function m(a){B[a?"unshift":"push"](()=>{n.sandbox=a,t(0,n)})}function p(a){r=a,t(1,r)}function g(a){o=a,t(3,o)}return i.$$.update=()=>{var a,u;i.$$.dirty&3&&((u=(a=n.sandbox)==null?void 0:a.contentWindow)==null||u.postMessage({type:"STYLE_CHANGE",value:r}))},[n,r,s,o,f,l,m,p,g]}class De extends j{constructor(e){super();q(this,e,Be,Ae,W,{})}}export{De as default};