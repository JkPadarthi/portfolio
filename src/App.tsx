import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import theme from "./components/styles/themes";
import BootSequence from "./components/BootSequence";
import MindMirror from "./components/projects/MindMirror";

export const themeContext = createContext<((theme: any) => void) | null>(null);

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(theme.dark);
  const [showBoot, setShowBoot] = useState(true);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <themeContext.Provider value={setCurrentTheme}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                showBoot ? (
                  <BootSequence onComplete={() => setShowBoot(false)} />
                ) : (
                  <Terminal />
                )
              }
            />
            <Route path="/projects/mind-mirror" element={<MindMirror />} />
          </Routes>
        </Router>
      </themeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
