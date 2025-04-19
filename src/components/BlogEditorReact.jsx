import React, { useState, useEffect, useCallback } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";

export default function BlogEditorReact({
  initialContent = "",
  onContentChange = () => {},
}) {
  const [content, setContent] = useState(initialContent);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
    ],
    content: initialContent,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setContent(html);
      onContentChange(html);
    },
  });

  // Update editor content if initialContent changes
  useEffect(() => {
    if (editor && initialContent !== content) {
      editor.commands.setContent(initialContent);
    }
    // eslint-disable-next-line
  }, [initialContent]);

  const handleImageUpload = useCallback((event) => {
    const file = event.target.files?.[0];
    if (!file || !editor) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      editor.chain().focus().setImage({ src: reader.result }).run();
    };
    reader.readAsDataURL(file);
  }, [editor]);

  const handleLink = useCallback(() => {
    const url = window.prompt("Enter the URL:");
    if (url && editor) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  return (
    <div className="blog-editor">
      <div className="toolbar">
        <button type="button" onClick={handleLink}>🔗 Lien</button>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
