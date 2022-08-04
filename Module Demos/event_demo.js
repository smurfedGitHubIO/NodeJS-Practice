const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { };

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('some_event', () => console.log("poggers man"));

// Event emitter
myEmitter.emit('some_event');
myEmitter.emit('some_event');
myEmitter.emit('some_event');

// Still lacks context on what it's possible uses would be