import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// title,info 표시하기
const AccodianItem = ({ title, info }) => {
	// info를 클릭시에 볼수있도록 버튼 만들기
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* 버튼 클릭시 setShowInfo보이기 : useState(false) + (!showInfo) = true */}
				<button className="btn" onClick={() => setShowInfo(!showInfo)}>
					{/* showInfo가 true라면 -표시 , false라면 +표시 */}
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && <p>{info}</p>}
		</article>
	);
};

export default AccodianItem;
