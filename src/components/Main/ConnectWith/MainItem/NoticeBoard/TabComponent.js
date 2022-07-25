import AboutMe from "./AboutMe";
import Notice from "./Notice";
import QandA from "./QandA";

/*
 index : 0 = 공지사항
 index : 1 = 자기소개
 index : 2 = Q & A

 */
const component = [
  {
    index: 0,
    content: [<Notice />],
  },
  {
    index: 1,
    content: [<AboutMe />],
  },
  {
    index: 2,
    content: [<QandA />],
  },
];

export default component;
