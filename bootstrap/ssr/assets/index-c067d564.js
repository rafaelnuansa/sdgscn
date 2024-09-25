import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import { b as buttonVariants } from "./button-e2a7e3d3.js";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-d70f34a0.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-47544d29.js";
import { f as formatDate } from "./utils-186374bb.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-c2181ec7.js";
import { IconDotsVertical } from "@irsyadadl/paranoid";
import { A as AlertAction } from "./alert-action-4ffceca7.js";
import { P as Pagination } from "./pagination-eab0ce12.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-360047b4.js";
import "sweetalert2";
import "clsx";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
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
import "./label-4839c48b.js";
import "@radix-ui/react-label";
import "recoil";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-alert-dialog";
function PublicationIndex({ publications, sdgs, filters }) {
  const [search, setSearch] = useState(filters.search || "");
  const [sdg, setSdg] = useState(filters.sdg || "");
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    router.get("/admin/publications", { search, sdg });
  };
  const handleReset = () => {
    setSearch("");
    setSdg("");
    router.get("/admin/publications", { search: "", sdg: "" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Publications" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Publication List" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Here you can manage all publication related to SDGs." }),
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(Link, { className: buttonVariants("primary"), href: route("admin.publications.create"), children: "Add New Publication" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("form", { onSubmit: handleFilterSubmit, className: "mt-5 space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search publication or author name...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "p-2 border border-gray-300 rounded-md w-full md:w-1/3"
            }
          ),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: sdg,
              onChange: (e) => setSdg(e.target.value),
              className: "p-2 border border-gray-300 rounded-md w-full md:w-1/3",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "All SDGs" }),
                sdgs.map((sdgItem) => /* @__PURE__ */ jsx("option", { value: sdgItem.id, children: sdgItem.name }, sdgItem.id))
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "submit", className: buttonVariants("primary"), children: "Apply Filters" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: handleReset,
                className: buttonVariants("secondary"),
                children: "Reset"
              }
            )
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0  [&_thead]:border-t", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { className: "max-w-[500px]", children: "Title" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Created" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: publications.data.map((publication) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxs(TableCell, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx("b", { className: "line-clamp-2", children: publication.title }),
            publication.experts && publication.experts.length > 0 ? publication.experts.map((expert) => expert.name).join(", ") : "",
            publication.year && (publication.experts && publication.experts.length > 0 ? ` • ${publication.year}` : publication.year)
          ] }),
          /* @__PURE__ */ jsx(TableCell, { children: formatDate(publication.created_at) }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.publications.edit", [publication]), children: "Edit" }) }),
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
                      route("admin.publications.destroy", [publication]),
                      { preserveScroll: true }
                    )
                  }
                )
              ] })
            ] })
          ] }) }) })
        ] }, publication.id)) })
      ] }) }),
      /* @__PURE__ */ jsx(CardFooter, { className: "border-t text-sm text-muted-foreground", children: /* @__PURE__ */ jsx(Pagination, { links: publications.links }) })
    ] }) })
  ] });
}
PublicationIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { children: page });
export {
  PublicationIndex as default
};
