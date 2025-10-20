import express from "express";
import Timer from "./models/Timer.js";

const router = express.Router();

// 📩 Guardar o actualizar temporizador
router.post("/", async (req, res) => {
  try {
    const { userId, startDate, endDate } = req.body;

    // Busca si ya existe un temporizador del usuario
    let timer = await Timer.findOne({ userId });

    if (timer) {
      // Si ya existe, actualiza
      timer.startDate = startDate;
      timer.endDate = endDate;
      await timer.save();
    } else {
      // Si no existe, crea uno nuevo
      timer = new Timer({ userId, startDate, endDate });
      await timer.save();
    }

    res.status(200).json(timer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar el temporizador" });
  }
});

// 📤 Obtener temporizador del usuario
router.get("/:userId", async (req, res) => {
  try {
    const timer = await Timer.findOne({ userId: req.params.userId });
    if (!timer) return res.status(404).json({ message: "No hay temporizador" });
    res.status(200).json(timer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener temporizador" });
  }
});

export default router;
