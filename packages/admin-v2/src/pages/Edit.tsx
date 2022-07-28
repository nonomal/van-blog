import Cherry from "cherry-markdown";
import { useState } from "react";
import Editor from "../components/Editor";

const EditPage = () => {
  const [editor, setEditor] = useState<Cherry | null>(null);
  const getVal = () => {
    editor?.getValue();
  };
  return (
    <div>
      <Editor setEditor={setEditor} defaultValue=""></Editor>
    </div>
  );
};
export default EditPage;
