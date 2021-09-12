import realtimeQueue from './queue';
import _ from 'lodash';

const RealtimeProcessor = function (io) {
  this.io = io;

  // pick up the product-rating:added event and publish to clients
  realtimeQueue.process('product-rating:added', (job, done) => {
    console.log('Broadcasted Event: product-rating:added');
    this.io.sockets.emit('product-rating:added', job.data);
    done();
  });

  // when client connects
  io.on('connection', socket => {
    console.log(`Client Connected: ${socket.id}`);

    // when client disconnects
    socket.on('disconnect', () => {
      console.log(`Client Disconnected: ${socket.id}`);
    });
  });
}

module.exports = RealtimeProcessor;