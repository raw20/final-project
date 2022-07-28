import React, { useEffect, useState } from 'react';
import { useLocation, Route, Link, Routes } from "react-router-dom";

import './css/selfTest.scss';

import BeforeTest from './BeforeTest';
import AfterTest from './AfterTest';
import BeforeResult from './BeforeResult';
import AfterResult from './AfterResult';

function Now(props) {
    const [selectedTab, setSelectedTab] = useState(0);
    const { pathname, state } = useLocation(0);
    useEffect(() => {
        if (pathname.indexOf('after') > 0) { //path에 after가 있으면 사후가 selected 되었다고 상태관리
            setSelectedTab(1)
        }  

    },[])
    console.log('now',state)
console.log('dw')
    return (
        <div className="nowContainer">
            <div className="selfTestContainer_box">
            <div className="selfTestContainer_sidebar">

                <Link className={`${selectedTab === 0 ? 'active' : ''}`} onClick={() => setSelectedTab(0)} to="diagnosis/now/before">
                    <button>#사전</button>
                </Link>
                <Link className={`${selectedTab === 1 ? 'active' : ''}`} onClick={() => setSelectedTab(1)} 
                      to="diagnosis/now/after">
                    <button>#사후</button>
                </Link>

            </div>
                <div className="selfTestContainer_content">

                    <Routes>
                        <Route path="*" element={<BeforeTest />} />
                        <Route path="diagnosis/now/before" element={<BeforeTest />} />
                        <Route path="diagnosis/now/after" element={<AfterTest />} />
                        <Route path="diagnosis/result/before" element={<BeforeResult />} />
                        <Route path="diagnosis/result/after" element={<AfterResult />} />
                    </Routes>

                </div>
            </div>
            
        </div>
    );
}

export default Now;