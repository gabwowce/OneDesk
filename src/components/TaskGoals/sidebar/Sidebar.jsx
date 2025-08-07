import { HiCalendar, HiCalendarDays, HiMiniInbox } from "react-icons/hi2";
import { todayTab, next7DaysTab, allTab } from "../../../config/Tabs";
import TabCustomLink from "./TabCustomLink";
import SidebarSliderContainer from './SidebarSliderContainer';


export default function Sidebar() {
  return(
    <SidebarSliderContainer>
      <div className="flex flex-col pt-4 h-full border-r-[1px] border-gray-100">
        <nav className="flex flex-col">
          <TabCustomLink icon={<HiCalendar size={20} color="#A0A0A0" />}     title={todayTab}      to="."    />
          <TabCustomLink icon={<HiCalendarDays size={20} color="#A0A0A0"/>} title={next7DaysTab} to="week" />
          <TabCustomLink icon={<HiMiniInbox size={20} color="#A0A0A0"/>}    title={allTab}       to="all"  />
        </nav>
        <div className="pt-4 border-b-[1px] border-gray-100"/>
      </div>

    </SidebarSliderContainer>
  );

}
