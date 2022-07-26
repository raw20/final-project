import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const ListTotal = () => {
  const [lists, setLists] = useState([]); /* 1 */
  const LIST_PER_PAGE = 10; /* 6-1. 한장에 보여질 리스트 수 */
  const [page, setPage] = useState(1); /* 6-2 */
  const startNum = (page - 1) * LIST_PER_PAGE; /* 6-3 page=1 startnum=0 10 20 30 */
  const endNum = startNum + LIST_PER_PAGE; /* 6-3 page=1 startnum=0 endNum=10 20 30 40*/
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []); /* 2. 데이터 불러오기 */
  console.log(lists);
  return (
    <div>
      <Title>게시물 목록</Title>
      <Ul>
        {
          [...lists]
            .reverse()
            .slice(startNum, endNum)
            .map(({ id, title, body }) => {
              /* (ele : 데이터 전부 가져옴.) 구조분해할당 : key 이름만 적으면 그 key에 해당하는 값만 받아옴 */
              /* [...lists].reverse() : 배열 거꾸로 */
              /* 6-4 slice() 인덱스번호 앞에서 자름. */
              return (
                <Li>
                  <span className="idName">{id}</span>
                  <span className="listBody">{body}</span>
                </Li>
              );
            }) /* 5. 데이터(list) map 으로 돌리기 */
        }
      </Ul>
      {/* 3. 구조 짜놓기 */}
      <Pagination total={lists.length} page={page} setPage={setPage} listPerPage={LIST_PER_PAGE} />
      {/* 7. pagination 컴포넌트 불러오기, props로 내려주기 */}
    </div>
  );
};

export default ListTotal;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
  color: #b66666;
`;

const Ul = styled.ul`
  font-size: 0.875rem;
  margin: 3rem auto;
  width: 1000px;
`;

const Li = styled.li`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  & > .idName {
    width: 5rem;
    color: #333;
  }
  & > .listBody {
    width: 50rem;
    margin-left: 1.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #888;
    text-align: left;
  }
  & > .listBody:hover {
    color: #000;
    cursor: pointer;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  } /* 4. 스타일 적용 */
`;
