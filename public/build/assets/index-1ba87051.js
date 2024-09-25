import{j as r,F as m,a as e,Y as p,b as d}from"./app-0f317af6.js";import{C as h}from"./container-25687433.js";import{b as u}from"./button-6ee40647.js";import{A as f}from"./admin-layout-8ea0c507.js";import{C as b,a as D,b as w,c as C,d as y,e as x}from"./card-ff3c36be.js";import{T,a as g,b as n,c as a,d as A,e as i}from"./table-932b903c.js";import{f as N}from"./utils-ad603c53.js";import{D as M,a as j,b as v,c as S,d as l,e as s,f as _}from"./dropdown-menu-06957853.js";import{a as H}from"./index-573b9059.js";import{A as I}from"./alert-action-318e0515.js";import"./index-f96983da.js";import"./logo-4797a319.js";import"./sweetalert2.esm.all-6b8774ac.js";import"./image-4a55f714.js";import"./scroll-area-ca1c4aa5.js";import"./index-6e287385.js";import"./index-18458df1.js";import"./index-ea564b3d.js";import"./avatar-88c83a50.js";import"./command-e42a0819.js";import"./dialog-6aa434fc.js";import"./sonner-1949a94e.js";import"./index-c10dc6c0.js";import"./index-08ba5364.js";import"./sheet-9d0cc585.js";import"./label-7df650fa.js";import"./check-b066cda3.js";import"./alert-dialog-ef886b4d.js";function P({publications:o}){return r(m,{children:[e(p,{title:"Publication Index"}),e(h,{children:r(b,{children:[r(D,{children:[e(w,{children:"Publication List"}),e(C,{children:"Here you can manage all publication related to SDGs."}),e("div",{className:"mb-4",children:e(d,{className:u("primary"),href:route("admin.publications.create"),children:"Add New Publication"})})]}),e(y,{className:"p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t",children:r(T,{children:[e(g,{children:r(n,{children:[e(a,{children:"Title"}),e(a,{children:"Author"}),e(a,{children:"Year"}),e(a,{children:"Created"}),e(a,{})]})}),e(A,{children:o.data.map(t=>r(n,{children:[e(i,{children:t.title}),e(i,{children:t.author}),e(i,{children:t.year}),e(i,{children:N(t.created_at)}),e(i,{children:e("div",{className:"flex justify-end",children:r(M,{children:[e(j,{children:e(H,{className:"size-4"})}),r(v,{align:"end",className:"w-48",children:[e(S,{children:"Actions"}),e(l,{}),e(s,{asChild:!0,children:e(d,{href:route("admin.publications.edit",[t]),children:"Edit"})}),r(_,{children:[e(l,{}),e(I,{trigger:e(s,{onSelect:c=>c.preventDefault(),children:"Delete"}),title:"Delete",description:"Are you sure you want to delete this?",action:()=>router.delete(route("admin.publications.destroy",[t]),{preserveScroll:!0})})]})]})]})})})]},t.id))})]})}),e(x,{className:"justify-between border-t pt-6 text-sm text-muted-foreground"})]})})]})}P.layout=o=>e(f,{children:o});export{P as default};
