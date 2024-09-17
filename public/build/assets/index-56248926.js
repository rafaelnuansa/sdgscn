import{W as x,r as g,j as r,F as v,a as e,b as C,d as n}from"./app-6fa01f51.js";import{B as m}from"./button-e2307a57.js";import{A as N}from"./admin-layout-fca79991.js";import{S as w}from"./sweetalert2.all-079bc42e.js";import S from"./table-2c33ce62.js";import{S as b,a as y,b as I,c as B,d as a}from"./select-1fa85c02.js";import{C as P,d as U,a as j,b as z,c as A,e as _}from"./card-9f486e91.js";import{I as F}from"./input-d284db37.js";import{u as T}from"./useFilter-52701a51.js";import{S as D}from"./index-e3a1bf56.js";import"./extends-98964cd2.js";import"./index-f96983da.js";import"./utils-4ffb26b8.js";import"./logo-5f9b324f.js";import"./image-5db51842.js";import"./LazyLoad-ee4defa4.js";import"./scroll-area-2d3c3a5b.js";import"./index-3874097f.js";import"./index-f537e81f.js";import"./index-46991544.js";import"./index-465903ca.js";import"./avatar-2fbb423b.js";import"./command-b0fd3b12.js";import"./dialog-509cddda.js";import"./createLucideIcon-c5ae5a41.js";import"./sonner-7bbb8c5e.js";import"./index-8fab0536.js";import"./index-afa7d38e.js";import"./sheet-6a6b4bec.js";import"./dropdown-menu-abbb3a18.js";import"./check-b59271b0.js";import"./label-081f6f63.js";import"./table-910a4cca.js";import"./alert-action-54ac0550.js";import"./alert-dialog-4b58ff09.js";import"./index-4b60d59b.js";import"./lodash-0519b56f.js";function k({auth:d,...c}){const{data:p,meta:o,links:s}=c.users,{delete:u}=x(),[t,h]=g.useState(c.state);T({route:route("admin.users.index"),values:t,only:["users"]});const f=i=>{w.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&u(route("admin.users.destroy",i))})};return r(v,{children:[e(C,{title:"Users"}),r(P,{children:[r(U,{className:"p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t",children:[r("div",{className:"flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0",children:[r(j,{className:"p-0",children:[e(z,{className:"flex",children:"Users"}),e(A,{children:"Users Managements"})]}),r("div",{className:"flex max-w-md flex-col gap-2 md:flex-row",children:[e(F,{value:t==null?void 0:t.search,onChange:i=>h(l=>({...l,search:i.target.value})),placeholder:"Search..."}),r("div",{className:"grid grid-cols-2 gap-x-2 md:flex",children:[r(b,{value:t==null?void 0:t.status,onValueChange:i=>h({...t,status:i}),children:[e(y,{className:"md:w-40",children:e(I,{placeholder:t==null?void 0:t.status})}),r(B,{children:[e(a,{children:"All"}),e(a,{value:"draft",children:"Aktif"}),e(a,{value:"pending",children:"Pending"}),e(a,{value:"published",children:"Published"})]})]}),e(m,{asChild:!0,children:r(n,{href:route("admin.users.create"),children:[e(D,{className:"mr-2 size-4"}),"New"]})})]})]})]}),e(S,{users:p,handleUserDelete:f})]}),r(_,{className:"justify-between border-t pt-6 text-sm text-muted-foreground",children:[r("span",{children:["Showing ",o.from," of ",o.total]}),o.has_pages&&r("div",{className:"flex items-center gap-x-1",children:[e(m,{asChild:!0,size:"sm",variant:"outline",children:s.prev?r(n,{href:s.prev,children:[e(IconChevronLeft,{className:"-ml-1 mr-1 size-4"}),"Prev"]}):e("span",{children:"Prev"})}),e(m,{asChild:!0,size:"sm",variant:"outline",children:s.next?r(n,{href:s.next,children:["Next",e(IconChevronRight,{className:"-mr-1 ml-1 size-4"})]}):e("span",{children:"Next"})})]})]})]})]})}k.layout=d=>e(N,{children:d});export{k as default};
