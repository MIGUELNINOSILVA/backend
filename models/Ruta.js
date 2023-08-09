import mongoose from "mongoose";

const rutaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Es necesario el nombre'],
  },
  centro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Centro",
    required: [true, 'Es necesario el centro'],
  }
}, {
  timestamps: true
});

const Ruta = mongoose.model("Ruta", rutaSchema);

export default Ruta;