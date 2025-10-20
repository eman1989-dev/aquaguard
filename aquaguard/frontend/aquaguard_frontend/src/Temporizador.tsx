import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";

interface CountdownTimerProps {
  userId: string;
}

function CountdownTimer({ userId }: CountdownTimerProps) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>("");

  const API_URL = "http://localhost:3000/api/timers";

  const calculateTimeLeft = (end: Date) => {
    const now = new Date();
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) return "El tiempo ha terminado";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // Obtener temporizador al montar
  useEffect(() => {
    const fetchTimer = async () => {
      try {
        const res = await axios.get(`${API_URL}/${userId}`);
        const timer = res.data;
        setStartDate(timer.startDate.split("T")[0]);
        setEndDate(new Date(timer.endDate));
      } catch (err) {
        console.log("No hay temporizador guardado todavía.");
      }
    };
    fetchTimer();
  }, [userId]);

  // Guardar temporizador en backend
  const saveTimer = async (start: string, end: Date) => {
    try {
      await axios.post(API_URL, {
        userId,
        startDate: start,
        endDate: end,
      });
    } catch (err) {
      console.error("Error al guardar temporizador:", err);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = new Date(e.target.value);
    const end = new Date(selected);
    end.setDate(selected.getDate() + 45);

    setStartDate(e.target.value);
    setEndDate(end);

    saveTimer(e.target.value, end); // guarda automáticamente
  };

  useEffect(() => {
    if (!endDate) return;
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(endDate)), 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="inline-flex flex-col items-center gap-3 p-4 bg-blue-100 rounded-2xl shadow-md w-fit h-fit mx-auto mt-30">
        <h1 className="text-2xl font-semibold text-blue-900">Temporizador del Filtro 💧</h1>

        <label className="text-blue-800 font-medium">Selecciona la fecha:</label>
        <input
          type="date"
          value={startDate}
          onChange={handleDateChange}
          className="p-2 border rounded-md w-48 text-center"
        />

        {endDate && (
          <div className="text-center text-blue-900 mt-3">
            <p className="text-lg font-medium">
              Fecha de cambio: <span className="font-bold">{endDate.toLocaleDateString("es-CR")}</span>
            </p>
            <p className="text-xl font-semibold mt-1">{timeLeft}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;
