import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { B as Button } from "./button-e2a7e3d3.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-d70f34a0.js";
import { I as Input } from "./input-6fbce247.js";
import { L as Label } from "./label-4839c48b.js";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { usePage, useForm, Head, router } from "@inertiajs/react";
import { I as InputError } from "./input-error-5d71eba3.js";
import { useRef, useState } from "react";
import { P as PhoneInput } from "./phone-input-d483b92f.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "./logo-360047b4.js";
import "sweetalert2";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "@irsyadadl/paranoid";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./command-1156986d.js";
import "cmdk";
import "lucide-react";
import "./dialog-20065758.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-7a963302.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-7b9a4e5c.js";
import "@radix-ui/react-popover";
function ProfileIndex() {
  const { props } = usePage();
  const { profile } = props;
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const { data, setData, errors, put, reset, processing } = useForm({
    name: profile.name || "",
    phone: profile.phone || "",
    email: profile.email || "",
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("admin.profile.updatePassword"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  const updateProfile = (e) => {
    e.preventDefault();
    put(route("admin.profile.update"), {
      preserveScroll: true,
      onSuccess: () => router.visit(route("admin.profile.index"), { method: "get" })
    });
  };
  const resendVerificationEmail = () => {
    router.post(route("admin.profile.sendVerificationEmail"), {}, {
      onSuccess: () => setEmailVerificationSent(true)
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      !profile.email_verified_at && /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Email Verification" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Your Email is not verified, Please Confirm Your Email" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { onClick: resendVerificationEmail, disabled: emailVerificationSent, children: emailVerificationSent ? "Verification Email Sent" : "Resend Verification Email" }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Edit Profile" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Edit Profile information" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: updateProfile, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "name",
                value: data.name,
                onChange: (e) => setData("name", e.target.value),
                type: "text",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone" }),
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
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                value: data.email,
                onChange: (e) => setData("email", e.target.value),
                type: "email",
                className: "mt-1 block w-full"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Save" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Change Password" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Change your account password" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "current_password", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "current_password",
                ref: currentPasswordInput,
                value: data.current_password,
                onChange: (e) => setData("current_password", e.target.value),
                type: "password",
                className: "mt-1 block w-full",
                autoComplete: "current-password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "New Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData("password", e.target.value),
                type: "password",
                className: "mt-1 block w-full",
                autoComplete: "new-password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password_confirmation",
                value: data.password_confirmation,
                onChange: (e) => setData("password_confirmation", e.target.value),
                type: "password",
                className: "mt-1 block w-full",
                autoComplete: "new-password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Save" }) })
        ] }) })
      ] })
    ] })
  ] });
}
ProfileIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  ProfileIndex as default
};
