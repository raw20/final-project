import ChemiItem2 from './ChemiItem2.jsx'
import './css/chemi.css'
const DiaryList2 = ({diaryList,onRemove,onEdit}) =>{
console.log(diaryList)
    return (
    <div className="DiaryList">
        <h2>목표리스트</h2>
        <h4>{diaryList.length}개의 목표가 있습니다.</h4>
     <div>
        {diaryList.map((it) =>(
            <ChemiItem2 key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
           
        ))}
     </div>    
    </div>
    );
};
DiaryList2.defaultProps = {
    diaryList: [],
}

export default DiaryList2;