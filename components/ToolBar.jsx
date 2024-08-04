import React from "react";

function ToolBar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        bold
      </button>
    </div>
  );
}

export default ToolBar;
