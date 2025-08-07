import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { colUsers } from "./_paths";

export const addStandaloneTask = (title, dueDate = null) =>
  addDoc(collection(db, ...colUsers(), "standaloneTasks"), {
    title,
    done: false,
    dueDate,
    createdAt: serverTimestamp(),
  });

export const toggleStandalone = (id, done) =>
  updateDoc(doc(db, ...colUsers(), "standaloneTasks", id), { done });

export function listenStandalone(cb) {
  const q = query(
    collection(db, ...colUsers(), "standaloneTasks"),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) =>
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
}

export function listenStandaloneRange(start, end, cb) {
  let q = collection(db, ...colUsers(), "standaloneTasks");

  if (start) q = query(q, where("dueDate", ">=", start));
  if (end) q = query(q, where("dueDate", "<=", end));

  // Firestore reikalauja orderBy lauko, kuriuo darome range
  q = query(q, orderBy("dueDate", "asc"));

  return onSnapshot(q, (snap) =>
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
}

/* --- UPDATE & DELETE ----------------------------------------- */
export const updateStandalone = (id, data) =>
  updateDoc(doc(db, ...colUsers(), "standaloneTasks", id), data);

export const deleteStandalone = (id) =>
  deleteDoc(doc(db, ...colUsers(), "standaloneTasks", id));
