import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-d70f34a0.js";
import "clsx";
import "react-lazy-load";
import { I as InputError } from "./input-error-5d71eba3.js";
import { I as Input } from "./input-6fbce247.js";
import { L as Label } from "./label-4839c48b.js";
import { C as Checkbox } from "./checkbox-b75be4ac.js";
import { B as Button } from "./button-e2a7e3d3.js";
import { A as AppLayout } from "./app-layout-ec137134.js";
import { C as Container } from "./container-a7123293.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-186374bb.js";
import "tailwind-merge";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-checkbox";
import "lucide-react";
import "@radix-ui/react-slot";
import "./logo-360047b4.js";
import "sweetalert2";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-floating-whatsapp";
import "./footer-5dc05f52.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "./sheet-6d41fe2c.js";
import "@radix-ui/react-dialog";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-1156986d.js";
import "cmdk";
import "./dialog-20065758.js";
import "axios";
import "usehooks-ts";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./phone-input-d483b92f.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-7b9a4e5c.js";
import "@radix-ui/react-popover";
import "./scroll-area-4a6b9ba2.js";
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
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "ms-auto lg:mx-auto lg:me-0 lg:max-w-lg", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col rounded-2xl sm:p-7", children: /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Login" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Login dengan akun anda" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
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
              onChange: (e) => setData("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
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
          canResetPassword && /* @__PURE__ */ jsx(Link, { href: "/forgot-password", className: "text-sm font-medium text-foreground hover:underline", children: "Lupa Password?" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 gap-x-2", children: /* @__PURE__ */ jsx(Button, { className: "w-full", disabled: processing, type: "submit", children: "Masuk" }) })
      ] }) }) })
    ] }) }) }) }) }) }) })
  ] });
}
export {
  Login as default
};
