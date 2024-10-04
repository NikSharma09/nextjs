"use client";
import styled from "styled-components";
import StyledComp1 from "../../components/StyledComp1";
import StyledButton from "../../components/StyledButton";

const NormalLink = styled.a`
  color: blue;
  text-decoration: underline;
`;

const FancyLink = styled(NormalLink)`
  display: inline-block;
  background-color: lightblue;
  padding: 5px;
`;

export default function StyledComp() {
  return (
    <StyledComp1>
      <h1>Styled Components</h1>
      <p>
        Styled Components is a CSS-in-JS library that allows you to write styles
        directly in your <span>JavaScript</span> files.
      </p>
      <p>
        This allows you to write your styles in a way that is scoped to the
        component, and can be easily shared across components.
      </p>
      <StyledButton btn-type="primary">Click me</StyledButton>
      <StyledButton btn-type="secondary">Cancel me</StyledButton>
      <NormalLink href="https://styled-components.com/">
        Styled Components
      </NormalLink>
      <FancyLink href="https://styled-components.com/">Fancy Link</FancyLink>
    </StyledComp1>
  );
}
