export type Prioridad = "alta" | "media" | "baja" | "ninguna";

export type Tarea = {
  id: number;
  texto: string;
  completada: boolean;
  fecha: string;
  prioridad: Prioridad;
};