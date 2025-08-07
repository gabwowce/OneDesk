import { createContext, useState } from "react";
import { TaskTab } from "../config/Tabs";
export const ActiveTabContext = createContext({
  activeTabName: "",
  setActive: (tab) => {},
});

function ActiveTabContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState(TaskTab);

  function setActive(tab) {
    setActiveTab(tab);
  }

  const values = {
    activeTabName: activeTab,
    setActive: setActive,
  };
  return (
    <ActiveTabContext.Provider value={values}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export default ActiveTabContextProvider;
