// backend/app.js
import express from "express";
import connectDB from "./db/db.js";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.js";
import timerRoutes from "./routes/timerRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/timers", timerRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
