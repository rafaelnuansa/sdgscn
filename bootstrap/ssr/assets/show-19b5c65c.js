import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { B as Breadcrumb } from "./breadcrumb-7d1c48f0.js";
import { A as AppLayout } from "./app-layout-a22821eb.js";
import { C as Container } from "./container-a7123293.js";
import { H as Header } from "./header-6466b04b.js";
import { I as Image } from "./image-facc74b1.js";
import moment from "moment";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "lucide-react";
import "./breadcrumb-a34574f9.js";
import "@radix-ui/react-slot";
import "./utils-38e41470.js";
import "clsx";
import "tailwind-merge";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "react-floating-whatsapp";
import "./footer-67e2bd2e.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "./button-c70c5ef8.js";
import "class-variance-authority";
import "./sheet-4df565dd.js";
import "@radix-ui/react-dialog";
import "@irsyadadl/paranoid";
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
import "./input-e2af5f4c.js";
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
import "./login-register-c2778968.js";
import "framer-motion";
import "react-lazy-load";
function ArticleShow() {
  const { article } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: article.title }),
    /* @__PURE__ */ jsx(
      Header,
      {
        title: article.title,
        subtitle: `Published on ${moment(article.created_at).format("DD MMMM YYYY")}`
      }
    ),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          links: [
            { label: "Home", url: "/" },
            { label: "Articles", url: "/articles" },
            { label: article.title, url: `/articles/${article.slug}` }
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-auto lg:py-14", children: /* @__PURE__ */ jsx("div", { className: "md:col-span-12", children: /* @__PURE__ */ jsxs("div", { className: "prose max-w-none", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: article.title }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
          Image,
          {
            skeletonHeight: "40",
            className: "w-full rounded border object-cover",
            src: `/storage/articles/${article.image}`
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: article.content }
          }
        ) })
      ] }) }) })
    ] })
  ] });
}
ArticleShow.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  ArticleShow as default
};
