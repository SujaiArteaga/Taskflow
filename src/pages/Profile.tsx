import { useUserProfile } from "../hooks/useUserProfile";
import { useTasksContext } from "../context/TasksContext";

export default function Profile() {
  const {
    nombre,
    metaMensual,
    setNombre,
    setMetaMensual,
    editando,
    setEditando,
    guardar,
  } = useUserProfile();

const { tareas } = useTasksContext();

const completadas = tareas.filter(
  (t) => t.completada
).length;

const porcentaje =
  metaMensual === 0
    ? 0
    : Math.round((completadas / metaMensual) * 100);

  return (
    <div>
      <h1>👤 Perfil del usuario</h1>

      <div>
        <label>Nombre:</label>

        {editando ? (
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        ) : (
          <p>{nombre}</p>
        )}
      </div>

      <div>
        <label>Meta mensual:</label>

        {editando ? (
          <input
            type="number"
            value={metaMensual}
            onChange={(e) =>
              setMetaMensual(Number(e.target.value))
            }
          />
        ) : (
          <p>{metaMensual}</p>
        )}
      </div>

      <p>
  Progreso: {porcentaje}%
</p>

      <button onClick={() => setEditando(!editando)}>
        {editando ? "Cancelar" : "Editar"}
      </button>

      {editando && (
        <button onClick={guardar}>
          Guardar
        </button>
      )}
    </div>
  );
}