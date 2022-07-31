import Board from "./Board";
import Idea from "./Idea";

/*
 index : 0 = 공지사항
 index : 1 = 자기소개
 index : 2 = Q & A

 */
const component = [
  {
    index: 0,
    content: [<Board />],
  },
  {
    index: 1,
    content: [<Idea />],
  },
];

export default component;
