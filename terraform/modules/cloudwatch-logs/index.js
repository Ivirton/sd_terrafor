const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Detecção de Emoções',
      version: '1.0.0',
      description: 'Documentação da API para detecção de emoções',
    },
  },
  apis: ['./routes/*.js'], // ou o caminho dos seus endpoints
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
