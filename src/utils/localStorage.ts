import type { Tarea } from "../Types/tarea";

const KEY = "tareas";

export function getTareas(): Tarea[] {
  const data = localStorage.getItem(KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveTareas(tareas: Tarea[]) {
  localStorage.setItem(KEY, JSON.stringify(tareas));
}