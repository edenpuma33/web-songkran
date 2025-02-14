import{o as Bt}from"./_commonjsHelpers-DCkdB7M8.js";var er,rr={exports:{}};function zt(){var ye;return er||(er=1,me=rr,ae=typeof document<"u"?(ye=document.currentScript)==null?void 0:ye.src:void 0,pe=function(tr={}){var ge,G,u=Object.assign({},tr),nr=new Promise((e,r)=>{ge=e,G=r}),ar=!0,ve=Object.assign({},u),we="./this.program",M="";function or(e){return u.locateFile?u.locateFile(e,M):M+e}typeof document<"u"&&document.currentScript&&(M=document.currentScript.src),ae&&(M=ae),M=M.startsWith("blob:")?"":M.substr(0,M.replace(/[?#].*/,"").lastIndexOf("/")+1),u.print||console.log.bind(console);var V,J,U=u.printErr||console.error.bind(console);Object.assign(u,ve),ve=null,u.arguments&&u.arguments,u.thisProgram&&(we=u.thisProgram),u.quit&&u.quit,u.wasmBinary&&(V=u.wasmBinary);var P,_,k,Y,v,m,_e,be,Ae=!1;function Te(){var e=J.buffer;u.HEAP8=P=new Int8Array(e),u.HEAP16=k=new Int16Array(e),u.HEAPU8=_=new Uint8Array(e),u.HEAPU16=Y=new Uint16Array(e),u.HEAP32=v=new Int32Array(e),u.HEAPU32=m=new Uint32Array(e),u.HEAPF32=_e=new Float32Array(e),u.HEAPF64=be=new Float64Array(e)}var Ce=[],Fe=[],Pe=[];function ir(){if(u.preRun)for(typeof u.preRun=="function"&&(u.preRun=[u.preRun]);u.preRun.length;)lr(u.preRun.shift());oe(Ce)}function ur(){oe(Fe)}function sr(){if(u.postRun)for(typeof u.postRun=="function"&&(u.postRun=[u.postRun]);u.postRun.length;)cr(u.postRun.shift());oe(Pe)}function lr(e){Ce.unshift(e)}function fr(e){Fe.unshift(e)}function cr(e){Pe.unshift(e)}var R=0,B=null;function dr(e){var r;R++,(r=u.monitorRunDependencies)==null||r.call(u,R)}function hr(e){var t;if(R--,(t=u.monitorRunDependencies)==null||t.call(u,R),R==0&&B){var r=B;B=null,r()}}function We(e){var t;(t=u.onAbort)==null||t.call(u,e),U(e="Aborted("+e+")"),Ae=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw G(r),r}var z,mr="data:application/octet-stream;base64,",Ee=e=>e.startsWith(mr);function Se(e){if(e==z&&V)return new Uint8Array(V);throw"both async and sync fetching of the wasm failed"}function pr(e){return!V&&ar&&typeof fetch=="function"?fetch(e,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw`failed to load wasm binary file at '${e}'`;return r.arrayBuffer()}).catch(()=>Se(e)):Promise.resolve().then(()=>Se(e))}function $e(e,r,t){return pr(e).then(n=>WebAssembly.instantiate(n,r)).then(t,n=>{U(`failed to asynchronously prepare wasm: ${n}`),We(n)})}function yr(e,r,t,n){return e||typeof WebAssembly.instantiateStreaming!="function"||Ee(r)||typeof fetch!="function"?$e(r,t,n):fetch(r,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,t).then(n,function(o){return U(`wasm streaming compile failed: ${o}`),U("falling back to ArrayBuffer instantiation"),$e(r,t,n)}))}function gr(){return{a:Ut}}function vr(){var e=gr();function r(n,a){return C=n.exports,J=C.M,Te(),He=C.P,fr(C.N),hr(),C}function t(n){r(n.instance)}if(dr(),u.instantiateWasm)try{return u.instantiateWasm(e,r)}catch(n){U(`Module.instantiateWasm callback failed with error: ${n}`),G(n)}return yr(V,z,e,t).catch(G),{}}Ee(z="lclayout.wasm")||(z=or(z));var oe=e=>{for(;e.length>0;)e.shift()(u)};u.noExitRuntime;class wr{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){m[this.ptr+4>>2]=r}get_type(){return m[this.ptr+4>>2]}set_destructor(r){m[this.ptr+8>>2]=r}get_destructor(){return m[this.ptr+8>>2]}set_caught(r){r=r?1:0,P[this.ptr+12]=r}get_caught(){return P[this.ptr+12]!=0}set_rethrown(r){r=r?1:0,P[this.ptr+13]=r}get_rethrown(){return P[this.ptr+13]!=0}init(r,t){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(t)}set_adjusted_ptr(r){m[this.ptr+16>>2]=r}get_adjusted_ptr(){return m[this.ptr+16>>2]}get_exception_ptr(){if(Qe(this.get_type()))return m[this.excPtr>>2];var r=this.get_adjusted_ptr();return r!==0?r:this.excPtr}}var _r=(e,r,t)=>{throw new wr(e).init(r,t),e},L={},ie=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function X(e){return this.fromWireType(m[e>>2])}var Oe,Me,De,H={},x={},K={},je=e=>{throw new Oe(e)},ue=(e,r,t)=>{function n(s){var f=t(s);f.length!==e.length&&je("Mismatched type converter count");for(var c=0;c<e.length;++c)E(e[c],f[c])}e.forEach(function(s){K[s]=r});var a=new Array(r.length),o=[],l=0;r.forEach((s,f)=>{x.hasOwnProperty(s)?a[f]=x[s]:(o.push(s),H.hasOwnProperty(s)||(H[s]=[]),H[s].push(()=>{a[f]=x[s],++l===o.length&&n(a)}))}),o.length===0&&n(a)},br=e=>{var r=L[e];delete L[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,o=a.map(l=>l.getterReturnType).concat(a.map(l=>l.setterArgumentType));ue([e],o,l=>{var s={};return a.forEach((f,c)=>{var h=f.fieldName,y=l[c],p=f.getter,g=f.getterContext,j=l[c+a.length],W=f.setter,I=f.setterContext;s[h]={read:O=>y.fromWireType(p(g,O)),write:(O,i)=>{var d=[];W(I,O,j.toWireType(d,i)),ie(d)}}}),[{name:r.name,fromWireType:f=>{var c={};for(var h in s)c[h]=s[h].read(f);return n(f),c},toWireType:(f,c)=>{for(var h in s)if(!(h in c))throw new TypeError(`Missing field: "${h}"`);var y=t();for(h in s)s[h].write(y,c[h]);return f!==null&&f.push(n,y),y},argPackAdvance:S,readValueFromPointer:X,destructorFunction:n}]})},Ar=(e,r,t,n,a)=>{},Tr=()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);Me=e},w=e=>{for(var r="",t=e;_[t];)r+=Me[_[t++]];return r},T=e=>{throw new De(e)};function Cr(e,r,t={}){var n=r.name;if(e||T(`type "${n}" must have a positive integer typeid pointer`),x.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;T(`Cannot register type '${n}' twice`)}if(x[e]=r,delete K[e],H.hasOwnProperty(e)){var a=H[e];delete H[e],a.forEach(o=>o())}}function E(e,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Cr(e,r,t)}var S=8,Fr=(e,r,t,n)=>{E(e,{name:r=w(r),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?t:n},argPackAdvance:S,readValueFromPointer:function(a){return this.fromWireType(_[a])},destructorFunction:null})},Pr=(e,r,t)=>{e=w(e),ue([],[r],n=>(n=n[0],u[e]=n.fromWireType(t),[]))},se=[],D=[],le=e=>{e>9&&--D[e+1]==0&&(D[e]=void 0,se.push(e))},Wr=()=>D.length/2-5-se.length,Er=()=>{D.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=Wr},b={toValue:e=>(e||T("Cannot use deleted val. handle = "+e),D[e]),toHandle:e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const r=se.pop()||D.length;return D[r]=e,D[r+1]=1,r}}}},Sr={name:"emscripten::val",fromWireType:e=>{var r=b.toValue(e);return le(e),r},toWireType:(e,r)=>b.toHandle(r),argPackAdvance:S,readValueFromPointer:X,destructorFunction:null},Re=e=>E(e,Sr),$r=(e,r,t)=>{if(e[r].overloadTable===void 0){var n=e[r];e[r]=function(...a){return e[r].overloadTable.hasOwnProperty(a.length)||T(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[a.length].apply(this,a)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},xe=(e,r,t)=>{u.hasOwnProperty(e)?((t===void 0||u[e].overloadTable!==void 0&&u[e].overloadTable[t]!==void 0)&&T(`Cannot register public name '${e}' twice`),$r(u,e,e),u.hasOwnProperty(t)&&T(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),u[e].overloadTable[t]=r):(u[e]=r,t!==void 0&&(u[e].numArguments=t))},Or=(e,r,t)=>{switch(r){case 1:return t?function(n){return this.fromWireType(P[n])}:function(n){return this.fromWireType(_[n])};case 2:return t?function(n){return this.fromWireType(k[n>>1])}:function(n){return this.fromWireType(Y[n>>1])};case 4:return t?function(n){return this.fromWireType(v[n>>2])}:function(n){return this.fromWireType(m[n>>2])};default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Mr=(e,r,t,n)=>{function a(){}r=w(r),a.values={},E(e,{name:r,constructor:a,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,l)=>l.value,argPackAdvance:S,readValueFromPointer:Or(r,t,n),destructorFunction:null}),xe(r,a)},Q=(e,r)=>Object.defineProperty(r,"name",{value:e}),ke=e=>{var r=Ke(e),t=w(r);return $(r),t},Z=(e,r)=>{var t=x[e];return t===void 0&&T(`${r} has unknown type ${ke(e)}`),t},Dr=(e,r,t)=>{var n=Z(e,"enum");r=w(r);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:Q(`${n.name}_${r}`,function(){})}});a.values[t]=o,a[r]=o},jr=(e,r)=>{switch(r){case 4:return function(t){return this.fromWireType(_e[t>>2])};case 8:return function(t){return this.fromWireType(be[t>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}},Rr=(e,r,t)=>{E(e,{name:r=w(r),fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:S,readValueFromPointer:jr(r,t),destructorFunction:null})};function xr(e){for(var r=1;r<e.length;++r)if(e[r]!==null&&e[r].destructorFunction===void 0)return!0;return!1}function kr(e,r,t,n,a,o){var l=r.length;l<2&&T("argTypes array size mismatch! Must at least get return value and 'this' types!"),r[1];var s=xr(r),f=r[0].name!=="void",c=l-2,h=new Array(c),y=[],p=[];return Q(e,function(...g){var j;g.length!==c&&T(`function ${e} called with ${g.length} arguments, expected ${c}`),p.length=0,y.length=1,y[0]=a;for(var W=0;W<c;++W)h[W]=r[W+2].toWireType(p,g[W]),y.push(h[W]);function I(O){if(s)ie(p);else for(var i=2;i<r.length;i++){var d=i===1?j:h[i-2];r[i].destructorFunction!==null&&r[i].destructorFunction(d)}if(f)return r[0].fromWireType(O)}return I(n(...y))})}var He,Ie,Ve,Hr=(e,r)=>{for(var t=[],n=0;n<e;n++)t.push(m[r+4*n>>2]);return t},Ir=(e,r,t)=>{u.hasOwnProperty(e)||je("Replacing nonexistent public symbol"),u[e].overloadTable!==void 0&&t!==void 0?u[e].overloadTable[t]=r:(u[e]=r,u[e].argCount=t)},Vr=(e,r,t)=>(e=e.replace(/p/g,"i"),(0,u["dynCall_"+e])(r,...t)),ee=[],Ue=e=>{var r=ee[e];return r||(e>=ee.length&&(ee.length=e+1),ee[e]=r=He.get(e)),r},Ur=(e,r,t=[])=>e.includes("j")?Vr(e,r,t):Ue(r)(...t),Yr=(e,r)=>(...t)=>Ur(e,r,t),N=(e,r)=>{function t(){return e.includes("j")?Yr(e,r):Ue(r)}e=w(e);var n=t();return typeof n!="function"&&T(`unknown function pointer with signature ${e}: ${r}`),n},Br=(e,r)=>{var t=Q(r,function(n){this.name=r,this.message=n;var a=new Error(n).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},t},zr=(e,r)=>{var t=[],n={};function a(o){n[o]||x[o]||(K[o]?K[o].forEach(a):(t.push(o),n[o]=!0))}throw r.forEach(a),new Ie(`${e}: `+t.map(ke).join([", "]))},Nr=e=>{const r=(e=e.trim()).indexOf("(");return r!==-1?e.substr(0,r):e},qr=(e,r,t,n,a,o,l)=>{var s=Hr(r,t);e=w(e),e=Nr(e),a=N(n,a),xe(e,function(){zr(`Cannot call ${e} due to unbound types`,s)},r-1),ue([],s,f=>{var c=[f[0],null].concat(f.slice(1));return Ir(e,kr(e,c,null,a,o),r-1),[]})},Gr=(e,r,t)=>{switch(r){case 1:return t?n=>P[n]:n=>_[n];case 2:return t?n=>k[n>>1]:n=>Y[n>>1];case 4:return t?n=>v[n>>2]:n=>m[n>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Jr=(e,r,t,n,a)=>{r=w(r);var o=c=>c;if(n===0){var l=32-8*t;o=c=>c<<l>>>l}var s=r.includes("unsigned"),f=(c,h)=>{};E(e,{name:r,fromWireType:o,toWireType:s?function(c,h){return f(h,this.name),h>>>0}:function(c,h){return f(h,this.name),h},argPackAdvance:S,readValueFromPointer:Gr(r,t,n!==0),destructorFunction:null})},Lr=(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(o){var l=m[o>>2],s=m[o+4>>2];return new n(P.buffer,s,l)}E(e,{name:t=w(t),fromWireType:a,argPackAdvance:S,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},Xr=(e,r)=>{Re(e)},Ye=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,l=0;l<e.length;++l){var s=e.charCodeAt(l);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++l)),s<=127){if(t>=o)break;r[t++]=s}else if(s<=2047){if(t+1>=o)break;r[t++]=192|s>>6,r[t++]=128|63&s}else if(s<=65535){if(t+2>=o)break;r[t++]=224|s>>12,r[t++]=128|s>>6&63,r[t++]=128|63&s}else{if(t+3>=o)break;r[t++]=240|s>>18,r[t++]=128|s>>12&63,r[t++]=128|s>>6&63,r[t++]=128|63&s}}return r[t]=0,t-a},Kr=(e,r,t)=>Ye(e,_,r,t),Be=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},ze=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Qr=(e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&ze)return ze.decode(e.subarray(r,a));for(var o="";r<a;){var l=e[r++];if(128&l){var s=63&e[r++];if((224&l)!=192){var f=63&e[r++];if((l=(240&l)==224?(15&l)<<12|s<<6|f:(7&l)<<18|s<<12|f<<6|63&e[r++])<65536)o+=String.fromCharCode(l);else{var c=l-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&l)<<6|s)}else o+=String.fromCharCode(l)}return o},fe=(e,r)=>e?Qr(_,e,r):"",Zr=(e,r)=>{var t=(r=w(r))==="std::string";E(e,{name:r,fromWireType(n){var a,o=m[n>>2],l=n+4;if(t)for(var s=l,f=0;f<=o;++f){var c=l+f;if(f==o||_[c]==0){var h=fe(s,c-s);a===void 0?a=h:(a+="\0",a+=h),s=c+1}}else{var y=new Array(o);for(f=0;f<o;++f)y[f]=String.fromCharCode(_[l+f]);a=y.join("")}return $(n),a},toWireType(n,a){var o;a instanceof ArrayBuffer&&(a=new Uint8Array(a));var l=typeof a=="string";l||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||T("Cannot pass non-string to std::string"),o=t&&l?Be(a):a.length;var s=he(4+o+1),f=s+4;if(m[s>>2]=o,t&&l)Kr(a,f,o+1);else if(l)for(var c=0;c<o;++c){var h=a.charCodeAt(c);h>255&&($(f),T("String has UTF-16 code units that do not fit in 8 bits")),_[f+c]=h}else for(c=0;c<o;++c)_[f+c]=a[c];return n!==null&&n.push($,s),s},argPackAdvance:S,readValueFromPointer:X,destructorFunction(n){$(n)}})},Ne=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,et=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&Y[n];)++n;if((t=n<<1)-e>32&&Ne)return Ne.decode(_.subarray(e,t));for(var o="",l=0;!(l>=r/2);++l){var s=k[e+2*l>>1];if(s==0)break;o+=String.fromCharCode(s)}return o},rt=(e,r,t)=>{if(t??(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,o=0;o<a;++o){var l=e.charCodeAt(o);k[r>>1]=l,r+=2}return k[r>>1]=0,r-n},tt=e=>2*e.length,nt=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=v[e+4*t>>2];if(a==0)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},at=(e,r,t)=>{if(t??(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,o=0;o<e.length;++o){var l=e.charCodeAt(o);if(l>=55296&&l<=57343&&(l=65536+((1023&l)<<10)|1023&e.charCodeAt(++o)),v[r>>2]=l,(r+=4)+4>a)break}return v[r>>2]=0,r-n},ot=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},it=(e,r,t)=>{var n,a,o,l;t=w(t),r===2?(n=et,a=rt,l=tt,o=s=>Y[s>>1]):r===4&&(n=nt,a=at,l=ot,o=s=>m[s>>2]),E(e,{name:t,fromWireType:s=>{for(var f,c=m[s>>2],h=s+4,y=0;y<=c;++y){var p=s+4+y*r;if(y==c||o(p)==0){var g=n(h,p-h);f===void 0?f=g:(f+="\0",f+=g),h=p+r}}return $(s),f},toWireType:(s,f)=>{typeof f!="string"&&T(`Cannot pass non-string to C++ string type ${t}`);var c=l(f),h=he(4+c+r);return m[h>>2]=c/r,a(f,h+4,c+r),s!==null&&s.push($,h),h},argPackAdvance:S,readValueFromPointer:X,destructorFunction(s){$(s)}})},ut=(e,r,t,n,a,o)=>{L[e]={name:w(r),rawConstructor:N(t,n),rawDestructor:N(a,o),fields:[]}},st=(e,r,t,n,a,o,l,s,f,c)=>{L[e].fields.push({fieldName:w(r),getterReturnType:t,getter:N(n,a),getterContext:o,setterArgumentType:l,setter:N(s,f),setterContext:c})},lt=(e,r)=>{E(e,{isVoid:!0,name:r=w(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(t,n)=>{}})},ft=1,ct=()=>ft,dt=(e,r,t)=>_.copyWithin(e,r,r+t),qe=(e,r,t)=>{var n=[],a=e.toWireType(n,t);return n.length&&(m[r>>2]=b.toHandle(n)),a},ht=(e,r,t)=>(e=b.toValue(e),r=Z(r,"emval::as"),qe(r,t,e)),mt={},Ge=e=>{var r=mt[e];return r===void 0?w(e):r},ce=[],pt=(e,r,t,n,a)=>(e=ce[e])(r=b.toValue(r),r[t=Ge(t)],n,a),yt=e=>{var r=ce.length;return ce.push(e),r},gt=(e,r)=>{for(var t=new Array(e),n=0;n<e;++n)t[n]=Z(m[r+4*n>>2],"parameter "+n);return t},vt=Reflect.construct,wt=(e,r,t)=>{var n=gt(e,r),a=n.shift();e--;var o=new Array(e),l=(f,c,h,y)=>{for(var p=0,g=0;g<e;++g)o[g]=n[g].readValueFromPointer(y+p),p+=n[g].argPackAdvance;var j=t===1?vt(c,o):c.apply(f,o);return qe(a,h,j)},s=`methodCaller<(${n.map(f=>f.name).join(", ")}) => ${a.name}>`;return yt(Q(s,l))},_t=(e,r)=>(e=b.toValue(e),r=b.toValue(r),b.toHandle(e[r])),bt=()=>b.toHandle([]),At=e=>{e=b.toValue(e);for(var r=new Array(e.length),t=0;t<e.length;t++)r[t]=e[t];return b.toHandle(r)},Tt=e=>b.toHandle(Ge(e)),Ct=e=>{var r=b.toValue(e);ie(r),le(e)},Ft=(e,r)=>{var t=(e=Z(e,"_emval_take_value")).readValueFromPointer(r);return b.toHandle(t)},Pt=()=>{We("")},Wt=()=>Date.now(),Je=()=>2147483648,Et=()=>Je();Ve=()=>performance.now();var St=e=>{var r=(e-J.buffer.byteLength+65535)/65536;try{return J.grow(r),Te(),1}catch{}},$t=e=>{var r=_.length;e>>>=0;var t=Je();if(e>t)return!1;for(var n=(s,f)=>s+(f-s%f)%f,a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,e+100663296);var l=Math.min(t,n(Math.max(e,o),65536));if(St(l))return!0}return!1},de={},Ot=()=>we||"./this.program",q=()=>{if(!q.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Ot()};for(var r in de)de[r]===void 0?delete e[r]:e[r]=de[r];var t=[];for(var r in e)t.push(`${r}=${e[r]}`);q.strings=t}return q.strings},Mt=(e,r)=>{for(var t=0;t<e.length;++t)P[r++]=e.charCodeAt(t);P[r]=0},Dt=(e,r)=>{var t=0;return q().forEach((n,a)=>{var o=r+t;m[e+4*a>>2]=o,Mt(n,o),t+=n.length+1}),0},jt=(e,r)=>{var t=q();m[e>>2]=t.length;var n=0;return t.forEach(a=>n+=a.length+1),m[r>>2]=n,0},re=e=>e%4==0&&(e%100!=0||e%400==0),Rt=(e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t},Le=[31,29,31,30,31,30,31,31,30,31,30,31],Xe=[31,28,31,30,31,30,31,31,30,31,30,31],xt=(e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=re(t.getFullYear()),a=t.getMonth(),o=(n?Le:Xe)[a];if(!(r>o-t.getDate()))return t.setDate(t.getDate()+r),t;r-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t};function kt(e,r,t){var n=Be(e)+1,a=new Array(n);return Ye(e,a,0,a.length),a}var Ht=(e,r)=>{P.set(e,r)},It=(e,r,t,n)=>{var a=m[n+40>>2],o={tm_sec:v[n>>2],tm_min:v[n+4>>2],tm_hour:v[n+8>>2],tm_mday:v[n+12>>2],tm_mon:v[n+16>>2],tm_year:v[n+20>>2],tm_wday:v[n+24>>2],tm_yday:v[n+28>>2],tm_isdst:v[n+32>>2],tm_gmtoff:v[n+36>>2],tm_zone:a?fe(a):""},l=fe(t),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var f in s)l=l.replace(new RegExp(f,"g"),s[f]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=["January","February","March","April","May","June","July","August","September","October","November","December"];function y(i,d,F){for(var A=typeof i=="number"?i.toString():i||"";A.length<d;)A=F[0]+A;return A}function p(i,d){return y(i,d,"0")}function g(i,d){function F(ne){return ne<0?-1:ne>0?1:0}var A;return(A=F(i.getFullYear()-d.getFullYear()))===0&&(A=F(i.getMonth()-d.getMonth()))===0&&(A=F(i.getDate()-d.getDate())),A}function j(i){switch(i.getDay()){case 0:return new Date(i.getFullYear()-1,11,29);case 1:return i;case 2:return new Date(i.getFullYear(),0,3);case 3:return new Date(i.getFullYear(),0,2);case 4:return new Date(i.getFullYear(),0,1);case 5:return new Date(i.getFullYear()-1,11,31);case 6:return new Date(i.getFullYear()-1,11,30)}}function W(i){var d=xt(new Date(i.tm_year+1900,0,1),i.tm_yday),F=new Date(d.getFullYear(),0,4),A=new Date(d.getFullYear()+1,0,4),ne=j(F),Yt=j(A);return g(ne,d)<=0?g(Yt,d)<=0?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}var I={"%a":i=>c[i.tm_wday].substring(0,3),"%A":i=>c[i.tm_wday],"%b":i=>h[i.tm_mon].substring(0,3),"%B":i=>h[i.tm_mon],"%C":i=>p((i.tm_year+1900)/100|0,2),"%d":i=>p(i.tm_mday,2),"%e":i=>y(i.tm_mday,2," "),"%g":i=>W(i).toString().substring(2),"%G":W,"%H":i=>p(i.tm_hour,2),"%I":i=>{var d=i.tm_hour;return d==0?d=12:d>12&&(d-=12),p(d,2)},"%j":i=>p(i.tm_mday+Rt(re(i.tm_year+1900)?Le:Xe,i.tm_mon-1),3),"%m":i=>p(i.tm_mon+1,2),"%M":i=>p(i.tm_min,2),"%n":()=>`
`,"%p":i=>i.tm_hour>=0&&i.tm_hour<12?"AM":"PM","%S":i=>p(i.tm_sec,2),"%t":()=>"	","%u":i=>i.tm_wday||7,"%U":i=>{var d=i.tm_yday+7-i.tm_wday;return p(Math.floor(d/7),2)},"%V":i=>{var d=Math.floor((i.tm_yday+7-(i.tm_wday+6)%7)/7);if((i.tm_wday+371-i.tm_yday-2)%7<=2&&d++,d){if(d==53){var F=(i.tm_wday+371-i.tm_yday)%7;F==4||F==3&&re(i.tm_year)||(d=1)}}else{d=52;var A=(i.tm_wday+7-i.tm_yday-1)%7;(A==4||A==5&&re(i.tm_year%400-1))&&d++}return p(d,2)},"%w":i=>i.tm_wday,"%W":i=>{var d=i.tm_yday+7-(i.tm_wday+6)%7;return p(Math.floor(d/7),2)},"%y":i=>(i.tm_year+1900).toString().substring(2),"%Y":i=>i.tm_year+1900,"%z":i=>{var d=i.tm_gmtoff,F=d>=0;return d=(d=Math.abs(d)/60)/60*100+d%60,(F?"+":"-")+("0000"+d).slice(-4)},"%Z":i=>i.tm_zone,"%%":()=>"%"};for(var f in l=l.replace(/%%/g,"\0\0"),I)l.includes(f)&&(l=l.replace(new RegExp(f,"g"),I[f](o)));var O=kt(l=l.replace(/\0\0/g,"%"));return O.length>r?0:(Ht(O,e),O.length-1)},Vt=(e,r,t,n,a)=>It(e,r,t,n);Oe=u.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},Tr(),De=u.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Er(),Ie=u.UnboundTypeError=Br(Error,"UnboundTypeError");var te,Ut={a:_r,j:br,x:Ar,F:Fr,u:Pr,w:Re,v:Mr,q:Dr,t:Rr,e:qr,l:Jr,f:Lr,L:Xr,s:Zr,r:it,k:ut,b:st,K:lt,D:ct,I:dt,g:ht,n:pt,c:le,o:wt,h:_t,p:bt,J:At,m:Tt,d:Ct,i:Ft,C:Pt,E:Wt,y:Et,H:Ve,G:$t,A:Dt,B:jt,z:Vt},C=vr(),Ke=e=>(Ke=C.O)(e),he=u._malloc=e=>(he=u._malloc=C.Q)(e),$=u._free=e=>($=u._free=C.R)(e),Qe=e=>(Qe=C.S)(e);function Ze(){function e(){te||(te=!0,u.calledRun=!0,Ae||(ur(),ge(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),sr()))}R>0||(ir(),R>0||(u.setStatus?(u.setStatus("Running..."),setTimeout(function(){setTimeout(function(){u.setStatus("")},1),e()},1)):e()))}if(u.dynCall_viijii=(e,r,t,n,a,o,l)=>(u.dynCall_viijii=C.T)(e,r,t,n,a,o,l),u.dynCall_iiiiij=(e,r,t,n,a,o,l)=>(u.dynCall_iiiiij=C.U)(e,r,t,n,a,o,l),u.dynCall_iiiiijj=(e,r,t,n,a,o,l,s,f)=>(u.dynCall_iiiiijj=C.V)(e,r,t,n,a,o,l,s,f),u.dynCall_iiiiiijj=(e,r,t,n,a,o,l,s,f,c)=>(u.dynCall_iiiiiijj=C.W)(e,r,t,n,a,o,l,s,f,c),B=function e(){te||Ze(),te||(B=e)},u.preInit)for(typeof u.preInit=="function"&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()();return Ze(),nr},me.exports=pe),rr.exports;var me,ae,pe}const Nt=Bt(zt()),Gt=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"}));export{Gt as l};
