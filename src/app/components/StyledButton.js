import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(prop) =>
    prop["btn-type"] === "primary" ? "blue" : "red"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default StyledButton;
