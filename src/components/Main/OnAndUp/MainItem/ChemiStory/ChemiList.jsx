import ChemiItem from './ChemiItem.jsx'
import './css/chemi.css'
const DiaryList = ({diaryList,onRemove,onEdit}) =>{
console.log(diaryList)
    return (
    <div className="DiaryList">
        <h2>Chemi 리스트</h2>
        <h4>{diaryList.length}개의 리스트가 있습니다.</h4>
     <div>
        {diaryList.map((it) =>(
            <ChemiItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
           
        ))}
     </div>    
    </div>
    );
};
DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;