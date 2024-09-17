import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { useState } from "react";
import { usePage, useForm, Link, router } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from "./card-43a93659.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-813451e6.js";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { b as buttonVariants, B as Button } from "./button-c70c5ef8.js";
import Select from "react-select";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuLabel, f as DropdownMenuGroup, d as DropdownMenuSeparator, e as DropdownMenuItem } from "./dropdown-menu-4ccafc02.js";
import { IconArrowLeft, IconCirclePlus, IconStar, IconDotsVertical, IconChevronLeft, IconChevronRight } from "@irsyadadl/paranoid";
import { I as Image } from "./image-facc74b1.js";
import { I as Input } from "./input-e2af5f4c.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { A as AlertAction } from "./alert-action-a6d9d096.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription, f as DialogFooter } from "./dialog-d3517b83.js";
import { L as Label } from "./label-3e67e23b.js";
import { I as InputErrorMessage } from "./input-error-message-7f16fe4d.js";
import { S as ScrollArea } from "./scroll-area-9ef3b685.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "react-lazy-load";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./command-d3e20674.js";
import "cmdk";
import "lucide-react";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-c59fdc39.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "recoil";
import "@radix-ui/react-slot";
import "@radix-ui/react-dropdown-menu";
import "framer-motion";
import "./lodash-d8bc076d.js";
import "./alert-dialog-90b5007b.js";
import "@radix-ui/react-alert-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-scroll-area";
function Index({ page_meta, page_data, auth, ...props }) {
  var _a;
  const { data: hotels, meta, links } = props.hotels;
  const { package_id, available_hotels } = usePage().props;
  const { data, setData, post, errors, processing } = useForm({
    hotels: [{ hotel_id: "", night: "" }],
    // Array of objects for multiple hotels
    package_id: ((_a = page_data.hotels) == null ? void 0 : _a.package_id) ?? "",
    _method: page_meta.method
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [params, setParams] = useState(props.state);
  useFilter({
    route: route("admin.packages.hotels.index", package_id),
    values: params,
    only: ["hotels"]
  });
  const hotelOptions = available_hotels.map((hotel) => ({ value: hotel.id, label: hotel.name }));
  const handleAddHotel = () => {
    setData("hotels", [...data.hotels, { hotel_id: "", night: "" }]);
  };
  const handleHotelChange = (index, field, value) => {
    const isHotelSelected = data.hotels.some((hotel, i) => i !== index && hotel.hotel_id === value);
    if (isHotelSelected) {
      setData("hotels", data.hotels.map((hotel, i) => i === index ? { ...hotel, [field]: value } : hotel));
      errors[`hotels.${index}.hotel_id`] = "Hotel is already selected";
    } else {
      const updatedHotels = [...data.hotels];
      updatedHotels[index][field] = value;
      setData("hotels", updatedHotels);
    }
  };
  const handleRemoveHotel = (index) => {
    const updatedHotels = data.hotels.filter((_, i) => i !== index);
    setData("hotels", updatedHotels);
  };
  const handleSubmitAndCloseDialog = () => {
    post(route("admin.packages.hotels.store", package_id));
    setDialogOpen(false);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsxs(Link, { className: buttonVariants({ variant: "outline", size: "sm" }) + " mb-4", href: route("admin.packages.index"), children: [
      /* @__PURE__ */ jsx(IconArrowLeft, { className: "mr-1" }),
      " Back to List"
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "p-0", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: page_meta.title }),
          /* @__PURE__ */ jsx(CardDescription, { children: page_meta.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex max-w-md flex-col gap-2 md:flex-row", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              value: params == null ? void 0 : params.search,
              onChange: (e) => setParams((prev) => ({ ...prev, search: e.target.value })),
              placeholder: "Search..."
            }
          ),
          /* @__PURE__ */ jsxs(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: [
            /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
              /* @__PURE__ */ jsx(IconCirclePlus, { className: "w-4 mr-2" }),
              " Assign Hotel to Package"
            ] }) }),
            /* @__PURE__ */ jsxs(DialogContent, { children: [
              /* @__PURE__ */ jsxs(DialogHeader, { children: [
                /* @__PURE__ */ jsx(DialogTitle, { children: "Select Hotels" }),
                /* @__PURE__ */ jsx(DialogDescription, { children: "Select available hotels to add" })
              ] }),
              /* @__PURE__ */ jsx(ScrollArea, { className: "max-h-[500px]", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4", children: [
                data.hotels.map((hotel, index) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: `hotel-${index}`, className: "text-right", children: "Hotel" }),
                  /* @__PURE__ */ jsxs("div", { className: "col-span-3", children: [
                    /* @__PURE__ */ jsx(
                      Select,
                      {
                        className: "my-react-select-container",
                        classNamePrefix: "my-react-select",
                        id: `hotel-${index}`,
                        options: hotelOptions,
                        value: hotelOptions.find((option) => option.value === hotel.hotel_id),
                        onChange: (option) => handleHotelChange(index, "hotel_id", option.value)
                      }
                    ),
                    /* @__PURE__ */ jsx(InputErrorMessage, { message: errors[`hotels.${index}.hotel_id`] })
                  ] }),
                  /* @__PURE__ */ jsx(Label, { htmlFor: `night-${index}`, className: "text-right", children: "Nights" }),
                  /* @__PURE__ */ jsxs("div", { className: "col-span-3", children: [
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        id: `night-${index}`,
                        value: hotel.night,
                        onChange: (e) => handleHotelChange(index, "night", e.target.value)
                      }
                    ),
                    /* @__PURE__ */ jsx(InputErrorMessage, { message: errors[`hotels.${index}.night`] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-4 flex justify-end", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: () => handleRemoveHotel(index), children: "Remove" }) })
                ] }, index)),
                /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleAddHotel, children: "Add Another Hotel" })
              ] }) }),
              /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsx(Button, { onClick: handleSubmitAndCloseDialog, type: "submit", children: "Save changes" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "#" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Hotels" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Night" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: hotels.map((hotel, index) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: meta.from + index }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-20", children: /* @__PURE__ */ jsx(
              Image,
              {
                skeletonHeight: "40",
                className: "h-full w-full object-cover rounded",
                src: `/images/${hotel.image}`
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: hotel.name }),
              /* @__PURE__ */ jsx("p", { className: "font-normal", children: hotel.location }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, index2) => /* @__PURE__ */ jsx(IconStar, { width: 10, className: index2 < hotel.stars ? "fill-current text-yellow-500" : "text-gray-300" }, index2)) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("p", { children: hotel.night }) }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsx(IconDotsVertical, { className: "size-4" }) }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
              /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
              /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
                !params.onlyTrashed && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
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
                        route("admin.packages.hotels.destroy", [package_id, hotel]),
                        { preserveScroll: true }
                      )
                    }
                  )
                ] }) }),
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
                        route("admin.packages.hotels.restore", [package_id, hotel]),
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
                        route("admin.packages.hotels.force", [package_id, hotel]),
                        { preserveScroll: true }
                      )
                    }
                  ) })
                ] })
              ] })
            ] })
          ] }) }) })
        ] }, hotel.id)) })
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
