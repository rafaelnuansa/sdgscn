import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-47544d29.js";
import { Link } from "@inertiajs/react";
import { B as Button } from "./button-e2a7e3d3.js";
import { I as Image } from "./image-0458d8cd.js";
import { f as formatDate } from "./utils-186374bb.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-c2181ec7.js";
import { IconDotsVertical } from "@irsyadadl/paranoid";
import { A as AlertAction } from "./alert-action-4ffceca7.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "framer-motion";
import "react-lazy-load";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "@radix-ui/react-alert-dialog";
function SliderTable({ sliders }) {
  return /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { children: "Image" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Title" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Created" }),
      /* @__PURE__ */ jsx(TableHead, {})
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { children: sliders.map((slider) => /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Image, { src: `/storage/sliders/${slider.image}`, alt: slider.name, className: "w-40 rounded-lg object-cover" }) }),
      /* @__PURE__ */ jsx(TableCell, { children: slider.title }),
      /* @__PURE__ */ jsx(TableCell, { children: formatDate(slider.created_at) }),
      /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
          "  ",
          /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.sliders.edit", [slider]), children: "Edit" }) }),
          /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(
              AlertAction,
              {
                trigger: /* @__PURE__ */ jsx(
                  DropdownMenuItem,
                  {
                    onSelect: (e) => e.preventDefault(),
                    children: "Delete"
                  }
                ),
                title: "Delete",
                description: "Are you sure you want to delete this?",
                action: () => router.delete(
                  route("admin.sliders.destroy", [slider]),
                  { preserveScroll: true }
                )
              }
            )
          ] })
        ] })
      ] }) }) })
    ] }, slider.id)) })
  ] });
}
export {
  SliderTable as default
};
