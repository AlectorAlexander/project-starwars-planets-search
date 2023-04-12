const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://swapi-trybe.herokuapp.com',
      changeOrigin: true,
      onProxyReq: (proxyReq) => {
        proxyReq.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      },
    }),
  );
};
