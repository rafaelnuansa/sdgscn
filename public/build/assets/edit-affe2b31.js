import{q as h,W as u,j as i,F as g,a as e,b as v}from"./app-6fa01f51.js";import{A as _}from"./admin-layout-fca79991.js";import{I as y}from"./input-d284db37.js";import{C as f,a as C,b,c as x,d as w}from"./card-9f486e91.js";import{T as n}from"./textarea-c1402426.js";import{L as d}from"./label-081f6f63.js";import{B as E}from"./button-e2307a57.js";import{E as k}from"./editor-bfa9002b.js";import"./logo-5f9b324f.js";import"./sweetalert2.all-079bc42e.js";import"./image-5db51842.js";import"./LazyLoad-ee4defa4.js";import"./utils-4ffb26b8.js";import"./scroll-area-2d3c3a5b.js";import"./extends-98964cd2.js";import"./index-3874097f.js";import"./index-f537e81f.js";import"./index-46991544.js";import"./index-465903ca.js";import"./index-e3a1bf56.js";import"./avatar-2fbb423b.js";import"./command-b0fd3b12.js";import"./dialog-509cddda.js";import"./createLucideIcon-c5ae5a41.js";import"./sonner-7bbb8c5e.js";import"./index-8fab0536.js";import"./index-afa7d38e.js";import"./sheet-6a6b4bec.js";import"./index-f96983da.js";import"./dropdown-menu-abbb3a18.js";import"./check-b59271b0.js";function N(){const{page:o}=h().props,{data:a,setData:s,put:m,errors:r,processing:l}=u({title:o.title||"",content:o.content||"",seo_keywords:o.seo_keywords||"",seo_description:o.seo_description||""});function p(t){t.preventDefault(),m(route("admin.pages.update",o.id))}function c(t){s("content",t)}return i(g,{children:[e(v,{title:"Edit Page"}),i(f,{children:[i(C,{children:[e(b,{children:"Edit Page"}),e(x,{children:"Edit the page details below"})]}),e(w,{children:i("form",{onSubmit:p,children:[i("div",{className:"mb-3",children:[e(d,{htmlFor:"title",children:"Title"}),e(y,{id:"title",type:"text",value:a.title,onChange:t=>s("title",t.target.value)}),r.title&&e("div",{className:"text-red-600",children:r.title})]}),i("div",{className:"mb-3",children:[e(d,{htmlFor:"content",children:"Content"}),e(k,{content:a.content,onChange:c}),r.content&&e("div",{className:"text-red-600",children:r.content})]}),i("div",{className:"mb-3",children:[e(d,{htmlFor:"seo_keywords",children:"SEO Keywords"}),e(n,{id:"seo_keywords",type:"text",required:!0,value:a.seo_keywords,onChange:t=>s("seo_keywords",t.target.value)}),r.seo_keywords&&e("div",{className:"text-red-600",children:r.seo_keywords})]}),i("div",{className:"mb-3",children:[e(d,{htmlFor:"seo_description",children:"SEO Description"}),e(n,{id:"seo_description",type:"text",required:!0,value:a.seo_description,onChange:t=>s("seo_description",t.target.value)}),r.seo_description&&e("div",{className:"text-red-600",children:r.seo_description})]}),e(E,{type:"submit",disabled:l,children:"Save Changes"})]})})]})]})}N.layout=o=>e(_,{title:"Edit Page",children:o});export{N as default};
