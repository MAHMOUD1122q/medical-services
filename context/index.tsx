"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children } : {
  children : any ;
}) {
  const [pageLevelLoader, setPageLevelLoader] = useState(true);
  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: "",
  });
  const [isAuthUser, setIsAuthUser] = useState({});
  return (
    <GlobalContext.Provider
      value={{
        pageLevelLoader,
        setPageLevelLoader,
        isAuthUser,
        setIsAuthUser,
        componentLevelLoader,
        setComponentLevelLoader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
