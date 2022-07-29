import React, { useState } from 'react';
import './css/style.css';
import './css/aboutMeDetail.css';
import { MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

function BoardDetail({ posts, setContent }) {
	const favListColor = [{ color: '#ccc' }, { color: '#f20' }];
	const [like, setLike] = useState(0);
	const [select, setSelect] = useState([]);
	const likeValue = useSelector(state => state.item.likes);
	const dispatch = useDispatch();
	function handlerLikeFnc() {
		setLike(like === 0 ? 1 : 0);
	}

	return (
		<div className="aboutMe-wrap">
			<div className="aboutMe-header">
				<div className="aboutMe-category">{posts.category}</div>
				<h1 className="aboutMe-title"> {posts.title}</h1>
			</div>

			<div className="aboutMe-main">
				<div className="aboutMe-sub">
					<p className="aboutMe-date">작성일 : {posts.date}</p>
					<p className="aboutMe-views">조회수 : 0</p>
					<p className="aboutMe-like">좋아요 : {likeValue}</p>
				</div>
				<div className="aboutMe-img">
					<img src={posts.content_img} alt={posts.id} />
					<div className="aboutMe-text">{posts.content_text}</div>
				</div>
			</div>
			<div className="aboutMe-footer">
				<div className="aboutMe-file">첨부파일 {posts.file}</div>
				<button className="notice-btn" onClick={() => setContent(true)}>
					목록보기
				</button>
				<button
					className="notice-btn tab-like"
					onClick={() => {
						!select.includes(posts.id)
							? setSelect(select => [...select, posts.id])
							: setSelect(select.filter(button => button !== posts.id));
						handlerLikeFnc();
					}}
				>
					좋아요
					<MdFavorite className="heart" style={favListColor[likeValue]} />
				</button>
			</div>
		</div>
	);
}

export default BoardDetail;
