import mongoose from "mongoose";

const levelSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Es necesario el nombre'],
  },
  ruta: {
    type: String,
    required: [true, 'Es necesario ruta'],
  },
  duracion: {
    type: String,
    required: [true, 'Es necesario la duracion']
  }
}, {
  timestamps: true
});

const Level = mongoose.model("level", levelSchema);

export default Level;