'use strict';

import http from 'http';
import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';

import productRoute from './product';

let app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');

  if(req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  } else {
    return next();
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.json({
  'text': 'Slick services are operational'
}));

app.use(productRoute);

app.server = http.createServer(app);
if(config.env !== 'test') {
  app.server.listen(config.server.port, function() {
    console.log(`Slick Service is up at port: ${config.server.port} !!`);
  });
}

module.exports = app;
