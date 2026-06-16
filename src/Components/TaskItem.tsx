import "./TaskItem.css";
import type { Tarea } from "../Types/tarea";

type TaskItemProps = {
  tarea: Tarea;

  onToggle: (id: number) => void;
  onDelete: (id: number) => void;

  tareaEditando: number | null;
  textoEditado: string;

  setTextoEditado: (texto: string) => void;

  onIniciarEdicion: (tarea: Tarea) => void;
  onGuardarEdicion: (id: number) => void;
  onCancelarEdicion: () => void;
};

function TaskItem({
  tarea,
  onToggle,
  onDelete,

  tareaEditando,
  textoEditado,

  setTextoEditado,

  onIniciarEdicion,
  onGuardarEdicion,
  onCancelarEdicion,
}: TaskItemProps) {
return ( <li className="task-item"
style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    borderLeft: `6px solid ${
      tarea.prioridad === "alta"
        ? "#ef4444"
        : tarea.prioridad === "media"
        ? "#f59e0b"
        : tarea.prioridad === "baja"
        ? "#22c55e"
        : "#d1d5db"
    }`,
  }}
>
tarea.prioridad

  <div className="task-left">
    <input
      type="checkbox"
      checked={tarea.completada}
      onChange={() => onToggle(tarea.id)}
    />

    {tareaEditando === tarea.id ? (
      <>
        <input
        id={`editar-${tarea.id}`}
  name={`editar-${tarea.id}`}
          value={textoEditado}
          onChange={(e) =>
            setTextoEditado(e.target.value)
          }
          onKeyDown={(e) => {
    if (e.key === "Enter") {
      onGuardarEdicion(tarea.id);
    }
  if (e.key === "Escape") {
      onCancelarEdicion();
    }
  }}
        />

        <button
        className="btn-save"
          onClick={() =>
            onGuardarEdicion(tarea.id)
          }
        >
          Guardar
        </button>

        <button onClick={onCancelarEdicion}>
          Cancelar
        </button>
      </>
    ) : (
      <span
        style={{
          textDecoration: tarea.completada
            ? "line-through"
            : "none",
          color: tarea.completada
            ? "#888"
            : "#222",
        }}
      >
        {tarea.texto}
      </span>
    )}
  </div>

  {tareaEditando !== tarea.id && (
    <div className="task-actions">
      <button
      className="btn-edit"
        onClick={() =>
          onIniciarEdicion(tarea)
        }
      >
        Editar
      </button>

      <button
      className="btn-delete"
        onClick={() =>
          onDelete(tarea.id)
        }
      >
        Eliminar
      </button>
    </div>
  )}
</li>


);
}

export default TaskItem;
