import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { useForm, Head } from "@inertiajs/react";
import { I as Input } from "./input-e2af5f4c.js";
import { b as buttonVariants } from "./button-c70c5ef8.js";
import { C as Container } from "./container-a7123293.js";
import { A as AuthLayout } from "./auth-layout-2b2fe834.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./footer-67e2bd2e.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./sheet-4df565dd.js";
import "@radix-ui/react-dialog";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-d3e20674.js";
import "cmdk";
import "./dialog-d3517b83.js";
import "axios";
import "usehooks-ts";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "./logo-dark-11c95af7.js";
import "./login-nav-427a7598.js";
import "./input-error-5d71eba3.js";
import "./checkbox-da69a68e.js";
import "@radix-ui/react-checkbox";
import "./phone-input-9795e577.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-6a1d9996.js";
import "@radix-ui/react-popover";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "sonner";
import "./login-register-c2778968.js";
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
