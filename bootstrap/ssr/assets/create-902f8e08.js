import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { B as Button, b as buttonVariants } from "./button-e2a7e3d3.js";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { I as Input } from "./input-6fbce247.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-d70f34a0.js";
import { L as Label } from "./label-4839c48b.js";
import { I as InputErrorMessage } from "./input-error-message-7afde931.js";
import { M as MultiSelect } from "./multi-select-fcefae29.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
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
import "@radix-ui/react-label";
import "@radix-ui/react-separator";
import "./badge-520453d1.js";
import "./popover-7b9a4e5c.js";
import "@radix-ui/react-popover";
function PublicationCreate({ sdgs, experts = [] }) {
  const { data, setData, post, errors, processing } = useForm({
    sdg_id: "",
    title: "",
    year: "",
    link: "",
    selected_experts: []
    // Array to store selected experts
  });
  const onChange = (e) => {
    setData(e.target.name, e.target.value);
  };
  const handleExpertsChange = (selectedExperts) => {
    setData("selected_experts", selectedExperts);
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
          /* @__PURE__ */ jsx(Label, { htmlFor: "link", children: "Link" }),
          /* @__PURE__ */ jsx(Input, { id: "link", type: "url", name: "link", value: data.link, onChange }),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.link })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "experts", children: "Experts" }),
          /* @__PURE__ */ jsx(
            MultiSelect,
            {
              id: "experts",
              name: "selected_experts",
              options: experts.map((expert) => ({ label: expert.name, value: expert.id })),
              selectedValues: data.selected_experts,
              onValueChange: handleExpertsChange
            }
          ),
          /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.selected_experts })
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
