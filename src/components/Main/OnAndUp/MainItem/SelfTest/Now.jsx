import React, { useState } from 'react';
import { BrowserRouter,Route, Link, Routes } from "react-router-dom";

import './css/selfTest.scss';

import BeforeTest from './BeforeTest';
import AfterTest from './AfterTest';

function Now(props) {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="nowContainer">
            <div className="selfTestContainer_title">현재상태 점검하기</div>
            <div className="selfTestContainer_box">
            <div className="selfTestContainer_sidebar">

                <Link className={`${selectedTab === 0 ? 'active' : ''}`} onClick={() => setSelectedTab(0)} to="/chemiverseOnUp/item/diagnosis/now/before">
                    <button>#사전</button>
                </Link>
                <Link className={`${selectedTab === 1 ? 'active' : ''}`} onClick={() => setSelectedTab(1)} 
                    //   to={'/chemiverseOnUp/item/diagnosis/now/after'}
                    //   state={{
                    //     id: item.id,
                    //     menu: item.menu,
                    //     dep: item.dep,
                    //     address: item.address,
                    //     explanation: item.explanation,
                    //   }}
                      to="/chemiverseOnUp/item/diagnosis/now/after">
                    <button>#사후</button>
                </Link>

            </div>
                <div className="selfTestContainer_content">

                    <Routes>
                        <Route path="*" element={<BeforeTest />} />
                        <Route path="now/before" element={<BeforeTest />} />
                        <Route path="now/after" element={<AfterTest />} />
                    </Routes>

                </div>
            </div>
            
        </div>
    );
}

export default Now;