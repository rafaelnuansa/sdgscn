import { a as jsx } from "../ssr.js";
import React__default, { useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
const quill_snow = "";
function Editor({ content: initialContent, onChange }) {
  const [content, setContent] = React__default.useState(initialContent || "");
  const quillRef = useRef(ReactQuill || null);
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    const formData = new FormData();
    input.onchange = async () => {
      const range = quillRef.current.getEditor().getSelection();
      let quillObj = quillRef.current.getEditor();
      const file = input.files[0];
      formData.append("image", file);
      await axios.post("/admin/articles/storeImage", formData, {
        headers: {
          "content-type": "multipart/form-data"
        }
      }).then((response) => {
        quillObj.insertEmbed(range.index, "image", response.data.url);
      });
    };
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image"]
        ],
        handlers: {
          image: imageHandler
        }
      }
    }),
    []
  );
  const handleChange = (content2) => {
    setContent(content2);
    onChange(content2);
  };
  return /* @__PURE__ */ jsx(
    ReactQuill,
    {
      ref: quillRef,
      theme: "snow",
      value: content,
      modules,
      onChange: handleChange
    }
  );
}
const Editor$1 = React__default.memo(Editor);
export {
  Editor$1 as E
};
