const amqp = require('amqplib')
const RabbitMQ = require('./lib/rabbitmq')
const assert = require('assert')

module.exports = app => {
    app.addSingleton('rabbitmq', createRabbitMQConnection);
}

async function createRabbitMQConnection(config, app) {
    assert(config.hostname && config.port && config.username && config.password)

    app.coreLogger.info('[egg-rabbitmqHelper] connecting %s"//%s:***@%s:%s',
        config.protocol, config.username, config.hostname, config.port)

    const config = {
        protocol: config.protocol === 'amqp' ? 'amqp' : 'amqps', // 只有两种情况
        hostname: config.hostname,
        port: config.port,
        username: config.username,
        password: config.password,
        locale: config.locale ? config.locale : 'en_US',
        frameMax: config.frameMax > 0 ? config.heartbeat : 0,
        heartbeat: config.heartbeat > 0 ? config.heartbeat : 0, // 心跳
        vhost: config.vhost ? config.vhost : '/',
    }
    const client = new RabbitMQ(config)


    app.beforeStart(async function () {
        await client.connect()
        app.coreLogger.info('[egg-rabbitmqHelper] RabbitMQ is connected')
    })

    return client
}