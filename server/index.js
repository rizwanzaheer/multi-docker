const keys = require('./keys');
const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// postgress
const { Pool } = require('pg');

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on('error', () => console.log('Lost PG connection'));

pgClient.query('CREATE TABLE IF NOT EXISTS VALUES (number INT)')
  .catch(err => console.log(err));


// Redis cilent setup

const redisClient = redis.createClient({
  host: keys.redisHost,
  prot: keys.redisPort,
  retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate();