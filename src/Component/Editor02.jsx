import { useParams } from "react-router-dom";

const Editor02 = () => {
  const params = useParams();
  console.log(params);
  const{id} = useParams();
  return(
    <div className="Editor02">
      <h1>Editor</h1>
      <h1>{id}번 내용을 보여줍니다</h1>
    </div>
  );
}

export default Editor02;