import { useSearchParams } from "react-router-dom";

const New = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  return(
    <div className="New">
      <h1>New</h1>
      <h1>이름 : {name}</h1>
      <h1>나이 : {age}</h1>
    </div>
  );
}

export default New;