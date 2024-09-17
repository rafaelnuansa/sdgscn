import{W as u,r as h,j as r,a as e,b as f,F as g,d as w}from"./app-6fa01f51.js";import{C as v,a as N,b as x,c as C,d as b}from"./card-9f486e91.js";import"./LazyLoad-ee4defa4.js";import{I as i}from"./input-error-16cfc667.js";import{B as k}from"./button-e2307a57.js";import{I as n}from"./input-d284db37.js";import{L as s}from"./label-081f6f63.js";import"./sweetalert2.all-079bc42e.js";import"./dropdown-menu-abbb3a18.js";import"./sheet-74fa3870.js";import"./lodash-0519b56f.js";import"./command-b0fd3b12.js";import"./avatar-2fbb423b.js";import"./dialog-509cddda.js";import"./checkbox-6f82eb78.js";import{P as y}from"./phone-input-3276aec4.js";import{A as F}from"./index-afa7d38e.js";import{A as _}from"./app-layout-bb8ae6d6.js";import{C as I}from"./container-482b5f5d.js";import"./utils-4ffb26b8.js";import"./extends-98964cd2.js";import"./index-f96983da.js";import"./index-3874097f.js";import"./index-f537e81f.js";import"./index-46991544.js";import"./index-465903ca.js";import"./check-b59271b0.js";import"./createLucideIcon-c5ae5a41.js";import"./index-e3a1bf56.js";import"./index-4b60d59b.js";import"./index-9d034f32.js";import"./index-0dcac027.js";import"./popover-56e5c94b.js";import"./scroll-area-2d3c3a5b.js";import"./logo-5f9b324f.js";import"./image-5db51842.js";import"./index-8c668f9d.js";import"./footer-11969c1d.js";import"./index-8a20468a.js";import"./index-af888c1e.js";import"./logo-dark-70c7c7d1.js";import"./login-nav-d974da96.js";import"./login-register-a15b55ab.js";function Ne(){const{data:t,setData:o,post:l,processing:d,errors:m,reset:p}=u({name:"",email:"",phone:"+62",password:"",password_confirmation:""});h.useEffect(()=>()=>{p("password","password_confirmation")},[]);const c=a=>/^\+62\d{9,15}$/.test(a);return r(_,{children:[e(f,{title:"Register"}),e(g,{children:e(I,{children:e("div",{className:"mx-auto py-16",children:r("div",{className:"grid items-center md:grid-cols-2 lg:gap-12",children:[e("div",{className:"mb-10",children:r("div",{className:"py-5 max-w-2xl md:mb-12",children:[e("h1",{className:"mb-5 text-4xl font-semibold text-gray-800 dark:text-gray-200 lg:text-5xl",children:"Binbaz Travel"}),e("p",{className:"text-gray-600 dark:text-gray-400",children:"Temukan keberkahan dan kedamaian di Tanah Suci bersama kami."})]})}),e("div",{children:e("div",{className:"ms-auto lg:mx-auto lg:me-0 lg:max-w-lg",children:e("div",{className:"flex flex-col rounded-2xl",children:r(v,{children:[r(N,{children:[e(x,{children:"Daftar"}),e(C,{children:"Silahkan daftarkan akun anda"})]}),e(b,{children:r("form",{onSubmit:a=>{if(a.preventDefault(),!c(t.phone)){o("phone","+62"),F.warning("Masukkan nomor handphone yang valid dengan format Indonesia");return}l(route("register"))},children:[r("div",{children:[e(s,{htmlFor:"name",children:"Nama Lengkap"}),e(n,{id:"name",name:"name",value:t.name,className:"mt-1 block w-full",autoComplete:"name",autoFocus:!0,onChange:a=>o("name",a.target.value),required:!0}),e(i,{message:m.name,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(s,{htmlFor:"email",children:"Email"}),e(n,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value),required:!0}),e(i,{message:m.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(s,{htmlFor:"phone",children:"Nomor Handphone"}),e(y,{id:"phone",international:!0,defaultCountry:"ID",value:t.phone,onChange:a=>o("phone",a),required:!0}),e(i,{message:m.phone,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(s,{htmlFor:"password",children:"Password"}),e(n,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password",a.target.value),required:!0}),e(i,{message:m.password,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(s,{htmlFor:"password_confirmation",children:"Confirm Password"}),e(n,{id:"password_confirmation",type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value),required:!0}),e(i,{message:m.password_confirmation,className:"mt-2"})]}),e("div",{className:"mt-4",children:e(k,{className:"w-full",disabled:d,children:"Register"})}),e("div",{className:"mt-4 flex items-center justify-end",children:e(w,{href:route("login"),className:"text-sm font-medium text-foreground hover:underline",children:"Sudah punya akun? Masuk di sini"})})]})})]})})})})]})})})})]})}export{Ne as default};
