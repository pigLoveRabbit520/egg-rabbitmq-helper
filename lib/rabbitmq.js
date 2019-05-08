const amqp = require('amqplib')
const Promise = require('bluebird')
const EventEmitter = require('events').EventEmitter

class RabbitMQ {
    constructor(config) {
        this.config = config
    }

    async connect() {
        try {
            this._connection = await amqp.connect(this.config)
            this.emit('connect', this._connection)
        } catch {
            this.emit('error', err)
        }
    }
}


module.exports = RabbitMQ