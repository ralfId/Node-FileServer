const express = require('express')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
const db = require('../db/dbconnection');
const { swaggerSpec } = require('../swagger_docs/swagger');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.dbConnection();
        //middlewares de la appƒ
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
        //documentacion
        this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error)
            throw new Error('Error al iniciar la base de datos');
        }
    }

    routes() {

        this.app.use('/api/files', require('../routes/files'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        })
    }


}

module.exports = Server;