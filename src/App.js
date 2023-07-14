import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/singUp" element={<Auth />} />
        <Route path="/singIn" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
