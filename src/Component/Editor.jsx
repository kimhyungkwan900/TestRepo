import { useRef, useState } from 'react';
import './Css/Editor.css'

const Editor = ({onCreate}) =>{
  const [content, setContent] = useState("");

  const inputRef = useRef();

  //input 에 자료가 입력되면
  const onChangeContent = (event) =>{
    setContent(event.tartget.value);
  };

  //Enter 사용시
  const onKeyDown = (event) =>{
    if(event.keyCode === 13){
      onSubmit();
    }
  };

  //추가 버튼 클릭시
  const onSubmit = () =>{
    if(content === ""){
                        //포커스 
      inputRef.current.focus();
      return;           //종료
    }
    onCreate(content);
    setContent("");     //자료 전송 후 input을 공백으로
  };

  return(
    <div className="Editor">
        <h4>새로운 Todo 작성하기 📋</h4>
      <div className="editor_wrapper">
        <input type="text" value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder='새로운 Todo' />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}

export default Editor;