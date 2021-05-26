import EntryPage from "./pages/EntryPage";
import "./styles/globalStyles.css";
import { useSelector } from "react-redux";
import QuizPage from "./pages/QuizPage";

const App = () => {
  const isStarted = useSelector((state) => state.quizSetup.isStarted);
  return <div>{isStarted ? <QuizPage /> : <EntryPage />}</div>;
};

export default App;
