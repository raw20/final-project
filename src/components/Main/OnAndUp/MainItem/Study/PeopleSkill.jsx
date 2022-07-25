import React from 'react';

import { Routes, Route, Link } from "react-router-dom";

import PeopleSkillDetail from './PeopleSkillDetail';
import PeopleSkillModuleList from './PeopleSkillModuleList';

function PeopleSkill(props) {
    return (
        <Routes>                       
            <Route path="*" element={<PeopleSkillModuleList />}/>
            {/* <Route path="peopleSkill/:id" element={<PeopleSkillDetail />} /> */}
        </Routes>
    );
}

export default PeopleSkill;