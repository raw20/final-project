import React,{ useEffect } from 'react';

import { HashRouter,Route, Link, Routes } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"; 

import 'swiper/css/navigation';
import SwiperCore, { Navigation } from "swiper/core";

import "swiper/css"; 

function PeopleSkillDetail() {

    SwiperCore.use([Navigation]);

    return (
        <div className="detail_container">
            
        </div>
    );
}

export default PeopleSkillDetail;