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

    async createChannel() {
        return await this._connection.createChannel()
    }

    async createConfirmChannel() {
        return await this._connection.createConfirmChannel()
    }
}


module.exports = RabbitMQ