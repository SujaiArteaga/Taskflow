import { useTasksContext } from "../context/TasksContext";

export default function Dashboard() {
  const {
    fechaSeleccionada,
    tareasDelDia,
  } = useTasksContext();

  const profile = JSON.parse(
    localStorage.getItem("profile") ||
      '{"nombre":"Usuario","metaMensual":20}'
  );

  const completadasHoy =
    tareasDelDia.filter(
      (t) => t.completada
    ).length;

  const porcentaje =
    tareasDelDia.length === 0
      ? 0
      : Math.round(
          (completadasHoy /
            tareasDelDia.length) *
            100
        );

  return (
    <div>
      <h1>
        👋 Hola {profile.nombre}
      </h1>

      <h3>
        📅 Día seleccionado:
      </h3>

      <p>{fechaSeleccionada}</p>

      <h3>
        🎯 Meta mensual:
      </h3>

      <p>
        {profile.metaMensual} tareas
      </p>

      <h3>
        📋 Tareas del día:
      </h3>

      <p>{tareasDelDia.length}</p>

      <h3>
        ✅ Completadas hoy:
      </h3>

      <p>{completadasHoy}</p>

      <h3>
        📈 Progreso:
      </h3>

      <p>{porcentaje}%</p>
    </div>
  );
}