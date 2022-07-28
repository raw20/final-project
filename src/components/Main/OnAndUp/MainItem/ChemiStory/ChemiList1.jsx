import ChemiItem1 from './ChemiItem1.jsx'
import './css/chemi.css'
const DiaryList1 = ({diaryList,onRemove,onEdit}) =>{
console.log(diaryList)
    return (
    <div className="DiaryList">
        <h2>데이터리스트</h2>
        <h4>{diaryList.length}개의 데이터가 있습니다.</h4>
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