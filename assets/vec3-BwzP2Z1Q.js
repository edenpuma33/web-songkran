import"./index-CorgkmYx.js";function q(e,n,t){b(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function b(e,n,t,f=3,l=f){if(e.length/f!==Math.ceil(n.length/l))return e;const r=e.length/f,o=t[0],u=t[1],i=t[2],d=t[4],c=t[5],h=t[6],y=t[8],M=t[9],m=t[10],s=t[12],B=t[13],S=t[14];let a=0,p=0;for(let g=0;g<r;g++){const w=n[a],V=n[a+1],_=n[a+2];e[p]=o*w+d*V+y*_+s,e[p+1]=u*w+c*V+M*_+B,e[p+2]=i*w+h*V+m*_+S,a+=l,p+=f}return e}function v(e,n,t){z(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function z(e,n,t,f=3,l=f){if(e.length/f!==Math.ceil(n.length/l))return;const r=e.length/f,o=t[0],u=t[1],i=t[2],d=t[3],c=t[4],h=t[5],y=t[6],M=t[7],m=t[8];let s=0,B=0;for(let S=0;S<r;S++){const a=n[s],p=n[s+1],g=n[s+2];e[B]=o*a+d*p+y*g,e[B+1]=u*a+c*p+M*g,e[B+2]=i*a+h*p+m*g,s+=l,B+=f}}function x(e,n,t){j(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function j(e,n,t,f=3,l=f){const r=Math.min(e.length/f,n.length/l);let o=0,u=0;for(let i=0;i<r;i++)e[u]=t*n[o],e[u+1]=t*n[o+1],e[u+2]=t*n[o+2],o+=l,u+=f;return e}function P(e,n,t,f=3,l=f){const r=e.length/f;if(r!==Math.ceil(n.length/l))return e;let o=0,u=0;for(let i=0;i<r;i++)e[u]=n[o]+t[0],e[u+1]=n[o+1]+t[1],e[u+2]=n[o+2]+t[2],o+=l,u+=f;return e}function R(e,n){O(e.typedBuffer,n.typedBuffer,e.typedBufferStride,n.typedBufferStride)}function O(e,n,t=3,f=t){const l=Math.min(e.length/t,n.length/f);let r=0,o=0;for(let u=0;u<l;u++){const i=n[r],d=n[r+1],c=n[r+2],h=i*i+d*d+c*c;if(h>0){const y=1/Math.sqrt(h);e[o]=y*i,e[o+1]=y*d,e[o+2]=y*c}r+=f,o+=t}}function T(e,n,t){const f=Math.min(e.count,n.count),l=e.typedBuffer,r=e.typedBufferStride,o=n.typedBuffer,u=n.typedBufferStride;let i=0,d=0;for(let c=0;c<f;c++)l[d]=o[i]>>t,l[d+1]=o[i+1]>>t,l[d+2]=o[i+2]>>t,i+=u,d+=r}Object.freeze(Object.defineProperty({__proto__:null,normalize:O,normalizeView:R,scale:j,scaleView:x,shiftRight:T,transformMat3:z,transformMat3View:v,transformMat4:b,transformMat4View:q,translate:P},Symbol.toStringTag,{value:"Module"}));export{b as e,z as f,P as i,O as l,x as n,j as o,v as r,q as t,R as u};
