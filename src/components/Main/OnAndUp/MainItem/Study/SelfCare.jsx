import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import ModuleList from './ModuleList';

function SelfCare(props) {
    return (
        <>
            <Routes>                       
                <Route path="*" element={<ModuleList moduleID={3} />}/>
            </Routes>
        </>
    );
}

export default SelfCare;