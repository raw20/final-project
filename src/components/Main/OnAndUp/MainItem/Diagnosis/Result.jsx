import React, { useState } from 'react';

import { BrowserRouter,Route, Link, Routes } from "react-router-dom";

import BeforeResult from './BeforeResult';
import AfterResult from './AfterResult';

function Result(props) {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="nowContainer">
            <div className="selfTestContainer_title">진단결과 보기</div>
            
            <div className="selfTestContainer_box">
                <div className="selfTestContainer_sidebar">

                    <Link className={`${selectedTab === 0 ? 'active' : ''}`} onClick={() => setSelectedTab(0)} to="/chemiverseOnUp/item/diagnosis/result/before">
                        <button>#사전</button>
                    </Link>
                    <Link className={`${selectedTab === 1 ? 'active' : ''}`} onClick={() => setSelectedTab(1)} to="/chemiverseOnUp/item/diagnosis/result/after">
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