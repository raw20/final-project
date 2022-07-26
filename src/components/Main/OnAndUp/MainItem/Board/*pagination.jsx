import React from "react";
import styled from "styled-components";

const Pagination = ({ total, page, setPage, listPerPage }) => {
  /* 1.props 불러오기 */
  const PagesNum = Math.ceil(total / listPerPage); /* 5.map 돌릴 숫자 정의 Math.ceil : 나눗셈 올림 */
  const pagesNumArray = new Array(PagesNum); /* 6. Array 생성 */
  /* pagesNumArray.fill() 7. .fill : array 채워주는 매서드 ('a',5,10):5번부터 10번까지 a로 채움(나머지는 undefined) */
  return (
    <div>
      <PaginationBox>
        <PrevButton
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          이전
        </PrevButton>
        {/* 3. onclick, disabled : 1페이지에 선택 못하도록 설정 */}
        {pagesNumArray.fill().map((ele, i) => {
          /* 4. map 돌리기 */
          return (
            <PageNumButton
              key={i + 1}
              onClick={() => {
                setPage(i + 1);
              }} /* 8.key값, 클릭함수 */
              className={page === i + 1 ? "active" : null} /* 9.classname */
            >
              {i + 1}
            </PageNumButton>
          );
        })}
        <NextButton
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page === PagesNum}
        >
          이후
        </NextButton>
      </PaginationBox>
    </div>
  );
}; /* 2. 구조 */

export default Pagination;

const PaginationBox = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`;
const PrevButton = styled.button`
  border-radius: 0.25rem;
  padding: 0.25rem 0.375rem;
  color: #fff;
  width: 40px;
  height: 24px;
  background-color: #cda8a8;
  font-size: 0.75rem;
  &:hover {
    cursor: pointer;
    color: #f23;
  }
  &[disabled] {
    background-color: #e0e0e0;
    color: #fff;
  }
`;
const NextButton = styled(PrevButton)``;
const PageNumButton = styled.button`
  margin: 10px;
  color: #333;
  font-size: 1rem;
  &.active {
    font-weight: bold;
  }
`;
