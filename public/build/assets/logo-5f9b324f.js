import{q as r,r as s,a as e}from"./app-6fa01f51.js";import{S as a}from"./sweetalert2.all-079bc42e.js";import{I as m}from"./image-5db51842.js";function l(){const{flash_message:o}=r().props;return s.useEffect(()=>{o!=null&&o.type&&a.fire({icon:o.type,title:o.title,text:o.message,showConfirmButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",timer:3e3})},[o]),null}function x({className:o,...p}){const{web_setting:t}=r().props;return e(m,{src:`/storage/images/${t==null?void 0:t.website_logo}`,className:"max-h-[40px] sm:max-h-[40px] md:max-h-[70px] lg:max-h-[70px]"})}export{l as F,x as L};
