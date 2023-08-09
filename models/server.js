import express from 'express';
import cors from 'cors';
import camperRoutes from '../routes/camper.routes.js';
import centroRoutes from '../routes/centro.routes.js';
import levelRoutes from '../routes/level.routes.js';
import rutaRoutes from '../routes/ruta.routes.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Paths
        this.campersPath = '/api/campers';
        this.centroPath = '/api/centros';
        this.authPath = '/api/auth';
        this.levelPath = '/api/levels';
        this.rutasPath = '/api/rutas';
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`CORRIENDO EN PUERTO - ${this.port}`);
        })
    }

    routes(){
        // this.app.use(this.authPath, authRoutes);
        this.app.use(this.campersPath, camperRoutes);
        this.app.use(this.centroPath, centroRoutes);
        this.app.use(this.levelPath, levelRoutes);
        this.app.use(this.rutasPath, rutaRoutes);
    }
}

export default Server;