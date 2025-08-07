/** Bendri, visoms užduotims būdingi laukai */
export interface BaseTask {
  id: string; // UUID arba nanoid
  title: string;
  done: boolean;
  meta?: TaskMeta; // papildomi neprivalomi duomenys
}

/** Paprasta vienadienė (nekonfigūruota) užduotis - gali „gyventi“ viena */
export interface StandaloneTask extends BaseTask {
  kind: "standalone";
}

/** Užduotis, priklausanti Goal arba Project (paveldi BaseTask) */
export interface GoalTask extends BaseTask {
  kind: "goalTask";
  goalId: string; // ref į Goal.id
}

/** Tikslas – konteineris užduotims + progresas */
export interface Goal {
  id: string;
  title: string;
  tasks: GoalTask[];
  meta?: GoalMeta;
}

/** Projektas – keli goalsai vienoje vietoje */
export interface Project {
  id: string;
  title: string;
  goals: Goal[];
  meta?: ProjectMeta;
}

/** Sąjunga („discriminated union“) visoms užduotims */
export type Task = StandaloneTask | GoalTask;

/** Laukai, kuriuos dažnai pridedi vėliau – deadline, priority, owner... */
export interface TaskMeta {
  dueDate?: string; // ISO yyyy-mm-dd
  repeat?: "daily" | "weekly" | "monthly";
  priority?: 1 | 2 | 3 | 4 | 5;
  tags?: string[];
}

export interface GoalMeta {
  // pvz. deadline visam goalui, progreso formulės tipas...
  targetDate?: string;
}

export interface ProjectMeta {
  category?: string;
  color?: string; // naudinga UI žymėjimui
}
