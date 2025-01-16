import { FastifyInstance } from 'fastify/types/instance';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function () {
    return { message: 'Hello API2' };
  });
}
export const prefixOverride = '/posts';
