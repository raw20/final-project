import "./App.css";
import ConnectWith from "./components/Main/ConnectWith/ConnectWith";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Main/ConnectWith/ConnectItem/SubItem/Welcome/Welcome";
import CompanyIntro from "./components/Main/ConnectWith/ConnectItem/SubItem/CompayIntro/CompanyIntro";
import Preparations from "./components/Main/ConnectWith/ConnectItem/SubItem/Preparations/Preparations";
import NoticeBoard from "./components/Main/ConnectWith/ConnectItem/SubItem/NoticeBoard/NoticeBoard";
import OnAndUp from "./components/Main/OnAndUp/Main/OnAndUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectWith />} />
          <Route path="/chemiverseOnUp" element={<OnAndUp />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/companyInfo" element={<CompanyIntro />} />
          <Route path="/preparations" element={<Preparations />} />
          <Route path="/noticeBoard" element={<NoticeBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
