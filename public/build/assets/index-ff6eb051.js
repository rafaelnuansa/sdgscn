import{q as e,j as o,F as a,a as r,Y as m,b as s}from"./app-63e7952b.js";import{C as p}from"./container-d866ff26.js";import{C as l,a as d,b as c,d as n}from"./card-aad8f5c2.js";import{A as h}from"./app-layout-55c8dd51.js";import{V as f}from"./video-10aceda6.js";import"./utils-2190c141.js";import"./logo-8dbfaedc.js";import"./sweetalert2.esm.all-6b8774ac.js";import"./image-47866662.js";import"./index-82935e96.js";import"./footer-35468446.js";import"./dropdown-menu-9b99620e.js";import"./index-c2a46114.js";import"./button-23f7c2f7.js";import"./index-f96983da.js";import"./index-77ca3b3c.js";import"./index-5d9aff14.js";import"./check-50ecf4a6.js";import"./sheet-fa1bf778.js";import"./index-f2134801.js";import"./lodash-e77bcb61.js";import"./command-df4ffff9.js";import"./dialog-ce1b28eb.js";import"./index-9f80a219.js";import"./avatar-b1c4a6d6.js";import"./label-d2ec3fec.js";import"./input-eee1757d.js";import"./checkbox-992e0272.js";import"./index-e34585fa.js";import"./phone-input-c3082cb5.js";import"./index-7fbae591.js";import"./index-fc7fcb57.js";import"./popover-5ae7021f.js";import"./scroll-area-9d3a7a4e.js";import"./index-e35b7e7c.js";import"./memoize-one.esm-7e8505cb.js";function g(){const{videos:t}=e().props;return o(a,{children:[r(m,{title:"Galleries"}),r(p,{children:r("div",{className:"py-20",children:o(l,{className:"border-0 shdow-none",children:[r(d,{children:r(c,{children:"Videos"})}),r(n,{children:r("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:t.data.map(i=>o(s,{href:route("galleries.videos.show",i.slug),className:"relative overflow-hidden rounded-lg shadow-md",children:[r(f,{src:`/storage/videos/${i.video}`,alt:i.title,className:"w-full object-cover"}),r("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100",children:r("p",{className:"text-lg font-semibold text-white",children:i.name})})]},i.id))})})]})})})]})}g.layout=t=>r(h,{children:t});export{g as default};
