import{r as n}from"./app-6fa01f51.js";function S(e,o){const r=n.createContext(o);function s(u){const{children:t,...c}=u,i=n.useMemo(()=>c,Object.values(c));return n.createElement(r.Provider,{value:i},t)}function a(u){const t=n.useContext(r);if(t)return t;if(o!==void 0)return o;throw new Error(`\`${u}\` must be used within \`${e}\``)}return s.displayName=e+"Provider",[s,a]}function C(e,o=[]){let r=[];function s(u,t){const c=n.createContext(t),i=r.length;r=[...r,t];function $(d){const{scope:f,children:p,...l}=d,x=(f==null?void 0:f[e][i])||c,b=n.useMemo(()=>l,Object.values(l));return n.createElement(x.Provider,{value:b},p)}function v(d,f){const p=(f==null?void 0:f[e][i])||c,l=n.useContext(p);if(l)return l;if(t!==void 0)return t;throw new Error(`\`${d}\` must be used within \`${u}\``)}return $.displayName=u+"Provider",[$,v]}const a=()=>{const u=r.map(t=>n.createContext(t));return function(c){const i=(c==null?void 0:c[e])||u;return n.useMemo(()=>({[`__scope${e}`]:{...c,[e]:i}}),[c,i])}};return a.scopeName=e,[s,m(a,...o)]}function m(...e){const o=e[0];if(e.length===1)return o;const r=()=>{const s=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(u){const t=s.reduce((c,{useScope:i,scopeName:$})=>{const d=i(u)[`__scope${$}`];return{...c,...d}},{});return n.useMemo(()=>({[`__scope${o.scopeName}`]:t}),[t])}};return r.scopeName=o.scopeName,r}function P(e){const o=n.useRef(e);return n.useEffect(()=>{o.current=e}),n.useMemo(()=>(...r)=>{var s;return(s=o.current)===null||s===void 0?void 0:s.call(o,...r)},[])}const E=globalThis!=null&&globalThis.document?n.useLayoutEffect:()=>{};export{C as $,P as a,E as b,S as c};
