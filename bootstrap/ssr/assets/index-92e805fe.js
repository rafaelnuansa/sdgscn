import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { C as Container } from "./container-a7123293.js";
import { A as AppLayout } from "./app-layout-a22821eb.js";
import { usePage, useForm, Head } from "@inertiajs/react";
import { IconLocation, IconTelephone, IconBrandWhatsapp, IconMessageFill } from "@irsyadadl/paranoid";
import { I as Input } from "./input-e2af5f4c.js";
import { T as Textarea } from "./textarea-5aed477a.js";
import { L as Label } from "./label-3e67e23b.js";
import { B as Button } from "./button-c70c5ef8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "clsx";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./utils-38e41470.js";
import "tailwind-merge";
import "react-floating-whatsapp";
import "./footer-67e2bd2e.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./sheet-4df565dd.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-d3e20674.js";
import "cmdk";
import "./dialog-d3517b83.js";
import "axios";
import "usehooks-ts";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
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
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "./login-register-c2778968.js";
function ContactIndex() {
  const { setting } = usePage().props;
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("contact.store"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Kontak" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 py-12", children: /* @__PURE__ */ jsxs("div", { className: "lg:-mx-6 lg:flex lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:mx-6 lg:w-1/2", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl", children: "Kontak Kami" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-8 md:mt-8", children: [
          /* @__PURE__ */ jsxs("p", { className: "-mx-2 flex items-start", children: [
            /* @__PURE__ */ jsx(IconLocation, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-2 w-72 truncate text-gray-700 dark:text-gray-400", children: setting.website_address ?? "" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "-mx-2 flex items-start", children: [
            /* @__PURE__ */ jsx(IconTelephone, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-2 w-72 truncate text-gray-700 dark:text-gray-400", children: setting.website_phone ?? "" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "-mx-2 flex items-start", children: [
            /* @__PURE__ */ jsx(IconBrandWhatsapp, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-2 w-72 truncate text-gray-700 dark:text-gray-400", children: setting.website_phone_whatsapp ?? "" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "-mx-2 flex items-start", children: [
            /* @__PURE__ */ jsx(IconMessageFill, {}),
            /* @__PURE__ */ jsx("span", { className: "mx-2 w-72 truncate text-gray-700 dark:text-gray-400", children: setting.website_email ?? "" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 lg:mx-6 lg:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full overflow-hidden rounded-lg border bg-white px-8 py-10 shadow-2xl shadow-gray-300/50 dark:bg-gray-900 dark:shadow-black/50 lg:max-w-xl", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-medium", children: "Kontak Kami" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mt-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx(Label, { children: "Full Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                placeholder: "Nama Lengkap",
                value: data.name,
                onChange: (e) => setData("name", e.target.value)
              }
            ),
            errors.name && /* @__PURE__ */ jsx("div", { className: "text-red-600", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex-1", children: [
            /* @__PURE__ */ jsx(Label, { children: "Email address" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "email",
                placeholder: "email@gmail.com",
                value: data.email,
                onChange: (e) => setData("email", e.target.value)
              }
            ),
            errors.email && /* @__PURE__ */ jsx("div", { className: "text-red-600", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 w-full", children: [
            /* @__PURE__ */ jsx(Label, { children: "Message" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                placeholder: "Message",
                value: data.message,
                onChange: (e) => setData("message", e.target.value)
              }
            ),
            errors.message && /* @__PURE__ */ jsx("div", { className: "text-red-600", children: errors.message })
          ] }),
          /* @__PURE__ */ jsx(Button, { className: "w-full mt-3", type: "submit", disabled: processing, children: "Send" })
        ] })
      ] }) })
    ] }) }) }) })
  ] });
}
ContactIndex.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  ContactIndex as default
};
