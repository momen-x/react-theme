import { createContext } from "react";

interface IFirstContext {
  theme: string;
  toggleTheme: (theme: string) => void;
}

export const FirstContext = createContext<IFirstContext>({
  theme: "light",
  toggleTheme: () => {},
});