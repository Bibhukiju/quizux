import { useSelector } from "react-redux";
const QuestionBoard = () => {
  const numQuest = useSelector((store) => store.quizSetup);
  return <div>{numQuest.category}</div>;
};
export default QuestionBoard;
