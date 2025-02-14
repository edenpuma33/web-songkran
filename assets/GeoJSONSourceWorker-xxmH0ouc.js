import{dF as _,dG as R,s as I,dH as C,dI as Q,dJ as Z,b$ as A,dK as G,a1 as P,a3 as M,a as v,D as N,dL as $}from"./index-CorgkmYx.js";import{o as z,r as H,e as J,n as L,t as U}from"./featureConversionUtils-CW0ryXfc.js";import{m as B}from"./FeatureStore-hyYIP7K8.js";import{x as E,j as b}from"./queryUtils-CwRl2kBy.js";import{V}from"./QueryEngine-B3OyySa_.js";import{I as W,N as K,E as Y}from"./geojson-BLODqhp1.js";import{l as X,a as ee,u as te}from"./clientSideDefaults-DMrvHvE0.js";import{j as se,p as T,d as w,f as F,y as O}from"./sourceUtils-CdbpmgZ4.js";import"./OptimizedFeature-D3320lj0.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-DNz3dAAA.js";import"./PooledRBush-DeR_SVZE.js";import"./timeSupport-CzHAgiUR.js";import"./optimizedFeatureQueryEngineAdapter-Cdt4PWly.js";import"./json-BLezgqVO.js";import"./WhereClause-BWgheUn_.js";import"./TimeOnly-DVJukkn2.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-Cq48Jm3c.js";import"./utils-CQfU_RhP.js";import"./utils-MLLFkbKn.js";import"./ClassBreaksDefinition-CgPgUiwd.js";import"./date-Ctp1FiBW.js";import"./capabilities-D6exRNM4.js";const ie={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Re{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const r=[],[s]=await Promise.all([e.url?this._fetch(t==null?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),i=W(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],d=e.hasZ!=null?e.hasZ:i.hasZ,p=i.geometryType;let y=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const m=e.spatialReference||_;let n=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&r.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const u=new R(o);let l=u.get(y);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1,y=l.name):(l={alias:y,name:y,type:i.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(l));const h={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!C.jsonValues.includes(a.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==l.name){const g=Q(a);g!==void 0&&(h[a.name]=g)}a.length==null&&(a.length=Z(a))}if(n){if(n.startTimeField){const a=u.get(n.startTimeField);a?(n.startTimeField=a.name,a.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const a=u.get(n.endTimeField);a?(n.endTimeField=a.name,a.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const a=u.get(n.trackIdField);a?n.trackIdField=a.name:(n.trackIdField=null,r.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(r.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:n}}),n=null)}const c=p?te(p):void 0,j=u.dateFields.length?{timeZoneIANA:A}:null,f={warnings:r,featureErrors:[],layerDefinition:{...ie,drawingInfo:c??void 0,templates:X(h),extent:void 0,geometryType:p,objectIdField:y,fields:o,hasZ:!!d,timeInfo:n,dateFieldsTimeReference:j}};this._queryEngine=new V({fieldsIndex:R.fromLayerJSON({fields:o,timeInfo:n,dateFieldsTimeReference:j}),geometryType:p,hasM:!1,hasZ:d,objectIdField:y,spatialReference:m,timeInfo:n,featureStore:new B({geometryType:p,hasM:!1,hasZ:d})});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(l);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=ee(h,y);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const k=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(k);const{fullExtent:D,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=D,S){const{start:a,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[a,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:r}=this._queryEngine;return await Promise.all([se(t,r),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var s;this._loadOptions.customParameters=e,(s=this._snapshotTask)==null||s.abort(),this._snapshotTask=G(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const o=this._normalizeFeatures(i);o&&this._queryEngine.featureStore.addMany(o)},i=>{this._queryEngine.featureStore.clear(),P(i)||M.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:r}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:r}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:r,objectIdField:s}=this._queryEngine,i=K(e,{geometryType:t,hasZ:r,objectIdField:s});if(!v(this._queryEngine.spatialReference,_))for(const o of i)o.geometry!=null&&(o.geometry=z(b(H(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:r}=this._loadOptions,s=(await N(t??"",{responseType:"json",query:{...r},signal:e})).data;return Y(s),s}_normalizeFeatures(e,t){const{objectIdField:r,fieldsIndex:s}=this._queryEngine,i=[];for(const o of e){const d=this._createDefaultAttributes(),p=T(s,d,o.attributes,!0);p?t==null||t.push(p):(this._assignObjectId(d,o.attributes,!0),o.attributes=d,o.objectId=d[r],i.push(o))}return i}async _applyEdits(e){const{adds:t,updates:r,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t!=null&&t.length&&this._applyAddEdits(i,t),r!=null&&r.length&&this._applyUpdateEdits(i,r),s==null?void 0:s.length){for(const p of s)i.deleteResults.push(w(p));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:o,timeExtent:d}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:d,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:r}=e,{geometryType:s,hasM:i,hasZ:o,objectIdField:d,spatialReference:p,featureStore:y,fieldsIndex:m}=this._queryEngine,n=[];for(const u of t){if(u.geometry&&s!==$(u.geometry)){r.push(F("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),h=T(m,l,u.attributes);if(h)r.push(h);else{if(this._assignObjectId(l,u.attributes),u.attributes=l,u.uid!=null){const c=u.attributes[d];e.uidToObjectId[u.uid]=c}if(u.geometry!=null){const c=u.geometry.spatialReference??p;u.geometry=b(O(u.geometry,c),c,p)}n.push(u),r.push(w(u.attributes[d]))}}y.addMany(J([],n,s,o,i,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:r,hasM:s,hasZ:i,objectIdField:o,spatialReference:d,featureStore:p,fieldsIndex:y}=this._queryEngine;for(const m of t){const{attributes:n,geometry:u}=m,l=n==null?void 0:n[o];if(l==null){e.push(F(`Identifier field ${o} missing`));continue}if(!p.has(l)){e.push(F(`Feature with object id ${l} missing`));continue}const h=L(p.getFeature(l),r,i,s);if(u!=null){if(r!==$(u)){e.push(F("Incorrect geometry type."));continue}const c=u.spatialReference??d;h.geometry=b(O(u,c),c,d)}if(n){const c=T(y,h.attributes,n);if(c){e.push(c);continue}}p.add(U(h,r,i,s,o)),e.push(w(l))}}_createObjectIdGenerator(e,t){const r=e.fieldsIndex.get(e.objectIdField);if(r.type==="esriFieldTypeString")return()=>r.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,r=!1){const s=this._queryEngine.objectIdField;e[s]=r&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await E(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{Re as default};
