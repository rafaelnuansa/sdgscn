import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { usePage, Head } from "@inertiajs/react";
import { B as Breadcrumb } from "./breadcrumb-7d1c48f0.js";
import { A as AppLayout } from "./app-layout-a22821eb.js";
import { I as Image } from "./image-facc74b1.js";
import { c as formatRupiah } from "./utils-38e41470.js";
import { C as Container } from "./container-a7123293.js";
import BookingDialog from "./booking-dialog-951c5ec2.js";
import { B as Badge } from "./badge-a28027f7.js";
import HotelsSection from "./hotels-fe4bc8ab.js";
import { C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext } from "./carousel-95a5b32c.js";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { Timeline, TimelineItem } from "./timeline-be0bc627.js";
import { M as MetaTags } from "./meta-tags-409b9c96.js";
import LoginRegisterDialog from "./login-register-c2778968.js";
import { V as Video } from "./video-e9876707.js";
import "@irsyadadl/paranoid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "lucide-react";
import "./breadcrumb-a34574f9.js";
import "@radix-ui/react-slot";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "clsx";
import "react-floating-whatsapp";
import "./footer-67e2bd2e.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "./button-c70c5ef8.js";
import "class-variance-authority";
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
import "tailwind-merge";
import "framer-motion";
import "react-lazy-load";
import "vaul";
import "./useSwal-486594a3.js";
import "sweetalert";
import "embla-carousel-react";
import "react-player";
const style_min = "";
function PackageShow() {
  var _a;
  const { paket, itineraries, videoPremiums, hasBooking, auth } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: paket.name }),
    /* @__PURE__ */ jsx(
      MetaTags,
      {
        title: paket.name,
        description: paket.name,
        url: route("packages.show", [paket.slug]),
        image: paket.image
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(
        Breadcrumb,
        {
          links: [
            { label: "Home", url: "/" },
            { label: "Packages", url: "/packages" },
            { label: paket.name, url: route("packages.show", paket.slug) }
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto container py-10 sm:px-6 lg:px-8 lg:py-14", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-6 slick-gallery-slideshow detail-gallery", children: /* @__PURE__ */ jsxs(Carousel, { className: "w-full", plugins: [
          emblaCarouselAutoplay({
            delay: 2e3
          })
        ], children: [
          /* @__PURE__ */ jsxs(CarouselContent, { children: [
            /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden shadow-md w-full border rounded  md:mr-4 mb-4 md:mb-0", children: /* @__PURE__ */ jsx(
              Image,
              {
                src: `/images/${paket.image}`,
                alt: paket.image,
                className: "aspect-[16/9] w-full shadow-lg border rounded  object-cover",
                objectFit: "cover"
              }
            ) }) }),
            paket.images.map((image, index) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
              Image,
              {
                src: `/storage/images/${image.image}`,
                alt: image.image,
                className: "aspect-[16/9] w-full shadow-lg rounded-md object-cover",
                objectFit: "cover"
              }
            ) }, index))
          ] }),
          /* @__PURE__ */ jsx(CarouselPrevious, {}),
          /* @__PURE__ */ jsx(CarouselNext, {})
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-6", children: /* @__PURE__ */ jsxs("div", { className: " dark:bg-card min-h-[400px] rounded-lg p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2 text-binbaz-biru-tua font-roboto-slab", children: paket.name }),
          /* @__PURE__ */ jsx(Badge, { className: "bg-custom-primary-theme text-sm mb-2", children: paket.category.name }),
          /* @__PURE__ */ jsx("p", { className: "mb-2 text-base", children: paket.description }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap ", children: paket.hotels.length > 0 ? paket.hotels.map((hotel, index) => /* @__PURE__ */ jsx("div", { className: `w-1/2 pr-4 pb-4 ${index % 2 === 0 ? "" : "pl-4"}`, children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-md font-semibold", children: hotel.name }),
            /* @__PURE__ */ jsxs("p", { className: "italic text-sm", children: [
              hotel.pivot.night,
              " ",
              hotel.pivot.night > 1 ? "Nights" : "Night",
              " at ",
              hotel.location
            ] })
          ] }) }, hotel.id)) : /* @__PURE__ */ jsx(Fragment, {}) }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-bold mb-2", children: formatRupiah(paket.price) }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-5", children: auth.user ? /* @__PURE__ */ jsx(BookingDialog, { paket }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(LoginRegisterDialog, { paket }) }) })
        ] }) })
      ] }) })
    ] }),
    ((_a = paket.hotels) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsx(HotelsSection, { paket }),
    itineraries.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "py-10 mx-auto container", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Itineraries" }),
      /* @__PURE__ */ jsx(Timeline, { children: itineraries.map((itinerary, index) => /* @__PURE__ */ jsx(
        TimelineItem,
        {
          day: itinerary.day,
          description: itinerary.description,
          items: itinerary.items
        },
        `${itinerary.id}_${index}`
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "py-10 mx-auto container", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Premium Konten" }),
      videoPremiums.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: videoPremiums.map((video, index) => /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden shadow-md w-full border rounded", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          Video,
          {
            src: `/storage/videos/${video.video}`,
            alt: video.title,
            className: "w-full rounded-lg"
          }
        ),
        !hasBooking && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "text-center text-white", children: /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Pesan paket untuk mengakses konten premium" }) }) })
      ] }) }, index)) }) : /* @__PURE__ */ jsx("div", { className: "text-center text-gray-500 dark:text-gray-400", children: auth.user ? "No premium videos available." : "Access to premium content is restricted. Please book the package to view premium videos." })
    ] }) })
  ] });
}
PackageShow.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  PackageShow as default
};
