import Camper from '../models/Camper.js';
import bcryptjs from 'bcryptjs';

const getCampers = async(req, res)=>{
    const { hasta, desde } = req.query;
    const query = { estado: true };


    const [ total, campers ] = await Promise.all([
        Camper.countDocuments(query),
        Camper.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        campers
    });
}

const postCampers = async (req, res) => {
        const { nombre, tipoIdentificacion, NroIdentificacion, email, password, level, levelState, estado, imagen, rol, promedio } = req.body;
        const camper = new Camper({ nombre, tipoIdentificacion, NroIdentificacion, email, password, level, levelState, estado, imagen, rol, promedio });

        const salt = bcryptjs.genSaltSync();
        camper.password = bcryptjs.hashSync(password, salt);


        // Guardar en MONGODB
        await camper.save();
        
        res.json({
            "message": "post camper",
            camper
        });
    
};

const deleteCampers = async(req, res)=>{
    const {id} = req.params

    const camper = await Camper.findByIdAndUpdate( id, { estado: false } );

    res.json(camper);
}

const putCampers  = async(req, res)=>{
    const {id} = req.params;
    const { _id, ...resto } = req.body;

    const camper = await Camper.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Camper Actualizado",
        camper
    });
}


export {
    getCampers,
    postCampers,
    deleteCampers,
    putCampers
}