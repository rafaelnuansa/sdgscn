import { j as jsxs, a as jsx } from "../ssr.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { A as AdminLayout } from "./admin-layout-a706b491.js";
import { I as Input } from "./input-e2af5f4c.js";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-43a93659.js";
import { B as Button } from "./button-c70c5ef8.js";
import { IconPencilBox, IconX } from "@irsyadadl/paranoid";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./logo-8ae88bc6.js";
import "clsx";
import "./image-facc74b1.js";
import "framer-motion";
import "react-lazy-load";
import "./utils-38e41470.js";
import "tailwind-merge";
import "./scroll-area-9ef3b685.js";
import "@radix-ui/react-scroll-area";
import "./avatar-d5a71c43.js";
import "@radix-ui/react-avatar";
import "./command-d3e20674.js";
import "cmdk";
import "lucide-react";
import "./dialog-d3517b83.js";
import "@radix-ui/react-dialog";
import "./sonner-a166e9e0.js";
import "next-themes";
import "./sheet-c59fdc39.js";
import "class-variance-authority";
import "./dropdown-menu-4ccafc02.js";
import "@radix-ui/react-dropdown-menu";
import "./label-3e67e23b.js";
import "@radix-ui/react-label";
import "recoil";
import "@radix-ui/react-slot";
function MenuIndex() {
  const [form, setForm] = useState({ name: "", url: "", parent_id: null });
  const [editForm, setEditForm] = useState({ id: null, name: "", url: "", parent_id: null });
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState([]);
  useEffect(() => {
    fetchMenus();
  }, []);
  const fetchMenus = async () => {
    setLoading(true);
    try {
      const response = await axios.get(route("admin.menus.fetch"));
      const { menus, select: selectData } = response.data;
      const updatedMenus = menus.map((menu, index) => ({ ...menu, id: menu.id }));
      setMenuList(updatedMenus);
      setSelect(selectData);
    } catch (error) {
      console.error("Error fetching menus:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = (menu) => {
    setEditForm({ id: menu.id, name: menu.name, url: menu.url, parent_id: menu.parent_id });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "parent_id" ? value === "" ? null : parseInt(value) : value });
  };
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(route("admin.menus.store"), form);
      if (response.data.success) {
        fetchMenus();
        toast.success(response.data.message);
        setForm({ name: "", url: "", parent_id: null });
      } else {
        toast.error("Error creating menu: " + response.data.message);
      }
    } catch (error) {
      toast.error("Error creating menu:", error);
    }
  };
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(route("admin.menus.update", { id: editForm.id }), editForm);
      setEditForm({ id: null, name: "", url: "", parent_id: null });
      fetchMenus();
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error updating menu:", error);
    }
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(route("admin.menus.destroy", { id }));
          fetchMenus();
          toast.success("Success", response.data.message);
        } catch (error) {
          toast.error("Error deleting menu:", error);
        }
        Swal.fire("Deleted!", "Menu has been deleted.", "success");
      }
    });
  };
  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    const updatedMenuList = [...menuList];
    const movedItem = updatedMenuList.find((item) => item.id === draggableId);
    if (!movedItem) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      updatedMenuList.splice(source.index, 1);
      updatedMenuList.splice(destination.index, 0, movedItem);
    } else {
      const parentId = parseInt(destination.droppableId);
      movedItem.parent_id = parentId === 0 ? null : parentId;
      updatedMenuList.splice(source.index, 1);
      updatedMenuList.splice(destination.index, 0, movedItem);
    }
    try {
      const response = await axios.post(route("admin.menus.sort"), { menuList: updatedMenuList });
      if (response.data.success) {
        toast.success("Updated", response.data.message);
        setMenuList(updatedMenuList);
      } else {
        toast.error("Error sorting menus: " + response.data.message);
      }
    } catch (error) {
      toast.error("Error sorting menus:", error);
    }
  };
  const renderMenuItems = (items) => {
    if (!items)
      return null;
    return items.map((item, index) => /* @__PURE__ */ jsx(Draggable, { draggableId: item.id, index, children: (provided) => /* @__PURE__ */ jsx(
      "div",
      {
        ref: provided.innerRef,
        ...provided.draggableProps,
        ...provided.dragHandleProps,
        children: /* @__PURE__ */ jsx(
          MenuItem,
          {
            item,
            handleDelete,
            handleEdit,
            menuList: items,
            children: item.children && item.children.length > 0 && renderMenuItems(item.children)
          },
          item.id
        )
      }
    ) }, index));
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Menu" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Menu Management" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Manage Menu For your website" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mb-4", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                name: "name",
                value: form.name,
                onChange: handleInputChange,
                placeholder: "Menu Name",
                className: "p-2 border rounded w-1/3",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                name: "url",
                value: form.url,
                onChange: handleInputChange,
                placeholder: "URL",
                className: "p-2 border rounded w-1/3"
              }
            ),
            /* @__PURE__ */ jsxs(
              "select",
              {
                onChange: (e) => {
                  setForm({ ...form, parent_id: e.target.value });
                },
                className: "p-2 border bg-gray-100 dark:bg-gray-900 rounded w-1/3",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "No Parent" }),
                  select.map(({ label, value }) => /* @__PURE__ */ jsx("option", { value, children: label }, value))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", children: "Add Menu" })
        ] }),
        editForm.id && /* @__PURE__ */ jsxs("form", { onSubmit: handleEditSubmit, className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mb-4", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                name: "name",
                value: editForm.name,
                onChange: handleEditInputChange,
                placeholder: "Menu Name",
                className: "p-2 border rounded w-1/3",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "text",
                name: "url",
                value: editForm.url,
                onChange: handleEditInputChange,
                placeholder: "URL",
                className: "p-2 border rounded w-1/3"
              }
            ),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: editForm.parent_id,
                onChange: (e) => {
                  setEditForm({ ...editForm, parent_id: e.target.value });
                },
                className: "p-2 border bg-gray-100 dark:bg-gray-900 rounded w-1/3",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "No Parent" }),
                  select.map(({ label, value }) => /* @__PURE__ */ jsx("option", { value, children: label }, value))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", children: "Update Menu" })
        ] }),
        loading ? /* @__PURE__ */ jsx("p", { className: "text-center", children: "Loading..." }) : /* @__PURE__ */ jsx(DragDropContext, { onDragEnd, children: /* @__PURE__ */ jsx(Droppable, { droppableId: "menuList", type: "MENU_ITEM", children: (provided) => /* @__PURE__ */ jsxs("div", { ref: provided.innerRef, ...provided.droppableProps, children: [
          renderMenuItems(menuList),
          provided.placeholder
        ] }) }) })
      ] })
    ] })
  ] });
}
const MenuItem = ({ item, handleDelete, handleEdit, children, menuList }) => {
  const hasChildren = children && children.length > 0;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex justify-between items-center p-2 bg-muted/40 border rounded mb-2 ${hasChildren ? "parent-menu-item" : "child-menu-item"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm", children: item.name }),
            /* @__PURE__ */ jsx("span", { className: "text-xs", children: item.url })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Button, { size: "icon", onClick: () => handleEdit(item), children: /* @__PURE__ */ jsx(IconPencilBox, { className: "size-4" }) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "icon",
                variant: "destructive",
                onClick: () => handleDelete(item.id),
                children: /* @__PURE__ */ jsx(IconX, { className: "size-4" })
              }
            )
          ] })
        ]
      }
    ),
    hasChildren && /* @__PURE__ */ jsx("div", { className: "ml-4", children })
  ] });
};
export {
  MenuIndex as default
};
