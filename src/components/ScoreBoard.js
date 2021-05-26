import { useSelector } from "react-redux";
const ScoreBoard = () => {
  const name = useSelector((store) => store.user);
  return <div>{name}</div>;
};

export default ScoreBoard;
