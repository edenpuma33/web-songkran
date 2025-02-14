import{gY as S,H as O,g as v,dD as x,gZ as C}from"./index-CorgkmYx.js";import{O as F}from"./quat-DBd2Nb1m.js";import{e as k}from"./quatf64-aQ5IuZRd.js";import{t as A,n as w}from"./vec3f32-nZdmKIgz.js";import{a as R,b as U,d as B}from"./PointCloudUniqueValueRenderer-Dyqp-rcc.js";import{w as J,l as N,c as V,I as T}from"./I3SBinaryReader-CDPL8-vh.js";import{I as q}from"./orientedBoundingBox-dyMOilX1.js";import"./mat3f64-q3fE-ZOt.js";import"./VertexAttribute-BdZWZuT1.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-r_S_8DDe.js";import"./computeTranslationToOriginAndRotation-BhJmC_0D.js";import"./plane-BzYZw24a.js";function z(l,t,a,n){const{rendererJSON:u,isRGBRenderer:m}=l;let o=null,s=null;if(t&&m)o=t;else if(t&&(u==null?void 0:u.type)==="pointCloudUniqueValueRenderer"){s=R.fromJSON(u);const e=s.colorUniqueValueInfos;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const i=(c?c(t[r]):t[r])+"";for(let f=0;f<e.length;f++)if(e[f].values.includes(i)){o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;break}}}else if(t&&(u==null?void 0:u.type)==="pointCloudStretchRenderer"){s=U.fromJSON(u);const e=s.stops;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const i=c?c(t[r]):t[r],f=e.length-1;if(i<e[0].value)o[3*r]=e[0].color.r,o[3*r+1]=e[0].color.g,o[3*r+2]=e[0].color.b;else if(i>=e[f].value)o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;else for(let b=1;b<e.length;b++)if(i<e[b].value){const p=(i-e[b-1].value)/(e[b].value-e[b-1].value);o[3*r]=e[b].color.r*p+e[b-1].color.r*(1-p),o[3*r+1]=e[b].color.g*p+e[b-1].color.g*(1-p),o[3*r+2]=e[b].color.b*p+e[b-1].color.b*(1-p);break}}}else if(t&&(u==null?void 0:u.type)==="pointCloudClassBreaksRenderer"){s=B.fromJSON(u);const e=s.colorClassBreakInfos;o=new Uint8Array(3*n);const c=g(s.fieldTransformType);for(let r=0;r<n;r++){const i=c?c(t[r]):t[r];for(let f=0;f<e.length;f++)if(i>=e[f].minValue&&i<=e[f].maxValue){o[3*r]=e[f].color.r,o[3*r+1]=e[f].color.g,o[3*r+2]=e[f].color.b;break}}}else o=new Uint8Array(3*n).fill(255);if(a&&(s!=null&&s.colorModulation)){const e=s.colorModulation.minValue,c=s.colorModulation.maxValue,r=.3;for(let i=0;i<n;i++){const f=a[i],b=f>=c?1:f<=e?r:r+(1-r)*(f-e)/(c-e);o[3*i]=b*o[3*i],o[3*i+1]=b*o[3*i+1],o[3*i+2]=b*o[3*i+2]}}return o}function Y(l,t){if(l.encoding==null||l.encoding===""){const a=J(t,l);if(a.vertexAttributes.position==null)return;const n=N(t,a.vertexAttributes.position),u=a.header.fields,m=[u.offsetX,u.offsetY,u.offsetZ],o=[u.scaleX,u.scaleY,u.scaleZ],s=n.length/3,e=new Float64Array(3*s);for(let c=0;c<s;c++)e[3*c]=n[3*c]*o[0]+m[0],e[3*c+1]=n[3*c+1]*o[1]+m[1],e[3*c+2]=n[3*c+2]*o[2]+m[2];return e}if(l.encoding==="lepcc-xyz")return V(t).result}function h(l,t,a){return l!=null&&l.attributeInfo.useElevation?t?Z(t,a):null:l!=null&&l.attributeInfo.storageInfo?T(l.attributeInfo.storageInfo,l.buffer,a):null}function Z(l,t){const a=new Float64Array(t);for(let n=0;n<t;n++)a[n]=l[3*n+2];return a}function E(l,t,a,n,u){const m=l.length/3;let o=0;for(let s=0;s<m;s++){let e=!0;for(let c=0;c<n.length&&e;c++){const{filterJSON:r}=n[c],i=u[c].values[s];switch(r.type){case"pointCloudValueFilter":{const f=r.mode==="exclude";r.values.includes(i)===f&&(e=!1);break}case"pointCloudBitfieldFilter":{const f=M(r.requiredSetBits),b=M(r.requiredClearBits);((i&f)!==f||i&b)&&(e=!1);break}case"pointCloudReturnFilter":{const f=15&i,b=i>>>4&15,p=b>1,D=f===1,I=f===b;let y=!1;for(const d of r.includedReturns)if(d==="last"&&I||d==="firstOfMany"&&D&&p||d==="lastOfMany"&&I&&p||d==="single"&&!p){y=!0;break}y||(e=!1);break}}}e&&(a[o]=s,l[3*o]=l[3*s],l[3*o+1]=l[3*s+1],l[3*o+2]=l[3*s+2],t[3*o]=t[3*s],t[3*o+1]=t[3*s+1],t[3*o+2]=t[3*s+2],o++)}return o}function g(l){switch(l){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function M(l){let t=0;for(const a of l||[])t|=1<<a;return t}class X{transform(t){const a=this._transform(t),n=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&n.push(a.pointIdFilterMap.buffer);for(const u of a.attributes)"buffer"in u.values&&S(u.values.buffer)&&u.values.buffer!==a.rgb.buffer&&n.push(u.values.buffer);return Promise.resolve({result:a,transferList:n})}_transform(t){const a=Y(t.schema,t.geometryBuffer);let n=a.length/3,u=null;const m=new Array,o=h(t.primaryAttributeData,a,n);t.primaryAttributeData!=null&&o&&m.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:o});const s=h(t.modulationAttributeData,a,n);t.modulationAttributeData!=null&&s&&m.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:s});let e=z(t.rendererInfo,o,s,n);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const r=t.filterAttributesData.filter(O).map(i=>{const f=h(i,a,n),b={attributeInfo:i.attributeInfo,values:f};return m.push(b),b});u=new Uint32Array(n),n=E(a,e,u,t.filterInfo,r)}for(const r of t.userAttributesData){const i=h(r,a,n);m.push({attributeInfo:r.attributeInfo,values:i})}3*n<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*n))),j(a,n,t.elevationOffset);const c=_(a,n,q.fromData(t.obbData),v.fromJSON(t.inSR),v.fromJSON(t.outSR));return{obbData:t.obbData,points:c,rgb:e,attributes:m,pointIdFilterMap:u}}}function _(l,t,a,n,u){if(!x(l,n,0,l,u,0,t))throw new Error("Can't reproject");const m=A(a.center),o=w(),s=w(),e=A(a.halfSize);F($,a.quaternion);const c=new Float32Array(3*t);for(let r=0;r<t;r++){let i=3*r;o[0]=l[i]-m[0],o[1]=l[i+1]-m[1],o[2]=l[i+2]-m[2],C(s,o,$),e[0]=Math.max(e[0],Math.abs(s[0])),e[1]=Math.max(e[1],Math.abs(s[1])),e[2]=Math.max(e[2],Math.abs(s[2])),c[i++]=o[0],c[i++]=o[1],c[i]=o[2]}return a.halfSize=e,c}function j(l,t,a){if(a!==0)for(let n=0;n<t;n++)l[3*n+2]+=a}const $=k();function lt(){return new X}export{lt as default};
