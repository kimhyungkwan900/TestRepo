import grade1 from "../assets/grade1.png"
import grade2 from "../assets/grade2.png"
import grade3 from "../assets/grade3.png"

export const getGradeImgById = (gradeId) =>{
  const targetGradeId = String(gradeId);

  switch(targetGradeId){
    case "1" : return grade1;
    case "2" : return grade2;
    case "3" : return grade3;
    default : return null;
  }
}