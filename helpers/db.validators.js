import Role from "../models/Rol.js";
import Camper from "../models/Camper.js";
import Centro from "../models/Centro.js";
import Level from "../models/Level.js";
import Ruta from "../models/Ruta.js";

const rolValido = async(rol = '')=>{
    const rolExiste = await Role.findOne({rol:rol});
    if(!rolExiste){
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

const camperExistsById = async (id) => {
    const Exists = await Camper.findById(id);
    if (!Exists) {
        throw new Error(`El id (usuario) no existe ${ id }`);
    }
}

const centroExiste = async(nombre = '')=>{
    const exist = await Centro.findOne({nombre});
    if(exist){
        throw new Error(`El centro ${nombre} existe en la base de datos`);
    }
}

const levelExiste = async(nombre = '')=>{
    const exist = await Level.findOne({nombre});
    if(exist){
        throw new Error(`El level ${nombre} existe en la base de datos`);
    }
}

const rutaExiste = async(nombre = '')=>{
    const exist = await Ruta.findOne({nombre});
    if(exist){
        throw new Error(`El level ${nombre} existe en la base de datos`);
    }
}

const levelExistsById = async (id) => {
    const Exists = await Level.findById(id);
    if (!Exists) {
        throw new Error(`El id (level) no existe ${ id }`);
    }
}

const rutaExistsById = async (id) => {
    const Exists = await Ruta.findById(id);
    if (!Exists) {
        throw new Error(`El id (ruta) no existe ${ id }`);
    }
}

const rutaCentroExisteId = async(centro = '')=>{
    const existe = await Centro.findOne({_id:centro});
    if(!existe){
        throw new Error(`El id ${centro} no esta registrado en la base de datos`);
    }
}



export {
    rolValido,
    camperExistsById,
    centroExiste,
    levelExiste,
    levelExistsById,
    rutaExistsById,
    rutaCentroExisteId,
    rutaExiste
}