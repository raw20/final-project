import React, { useState } from 'react';
import './css/style.css';
import './css/aboutMeDetail.css';
import { MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../../../../../app/detailSlice';

function AboutMeDetail({ posts, setContent, id }) {
	const favListColor = [{ color: '#ccc' }, { color: '#f20' }];
	const [likes, setLikes] = useState('0');
	const likeValue = useSelector(state => state.item.likes);
	const dispatch = useDispatch();
	function handlerLikeFnc(e) {
		e.preventDefault();
		setLikes(likes === '0' ? '1' : '0');
		dispatch(addLike({ id, like: likes }));
	}
	console.log('좋아요 : ', likes, posts.like);
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
					<p className="aboutMe-like">좋아요 : {posts.like}</p>
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
				<button className="notice-btn tab-like" onClick={handlerLikeFnc}>
					좋아요
					<MdFavorite className="heart" style={favListColor[likes]} />
				</button>
			</div>
		</div>
	);
}

export default AboutMeDetail;
