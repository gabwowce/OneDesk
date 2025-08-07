import { useContext } from 'react';
import { ActiveTabContext } from './../../store/activeTab-context';
import { Link } from 'react-router-dom';


export default function MainTabCustomLink({to, title, icon, className, useActive = true}){

    const activeCtx = useContext(ActiveTabContext)
    const activeTab = activeCtx.activeTabName;
    console.log("activeTab", activeTab);

    function setActiveHandler(name){
        if(name !== activeTab){
            activeCtx.setActive(name);
        }
       
    }
    return(
        <Link
        to={to}
        title={title}
        onClick={() => setActiveHandler(title)}
        className={`${className} relative flex items-center justify-center w-10 h-10 transition 
            ${activeTab === title && useActive ? 'after:content-[""] after:absolute after:left-0 after:top-1 after:bottom-1 after:w-1 after:bg-[#A356FE]' : ''}
        `}
        >
        {icon}
        </Link>

    );
}