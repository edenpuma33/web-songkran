import{cG as v,fs as z,af as w,aZ as N,bc as H,ag as T,f6 as b,b2 as $,cT as q,X as B,a2 as C,r as p,t as u,x as I}from"./index-CorgkmYx.js";import{S as k}from"./Bitmap-BKRHJoyg.js";const A=Math.PI/180;function G(e){return e*A}function O(e,i){const s=G(i.rotation),t=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),[a,n]=i.size;return e[0]=Math.round(n*r+a*t),e[1]=Math.round(n*t+a*r),e}function U(e,i,s,t){const[r,a]=i,[n,o]=t,l=.5*s;return e[0]=r-l*n,e[1]=a-l*o,e[2]=r+l*n,e[3]=a+l*o,e}const m=$(),c=[0,0],_=new C(0,0,0,0),y={imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let d=class extends v{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=z(async(i,s)=>{if(w(s),!i.stationary||this.destroyed)return;const t=i.state,r=N(t.spatialReference),a=this.hidpi?i.pixelRatio:1,n=t.worldScreenWidth>0,o=n&&this.imageNormalizationSupported&&t.worldScreenWidth<t.size[0],l=Math.round((this.imageMaxWidth??0)/a),f=Math.round((this.imageMaxHeight??0)/a);o?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):O(c,t);const M=Math.floor(c[0])>l||Math.floor(c[1])>f,S=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),R=!this.imageNormalizationSupported&&S,x=!M&&!R,W=this.imageRotationSupported?t.rotation:0,E=this.container.children.slice();if(x){const h=o?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,c,h,t.resolution,W,a,s)}else{let h=Math.min(l,f);n&&(h=Math.min(t.worldScreenWidth,h),h=Math.round(t.worldScreenWidth/Math.ceil(t.worldScreenWidth/h))),this._imagePromise=this._tiledExport(t,h,a,s)}try{const h=await this._imagePromise??[];w(s);const P=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=h;for(const g of E)h.includes(g)||P.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of h)P.push(g.fadeIn());await Promise.all(P)}catch(h){this._imagePromise=null,H(h)}},5e3),this.updateExports=z(async i=>{const s=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;s.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=T(s).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,s,t,r,a){const n=await this.fetchSource(e,Math.floor(i*r),Math.floor(s*r),{rotation:t,pixelRatio:r,signal:a});w(a);const o=new k(null,!0);return o.x=e.xmin,o.y=e.ymax,o.resolution=e.width/i,o.rotation=t,o.pixelRatio=r,o.opacity=0,this.container.addChild(o),await o.setSourceAsync(n,a),w(a),o}async _singleExport(e,i,s,t,r,a,n){U(m,s,t,i);const o=b(m,e.spatialReference);return[await this._export(o,i[0],i[1],r,a,n)]}_tiledExport(e,i,s,t){const r=q.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),a=new B(r),n=a.getTileCoverage(e);if(!n)return null;const o=[];return n.forEach((l,f,M,S)=>{_.set(l,f,M,0),a.getTileBounds(m,_);const R=b(m,e.spatialReference);o.push(this._export(R,i,i,0,s,t).then(x=>(S!==0&&(_.set(l,f,M,S),a.getTileBounds(m,_),x.x=m[0],x.y=m[3]),x)))}),Promise.all(o)}};p([u()],d.prototype,"_imagePromise",void 0),p([u()],d.prototype,"bitmaps",void 0),p([u()],d.prototype,"container",void 0),p([u()],d.prototype,"fetchSource",void 0),p([u()],d.prototype,"hidpi",void 0),p([u()],d.prototype,"imageMaxWidth",void 0),p([u()],d.prototype,"imageMaxHeight",void 0),p([u()],d.prototype,"imageRotationSupported",void 0),p([u()],d.prototype,"imageNormalizationSupported",void 0),p([u()],d.prototype,"requestUpdate",void 0),p([u()],d.prototype,"updating",null),d=p([I("esri.views.2d.layers.support.ExportStrategy")],d);const Z=d;export{Z as _};
