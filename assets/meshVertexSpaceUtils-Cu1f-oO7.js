import{be as u,bf as p,a3 as l,bg as f}from"./index-CorgkmYx.js";import{a as s,b as d}from"./MeshLocalVertexSpace-DAVvI3Z3.js";function a(){return l.getLogger("esri.geometry.Mesh")}function c(e){return e.origin!=null}function b(e){return c(e.vertexSpace)}function w(e,r){if(!c(e))return null;const[i,n,o]=e.origin;return new u({x:i,y:n,z:o,spatialReference:r})}function y(e,r){const{x:i,y:n,z:o,spatialReference:g}=e,t=[i,n,o??0];return(r==null?void 0:r.geographic)!==void 0&&(p(a(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),r.vertexSpace&&a().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),((r==null?void 0:r.vertexSpace)??h(r==null?void 0:r.geographic)??x(g))==="local"?new s({origin:t}):new d({origin:t})}function x(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function h(e){return e==null?void 0:e?"local":"georeferenced"}function S(e,r){return e.type===r.type&&(e.origin===r.origin||e.origin!=null&&r.origin!=null&&f(e.origin,r.origin))}export{c as a,b as g,S as m,y as s,w as u};
