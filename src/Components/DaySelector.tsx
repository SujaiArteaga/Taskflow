type Props = {
  fechaSeleccionada: string;
  setFechaSeleccionada: (date: string) => void;
  getEstadoDia: (date: string) => "verde" | "amarillo" | null;
};

export default function DaySelector({
  fechaSeleccionada,
  setFechaSeleccionada,
  getEstadoDia,
}: Props) {
  const today = new Date();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
return (
  <div>
    {/* encabezado días semana */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: "8px",
      }}
    >
      {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
        <div key={d}>{d}</div>
      ))}
    </div>

    {/* días */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "6px",
      }}
    >
     {Array.from({ length: daysInMonth }).map((_, i) => {
  const day = String(i + 1).padStart(2, "0");
  const date = `${year}-${month}-${day}`;

  const estado = getEstadoDia(date); // 👈 SOLO AQUÍ

  const isSelected = fechaSeleccionada === date;


    

return (
  <button
    key={date}
    onClick={() => setFechaSeleccionada(date)}
    style={{
      padding: "8px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      background: isSelected ? "#2d6cdf" : "#eee",
      color: isSelected ? "white" : "black",
      fontWeight: isSelected ? "bold" : "normal",
      transition: "0.2s",
      position: "relative",
    }}
  >
    {i + 1}

    {estado && (
      <span
        style={{
          position: "absolute",
          bottom: "4px",
          right: "6px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background:
            estado === "verde"
              ? "#22c55e"
              : "#a9ae19",
        }}
      />
    )}
  </button>
);
      })}
    </div>
  </div>
);
}