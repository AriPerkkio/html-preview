function x(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function J(){return Object.create(null)}function w(t){t.forEach(G)}function tt(t){return typeof t=="function"}function et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function xt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function nt(t){return Object.keys(t).length===0}function wt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function $t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)a[l]=e.dirty[l]|r[l];return a}return e.dirty|r}return e.dirty}function kt(t,e,n,i,r,a){if(r){const s=K(e,n,i,a);t.p(s,r)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let N=!1;function it(){N=!0}function ct(){N=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:rt(1,r,d=>e[n[d]].claim_order,o))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const a=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);a.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<a.length&&s[c].claim_order>=a[o].claim_order;)o++;const f=o<a.length?a[o]:null;t.insertBefore(s[c],f)}}function lt(t,e){if(N){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){N&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function at(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function St(){return O(" ")}function jt(){return O("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ut(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,r=!1){ft(t);const a=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function dt(t,e,n,i){return Q(t,r=>r.nodeName===e,r=>{const a=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||a.push(l.name)}a.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ct(t,e,n){return dt(t,e,n,at)}function _t(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>O(e),!0)}function Mt(t){return _t(t," ")}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Tt(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let $;function k(t){$=t}function A(){if(!$)throw new Error("Function called outside component initialization");return $}function zt(t){A().$$.on_mount.push(t)}function Bt(t){A().$$.after_update.push(t)}function Ot(){const t=A();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=ht(e,n);i.slice().forEach(a=>{a.call(t,r)})}}}function Pt(t,e){A().$$.context.set(t,e)}function Dt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const E=[],R=[],C=[],U=[],W=Promise.resolve();let P=!1;function V(){P||(P=!0,W.then(X))}function Ft(){return V(),W}function D(t){C.push(t)}const F=new Set;let M=0;function X(){const t=$;do{for(;M<E.length;){const e=E[M];M++,k(e),mt(e.$$)}for(k(null),E.length=0,M=0;R.length;)R.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];F.has(n)||(F.add(n),n())}C.length=0}while(E.length);for(;U.length;)U.pop()();P=!1,F.clear(),k(t)}function mt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const q=new Set;let g;function Ht(){g={r:0,c:[],p:g}}function It(){g.r||w(g.c),g=g.p}function Y(t,e){t&&t.i&&(q.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),g.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Gt(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function Jt(t,e,n,i,r,a,s,l,c,o,f,_){let d=t.length,m=a.length,h=d;const L={};for(;h--;)L[t[h].key]=h;const v=[],T=new Map,z=new Map;for(h=m;h--;){const u=_(r,a,h),p=n(u);let y=s.get(p);y?i&&y.p(u,e):(y=o(p,u),y.c()),T.set(p,v[h]=y),p in L&&z.set(p,Math.abs(h-L[p]))}const H=new Set,I=new Set;function B(u){Y(u,1),u.m(l,f),s.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=v[m-1],p=t[d-1],y=u.key,S=p.key;u===p?(f=u.first,d--,m--):T.has(S)?!s.has(y)||H.has(y)?B(u):I.has(S)?d--:z.get(y)>z.get(S)?(I.add(y),B(u)):(H.add(S),d--):(c(p,s),d--)}for(;d--;){const u=t[d];T.has(u.key)||c(u,s)}for(;m;)B(v[m-1]);return v}function Kt(t,e){const n={},i={},r={$$scope:1};let a=t.length;for(;a--;){const s=t[a],l=e[a];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[a]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Qt(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t){t&&t.c()}function Ut(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,on_mount:a,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||D(()=>{const c=a.map(G).filter(tt);s?s.push(...c):w(c),t.$$.on_mount=[]}),l.forEach(D)}function gt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(E.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,a,s,l=[-1]){const c=$;k(t);const o=t.$$={fragment:null,ctx:null,props:a,update:x,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return o.ctx&&r(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),f&&bt(t,_)),d}):[],o.update(),f=!0,w(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){it();const _=ut(e.target);o.fragment&&o.fragment.l(_),_.forEach(ot)}else o.fragment&&o.fragment.c();e.intro&&Y(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),ct(),X()}k(c)}class Vt{$destroy(){gt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const b=[];function Xt(t,e=x){let n;const i=new Set;function r(l){if(et(t,l)&&(t=l,n)){const c=!b.length;for(const o of i)o[1](),b.push(o,t);if(c){for(let o=0;o<b.length;o+=2)b[o][0](b[o+1]);b.length=0}}}function a(l){r(l(t))}function s(l,c=x){const o=[l,c];return i.add(o),i.size===1&&(n=e(r)||x),l(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:r,update:a,subscribe:s}}export{Qt as A,gt as B,Z as C,Xt as D,Ft as E,wt as F,kt as G,Et as H,$t as I,lt as J,x as K,Nt as L,Tt as M,Ot as N,R as O,Jt as P,w as Q,Gt as R,Vt as S,Dt as T,xt as U,ut as a,At as b,Ct as c,ot as d,at as e,Lt as f,vt as g,_t as h,Wt as i,qt as j,St as k,jt as l,Mt as m,Ht as n,pt as o,It as p,Y as q,Pt as r,et as s,O as t,Bt as u,zt as v,Rt as w,Ut as x,yt as y,Kt as z};
