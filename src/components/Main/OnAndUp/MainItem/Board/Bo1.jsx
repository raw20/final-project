import { useState } from "react";

function Bo1() {
  const [boardContent, setBoardContent] = useState({
    title: "",
    content: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <div className="wrap">
      <input className="title-input" type="text" placeholder="제목" onChange={getValue} name="title" />

      {/* <main>
        <div className="title">
          <h2>자유게시판</h2>
          <h3>목적</h3>
        </div>
        <ul className="boxlist">
          <li className="box">
            <p>조직의 성과는 리더가 리더십을 잘 발휘하는 것과 리더의 지휘를 잘 따르고 보좌하는 팔로워십에서 나온다.</p>
          </li>
          <li className="box">
            <p>효과적인 팔로워십을 발휘할 수 있는 능력은 이후 효과적인 리더십을 발휘하는 것의 원천이 된다.</p>
          </li>
          <li className="box">
            <p>적극적이고 주도적인 팔로워십을 발휘함으로써 조직 내 신뢰받는 핵심인재가 된다.</p>
          </li>
        </ul>
        <div className="title">
          <h3>사용방법</h3>
          <div className="box">
            <p>왜 하는가?</p>
          </div>
        </div>
      </main> */}
    </div>
  );
}

export default Bo1;
