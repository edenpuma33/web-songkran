import{c$ as u,d1 as f}from"./index-CorgkmYx.js";import{g as i}from"./locale-CV_TIHPK.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const t={};async function M(e,s){const a=`${s}_${e}`;return t[a]||(t[a]=fetch(f(`./assets/${s}/t9n/messages_${e}.json`)).then(n=>(n.ok||o(),n.json())).catch(()=>o())),t[a]}function o(){throw new Error("could not fetch component message bundle")}function c(e){e.messages={...e.defaultMessages,...e.messageOverrides}}function d(){}async function m(e){e.defaultMessages=await g(e,e.effectiveLocale),c(e)}async function g(e,s){if(!u())return{};const{el:a}=e,r=a.tagName.toLowerCase().replace("calcite-","");return M(i(s,"t9n"),r)}async function y(e,s){e.defaultMessages=await g(e,s),c(e)}function C(e){e.onMessagesChange=h}function $(e){e.onMessagesChange=d}function h(){c(this)}export{C as c,$ as d,m as s,y as u};
