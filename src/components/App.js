import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";
const GlobalStyle = createGlobalStyle`
  body{
    background:white;
    min-height: 100vh;
    margin:0;
    color:black;
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
