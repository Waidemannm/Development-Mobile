import { createContext,useContext,useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState("light");

    const alterarTema = ()=>{
        setTheme((prev) => (prev === "light"? "dark" : "light"));
    }

    const light = {
        bg: "#c2c2c2",
        txt: "#121111"
    }
    const dark = {
        bg: "#565353",
        txt: "#ffff"
    }

    return(
        <ThemeContext.Provider value={{theme, alterarTema, light, dark}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () =>{
    return useContext(ThemeContext);
}