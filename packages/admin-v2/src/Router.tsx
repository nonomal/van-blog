// import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPage from "./pages/Edit";

function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/edit" element={<EditPage></EditPage>} />
        <Route path="/" element={<div>你好</div>} />
      </Routes>
    </Router>
  );
}

export default RouterPage;
