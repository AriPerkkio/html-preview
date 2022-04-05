import{S as j,i as H,s as X,F as fe,C as R,e as D,c as F,a as E,d as _,b as y,L as de,M as oe,g as L,J as $,N as Ce,G as he,H as ge,I as me,z as Y,q as B,o as x,O as N,P as pe,Q as M,R as C,T as U,K as V,w as z,x as P,y as S,B as O,k as G,m as Z,n as _e,p as ve,v as we,U as $e,V as K,l as ae,W as se,X as ke,Y as ie,Z as Be,t as te,h as ne,_ as Re}from"../chunks/vendor-d81b3668.js";import{_ as xe,b as ce}from"../chunks/paths-fb6b994c.js";function Te(i){let e,n,t,c,s;const r=i[2].default,a=fe(r,i,i[1],null);let o=[i[0]],f={};for(let g=0;g<o.length;g+=1)f=R(f,o[g]);return{c(){e=D("button"),n=D("div"),a&&a.c(),this.h()},l(g){e=F(g,"BUTTON",{});var h=E(e);n=F(h,"DIV",{"aria-hidden":!0,class:!0});var I=E(n);a&&a.l(I),I.forEach(_),h.forEach(_),this.h()},h(){y(n,"aria-hidden","true"),y(n,"class","icon-wrapper svelte-1sntw6g"),de(e,f),oe(e,"svelte-1sntw6g",!0)},m(g,h){L(g,e,h),$(e,n),a&&a.m(n,null),e.autofocus&&e.focus(),t=!0,c||(s=Ce(e,"click",i[3]),c=!0)},p(g,[h]){a&&a.p&&(!t||h&2)&&he(a,r,g,g[1],t?me(r,g[1],h,null):ge(g[1]),null),de(e,f=Y(o,[h&1&&g[0]])),oe(e,"svelte-1sntw6g",!0)},i(g){t||(B(a,g),t=!0)},o(g){x(a,g),t=!1},d(g){g&&_(e),a&&a.d(g),c=!1,s()}}}function Le(i,e,n){let{$$slots:t={},$$scope:c}=e;function s(r){pe.call(this,i,r)}return i.$$set=r=>{n(0,e=R(R({},e),N(r))),"$$scope"in r&&n(1,c=r.$$scope)},e=N(e),[e,c,t,s]}class Q extends j{constructor(e){super();H(this,e,Le,Te,X,{})}}function ze(i){let e,n,t,c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},i[0]],s={};for(let r=0;r<c.length;r+=1)s=R(s,c[r]);return{c(){e=M("svg"),n=M("g"),t=M("path"),this.h()},l(r){e=C(r,"svg",{xmlns:!0,viewBox:!0});var a=E(e);n=C(a,"g",{"data-name":!0});var o=E(n);t=C(o,"path",{d:!0,"data-name":!0}),E(t).forEach(_),o.forEach(_),a.forEach(_),this.h()},h(){y(t,"d","m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"),y(t,"data-name","close"),y(n,"data-name","Layer 2"),U(e,s)},m(r,a){L(r,e,a),$(e,n),$(n,t)},p(r,[a]){U(e,s=Y(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},a&1&&r[0]]))},i:V,o:V,d(r){r&&_(e)}}}function Pe(i,e,n){return i.$$set=t=>{n(0,e=R(R({},e),N(t)))},e=N(e),[e]}class Se extends j{constructor(e){super();H(this,e,Pe,ze,X,{})}}function be(i){let e,n;return e=new Q({props:{"aria-label":"Remove editor",title:"Remove editor",class:"remove",$$slots:{default:[Oe]},$$scope:{ctx:i}}}),e.$on("click",i[4]),{c(){z(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,c){S(e,t,c),n=!0},p(t,c){const s={};c&256&&(s.$$scope={dirty:c,ctx:t}),e.$set(s)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Oe(i){let e,n;return e=new Se({}),{c(){z(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,c){S(e,t,c),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ne(i){let e,n,t,c,s=i[2]&&be(i);return{c(){e=D("div"),n=D("textarea"),t=G(),s&&s.c(),this.h()},l(r){e=F(r,"DIV",{class:!0});var a=E(e);n=F(a,"TEXTAREA",{class:!0}),E(n).forEach(_),t=Z(a),s&&s.l(a),a.forEach(_),this.h()},h(){n.value=i[0],y(n,"class","svelte-15b5w2y"),y(e,"class","codemirror-container svelte-15b5w2y"),oe(e,"active",i[1])},m(r,a){L(r,e,a),$(e,n),i[6](n),$(e,t),s&&s.m(e,null),c=!0},p(r,[a]){(!c||a&1)&&(n.value=r[0]),r[2]?s?(s.p(r,a),a&4&&B(s,1)):(s=be(r),s.c(),B(s,1),s.m(e,null)):s&&(_e(),x(s,1,1,()=>{s=null}),ve()),a&2&&oe(e,"active",r[1])},i(r){c||(B(s),c=!0)},o(r){x(s),c=!1},d(r){r&&_(e),i[6](null),s&&s.d()}}}function Ue(i,e,n){let{code:t=""}=e,{editorId:c}=e,{active:s=!1}=e,{canBeRemoved:r=!0}=e,a;we(async()=>{if(!a)throw new Error("Missing ref to textarea");const{default:h}=await xe(()=>import("../chunks/codemirror-f605f246.js"),["chunks/codemirror-f605f246.js","assets/codemirror-6f45da0e.css"]);h.fromTextArea(a,{lineNumbers:!0,lineWrapping:!0,mode:"htmlmixed",autoCloseBrackets:!0,autoCloseTags:!0,value:t}).on("change",m=>{n(0,t=m.getValue()),o("change",{value:t,editorId:c})})});const o=$e();function f(){o("remove",{editorId:c})}function g(h){K[h?"unshift":"push"](()=>{a=h,n(3,a)})}return i.$$set=h=>{"code"in h&&n(0,t=h.code),"editorId"in h&&n(5,c=h.editorId),"active"in h&&n(1,s=h.active),"canBeRemoved"in h&&n(2,r=h.canBeRemoved)},i.$$.update=()=>{i.$$.dirty&35&&s&&o("change",{value:t,editorId:c})},[t,s,r,a,f,c,g]}class Ee extends j{constructor(e){super();H(this,e,Ue,Ne,X,{code:0,editorId:5,active:1,canBeRemoved:2})}}function Ve(i){let e,n,t,c,s,r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},i[0]],a={};for(let o=0;o<r.length;o+=1)a=R(a,r[o]);return{c(){e=M("svg"),n=M("g"),t=M("g"),c=M("path"),s=M("path"),this.h()},l(o){e=C(o,"svg",{xmlns:!0,viewBox:!0});var f=E(e);n=C(f,"g",{"data-name":!0});var g=E(n);t=C(g,"g",{"data-name":!0});var h=E(t);c=C(h,"path",{d:!0}),E(c).forEach(_),s=C(h,"path",{d:!0}),E(s).forEach(_),h.forEach(_),g.forEach(_),f.forEach(_),this.h()},h(){y(c,"d","M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"),y(s,"d","M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 .69.15 1.74 1.74 0 0 0 1.16-.45L16 13.18a1.6 1.6 0 0 0 0-2.36zm-.84 7.15V9.4l2.81 2.6z"),y(t,"data-name","play-circle"),y(n,"data-name","Layer 2"),U(e,a)},m(o,f){L(o,e,f),$(e,n),$(n,t),$(t,c),$(t,s)},p(o,[f]){U(e,a=Y(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},f&1&&o[0]]))},i:V,o:V,d(o){o&&_(e)}}}function je(i,e,n){return i.$$set=t=>{n(0,e=R(R({},e),N(t)))},e=N(e),[e]}class He extends j{constructor(e){super();H(this,e,je,Ve,X,{})}}function Xe(i){let e,n,t,c,s,r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},i[0]],a={};for(let o=0;o<r.length;o+=1)a=R(a,r[o]);return{c(){e=M("svg"),n=M("g"),t=M("g"),c=M("path"),s=M("path"),this.h()},l(o){e=C(o,"svg",{xmlns:!0,viewBox:!0});var f=E(e);n=C(f,"g",{"data-name":!0});var g=E(n);t=C(g,"g",{"data-name":!0});var h=E(t);c=C(h,"path",{d:!0}),E(c).forEach(_),s=C(h,"path",{d:!0}),E(s).forEach(_),h.forEach(_),g.forEach(_),f.forEach(_),this.h()},h(){y(c,"d","M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"),y(s,"d","M15 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1zM9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"),y(t,"data-name","pause-circle"),y(n,"data-name","Layer 2"),U(e,a)},m(o,f){L(o,e,f),$(e,n),$(n,t),$(t,c),$(t,s)},p(o,[f]){U(e,a=Y(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},f&1&&o[0]]))},i:V,o:V,d(o){o&&_(e)}}}function De(i,e,n){return i.$$set=t=>{n(0,e=R(R({},e),N(t)))},e=N(e),[e]}class Fe extends j{constructor(e){super();H(this,e,De,Xe,X,{})}}function Ge(i){let e,n,t,c,s,r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},i[0]],a={};for(let o=0;o<r.length;o+=1)a=R(a,r[o]);return{c(){e=M("svg"),n=M("g"),t=M("g"),c=M("path"),s=M("path"),this.h()},l(o){e=C(o,"svg",{xmlns:!0,viewBox:!0});var f=E(e);n=C(f,"g",{"data-name":!0});var g=E(n);t=C(g,"g",{"data-name":!0});var h=E(t);c=C(h,"path",{d:!0}),E(c).forEach(_),s=C(h,"path",{d:!0}),E(s).forEach(_),h.forEach(_),g.forEach(_),f.forEach(_),this.h()},h(){y(c,"d","M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z"),y(s,"d","M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"),y(t,"data-name","arrow-circle-right"),y(n,"data-name","Layer 2"),U(e,a)},m(o,f){L(o,e,f),$(e,n),$(n,t),$(t,c),$(t,s)},p(o,[f]){U(e,a=Y(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},f&1&&o[0]]))},i:V,o:V,d(o){o&&_(e)}}}function Ze(i,e,n){return i.$$set=t=>{n(0,e=R(R({},e),N(t)))},e=N(e),[e]}class Je extends j{constructor(e){super();H(this,e,Ze,Ge,X,{})}}function We(i){let e,n,t,c,s,r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},i[0]],a={};for(let o=0;o<r.length;o+=1)a=R(a,r[o]);return{c(){e=M("svg"),n=M("g"),t=M("g"),c=M("path"),s=M("path"),this.h()},l(o){e=C(o,"svg",{xmlns:!0,viewBox:!0});var f=E(e);n=C(f,"g",{"data-name":!0});var g=E(n);t=C(g,"g",{"data-name":!0});var h=E(t);c=C(h,"path",{d:!0}),E(c).forEach(_),s=C(h,"path",{d:!0}),E(s).forEach(_),h.forEach(_),g.forEach(_),f.forEach(_),this.h()},h(){y(c,"d","M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"),y(s,"d","M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"),y(t,"data-name","plus-circle"),y(n,"data-name","Layer 2"),U(e,a)},m(o,f){L(o,e,f),$(e,n),$(n,t),$(t,c),$(t,s)},p(o,[f]){U(e,a=Y(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},f&1&&o[0]]))},i:V,o:V,d(o){o&&_(e)}}}function Ye(i,e,n){return i.$$set=t=>{n(0,e=R(R({},e),N(t)))},e=N(e),[e]}class qe extends j{constructor(e){super();H(this,e,Ye,We,X,{})}}function ye(i,e,n){const t=i.slice();return t[14]=e[n],t[15]=e,t[16]=n,t}function Ke(i){let e,n;return e=new He({}),{c(){z(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,c){S(e,t,c),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Qe(i){let e,n;return e=new Fe({}),{c(){z(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,c){S(e,t,c),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function et(i){let e,n;return e=new Je({}),{c(){z(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,c){S(e,t,c),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function tt(i){let e,n;return e=new qe({}),{c(){z(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,c){S(e,t,c),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ie(i,e){let n,t,c,s;function r(o){e[10](o,e[14])}let a={canBeRemoved:e[14].id!==re,active:e[14].id===e[1],editorId:e[14].id};return e[14].code!==void 0&&(a.code=e[14].code),t=new Ee({props:a}),K.push(()=>ie(t,"code",r)),t.$on("change",e[8]),t.$on("remove",e[4]),{key:i,first:null,c(){n=ae(),z(t.$$.fragment),this.h()},l(o){n=ae(),P(t.$$.fragment,o),this.h()},h(){this.first=n},m(o,f){L(o,n,f),S(t,o,f),s=!0},p(o,f){e=o;const g={};f&1&&(g.canBeRemoved=e[14].id!==re),f&3&&(g.active=e[14].id===e[1]),f&1&&(g.editorId=e[14].id),!c&&f&1&&(c=!0,g.code=e[14].code,se(()=>c=!1)),t.$set(g)},i(o){s||(B(t.$$.fragment,o),s=!0)},o(o){x(t.$$.fragment,o),s=!1},d(o){o&&_(n),O(t,o)}}}function nt(i){let e,n,t,c,s,r,a,o,f,g,h=[],I=new Map,m,w;n=new Q({props:{"aria-label":"Loop states",title:"Loop states",disabled:i[2]!=null,$$slots:{default:[Ke]},$$scope:{ctx:i}}}),n.$on("click",i[6]),c=new Q({props:{"aria-label":"Pause state looping",title:"Pause state looping",disabled:i[2]==null,$$slots:{default:[Qe]},$$scope:{ctx:i}}}),c.$on("click",i[7]),r=new Q({props:{"aria-label":"Next state",title:"Next state",$$slots:{default:[et]},$$scope:{ctx:i}}}),r.$on("click",i[5]),o=new Q({props:{"aria-label":"Add editor",title:"Add editor",$$slots:{default:[tt]},$$scope:{ctx:i}}}),o.$on("click",i[3]);const b=i[9].default,v=fe(b,i,i[11],null);let A=i[0];const p=d=>d[14].id;for(let d=0;d<A.length;d+=1){let l=ye(i,A,d),u=p(l);I.set(u,h[d]=Ie(u,l))}return{c(){e=D("div"),z(n.$$.fragment),t=G(),z(c.$$.fragment),s=G(),z(r.$$.fragment),a=G(),z(o.$$.fragment),f=G(),v&&v.c(),g=G();for(let d=0;d<h.length;d+=1)h[d].c();m=ae(),this.h()},l(d){e=F(d,"DIV",{class:!0});var l=E(e);P(n.$$.fragment,l),t=Z(l),P(c.$$.fragment,l),s=Z(l),P(r.$$.fragment,l),a=Z(l),P(o.$$.fragment,l),f=Z(l),v&&v.l(l),l.forEach(_),g=Z(d);for(let u=0;u<h.length;u+=1)h[u].l(d);m=ae(),this.h()},h(){y(e,"class","controls svelte-eiz9iq")},m(d,l){L(d,e,l),S(n,e,null),$(e,t),S(c,e,null),$(e,s),S(r,e,null),$(e,a),S(o,e,null),$(e,f),v&&v.m(e,null),L(d,g,l);for(let u=0;u<h.length;u+=1)h[u].m(d,l);L(d,m,l),w=!0},p(d,[l]){const u={};l&4&&(u.disabled=d[2]!=null),l&2048&&(u.$$scope={dirty:l,ctx:d}),n.$set(u);const J={};l&4&&(J.disabled=d[2]==null),l&2048&&(J.$$scope={dirty:l,ctx:d}),c.$set(J);const ee={};l&2048&&(ee.$$scope={dirty:l,ctx:d}),r.$set(ee);const k={};l&2048&&(k.$$scope={dirty:l,ctx:d}),o.$set(k),v&&v.p&&(!w||l&2048)&&he(v,b,d,d[11],w?me(b,d[11],l,null):ge(d[11]),null),l&275&&(A=d[0],_e(),h=ke(h,l,p,1,d,A,I,m.parentNode,Be,Ie,m,ye),ve())},i(d){if(!w){B(n.$$.fragment,d),B(c.$$.fragment,d),B(r.$$.fragment,d),B(o.$$.fragment,d),B(v,d);for(let l=0;l<A.length;l+=1)B(h[l]);w=!0}},o(d){x(n.$$.fragment,d),x(c.$$.fragment,d),x(r.$$.fragment,d),x(o.$$.fragment,d),x(v,d);for(let l=0;l<h.length;l+=1)x(h[l]);w=!1},d(d){d&&_(e),O(n),O(c),O(r),O(o),v&&v.d(d),d&&_(g);for(let l=0;l<h.length;l+=1)h[l].d(d);d&&_(m)}}}const re=1;function rt(i,e,n){var A;let t,{$$slots:c={},$$scope:s}=e;const r=$e();let{editors:a=[{id:re,code:""}]}=e,o=((A=a[0])==null?void 0:A.id)||re,f;function g(){var d;const p=((d=a.find(l=>l.id===t))==null?void 0:d.code)||`

`;n(0,a=[...a,{id:1+t,code:p}])}function h(p){const{editorId:d}=p.detail;if(o===d){const l=a.findIndex(J=>J.id===d),u=a[l-1];n(1,o=(u==null?void 0:u.id)||re)}n(0,a=a.filter(l=>l.id!==d))}function I(){const p=a.map(l=>l.id);if(o===t){n(1,o=Math.min(...p));return}const d=p.indexOf(o);n(1,o=p[1+d])}function m(){if(!f){const p=setInterval(I,2e3);n(2,f=()=>clearInterval(p))}}function w(){f&&(f(),n(2,f=null))}function b(p){const{value:d,editorId:l}=p.detail;l===o&&r("change",{value:d})}function v(p,d){i.$$.not_equal(d.code,p)&&(d.code=p,n(0,a))}return i.$$set=p=>{"editors"in p&&n(0,a=p.editors),"$$scope"in p&&n(11,s=p.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&(t=Math.max(...a.map(p=>p.id)))},[a,o,f,g,h,I,m,w,b,c,v,s]}class ot extends j{constructor(e){super();H(this,e,rt,nt,X,{editors:0})}}function at(i){let e,n,t;function c(r){i[1](r)}let s={editorId:0,canBeRemoved:!1};return i[0]!==void 0&&(s.code=i[0]),e=new Ee({props:s}),K.push(()=>ie(e,"code",c)),e.$on("change",i[2]),{c(){z(e.$$.fragment)},l(r){P(e.$$.fragment,r)},m(r,a){S(e,r,a),t=!0},p(r,[a]){const o={};!n&&a&1&&(n=!0,o.code=r[0],se(()=>n=!1)),e.$set(o)},i(r){t||(B(e.$$.fragment,r),t=!0)},o(r){x(e.$$.fragment,r),t=!1},d(r){O(e,r)}}}function st(i,e,n){let{code:t=""}=e;function c(r){t=r,n(0,t)}function s(r){pe.call(this,i,r)}return i.$$set=r=>{"code"in r&&n(0,t=r.code)},[t,c,s]}class it extends j{constructor(e){super();H(this,e,st,at,X,{code:0})}}var Ae=function(){function i(s,r){if(!t[s]){t[s]={};for(var a=0;a<s.length;a++)t[s][s.charAt(a)]=a}return t[s][r]}var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},c={compressToEncodedURIComponent:function(s){return s==null?"":c._compress(s,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(s){return s==null?"":s==""?null:(s=s.replace(/ /g,"+"),c._decompress(s.length,32,function(r){return i(n,s.charAt(r))}))},_compress:function(s,r,a){if(s==null)return"";var o,f,g,h={},I={},m="",w="",b="",v=2,A=3,p=2,d=[],l=0,u=0;for(g=0;g<s.length;g+=1)if(m=s.charAt(g),Object.prototype.hasOwnProperty.call(h,m)||(h[m]=A++,I[m]=!0),w=b+m,Object.prototype.hasOwnProperty.call(h,w))b=w;else{if(Object.prototype.hasOwnProperty.call(I,b)){if(b.charCodeAt(0)<256){for(o=0;p>o;o++)l<<=1,u==r-1?(u=0,d.push(a(l)),l=0):u++;for(f=b.charCodeAt(0),o=0;8>o;o++)l=l<<1|1&f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f>>=1}else{for(f=1,o=0;p>o;o++)l=l<<1|f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f=0;for(f=b.charCodeAt(0),o=0;16>o;o++)l=l<<1|1&f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f>>=1}v--,v==0&&(v=Math.pow(2,p),p++),delete I[b]}else for(f=h[b],o=0;p>o;o++)l=l<<1|1&f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f>>=1;v--,v==0&&(v=Math.pow(2,p),p++),h[w]=A++,b=String(m)}if(b!==""){if(Object.prototype.hasOwnProperty.call(I,b)){if(b.charCodeAt(0)<256){for(o=0;p>o;o++)l<<=1,u==r-1?(u=0,d.push(a(l)),l=0):u++;for(f=b.charCodeAt(0),o=0;8>o;o++)l=l<<1|1&f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f>>=1}else{for(f=1,o=0;p>o;o++)l=l<<1|f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f=0;for(f=b.charCodeAt(0),o=0;16>o;o++)l=l<<1|1&f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f>>=1}v--,v==0&&(v=Math.pow(2,p),p++),delete I[b]}else for(f=h[b],o=0;p>o;o++)l=l<<1|1&f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f>>=1;v--,v==0&&(v=Math.pow(2,p),p++)}for(f=2,o=0;p>o;o++)l=l<<1|1&f,u==r-1?(u=0,d.push(a(l)),l=0):u++,f>>=1;for(;;){if(l<<=1,u==r-1){d.push(a(l));break}u++}return d.join("")},_decompress:function(s,r,a){var o,f,g,h,I,m,w,b=[],v=4,A=4,p=3,d="",l=[],u={val:a(0),position:r,index:1};for(o=0;3>o;o+=1)b[o]=o;for(g=0,I=Math.pow(2,2),m=1;m!=I;)h=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=a(u.index++)),g|=(h>0?1:0)*m,m<<=1;switch(g){case 0:for(g=0,I=Math.pow(2,8),m=1;m!=I;)h=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=a(u.index++)),g|=(h>0?1:0)*m,m<<=1;w=e(g);break;case 1:for(g=0,I=Math.pow(2,16),m=1;m!=I;)h=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=a(u.index++)),g|=(h>0?1:0)*m,m<<=1;w=e(g);break;case 2:return""}for(b[3]=w,f=w,l.push(w);;){if(u.index>s)return"";for(g=0,I=Math.pow(2,p),m=1;m!=I;)h=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=a(u.index++)),g|=(h>0?1:0)*m,m<<=1;switch(w=g){case 0:for(g=0,I=Math.pow(2,8),m=1;m!=I;)h=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=a(u.index++)),g|=(h>0?1:0)*m,m<<=1;b[A++]=e(g),w=A-1,v--;break;case 1:for(g=0,I=Math.pow(2,16),m=1;m!=I;)h=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=a(u.index++)),g|=(h>0?1:0)*m,m<<=1;b[A++]=e(g),w=A-1,v--;break;case 2:return l.join("")}if(v==0&&(v=Math.pow(2,p),p++),b[w])d=b[w];else{if(w!==A)return null;d=f+f.charAt(0)}l.push(d),b[A++]=f+d.charAt(0),v--,f=d,v==0&&(v=Math.pow(2,p),p++)}}};return c}();const lt=Ae.decompressFromEncodedURIComponent,ct=Ae.compressToEncodedURIComponent;function ut(){const i={editors:[{id:1,code:`



`}],style:`<style>
  
</style>`},e=new URLSearchParams(document.location.search).get("code");let n;if(e)try{const t=lt(e);n=JSON.parse(t)}catch(t){console.error("Unable to parse url search parameters",t)}return le(n,"style")&&typeof n.style=="string"&&le(n,"editors")&&Array.isArray(n.editors)&&n.editors.every(dt)?{style:n.style,editors:n.editors}:i}function ft(i){const e=ct(JSON.stringify(i)),n=new URL(ce,window.location.origin);return n.searchParams.set("code",e),n}function dt(i){return le(i,"id")&&typeof i.id=="number"&&le(i,"code")&&typeof i.code=="string"}function le(i,e){return i?e in i:!1}function ht(i){let e,n,t,c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},i[0]],s={};for(let r=0;r<c.length;r+=1)s=R(s,c[r]);return{c(){e=M("svg"),n=M("g"),t=M("path"),this.h()},l(r){e=C(r,"svg",{xmlns:!0,viewBox:!0});var a=E(e);n=C(a,"g",{"data-name":!0});var o=E(n);t=C(o,"path",{d:!0,"data-name":!0}),E(t).forEach(_),o.forEach(_),a.forEach(_),this.h()},h(){y(t,"d","M18 15a3 3 0 0 0-2.1.86L8 12.34v-.67l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3zm0-10a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM5 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm13 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"),y(t,"data-name","share"),y(n,"data-name","Layer 2"),U(e,s)},m(r,a){L(r,e,a),$(e,n),$(n,t)},p(r,[a]){U(e,s=Y(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"},a&1&&r[0]]))},i:V,o:V,d(r){r&&_(e)}}}function gt(i,e,n){return i.$$set=t=>{n(0,e=R(R({},e),N(t)))},e=N(e),[e]}class mt extends j{constructor(e){super();H(this,e,gt,ht,X,{})}}function pt(i){let e,n;return e=new mt({}),{c(){z(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,c){S(e,t,c),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Me(i){let e;return{c(){e=te("URL copied to clipboard!")},l(n){e=ne(n,"URL copied to clipboard!")},m(n,t){L(n,e,t)},d(n){n&&_(e)}}}function _t(i){let e,n,t,c;e=new Q({props:{"aria-label":"Share",title:"Share",$$slots:{default:[pt]},$$scope:{ctx:i}}}),e.$on("click",i[5]);let s=i[2]&&Me();return{c(){z(e.$$.fragment),n=G(),t=D("span"),s&&s.c(),this.h()},l(r){P(e.$$.fragment,r),n=Z(r),t=F(r,"SPAN",{"aria-live":!0});var a=E(t);s&&s.l(a),a.forEach(_),this.h()},h(){y(t,"aria-live","polite")},m(r,a){S(e,r,a),L(r,n,a),L(r,t,a),s&&s.m(t,null),c=!0},p(r,a){const o={};a&1024&&(o.$$scope={dirty:a,ctx:r}),e.$set(o),r[2]?s||(s=Me(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i(r){c||(B(e.$$.fragment,r),c=!0)},o(r){x(e.$$.fragment,r),c=!1},d(r){O(e,r),r&&_(n),r&&_(t),s&&s.d()}}}function vt(i){let e,n,t,c,s,r,a,o,f,g,h,I,m,w,b,v,A,p,d;function l(k){i[7](k)}let u={$$slots:{default:[_t]},$$scope:{ctx:i}};i[3]!==void 0&&(u.editors=i[3]),w=new ot({props:u}),K.push(()=>ie(w,"editors",l)),w.$on("change",i[4]);function J(k){i[8](k)}let ee={};return i[0]!==void 0&&(ee.code=i[0]),A=new it({props:ee}),K.push(()=>ie(A,"code",J)),{c(){e=D("div"),n=D("h1"),t=te("HTML Preview"),c=G(),s=D("p"),r=te(`Test and share snippets of HTML and state tranformations with others.
        `),a=D("a"),o=te("For insipiration see ARIA-live region example."),f=te(`

        Remember to click play to see state transformations.`),g=G(),h=D("iframe"),m=G(),z(w.$$.fragment),v=G(),z(A.$$.fragment),this.h()},l(k){e=F(k,"DIV",{class:!0});var T=E(e);n=F(T,"H1",{});var q=E(n);t=ne(q,"HTML Preview"),q.forEach(_),c=Z(T),s=F(T,"P",{});var W=E(s);r=ne(W,`Test and share snippets of HTML and state tranformations with others.
        `),a=F(W,"A",{rel:!0,href:!0});var ue=E(a);o=ne(ue,"For insipiration see ARIA-live region example."),ue.forEach(_),f=ne(W,`

        Remember to click play to see state transformations.`),W.forEach(_),g=Z(T),h=F(T,"IFRAME",{class:!0,security:!0,src:!0,title:!0}),E(h).forEach(_),m=Z(T),P(w.$$.fragment,T),v=Z(T),P(A.$$.fragment,T),T.forEach(_),this.h()},h(){y(a,"rel","external"),y(a,"href",""+(ce+"/?code=eyJzdHlsZSI6IjxzdHlsZT5cbiAgKiB7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG48L3N0eWxlPiIsImVkaXRvcnMiOlt7ImlkIjoxLCJjb2RlIjoiPGRpdiByb2xlPVwic3RhdHVzXCI%252BXG4gIFxuPC9kaXY%252BIn0seyJpZCI6MiwiY29kZSI6IjxkaXYgcm9sZT1cInN0YXR1c1wiPlxuICBIZWxsbyB3b3JsZCFcbjwvZGl2PiJ9XX0%253D")),y(h,"class","sandbox svelte-1lch588"),y(h,"security","restricted"),Re(h.src,I=""+(ce+"/sandbox"))||y(h,"src",I),y(h,"title","Sandbox"),y(e,"class","wrapper svelte-1lch588")},m(k,T){L(k,e,T),$(e,n),$(n,t),$(e,c),$(e,s),$(s,r),$(s,a),$(a,o),$(s,f),$(e,g),$(e,h),i[6](h),$(e,m),S(w,e,null),$(e,v),S(A,e,null),d=!0},p(k,[T]){const q={};T&1028&&(q.$$scope={dirty:T,ctx:k}),!b&&T&8&&(b=!0,q.editors=k[3],se(()=>b=!1)),w.$set(q);const W={};!p&&T&1&&(p=!0,W.code=k[0],se(()=>p=!1)),A.$set(W)},i(k){d||(B(w.$$.fragment,k),B(A.$$.fragment,k),d=!0)},o(k){x(w.$$.fragment,k),x(A.$$.fragment,k),d=!1},d(k){k&&_(e),i[6](null),O(w),O(A)}}}function wt(i,e,n){const t={};let c,{editors:s,style:r}=ut();we(()=>{a({type:"CONTENT_CHANGE",value:s[0].code})});function a(m,w=20){var A,p,d;const b=(A=t.sandbox)==null?void 0:A.contentWindow,v=(d=(p=t.sandbox)==null?void 0:p.contentDocument)==null?void 0:d.readyState;console.log("iframe readyState",v),v==="complete"&&b?b.postMessage(m):w>0&&setTimeout(()=>a(m,w-1),500)}function o(m){a({type:"CONTENT_CHANGE",value:m.detail.value})}function f(){const m=ft({style:r,editors:s});window.history.pushState({},"",m),n(2,c=m.toString()),navigator.clipboard.writeText(c).then(()=>{setTimeout(()=>{n(2,c="")},3e3)})}function g(m){K[m?"unshift":"push"](()=>{t.sandbox=m,n(1,t)})}function h(m){s=m,n(3,s)}function I(m){r=m,n(0,r)}return i.$$.update=()=>{i.$$.dirty&1&&a({type:"STYLE_CHANGE",value:r})},[r,t,c,s,o,f,g,h,I]}class Et extends j{constructor(e){super();H(this,e,wt,vt,X,{})}}export{Et as default};