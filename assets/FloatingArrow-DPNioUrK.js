import{c_ as i}from"./index-CorgkmYx.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},w={width:12,height:6,strokeWidth:1},$=({floatingLayout:h,key:n,ref:l})=>{const{width:t,height:r,strokeWidth:o}=w,e=t/2,a=h==="vertical",s=`M0,0 H${t} L${t-e},${r} Q${e},${r} ${e},${r} Z`;return i("svg",{"aria-hidden":"true",class:c.arrow,height:t,key:n,ref:l,viewBox:`0 0 ${t} ${t+(a?0:o)}`,width:t+(a?o:0)},i("path",{class:c.arrowStroke,d:s,fill:"none","stroke-width":o+1}),i("path",{d:s,stroke:"none"}))};export{$ as F};
