import React from "react";

const TablePagenation = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="table_pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page_item">
              <button onClick={() => paginate(number)} className="page_link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TablePagenation;
