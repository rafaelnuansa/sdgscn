import { a as jsx, j as jsxs } from "../ssr.js";
import * as React from "react";
import { usePage, Head, Link } from "@inertiajs/react";
import { M as MetaTags } from "./meta-tags-409b9c96.js";
import { A as AppLayout } from "./app-layout-a22821eb.js";
import { C as Container } from "./container-a7123293.js";
import { B as Button, b as buttonVariants } from "./button-c70c5ef8.js";
import "./package-card-5ff87aae.js";
import Hero from "./hero-25ad7b5e.js";
import { I as Image } from "./image-facc74b1.js";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { d as cn } from "./utils-38e41470.js";
import "./carousel-95a5b32c.js";
import "./avatar-d5a71c43.js";
import "clsx";
import "react-lazy-load";
import "./badge-a28027f7.js";
import "@irsyadadl/paranoid";
import ArticleCard from "./article-card-7368e7be.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-8ae88bc6.js";
import "sweetalert2";
import "react-floating-whatsapp";
import "./footer-67e2bd2e.js";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "./sheet-4df565dd.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-d3e20674.js";
import "cmdk";
import "./dialog-d3517b83.js";
import "axios";
import "usehooks-ts";
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
import "@radix-ui/react-slot";
import "./login-register-c2778968.js";
import "framer-motion";
import "react-slick";
import "@radix-ui/react-avatar";
import "moment";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}, ref) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y"
  }, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api == null ? void 0 : api.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api == null ? void 0 : api.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  }, [scrollPrev, scrollNext]);
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api == null ? void 0 : api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
function PartnerLogos({ partners }) {
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        align: "start"
      },
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: partners.map((partner, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "basis-1/2 md:basis-1/3 lg:basis-1/5", children: /* @__PURE__ */ jsx("div", { className: "p-1", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: `/storage/partners/${partner.image}`,
            alt: partner.name,
            className: "w-40"
          }
        ) }) }, index)) }),
        /* @__PURE__ */ jsx(CarouselPrevious, {}),
        /* @__PURE__ */ jsx(CarouselNext, {})
      ]
    }
  );
}
function Home() {
  const {
    latestArticles,
    sliders,
    partners,
    web_setting,
    testimonials
  } = usePage().props;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Beranda" }),
    /* @__PURE__ */ jsx(
      MetaTags,
      {
        title: web_setting.website_name ?? "Laravel",
        description: web_setting.website_description,
        url: route("home")
      }
    ),
    /* @__PURE__ */ jsx(Hero, { slides: sliders }),
    /* @__PURE__ */ jsx("div", { className: "latest-packages border-b py-20", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Recent News" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/packages",
            className: buttonVariants({ variant: "default" }) + " font-extrabold",
            children: "Lihat Semua Postingan"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols gap-4 md:grid-cols-3 lg:grid-cols-4", children: latestArticles.map((article) => /* @__PURE__ */ jsx(ArticleCard, { article }, article.id)) })
    ] }) }),
    partners && partners.length > 0 && /* @__PURE__ */ jsx("div", { className: "bg-gray-800 p-20", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center", children: /* @__PURE__ */ jsx(PartnerLogos, { partners }) }) }) })
  ] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Home as default
};
