import { useEffect, useState } from "react";
import type { Tarea } from "../Types/tarea";
import { getTareas, saveTareas } from "../utils/localStorage";

export function useTasks() {
  const [tareas, setTareas] = useState<Tarea[]>(getTareas);

  const [tareaEditando, setTareaEditando] =
    useState<number | null>(null);

  const [textoEditado, setTextoEditado] =
    useState("");

  const [nuevaTarea, setNuevaTarea] =
    useState("");

  const [filtro, setFiltro] = useState<
    "todas" | "pendientes" | "completadas"
  >("todas");

  const total = tareas.length;

const completadas = tareas.filter(
  (t) => t.completada
).length;

const pendientes = tareas.filter(
  (t) => !t.completada
).length;

const [fechaSeleccionada, setFechaSeleccionada] = useState(
  new Date().toISOString().split("T")[0]
);

const tareasDelDia = tareas.filter(
  (t) => t.fecha === fechaSeleccionada
);

  function agregarTarea() {
  if (nuevaTarea.trim() === "") return;

  setTareas((prev) => [
    ...prev,
    {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
      // fecha: new Date().toISOString().split("T")[0], // 👈 hoy
      fecha: fechaSeleccionada,
    },
  ]);

  setNuevaTarea("");
}

function eliminarTarea(id: number) {
  setTareas((prev) =>
    prev.filter((t) => t.id !== id)
  );
}

function toggleTarea(id: number) {
  setTareas((prev) =>
    prev.map((t) =>
      t.id === id
        ? { ...t, completada: !t.completada }
        : t
    )
  );
}

function iniciarEdicion(tarea: Tarea) {
  setTareaEditando(tarea.id);
  setTextoEditado(tarea.texto);
}

function guardarEdicion(id: number) {
  setTareas((prev) =>
    prev.map((t) =>
      t.id === id
        ? { ...t, texto: textoEditado }
        : t
    )
  );

  setTareaEditando(null);
  setTextoEditado("");
}

function cancelarEdicion() {
  setTareaEditando(null);
  setTextoEditado("");
}

useEffect(() => {
  saveTareas(tareas);
}, [tareas]);

const tareasFiltradas = tareas.filter((tarea) => {
  if (filtro === "pendientes") return !tarea.completada;
  if (filtro === "completadas") return tarea.completada;
  return true;
});

return {
  tareas,
  nuevaTarea,
  setNuevaTarea,

  agregarTarea,
  eliminarTarea,
  toggleTarea,

  tareaEditando,
  textoEditado,
  setTextoEditado,

  iniciarEdicion,
  guardarEdicion,
  cancelarEdicion,

  filtro,
  setFiltro,

  tareasFiltradas,
  total,
  completadas,
  pendientes,
  fechaSeleccionada,
  setFechaSeleccionada,
  tareasDelDia,
};
}