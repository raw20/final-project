import Bo1 from "../MainItem/Board/Bo1";
import Bo2 from "../MainItem/Board/Bo2";
import Chemi01 from "../MainItem/ChemiStory/Chemi01";
import M1 from "../MainItem/Mentoring/M1";
import M2 from "../MainItem/Mentoring/M2";
import M3 from "../MainItem/Mentoring/M3";
import M4 from "../MainItem/Mentoring/M4";
import Now from '../MainItem/Diagnosis/Now';
import Result from '../MainItem/Diagnosis/Result';
import AboutCompany from '../MainItem/Study/AboutCompany';
import PeopleSkill from '../MainItem/Study/PeopleSkill';
import SelfCare from '../MainItem/Study/SelfCare';
import WorkSkill from '../MainItem/Study/WorkSkill';
import EduRoom from './../MainItem/EduRoom/EduRoom';
import EduNotice from './../MainItem/EduGuide/EduNotice';
import EduCalendar from './../MainItem/EduGuide/EduCalendar';

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
    content: [<EduRoom />],
  },
  {
    index: 1,
    content: [<EduNotice />, <EduCalendar />, <M3 />],
  },
  {
    index: 2,
    content: [<Now />, <Result />],
  },
  {
    index: 3,
    content: [<AboutCompany />,  <WorkSkill />, <PeopleSkill />, <SelfCare />],
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
