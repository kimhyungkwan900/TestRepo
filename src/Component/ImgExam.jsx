import grade01 from "../assets/grade1.png"
import grade02 from "../assets/grade2.png"
import { getGradeImgById } from "../Util/Util";


const ImgExam = () => {

  return(
    <div>
      {/* asset 폴더의 이미지 가져오기 */}
      <img src={grade01}/>
      <img src={grade02}/>
      {/* public폴더의 이미지 가져오기 */}
      <img src="/child.jpg" />
      <img src="/child1.jpg" />
      {/* 이미지 파일을 함수로 정의하서 import로 받기 */}
      <img src={getGradeImgById(1)} />
      <img src={getGradeImgById(2)} />
      <img src={getGradeImgById(3)} />
    </div>
  );
}

export default ImgExam;