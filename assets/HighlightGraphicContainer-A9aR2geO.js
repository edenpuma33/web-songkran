import{av as a,ax as s,aw as i,r as h,x as n}from"./index-CorgkmYx.js";import{i as l}from"./AGraphicContainer-I6Mrvoq0.js";let t=class extends l{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===a.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),s(e,!0,r=>{this._renderChildren(r,i.All)},0))}};t=h([n("esri.views.2d.layers.graphics.HighlightGraphicContainer")],t);const u=t;export{u as h};
