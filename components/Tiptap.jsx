"use client";

import { forwardRef, useImperativeHandle } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";

const Tiptap = ({ onChange }, ref) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Document,
      Paragraph,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          level: [2],
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal",
        },
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "w-full  px-4 py-3 border min-h-[250px] ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });
  useImperativeHandle(ref, () => editor, [editor]);
  return (
    <div className="border w-full sm:w-[500px] mt-4  ">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default forwardRef(Tiptap);
