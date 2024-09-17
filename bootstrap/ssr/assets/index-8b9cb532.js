import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head, Link } from "@inertiajs/react";
import "./breadcrumb-a34574f9.js";
import "sweetalert2";
import "react-floating-whatsapp";
import { c as formatRupiah, b as formatDateTime } from "./utils-38e41470.js";
import "react-lazy-load";
import "./dropdown-menu-4ccafc02.js";
import "./button-c70c5ef8.js";
import "./sheet-4df565dd.js";
import "./theme-provider-b3598db8.js";
import { IconInvoice } from "@irsyadadl/paranoid";
import "./lodash-d8bc076d.js";
import "./command-d3e20674.js";
import "./avatar-d5a71c43.js";
import "./label-3e67e23b.js";
import "./input-e2af5f4c.js";
import "./dialog-d3517b83.js";
import "./checkbox-da69a68e.js";
import "./phone-input-9795e577.js";
import "sonner";
import "next-themes";
import { S as Search } from "./search-24973659.js";
import { P as Pagination } from "./pagination-1301a0c3.js";
import "./table-813451e6.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-43a93659.js";
import "./badge-a28027f7.js";
import { L as Layout } from "./layout-a69b62b5.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "lucide-react";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "cmdk";
import "@radix-ui/react-avatar";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-6a1d9996.js";
import "@radix-ui/react-popover";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "./logo-8ae88bc6.js";
import "./image-facc74b1.js";
import "framer-motion";
import "./sheet-c59fdc39.js";
function PaymentIndex() {
  const { auth, payments } = usePage().props;
  console.log(payments);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Transaksi" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        Search,
        {
          placeholder: "Cari Transaksi",
          URL: route("payments.index")
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Transaksi" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Berikut data transaksi pembayaran" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: payments.data.map((payment, index) => {
          var _a, _b, _c;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col mb-5 gap-4 rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md",
              children: [
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center font-semibold ", children: [
                    /* @__PURE__ */ jsx(IconInvoice, { className: "mr-2" }),
                    (_a = payment.booking) == null ? void 0 : _a.invoice,
                    " : ",
                    " ",
                    (_b = payment.booking) == null ? void 0 : _b.package.name.toUpperCase()
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold ", children: [
                    formatRupiah(payment == null ? void 0 : payment.amount),
                    " -",
                    " ",
                    payment.status.toUpperCase()
                  ] }),
                  payment.method !== "offline" && /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold ", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    "Bayar sebelum :",
                    " ",
                    formatDateTime(payment.expiry_time)
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm italic", children: payment.id })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1  gap-4 md:grid-cols-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "border-r pr-2", children: [
                    /* @__PURE__ */ jsx("h2", { className: "font-medium", children: "Metode Pembayaran" }),
                    /* @__PURE__ */ jsx("p", { className: "font-bold " })
                  ] }),
                  payment.method !== "offline" && /* @__PURE__ */ jsxs("div", { className: "border-r pr-2", children: [
                    /* @__PURE__ */ jsx("h2", { className: "font-medium", children: "Virtual Account" }),
                    /* @__PURE__ */ jsx("p", { className: "font-bold ", children: payment.va_number ?? "" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "pr-2", children: [
                    /* @__PURE__ */ jsx("h2", { className: "font-medium", children: "Total Biaya Booking" }),
                    /* @__PURE__ */ jsx("p", { className: "font-bold ", children: formatRupiah((_c = payment.booking) == null ? void 0 : _c.amount) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    onProgress: true,
                    href: route("payments.show", payment.id),
                    className: "text-blue-600 hover:underline",
                    children: "Lihat"
                  }
                ) })
              ]
            },
            index
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsx(Pagination, { links: payments.links })
    ] }) })
  ] });
}
PaymentIndex.layout = (page) => /* @__PURE__ */ jsx(Layout, { title: "Transaksi", children: page });
export {
  PaymentIndex as default
};
