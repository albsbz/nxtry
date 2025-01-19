import fastifyPlugin from 'fastify-plugin';
import fastifyPostgres from '@fastify/postgres';
import { FastifyInstance } from 'fastify';


async function dbConnector(fastify: FastifyInstance) {
  fastify.register(fastifyPostgres, {
    connectionString: process.env.DB_CONNECTION_STRING,
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export default fastifyPlugin(dbConnector);
