import{r as l}from"./index-uubelm5h.js";var d={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=l,E=Symbol.for("react.element"),R=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,v=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,t){var n,o={},i=null,s=null;t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(s=r.ref);for(n in r)h.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:E,type:e,key:i,ref:s,props:o,_owner:v.current}}c.Fragment=R;c.jsx=m;c.jsxs=m;d.exports=c;var a=d.exports;function g(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function y(...e){return r=>e.forEach(t=>g(t,r))}function w(...e){return l.useCallback(y(...e),e)}var j=l.forwardRef((e,r)=>{const{children:t,...n}=e,o=l.Children.toArray(t),i=o.find(O);if(i){const s=i.props.children,f=o.map(p=>p===i?l.Children.count(s)>1?l.Children.only(null):l.isValidElement(s)?s.props.children:null:p);return a.jsx(u,{...n,ref:r,children:l.isValidElement(s)?l.cloneElement(s,void 0,f):null})}return a.jsx(u,{...n,ref:r,children:t})});j.displayName="Slot";var u=l.forwardRef((e,r)=>{const{children:t,...n}=e;if(l.isValidElement(t)){const o=b(t);return l.cloneElement(t,{...S(n,t.props),ref:r?y(r,o):o})}return l.Children.count(t)>1?l.Children.only(null):null});u.displayName="SlotClone";var C=({children:e})=>a.jsx(a.Fragment,{children:e});function O(e){return l.isValidElement(e)&&e.type===C}function S(e,r){const t={...r};for(const n in r){const o=e[n],i=r[n];/^on[A-Z]/.test(n)?o&&i?t[n]=(...f)=>{i(...f),o(...f)}:o&&(t[n]=o):n==="style"?t[n]={...o,...i}:n==="className"&&(t[n]=[o,i].filter(Boolean).join(" "))}return{...e,...t}}function b(e){var n,o;let r=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(r=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}export{j as S,a as j,w as u};
