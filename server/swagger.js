const
    swagger = require("swagger-restify");

module.exports = (server) => {
    return new Promise((resolve, reject) => {
        try {

            swagger.init(server, {
                swaggerVersion: '2.0',
                swaggerJSON: '/docs.json',
                swaggerUI: '/',
                basePath: `http://localhost:${process.env.PORT || 3005}/`,
                info: {
                    version: '1.0',
                    title: 'Pickles API',
                    description: 'Pickles API documentation'
                },
                apis: [
                    './api/drivers.js'
                ]
            });

            resolve(server);
        } catch(ERR) {
            reject(ERR);
        }
    })
}