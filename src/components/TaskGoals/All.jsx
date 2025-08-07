// components/TaskGoals/All.jsx

import AddTaskForm from './TaskForm/AddTaskForm';
import { todayRange } from "../../utils/dateRanges";
import { useStandaloneAll } from './../../hooks/useStandaloneFiltered';
import TasksList from './tasks/TaskList';

export default function All() {
    const [start, end] = todayRange();
    const tasks = useStandaloneAll(start, end);

  return (
    <div className="flex flex-col p-4 gap-2">
      <h1>All</h1>
        <AddTaskForm/>
      <TasksList title="All" tasks={tasks} />
    </div>
  );
}
