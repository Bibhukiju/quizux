import NameInputForm from "../components/NameInputForm";
import { useSelector } from "react-redux";
import SelectCategory from "../components/SelectCategory";

const EntryPage = () => {
  const name = useSelector((state) => state.user);
  return <div>{name === "" ? <NameInputForm /> : <SelectCategory />}</div>;
};

export default EntryPage;
