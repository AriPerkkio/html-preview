import{S as y,i as b,s as v,e as p,k as E,c as f,a as g,d as u,m as S,g as T,J as h,N as k,K as m,$ as w,V as _}from"../chunks/vendor-d81b3668.js";function N(a){let n,t,e,l,r,c;return{c(){n=p("div"),t=p("style"),e=E(),l=p("div")},l(s){n=f(s,"DIV",{});var o=g(n);t=f(o,"STYLE",{});var i=g(t);i.forEach(u),e=S(o),l=f(o,"DIV",{}),g(l).forEach(u),o.forEach(u)},m(s,o){T(s,n,o),h(n,t),a[2](t),h(n,e),h(n,l),a[3](l),r||(c=k(window,"message",a[1]),r=!0)},p:m,i:m,o:m,d(s){s&&u(n),a[2](null),a[3](null),r=!1,c()}}}function C(a,n,t){const e={};console.log("Sandbox loaded");function l(s){const{type:o,value:i}=s.data;switch(console.log("Sandbox onMessage",o,i),o){case"CONTENT_CHANGE":if(e==null?void 0:e.root){const d=document.createElement("div");d.innerHTML=i,w(e.root,d)}else console.log("refs.root is missing");break;case"STYLE_CHANGE":if(e==null?void 0:e.styles){const d=i.replace("<style>","").replace("</style>","");t(0,e.styles.innerHTML=d,e)}else console.log("refs.styles is missing");break;default:console.error("Unknown event caught",{type:o,value:i})}}function r(s){_[s?"unshift":"push"](()=>{e.styles=s,t(0,e)})}function c(s){_[s?"unshift":"push"](()=>{e.root=s,t(0,e)})}return[e,l,r,c]}class L extends y{constructor(n){super();b(this,n,C,N,v,{})}}export{L as default};
