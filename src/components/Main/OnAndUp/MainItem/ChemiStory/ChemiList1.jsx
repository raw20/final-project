import ChemiItem1 from './ChemiItem1.jsx'
import './css/chemi.css'
const DiaryList1 = ({diaryList,onRemove,onEdit}) =>{
console.log(diaryList)
    return (
    <div className="DiaryList">
        <h2>성찰저널 리스트</h2>
        <h4>{diaryList.length}개의 리스트가 있습니다.</h4>
     <div>
        {diaryList.map((it) =>(
            <ChemiItem1 key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
           
        ))}
     </div>    
    </div>
    );
};
DiaryList1.defaultProps = {
    diaryList: [],
}

export default DiaryList1;