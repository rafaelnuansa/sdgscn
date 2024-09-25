import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { C as Container } from "./container-a7123293.js";
import { A as AppLayout } from "./app-layout-ec137134.js";
import { usePage, useForm, Head } from "@inertiajs/react";
import { IconLocation, IconTelephone, IconBrandWhatsapp, IconMessageFill } from "@irsyadadl/paranoid";
import { I as Input } from "./input-6fbce247.js";
import { T as Textarea } from "./textarea-a3fe09ec.js";
import { L as Label } from "./label-4839c48b.js";
import { B as Button } from "./button-e2a7e3d3.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-360047b4.js";
import "sweetalert2";
import "clsx";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "./utils-186374bb.js";
import "tailwind-merge";
import "react-floating-whatsapp";
import "./footer-5dc05f52.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./sheet-6d41fe2c.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-1156986d.js";
import "cmdk";
import "./dialog-20065758.js";
import "axios";
import "usehooks-ts";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./checkbox-b75be4ac.js";
import "@radix-ui/react-checkbox";
import "./phone-input-d483b92f.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-7b9a4e5c.js";
import "@radix-ui/react-popover";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "sonner";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
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
