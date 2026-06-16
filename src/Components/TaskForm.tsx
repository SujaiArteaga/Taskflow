import type { Prioridad } from "../Types/tarea";

type TaskFormProps = {
  nuevaTarea: string;
  setNuevaTarea: (value: string) => void;

  prioridad: "alta" | "media" | "baja" | "ninguna";

  setPrioridad: (
    value: "alta" | "media" | "baja" | "ninguna"
  ) => void;

  onAgregar: () => void;
};

function TaskForm({
  nuevaTarea,
  setNuevaTarea,

  prioridad,
  setPrioridad,

  onAgregar,
}: TaskFormProps) {
return (
<div 
style={{
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  }}>
<input
 style={{
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  }}

id="nueva-tarea"
name="nuevaTarea"  
type="text"
value={nuevaTarea}
onChange={(e) =>
setNuevaTarea(e.target.value)
}
onKeyDown={(e) => {
if (e.key === "Enter") {
onAgregar();
}
}}
placeholder="Escribe una tarea"
/>

<select
  value={prioridad}
  onChange={(e) =>
    setPrioridad(
      e.target.value as Prioridad
    )
  }
>
  <option value="ninguna">⚪ Ninguna</option>
  <option value="baja">🟢 Baja</option>
  <option value="media">🟡 Media</option>
  <option value="alta">🔴 Alta</option>
</select>

  <button 
  style={{
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    background: "#2d6cdf",
    color: "white",
    cursor: "pointer",
  }}
  onClick={onAgregar}>
    Agregar
  </button>
</div>


);
}

export default TaskForm;
