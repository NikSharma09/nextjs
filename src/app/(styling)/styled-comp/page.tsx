"use client";

import StyledComp1 from "../../components/StyledComp1";
import StyledButton from "../../components/StyledButton";

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
    </StyledComp1>
  );
}
