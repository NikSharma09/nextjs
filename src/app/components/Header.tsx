"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../Provider";

export default function Header() {
  const { isLightTheme, setLightTheme } = useContext(ThemeContext);

  return (
    <header>
      <button
        onClick={() => {
          setLightTheme(!isLightTheme);
        }}
      >
        Toggle Theme
      </button>
    </header>
  );
}
