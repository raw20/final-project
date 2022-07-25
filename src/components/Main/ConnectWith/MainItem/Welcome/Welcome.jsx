import React from "react";
import "./css/welcome.css";

function Welcome() {
  return (
    <div className="welcome-wrap">
      <div className="welcome-content">
        환영합니다!
        <br />
        입사 전, Connect With를 통해 엑스퍼트 컨설팅의 일원으로서 첫 걸음을
        준비해보세요.
        <br />
        입사 당일 받게 될 사번으로 On&Up에 접속할 수 있습니다.
      </div>
      <div className="welcome-video-area">
        <h1 className="welcome-video-title">CEO Welcome Message</h1>
        <iframe
          className="welcome-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XFc-p5Rw8Ao"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Welcome;
