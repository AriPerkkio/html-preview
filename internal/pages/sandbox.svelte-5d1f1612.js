import{S as T,i as v,s as E,e as p,k as M,c as f,a as m,d as u,m as H,b as y,g as L,J as _,N as w,K as g,v as k,$ as C,V as b}from"../chunks/vendor-d81b3668.js";function N(n){let s,a,o,e,i,l;return{c(){s=p("div"),a=p("style"),o=M(),e=p("div"),this.h()},l(r){s=f(r,"DIV",{"data-state":!0});var t=m(s);a=f(t,"STYLE",{});var d=m(a);d.forEach(u),o=H(t),e=f(t,"DIV",{}),m(e).forEach(u),t.forEach(u),this.h()},h(){y(s,"data-state",n[0])},m(r,t){L(r,s,t),_(s,a),n[3](a),_(s,o),_(s,e),n[4](e),i||(l=w(window,"message",n[2]),i=!0)},p(r,[t]){t&1&&y(s,"data-state",r[0])},i:g,o:g,d(r){r&&u(s),n[3](null),n[4](null),i=!1,l()}}}function S(n,s){const a=n.outerHTML,o=s.outerHTML;a!==o&&console.warn("DOM changes do not match",{actualOuterHTML:o,expectedOuterHTML:a})}function O(n,s,a){let o="";k(()=>{a(0,o="sandbox-ready")});const e={};function i(t){const{type:d,value:h}=t.data;switch(d){case"CONTENT_CHANGE":if(e==null?void 0:e.root){const c=document.createElement("div");c.innerHTML=h;try{C(e.root,c)}catch{}S(c,e.root)}break;case"STYLE_CHANGE":if(e==null?void 0:e.styles){const c=h.replace("<style>","").replace("</style>","");a(1,e.styles.innerHTML=c,e)}break;default:console.error("Unknown event caught",{type:d,value:h})}}function l(t){b[t?"unshift":"push"](()=>{e.styles=t,a(1,e)})}function r(t){b[t?"unshift":"push"](()=>{e.root=t,a(1,e)})}return[o,e,i,l,r]}class A extends T{constructor(s){super();v(this,s,O,N,E,{})}}export{A as default};
