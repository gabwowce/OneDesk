// screens/TaskGoals.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/TaskGoals/sidebar/Sidebar";

export default function TaskGoals() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />    {/* čia bus Today / Next7Days / All */}
      </main>
    </div>
  );
}
