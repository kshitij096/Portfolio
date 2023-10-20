import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div>
        <NavBar />

        <Home />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
