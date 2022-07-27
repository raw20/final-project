import Board from './Board';
import AboutMe from './AboutMe';
import QandA from './QandA';

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
		content: [<AboutMe />],
	},
	{
		index: 2,
		content: [<QandA />],
	},
];

export default component;
