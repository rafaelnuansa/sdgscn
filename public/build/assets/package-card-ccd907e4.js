import{a,d as i,j as r}from"./app-6fa01f51.js";import{c as d}from"./utils-4ffb26b8.js";import{I as t}from"./image-5db51842.js";import{B as s}from"./badge-95cc5184.js";import"./LazyLoad-ee4defa4.js";import"./index-f96983da.js";const l=({paket:e})=>a(i,{href:route("packages.show",e.slug),children:r("div",{className:"rounded-xl border overflow-hidden",children:[a("div",{className:"relative overflow-hidden",children:a(t,{skeletonHeight:"40",className:"aspect-[16/9] w-full object-cover",src:`/images/${e.image}`})}),r("div",{className:"p-4",children:[a(s,{variant:"default",className:"rounded mb-2",children:e.category.name}),a("h2",{className:"text-xl font-semibold",children:e.name}),a("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:e.description}),r("div",{className:"flex items-center justify-between mt-3",children:[a("div",{className:"flex items-center gap-x-1",children:r(s,{variant:"outline",className:"rounded",children:[e.day," Hari"]})}),a("p",{className:"text-sm font-semibold text-gray-600 dark:text-gray-300",children:d(e.price)})]})]})]})},e.id),g=l;export{g as default};
