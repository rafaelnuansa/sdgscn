import { j as jsxs, a as jsx } from "../ssr.js";
import { G as GuestLayout } from "./guest-layout-559c6254.js";
import { I as InputError } from "./input-error-5d71eba3.js";
import { useForm, Head } from "@inertiajs/react";
import { I as Input } from "./input-6fbce247.js";
import { B as Button } from "./button-e2a7e3d3.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./card-d70f34a0.js";
import "react";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "@radix-ui/react-slot";
import "class-variance-authority";
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-muted-foreground", children: "lupa kata sandi Anda? Tidak masalah. Cukup beri tahu kami alamat email Anda dan kami akan mengirimkan email berisi tautan pengaturan ulang kata sandi yang memungkinkan Anda memilih yang baru." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-400", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          placeholder: "you@domain.com",
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { className: "ml-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
export {
  ForgotPassword as default
};
