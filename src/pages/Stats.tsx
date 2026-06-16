import { useTasksContext } from "../context/TasksContext";

export default function Stats() {
  const { total, pendientes, completadas } = useTasksContext();

  const porcentaje =
    total === 0 ? 0 : Math.round((completadas / total) * 100);

  return (
    <div>
      <h1>📊 Estadísticas</h1>

      <p>Total de tareas: {total}</p>
      <p>Pendientes: {pendientes}</p>
      <p>Completadas: {completadas}</p>

      <hr />

      <p>Progreso: {porcentaje}%</p>
    </div>
  );
}