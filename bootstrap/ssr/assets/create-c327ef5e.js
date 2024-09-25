import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { useForm, Head } from "@inertiajs/react";
import { I as Input } from "./input-05b98463.js";
import { B as Button } from "./button-ef56bd5e.js";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { L as Label } from "./label-22b65785.js";
import { F as FileUpload } from "./file-upload-4b5275f8.js";
import { P as PhoneInput } from "./phone-input-bee968be.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-f706282b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "@irsyadadl/paranoid";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./command-3c1526d0.js";
import "cmdk";
import "lucide-react";
import "./dialog-bc7d8a74.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-6fce3cff.js";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
import "@radix-ui/react-label";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
function UserCreate() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
    phone: "",
    price: "",
    avatar: null
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData(name, name === "avatar" ? files[0] : value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("admin.users.store"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create User" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Create User" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Fill form to Create User" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-2", children: [
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { children: " Name " }),
            /* @__PURE__ */ jsx(Input, { type: "text", name: "name", value: data.name, onChange: handleChange, placeholder: "Name", error: errors.name }),
            errors.name && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { children: " Name " }),
            /* @__PURE__ */ jsx(Input, { type: "email", name: "email", value: data.email, onChange: handleChange, placeholder: "Email", error: errors.email }),
            errors.email && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { children: " Password " }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "password",
                name: "password",
                value: data.password,
                onChange: handleChange,
                placeholder: "Password",
                error: errors.password
              }
            ),
            errors.password && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.password })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { children: " Phone " }),
            /* @__PURE__ */ jsx(
              PhoneInput,
              {
                id: "phone",
                international: true,
                defaultCountry: "ID",
                value: data.phone,
                error: errors.phone,
                onChange: (value) => setData("phone", value),
                required: true
              }
            ),
            errors.phone && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { children: " Image " }),
            /* @__PURE__ */ jsx(FileUpload, { type: "file", name: "avatar", accept: "image/*", onChange: handleChange, error: errors.avatar }),
            errors.avatar && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.avatar })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "default", disabled: processing, children: processing ? "Creating..." : "Create" }) })
        ] }),
        " "
      ] }) })
    ] })
  ] });
}
UserCreate.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  UserCreate as default
};
