import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { F as FlashMessage } from "./logo-70150b74.js";
import { usePage, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { N as Navigation, F as Footer } from "./footer-775d67cf.js";
function FloatWhatsapp() {
  const { web_setting } = usePage().props;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    var _a;
    const checkDarkMode = () => {
      if (document.documentElement.classList.contains("dark") || document.body.classList.contains("dark")) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });
    observer.observe(document.body, { attributes: true });
    const formattedPhoneNumber = (_a = web_setting.website_phone_whatsapp) == null ? void 0 : _a.replace(/\+/g, "");
    setPhoneNumber(formattedPhoneNumber);
    return () => {
      observer.disconnect();
    };
  }, [web_setting.website_phone_whatsapp]);
  return /* @__PURE__ */ jsx(
    FloatingWhatsApp,
    {
      phoneNumber: phoneNumber ?? 0,
      accountName: web_setting.website_name,
      allowEsc: true,
      chatMessage: "Ada yang bisa kami bantu?",
      avatar: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png`,
      allowClickAway: true,
      darkMode: isDarkMode,
      statusMessage: "Contact via Whatsapp",
      placeholder: "ketik pesan disini..",
      notification: true,
      notificationSound: true
    }
  );
}
function AppLayout({ children }) {
  const { web_setting } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx(
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: `/storage/images/${web_setting == null ? void 0 : web_setting.website_favicon}`
      }
    ) }),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx(FlashMessage, {}),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatWhatsapp, {})
  ] });
}
export {
  AppLayout as A
};
