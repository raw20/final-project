import "./App.css";
import ConnectWith from "./components/ConnectWith/ConnectWith";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/ConnectWith/Main/Welcome";
import CompanyIntro from "./components/ConnectWith/Main/CompanyIntro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectWith />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/companyintro" element={<CompanyIntro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
