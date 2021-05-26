import NameInputForm from "../components/NameInputForm";
import { useSelector } from "react-redux";
import SelectCategory from "../components/SelectCategory";

const EntryPage = () => {
  const name = useSelector((state) => state.user);
  return (
    <div>
      <div>{name === "" ? <NameInputForm /> : <SelectCategory />}</div>
    </div>
  );
};

export default EntryPage;
