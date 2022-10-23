const { EventEmitter } = require('events');

const chalk = require('chalk');

const { log } = console;

const firstEmitter = new EventEmitter();

firstEmitter.emit('My first event');
