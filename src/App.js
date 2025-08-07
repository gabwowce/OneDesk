import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TaskGoals from "./screens/TaskGoals";
import Profile from "./screens/Profile";
import Calendar from "./screens/Calendar";
import ActiveTabContextProvider from "./store/activeTab-context";
import ActiveTaskTabContextProvider from "./store/activeTaskTab-context";
import Today from "./components/TaskGoals/Today";
import Next7Days from "./components/TaskGoals/Next7Days";
import All from "./components/TaskGoals/All";

function App() {
  return (
    <ActiveTabContextProvider>
      <ActiveTaskTabContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* TaskGoals „layout“ su children */}
              <Route element={<TaskGoals />}>
                <Route index element={<Today />} /> {/* / */}
                <Route path="week" element={<Next7Days />} /> {/* /week */}
                <Route path="all" element={<All />} /> {/* /all */}
              </Route>

              {/* kiti puslapiai */}
              <Route path="profile" element={<Profile />} />
              <Route path="calendar" element={<Calendar />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ActiveTaskTabContextProvider>
    </ActiveTabContextProvider>
  );
}

export default App;
