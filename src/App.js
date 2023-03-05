import WithSubnavigation from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoPage></NoPage>} />
      </Routes>
    </Router>
  );
}

export default App;
