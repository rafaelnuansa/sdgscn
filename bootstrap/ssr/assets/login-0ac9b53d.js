import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { useForm, Head } from "@inertiajs/react";
import { I as Input } from "./input-05b98463.js";
import { b as buttonVariants } from "./button-ef56bd5e.js";
import { C as Container } from "./container-a7123293.js";
import { A as AuthLayout } from "./auth-layout-223a0710.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "./footer-775d67cf.js";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./sheet-8bf1694f.js";
import "@radix-ui/react-dialog";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-3c1526d0.js";
import "cmdk";
import "./dialog-bc7d8a74.js";
import "axios";
import "usehooks-ts";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "./logo-dark-fd798013.js";
import "./checkbox-75ff73a5.js";
import "@radix-ui/react-checkbox";
import "./phone-input-bee968be.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "sonner";
function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("admin.login"), {});
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Admin Login" }),
    /* @__PURE__ */ jsx(AuthLayout, { children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-8 max-w-md", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 text-center text-2xl font-semibold", children: "Admin Login" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(Input, { type: "email", name: "email", value: data.email, onChange: handleChange, placeholder: "Email" }),
          errors.email && /* @__PURE__ */ jsx("div", { className: "text-red-500", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(Input, { type: "password", name: "password", value: data.password, onChange: handleChange, placeholder: "Password" }),
          errors.password && /* @__PURE__ */ jsx("div", { className: "text-red-500", children: errors.password })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-4 flex items-center justify-between", children: /* @__PURE__ */ jsx("button", { type: "submit", className: `${buttonVariants({ variant: "default" })} w-full`, disabled: processing, children: processing ? "Logging in..." : "Login" }) })
      ] })
    ] }) }) })
  ] });
}
export {
  Login as default
};
