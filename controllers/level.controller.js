import Level from "../models/Level.js";

const getLevel = async(req, res)=>{
    const { hasta, desde } = req.query;


    const [ total, levels ] = await Promise.all([
        Level.countDocuments(),
        Level.find()
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        levels
    });
}

const postLevel = async(req,res) =>{
    const {nombre, ruta, duracion} = req.body;
    const level = new Level({nombre, ruta, duracion});
    
    await level.save();
    res.json({msb: "post level",level});
}

const deleteLevel = async(req, res)=>{
    const {id} = req.params

    const level = await Level.deleteOne({_id: id});

    res.json(level);
}

const putlevel  = async(req, res)=>{
    const {id} = req.params;
    const { _id, ...resto } = req.body;

    const level = await Level.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Level Actualizado",
        level
    });
}

export{
    getLevel,
    postLevel,
    deleteLevel,
    putlevel
}