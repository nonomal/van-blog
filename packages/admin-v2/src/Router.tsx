// import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPage from "./pages/Edit";
import LoginPage from "./pages/Login";

function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/edit" element={<EditPage></EditPage>} />
        <Route path="/" element={<LoginPage></LoginPage>} />
      </Routes>
    </Router>
  );
}

export default RouterPage;
