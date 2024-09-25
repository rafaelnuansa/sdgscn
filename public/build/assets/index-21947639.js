import{q as x,W as h,r as s,j as t,F as f,a as e,Y as g,b as C,y as b}from"./app-63e7952b.js";import{C as y}from"./container-d866ff26.js";import{B as m,b as S}from"./button-23f7c2f7.js";import{A as w}from"./admin-layout-53604583.js";import{S as N}from"./sweetalert2.esm.all-6b8774ac.js";import{C as v,d as B,a as E,b as F,c as j,e as D}from"./card-aad8f5c2.js";import{u as P}from"./useFilter-1295c154.js";import{S as _}from"./index-f2134801.js";import A from"./table-d39ef41c.js";import{P as T}from"./pagination-83f92938.js";import"./index-f96983da.js";import"./utils-2190c141.js";import"./logo-8dbfaedc.js";import"./image-47866662.js";import"./scroll-area-9d3a7a4e.js";import"./index-77ca3b3c.js";import"./index-c2a46114.js";import"./index-5d9aff14.js";import"./avatar-b1c4a6d6.js";import"./command-df4ffff9.js";import"./dialog-ce1b28eb.js";import"./sonner-2cc13a31.js";import"./index-c8e346d0.js";import"./index-e35b7e7c.js";import"./sheet-6d084aef.js";import"./dropdown-menu-9b99620e.js";import"./check-50ecf4a6.js";import"./label-d2ec3fec.js";import"./lodash-e77bcb61.js";import"./table-bfebefa9.js";import"./alert-action-01406725.js";function Y({auth:a,...n}){const{experts:o}=x().props,{delete:l}=h(),[i,d]=s.useState(""),[p,k]=s.useState(n.state);P({route:route("admin.experts.index"),values:p,only:["experts"]});const c=r=>{N.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(u=>{u.isConfirmed&&l(route("admin.experts.destroy",r))})};return t(f,{children:[e(g,{title:"Experts"}),e(y,{children:t(v,{children:[t(B,{className:"p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t",children:[t("div",{className:"flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0",children:[t(E,{className:"p-0",children:[e(F,{children:"Experts"}),e(j,{children:"Manage Experts"})]}),t("div",{className:"flex max-w-md flex-col gap-2 md:flex-row",children:[t("form",{onSubmit:r=>{r.preventDefault(),b.get(route("admin.experts.index"),{search:i})},className:"flex items-center gap-2",children:[e("input",{type:"text",placeholder:"Search experts...",value:i,onChange:r=>d(r.target.value),className:"p-2 border border-gray-300 rounded-md"}),e(m,{type:"submit",className:S("primary"),children:"Search"})]}),e("div",{className:"grid grid-cols-2 gap-x-2 md:flex",children:e(m,{asChild:!0,children:t(C,{href:route("admin.experts.create"),children:[e(_,{className:"mr-2 size-4"}),"New"]})})})]})]}),e(A,{experts:o,handleUserDelete:c})]}),e(D,{className:"border-t text-sm text-muted-foreground",children:e(T,{links:o.links})})]})})]})}Y.layout=a=>e(w,{children:a});export{Y as default};
