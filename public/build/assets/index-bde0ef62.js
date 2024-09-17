import{r as N,j as a,a as e,b as S,d as c,m as D,F as T,y as b}from"./app-6fa01f51.js";import{C as y,a as A,b as I,c as _,d as M,e as z}from"./card-9f486e91.js";import{T as B,a as P,b as p,c as n,d as k,e as i}from"./table-910a4cca.js";import{c as f,b as F}from"./utils-4ffb26b8.js";import{A as j}from"./admin-layout-fca79991.js";import{B as s}from"./button-e2307a57.js";import{I as u}from"./input-d284db37.js";import{u as E}from"./useFilter-52701a51.js";import{S as H,a as L,b as R,c as V,d}from"./select-1fa85c02.js";import{f as q,a as G}from"./index-e3a1bf56.js";import{D as U,a as J,b as K,c as O,d as Q,e as v,f as W}from"./dropdown-menu-abbb3a18.js";import{A as X}from"./alert-action-54ac0550.js";import"./logo-5f9b324f.js";import"./sweetalert2.all-079bc42e.js";import"./image-5db51842.js";import"./LazyLoad-ee4defa4.js";import"./scroll-area-2d3c3a5b.js";import"./extends-98964cd2.js";import"./index-3874097f.js";import"./index-f537e81f.js";import"./index-46991544.js";import"./index-465903ca.js";import"./avatar-2fbb423b.js";import"./command-b0fd3b12.js";import"./dialog-509cddda.js";import"./createLucideIcon-c5ae5a41.js";import"./sonner-7bbb8c5e.js";import"./index-8fab0536.js";import"./index-afa7d38e.js";import"./sheet-6a6b4bec.js";import"./index-f96983da.js";import"./label-081f6f63.js";import"./lodash-0519b56f.js";import"./check-b59271b0.js";import"./index-4b60d59b.js";import"./alert-dialog-4b58ff09.js";function Pe({auth:C,...x}){const{data:w,meta:m,links:o}=x.bookings,[t,h]=N.useState({search:"",status:"",start_date:"",end_date:""});E({route:route("admin.bookings.index"),values:t,only:["bookings"]});const g=r=>{h(l=>({...l,[r.target.name]:r.target.value}))};return a(j,{children:[e(S,{title:"Bookings"}),a(y,{children:[a(A,{className:"border-b",children:[e(I,{children:"Bookings"}),e(_,{children:"Manage all bookings"})]}),a(M,{className:"p-0",children:[a("div",{className:"flex p-5 flex-col gap-3 lg:flex-row",children:[e("div",{className:"flex",children:e(u,{value:t==null?void 0:t.search,className:"min-w-[300px] w-full",onChange:r=>h(l=>({...l,search:r.target.value})),placeholder:"Search..."})}),a("div",{className:"flex gap-3",children:[e(u,{type:"date",name:"start_date",value:t.start_date,onChange:g,placeholder:"Start Date"}),e(u,{type:"date",name:"end_date",value:t.end_date,onChange:g,placeholder:"End Date"})]}),e("div",{className:"flex gap-3",children:a(H,{value:t==null?void 0:t.status,onValueChange:r=>h({...t,status:r}),children:[e(L,{className:"md:w-40",children:e(R,{placeholder:t!=null&&t.status?t.status:"Status "})}),a(V,{children:[e(d,{children:"All"}),e(d,{value:"pending",children:"Pending"}),e(d,{value:"approved",children:"Approved"}),e(d,{value:"canceled",children:"Canceled"}),e(d,{value:"completed",children:"Completed"})]})]})}),e(s,{asChild:!0}),e(s,{asChild:!0,children:a(c,{href:route("admin.packages.create"),children:[e(q,{className:"mr-2 size-4"}),"Excel"]})})]}),a(B,{children:[e(P,{children:a(p,{children:[e(n,{className:"min-w-[150px]",children:"Invoice"}),e(n,{children:"User"}),e(n,{children:"Package"}),e(n,{children:"Status"}),e(n,{children:"Peserta"}),e(n,{children:"Total"}),e(n,{children:"Terbayar"}),e(n,{children:"Tanggal"}),e(n,{children:"Actions"})]})}),e(k,{children:w.map(r=>a(D.Fragment,{children:[a(p,{children:[e(i,{children:r.invoice}),e(i,{children:r.user.name}),e(i,{children:r.package.name}),a(i,{children:[r.status," "]}),e(i,{children:r.qty}),e(i,{children:f(r.amount)}),e(i,{children:f(r.paid_payment)}),e(i,{children:F(r.created_at)}),e(i,{children:a(U,{children:[e(J,{children:a(s,{variant:"outline",size:"icon",children:[" ",e(G,{className:"size-3"})]})}),a(K,{align:"end",className:"w-48",children:[e(O,{children:"Actions"}),e(Q,{}),C.user.is_admin&&a(T,{children:[e(v,{asChild:!0,children:e(c,{href:route("admin.bookings.show",r.invoice),children:"Show"})}),e(W,{children:e(X,{trigger:e(v,{onSelect:l=>l.preventDefault(),children:"Delete"}),title:r.invoice,description:"Apakah anda yakin ingin menghapus?",action:()=>b.delete(route("admin.bookings.destroy",[r]),{preserveScroll:!0})})})]})]})]})})]}),e(p,{})]},r.id))})]})]}),a(z,{className:"justify-between  pt-6 text-sm text-muted-foreground",children:[a("span",{children:["Showing ",m.from," of ",m.total]}),m.has_pages&&a("div",{className:"flex items-center gap-x-1",children:[e(s,{asChild:!0,size:"sm",variant:"outline",children:o.prev?a(c,{href:o.prev,children:[e(IconChevronLeft,{className:"-ml-1 mr-1 size-4"}),"Prev"]}):e("span",{children:"Prev"})}),e(s,{asChild:!0,size:"sm",variant:"outline",children:o.next?a(c,{href:o.next,children:["Next",e(IconChevronRight,{className:"-mr-1 ml-1 size-4"})]}):e("span",{children:"Next"})})]})]})]})]})}export{Pe as default};
