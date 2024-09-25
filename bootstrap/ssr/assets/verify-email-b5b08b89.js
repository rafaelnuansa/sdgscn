import { j as jsxs, a as jsx } from "../ssr.js";
import { G as GuestLayout } from "./guest-layout-ff000e21.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { B as Button, b as buttonVariants } from "./button-ef56bd5e.js";
import { c as cn } from "./utils-fa5dc5b8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./card-f706282b.js";
import "react";
import "./logo-dark-fd798013.js";
import "clsx";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "tailwind-merge";
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-muted-foreground", children: "Terima kasih telah mendaftar! Sebelum memulai, bisakah Anda memverifikasi alamat email Anda dengan mengklik link yang baru saja kami kirimkan melalui email kepada Anda? Jika tidak terima emailnya, dengan senang hati kami akan mengirimkan email lainnya." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: "Tautan verifikasi baru telah dikirim ke alamat email yang Anda berikan saat pendaftaran." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between gap-x-1", children: [
      /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Mengirim ulang email verifikasi" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: cn(
            buttonVariants({
              variant: "ghost"
            })
          ),
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
export {
  VerifyEmail as default
};
