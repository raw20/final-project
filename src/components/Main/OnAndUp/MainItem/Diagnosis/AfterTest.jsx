import React from 'react';

function AfterTest(props) {
    return (
        <>
            <div className="item-form">
                <div className="item-inner">
                <div className="item-location">
                    Chemiverse On&Up ▶  ▶ 
                </div>
                <div className="item-title">진단</div>
                <div className="item-contents">설명</div>
                <ul className="item-btn-area">
                    {
                    // tmpStateDep.map((item, index) => (
                    //     <li
                    //     key={index}
                    //     className="item-btn"
                    //     onClick={() => currentIndex(index)}
                    //     >
                    //     {item}
                    //     </li>
                    //     ))
                    }
                </ul>
                <div className="item-box">
                    <div style={{ padding: 30 }}>
                        사후입니다.
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default AfterTest;