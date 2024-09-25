import { j as jsxs, a as jsx } from "../ssr.js";
import { useState, useEffect } from "react";
import { I as Input } from "./input-05b98463.js";
import { L as Label } from "./label-22b65785.js";
import { D as Dialog, b as DialogTrigger, a as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-bc7d8a74.js";
import { B as Button } from "./button-ef56bd5e.js";
import { IconLogin } from "@irsyadadl/paranoid";
import { useForm, Link } from "@inertiajs/react";
import { I as InputError } from "./input-error-5d71eba3.js";
import { C as Checkbox } from "./checkbox-75ff73a5.js";
import { P as PhoneInput } from "./phone-input-bee968be.js";
import { toast } from "sonner";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "lucide-react";
import "@radix-ui/react-slot";
import "@radix-ui/react-checkbox";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./command-3c1526d0.js";
import "cmdk";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
function LoginForm({ onClose }) {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onSuccess: () => onClose()
    });
  };
  return /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
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
      /* @__PURE__ */ jsx(Link, { href: "/forgot-password", className: "text-sm font-medium text-foreground hover:underline", children: "Lupa Password?" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 gap-x-2", children: /* @__PURE__ */ jsx(Button, { className: "w-full", disabled: processing, type: "submit", children: "Masuk" }) })
  ] }) });
}
function RegisterForm() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(data.phone)) {
      setData("phone", "+62");
      toast.warning("Masukkan nomor handphone yang valid dengan format Indonesia");
      return;
    }
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
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
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Button, { className: "w-full", disabled: processing, type: "submit", children: "Register" }) })
  ] });
}
function LoginRegisterDialog() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "default", onClick: () => setOpen(true), className: "w-full", children: [
      /* @__PURE__ */ jsx(IconLogin, { className: "mr-2" }),
      " Login / Register"
    ] }) }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: isLogin ? "Login" : "Register" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: isLogin ? "Silahkan Login dengan akun anda" : "Silahkan daftarkan akun anda" })
      ] }),
      isLogin ? /* @__PURE__ */ jsx(LoginForm, { onClose: () => setOpen(false) }) : /* @__PURE__ */ jsx(RegisterForm, {}),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(Button, { variant: "link", onClick: () => setIsLogin(!isLogin), children: isLogin ? "Belum punya akun? Register" : "Sudah punya akun? Login" }) })
    ] })
  ] });
}
export {
  LoginRegisterDialog as default
};
