import { useStandaloneFiltered } from "../../hooks/useStandaloneFiltered";
import { todayRange } from "../../utils/dateRanges";
import TasksList from "./tasks/TaskList";
import AddTaskForm from './TaskForm/AddTaskForm';

export default function Today() {
  const [start, end] = todayRange();
  const tasks = useStandaloneFiltered(start, end);

  return (
    <div className="flex flex-col p-4 gap-2">
      <h1>Today</h1>
      <AddTaskForm defaultDate={start}/>
      <TasksList title="Today" tasks={tasks} />
    </div>

  );
}
