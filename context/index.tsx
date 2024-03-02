"use client";
import { createContext,useState } from "react";

export const GlobalContext = createContext(null as any) ;

export default function GlobalState({ children } : {
  children : any ;
}) {
  const [pageLevelLoader, setPageLevelLoader] = useState(false);
  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: "",
  });
  const [isAuthUser,setIsAuthUser]= useState({});
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        pageLevelLoader,
        setPageLevelLoader,
        isAuthUser,
        setIsAuthUser,
        componentLevelLoader,
        setComponentLevelLoader,
        currentUpdatedProduct,
        setCurrentUpdatedProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
