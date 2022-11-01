const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'File Node JS API',
            description: 'Api to bulk data from file ',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:4003",
                description: "Development server"
            },
        ],
    },
    apis: ['./routes/*.js'],

}

const swaggerSpec = swaggerJsdoc(options)

module.exports = { swaggerSpec };