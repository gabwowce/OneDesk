// src/hooks/useStandaloneFiltered.js
import { useEffect, useState } from "react";
import {
  listenStandaloneRange,
  listenStandalone,
} from "../services/firestore/index";

export function useStandaloneFiltered(start, end) {
  const [standaloneTasks, setStandaloneTasks] = useState([]);
  useEffect(
    () => listenStandaloneRange(start, end, setStandaloneTasks),
    [start, end]
  );
  return standaloneTasks;
}

export function useStandaloneAll() {
  const [standaloneTasks, setStandaloneTasks] = useState([]);
  useEffect(() => listenStandalone(setStandaloneTasks));
  return standaloneTasks;
}
