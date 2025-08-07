import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { colUsers } from "./_paths";

export function addTask(projectId, goalId, title, dueDate = null) {
  return addDoc(
    collection(
      db,
      ...colUsers(),
      "projects",
      projectId,
      "goals",
      goalId,
      "tasks"
    ),
    { title, done: false, dueDate, createdAt: serverTimestamp() }
  );
}

export function toggleTask(projectId, goalId, taskId, done) {
  return updateDoc(
    doc(
      db,
      ...colUsers(),
      "projects",
      projectId,
      "goals",
      goalId,
      "tasks",
      taskId
    ),
    { done }
  );
}

export function listenTasks(projectId, goalId, cb) {
  const q = query(
    collection(
      db,
      ...colUsers(),
      "projects",
      projectId,
      "goals",
      goalId,
      "tasks"
    ),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) =>
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
}

/* --- UPDATE & DELETE ----------------------------------------- */
export const updateTask = (projectId, goalId, taskId, data) =>
  updateDoc(
    doc(
      db,
      ...colUsers(),
      "projects",
      projectId,
      "goals",
      goalId,
      "tasks",
      taskId // ← būtina
    ),
    data
  );

export const deleteTask = (projectId, goalId, taskId) =>
  deleteDoc(
    doc(
      db,
      ...colUsers(),
      "projects",
      projectId,
      "goals",
      goalId,
      "tasks",
      taskId // ← būtina
    )
  );
