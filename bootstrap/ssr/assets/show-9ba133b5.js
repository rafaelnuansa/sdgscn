import { j as jsxs, a as jsx } from "../ssr.js";
import { useState } from "react";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { I as Image } from "./image-50b4b38d.js";
import { usePage, useForm, Link, router } from "@inertiajs/react";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-0590da32.js";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription } from "./card-f706282b.js";
import { b as buttonVariants, B as Button } from "./button-ef56bd5e.js";
import { IconArrowLeft } from "@irsyadadl/paranoid";
import { I as Input } from "./input-05b98463.js";
import { A as AlertAction } from "./alert-action-7de1ea7b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-70150b74.js";
import "sweetalert2";
import "clsx";
import "./utils-fa5dc5b8.js";
import "tailwind-merge";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "react-lazy-load";
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
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "recoil";
import "framer-motion";
import "@radix-ui/react-popover";
import "@radix-ui/react-slot";
import "./alert-dialog-7a34daaa.js";
import "@radix-ui/react-alert-dialog";
function PackageGalleries() {
  const { galleries, album, processing, errors } = usePage().props;
  const { setData, post, processing: formProcessing, errors: formErrors } = useForm();
  const [numSelectedFiles, setNumSelectedFiles] = useState(0);
  const handleFileChange = (e) => {
    const files = e.target.files;
    setData("images", files);
    setNumSelectedFiles(files.length);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < numSelectedFiles; i++) {
      formData.append("images[]", e.target.images[i]);
    }
    post(route("admin.albums.gallery.store", { album }), formData, {
      onError: (errors2) => {
        console.error(errors2);
      }
    });
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsxs(Link, { className: buttonVariants({ variant: "outline", size: "sm" }) + " mb-4", href: route("admin.albums.index"), children: [
      /* @__PURE__ */ jsx(IconArrowLeft, { className: "mr-1" }),
      " Back to List"
    ] }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "p-0", children: [
          /* @__PURE__ */ jsxs(CardTitle, { children: [
            album.name,
            " Images"
          ] }),
          /* @__PURE__ */ jsxs(CardDescription, { children: [
            "Images Gallery Hotes `",
            album.name,
            "`"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex max-w-md flex-col gap-2 md:flex-row" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-10 border-b border-t", children: /* @__PURE__ */ jsx("form", { onSubmit, children: /* @__PURE__ */ jsxs("div", { className: "form-group flex justify-between", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            className: "max-w-sm",
            type: "file",
            id: "fileInput",
            name: "images",
            multiple: true,
            onChange: handleFileChange
          }
        ),
        /* @__PURE__ */ jsx(Button, { type: "submit", variant: "default", disabled: processing || formProcessing, children: processing || formProcessing ? "Processing..." : "Submit" }),
        (errors == null ? void 0 : errors.images) && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: errors == null ? void 0 : errors.images }),
        (formErrors == null ? void 0 : formErrors.images) && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: formErrors == null ? void 0 : formErrors.images })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 p-5", children: galleries.map((image) => /* @__PURE__ */ jsxs(Popover, { children: [
        /* @__PURE__ */ jsx(PopoverTrigger, { className: "cursor-pointer", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: `/storage/albums/${image.image}`,
            alt: image.image,
            className: "w-full border h-auto rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-200",
            objectFit: "cover"
          }
        ) }),
        /* @__PURE__ */ jsxs(PopoverContent, { children: [
          /* @__PURE__ */ jsx(
            Image,
            {
              src: `/storage/albums/${image.image}`,
              alt: image.image,
              className: "w-full h-auto rounded-md mb-4",
              objectFit: "cover"
            }
          ),
          /* @__PURE__ */ jsx(
            AlertAction,
            {
              trigger: /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "destructive",
                  className: "w-full",
                  onSelect: (e) => e.preventDefault(),
                  children: "Delete"
                }
              ),
              title: "Delete Package Image",
              description: "Are you sure you want to permanent delete this Image?",
              action: () => router.delete(
                route("admin.albums.gallery.destroy", { gallery: image.id }),
                { preserveScroll: true }
              )
            }
          )
        ] })
      ] }, image.id)) })
    ] }) })
  ] });
}
export {
  PackageGalleries as default
};
