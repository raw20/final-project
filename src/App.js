import "./App.css";
import ConnectWith from "./components/Main/ConnectWith/Main/ConnectWith";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Main/ConnectWith/MainItem/Welcome/Welcome";
import CompanyIntro from "./components/Main/ConnectWith/MainItem/CompayIntro/CompanyIntro";
import Preparations from "./components/Main/ConnectWith/MainItem/Preparations/Preparations";
import NoticeBoard from "./components/Main/ConnectWith/MainItem/NoticeBoard/NoticeBoard";
import OnAndUp from "./components/Main/OnAndUp/Main/OnAndUp";
import EduRoom from "./components/Main/OnAndUp/MainItem/EduRoom/EduRoom";
import EduGudie from "./components/Main/OnAndUp/MainItem/EduGuide/EduGudie";
import Diagnosis from "./components/Main/OnAndUp/MainItem/Diagnosis/Diagnosis";
import Study from "./components/Main/OnAndUp/MainItem/Study/Study";
import ChemiStory from "./components/Main/OnAndUp/MainItem/ChemiStory/ChemiStory";
import Mentoring from "./components/Main/OnAndUp/MainItem/Mentoring/Mentoring";
import Board from "./components/Main/OnAndUp/MainItem/Board/Board";
import Login from "./components/Main/OnAndUp/SideItem/Login/Login";
import Mypage from "./components/Main/OnAndUp/SideItem/MyPage/Mypage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectWith />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/companyInfo" element={<CompanyIntro />} />
          <Route path="/preparations" element={<Preparations />} />
          <Route path="/noticeBoard" element={<NoticeBoard />} />
          <Route path="/chemiverseOnUp" element={<OnAndUp />} />
          <Route path="/chemiverseOnUp/eduroom" element={<EduRoom />} />
          <Route path="/chemiverseOnUp/eduguide" element={<EduGudie />} />
          <Route path="/chemiverseOnUp/diagnosis" element={<Diagnosis />} />
          <Route path="/chemiverseOnUp/study" element={<Study />} />
          <Route path="/chemiverseOnUp/chemistory" element={<ChemiStory />} />
          <Route path="/chemiverseOnUp/mentoring" element={<Mentoring />} />
          <Route path="/chemiverseOnUp/board" element={<Board />} />
          <Route path="/chemiverseOnUp/login" element={<Login />} />
          <Route path="/chemiverseOnUp/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
