function E(){}function nt(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function G(){return Object.create(null)}function w(t){t.forEach(X)}function it(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function At(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function ot(t){return Object.keys(t).length===0}function vt(t,e,n,i){if(t){const s=J(t,e,n,i);return t[0](s)}}function J(t,e,n,i){return t[1]&&i?nt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ct(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const f=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)f[l]=e.dirty[l]|s[l];return f}return e.dirty|s}return e.dirty}function Tt(t,e,n,i,s,f){if(s){const o=J(e,n,i,f);t.p(o,s)}}function St(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let S=!1;function ct(){S=!0}function lt(){S=!1}function rt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let r=0;r<e.length;r++){const u=e[r];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const r=e[c].claim_order,u=(s>0&&e[n[s]].claim_order<=r?s+1:rt(1,s,d=>e[n[d]].claim_order,r))-1;i[c]=n[u]+1;const _=u+1;n[_]=c,s=Math.max(_,s)}const f=[],o=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(f.push(e[c-1]);l>=c;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);f.reverse(),o.sort((c,r)=>c.claim_order-r.claim_order);for(let c=0,r=0;c<o.length;c++){for(;r<f.length&&o[c].claim_order>=f[r].claim_order;)r++;const u=r<f.length?f[r]:null;t.insertBefore(o[c],u)}}function at(t,e){if(S){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){S&&!n?at(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode.removeChild(t)}function dt(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function Mt(){return B(" ")}function qt(){return B("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,e,n,i,s=!1){ht(t);const f=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,s||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function mt(t,e,n,i){return K(t,s=>s.nodeName===e,s=>{const f=[];for(let o=0;o<s.attributes.length;o++){const l=s.attributes[o];n[l.name]||f.push(l.name)}f.forEach(o=>s.removeAttribute(o))},()=>i(e))}function Dt(t,e,n){return mt(t,e,n,dt)}function pt(t,e){return K(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Wt(t){return pt(t," ")}function zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Bt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Pt(t,e,n){t.classList[n?"add":"remove"](e)}function yt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let N;function k(t){N=t}function j(){if(!N)throw new Error("Function called outside component initialization");return N}function Ut(t){j().$$.on_mount.push(t)}function It(t){j().$$.after_update.push(t)}function Ft(){const t=j();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=yt(e,n);i.slice().forEach(f=>{f.call(t,s)})}}}function Ht(t,e){j().$$.context.set(t,e)}function Rt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],Q=[],M=[],P=[],V=Promise.resolve();let U=!1;function Y(){U||(U=!0,V.then(Z))}function Xt(){return Y(),V}function I(t){M.push(t)}function Gt(t){P.push(t)}const F=new Set;let q=0;function Z(){const t=N;do{for(;q<A.length;){const e=A[q];q++,k(e),gt(e.$$)}for(k(null),A.length=0,q=0;Q.length;)Q.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];F.has(n)||(F.add(n),n())}M.length=0}while(A.length);for(;P.length;)P.pop()();U=!1,F.clear(),k(t)}function gt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const L=new Set;let b;function Jt(){b={r:0,c:[],p:b}}function Kt(){b.r||w(b.c),b=b.p}function tt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function bt(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),b.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Qt(t,e){bt(t,1,1,()=>{e.delete(t.key)})}function Vt(t,e,n,i,s,f,o,l,c,r,u,_){let d=t.length,m=f.length,h=d;const O={};for(;h--;)O[t[h].key]=h;const v=[],D=new Map,W=new Map;for(h=m;h--;){const a=_(s,f,h),p=n(a);let y=o.get(p);y?i&&y.p(a,e):(y=r(p,a),y.c()),D.set(p,v[h]=y),p in O&&W.set(p,Math.abs(h-O[p]))}const H=new Set,R=new Set;function z(a){tt(a,1),a.m(l,u),o.set(a.key,a),u=a.first,m--}for(;d&&m;){const a=v[m-1],p=t[d-1],y=a.key,C=p.key;a===p?(u=a.first,d--,m--):D.has(C)?!o.has(y)||H.has(y)?z(a):R.has(C)?d--:W.get(y)>W.get(C)?(R.add(y),z(a)):(H.add(C),d--):(c(p,o),d--)}for(;d--;){const a=t[d];D.has(a.key)||c(a,o)}for(;m;)z(v[m-1]);return v}function Yt(t,e){const n={},i={},s={$$scope:1};let f=t.length;for(;f--;){const o=t[f],l=e[f];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[f]=l}else for(const c in o)s[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Zt(t){return typeof t=="object"&&t!==null?t:{}}function te(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ee(t){t&&t.c()}function ne(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:s,on_mount:f,on_destroy:o,after_update:l}=t.$$;s&&s.m(e,n),i||I(()=>{const c=f.map(X).filter(it);o?o.push(...c):w(c),t.$$.on_mount=[]}),l.forEach(I)}function $t(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(A.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,i,s,f,o,l=[-1]){const c=N;k(t);const r=t.$$={fragment:null,ctx:null,props:f,update:E,not_equal:s,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(r.root);let u=!1;if(r.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return r.ctx&&s(r.ctx[_],r.ctx[_]=h)&&(!r.skip_bound&&r.bound[_]&&r.bound[_](h),u&&Et(t,_)),d}):[],r.update(),u=!0,w(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){ct();const _=_t(e.target);r.fragment&&r.fragment.l(_),_.forEach(ut)}else r.fragment&&r.fragment.c();e.intro&&tt(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),lt(),Z()}k(c)}class se{$destroy(){$t(this,1),this.$destroy=E}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function oe(t,e=E){let n;const i=new Set;function s(l){if(st(t,l)&&(t=l,n)){const c=!$.length;for(const r of i)r[1](),$.push(r,t);if(c){for(let r=0;r<$.length;r+=2)$[r][0]($[r+1]);$.length=0}}}function f(l){s(l(t))}function o(l,c=E){const r=[l,c];return i.add(r),i.size===1&&(n=e(s)||E),l(t),()=>{i.delete(r),i.size===0&&(n(),n=null)}}return{set:s,update:f,subscribe:o}}function wt(t,e){if(Nt(t,e))return kt(t,e);const n=Array.from(e.childNodes).slice(t.childNodes.length),i=[];t.childNodes.forEach((s,f)=>{const o=e.childNodes[f];if(!o)return i.push(s);(s.hasChildNodes()||o.hasChildNodes())&&wt(s,o),x(s)&&x(o)&&s.textContent!==o.textContent&&(s.textContent=o.textContent)});for(const s of i)t.removeChild(s);for(const s of n)t.appendChild(s);if(g(t)){const s=et(t),f=et(e),o=g(e);for(const{key:l,value:c}of f)t.getAttribute(l)!==c&&t.setAttribute(l,c);for(const{key:l}of s)o&&(e.hasAttribute(l)||t.removeAttribute(l))}}function g(t){return t!=null&&t.nodeType===Node.ELEMENT_NODE}function x(t){return t!=null&&t.nodeType===Node.TEXT_NODE}function et(t){return g(t)?t.getAttributeNames().reduce((e,n)=>[...e,{key:n,value:t.getAttribute(n)||""}],[]):[]}function Nt(t,e){return t.nodeType!==e.nodeType?!0:g(t)&&g(e)?t.tagName!==e.tagName:t.textContent!==e.textContent}function kt(t,e){g(t)?t.replaceWith(e):x(t)&&x(e)?t.textContent=e.textContent:x(t)&&g(e)?t.parentElement?t.parentElement.replaceChild(e,t):console.warn(`Unexpected case, missing parentElement: ${t}`):console.warn(["Unexpected case:",`isElement(current): ${g(t)}`,`isTextNode(current): ${x(t)}`,`isElement(next): ${g(e)}`,`isTextNode(next): ${x(e)}`].join(" "))}export{Zt as A,$t as B,nt as C,oe as D,Xt as E,vt as F,Tt as G,St as H,Ct as I,at as J,E as K,Lt as L,Pt as M,Ft as N,Q as O,Gt as P,Vt as Q,w as R,se as S,te as T,Qt as U,Rt as V,At as W,wt as X,_t as a,Ot as b,Dt as c,ut as d,dt as e,Bt as f,jt as g,pt as h,ie as i,zt as j,Mt as k,qt as l,Wt as m,Jt as n,bt as o,Kt as p,tt as q,Ht as r,st as s,B as t,It as u,Ut as v,ee as w,ne as x,xt as y,Yt as z};
