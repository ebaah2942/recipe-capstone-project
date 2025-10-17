import { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";

export const useDarkMode = () => useContext(DarkModeContext);
