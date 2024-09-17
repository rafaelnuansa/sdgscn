import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

function Editor({ content: initialContent, onChange }) {
    // Initialize the content state with the initial content or fallback to an empty string
    const [content, setContent] = React.useState(initialContent || '');

    // Reference for the ReactQuill editor
    const quillRef = useRef(ReactQuill || null);

    // Image handler function for the toolbar
    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        const formData = new FormData();

        input.onchange = async () => {
            const range = quillRef.current.getEditor().getSelection();
            let quillObj = quillRef.current.getEditor();
            const file = input.files[0];
            formData.append('image', file);

            await axios.post('/admin/articles/storeImage', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((response) => {
                quillObj.insertEmbed(range.index, 'image', response.data.url);
            });
        };
    };

    // Quill editor modules configuration
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ header: 1 }, { header: 2 }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ direction: 'rtl' }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    ['link', 'image'],
                ],
                handlers: {
                    image: imageHandler,
                },
            },
        }),
        []
    );

    // Content change handler
    const handleChange = (content) => {
        setContent(content);
        onChange(content); // Call the onChange prop to update the parent state
    };

    return (
        <ReactQuill
            ref={quillRef}
            theme="snow"
            value={content}
            modules={modules}
            onChange={handleChange}
        />
    );
}

export default React.memo(Editor);
