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

export{
    getRuta,
    postRuta
}