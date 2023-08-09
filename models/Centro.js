import mongoose from "mongoose";

const centroSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Es necesario el nombre'],
  },
  descripcion: {
    type: String,
    required: [true, 'Es necesario descripcion'],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  ciudad: {
    type: String,
    required: [true, 'Es necesario la ciudad'],
  }
}, {
  timestamps: true
});

const Centro = mongoose.model("Centro", centroSchema);

export default Centro;