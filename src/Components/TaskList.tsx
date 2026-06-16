import TaskItem from "./TaskItem";
import type { Tarea } from "../Types/tarea";

type TaskListProps = {
  tareas: Tarea[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;

  tareaEditando: number | null;
  textoEditado: string;

  setTextoEditado: (texto: string) => void;

  onIniciarEdicion: (tarea: Tarea) => void;
  onGuardarEdicion: (id: number) => void;
  onCancelarEdicion: () => void;
};

function TaskList({
  tareas,
  onToggle,
  onDelete,

  tareaEditando,
  textoEditado,

  setTextoEditado,

  onIniciarEdicion,
  onGuardarEdicion,
  onCancelarEdicion,
}: TaskListProps) {
return ( 
<div
style={{
    marginTop: "20px",
  }}
>
  <h2>
    📋 Mis tareas ({tareas.length})
  </h2>
<ul
style={{
    padding: 0,
    listStyle: "none",
  }}
>
{tareas.length === 0 ? (
  <p style={{ color: "#888" }}>
    No hay tareas aún. ¡Agrega la primera! 🚀
  </p>
) : (tareas.map((tarea) => ( <TaskItem
  key={tarea.id}
  tarea={tarea}
  onToggle={onToggle}
  onDelete={onDelete}

  tareaEditando={tareaEditando}
  textoEditado={textoEditado}

  setTextoEditado={setTextoEditado}

  onIniciarEdicion={onIniciarEdicion}
  onGuardarEdicion={onGuardarEdicion}
  onCancelarEdicion={onCancelarEdicion}
/>
)))} </ul>
</div>
);
}

export default TaskList;
