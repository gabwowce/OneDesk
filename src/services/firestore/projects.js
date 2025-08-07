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

/* --- CREATE --------------------------------------------------- */
export async function createProject(
  title,
  category = "General",
  color = "#6A5FE8"
) {
  return addDoc(collection(db, ...colUsers(), "projects"), {
    title,
    category,
    color,
    createdAt: serverTimestamp(),
  });
}

/* --- READ (realtime) ----------------------------------------- */
export function listenProjects(cb) {
  const q = query(
    collection(db, ...colUsers(), "projects"),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) =>
    cb(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
  );
}

/* --- UPDATE & DELETE ----------------------------------------- */
export const updateProject = (id, data) =>
  updateDoc(doc(db, ...colUsers(), "projects", id), data);

export const deleteProject = (id) =>
  deleteDoc(doc(db, ...colUsers(), "projects", id));
