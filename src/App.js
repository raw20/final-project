import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConnectWith from "./pages/ConnectWith/ConnectWith";
import OnAndUp from "./pages/OnAndUp/OnAndUp";
import Login from "./components/Main/OnAndUp/SideItem/Login/Login";
import Mypage from "./components/Main/OnAndUp/SideItem/MyPage/Mypage";
import OnAndUpItemForm from "./components/Main/OnAndUp/Main/OnAndUpItemForm";
import ConnectWthItemForm from "./components/Main/ConnectWith/Main/ConnectWthItemForm";
import Welcome from "./components/Main/ConnectWith/MainItem/Welcome/Welcome";
import CompanyIntro from "./components/Main/ConnectWith/MainItem/CompayIntro/CompanyIntro";
import Preparations from "./components/Main/ConnectWith/MainItem/Preparations/Preparations";
import NoticeBoard from "./components/Main/ConnectWith/MainItem/NoticeBoard/NoticeBoard";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/:address" element={<ConnectWthItemForm />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="companyInfo" element={<CompanyIntro />} />
            <Route path="preparations" element={<Preparations />} />
            <Route path="noticeBoard" element={<NoticeBoard />} />
          </Route>
          <Route path="/" element={<ConnectWith />} />
          <Route path="/chemiverseOnUp/:address" element={<OnAndUpItemForm />}>
            <Route path="eduroom" />
            <Route path="eduguide" />
            <Route path="diagnosis" />
            <Route path="study" />
            <Route path="chemistory" />
            <Route path="mentoring" />
            <Route path="board" />
          </Route>
          <Route path="/chemiverseOnUp" element={<OnAndUp />} />

          <Route path="/chemiverseOnUp/login" element={<Login />} />
          <Route path="/chemiverseOnUp/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
