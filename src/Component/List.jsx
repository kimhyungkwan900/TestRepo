import { useState } from 'react';
import './Css/List.css'
import Item from './Item';

const List = ({todo, onUpdate, onDelete}) =>{
 const [search, setSearch] = useState("");

 const onChangeSearch = (event) =>{
  setSearch(event.target.value);
 };

 const getSearchResult = () =>{
  return search === "" ? todo : todo.filter((item) => item.content.toLowerCase().includes(search.toLowerCase()));
 };

  return(
    <div className="List">
      <h4>Todo List 🎈</h4>
      <input className="searchbar" placeholder="검색어를 입력해주세요" 
        value = {search} onChange = {onChangeSearch}/>
      <div className="todolist_wrapper">
        {
          getSearchResult().map((item)=>{
            return <Item {...item} key={item.id} onUpdate={onUpdate} onDelete={onDelete}/>;
          })
        }
      </div>
    </div>
  );
};

export default List;