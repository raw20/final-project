import Bo1 from "../MainItem/Board/Bo1";
import Bo2 from "../MainItem/Board/Bo2";
import Chemi01 from "../MainItem/ChemiStory/Chemi01";
import M1 from "../MainItem/Mentoring/M1";
import M2 from "../MainItem/Mentoring/M2";
import M3 from "../MainItem/Mentoring/M3";
import M4 from "../MainItem/Mentoring/M4";

/*
 index : 0 = 교육장 이동
 index : 1 = 교욱 안내
 index : 2 = 진단
 index : 3 = 역량학습
 index : 4 = 케미스토리
 index : 5 = 멘토링
 index : 6 = 게시판
 */
const component = [
  {
    index: 0,
    content: [<M1 />],
  },
  {
    index: 1,
    content: [<M1 />, <M2 />, <M3 />],
  },
  {
    index: 2,
    content: [<Bo2 />, <M2 />],
  },
  {
    index: 3,
    content: [<M1 />, <M2 />, <M3 />, <M4 />],
  },
  {
    index: 4,
    content: [<Chemi01 />, <M2 />, <Bo2 />, <M3 />],
  },
  {
    index: 5,
    content: [<M1 />, <M2 />, <M3 />],
  },
  {
    index: 6,
    content: [<Bo1 />, <Bo2 />],
  },
];

export default component;
