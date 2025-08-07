import { collection, addDoc } from "firebase/firestore";
import { db } from "./config/firebaseConfig";

export async function addDemo() {
  try {
    const uid = "demoUser"; // laikinai
    const ref = await addDoc(collection(db, "users", uid, "standaloneTasks"), {
      title: "Pirmas testas",
      done: false,
    });
    console.log("✅ Įrašyta! Doc ID:", ref.id);
  } catch (err) {
    console.error("❌ Nepavyko įrašyti:", err);
  }
}
