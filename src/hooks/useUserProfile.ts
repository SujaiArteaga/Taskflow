import { useState } from "react";

type UserProfile = {
  nombre: string;
  metaMensual: number;
};

function getInitialProfile(): UserProfile {
  const data = localStorage.getItem("profile");

  return data
    ? JSON.parse(data)
    : { nombre: "Usuario", metaMensual: 20 };
}

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(getInitialProfile);

  const [editando, setEditando] = useState(false);

  function setNombre(nombre: string) {
    setProfile((prev) => ({ ...prev, nombre }));
  }

  function setMetaMensual(meta: number) {
    setProfile((prev) => ({ ...prev, metaMensual: meta }));
  }

  function guardar() {
    localStorage.setItem("profile", JSON.stringify(profile));
    setEditando(false);
  }

  return {
    nombre: profile.nombre,
    metaMensual: profile.metaMensual,

    setNombre,
    setMetaMensual,

    editando,
    setEditando,

    guardar,
  };
}