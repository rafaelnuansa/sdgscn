import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import "./card-f706282b.js";
import "clsx";
import "react-lazy-load";
import { I as InputError } from "./input-error-5d71eba3.js";
import { I as Input } from "./input-05b98463.js";
import { L as Label } from "./label-22b65785.js";
import { C as Checkbox } from "./checkbox-75ff73a5.js";
import { B as Button } from "./button-ef56bd5e.js";
import { A as AuthLayout } from "./auth-layout-223a0710.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-fa5dc5b8.js";
import "tailwind-merge";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-checkbox";
import "lucide-react";
import "@radix-ui/react-slot";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "framer-motion";
import "./footer-775d67cf.js";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
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
import "./logo-dark-fd798013.js";
import "./phone-input-bee968be.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "sonner";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "relative ", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:py-14", children: /* @__PURE__ */ jsxs("div", { className: "mt-10 grid items-center gap-8 md:grid-cols-2 lg:gap-12", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl md:mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-5 text-4xl font-semibold lg:text-5xl", children: "Login Account" }),
        /* @__PURE__ */ jsx("p", { children: "Temukan keberkahan dan kedamaian di Tanah Suci bersama kami." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "ms-auto lg:mx-auto lg:me-0 lg:max-w-lg", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col rounded-2xl sm:p-7", children: /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              type: "email",
              name: "email",
              value: data.email,
              className: "mt-1 block w-full",
              autoComplete: "username",
              autoFocus: true,
              onChange: (e) => setData("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "password",
              type: "password",
              name: "password",
              value: data.password,
              className: "mt-1 block w-full",
              autoComplete: "current-password",
              onChange: (e) => setData("password", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Checkbox, { defaultChecked: true, name: "remember", onCheckedChange: (e) => setData("remember", e) }),
            /* @__PURE__ */ jsx("span", { className: "ml-2 select-none text-sm text-muted-foreground", children: "Remember me" })
          ] }),
          canResetPassword && /* @__PURE__ */ jsx(Link, { href: "/forgot-password", className: "text-sm font-medium text-foreground hover:underline", children: "Forgot password?" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 gap-x-2", children: /* @__PURE__ */ jsx(Button, { className: "w-full bg-custom-primary-theme hover:bg-custom-primary-theme", disabled: processing, type: "submit", children: "Log in" }) })
      ] }) }) }) }) }) })
    ] }) }) }) })
  ] });
}
export {
  Login as default
};
