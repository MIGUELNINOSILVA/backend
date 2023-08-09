import Ruta from "../models/Ruta.js";

const getRuta = async(req, res)=>{
    const { hasta, desde } = req.query;


    const [ total, rutas ] = await Promise.all([
        Ruta.countDocuments(),
        Ruta.find()
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        rutas
    });
}

const postRuta = async(req,res) =>{
    const {nombre, centro} = req.body;
    const ruta = new Ruta({nombre, centro});
    
    await ruta.save();
    res.json({msb: "post ruta",ruta});
}

const deleteRuta = async(req, res)=>{
    const {id} = req.params

    const ruta = await Ruta.deleteOne({_id: id});

    res.json(ruta);
}

const putRutas  = async(req, res)=>{
    const {id} = req.params;
    const { _id, ...resto } = req.body;

    const ruta = await Ruta.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Ruta Actualizado",
        ruta
    });
}

export{
    getRuta,
    postRuta,
    deleteRuta,
    putRutas
}