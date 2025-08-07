// components/TaskGoals/AddTaskForm.jsx
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {addStandaloneTask} from "../../../services/firestore/index"
import { useRef } from 'react';
import CustomDatePicker from './CustomDatePicker';

export default function AddTaskForm({defaultDate}) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(defaultDate);
  const [onFocus, setOnFocus] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addStandaloneTask(title, dueDate);
    setTitle("");
    setDueDate(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <div className={`flex items-center border p-2 mb-2 rounded ${onFocus ? 'border-blue-500' : 'border-gray-300'}`}>
      {/* your text field */}
        <input
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task..."
          className="flex-1 outline-none"
        />
        {
          !onFocus &&  <CustomDatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
        />
        }
      
      
    </div>

      
     
      <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}
