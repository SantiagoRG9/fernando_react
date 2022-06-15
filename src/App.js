import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { Navigate } from "react-router-dom";
import Home from "./Components/Pages1/Home";
import Atention from "./Components/Pages1/Atention";
import Information from "./Components/Pages1/Information";
import Login from "./Components/Pages1/Login2";
import Register from "./Components/Pages1/Register";
import Sell from "./Components/Pages1/Sell";
import Service from "./Components/Pages1/Teaming";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atention" element={<Atention />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/personas" element={<Service />} />
        <Route path="/Empresas" element={<Service />} />
        <Route path="/Carrier" element={<Service />} />
        <Route path="/Negocios" element={<Service />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
