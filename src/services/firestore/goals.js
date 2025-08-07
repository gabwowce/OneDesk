import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { colUsers } from "./_paths";

export function addGoal(projectId, title, targetDate = null) {
  return addDoc(collection(db, ...colUsers(), "projects", projectId, "goals"), {
    title,
    targetDate,
    createdAt: serverTimestamp(),
  });
}

export function listenGoals(projectId, cb) {
  const q = query(
    collection(db, ...colUsers(), "projects", projectId, "goals"),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) =>
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
}

/* updateGoal / deleteGoal – analogiškai */
/* --- UPDATE & DELETE ----------------------------------------- */
export const updateGoal = (projectId, goalId, data) =>
  updateDoc(
    doc(db, ...colUsers(), "projects", projectId, "goals", goalId),
    data
  );

export const deleteGoal = (projectId, goalId) =>
  deleteDoc(doc(db, ...colUsers(), "projects", projectId, "goals", goalId));
