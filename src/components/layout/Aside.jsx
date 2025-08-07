import logo from "../../assets/OneDesk-logo.png";
import {profileTab, TaskTab, calendarTab}  from "../../config/Tabs"
import { FcCalendar } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import MainTabCustomLink from './MainTabCustomLink';


export default function Aside() {

  return (
    <aside className="flex flex-col pt-4 bg-slate-100 h-full justify-between items-center w-10  select-none">
      <nav className="flex flex-col gap-2 text-white text-2xl items-center">
        <MainTabCustomLink to="/profile" className="pb-0" useActive={false} title={profileTab} icon={<FcPortraitMode  color="#9B46FE" size={24}/>}/>
        <MainTabCustomLink to="/" title={TaskTab} icon={<FcApproval size={24} />}/>
        <MainTabCustomLink to="/calendar" title={calendarTab} icon={<FcCalendar size={24} />}/>
      </nav>

      <div className="relative w-9 h-20 flex justify-center items-center overflow-hidden">
        <img
          src={logo}
          alt="Logo"
          className="h-auto w-auto scale-150 transform -rotate-90"
        />
      </div>
    </aside>
  );
}
