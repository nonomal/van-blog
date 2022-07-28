import Cherry from "cherry-markdown";
import "cherry-markdown/dist/cherry-markdown.css";

import { useEffect, useRef } from "react";
export interface EditorProps {
  setEditor: (editor: Cherry) => void;
  defaultValue: string;
}
const Editor = (props: EditorProps) => {
  const { current: currentEditor } = useRef<{ editor: Cherry | null }>({
    editor: null,
  });
  useEffect(() => {
    if (!currentEditor.editor) {
      currentEditor.editor = new Cherry({
        id: "markdown-container",
        value: props.defaultValue || "",
      });
      props.setEditor(currentEditor.editor);
    }
  }, [currentEditor, props]);
  return <div style={{ height: 500 }} id="markdown-container"></div>;
};
export default Editor;
