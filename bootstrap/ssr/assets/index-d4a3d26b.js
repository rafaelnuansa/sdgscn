import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { Users, Package2, Activity } from "lucide-react";
import { Head } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent } from "./card-d70f34a0.js";
import { A as AdminLayout } from "./admin-layout-474c2f83.js";
import { DocumentIcon } from "@heroicons/react/20/solid";
import { IconGallery, IconPerson } from "@irsyadadl/paranoid";
import Chart from "react-apexcharts";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./logo-360047b4.js";
import "sweetalert2";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "./scroll-area-4a6b9ba2.js";
import "@radix-ui/react-scroll-area";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./button-e2a7e3d3.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./command-1156986d.js";
import "cmdk";
import "./dialog-20065758.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "sonner";
import "./sheet-7a963302.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "./label-4839c48b.js";
import "@radix-ui/react-label";
import "recoil";
function Dashboard({
  usersCount,
  articlesCount,
  sdgsCount,
  pagesCount,
  slidersCount,
  expertsCount,
  publicationsCount,
  researchCount,
  publicationsStats,
  researchStats
}) {
  const publicationDates = publicationsStats.map((stat) => stat.date);
  const publicationCounts = publicationsStats.map((stat) => stat.count);
  const researchDates = researchStats.map((stat) => stat.date);
  const researchCounts = researchStats.map((stat) => stat.count);
  const publicationChartOptions = {
    chart: {
      id: "publication-chart"
    },
    xaxis: {
      categories: publicationDates
    },
    yaxis: {
      title: {
        text: "Count"
      }
    },
    title: {
      text: "Publications Over Time",
      align: "center"
    }
  };
  const researchChartOptions = {
    chart: {
      id: "research-chart"
    },
    xaxis: {
      categories: researchDates
    },
    yaxis: {
      title: {
        text: "Count"
      }
    },
    title: {
      text: "Research Over Time",
      align: "center"
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Users" }),
          /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: usersCount }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Articles" }),
          /* @__PURE__ */ jsx(Package2, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: articlesCount }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total SDGs" }),
          /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: sdgsCount }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Pages" }),
          /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: pagesCount }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Sliders" }),
          /* @__PURE__ */ jsx(IconGallery, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: slidersCount }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Experts" }),
          /* @__PURE__ */ jsx(IconPerson, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: expertsCount }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Publications" }),
          /* @__PURE__ */ jsx(DocumentIcon, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: publicationsCount }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium", children: "Total Researches" }),
          /* @__PURE__ */ jsx(DocumentIcon, { className: "h-4 w-4 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: researchCount }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-10", children: /* @__PURE__ */ jsx(
        Chart,
        {
          options: publicationChartOptions,
          series: [{ name: "Publications", data: publicationCounts }],
          type: "line",
          height: 350
        }
      ) }) }),
      /* @__PURE__ */ jsx(Card, { className: "mt-4", children: /* @__PURE__ */ jsx(CardContent, { className: "p-10", children: /* @__PURE__ */ jsx(
        Chart,
        {
          options: researchChartOptions,
          series: [{ name: "Research", data: researchCounts }],
          type: "line",
          height: 350
        }
      ) }) })
    ] })
  ] });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(AdminLayout, { title: "Dashboard", children: page });
export {
  Dashboard as default
};
