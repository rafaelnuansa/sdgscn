import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { useState } from "react";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { c as formatRupiah, b as formatDateTime } from "./utils-38e41470.js";
import { B as Button } from "./button-c70c5ef8.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-ae2d1520.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem, f as DropdownMenuGroup } from "./dropdown-menu-4ccafc02.js";
import { IconCirclePlusFill, IconTrash, IconMoneybag, IconSunrise, IconStar, IconDotsVertical, IconChevronLeft, IconChevronRight } from "@irsyadadl/paranoid";
import { I as Image } from "./image-facc74b1.js";
import { I as Input } from "./input-e2af5f4c.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { A as AlertAction } from "./alert-action-a6d9d096.js";
import { T as Toggle } from "./toggle-5148b495.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "clsx";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "react-lazy-load";
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
import "tailwind-merge";
import "@radix-ui/react-slot";
import "@radix-ui/react-select";
import "@radix-ui/react-dropdown-menu";
import "framer-motion";
import "./lodash-d8bc076d.js";
import "./alert-dialog-90b5007b.js";
import "@radix-ui/react-alert-dialog";
import "@radix-ui/react-toggle";
function Index({ auth, ...props }) {
  const { data: packages, meta, links } = props.packages;
  const { categories } = usePage().props;
  const toggleOnlyTrashed = () => {
    setParams((prev) => ({ ...prev, onlyTrashed: !prev.onlyTrashed }));
  };
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("admin.packages.index"),
    values: params,
    only: ["packages"]
  });
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Packages" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx(CardTitle, { children: params.onlyTrashed ? "Deleted Packages" : "Packages" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              value: params == null ? void 0 : params.search,
              onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })),
              placeholder: "Search..."
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxs(Select, { value: params == null ? void 0 : params.category, onValueChange: (e) => setParams({ ...params, category: e }), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "md:w-40", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: (params == null ? void 0 : params.category) ?? "" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { children: "All Categories" }),
                categories.map((category) => /* @__PURE__ */ jsx(SelectItem, { value: category.slug, children: category.name }, category.id))
              ] })
            ] }),
            /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("admin.packages.create"), children: [
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
          /* @__PURE__ */ jsx(TableHead, { children: "Package" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Category" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Created At" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: packages.map((pkg, index) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: meta.from + index }),
          /* @__PURE__ */ jsx(TableCell, { className: "min-w-32", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-32", children: /* @__PURE__ */ jsx(
              Image,
              {
                skeletonHeight: "40",
                className: "h-full w-full object-cover rounded",
                src: `/images/${pkg.image}`
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: pkg.name }),
              /* @__PURE__ */ jsxs("span", { className: "flex gap-1 text-xs items-center", children: [
                /* @__PURE__ */ jsx(IconMoneybag, { className: "w-3" }),
                " ",
                formatRupiah(pkg.price)
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex gap-1 text-xs space-y-0 items-center", children: [
                /* @__PURE__ */ jsx(IconSunrise, { className: "w-3" }),
                pkg.day,
                " Days"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, index2) => /* @__PURE__ */ jsx(IconStar, { width: 10, className: index2 < pkg.rate ? "fill-current text-yellow-500" : "text-gray-300" }, index2)) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(TableCell, { children: pkg.category.name }),
          /* @__PURE__ */ jsx(TableCell, { children: formatDateTime(pkg.created_at) }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
              "  ",
              /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" })
            ] }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              !params.onlyTrashed && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(Link, { href: route("admin.packages.hotels.index", [pkg]), children: [
                  pkg.hotels_count ?? 0,
                  "  Hotels"
                ] }) }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsxs(Link, { href: route("admin.packages.itineraries.index", pkg.id), children: [
                  pkg.itineraries_count ?? 0,
                  " Itineraries"
                ] }) }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.packages.galleries.index", [pkg]), children: "Galleries" }) }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.packages.videos.index", [pkg]), children: "Videos" }) }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true }),
                /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("admin.packages.edit", [pkg]), children: "Edit" }) }),
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
                      title: "Delete Package",
                      description: "Are you sure you want to delete this Package?",
                      action: () => router.delete(
                        route("admin.packages.destroy", [pkg]),
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
                    title: "Restore " + pkg.name,
                    description: "Are you sure you want to restore this Package?",
                    action: () => router.put(
                      route("admin.packages.restore", [pkg]),
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
                    description: "Force delete this package? This action will permanently delete the package and all associated data, including bookings, payments, and others. This cannot be undone.",
                    action: () => router.delete(
                      route("admin.packages.force", [pkg]),
                      { preserveScroll: true }
                    )
                  }
                ) })
              ] })
            ] })
          ] }) }) })
        ] }, pkg.id)) })
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
  Index as default
};
