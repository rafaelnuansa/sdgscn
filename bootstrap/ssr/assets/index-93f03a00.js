import { j as jsxs, a as jsx } from "../ssr.js";
import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import "clsx";
import { B as Button } from "./button-c70c5ef8.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-4ccafc02.js";
import { IconCirclePlusFill, IconDotsVertical, IconChevronLeft, IconChevronRight } from "@irsyadadl/paranoid";
import { I as Input } from "./input-e2af5f4c.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { A as AlertAction } from "./alert-action-a6d9d096.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-38e41470.js";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
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
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "recoil";
import "@radix-ui/react-slot";
import "@radix-ui/react-dropdown-menu";
import "./lodash-d8bc076d.js";
import "./alert-dialog-90b5007b.js";
import "@radix-ui/react-alert-dialog";
function CategoryIndex({ auth, ...props }) {
  const { data: categories, meta, links } = props.categories;
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("admin.categories.index"),
    values: params,
    only: ["categories"]
  });
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Categories" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx(CardTitle, { children: "Categories" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex max-w-md flex-col gap-2 md:flex-row", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              value: params == null ? void 0 : params.search,
              onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })),
              placeholder: "Search..."
            }
          ),
          /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.categories.create"), children: [
            /* @__PURE__ */ jsx(IconCirclePlusFill, { className: "mr-2 size-4" }),
            "New"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "#" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Categories" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Slug" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Packages" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: categories.map((category, index) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: meta.from + index }),
          /* @__PURE__ */ jsx(TableCell, { children: category.name }),
          /* @__PURE__ */ jsx(TableCell, { children: category.slug }),
          /* @__PURE__ */ jsx(TableCell, { children: category.packages_count }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.categories.edit", [category]), children: "Edit" }) }),
              auth.user.is_admin && /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
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
                    title: "Delete Category",
                    description: "Are you sure you want to delete this category?",
                    action: () => router.delete(
                      route("admin.categories.destroy", [category]),
                      { preserveScroll: true }
                    )
                  }
                )
              ] })
            ] })
          ] }) }) })
        ] }, category.id)) })
      ] }) }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "justify-between border-t pt-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Showing ",
          meta.from,
          " of ",
          meta.total
        ] }),
        meta.has_pages && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: links.prev ? /* @__PURE__ */ jsxs(Link, { href: links.prev, children: [
            /* @__PURE__ */ jsx(IconChevronLeft, { className: "-ml-1 mr-1 size-4" }),
            "Prev"
          ] }) : /* @__PURE__ */ jsx("span", { children: "Prev" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: links.next ? /* @__PURE__ */ jsxs(Link, { href: links.next, children: [
            "Next",
            /* @__PURE__ */ jsx(IconChevronRight, { className: "-mr-1 ml-1 size-4" })
          ] }) : /* @__PURE__ */ jsx("span", { children: "Next" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  CategoryIndex as default
};
