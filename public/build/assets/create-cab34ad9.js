import{W as c,j as e,F as h,a,Y as u,b as g}from"./app-0f317af6.js";import{C as f}from"./container-25687433.js";import{B as C,b}from"./button-6ee40647.js";import{A as v}from"./admin-layout-8ea0c507.js";import{I as F}from"./input-c5df6010.js";import{F as x}from"./file-upload-1e9e184b.js";import{C as D,a as I,b as y,c as N,d as j}from"./card-ff3c36be.js";import{L as o}from"./label-7df650fa.js";import{I as s}from"./input-error-message-0a544363.js";import"./index-f96983da.js";import"./utils-ad603c53.js";import"./logo-4797a319.js";import"./sweetalert2.esm.all-6b8774ac.js";import"./image-4a55f714.js";import"./scroll-area-ca1c4aa5.js";import"./index-6e287385.js";import"./index-18458df1.js";import"./index-ea564b3d.js";import"./index-573b9059.js";import"./avatar-88c83a50.js";import"./command-e42a0819.js";import"./dialog-6aa434fc.js";import"./sonner-1949a94e.js";import"./index-c10dc6c0.js";import"./index-08ba5364.js";import"./sheet-9d0cc585.js";import"./dropdown-menu-06957853.js";import"./check-b066cda3.js";function L(){const{data:t,setData:m,post:p,errors:n,processing:d}=c({image:null,name:""});function l(r){m(r.target.name,r.target.value)}return e(h,{children:[a(u,{title:"Create Partner"}),a(f,{children:e(D,{children:[e(I,{children:[a(y,{children:"Create Partner"}),a(N,{children:"Create a new partner"})]}),a(j,{children:e("form",{onSubmit:r=>{r.preventDefault();const i=new FormData;i.append("name",t.name),i.append("image",t.image),p(route("admin.partners.store"),i)},children:[e("div",{children:[a(o,{htmlFor:"image",children:"Image"}),a(x,{id:"image",accept:"image/*",name:"image",onChange:r=>m("image",r)}),a(s,{message:n.image})]}),e("div",{className:"mt-4",children:[a(o,{htmlFor:"name",children:"Name"}),a(F,{id:"name",type:"text",name:"name",onChange:l}),a(s,{message:n.name})]}),e("div",{className:"mt-6",children:[a(C,{type:"submit",variant:"default",disabled:d,children:"Create"}),a(g,{href:route("admin.partners.index"),className:b({variant:"default"})+" ml-2",children:"Cancel"})]})]})})]})})]})}L.layout=t=>a(v,{children:t});export{L as default};
