import Centro from "../models/Centro.js";

const getCentro = async(req, res)=>{
    const { hasta, desde } = req.query;
    const query = { estado: true };


    const [ total, centros ] = await Promise.all([
        Centro.countDocuments(query),
        Centro.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        centros
    });
}

const postCentro = async(req,res) =>{
    const {nombre, descripcion, estado, ciudad} = req.body;
    const centro = new Centro({nombre, descripcion, estado, ciudad});
    
    await centro.save();
    res.json({msb: "post centro",centro});
}

const deleteCentro = async(req, res)=>{
    const {id} = req.params

    const camper = await Centro.deleteOne({_id: id});

    res.json(camper);
}

const putCentros  = async(req, res)=>{
    const {id} = req.params;
    const { _id, ...resto } = req.body;

    const centro = await Centro.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Camper Actualizado",
        centro
    });
}

export {
    getCentro,
    postCentro,
    deleteCentro,
    putCentros
}