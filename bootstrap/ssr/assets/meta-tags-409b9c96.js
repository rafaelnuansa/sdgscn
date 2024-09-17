import { j as jsxs, a as jsx } from "../ssr.js";
import { Head } from "@inertiajs/react";
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
export {
  MetaTags as M
};
