/* empty css                                   */
import { f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DQq-9Zo_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CHmWOWwN.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
export { renderers } from '../../renderers.mjs';

function BlogEditorReact({
  initialContent = "",
  onContentChange = () => {
  }
}) {
  const [content, setContent] = useState(initialContent);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      Underline
    ],
    content: initialContent,
    onUpdate({ editor: editor2 }) {
      const html = editor2.getHTML();
      setContent(html);
      onContentChange(html);
    }
  });
  useEffect(() => {
    if (editor && initialContent !== content) {
      editor.commands.setContent(initialContent);
    }
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
  return /* @__PURE__ */ jsxs("div", { className: "blog-editor", children: [
    /* @__PURE__ */ jsxs("div", { className: "toolbar", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleLink, children: "🔗 Lien" }),
      /* @__PURE__ */ jsx("input", { type: "file", accept: "image/*", onChange: handleImageUpload })
    ] }),
    /* @__PURE__ */ jsx(EditorContent, { editor })
  ] });
}

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const title = "Administration du blog - TonPatron";
  const description = "G\xE9rez vos articles de blog avec notre \xE9diteur en ligne.";
  const articles = [
    {
      id: "1",
      title: "Bienvenue sur notre blog",
      content: "<p>Bienvenue sur notre blog !</p>",
      coverImage: "",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    }
    // Ajoutez d'autres articles ici
  ];
  const initialContent = articles[0].content;
  const handleSave = (content) => {
    const updatedArticle = {
      id: articles[0].id,
      title: articles[0].title,
      content,
      coverImage: articles[0].coverImage,
      createdAt: articles[0].createdAt,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("Article sauvegard\xE9:", updatedArticle);
  };
  const handleDelete = (id) => {
    if (confirm("\xCAtes-vous s\xFBr de vouloir supprimer cet article ?")) {
      console.log("Article supprim\xE9:", id);
    }
  };
  const handleNewArticle = () => {
    console.log("Nouvel article cr\xE9\xE9");
  };
  const handleEdit = (article) => {
    console.log("Article \xE0 \xE9diter:", article);
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <h1 class="text-3xl font-bold">Administration du blog</h1> <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"${addAttribute(handleNewArticle, "onClick")}>
Nouvel article
</button> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="md:col-span-2"> <div class="bg-white rounded-lg shadow-sm p-6"> <div class="space-y-6"> <div> <label class="block text-gray-700 mb-2">Titre de l'article</label> <input type="text"${addAttribute(articles[0].title, "value")} class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> <div> <label class="block text-gray-700 mb-2">Image de couverture</label> <input type="text"${addAttribute(articles[0].coverImage, "value")} class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> </div> ${renderComponent($$result2, "BlogEditorReact", BlogEditorReact, { "client:load": true, "initialContent": initialContent, "onSave": handleSave, "client:component-hydration": "load", "client:component-path": "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/components/BlogEditorReact.jsx", "client:component-export": "default" })} <div class="flex justify-end gap-4 mt-6"> <button class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
Annuler
</button> </div> </div> </div> </div> <div> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-xl font-semibold mb-4">Articles récents</h2> <div class="space-y-4"> ${articles.map((article) => renderTemplate`<div class="border-b last:border-0 pb-4"> <div class="flex justify-between items-start"> <div> <h3 class="text-lg font-medium">${article.title}</h3> <p class="text-sm text-gray-600"> ${new Date(article.updatedAt).toLocaleDateString()} </p> </div> <div class="flex gap-2"> <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"${addAttribute(() => handleEdit(article), "onClick")}>
Éditer
</button> <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"${addAttribute(() => handleDelete(article.id), "onClick")}>
Supprimer
</button> </div> </div> </div>`)} </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/admin/blog.astro", void 0);

const $$file = "C:/Users/chris/OneDrive/Bureau/Windsurf/tonpatron-new/src/pages/admin/blog.astro";
const $$url = "/admin/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
