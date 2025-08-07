
import { useStandaloneFiltered } from "../../hooks/useStandaloneFiltered";
import { next7DaysRange } from "../../utils/dateRanges";
import TasksList from "./tasks/TaskList";
import AddTaskForm from '../TaskGoals/TaskForm/AddTaskForm';

export default function Next7Days(){
     const [start, end] = next7DaysRange();
    const tasks = useStandaloneFiltered(start, end);
    return(
     <div className="flex flex-col p-4 gap-2">
        <h1>Next 7 Days</h1>
          <AddTaskForm defaultDate={start}/>
        <TasksList title="Today" tasks={tasks} />
        </div>
    );
}