import React from "react";

function Pagination({ total, page, setPage, listPerPage }) {
  const pageNum = Math.ceil(total / listPerPage);
  const pageNumArray = new Array(pageNum);

  return (
    <div className="pageNationBox">
      <button
        className="prev"
        onClick={() => setPage(page - 1)}
        disable={page === 1}
      >
        이전
      </button>
      {pageNumArray.fill().map((ele, i) => (
        <button
          id="pageNum"
          className={page === i + 1 ? "active" : null}
          key={i + 1}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="next"
        onClick={() => setPage(page + 1)}
        disable={page === pageNum}
      >
        다음
      </button>
    </div>
  );
}

export default Pagination;
