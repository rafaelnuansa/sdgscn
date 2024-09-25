import{W as u,j as e,F as g,a as t,Y as v,b as y}from"./app-0f317af6.js";import{C as f}from"./container-25687433.js";import{B as b,b as C}from"./button-6ee40647.js";import{A as k}from"./admin-layout-8ea0c507.js";import{I as o}from"./input-c5df6010.js";import{C as x,a as _,b as F,c as N,d as S}from"./card-ff3c36be.js";import{L as m}from"./label-7df650fa.js";import{I as n}from"./input-error-message-0a544363.js";import"./index-f96983da.js";import"./utils-ad603c53.js";import"./logo-4797a319.js";import"./sweetalert2.esm.all-6b8774ac.js";import"./image-4a55f714.js";import"./scroll-area-ca1c4aa5.js";import"./index-6e287385.js";import"./index-18458df1.js";import"./index-ea564b3d.js";import"./index-573b9059.js";import"./avatar-88c83a50.js";import"./command-e42a0819.js";import"./dialog-6aa434fc.js";import"./sonner-1949a94e.js";import"./index-c10dc6c0.js";import"./index-08ba5364.js";import"./sheet-9d0cc585.js";import"./dropdown-menu-06957853.js";import"./check-b066cda3.js";function D({publication:i,sdgs:s}){const{data:a,setData:h,post:p,errors:d,processing:c}=u({sdg_id:i.sdg_id??"",title:i.title??"",year:i.year??"",author:i.author??"",link:i.link??"",_method:"PUT"}),l=r=>{h(r.target.name,r.target.value)};return e(g,{children:[t(v,{title:"Edit Publication"}),t(f,{children:e(x,{children:[e(_,{children:[t(F,{children:"Edit Publication"}),t(N,{children:"Edit the existing publication entry"})]}),t(S,{children:e("form",{onSubmit:r=>{r.preventDefault(),p(route("admin.publications.update",i.id),a)},children:[e("div",{children:[t(m,{htmlFor:"sdg_id",children:"SDG"}),e("select",{id:"sdg_id",name:"sdg_id",value:a.sdg_id,onChange:l,className:"w-full p-2 border rounded",children:[t("option",{value:"",children:"Select SDG"}),s.map(r=>t("option",{value:r.id,children:r.name},r.id))]}),t(n,{message:d.sdg_id})]}),e("div",{className:"mt-4",children:[t(m,{htmlFor:"title",children:"Title"}),t(o,{id:"title",type:"text",name:"title",value:a.title,onChange:l}),t(n,{message:d.title})]}),e("div",{className:"mt-4",children:[t(m,{htmlFor:"year",children:"Year"}),t(o,{id:"year",type:"text",name:"year",value:a.year,onChange:l}),t(n,{message:d.year})]}),e("div",{className:"mt-4",children:[t(m,{htmlFor:"author",children:"Author"}),t(o,{id:"author",type:"text",name:"author",value:a.author,onChange:l}),t(n,{message:d.author})]}),e("div",{className:"mt-4",children:[t(m,{htmlFor:"link",children:"Link"}),t(o,{id:"link",type:"url",name:"link",value:a.link,onChange:l}),t(n,{message:d.link})]}),e("div",{className:"mt-6",children:[t(b,{type:"submit",variant:"primary",disabled:c,children:"Update"}),t(y,{href:route("admin.publications.index"),className:C({variant:"default"})+" ml-2",children:"Cancel"})]})]})})]})})]})}D.layout=i=>t(k,{children:i});export{D as default};
