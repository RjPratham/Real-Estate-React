import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Signout from "./pages/Signout";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signout" element={<Signout/>} />
      </Routes>
    </BrowserRouter>
  );
}
