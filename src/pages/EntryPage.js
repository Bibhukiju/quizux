import NameInputForm from "../components/NameInputForm";
import { useSelector } from "react-redux";
import SelectCategory from "../components/SelectCategory";
import QuizPage from "./QuizPage";

const EntryPage = () => {
  const name = useSelector((state) => state.user);
  const isStarted = useSelector((state) => state.quizSetup.isStarted);
  return (
    <div>
      {isStarted ? (
        <QuizPage />
      ) : (
        <div>{name === "" ? <NameInputForm /> : <SelectCategory />}</div>
      )}
    </div>
  );
};

export default EntryPage;
