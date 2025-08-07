import { Link } from "react-router-dom";
import { useContext } from "react";
import {ActiveTaskTabContext} from "../../../store/activeTaskTab-context";

export default function TabCustomLink({ to, icon, title }) {
  const activeTabCtx = useContext(ActiveTaskTabContext)
  const activeTab = activeTabCtx.activeTabName;
   function setActiveHandler(name){
        if(name !== activeTab){
            activeTabCtx.setActive(name);
        }
    }
  return (
    <Link to={to} className="pl-2 pr-2 w-full text-[#565555]" onClick={()=>setActiveHandler(title)}>
      <div className={`flex items-center gap-2 w-full h-10 hover:bg-gray-50 px-4 rounded-md ${activeTab === title && "bg-[#F1F5F9]"}`}>
        {icon}
        <span>{title}</span>
      </div>
    </Link>
  );
}