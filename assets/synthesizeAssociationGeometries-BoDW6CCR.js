import{l as u,r,t as i,x as d,A as y,C as l,B as h,D as x}from"./index-CorgkmYx.js";import{d as $}from"./Association-xGwnr6Hv.js";let n=class extends u{constructor(t){super(t),this.maxGeometryCountExceeded=!1,this.associations=[]}};r([i({type:Boolean,json:{write:!0}})],n.prototype,"maxGeometryCountExceeded",void 0),r([i({type:[$],json:{write:!0}})],n.prototype,"associations",void 0),n=r([d("esri.rest.networks.support.AssociationGeometriesResult")],n);const G=n;async function w(t,s,e){const o=y(t),a={...s.toJSON(),f:"json"},c=l({...o.query,...a});e?e.method="post":e={method:"post"};const p=h(c,e),f=`${o.path}/synthesizeAssociationGeometries`;return x(f,p).then(m=>A(m,s.outSpatialReference))}function A(t,s){const{data:e}=t;if(s)for(const o of e.associations)o.geometry.spatialReference||(o.geometry.spatialReference=s.clone());return G.fromJSON(e)}export{w as synthesizeAssociationGeometries};
