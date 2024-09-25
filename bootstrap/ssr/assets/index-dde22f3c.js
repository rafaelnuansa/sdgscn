import { j as jsxs, a as jsx } from "../ssr.js";
import * as React from "react";
import { Head, usePage, Link } from "@inertiajs/react";
import { A as AppLayout } from "./app-layout-dd331cc4.js";
import { C as Container } from "./container-a7123293.js";
import { B as Button, b as buttonVariants } from "./button-ef56bd5e.js";
import Hero from "./hero-a5a00b9f.js";
import { I as Image } from "./image-50b4b38d.js";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { c as cn } from "./utils-fa5dc5b8.js";
import ArticleCard from "./article-card-a21fd7ba.js";
import { AcademicCapIcon, BookOpenIcon, LightBulbIcon, DocumentTextIcon } from "@heroicons/react/20/solid";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-70150b74.js";
import "sweetalert2";
import "clsx";
import "react-floating-whatsapp";
import "./footer-775d67cf.js";
import "./dropdown-menu-fef2e637.js";
import "@radix-ui/react-dropdown-menu";
import "./sheet-8bf1694f.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@irsyadadl/paranoid";
import "./theme-provider-b3598db8.js";
import "./lodash-d8bc076d.js";
import "./command-3c1526d0.js";
import "cmdk";
import "./dialog-bc7d8a74.js";
import "axios";
import "usehooks-ts";
import "./avatar-f336b458.js";
import "@radix-ui/react-avatar";
import "./label-22b65785.js";
import "@radix-ui/react-label";
import "./logo-dark-fd798013.js";
import "./input-05b98463.js";
import "./checkbox-75ff73a5.js";
import "@radix-ui/react-checkbox";
import "./phone-input-bee968be.js";
import "react-phone-number-input";
import "react-phone-number-input/flags";
import "./popover-0590da32.js";
import "@radix-ui/react-popover";
import "./scroll-area-db838748.js";
import "@radix-ui/react-scroll-area";
import "sonner";
import "@radix-ui/react-slot";
import "react-slick";
import "tailwind-merge";
import "framer-motion";
import "react-lazy-load";
import "./badge-68f4f9eb.js";
import "moment";
function MetaTags({
  image = "https://yourdomain.com/path-to-your-og.jpg",
  title = "Your Website Title",
  description = "Your website description",
  url = "https://yourdomain.com"
}) {
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("meta", { name: "title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: image }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: url }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: image })
  ] });
}
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
    ourSdgs
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
    /* @__PURE__ */ jsx("div", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-10", children: "Explore Our Resources" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-6 text-center rounded-lg", children: [
          /* @__PURE__ */ jsx(AcademicCapIcon, { className: "h-12 w-12 mx-auto mb-4 text-blue-500" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Experts" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "List of the experts in SDGs Network." }),
          /* @__PURE__ */ jsx(Link, { href: "/experts", className: "text-blue-600 mt-4 inline-block", children: "View Experts" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-6 text-center rounded-lg", children: [
          /* @__PURE__ */ jsx(BookOpenIcon, { className: "h-12 w-12 mx-auto mb-4 text-blue-500" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Publications" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "List of publications of SDGs-related activity worldwide." }),
          /* @__PURE__ */ jsx(Link, { href: "/publications", className: "text-blue-600 mt-4 inline-block", children: "View Publications" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-6 text-center rounded-lg", children: [
          /* @__PURE__ */ jsx(LightBulbIcon, { className: "h-12 w-12 mx-auto mb-4 text-blue-500" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Research" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "List of researches of SDGs-related activity worldwide." }),
          /* @__PURE__ */ jsx(Link, { href: "/research", className: "text-blue-600 mt-4 inline-block", children: "View Researches" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-6 text-center rounded-lg", children: [
          /* @__PURE__ */ jsx(DocumentTextIcon, { className: "h-12 w-12 mx-auto mb-4 text-blue-500" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Papers" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "List of papers by SDGs researchers worldwide." }),
          /* @__PURE__ */ jsx(Link, { href: "/papers", className: "text-blue-600 mt-4 inline-block", children: "View Papers" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-10", children: "Our SDGs" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: ourSdgs.map((sdg) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "relative rounded-lg overflow-hidden group",
          children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("sdgs.show", sdg.slug),
              className: "relative rounded-lg overflow-hidden group block",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/storage/sdgs/${sdg.image}`,
                    alt: sdg.name,
                    className: "w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: sdg.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-md font-semibold", children: sdg.description })
                ] })
              ]
            },
            sdg.slug
          )
        },
        sdg.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "latest-articles bg-background border-b py-20", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Recent News" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/articles",
            className: buttonVariants({ variant: "default" }) + " font-extrabold",
            children: "Lihat Semua Postingan"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols gap-4 md:grid-cols-3 lg:grid-cols-4", children: latestArticles.map((article) => /* @__PURE__ */ jsx(ArticleCard, { article }, article.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 border-b py-20", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6", children: "Become Our Partner" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Join us in achieving sustainable development goals and make a real difference. Together, we can create a better future." }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/contact",
          className: "bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition",
          children: "Partner With Us"
        }
      )
    ] }) }) }),
    partners && partners.length > 0 && /* @__PURE__ */ jsx("div", { className: "bg-background p-20", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center", children: /* @__PURE__ */ jsx(PartnerLogos, { partners }) }) }) })
  ] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Home as default
};
