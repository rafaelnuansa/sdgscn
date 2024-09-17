import { j as jsxs, a as jsx } from "../ssr.js";
import { useEffect } from "react";
import { G as GuestLayout } from "./guest-layout-6b81bc0c.js";
import { I as InputError } from "./input-error-5d71eba3.js";
import { useForm, Head } from "@inertiajs/react";
import { I as Input } from "./input-e2af5f4c.js";
import { L as Label } from "./label-3e67e23b.js";
import { B as Button } from "./button-c70c5ef8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./card-43a93659.js";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "./logo-dark-11c95af7.js";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-slot";
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"));
  };
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-muted-foreground", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
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
            autoFocus: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { className: "ml-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
export {
  ConfirmPassword as default
};
