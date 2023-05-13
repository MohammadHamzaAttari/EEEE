import WithSubnavigation from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Home from "./components/Pages/Home";
import { Container } from "@chakra-ui/react";
import DealersHome from "./components/DealersHome";

import ModelDetails from "./components/Pages/ModelDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/modelDetails' element={<ModelDetails />} />
        <Route path='/dealerportal' element={<DealersHome />} />

        <Route path='*' element={<NoPage></NoPage>} />
      </Routes>
    </Router>
  );
}

export default App;
