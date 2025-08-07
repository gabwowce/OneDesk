import { auth } from "../config/firebaseConfig";

export function uid() {
  // laikinai: jei nėra auth – demoUser
  return auth.currentUser?.uid || "demoUser";
}

export function colUsers() {
  return ["users", uid()];
}
