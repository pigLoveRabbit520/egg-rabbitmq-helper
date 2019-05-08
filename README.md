## Install

```bash
$ npm i egg-rabbitmq-helper --save
```


## Configuration

```js
// {app_root}/config/plugin.js
exports.rabbitmqHelper = {
  enable: true,
  package: 'egg-rabbitmq-helper',
};
```


```js
// {app_root}/config/config.default.js
exports.rabbitmqHelper = {
   client: {
    protocol: 'amqp',
    hostname: 'my_rabbitmq_server',
    port: 5672,
    username: 'test',
    password: 'test',
    frameMax: 0,
    heartbeat: 2, // 心跳
    vhost: '/',
    })
  },
};
```


## Usage

```
app.rabbitmq.createChannel()
```
