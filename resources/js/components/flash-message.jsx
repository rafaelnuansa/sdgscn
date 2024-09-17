import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export function FlashMessage() {
  const { flash_message } = usePage().props;

  useEffect(() => {
    if (flash_message?.type) {
      Swal.fire(
        {
          icon: flash_message.type,
          title: flash_message.title,
          text: flash_message.message,
          showConfirmButton: true,
          confirmButtonColor: '#d33',  // Customize confirm button color
          cancelButtonColor: '#3085d6',  // Customize cancel button color
          timer: 3000,
        }
      );
    }
  }, [flash_message]);

  return null; // No need to render anything
}
