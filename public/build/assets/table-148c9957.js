import{j as a,a as e,b as l}from"./app-63e7952b.js";import{T as h,a as p,b as d,c as t,d as u,e as i}from"./table-bfebefa9.js";import{B as f}from"./button-23f7c2f7.js";import{I as g}from"./image-47866662.js";import{f as D}from"./utils-2190c141.js";import{D as w,a as b,b as T,c as A,d as s,e as o,f as M}from"./dropdown-menu-9b99620e.js";import{a as v}from"./index-f2134801.js";import{A as y}from"./alert-action-01406725.js";import"./index-f96983da.js";import"./index-c2a46114.js";import"./index-77ca3b3c.js";import"./index-5d9aff14.js";import"./check-50ecf4a6.js";function L({albums:c}){const m=(r,n)=>r.length<=n?r:r.slice(0,n)+"...";return a(h,{children:[e(p,{children:a(d,{children:[e(t,{children:"Image"}),e(t,{children:"Album"}),e(t,{children:"Created"}),e(t,{})]})}),e(u,{children:c.map(r=>a(d,{children:[e(i,{children:e(g,{src:`/storage/albums/${r.image}`,alt:r.name,className:"w-40 rounded-lg object-cover"})}),e(i,{children:m(r.name,40)}),e(i,{children:D(r.created_at)}),e(i,{children:e("div",{className:"flex justify-end",children:a(w,{children:[e(b,{children:a(f,{variant:"outline",size:"icon",children:["  ",e(v,{className:"size-4"})]})}),a(T,{align:"end",className:"w-48",children:[e(A,{children:"Actions"}),e(s,{}),e(o,{asChild:!0,children:e(l,{href:route("admin.albums.show",[r]),children:"Gallery"})}),e(o,{asChild:!0,children:e(l,{href:route("admin.albums.edit",[r]),children:"Edit"})}),a(M,{children:[e(s,{}),e(y,{trigger:e(o,{onSelect:n=>n.preventDefault(),children:"Delete"}),title:"Delete Package",description:"Are you sure you want to delete this Package?",action:()=>router.delete(route("admin.albums.destroy",[r]),{preserveScroll:!0})})]})]})]})})})]},r.id))})]})}export{L as default};
