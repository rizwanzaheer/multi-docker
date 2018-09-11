const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  prot: keys.redisPort,
  retry_strategy: () => 1000
});

const sub = redisClient.duplicate();