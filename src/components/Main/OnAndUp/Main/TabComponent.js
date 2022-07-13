import Bo1 from "../MainItem/Board/Bo1";
import Bo2 from "../MainItem/Board/Bo2";
import M1 from "../MainItem/Mentoring/M1";
import M2 from "../MainItem/Mentoring/M2";
import M3 from "../MainItem/Mentoring/M3";
import M4 from "../MainItem/Mentoring/M4";
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
    content: [<Bo1 />, <M2 />, <Bo2 />, <M3 />],
  },
  {
    index: 5,
    content: [<M1 />, <M2 />, <M3 />, <M4 />],
  },
  {
    index: 6,
    content: [<Bo1 />, <Bo2 />],
  },
];

export default component;
