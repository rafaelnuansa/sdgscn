import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { useEffect } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-f706282b.js";
import "clsx";
import "react-lazy-load";
import { I as InputError } from "./input-error-5d71eba3.js";
import { B as Button } from "./button-ef56bd5e.js";
import { I as Input } from "./input-05b98463.js";
import { L as Label } from "./label-22b65785.js";
import "sweetalert2";
import "./dropdown-menu-fef2e637.js";
import "./sheet-8bf1694f.js";
import "./theme-provider-b3598db8.js";
import "@irsyadadl/paranoid";
import "./lodash-d8bc076d.js";
import "./command-3c1526d0.js";
import "./avatar-f336b458.js";
import "./dialog-bc7d8a74.js";
import "./checkbox-75ff73a5.js";
import { P as PhoneInput } from "./phone-input-bee968be.js";
import { toast } from "sonner";
import { A as AppLayout } from "./app-layout-dd331cc4.js";
import { C as Container } from "./container-a7123293.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-fa5dc5b8.js";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "@radix-ui/react-dialog";
import "cmdk";
import "@radix-ui/react-avatar";
import "@radix-ui/react-checkbox";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "./logo-70150b74.js";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-floating-whatsapp";
import "./footer-775d67cf.js";
import "axios";
import "usehooks-ts";
import "./logo-dark-fd798013.js";
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    phone: "+62",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+62\d{9,15}$/;
    return phoneRegex.test(phone);
  };
  const submit = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(data.phone)) {
      setData("phone", "+62");
      toast.warning("Masukkan nomor handphone yang valid dengan format Indonesia");
      return;
    }
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "mx-auto py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center md:grid-cols-2 lg:gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsxs("div", { className: "py-5 max-w-2xl md:mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-5 text-4xl font-semibold text-gray-800 dark:text-gray-200 lg:text-5xl", children: "Binbaz Travel" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Temukan keberkahan dan kedamaian di Tanah Suci bersama kami." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "ms-auto lg:mx-auto lg:me-0 lg:max-w-lg", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col rounded-2xl", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Daftar" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Silahkan daftarkan akun anda" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nama Lengkap" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "name",
                name: "name",
                value: data.name,
                className: "mt-1 block w-full",
                autoComplete: "name",
                autoFocus: true,
                onChange: (e) => setData("name", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
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
                onChange: (e) => setData("email", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Nomor Handphone" }),
            /* @__PURE__ */ jsx(
              PhoneInput,
              {
                id: "phone",
                international: true,
                defaultCountry: "ID",
                value: data.phone,
                onChange: (value) => setData("phone", value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.phone, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                value: data.password,
                className: "mt-1 block w-full",
                autoComplete: "new-password",
                onChange: (e) => setData("password", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password_confirmation",
                type: "password",
                name: "password_confirmation",
                value: data.password_confirmation,
                className: "mt-1 block w-full",
                autoComplete: "new-password",
                onChange: (e) => setData("password_confirmation", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Button, { className: "w-full", disabled: processing, children: "Register" }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Link, { href: route("login"), className: "text-sm font-medium text-foreground hover:underline", children: "Sudah punya akun? Masuk di sini" }) })
        ] }) })
      ] }) }) }) })
    ] }) }) }) })
  ] });
}
export {
  Register as default
};
