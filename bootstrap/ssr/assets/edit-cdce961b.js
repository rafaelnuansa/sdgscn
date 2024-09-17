import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useEffect } from "react";
import { useForm, Head } from "@inertiajs/react";
import { I as Input } from "./input-e2af5f4c.js";
import { B as Button } from "./button-c70c5ef8.js";
import { C as Container } from "./container-a7123293.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { L as Label } from "./label-3e67e23b.js";
import { P as PhoneInput } from "./phone-input-9795e577.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "@irsyadadl/paranoid";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./command-d3e20674.js";
import "cmdk";
import "lucide-react";
import "./dialog-d3517b83.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-c59fdc39.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
import "@radix-ui/react-label";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-6a1d9996.js";
import "@radix-ui/react-popover";
function UserEdit({ user }) {
  const { data, setData, post, processing, errors } = useForm({
    name: user.name,
    email: user.email,
    password: "",
    phone: user.phone,
    image: null,
    _method: "PUT"
  });
  useEffect(() => {
    setData("name", user.name);
    setData("email", user.email);
    setData("phone", user.phone);
  }, [user]);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData(name, name === "image" ? files[0] : value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("admin.users.update", { user: user.id }));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Edit User" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:px-6 lg:p-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Edit User" }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
            /* @__PURE__ */ jsx(Input, { type: "text", name: "name", value: data.name, onChange: handleChange, placeholder: "Name", error: errors.name }),
            errors.name && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx(Input, { type: "email", name: "email", value: data.email, onChange: handleChange, placeholder: "Email", error: errors.email }),
            errors.email && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
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
            errors.phone && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "image", children: "Image" }),
            /* @__PURE__ */ jsx(Input, { type: "file", name: "image", accept: "image/*", onChange: handleChange, error: errors.image }),
            errors.image && /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: errors.image })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "default", disabled: processing, children: processing ? "Updating..." : "Update" }) })
      ] })
    ] }) })
  ] });
}
UserEdit.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  UserEdit as default
};
