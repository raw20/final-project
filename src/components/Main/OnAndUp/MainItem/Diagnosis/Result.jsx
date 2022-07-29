import React, { useEffect, useState } from 'react';
import { useLocation, Route, Link, Routes } from "react-router-dom";

import BeforeResult from './BeforeResult';
import AfterResult from './AfterResult';

function Result(props) {
    const [selectedTab, setSelectedTab] = useState(0);
    const { pathname, state } = useLocation(0);
    useEffect(() => {
        if (pathname.indexOf('after') > 0) { //path에 after가 있으면 사후가 selected 되었다고 상태관리
            setSelectedTab(1)
        }  

    },[])

    return (
        <div className="nowContainer">
            <div className="selfTestContainer_title">진단결과 보기</div>
            
            <div className="selfTestContainer_box">
                <div className="selfTestContainer_sidebar">

                    <Link className={`${selectedTab === 0 ? 'active' : ''}`} onClick={() => setSelectedTab(0)} to="result/before">
                        <button>#사전</button>
                    </Link>
                    <Link className={`${selectedTab === 1 ? 'active' : ''}`} onClick={() => setSelectedTab(1)} to="result/after">
                        <button>#사후</button>
                    </Link>
                    
                </div>
                <div className="selfTestContainer_content">
                    <Routes>
                        <Route path="*" element={<BeforeResult />} />
                        <Route path="result/before" element={<BeforeResult />} />
                        <Route path="result/after" element={<AfterResult />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Result;