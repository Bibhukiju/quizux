import styled from "styled-components";
import { getUserName } from "../actions/user";
import { useDispatch } from "react-redux";
import { setCategory } from "../actions/category";

const SelectCategory = () => {
  const dispatch = useDispatch();
  return (
    <StyledCategory>
      <div className="backButton">
        {" "}
        <button
          onClick={() => {
            dispatch(getUserName({ name: "" }));
            dispatch(setCategory({ category: "" }));
          }}
        >
          Back
        </button>
      </div>
      <div>
        <center>
          <h1>Select the category </h1>
        </center>
        <div className="fields">
          <div
            className="box"
            onClick={() => {
              console.log("hello");
              dispatch(setCategory({ category: "Puzzle" }));
            }}
          >
            <h2>Puzzles</h2>
          </div>
          <div className="box">
            <h2>Science</h2>
          </div>
          <div className="box">
            <h2>Maths</h2>
          </div>
          <div className="box">
            <h2>General knowledge</h2>
          </div>
        </div>
      </div>
      <button>Next</button>
    </StyledCategory>
  );
};
const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;
  .fields {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .box {
    height: 10rem;
    width: 30rem;
    background-color: #f0f0f3;
    margin: 2rem;
    box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      transform: scale(0.95);
      transition: all 0.5s ease;
    }
  }
  .backButton {
    width: 100%;
  }
`;

export default SelectCategory;
