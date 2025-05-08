import './App.css';
import ImgExam from './Component/ImgExam';
import Header from './Component/Header';
import Editor from './Component/Editor';
import List from './Component/List';
import { useRef, useState } from 'react';


const mockTodo = [
{  id:0,isDone:false,content:"React 공부하기",date:new Date().getTime() },
{  id:1,isDone:false,content:"빨래하기",date:new Date().getTime() },
{  id:2,isDone:false,content:"노래 연습하기",date:new Date().getTime() }
];


function App() {
  const[todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id:idRef.current++,
      content:content,
      isDone:false,
      createDate: new Date().getTime()
    };

    setTodo([newItem,...todo]);
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item)=>{
        if(item.id === targetId){
          return {...item, isDone: !item.isDone}
        }else{
          return item;
        }
      })
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId));
  };

  return (
    <div className='App'>
      <div>
        <ImgExam />
      </div>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
