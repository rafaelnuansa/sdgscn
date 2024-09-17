import { j as jsxs, a as jsx } from "../ssr.js";
import { useRef } from "react";
import { I as InputError } from "./input-error-5d71eba3.js";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { L as Label } from "./label-3e67e23b.js";
import { I as Input } from "./input-e2af5f4c.js";
import { B as Button } from "./button-c70c5ef8.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-43a93659.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-label";
import "class-variance-authority";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
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
  return /* @__PURE__ */ jsxs(Card, { className, children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Update Password" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Ensure your account is using a long, random password to stay secure." })
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
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(Transition, { show: recentlySuccessful, enterFrom: "opacity-0", leaveTo: "opacity-0", className: "transition ease-in-out", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Saved." }) })
      ] })
    ] }) })
  ] });
}
export {
  UpdatePasswordForm
};
