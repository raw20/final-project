import React, { useState, useEffect } from "react";
import "./css/aboutMe.css";
import SubmitBtn from "./SubmitBtn";
import AboutMeTable from "./AboutMeTable";
import AboutMeWrite from "./AboutMeWrite";
import { useDispatch, useSelector } from "react-redux";
import { getLike } from "../../../../../app/detailSlice";

function AboutMe() {
  const postData = useSelector((state) => state.item);

  console.log(postData.data);
  const [writer, setWriter] = useState(false);
  const [aboutMetitle, setAboutMeTitle] = useState("");
  const [aboutMeName, setAboutMeName] = useState("");
  const [aboutMeContents, setAboutMeContents] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLike());
  }, []);

  return (
    <>
      {!writer ? (
        <div className="aboutMe_area">
          <AboutMeTable
            posts={postData.data}
            writer={writer}
            setWriter={setWriter}
          />
        </div>
      ) : (
        <div className="aboutMe_area">
          <AboutMeWrite
            aboutMetitle={aboutMetitle}
            setAboutMeTitle={setAboutMeTitle}
            aboutMeName={aboutMeName}
            setAboutMeName={setAboutMeName}
            aboutMeContents={aboutMeContents}
            setAboutMeContents={setAboutMeContents}
          />
          <SubmitBtn
            writer={writer}
            setWriter={setWriter}
            aboutMetitle={aboutMetitle}
            aboutMeName={aboutMeName}
            aboutMeContents={aboutMeContents}
            setAboutMeTitle={setAboutMeTitle}
            setAboutMeName={setAboutMeName}
            setAboutMeContents={setAboutMeContents}
          />
        </div>
      )}
    </>
  );
}

export default AboutMe;
