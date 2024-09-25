import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { Head, Link } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { b as buttonVariants } from "./button-ef56bd5e.js";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-f706282b.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-4b5e7891.js";
import { f as formatDate } from "./utils-fa5dc5b8.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-fef2e637.js";
import { IconDotsVertical } from "@irsyadadl/paranoid";
import { A as AlertAction } from "./alert-action-7de1ea7b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-70150b74.js";
import "sweetalert2";
import "clsx";
import "./image-50b4b38d.js";
import "framer-motion";
import "react-lazy-load";
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
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "recoil";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "./alert-dialog-7a34daaa.js";
import "@radix-ui/react-alert-dialog";
function ResearchIndex({ researches }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Research Index" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Research List" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Here you can manage all research related to SDGs." }),
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(Link, { className: buttonVariants("primary"), href: route("admin.research.create"), children: "Add New Research" }) })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "Title" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Author" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Year" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Created" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: researches.data.map((research) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: research.title }),
          /* @__PURE__ */ jsx(TableCell, { children: research.author }),
          /* @__PURE__ */ jsx(TableCell, { children: research.year }),
          /* @__PURE__ */ jsx(TableCell, { children: formatDate(research.created_at) }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.research.edit", [research]), children: "Edit" }) }),
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
                      route("admin.research.destroy", [research]),
                      { preserveScroll: true }
                    )
                  }
                )
              ] })
            ] })
          ] }) }) })
        ] }, research.id)) })
      ] }) }),
      /* @__PURE__ */ jsx(CardFooter, { className: "justify-between border-t pt-6 text-sm text-muted-foreground" })
    ] }) })
  ] });
}
ResearchIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  ResearchIndex as default
};
