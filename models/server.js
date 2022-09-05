const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // midlewares
        this.middlewares();

        // rutas de la app
        this.routes();

    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lextura y parseo del body
        this.app.use(express.json());
        
        //carpeta publica
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        
        this.app.listen(this.port, ()=> {
        console.log(`Servidor escuchando en puerto ${process.env.PORT}` );
        });
    }
}

module.exports = Server;
