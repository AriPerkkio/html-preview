import{S as v,i as E,s as S,e as h,k as T,c as p,a as g,d as f,m as k,b as y,g as w,J as m,N as M,K as _,v as N,$ as C,V as b}from"../chunks/vendor-d81b3668.js";function H(o){let t,n,l,e,i,d;return{c(){t=h("div"),n=h("style"),l=T(),e=h("div"),this.h()},l(a){t=p(a,"DIV",{"data-state":!0});var s=g(t);n=p(s,"STYLE",{});var r=g(n);r.forEach(f),l=k(s),e=p(s,"DIV",{}),g(e).forEach(f),s.forEach(f),this.h()},h(){y(t,"data-state",o[0])},m(a,s){w(a,t,s),m(t,n),o[3](n),m(t,l),m(t,e),o[4](e),i||(d=M(window,"message",o[2]),i=!0)},p(a,[s]){s&1&&y(t,"data-state",a[0])},i:_,o:_,d(a){a&&f(t),o[3](null),o[4](null),i=!1,d()}}}function L(o,t,n){let l="";N(()=>{n(0,l="sandbox-ready")});const e={};console.log("Sandbox loaded");function i(s){const{type:r,value:c}=s.data;switch(console.log("Sandbox onMessage",r,c),r){case"CONTENT_CHANGE":if(e==null?void 0:e.root){const u=document.createElement("div");u.innerHTML=c,C(e.root,u)}else console.log("refs.root is missing");break;case"STYLE_CHANGE":if(e==null?void 0:e.styles){const u=c.replace("<style>","").replace("</style>","");n(1,e.styles.innerHTML=u,e)}else console.log("refs.styles is missing");break;default:console.error("Unknown event caught",{type:r,value:c})}}function d(s){b[s?"unshift":"push"](()=>{e.styles=s,n(1,e)})}function a(s){b[s?"unshift":"push"](()=>{e.root=s,n(1,e)})}return[l,e,i,d,a]}class A extends v{constructor(t){super();E(this,t,L,H,S,{})}}export{A as default};
