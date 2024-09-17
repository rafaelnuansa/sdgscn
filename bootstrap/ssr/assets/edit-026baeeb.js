import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { usePage, useForm, Head, Link } from "@inertiajs/react";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { b as buttonVariants, B as Button } from "./button-c70c5ef8.js";
import { I as Input } from "./input-e2af5f4c.js";
import { T as Textarea } from "./textarea-5aed477a.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-43a93659.js";
import { L as Label } from "./label-3e67e23b.js";
import { IconArrowLeft } from "@irsyadadl/paranoid";
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
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
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
import "class-variance-authority";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "recoil";
import "@radix-ui/react-slot";
import "@radix-ui/react-label";
function Edit() {
  const { package: pkg, itinerary } = usePage().props;
  const { data, setData, put, processing, errors } = useForm({
    day: itinerary.day || "",
    description: itinerary.description || ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(
      route("admin.packages.itineraries.update", {
        package: pkg.id,
        itinerary: itinerary.id
      })
    );
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Edit Itinerary for ${pkg.name}` }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        className: buttonVariants({ variant: "outline" }) + " mb-2",
        href: route("admin.packages.itineraries.index", pkg.id),
        children: [
          /* @__PURE__ */ jsx(IconArrowLeft, { className: "mr-2 size-4" }),
          " Back"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Edit Itinerary" }),
        /* @__PURE__ */ jsxs(CardDescription, { children: [
          "Edit itinerary for ",
          pkg.name
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "day", children: "Day" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "day",
              name: "day",
              value: data.day,
              onChange: (e) => setData("day", e.target.value),
              className: errors.day ? "border-red-500" : ""
            }
          ),
          errors.day && /* @__PURE__ */ jsx("div", { className: "mt-1 text-red-500", children: errors.day })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "description",
              name: "description",
              value: data.description,
              onChange: (e) => setData("description", e.target.value),
              className: errors.description ? "border-red-500" : ""
            }
          ),
          errors.description && /* @__PURE__ */ jsx("div", { className: "mt-1 text-red-500", children: errors.description })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, className: "w-full", children: "Update" })
      ] }) })
    ] })
  ] });
}
export {
  Edit as default
};
