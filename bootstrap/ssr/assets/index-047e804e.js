import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { H as Header, B as Breadcrumb } from "./header-3b193594.js";
import { A as AppLayout } from "./app-layout-ec137134.js";
import { C as Container } from "./container-a7123293.js";
import { P as Pagination } from "./pagination-eab0ce12.js";
import SdgCard from "./sdg-card-5eb5c8d3.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "lucide-react";
import "./breadcrumb-b90f2dbf.js";
import "@radix-ui/react-slot";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./logo-360047b4.js";
import "sweetalert2";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "react-floating-whatsapp";
import "./footer-5dc05f52.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "./button-e2a7e3d3.js";
import "class-variance-authority";
import "./sheet-6d41fe2c.js";
import "@radix-ui/react-dialog";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-1156986d.js";
import "cmdk";
import "./dialog-20065758.js";
import "axios";
import "usehooks-ts";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./label-4839c48b.js";
import "@radix-ui/react-label";
import "./input-6fbce247.js";
import "./checkbox-b75be4ac.js";
import "@radix-ui/react-checkbox";
import "./phone-input-d483b92f.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-7b9a4e5c.js";
import "@radix-ui/react-popover";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "sonner";
import "./badge-520453d1.js";
import "moment";
function SdgIndex() {
  const { auth, sdgs } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Sdgs" }),
    /* @__PURE__ */ jsx(Header, { title: "Sdgs", subtitle: "Our Sdgs" }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          links: [
            { label: "Home", url: "/" },
            { label: "Sdgs", url: "/sdgs" }
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-auto  lg:py-14", children: /* @__PURE__ */ jsx("div", { className: "grid gap-10 md:grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: sdgs.data.length > 0 ? sdgs.data.map((sdg) => /* @__PURE__ */ jsx(SdgCard, { sdg }, sdg.id)) : /* @__PURE__ */ jsx("p", { children: "No Sdgs found." }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Pagination, { links: sdgs.links }) })
      ] }) }) })
    ] })
  ] });
}
SdgIndex.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  SdgIndex as default
};
