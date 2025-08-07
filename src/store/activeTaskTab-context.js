import { createContext, useState } from "react";
import { todayTab } from "../config/Tabs";
export const ActiveTaskTabContext = createContext({
  activeTabName: "",
  setActive: (tab) => {},
});

function ActiveTaskTabContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState(todayTab);

  function setActive(tab) {
    setActiveTab(tab);
  }

  const values = {
    activeTabName: activeTab,
    setActive: setActive,
  };
  return (
    <ActiveTaskTabContext.Provider value={values}>
      {children}
    </ActiveTaskTabContext.Provider>
  );
}

export default ActiveTaskTabContextProvider;
