import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { b as buttonVariants } from "./button-c70c5ef8.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, d as DropdownMenuSeparator, e as DropdownMenuItem } from "./dropdown-menu-4ccafc02.js";
import { A as AlertAction } from "./alert-action-a6d9d096.js";
import { IconArrowLeft, IconDotsVertical } from "@irsyadadl/paranoid";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-43a93659.js";
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
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "recoil";
import "@radix-ui/react-slot";
import "@radix-ui/react-dropdown-menu";
import "./alert-dialog-90b5007b.js";
import "@radix-ui/react-alert-dialog";
function Index() {
  const { itineraries, package: pkg } = usePage().props;
  const handleDelete = (itineraryId) => {
    router.delete(
      route("admin.packages.itineraries.destroy", {
        package: pkg.id,
        itinerary: itineraryId
      }),
      {
        preserveScroll: true
      }
    );
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Itineraries for ${pkg.name}` }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        className: buttonVariants({ variant: "outline" }) + " mb-2",
        href: route("admin.packages.index"),
        children: [
          /* @__PURE__ */ jsx(IconArrowLeft, { className: "mr-2 size-4" }),
          " Back to Packages"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs(CardTitle, { children: [
          pkg.name,
          " Itineraries"
        ] }),
        /* @__PURE__ */ jsx(CardDescription, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 px-5 mb-5 ", children: /* @__PURE__ */ jsx(
        Link,
        {
          className: buttonVariants({ variant: "default" }),
          href: route("admin.packages.itineraries.create", pkg.id),
          children: "Add Itinerary"
        }
      ) }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "#" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Day" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Description" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: itineraries.map((itinerary, index) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: index + 1 }),
          /* @__PURE__ */ jsx(TableCell, { children: itinerary.day }),
          /* @__PURE__ */ jsx(TableCell, { children: itinerary.description }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "w-4" }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route(
                    "admin.packages.itineraries.items.index",
                    {
                      itinerary: itinerary.id,
                      package: pkg.id
                    }
                  ),
                  children: [
                    itinerary.items_count ?? 0,
                    " Items"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: route("admin.packages.itineraries.edit", {
                    package: pkg.id,
                    itinerary: itinerary.id
                  }),
                  children: "Edit"
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                AlertAction,
                {
                  trigger: /* @__PURE__ */ jsx(
                    DropdownMenuItem,
                    {
                      onSelect: (e) => e.preventDefault(),
                      children: "Delete"
                    }
                  ),
                  title: "Delete Itinerary",
                  description: "Are you sure you want to delete this itinerary?",
                  action: () => handleDelete(itinerary.id)
                }
              ) })
            ] })
          ] }) })
        ] }, itinerary.id)) })
      ] }) })
    ] })
  ] });
}
export {
  Index as default
};
