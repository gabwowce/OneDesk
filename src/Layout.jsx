import { Outlet } from "react-router-dom";
import Aside from "./components/layout/Aside";

export default function Layout(){
    return(
    <div className="flex h-screen">
        <Aside/>
        <main className="flex-1 overflow-y-auto">
            <Outlet/>
        </main>
    </div>
    );
}