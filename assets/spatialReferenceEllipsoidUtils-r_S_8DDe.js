import{g as a,dx as d,dy as r,dz as f,dA as k,dB as u,dC as C}from"./index-CorgkmYx.js";const g=new a(C),n=new a(k),e=new a(u),x=new a(d);function y(t){const w=c.get(t);if(w)return w;let s=g;if(t)if(t===n)s=n;else if(t===e)s=e;else{const o=t.wkid,p=t.latestWkid;if(o!=null||p!=null)r(o)||r(p)?s=n:(f(o)||f(p))&&(s=e);else{const i=t.wkt2??t.wkt;if(i){const l=i.toUpperCase();l===m?s=n:l===U&&(s=e)}}}return c.set(t,s),s}const c=new Map,m=n.wkt.toUpperCase(),U=e.wkt.toUpperCase();export{y as a,x as w};
