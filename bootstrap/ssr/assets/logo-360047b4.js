import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { a as jsx } from "../ssr.js";
import "clsx";
import { I as Image } from "./image-0458d8cd.js";
function FlashMessage() {
  const { flash_message } = usePage().props;
  useEffect(() => {
    if (flash_message == null ? void 0 : flash_message.type) {
      Swal.fire(
        {
          icon: flash_message.type,
          title: flash_message.title,
          text: flash_message.message,
          showConfirmButton: true,
          confirmButtonColor: "#d33",
          // Customize confirm button color
          cancelButtonColor: "#3085d6",
          // Customize cancel button color
          timer: 3e3
        }
      );
    }
  }, [flash_message]);
  return null;
}
function Logo({ className, ...props }) {
  const { web_setting } = usePage().props;
  return /* @__PURE__ */ jsx(Image, { src: `/storage/images/${web_setting == null ? void 0 : web_setting.website_logo}`, className: "max-h-[40px] sm:max-h-[40px] md:max-h-[70px] lg:max-h-[70px]" });
}
export {
  FlashMessage as F,
  Logo as L
};
