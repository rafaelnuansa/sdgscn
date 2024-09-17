import{r as s,a as e,j as m,q as E,b as I,d as D}from"./app-6fa01f51.js";import{M as B}from"./meta-tags-c56c4016.js";import{A as _}from"./app-layout-bb8ae6d6.js";import{C as x}from"./container-482b5f5d.js";import{B as w,b as H}from"./button-e2307a57.js";import"./package-card-ccd907e4.js";import K from"./hero-f08ef367.js";import{I as M}from"./image-5db51842.js";import{u as q,A as T,e as V}from"./carousel-1a43e807.js";import{d as f}from"./utils-4ffb26b8.js";import"./avatar-2fbb423b.js";import"./LazyLoad-ee4defa4.js";import $ from"./article-card-bf47ea5c.js";import"./logo-5f9b324f.js";import"./sweetalert2.all-079bc42e.js";import"./index-8c668f9d.js";import"./footer-11969c1d.js";import"./dropdown-menu-abbb3a18.js";import"./extends-98964cd2.js";import"./index-f537e81f.js";import"./index-46991544.js";import"./index-3874097f.js";import"./index-465903ca.js";import"./check-b59271b0.js";import"./createLucideIcon-c5ae5a41.js";import"./sheet-74fa3870.js";import"./index-f96983da.js";import"./index-e3a1bf56.js";import"./lodash-0519b56f.js";import"./command-b0fd3b12.js";import"./dialog-509cddda.js";import"./index-8a20468a.js";import"./index-af888c1e.js";import"./label-081f6f63.js";import"./logo-dark-70c7c7d1.js";import"./login-nav-d974da96.js";import"./input-d284db37.js";import"./input-error-16cfc667.js";import"./checkbox-6f82eb78.js";import"./index-4b60d59b.js";import"./phone-input-3276aec4.js";import"./index-9d034f32.js";import"./index-0dcac027.js";import"./popover-56e5c94b.js";import"./scroll-area-2d3c3a5b.js";import"./index-afa7d38e.js";import"./login-register-a15b55ab.js";import"./badge-95cc5184.js";import"./moment-a9aaa855.js";const b=s.createContext(null);function h(){const t=s.useContext(b);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const v=s.forwardRef(({orientation:t="horizontal",opts:o,setApi:a,plugins:l,className:i,children:n,...d},u)=>{const[k,r]=q({...o,axis:t==="horizontal"?"x":"y"},l),[R,z]=s.useState(!1),[A,L]=s.useState(!1),p=s.useCallback(c=>{c&&(z(c.canScrollPrev()),L(c.canScrollNext()))},[]),N=s.useCallback(()=>{r==null||r.scrollPrev()},[r]),C=s.useCallback(()=>{r==null||r.scrollNext()},[r]),j=s.useCallback(c=>{c.key==="ArrowLeft"?(c.preventDefault(),N()):c.key==="ArrowRight"&&(c.preventDefault(),C())},[N,C]);return s.useEffect(()=>{!r||!a||a(r)},[r,a]),s.useEffect(()=>{if(r)return p(r),r.on("reInit",p),r.on("select",p),()=>{r==null||r.off("select",p)}},[r,p]),e(b.Provider,{value:{carouselRef:k,api:r,opts:o,orientation:t||((o==null?void 0:o.axis)==="y"?"vertical":"horizontal"),scrollPrev:N,scrollNext:C,canScrollPrev:R,canScrollNext:A},children:e("div",{ref:u,onKeyDownCapture:j,className:f("relative",i),role:"region","aria-roledescription":"carousel",...d,children:n})})});v.displayName="Carousel";const g=s.forwardRef(({className:t,...o},a)=>{const{carouselRef:l,orientation:i}=h();return e("div",{ref:l,className:"overflow-hidden",children:e("div",{ref:a,className:f("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...o})})});g.displayName="CarouselContent";const y=s.forwardRef(({className:t,...o},a)=>{const{orientation:l}=h();return e("div",{ref:a,role:"group","aria-roledescription":"slide",className:f("min-w-0 shrink-0 grow-0 basis-full",l==="horizontal"?"pl-4":"pt-4",t),...o})});y.displayName="CarouselItem";const P=s.forwardRef(({className:t,variant:o="outline",size:a="icon",...l},i)=>{const{orientation:n,scrollPrev:d,canScrollPrev:u}=h();return m(w,{ref:i,variant:o,size:a,className:f("absolute  h-8 w-8 rounded-full",n==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:d,...l,children:[e(T,{className:"h-4 w-4"}),e("span",{className:"sr-only",children:"Previous slide"})]})});P.displayName="CarouselPrevious";const S=s.forwardRef(({className:t,variant:o="outline",size:a="icon",...l},i)=>{const{orientation:n,scrollNext:d,canScrollNext:u}=h();return m(w,{ref:i,variant:o,size:a,className:f("absolute h-8 w-8 rounded-full",n==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:d,...l,children:[e(V,{className:"h-4 w-4"}),e("span",{className:"sr-only",children:"Next slide"})]})});S.displayName="CarouselNext";function F({partners:t}){return m(v,{opts:{align:"start"},className:"w-full",children:[e(g,{children:t.map((o,a)=>e(y,{className:"basis-1/2 md:basis-1/3 lg:basis-1/5",children:e("div",{className:"p-1",children:e(M,{src:`/storage/partners/${o.image}`,alt:o.name,className:"w-40"})})},a))}),e(P,{}),e(S,{})]})}function G(){const{latestArticles:t,sliders:o,partners:a,web_setting:l,testimonials:i}=E().props;return m("div",{children:[e(I,{title:"Beranda"}),e(B,{title:l.website_name??"Laravel",description:l.website_description,url:route("home")}),e(K,{slides:o}),e("div",{className:"latest-packages border-b py-20",children:m(x,{children:[m("div",{className:"mb-4 flex items-center justify-between",children:[e("h2",{className:"text-2xl font-bold",children:"Recent News"}),e(D,{href:"/packages",className:H({variant:"default"})+" font-extrabold",children:"Lihat Semua Postingan"})]}),e("div",{className:"grid grid-cols gap-4 md:grid-cols-3 lg:grid-cols-4",children:t.map(n=>e($,{article:n},n.id))})]})}),a&&a.length>0&&e("div",{className:"bg-gray-800 p-20",children:e(x,{children:e("div",{className:"flex flex-wrap items-center justify-center",children:e(F,{partners:a})})})})]})}G.layout=t=>e(_,{children:t});export{G as default};
