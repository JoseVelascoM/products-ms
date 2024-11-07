import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  DATABASE_URL: string;
  PORT: number;
  NATS_SERVERS: string[];
}

const envsSchema = joi
  .object({
    DATABASE_URL: joi.string().required(),
    PORT: joi.number().required(),
    NATS_SERVER: joi.array().items(joi.string().required()),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  databaseUrl: envVars.DATABASE_URL,
  port: envVars.PORT,
  natsServers: envVars.NATS_SERVERS,
};
