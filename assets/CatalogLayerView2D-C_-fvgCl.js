import{r as t,t as a,x as o,a7 as l}from"./index-CorgkmYx.js";import{j as d,y}from"./LayerView-B_LYWc0j.js";import"./Container-yTUYF4yS.js";import"./layerViewUtils-D4hXBzvT.js";const p=n=>{let e=class extends n{constructor(...r){super(...r),this.layerViews=new l}get dynamicGroupLayerView(){return this.layerViews.find(r=>{var i;return r.layer===((i=this.layer)==null?void 0:i.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(r=>{var i;return r.layer===((i=this.layer)==null?void 0:i.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return t([a()],e.prototype,"layer",void 0),t([a()],e.prototype,"layerViews",void 0),t([a({readOnly:!0})],e.prototype,"dynamicGroupLayerView",null),t([a({readOnly:!0})],e.prototype,"footprintLayerView",null),e=t([o("esri.views.layers.CatalogLayerView")],e),e};let s=class extends p(d(y)){constructor(){super(...arguments),this.layerViews=new l}update(n){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((n,e)=>this.container.addChildAt(n.container,e))}};t([a()],s.prototype,"layerViews",void 0),s=t([o("esri.views.2d.layers.CatalogLayerView2D")],s);const V=s;export{V as default};
