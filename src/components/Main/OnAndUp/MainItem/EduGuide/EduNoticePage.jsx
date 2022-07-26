import React from 'react';


const EduNoticePage = ({total,page,setPage,listPerPage}) => {
  const PagesNum = Math.ceil(total/listPerPage);
  const pagesNumArray = new Array(PagesNum);
  return (
      <div className='edu_pagination'>
        <button className='PrevButton' onClick={()=>{setPage(page-1)}} disabled={page === 1}>이전</button>
        {
          pagesNumArray.fill().map((ele,i)=>{
            return(
              <button 
              key={i+1}
              onClick={()=>{setPage(i+1)}}
              className={page === i + 1 ? "page_link active" : "page_link"}
              >
                {i + 1}
              </button>
            )
          })
        }
        <button className='NextButton' onClick={()=>{setPage(page+1)}} disabled={page === PagesNum}>이후</button>
      </div>
  );
};


export default EduNoticePage;