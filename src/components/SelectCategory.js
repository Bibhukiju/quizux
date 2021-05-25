import styled from "styled-components";
import { getUserName } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setqnum, startQuiz } from "../actions/quizSetup";

const SelectCategory = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.quizSetup.category);
  const num = useSelector((state) => state.quizSetup.numquest);
  let numquest = 10;
  const numChangeHanlder = (e) => {
    numquest = e.target.value;
    dispatch(setqnum({ numquest }));
  };
  const start = () => {
    if (num && selected) {
      dispatch(startQuiz({ isStarted: true }));
    }
  };
  return (
    <StyledCategory>
      <div className="backButton">
        <button
          onClick={() => {
            dispatch(getUserName({ name: "" }));
            dispatch(setCategory({ category: "" }));
          }}
        >
          Back
        </button>
      </div>

      <center>
        <h1>Select the category </h1>
      </center>
      <div className="fields">
        <div
          className={selected === "Puzzle" ? "box selected" : "box"}
          onClick={() => {
            dispatch(setCategory({ category: "Puzzle" }));
          }}
        >
          <h2>Puzzles</h2>
        </div>
        <div
          className={selected === "Science" ? "box selected" : "box"}
          onClick={() => {
            console.log("hello");
            dispatch(setCategory({ category: "Science" }));
          }}
        >
          <h2>Science</h2>
        </div>
        <div
          className={selected === "Maths" ? "box selected" : "box"}
          onClick={() => {
            console.log("hello");
            dispatch(setCategory({ category: "Maths" }));
          }}
        >
          <h2>Maths</h2>
        </div>
        <div
          className={selected === "GK" ? "box selected" : "box"}
          onClick={() => {
            dispatch(setCategory({ category: "GK" }));
          }}
        >
          <h2>General Knowledge</h2>
        </div>
      </div>
      <div className="numSelector">
        <h2>Select the number of question you want</h2>
        <div className="choices">
          <div>
            <input
              type="radio"
              id="10"
              name="gender"
              value="10"
              onChange={numChangeHanlder}
            />
            <label htmlFor="10">१०</label>
          </div>
          <div>
            <input
              type="radio"
              id="20"
              name="gender"
              value="20"
              onChange={numChangeHanlder}
            />
            <label htmlFor="20">२०</label>
          </div>
          <div>
            <input
              type="radio"
              id="25"
              name="gender"
              value="25"
              onChange={numChangeHanlder}
            />
            <label htmlFor="25">२५</label>
          </div>
        </div>
      </div>
      <button onClick={start}>Start</button>
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
  .selected {
    border: 3px solid #008080;
  }
  .numSelector {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    h2 {
      text-align: center;
    }
  }
  .choices {
    display: flex;
    margin-top: 15px;
    justify-content: space-evenly;
    flex-direction: row;
    min-width: 350px;
  }
  @media screen and (max-width: 968px) {
    .box {
      width: 18rem;
      height: 3.5rem;
      margin-top: 0px;
    }
    .numSelector {
      flex-direction: column;
    }
  }
`;

export default SelectCategory;
