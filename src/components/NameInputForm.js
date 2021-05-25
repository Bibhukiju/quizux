import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getUserName } from "../actions/user";

const NameInputForm = () => {
  let name = "";
  const dispatch = useDispatch();
  const setName = (e) => {
    e.preventDefault();
    dispatch(getUserName({ name }));
  };
  return (
    <StyledSection>
      <div>
        <center>
          <h2>Enter your name</h2>
        </center>
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            name = e.target.value;
          }}
        />
      </div>
      <button onClick={setName}>Next</button>
    </StyledSection>
  );
};
const StyledSection = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;

  input {
    width: 300px;
    height: 3rem;
    font-size: 3rem;
    margin-top: 1rem;
  }
`;
export default NameInputForm;
