import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConnectWith from "./pages/ConnectWith/ConnectWith";
import OnAndUp from "./pages/OnAndUp/OnAndUp";
import Login from "./components/Main/OnAndUp/SideItem/Login/Login";
import Profile from "./components/Main/OnAndUp/SideItem/Profile/Profile";
import OnAndUpItemForm from "./components/Main/OnAndUp/Main/OnAndUpItemForm";
import ConnectWthItemForm from "./components/Main/ConnectWith/Main/ConnectWthItemForm";
import Welcome from "./components/Main/ConnectWith/MainItem/Welcome/Welcome";
import Now from "./components/Main/OnAndUp/MainItem/Diagnosis/Now";
import AboutCompany from "./components/Main/OnAndUp/MainItem/Study/AboutCompany";
import Preparations from "./components/Main/ConnectWith/MainItem/Preparations/Preparations";
import NoticeBoard from "./components/Main/ConnectWith/MainItem/NoticeBoard/NoticeBoard";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import LoginSearch from "./components/Main/OnAndUp/SideItem/Login/LoginSearch";
import LoginRedirect from "./components/route/LoginRedirect";
import TabBtnMenu from "./components/Main/OnAndUp/Header/TabBtnMenu";
import { FiSearch } from "react-icons/fi";
import Notice from "./components/Main/ConnectWith/MainItem/NoticeBoard/Notice";
import AboutMe from "./components/Main/ConnectWith/MainItem/NoticeBoard/AboutMe";
import QandA from "./components/Main/ConnectWith/MainItem/NoticeBoard/QandA";

function App() {
  const [LoginAuth, setLoginAuth] = useState(false);
  useEffect(() => {
    console.log("로그인인증값", LoginAuth);
  }, [LoginAuth]);


  return (
    <div className="App">
      <BrowserRouter>
        <Header LoginAuth={LoginAuth} setLoginAuth={setLoginAuth} />
        <Routes>
          <Route path="/" element={<ConnectWith />} />
          <Route path="/:id" element={<ConnectWthItemForm />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="aboutCompany" element={<AboutCompany />} />
            <Route path="preparations" element={<Preparations />} />
            <Route path="noticeBoard/" element={<NoticeBoard />}>
              <Route path="notice" element={<Notice />} />
              <Route path="aboutme" element={<AboutMe />} />
              <Route path="qna" element={<QandA />} />
            </Route>
          </Route>

          <Route path="/" element={<ConnectWith />} />
          <Route path="/chemiverseOnUp/:address/*" element={<OnAndUpItemForm />}>
            <Route path="eduroom" />
            <Route path="eduguide" />
            <Route path="diagnosis/*" element={<Now />}/>
            <Route path="study/*" element={<AboutCompany />}/>
            <Route path="chemistory" />
            <Route path="mentoring" />
            <Route path="board" />
          </Route>
          <Route path="/chemiverseOnUp" element={<OnAndUp />} />
          <Route path="/chemiverseOnUp/login" element={<Login setLoginAuth={setLoginAuth} />} />
          <Route path="/chemiverseOnUp/login-search" element={<LoginSearch />} />

          <Route path="/chemiverseOnUp/profile" element={<Profile />} />
          <Route path="/chemiverseOnUp/tab" element={<TabBtnMenu />} />

        </Routes>
      </BrowserRouter>
      <div className="search-box">
        <input type="text" class="search-txt" name="" placeholder="Type to search" />
        <div class="search-btn">
          <FiSearch />
        </div>
      </div>
    </div>
  )
}

export default App;
