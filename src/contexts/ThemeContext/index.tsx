import * as React from 'react';

interface ThemeData {
  id: number;
}
interface ThemeContextType {
  theme: ThemeData | null;
  setTheme: React.Dispatch<React.SetStateAction<ThemeData | null>>;
}
const ThemeContext = React.createContext({} as ThemeContextType);

interface ThemeContextProps {
  children: JSX.Element;
}

const ThemeContextProvider: React.FC<ThemeContextProps> = (props: ThemeContextProps): JSX.Element => {
  const [theme, setTheme] = React.useState<ThemeData | null>(null);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeContextProvider };
