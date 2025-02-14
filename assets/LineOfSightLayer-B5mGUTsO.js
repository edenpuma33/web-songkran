import{el as w,cS as P,cG as T,jd as y,r as t,t as n,be as O,cQ as j,x as d,jc as F,a4 as $,hq as L,a7 as g,cE as E,jG as H,f5 as C,jH as G,jI as N,cF as V,eo as M,eq as Q,cP as k}from"./index-CorgkmYx.js";import{c as B}from"./Analysis-B1CLc1e3.js";import{c as I,b as R}from"./featureReferenceUtils-BqJdSwHK.js";import{j as h}from"./persistable-DEHQmbOx.js";import{i as D}from"./elevationInfoUtils-D8HWlcTj.js";import"./sphere-BBWSjd6r.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-BzYZw24a.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-CCkaeyY_.js";import"./lineSegment-DZB-cCmC.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-BAQVLtLC.js";let a=class extends w(P(T)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&I(this.feature,e.feature)}};t([n({type:O,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),t([n({type:j}),h()],a.prototype,"elevationInfo",void 0),t([n(R)],a.prototype,"feature",void 0),a=t([d("esri.analysis.LineOfSightAnalysisObserver")],a);const q=a;let l=class extends w(F){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return y(this.position,s.position)&&y(this.elevationInfo,s.elevationInfo)&&I(this.feature,s.feature)}};t([n({type:O}),h()],l.prototype,"position",void 0),t([n({type:j}),h()],l.prototype,"elevationInfo",void 0),t([n(R)],l.prototype,"feature",void 0),l=t([d("esri.analysis.LineOfSightAnalysisTarget")],l);const S=l,c=g.ofType(S);let r=class extends B{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles($(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new c}set targets(e){this._set("targets",E(e,this.targets,c))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var x;const e=this.spatialReference;if(((x=this.observer)==null?void 0:x.position)==null||e==null)return null;const m=u=>D(u.position,u.elevationInfo)==="absolute-height",o=this.observer.position,v=H(o.x,o.y,o.z,o.x,o.y,o.z);for(const u of this.targets)if(u.position!=null){const p=C(u.position,e);if(p.pending!=null)return{pending:p.pending,extent:null};if(p.geometry!=null){const{x:z,y:A,z:_}=p.geometry;G(v,[z,A,_])}}const f=N(v,e);return m(this.observer)&&this.targets.every(m)||(f.zmin=void 0,f.zmax=void 0),{pending:null,extent:f}}clear(){this.observer=null,this.targets.removeAll()}};t([n({type:["line-of-sight"]})],r.prototype,"type",void 0),t([n({type:q,json:{read:!0,write:!0}})],r.prototype,"observer",void 0),t([n({cast:V,type:c,nonNullable:!0,json:{read:!0,write:!0}})],r.prototype,"targets",null),t([n({value:null,readOnly:!0})],r.prototype,"extent",void 0),t([n({readOnly:!0})],r.prototype,"spatialReference",null),t([n({readOnly:!0})],r.prototype,"requiredPropertiesForEditing",null),r=t([d("esri.analysis.LineOfSightAnalysis")],r);const b=r,J=g.ofType(S);let i=class extends M(Q(k)){constructor(s){super(s),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new b,this.opacity=1}initialize(){this.addHandles($(()=>this.analysis,(s,e)=>{e!=null&&e.parent===this&&(e.parent=null),s!=null&&(s.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var s;return(s=this.analysis)==null?void 0:s.observer}set observer(s){const{analysis:e}=this;e&&(e.observer=s)}get targets(){return this.analysis!=null?this.analysis.targets:new g}set targets(s){var e;E(s,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(s){this.analysis===s&&(this.analysis=new b)}};t([n({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([n({type:["LineOfSightLayer"]})],i.prototype,"operationalLayerType",void 0),t([n({type:q,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],i.prototype,"observer",null),t([n({type:J,json:{read:!0,write:{ignoreOrigin:!0}}})],i.prototype,"targets",null),t([n({nonNullable:!0,json:{read:!1,write:!1}})],i.prototype,"analysis",void 0),t([n({readOnly:!0})],i.prototype,"fullExtent",null),t([n({readOnly:!0})],i.prototype,"spatialReference",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),t([n({type:["show","hide"]})],i.prototype,"listMode",void 0),i=t([d("esri.layers.LineOfSightLayer")],i);const ye=i;export{ye as default};
