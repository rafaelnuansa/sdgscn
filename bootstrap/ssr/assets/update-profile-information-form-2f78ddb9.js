import { j as jsxs, a as jsx } from "../ssr.js";
import { I as InputError } from "./input-error-5d71eba3.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { L as Label } from "./label-3e67e23b.js";
import { I as Input } from "./input-e2af5f4c.js";
import { B as Button } from "./button-c70c5ef8.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-43a93659.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@radix-ui/react-label";
import "class-variance-authority";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
function UpdateProfileInformationForm({ mustVerifyEmail, status, className = "" }) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs(Card, { className, children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Profile Information" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Update your account's profile information and email address." })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsx(Input, { id: "name", value: data.name, onChange: (e) => setData("name", e.target.value), required: true, autoFocus: true, autoComplete: "name" }),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(Input, { id: "email", type: "email", value: data.email, onChange: (e) => setData("email", e.target.value), required: true, autoComplete: "username" }),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-foreground", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "text-sm font-medium text-foreground hover:underline",
              children: "Click here to re-send the verification email."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium text-green-600", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(Transition, { show: recentlySuccessful, enterFrom: "opacity-0", leaveTo: "opacity-0", className: "transition ease-in-out", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Saved." }) })
      ] })
    ] }) })
  ] });
}
export {
  UpdateProfileInformationForm
};
