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
import AboutCompanyConnect from "./components/Main/ConnectWith/MainItem/AboutCompany/AboutCompany";
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
import EduRoom from "./components/Main/OnAndUp/MainItem/EduRoom/EduRoom";
import EduNotice from "./components/Main/OnAndUp/MainItem/EduGuide/EduNotice";
import EduCalendar from "./components/Main/OnAndUp/MainItem/EduGuide/EduCalendar";
import Result from "./components/Main/OnAndUp/MainItem/Diagnosis/Result";
import WorkSkill from "./components/Main/OnAndUp/MainItem/Study/WorkSkill";
import PeopleSkill from "./components/Main/OnAndUp/MainItem/Study/PeopleSkill";
import SelfCare from "./components/Main/OnAndUp/MainItem/Study/SelfCare";
import EduLecturer from "./components/Main/OnAndUp/MainItem/EduGuide/EduLecturer";
import Chemi1 from "./components/Main/OnAndUp/MainItem/ChemiStory/Chemi1";
import Chemi2 from "./components/Main/OnAndUp/MainItem/ChemiStory/Chemi2";
import Chemi3 from "./components/Main/OnAndUp/MainItem/ChemiStory/Chemi3";
import Chemi4 from "./components/Main/OnAndUp/MainItem/ChemiStory/Chemi4";
import HeaderTab from "./components/Main/ConnectWith/SubItem/HeaderTab";
import Board from "./components/Main/OnAndUp/MainItem/Board/Board";
import Idea from "./components/Main/OnAndUp/MainItem/Board/Idea";
import M1 from "./components/Main/OnAndUp/MainItem/Mentoring/M1";
import M2 from "./components/Main/OnAndUp/MainItem/Mentoring/M2";
import M3 from "./components/Main/OnAndUp/MainItem/Mentoring/M3";
import Footer from "./components/Footer/Footer";
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
            <Route path="aboutCompany" element={<AboutCompanyConnect />} />
            <Route path="preparations" element={<Preparations />} />
            <Route path="noticeBoard/" element={<NoticeBoard />}>
              <Route path="notice" element={<Notice />} />
              <Route path="aboutme" element={<AboutMe />} />
              <Route path="qna" element={<QandA />} />
            </Route>
          </Route>
          <Route path="/headertab" element={<HeaderTab />} />

          <Route path="/" element={<ConnectWith />} />
          <Route path="/chemiverseOnUp/:id" element={<OnAndUpItemForm />}>
            {/* 교육장이동 */}
            <Route path="eduroom/0" element={<EduRoom />} />
            {/* 교욱안내 */}
            <Route path="eduguide/0" element={<EduNotice />} />
            <Route path="eduguide/1" element={<EduCalendar />} />
            <Route path="eduguide/2" element={<EduLecturer />} />
            {/* 진단 */}
            <Route path="diagnosis/0/*" element={<Now />} />
            <Route path="diagnosis/1/*" element={<Result />} />
            {/* 역량학습 */}
            <Route path="study/0/*" element={<AboutCompany />} />
            <Route path="study/1/*" element={<WorkSkill />} />
            <Route path="study/2/*" element={<PeopleSkill />} />
            <Route path="study/3/*" element={<SelfCare />} />
            {/* 케미스토리 */}
            <Route path="chemistory/0" element={<Chemi1 />} />
            <Route path="chemistory/1" element={<Chemi2 />} />
            <Route path="chemistory/2" element={<Chemi3 />} />
            <Route path="chemistory/3" element={<Chemi4 />} />

            {/* 멘토링 */}
            <Route path="mentoring/0" element={<M1 />} />
            <Route path="mentoring/1" element={<M2 />} />
            <Route path="mentoring/2" element={<M3 />} />
            {/* 게시판 */}
            <Route path="board/0" element={<Board />} />
            <Route path="board/1" element={<Idea />} />
          </Route>
          <Route path="/chemiverseOnUp" element={<OnAndUp />} />

          <Route
            path="/chemiverseOnUp/login"
            element={<Login setLoginAuth={setLoginAuth} />}
          />
          <Route
            path="/chemiverseOnUp/login-search"
            element={<LoginSearch />}
          />
          <Route path="/chemiverseOnUp/profile" element={<Profile />} />
          <Route path="/chemiverseOnUp/tab" element={<TabBtnMenu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="search-box">
        <input
          type="text"
          className="search-txt"
          name=""
          placeholder="Type to search"
        />
        <div className="search-btn">
          <FiSearch />
        </div>
      </div>
    </div>
  );
}

export default App;
