"use client";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
  border-radius: 10px;
`;

export default function ThemeComp() {
  return (
    <div>
      <h1>Theme Comp</h1>
      <StyledButton>Click me</StyledButton>
    </div>
  );
}
