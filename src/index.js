'use strict';

import http from 'http';
import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import socketio from 'socket.io';
import cors from 'cors';

import productRoute from './product';

import RealtimeProcessor from './realtime/processor';

const app = express();

app.use(cors());
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

const io = socketio(app.server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

new RealtimeProcessor(io);

module.exports = app;
