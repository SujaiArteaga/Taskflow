type TaskStatsProps = {
  total: number;
  pendientes: number;
  completadas: number;
};

function TaskStats({
  total,
  pendientes,
  completadas,
}: TaskStatsProps) {
  return (
    <div>
      <p>Total: {total}</p>
      <p>Pendientes: {pendientes}</p>
      <p>Completadas: {completadas}</p>
    </div>
  );
}

export default TaskStats;