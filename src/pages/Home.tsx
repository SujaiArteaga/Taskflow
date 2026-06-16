import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import TaskStats from "../Components/TaskStats";
import { useTasksContext } from "../context/TasksContext";
import DaySelector from "../Components/DaySelector";

export default function Home() {
  const {
    tareasFiltradas,
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

    total,
    pendientes,
    completadas,

    fechaSeleccionada,
  setFechaSeleccionada,
  tareasDelDia,
  } = useTasksContext();


  
  return (
    <div>
      <TaskForm
        nuevaTarea={nuevaTarea}
        setNuevaTarea={setNuevaTarea}
        onAgregar={agregarTarea}
      />

      {/* filtros */}
      <div>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>

      <TaskStats
        total={total}
        pendientes={pendientes}
        completadas={completadas}
      />
       <DaySelector
  fechaSeleccionada={fechaSeleccionada}
  setFechaSeleccionada={setFechaSeleccionada}
        />
      <TaskList
        tareas={tareasDelDia}
        onToggle={toggleTarea}
        onDelete={eliminarTarea}
        tareaEditando={tareaEditando}
        textoEditado={textoEditado}
        setTextoEditado={setTextoEditado}
        onIniciarEdicion={iniciarEdicion}
        onGuardarEdicion={guardarEdicion}
        onCancelarEdicion={cancelarEdicion}
      />
    </div>
  );
}