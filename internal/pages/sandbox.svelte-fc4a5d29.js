import{S as g,i as v,s as E,e as p,k as b,c as f,a as h,d as u,m as T,g as k,J as m,N as w,K as _,$ as N,V as y}from"../chunks/vendor-d81b3668.js";function S(o){let n,t,e,i,l,c;return{c(){n=p("div"),t=p("style"),e=b(),i=p("div")},l(s){n=f(s,"DIV",{});var a=h(n);t=f(a,"STYLE",{});var r=h(t);r.forEach(u),e=T(a),i=f(a,"DIV",{}),h(i).forEach(u),a.forEach(u)},m(s,a){k(s,n,a),m(n,t),o[2](t),m(n,e),m(n,i),o[3](i),l||(c=w(window,"message",o[1]),l=!0)},p:_,i:_,o:_,d(s){s&&u(n),o[2](null),o[3](null),l=!1,c()}}}function C(o,n,t){const e={};function i(s){const{type:a,value:r}=s.data;switch(a){case"CONTENT_CHANGE":if(e==null?void 0:e.root){const d=document.createElement("div");d.innerHTML=r,N(e.root,d)}break;case"STYLE_CHANGE":if(e==null?void 0:e.styles){const d=r.replace("<style>","").replace("</style>","");t(0,e.styles.innerHTML=d,e)}break;default:console.error("Unknown event caught",{type:a,value:r})}}function l(s){y[s?"unshift":"push"](()=>{e.styles=s,t(0,e)})}function c(s){y[s?"unshift":"push"](()=>{e.root=s,t(0,e)})}return[e,i,l,c]}class L extends g{constructor(n){super();v(this,n,C,S,E,{})}}export{L as default};