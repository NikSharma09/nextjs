"use client";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

const theme = {
  light: {
    primary: "#000",
    text: "#fff",
    secondary: "#fff",
  },
  dark: {
    primary: "#fff",
    text: "#000",
    secondary: "#000",
  },
};

export const ThemeContext = React.createContext({});

export default function Provider({ children }: { children: React.ReactNode }) {
  const [isLightTheme, setLightTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ isLightTheme, setLightTheme }}>
      <ThemeProvider theme={isLightTheme ? theme.light : theme.dark}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
