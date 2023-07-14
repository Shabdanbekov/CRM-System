import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import SignUp from "./components/auth/SignUp/SignUp";
import SignIn from "./components/auth/SignIn/SignIn";
import SmsPassword from "./components/SmsPassword/SmsPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sms-password" element={<SmsPassword />} />
      </Routes>
    </div>
  );
}

export default App;
