import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, useForm, Head } from "@inertiajs/react";
import { A as AdminLayout } from "./admin-layout-58324348.js";
import { B as Button } from "./button-ef56bd5e.js";
import { I as Input } from "./input-05b98463.js";
import { L as Label } from "./label-22b65785.js";
import { P as PhoneInput } from "./phone-input-bee968be.js";
import { I as InputErrorMessage } from "./input-error-message-a80fba17.js";
import { F as FileUpload } from "./file-upload-4b5275f8.js";
import { T as Textarea } from "./textarea-85cbc568.js";
import { I as Image } from "./image-50b4b38d.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-f706282b.js";
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
import "@irsyadadl/paranoid";
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
import "recoil";
import "@radix-ui/react-slot";
import "@radix-ui/react-label";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "framer-motion";
function SettingIndex() {
  const { setting } = usePage().props;
  const { data, setData, post, errors, processing } = useForm({
    image: null,
    image_dark: null,
    favicon: null,
    website_name: setting.website_name ?? "",
    website_description: setting.website_description ?? "",
    website_address: setting.website_address ?? "",
    website_phone: setting.website_phone ?? "",
    website_phone_whatsapp: setting.website_phone_whatsapp ?? "+62",
    website_facebook_url: setting.website_facebook_url ?? "",
    website_instagram_url: setting.website_instagram_url ?? "",
    website_linkedin_url: setting.website_linkedin_url ?? "",
    website_youtube_url: setting.website_youtube_url ?? "",
    website_email: setting.website_email ?? "",
    mapbox_api_key: setting.mapbox_api_key ?? "",
    _method: "PUT"
  });
  function onChange(e) {
    setData(e.target.name, e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("admin.settings.update"), {
      ...data,
      image: data.image ? data.image : void 0,
      image_dark: data.image_dark ? data.image_dark : void 0,
      favicon: data.favicon ? data.favicon : void 0
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Settings" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "General" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Setup your website" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "gap-2 space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_name", children: "Website Name" }),
            /* @__PURE__ */ jsx(Input, { id: "website_name", name: "website_name", type: "text", value: data.website_name, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_description", children: "Website Description" }),
            /* @__PURE__ */ jsx(Textarea, { id: "website_description", name: "website_description", value: data.website_description, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_description })
          ] }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "image", children: "Website Logo" }),
            /* @__PURE__ */ jsx(FileUpload, { id: "image", name: "image", onChange: (file) => setData("image", file) }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.image }),
            /* @__PURE__ */ jsx(Label, { htmlFor: "imageNow", children: "Current Logo" }),
            /* @__PURE__ */ jsx(Image, { src: `/storage/images/${setting == null ? void 0 : setting.website_logo}`, className: "w-[100px] rounded" })
          ] }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "image_dark", children: "Website Logo Dark" }),
            /* @__PURE__ */ jsx(FileUpload, { id: "image_dark", name: "image_dark", onChange: (file) => setData("image_dark", file) }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.image_dark }),
            /* @__PURE__ */ jsx(Label, { htmlFor: "imageNow", children: "Current Logo" }),
            /* @__PURE__ */ jsx(Image, { src: `/storage/images/${setting == null ? void 0 : setting.website_logo_dark}`, className: "w-[100px] rounded" })
          ] }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "favicon", children: "Favicon" }),
            /* @__PURE__ */ jsx(FileUpload, { id: "favicon", name: "favicon", onChange: (file) => setData("favicon", file) }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.favicon }),
            /* @__PURE__ */ jsx(Label, { htmlFor: "imageNow", children: "Current Favicon" }),
            /* @__PURE__ */ jsx(Image, { src: `/storage/images/${setting == null ? void 0 : setting.favicon}`, className: "w-[100px] rounded" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_address", children: "Website Address" }),
            /* @__PURE__ */ jsx(Textarea, { id: "website_address", name: "website_address", value: data.website_address, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_address })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_phone", children: "Website Phone" }),
            /* @__PURE__ */ jsx(Input, { id: "website_phone", name: "website_phone", type: "text", value: data.website_phone, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_phone_whatsapp", children: "Website Phone (WhatsApp)" }),
            /* @__PURE__ */ jsx(PhoneInput, { id: "website_phone_whatsapp", name: "website_phone_whatsapp", defaultCountry: "ID", value: data.website_phone_whatsapp, onChange: (value) => setData("website_phone_whatsapp", value) }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_phone_whatsapp })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_facebook_url", children: "Facebook URL" }),
            /* @__PURE__ */ jsx(Input, { id: "website_facebook_url", name: "website_facebook_url", type: "text", value: data.website_facebook_url, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_facebook_url })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_instagram_url", children: "Instagram URL" }),
            /* @__PURE__ */ jsx(Input, { id: "website_instagram_url", name: "website_instagram_url", type: "text", value: data.website_instagram_url, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_instagram_url })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_linkedin_url", children: "LinkedIn URL" }),
            /* @__PURE__ */ jsx(Input, { id: "website_linkedin_url", name: "website_linkedin_url", type: "text", value: data.website_linkedin_url, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_linkedin_url })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_youtube_url", children: "YouTube URL" }),
            /* @__PURE__ */ jsx(Input, { id: "website_youtube_url", name: "website_youtube_url", type: "text", value: data.website_youtube_url, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_youtube_url })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "website_email", children: "Website Email" }),
            /* @__PURE__ */ jsx(Input, { id: "website_email", name: "website_email", type: "text", value: data.website_email, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.website_email })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "mapbox_api_key", children: "Mapbox API Key" }),
            /* @__PURE__ */ jsx(Input, { id: "mapbox_api_key", name: "mapbox_api_key", type: "text", value: data.mapbox_api_key, onChange }),
            /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.mapbox_api_key })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: "Save Changes" }) })
      ] }) })
    ] })
  ] });
}
SettingIndex.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: "Setting", children: page });
export {
  SettingIndex as default
};
