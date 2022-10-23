const { EventEmitter } = require('events');
const chalk = require('chalk');

const { log } = console;

class TicketManager extends EventEmitter {
 constructor(supply) {
        super();
        this.supply = supply;
    }
}
}