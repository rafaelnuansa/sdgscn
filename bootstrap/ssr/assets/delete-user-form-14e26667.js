import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { useState, useRef } from "react";
import { I as Input } from "./input-6fbce247.js";
import { useForm } from "@inertiajs/react";
import { B as Button } from "./button-e2a7e3d3.js";
import { I as InputError } from "./input-error-5d71eba3.js";
import { L as Label } from "./label-4839c48b.js";
import { D as Dialog, a as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-20065758.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, e as CardFooter } from "./card-d70f34a0.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./utils-186374bb.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-dialog";
import "lucide-react";
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { className, children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Delete Account" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsxs(CardFooter, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: confirmUserDeletion, children: "Delete Account" }),
      /* @__PURE__ */ jsx(Dialog, { open: confirmingUserDeletion, onOpenChange: setConfirmingUserDeletion, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxs(DialogHeader, { children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure absolutely sure?" }),
          /* @__PURE__ */ jsx(DialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, children: [
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", className: "sr-only", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                ref: passwordInput,
                value: data.password,
                onChange: (e) => setData("password", e.target.value),
                className: "mt-1 block w-3/4",
                isFocused: true,
                placeholder: "Password"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
            /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: closeModal, children: "Cancel" }),
            /* @__PURE__ */ jsx(Button, { variant: "destructive", className: "ml-3", disabled: processing, children: "Delete Account" })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}
export {
  DeleteUserForm
};
