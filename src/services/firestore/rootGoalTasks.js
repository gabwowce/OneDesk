import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { colUsers } from "./_paths";

export const addRootGoalTask = (goalId, title, dueDate = null) =>
  addDoc(collection(db, ...colUsers(), "goals", goalId, "tasks"), {
    title,
    done: false,
    dueDate,
    createdAt: serverTimestamp(),
  });

export const toggleRootGoalTask = (goalId, taskId, done) =>
  updateDoc(doc(db, ...colUsers(), "goals", goalId, "tasks", taskId), { done });

export const listenRootGoalTasks = (goalId, cb) =>
  onSnapshot(
    query(
      collection(db, ...colUsers(), "goals", goalId, "tasks"),
      orderBy("createdAt", "desc")
    ),
    (snap) => cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
