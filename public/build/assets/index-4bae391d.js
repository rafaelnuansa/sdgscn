import{q as o,j as i,F as l,a as r,Y as s}from"./app-0f317af6.js";import{H as m,B as p}from"./header-5fc71843.js";import{A as d}from"./app-layout-05fb018a.js";import{C as c}from"./container-25687433.js";import{P as n}from"./pagination-c0a67189.js";import"./breadcrumb-f06e9c58.js";import"./button-6ee40647.js";import"./index-f96983da.js";import"./utils-ad603c53.js";import"./dropdown-menu-06957853.js";import"./index-18458df1.js";import"./index-6e287385.js";import"./index-ea564b3d.js";import"./check-b066cda3.js";import"./logo-4797a319.js";import"./sweetalert2.esm.all-6b8774ac.js";import"./image-4a55f714.js";import"./index-648782ab.js";import"./footer-dcb1600c.js";import"./sheet-4a45db7c.js";import"./index-573b9059.js";import"./lodash-66ca2d15.js";import"./command-e42a0819.js";import"./dialog-6aa434fc.js";import"./index-cb1f36ad.js";import"./avatar-88c83a50.js";import"./label-7df650fa.js";import"./logo-dark-2f899114.js";import"./input-c5df6010.js";import"./checkbox-c1b7b3e9.js";import"./index-b3550733.js";import"./phone-input-a062bac7.js";import"./index-0193708b.js";import"./index-8d94046a.js";import"./popover-823b8481.js";import"./scroll-area-ca1c4aa5.js";import"./index-08ba5364.js";function h(){const{auth:a,research:t}=o().props;return i(l,{children:[r(s,{title:"Research"}),r(m,{title:"Research",subtitle:"All research related to SDGs"}),i(c,{children:[r(p,{links:[{label:"Home",url:"/"},{label:"Sdgs",url:"/sdgs"},{label:"Research",url:"/sdgs/research"}]}),r("div",{className:"mx-auto lg:py-14",children:r("div",{className:"grid gap-10 md:grid-cols-12",children:i("div",{className:"md:col-span-12",children:[r("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:t.data.length>0?t.data.map(e=>i("div",{className:"p-4 bg-white shadow rounded-lg",children:[r("h3",{className:"text-xl font-semibold",children:e.title}),i("p",{className:"text-gray-500",children:["Author: ",e.author]}),i("p",{className:"text-gray-500",children:["Year: ",e.year||"N/A"]}),e.link&&r("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"View Research"})]},e.id)):r("p",{children:"No research found."})}),r("div",{className:"mt-2",children:r(n,{links:t.links})})]})})})]})]})}h.layout=a=>r(d,{children:a});export{h as default};
