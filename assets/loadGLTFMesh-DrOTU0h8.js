import{s as D,D as L,c3 as B,eW as F,ip as P,bC as G,eC as z,gF as U,gG as C,gH as N,ct as h}from"./index-CorgkmYx.js";import{e as S}from"./mat3f64-q3fE-ZOt.js";import{w as q,m as H,c as K,f as Q}from"./Mesh-Cdpkv-Ll.js";import{p as V}from"./MeshVertexAttributes-bH-5vyf6.js";import{s as E}from"./meshVertexSpaceUtils-Cu1f-oO7.js";import{c as O,x as I,L as W,O as R,i as j,E as k,u as J,T as X}from"./BufferView-BTSIaNVu.js";import{t as Y,r as Z,u as ee,n as A}from"./vec3-BwzP2Z1Q.js";import{f as te,o as re,u as M}from"./vec4-CHTwQPOE.js";import{e as ne}from"./types-D0PSWh4d.js";import{loadGLTF as oe}from"./loader-Z2PB4OzT.js";import{n as se,o as ae,f as le,a as w,b as ie,l as ue,e as ce,c as fe,d as me}from"./DefaultMaterial_COLOR_GAMMA-DtgzjUNZ.js";import{B as pe}from"./vertexSpaceConversion-BdhAJlfF.js";import{r as de}from"./resourceUtils-Bkiv_WwF.js";import"./MeshTransform-Dz9M0eog.js";import"./mat4f64-CSKppSlJ.js";import"./quat-DBd2Nb1m.js";import"./quatf64-aQ5IuZRd.js";import"./MeshLocalVertexSpace-DAVvI3Z3.js";import"./earcut-D9gy186-.js";import"./Indices-D7gOIxSf.js";import"./plane-BzYZw24a.js";import"./deduplicate-C42Xb_29.js";import"./projectPointToVector-BSiCSeaS.js";import"./spatialReferenceEllipsoidUtils-r_S_8DDe.js";import"./computeTranslationToOriginAndRotation-BhJmC_0D.js";import"./External-B2AdFcDo.js";import"./infoFor3D-CxdEiWhp.js";import"./basicInterfaces-CZwQPxTp.js";function ge(e,r,t){const u=e.typedBuffer,o=e.typedBufferStride,a=r.typedBuffer,c=r.typedBufferStride,i=t?t.count:r.count;let s=((t==null?void 0:t.dstIndex)??0)*o,m=((t==null?void 0:t.srcIndex)??0)*c;for(let l=0;l<i;++l){for(let n=0;n<9;++n)u[s+n]=a[m+n];s+=o,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function xe(e,r,t){const u=e.typedBuffer,o=e.typedBufferStride,a=r.typedBuffer,c=r.typedBufferStride,i=t?t.count:r.count;let s=((t==null?void 0:t.dstIndex)??0)*o,m=((t==null?void 0:t.srcIndex)??0)*c;for(let l=0;l<i;++l){for(let n=0;n<16;++n)u[s+n]=a[m+n];s+=o,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function y(e,r){return new e(new ArrayBuffer(r*e.ElementCount*ne(e.ElementType)))}async function rt(e,r,t){const u=new se(ye(t)),o=(await oe(u,r,t,!0)).model,a=o.lods.shift(),c=new Map,i=new Map;o.textures.forEach((x,T)=>c.set(T,he(x))),o.materials.forEach((x,T)=>i.set(T,we(x,c)));const s=Te(a);for(const x of s.parts)be(s,x,i);const{position:m,normal:l,tangent:n,color:f,texCoord0:p}=s.vertexAttributes,d=E(e,t),b=e.spatialReference.isGeographic?E(e):d,v=pe({vertexAttributes:{position:m.typedBuffer,normal:l==null?void 0:l.typedBuffer,tangent:n==null?void 0:n.typedBuffer},vertexSpace:b,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:t!=null&&t.unitConversionDisabled?void 0:"meters"});if(!v)throw new D("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${b.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new V({...v,color:f==null?void 0:f.typedBuffer,uv:p==null?void 0:p.typedBuffer})}}function ye(e){const r=e==null?void 0:e.resolveFile;return r?{busy:!1,request:async(t,u,o)=>{const a=(r==null?void 0:r(t))??t;return(await L(a,{responseType:u==="image"?"image":u==="binary"||u==="image+type"?"array-buffer":"json",signal:o==null?void 0:o.signal,timeout:0})).data}}:null}function $(e,r){if(e==null)return"-";const t=e.typedBuffer;return`${F(r,t.buffer,()=>r.size)}/${t.byteOffset}/${t.byteLength}`}function $e(e){return e!=null?e.toString():"-"}function Te(e){let r=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,o=new Map,a=[];for(const c of e.parts){const{attributes:{position:i,normal:s,color:m,tangent:l,texCoord0:n}}=c,f=`
      ${$(i,u)}/
      ${$(s,u)}/
      ${$(m,u)}/
      ${$(l,u)}/
      ${$(n,u)}/
      ${$e(c.transform)}
    `;let p=!1;const d=F(o,f,()=>(p=!0,{start:r,length:i.count}));p&&(r+=i.count),s&&(t.normal=!0),m&&(t.color=!0),l&&(t.tangent=!0),n&&(t.texCoord0=!0),a.push({gltf:c,writeVertices:p,region:d})}return{vertexAttributes:{position:y(X,r),normal:t.normal?y(j,r):null,tangent:t.tangent?y(O,r):null,color:t.color?y(I,r):null,texCoord0:t.texCoord0?y(J,r):null},parts:a,components:[]}}function he(e){return new q({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function we(e,r){const t=new B(Se(e.color,e.opacity)),u=e.emissiveFactor?new B(Ee(e.emissiveFactor)):null,o=a=>a?new K({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:z(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new H({color:t,colorTexture:r.get(e.textureColor),normalTexture:r.get(e.textureNormal),emissiveColor:u,emissiveTexture:r.get(e.textureEmissive),occlusionTexture:r.get(e.textureOcclusion),alphaMode:Be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:r.get(e.textureMetallicRoughness),colorTextureTransform:o(e.colorTextureTransform),normalTextureTransform:o(e.normalTextureTransform),occlusionTextureTransform:o(e.occlusionTextureTransform),emissiveTextureTransform:o(e.emissiveTextureTransform),metallicRoughnessTextureTransform:o(e.metallicRoughnessTextureTransform)})}function be(e,r,t){r.writeVertices&&ve(e,r);const{indices:u,attributes:o,primitiveType:a,material:c}=r.gltf;let i=ae(u||o.position.count,a);const s=r.region.start;if(s){const m=new Uint32Array(i);for(let l=0;l<i.length;l++)m[l]+=s;i=m}e.components.push(new Q({name:r.gltf.name,faces:i,material:t.get(c),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function ve(e,r){const{position:t,normal:u,tangent:o,color:a,texCoord0:c}=e.vertexAttributes,i=r.region.start,{attributes:s,transform:m}=r.gltf,l=s.position.count;if(Y(t.slice(i,l),s.position,m),s.normal!=null&&u!=null){const n=U(S(),m),f=u.slice(i,l);Z(f,s.normal,n),C(n)&&ee(f,f)}else u!=null&&le(u,0,0,1,{dstIndex:i,count:l});if(s.tangent!=null&&o!=null){const n=N(S(),m),f=o.slice(i,l);te(f,s.tangent,n),C(n)&&re(f,f)}else o!=null&&w(o,0,0,1,1,{dstIndex:i,count:l});if(s.texCoord0!=null&&c!=null?ie(c.slice(i,l),s.texCoord0):c!=null&&ue(c,0,0,{dstIndex:i,count:l}),s.color!=null&&a!=null){const n=s.color,f=a.slice(i,l);if(n.elementCount===4)n instanceof O?M(f,n,255):n instanceof I?ce(f,n):n instanceof W&&M(f,n,1/256);else{w(f,255,255,255,255);const p=R.fromTypedArray(f.typedBuffer,f.typedBufferStride);n instanceof j?A(p,n,255):n instanceof R?fe(p,n):n instanceof k&&A(p,n,1/256)}}else a!=null&&w(a.slice(i,l),255,255,255,255)}function Be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:_(e.s),vertical:_(e.t)}}function _(e){switch(e){case h.CLAMP_TO_EDGE:return"clamp";case h.MIRRORED_REPEAT:return"mirror";case h.REPEAT:return"repeat"}}function g(e){return e**(1/me)*255}function Se(e,r){return P(g(e[0]),g(e[1]),g(e[2]),r)}function Ee(e){return G(g(e[0]),g(e[1]),g(e[2]))}export{rt as loadGLTFMesh};
