import{a as e,F as o,j as a}from"./app-6fa01f51.js";import{y as i}from"./index-e3a1bf56.js";import"./extends-98964cd2.js";const b=({children:r})=>e("div",{className:"space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent",children:r}),f=({day:r,description:s,items:l})=>e(o,{children:a("div",{className:"relative",children:[a("div",{className:"md:flex items-center md:space-x-4 mb-3",children:[a("div",{className:"flex items-center",children:[e(i,{className:"mr-2"}),e("time",{className:"font-sans font-bold italic text-xl  md:w-28",children:r})]}),e("div",{className:" ml-14",children:e("h2",{className:"font-bold",children:s})})]}),l.map((t,m)=>e("div",{className:"bg-gray-200 text-sm mb-2 dark:bg-slate-800 dark:text-white p-4 rounded border border-slate-200 dark:border-slate-900 text-gray-800 shadow ml-14 md:ml-44",children:t.description},`${t.id}_${m}`))]})});export{b as Timeline,f as TimelineItem};
