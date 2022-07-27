import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as TEditor } from "@toast-ui/editor";
import { useEffect, useState } from "react";
export interface EditorProps {}
const Editor = (props: EditorProps) => {
  const [hasInit, setHasInit] = useState(false);

  useEffect(() => {
    if (!hasInit) {
      setHasInit(true);
      new TEditor({
        el: document.querySelector("#editor")!,
        height: "500px",
        initialEditType: "markdown",
        previewStyle: "vertical",
        useCommandShortcut: false,
      });
    }
    return () => {};
  }, [hasInit, setHasInit]);
  return <div id="editor"> </div>;
};
export default Editor;
