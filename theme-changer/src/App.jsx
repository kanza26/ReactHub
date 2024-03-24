import './App.css';
import ThemeBtn from './components/Toggle-Button.jsx';
import Card from './components/Card.jsx';
import { ContextProvider } from './context/themeContext.js';
import { useEffect, useState } from 'react';

function App() {
  const [ThemeMode, setThemeMode] = useState("light");
  

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(ThemeMode);
  },[ThemeMode])

  return (
    <ContextProvider value={{ ThemeMode, lightTheme, darkTheme }}>
      <ThemeBtn />
      <Card />
    </ContextProvider>
  );
}
export default App;

