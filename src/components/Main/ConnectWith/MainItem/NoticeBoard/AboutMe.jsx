import React, { useState, useEffect } from "react";
import "./css/aboutMe.css";
import SubmitBtn from "./SubmitBtn";
import AboutMeTable from "./AboutMeTable";
import AboutMeWrite from "./AboutMeWrite";
import { useDispatch, useSelector } from "react-redux";
import { getLike } from "../../../../../app/detailSlice";

function AboutMe() {
  const [posts, setPosts] = useState([]);
  const [copyPosts, setCopyPosts] = useState([]);
  const postData = useSelector((state) => state.item);
  const [writer, setWriter] = useState(false);
  const [aboutMetitle, setAboutMeTitle] = useState("");
  const [aboutMeContents, setAboutMeContents] = useState("");
  const dispatch = useDispatch();
  console.log("pd", postData.data);

  useEffect(() => {
    dispatch(getLike());
  }, []);

  return (
    <>
      {!writer ? (
        <div className="aboutMe_area">
          <AboutMeTable
            posts={postData.data}
            setPosts={setPosts}
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
          />
          <SubmitBtn
            writer={writer}
            setWriter={setWriter}
            aboutMetitle={aboutMetitle}
            setAboutMeTitle={setAboutMeTitle}
            aboutMeContents={aboutMeContents}
            setAboutMeContents={setAboutMeContents}
          />
        </div>
      )}
    </>
  );
}

export default AboutMe;
