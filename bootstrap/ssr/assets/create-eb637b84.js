import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button, b as buttonVariants } from "./button-ef56bd5e.js";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { I as Input } from "./input-05b98463.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-f706282b.js";
import { L as Label } from "./label-22b65785.js";
import { I as InputErrorMessage } from "./input-error-message-a80fba17.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-fa5dc5b8.js";
import "clsx";
import "tailwind-merge";
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
function PublicationCreate({ sdgs }) {
  const { data, setData, post, errors, processing } = useForm({
    sdg_id: "",
    title: "",
    year: "",
    author: "",
    link: ""
  });
  const onChange = (e) => {
    setData(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("admin.publications.store"), data);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Publication" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Create Publication" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Create a new publication entry" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "sdg_id", children: "SDG" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "sdg_id",
              name: "sdg_id",
              value: data.sdg_id,
              onChange,
              className: "w-full p-2 border rounded",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Select SDG" }),
                sdgs.map((sdg) => /* @__PURE__ */ jsx("option", { value: sdg.id, children: sdg.name }, sdg.id))
              ]
            }
          ),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.sdg_id })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title" }),
          /* @__PURE__ */ jsx(Input, { id: "title", type: "text", name: "title", value: data.title, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "year", children: "Year" }),
          /* @__PURE__ */ jsx(Input, { id: "year", type: "text", name: "year", value: data.year, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.year })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "author", children: "Author" }),
          /* @__PURE__ */ jsx(Input, { id: "author", type: "text", name: "author", value: data.author, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.author })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "link", children: "Link" }),
          /* @__PURE__ */ jsx(Input, { id: "link", type: "url", name: "link", value: data.link, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.link })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx(Button, { type: "submit", variant: "default", disabled: processing, children: "Create" }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("admin.publications.index"),
              className: buttonVariants({ variant: "default" }) + " ml-2",
              children: "Cancel"
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
}
PublicationCreate.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  PublicationCreate as default
};
