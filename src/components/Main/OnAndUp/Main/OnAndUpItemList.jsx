import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAndUp } from '../../../../app/headerStateSlice';

function OnAndUpItemList({ item }) {
	const dispatch = useDispatch();
	return (
		<>
			<Link
				className="main-item-list"
				key={item.id}
				to={`/chemiverseOnUp/${item.id}/${item.onAndUpItemAddress}/0`}
				state={{
					id: item.id,
					menu: item.menu,
					dep: item.dep,
					address: item.address,
					explanation: item.explanation,
					state: item,
				}}
				onClick={() => {
					dispatch(onAndUp('false'));
				}}
			>
				<li className="main-item-list-rectangle">{item.menu}</li>
			</Link>
		</>
	);
}

export default OnAndUpItemList;
