import kue from 'kue';

const realtimeQueue =  kue.createQueue();

export default realtimeQueue;