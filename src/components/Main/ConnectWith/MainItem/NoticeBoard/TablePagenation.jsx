import React from "react";

const TablePagenation = ({ postsPerPage, totalPosts, paginate, page }) => {
  const PagesNum = Math.ceil(totalPosts/postsPerPage);
  const pagesNumArray = new Array(PagesNum)

  return (
    <div>
      <nav>
        <ul className="table_pagination">
        <button className='PrevButton' onClick={()=>{paginate(page-1)}} disabled={page === 1}>이전</button>
          {
            pagesNumArray.fill().map((ele,i)=>{
              return(
                <button 
                key={i+1}
                onClick={()=>{paginate(i+1)}}
                className={page === i + 1 ? "page_link active" : "page_link"}
                >
                  {i + 1}
                </button>
              )
            })
          }
          <button className='NextButton' onClick={()=>{paginate(page+1)}} disabled={page === PagesNum}>이후</button>
        </ul>
      </nav>
    </div>
  );
};

export default TablePagenation;
