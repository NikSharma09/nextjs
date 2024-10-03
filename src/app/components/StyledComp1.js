import styled from "styled-components";

const StyledCompo1 = styled.div`
  background-color: yellow;
  margin: 20px;

  h1 {
    font-weight: bold;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 10px 0;

    span {
      color: red;
    }
  }

  @media (max-width: 767px) {
    background-color: lightblue;
  }
`;

export default StyledCompo1;
