import { useContext, createContext } from "react";

const ThemeContext = createContext({
  ThemeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {}
});

export const ContextProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
