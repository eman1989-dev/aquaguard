import mongoose from "mongoose";

const timerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // referencia al usuario
    ref: "User",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Timer", timerSchema);
