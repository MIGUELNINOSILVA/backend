import mongoose from "mongoose";

const camperSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Es necesario el nombre'],
  },

  tipoIdentificacion: {
    type: String,
    required: [true, 'Es necesario el tipo de identificacion'],
    enum: ['CC', 'TI']
  },

  NroIdentificacion: {
    type: Number,
    required: [true, 'Es necesario el numero de identificacion']
  },
  email: {
    type: String,
    required: [true, 'Es necesario el email'],
  },
  password: {
    type: String,
    required: [true, 'Es necesario el password'],
  },
  level: {
    type: String,
    required: [true, 'Es necesario el nivel']
  },
  levelState: {
    type: String,
    required: [true, 'Es necesario el estado del nivel'],
    enum: ['PENDIENTE', 'FINALIZADO']
  },
  estado: {
    type: Boolean,
    required: [true, 'Es necesario el estado del camper'],
    default: true,
  },
  imagen: {
    type: String,
    required: [true, 'Es necesario la imagen del camper'],
  },
  rol: {
    type: String,
    required: [true, 'Es necesario el rol del camper'],
    default: 'CAMPER'
  },
  promedio: {
    type: Number,
    required: [true, 'Es necesario el promedio del camper'],
  }
}, {
  timestamps: true
});

const Camper = mongoose.model("Camper", camperSchema);

export default Camper;