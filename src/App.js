import "./App.css";
import ConnectWith from "./components/Main/ConnectWith/Main/ConnectWith";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Main/ConnectWith/MainItem/Welcome/Welcome";
import CompanyIntro from "./components/Main/ConnectWith/MainItem/CompayIntro/CompanyIntro";
import Preparations from "./components/Main/ConnectWith/MainItem/Preparations/Preparations";
import NoticeBoard from "./components/Main/ConnectWith/MainItem/NoticeBoard/NoticeBoard";
import OnAndUp from "./components/Main/OnAndUp/Main/OnAndUp";
import Login from "./components/Main/OnAndUp/SideItem/Login/Login";
import Mypage from "./components/Main/OnAndUp/SideItem/MyPage/Mypage";
import ItemForm from "./components/Main/OnAndUp/Main/ItemForm";
import Header from "./components/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header auth={auth} />
        <Routes>
          <Route
            path="/"
            element={<ConnectWith auth={auth} setAuth={setAuth} />}
          />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/companyInfo" element={<CompanyIntro />} />
          <Route path="/preparations" element={<Preparations />} />
          <Route path="/noticeBoard" element={<NoticeBoard />} />
          <Route
            path="/chemiverseOnUp"
            element={<OnAndUp auth={auth} setAuth={setAuth} />}
          />
          <Route path="/chemiverseOnUp/item">
            <Route
              path="/chemiverseOnUp/item/:address"
              element={<ItemForm />}
            />
          </Route>
          <Route path="/chemiverseOnUp/login" element={<Login />} />
          <Route path="/chemiverseOnUp/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
