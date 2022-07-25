import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import ModuleList from './ModuleList';

function WorkSkill(props) {
    return (
        <>
            <Routes>                       
                <Route path="*" element={<ModuleList moduleID={1} />}/>
            </Routes>
        </>
    );
}

export default WorkSkill;