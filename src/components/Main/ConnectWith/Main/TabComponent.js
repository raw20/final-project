import Welcome from "../MainItem/Welcome/Welcome";
import CompanyIntro from "../MainItem/CompayIntro/CompanyIntro";
import Preparations from "../MainItem/Preparations/Preparations";
import NoticeBoard from "../MainItem/NoticeBoard/NoticeBoard";
/*
 index : 0 = 환영인사
 index : 1 = 회사소개
 index : 2 = 준비사항
 index : 3 = 게시판

 */
const component = [
  {
    index: 0,
    content: [<Welcome />],
  },
  {
    index: 1,
    content: [<CompanyIntro />],
  },
];

export default component;
