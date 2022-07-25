import React from 'react';

import { Routes, Route, Link } from "react-router-dom";

import ModuleList from './ModuleList';

function PeopleSkill(props) {
    return (
        <Routes>                       
            <Route path="*" element={<ModuleList moduleID={2}/>}/>
        </Routes>
    );
}

export default PeopleSkill;