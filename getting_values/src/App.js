import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Application from "./components/Application";
import Academics from "./components/Academics";
import SignOut from "./components/SignOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path="/Navigation" element={<Navigation></Navigation>}></Route>
        <Route path="/Application" element={<Application></Application>}></Route>
        <Route path="/Academics" element={<Academics></Academics>}></Route>
        <Route path="/SignUp/Login" element={<Login></Login>}></Route>
        <Route path="/Application/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/SignOut" element={<SignOut></SignOut>}></Route>
        <Route path="/SignOut/SignUp" element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
