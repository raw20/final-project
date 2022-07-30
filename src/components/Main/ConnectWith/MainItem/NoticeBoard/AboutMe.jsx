import React, { useState, useEffect } from "react";
import "./css/aboutMe.css";
import SubmitBtn from "./SubmitBtn";
import AboutMeTable from "./AboutMeTable";
import AboutMeWrite from "./AboutMeWrite";
import { useDispatch, useSelector } from "react-redux";
import { getLike } from "../../../../../app/detailSlice";
import { searchData } from "../../../../../app/searchTableSlice";
import { useLocation } from "react-router";

function AboutMe() {
  const listdata = useSelector((state) => state.item);
  const [writer, setWriter] = useState(false);
  const [aboutMetitle, setAboutMeTitle] = useState("");
  const [aboutWriter, setAboutWriter] = useState("");
  const [aboutMeContents, setAboutMeContents] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/3/noticeBoard/aboutme") {
      dispatch(searchData([]));
    }
    dispatch(getLike());
  }, []);

  return (
    <>
      {!writer ? (
        <div className="aboutMe_area">
          <AboutMeTable
            posts={listdata.data}
            writer={writer}
            setWriter={setWriter}
          />
        </div>
      ) : (
        <div className="aboutMe_area">
          <AboutMeWrite
            aboutMetitle={aboutMetitle}
            setAboutMeTitle={setAboutMeTitle}
            aboutMeContents={aboutMeContents}
            setAboutMeContents={setAboutMeContents}
            aboutWriter={aboutWriter}
            setAboutWriter={setAboutWriter}
          />
          <SubmitBtn
            writer={writer}
            setWriter={setWriter}
            aboutMetitle={aboutMetitle}
            setAboutMeTitle={setAboutMeTitle}
            aboutMeContents={aboutMeContents}
            setAboutMeContents={setAboutMeContents}
            aboutWriter={aboutWriter}
            setAboutWriter={setAboutWriter}
            posts={listdata.data}
          />
        </div>
      )}
    </>
  );
}

export default AboutMe;
