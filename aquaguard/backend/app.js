// backend/app.js
const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
require("dotenv").config();

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
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/timers", require("./routes/timerRoutes")); 

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
