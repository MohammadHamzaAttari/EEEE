import React, { createContext, useState } from "react";
import WithSubnavigation from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Home from "./components/Pages/Home";
import { Container } from "@chakra-ui/react";
import DealersHome from "./components/Dealers/DealersHome";
import Admin from "./components/Admin/Admin";
import Models from "./components/Pages/Models";
import Login from "./components/Registration/Login";
import RegisterUser from "./components/Registration/RegisterUser";
import RegisterAdmin from "./components/Registration/RegisterAdmin";
import RegisterDealer from "./components/Registration/RegisterDealer";
import DealersPortal from "./components/Dealers/DealersPortal";
import LoginDealer from "./components/Dealers/LoginDealer";
import AdminLogin from "./components/Admin/AdminLogin";
import MDetails from "./components/Pages/MDetails";
import Company from "./components/Pages/company";
import CreditCardForm from "./components/CreditCard";

function App() {
  const USER_TYPES = {
    PUBLIC: "Public user",
    NORMAL_USER: "Normal user",
    ADMIN_USER: "Admin user",
  };
  const CURRENT_USER_TYPE = USER_TYPES.PUBLIC;
  const [data, setData] = useState();
  const handleData = (v) => {
    setData(v);
  };

  return (
    <Routes>
      <Route path='/' element={<Home fetch={handleData} />} />
      <Route path='/companies' element={<Company />} />
      <Route path='/login' element={<Login />} />
      <Route path='/models' element={<Models dataId={data} />} />
      <Route path='/models/Details' element={<MDetails />} />
      <Route path='/models/Details/creditCard' element={<CreditCardForm />} />
      <Route path='/registerUser' element={<RegisterUser />} />

      <Route path='/dealerHome' element={<DealersHome />} />
      <Route path='/dealerHome/registerDealer' element={<RegisterDealer />} />
      <Route
        path='/dealerHome/registerDealer/loginDealer'
        element={<LoginDealer />}
      />
      <Route path='/dealersPortal' element={<DealersPortal />} />

      <Route path='/registerAdmin' element={<RegisterAdmin />} />
      <Route path='/registerAdmin/loginAdmin' element={<AdminLogin />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='*' element={<NoPage></NoPage>} />
    </Routes>
  );
}
function PublicElement({ childern }) {
  return <>{childern}</>;
}

export default App;
