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

export const addRootGoal = (title, targetDate = null) =>
  addDoc(collection(db, ...colUsers(), "goals"), {
    title,
    targetDate,
    createdAt: serverTimestamp(),
  });

export const listenRootGoals = (cb) =>
  onSnapshot(
    query(collection(db, ...colUsers(), "goals"), orderBy("createdAt", "desc")),
    (snap) => cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );

export const updateRootGoal = (goalId, data) =>
  updateDoc(doc(db, ...colUsers(), "goals", goalId), data);

export const deleteRootGoal = (goalId) =>
  deleteDoc(doc(db, ...colUsers(), "goals", goalId));
