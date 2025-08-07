import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { colUsers } from "./_paths";

/* CREATE užduotis projekte */
export const addProjectTask = (projectId, title, dueDate = null) =>
  addDoc(collection(db, ...colUsers(), "projects", projectId, "tasks"), {
    title,
    done: false,
    dueDate,
    createdAt: serverTimestamp(),
  });

/* TOGGLE */
export const toggleProjectTask = (projectId, taskId, done) =>
  updateDoc(doc(db, ...colUsers(), "projects", projectId, "tasks", taskId), {
    done,
  });

/* LISTEN */
export const listenProjectTasks = (projectId, cb) =>
  onSnapshot(
    query(
      collection(db, ...colUsers(), "projects", projectId, "tasks"),
      orderBy("createdAt", "desc")
    ),
    (snap) => cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );

/* --- UPDATE & DELETE ----------------------------------------- */
export const updateProjectTasks = (projectsId, tasksId, data) =>
  updateDoc(
    doc(db, ...colUsers(), "projects", projectsId, "tasks", tasksId),
    data
  );

export const deleteProjectTasks = (projectsId, tasksId) =>
  deleteDoc(doc(db, ...colUsers(), "projects", projectsId, "tasks", tasksId));
