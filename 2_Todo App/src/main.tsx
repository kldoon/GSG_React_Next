import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createContext, useEffect, useState } from 'react'


interface IContextState {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const storedTheme = localStorage.getItem('theme');
const DEFAULT_THEME = storedTheme || 'light';

export const ThemeContext = createContext<IContextState>({ theme: DEFAULT_THEME, setTheme: () => { } });

const WrapperComponent = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <App />
    </ThemeContext.Provider>
  )
}

createRoot(document.getElementById('root')!).render(
  <WrapperComponent />
);