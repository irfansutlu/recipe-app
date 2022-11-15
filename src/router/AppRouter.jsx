import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<PrivateRouter/>}>
          <Route path="" element={<About/>}/>
        </Route>

        <Route path="details" element={<PrivateRouter />}>
          <Route path="" element={<Details />}/>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
