import{cG as h,cH as m,r as a,t as i,x as c}from"./index-CorgkmYx.js";import{d as p}from"./scaleUtils-DsW0bhXV.js";import{n as u}from"./floorFilterUtils-DZ5C6FQv.js";import{n as b}from"./sublayerUtils-ZMSUm0Ou.js";const d={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let s=class extends h{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(r=>{const y=u(this.floors,r);return r.toExportImageJSON(y)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&b(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",r=>this.notifyChange(d[r.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(r=>r.id).join(","):"show:-1":null}get layerDefs(){var y;const e=!!((y=this.floors)!=null&&y.length),r=this.visibleSublayers.filter(l=>l.definitionExpression!=null||e&&l.floorInfo!=null);return r.length?JSON.stringify(r.reduce((l,n)=>{const t=u(this.floors,n),o=m(t,n.definitionExpression);return o!=null&&(l[n.id]=o),l},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,y=this.scale,l=t=>{t.visible&&(y===0||p(y,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(l):e.unshift(t))};r&&r.forEach(l);const n=this._get("visibleSublayers");return!n||n.length!==e.length||n.some((t,o)=>e[o]!==t)?e:n}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};a([i({readOnly:!0})],s.prototype,"dynamicLayers",null),a([i()],s.prototype,"floors",void 0),a([i({readOnly:!0})],s.prototype,"hasDynamicLayers",null),a([i()],s.prototype,"layer",null),a([i({readOnly:!0})],s.prototype,"layers",null),a([i({readOnly:!0})],s.prototype,"layerDefs",null),a([i({type:Number})],s.prototype,"scale",void 0),a([i({readOnly:!0})],s.prototype,"version",null),a([i({readOnly:!0})],s.prototype,"visibleSublayers",null),s=a([c("esri.layers.support.ExportImageParameters")],s);export{s as y};
