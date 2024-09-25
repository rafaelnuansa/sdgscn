import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-f706282b.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-4b5e7891.js";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import "clsx";
import { B as Button } from "./button-ef56bd5e.js";
import { T as Toggle } from "./toggle-9cf6b94a.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-fef2e637.js";
import { IconCirclePlusFill, IconTrash, IconDotsVertical, IconChevronLeft, IconChevronRight } from "@irsyadadl/paranoid";
import "react-lazy-load";
import "./badge-68f4f9eb.js";
import { I as Input } from "./input-05b98463.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { A as AlertAction } from "./alert-action-7de1ea7b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-fa5dc5b8.js";
import "tailwind-merge";
import "./logo-70150b74.js";
import "sweetalert2";
import "./image-50b4b38d.js";
import "framer-motion";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
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
import "class-variance-authority";
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "recoil";
import "@radix-ui/react-slot";
import "@radix-ui/react-toggle";
import "@radix-ui/react-dropdown-menu";
import "./lodash-d8bc076d.js";
import "./alert-dialog-7a34daaa.js";
import "@radix-ui/react-alert-dialog";
function PageIndex({ auth, ...props }) {
  const { data: pages, meta, links } = props.pages;
  const toggleOnlyTrashed = () => {
    setParams((prev) => ({ ...prev, onlyTrashed: !prev.onlyTrashed }));
  };
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("admin.pages.index"),
    values: params,
    only: ["pages"]
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Pages" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx(CardTitle, { children: params.onlyTrashed ? "Deleted Pages" : "Pages" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex max-w-md flex-col gap-2 md:flex-row", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              value: params == null ? void 0 : params.search,
              onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })),
              placeholder: "Search..."
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-2 md:flex", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.pages.create"), children: [
              /* @__PURE__ */ jsx(IconCirclePlusFill, { className: "mr-2 size-4" }),
              "New"
            ] }) }),
            /* @__PURE__ */ jsxs(Toggle, { onClick: toggleOnlyTrashed, children: [
              /* @__PURE__ */ jsx(IconTrash, { className: "mr-2 h-4 w-4" }),
              params.onlyTrashed ? "Back" : "Trash"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "#" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Page" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Created At" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: pages.map((page, index) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: meta.from + index }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: page.title }),
            /* @__PURE__ */ jsx("p", { children: page.slug })
          ] }) }) }),
          /* @__PURE__ */ jsx(TableCell, { children: page.created_at }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              !params.onlyTrashed && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx("a", { target: "_blank", href: route("pages.show", [page.slug]), children: "Show" }) }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.pages.edit", [page]), children: "Edit" }) }),
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
                      title: "Delete Page",
                      description: "Are you sure you want to delete this Page?",
                      action: () => router.delete(
                        route("admin.pages.destroy", [page]),
                        { preserveScroll: true }
                      )
                    }
                  )
                ] })
              ] }),
              params.onlyTrashed && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                  AlertAction,
                  {
                    trigger: /* @__PURE__ */ jsx(
                      DropdownMenuItem,
                      {
                        onSelect: (e) => e.preventDefault(),
                        children: "Restore"
                      }
                    ),
                    title: "Restore " + page.title,
                    description: "Are you sure you want to restore this Page?",
                    action: () => router.put(
                      route("admin.pages.restore", [page]),
                      { preserveScroll: true }
                    )
                  }
                ) }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                  AlertAction,
                  {
                    trigger: /* @__PURE__ */ jsx(
                      DropdownMenuItem,
                      {
                        onSelect: (e) => e.preventDefault(),
                        children: "Force Delete"
                      }
                    ),
                    title: "Force Delete",
                    description: "Are you sure to delete permanently this page?",
                    action: () => router.delete(
                      route("admin.pages.force", [page]),
                      { preserveScroll: true }
                    )
                  }
                ) })
              ] })
            ] })
          ] }) }) })
        ] }, page.id)) })
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
PageIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: "Setting", children: page });
export {
  PageIndex as default
};
