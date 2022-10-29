const express = require('express')
const cors = require('cors');
const fileUpload = require('express-fileupload');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

         //middlewares de la app
         this.middlewares();
         
        //rutas de la app
        this.routes();
       

    }
    middlewares() {
        //directorio publico
        this.app.use(express.static('public'));
        //cors
        this.app.use(cors());
        //lectura y parseo del body en formato json
        this.app.use(express.json());
        //carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
        }))
    }


    routes() {

        this.app.use( '/api/files', require('../routes/files'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        })
    }

   
}

module.exports = Server;