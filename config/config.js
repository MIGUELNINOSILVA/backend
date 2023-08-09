import mongoose from 'mongoose';

const conectarDB = async()=>{
  try {
    const connectionDB = await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const url = `CONECTADO A SERVIDOR ${connectionDB.connection.host} EN PUERTO ${connectionDB.connection.port}`;
    console.log(url);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default conectarDB;