import mongoose from "mongoose";

const rolSchema = mongoose.Schema({
  rol: {
    type: String,
    required: [true, 'Es necesario el nombre del rol'],
  }
}, {
  timestamps: true
});

const Role = mongoose.model("Role", rolSchema);

export default Role;