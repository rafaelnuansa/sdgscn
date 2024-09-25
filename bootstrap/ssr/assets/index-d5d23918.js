import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState } from "react";
import { usePage, Head } from "@inertiajs/react";
import { P as Pagination } from "./pagination-eab0ce12.js";
import BookingCard from "./booking-card-e9741932.js";
import "@irsyadadl/paranoid";
import { L as Layout } from "./layout-11aa56ab.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-d70f34a0.js";
import { I as Input } from "./input-6fbce247.js";
import { u as useFilter } from "./useFilter-40e5ac53.js";
import { L as Label } from "./label-4839c48b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./button-e2a7e3d3.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "./image-0458d8cd.js";
import "framer-motion";
import "react-lazy-load";
import "./badge-520453d1.js";
import "./logo-360047b4.js";
import "sweetalert2";
import "./avatar-fff64a18.js";
import "@radix-ui/react-avatar";
import "./command-1156986d.js";
import "cmdk";
import "lucide-react";
import "./dialog-20065758.js";
import "@radix-ui/react-dialog";
import "./theme-provider-b3598db8.js";
import "./sheet-7a963302.js";
import "./dropdown-menu-c2181ec7.js";
import "@radix-ui/react-dropdown-menu";
import "./lodash-d8bc076d.js";
import "@radix-ui/react-label";
function BookingIndex() {
  const {
    auth,
    bookings,
    user,
    booking_pending,
    booking_completed,
    payment_pending,
    payment_success
  } = usePage().props;
  const [params, setParams] = useState({
    search: "",
    start_date: "",
    end_date: ""
  });
  useFilter({
    route: route("bookings.index"),
    values: params,
    only: ["bookings"]
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [id]: value
    }));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Bookings" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Transaksi Saya" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Histori Booking saya" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center md:space-x-4 md:space-y-0 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "search", className: "mb-1", children: "Search" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              id: "search",
              className: "form-input rounded-md",
              placeholder: "Search...",
              value: params.search,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "start_date", className: "mb-1", children: "Start Date" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "date",
              id: "start_date",
              className: "form-input rounded-md",
              value: params.start_date,
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "end_date", className: "mb-1", children: "End Date" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "date",
              id: "end_date",
              className: "form-input rounded-md",
              value: params.end_date,
              onChange: handleChange
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "md:col-span-12", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: bookings.data.map((booking) => /* @__PURE__ */ jsx(BookingCard, { booking }, booking.id)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Pagination, { links: bookings.links }) })
    ] }) })
  ] });
}
BookingIndex.layout = (page) => /* @__PURE__ */ jsx(Layout, { title: "Bookings", children: page });
export {
  BookingIndex as default
};
