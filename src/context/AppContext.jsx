import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
const [homePage,setHomePage] = useState(true)  
const [createPost, setCreatePost] = useState(false)

return (
<AppContext.Provider value={{homePage,setHomePage,createPost, setCreatePost}}>
    {children}
    </AppContext.Provider>);
};

export const useAppContext = (() => {return useContext(AppContext)})