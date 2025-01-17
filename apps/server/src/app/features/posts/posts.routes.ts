import { FastifyRequest } from 'fastify';
import { FastifyInstance } from 'fastify/types/instance';

export default async function (fastify: FastifyInstance) {
  const collection = fastify.mongo.db.collection('test_collection')
  fastify.get('/', async function () {
    return { message: 'Hello API2' };
  });
  fastify.post('/', async function (request:FastifyRequest<{ Body: {post: string} }> ) {
    console.log(request.body)
    const result = await collection.insertOne({ content: request.body.post })
    return result
  });
}
