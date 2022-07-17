import "./App.css";
import ConnectWith from "./components/Main/ConnectWith/Main/ConnectWith";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnAndUp from "./components/Main/OnAndUp/Main/OnAndUp";
import Login from "./components/Main/OnAndUp/SideItem/Login/Login";
import Mypage from "./components/Main/OnAndUp/SideItem/MyPage/Mypage";
import ItemForm from "./components/Main/OnAndUp/Main/ItemForm";
import ConnectWthItemForm from "./components/Main/ConnectWith/Main/ItemForm";
import Header from "./components/Header/Header";
import { useState } from "react";
function App() {
  const [main, setMain] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Header main={main} />
        <Routes>
          <Route
            path="/"
            element={<ConnectWith main={main} setMain={setMain} />}
          />
          <Route path="/item">
            <Route
              path="/item/:address"
              element={<ConnectWthItemForm />}
            ></Route>
          </Route>
          <Route
            path="/chemiverseOnUp"
            element={<OnAndUp main={main} setMain={setMain} />}
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
