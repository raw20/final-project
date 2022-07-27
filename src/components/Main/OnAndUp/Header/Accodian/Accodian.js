import React, { useState } from 'react';
import data from '/db/onAndUpMenuData.json';
import AccodianItem from './AccodianItem';
function Accodian() {
	const [questions, setQuestions] = useState(data);

	return (
		<main>
			<div className="container">
				<h3>Questions and answers about login</h3>
				<section className="info">
					{/* 모든 Question component를 map으로 표시하기*/}
					{questions.map(question => {
						return <AccodianItem key={question.id} {...question} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default Accodian;
