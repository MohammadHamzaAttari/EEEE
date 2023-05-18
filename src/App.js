import React, { useContext, useState } from "react";
import WithSubnavigation from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Home from "./components/Pages/Home";
import { Container } from "@chakra-ui/react";
import DealersHome from "./components/Dealers/DealersHome";

import ModelDetails from "./components/Pages/ModelDetails";
import Login from "./components/Registration/Login";
import RegisterUser from "./components/Registration/RegisterUser";
import RegisterAdmin from "./components/Registration/RegisterAdmin";
import RegisterDealer from "./components/Registration/RegisterDealer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/modelDetails' element={<ModelDetails />} />
        <Route path='/dealerportal' element={<DealersHome />} />
        <Route path='/registerUser' element={<RegisterUser />} />
        <Route path='/registerDealer' element={<RegisterDealer />} />
        <Route path='/registerAdmin' element={<RegisterAdmin />} />

        <Route path='*' element={<NoPage></NoPage>} />
      </Routes>
    </Router>
  );
}

export default App;
