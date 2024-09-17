import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { C as Container } from "./container-a7123293.js";
import PackageCard from "./package-card-5ff87aae.js";
import { A as AppLayout } from "./app-layout-a22821eb.js";
import { H as Header } from "./header-6466b04b.js";
import { B as Breadcrumb } from "./breadcrumb-7d1c48f0.js";
import { P as Pagination } from "./pagination-1301a0c3.js";
import "./input-e2af5f4c.js";
import "./button-c70c5ef8.js";
import "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./badge-a28027f7.js";
import "class-variance-authority";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "react-floating-whatsapp";
import "./footer-67e2bd2e.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "./sheet-4df565dd.js";
import "@radix-ui/react-dialog";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-d3e20674.js";
import "cmdk";
import "./dialog-d3517b83.js";
import "axios";
import "usehooks-ts";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "./logo-dark-11c95af7.js";
import "./login-nav-427a7598.js";
import "./input-error-5d71eba3.js";
import "./checkbox-da69a68e.js";
import "@radix-ui/react-checkbox";
import "./phone-input-9795e577.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-6a1d9996.js";
import "@radix-ui/react-popover";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "sonner";
import "@radix-ui/react-slot";
import "./login-register-c2778968.js";
import "./breadcrumb-a34574f9.js";
function PackageCategory() {
  const { category, packages } = usePage().props;
  console.log(packages);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: `${category.name} Packages` }),
    /* @__PURE__ */ jsx(Header, { title: `${category.name}`, subtitle: "Paket berdasarkan kategori " + category.name }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          links: [
            { label: "Home", url: "/" },
            { label: category.name, url: route("packages.category", category.slug) }
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-auto py-10 sm:px-6 lg:px-8 lg:py-14", children: /* @__PURE__ */ jsx("div", { className: "grid gap-10 md:grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: packages.data.length > 0 ? packages.data.map((paket) => /* @__PURE__ */ jsx(PackageCard, { paket }, paket.id)) : /* @__PURE__ */ jsx("p", { children: "No Packages found." }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Pagination, { links: packages.links }) })
      ] }) }) })
    ] })
  ] });
}
PackageCategory.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  PackageCategory as default
};
