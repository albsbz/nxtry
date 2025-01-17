import { FastifyRequest } from 'fastify';
import { ZodFastifyInstance } from  '@albsbz/zod-fastify';
import { z } from 'zod';

export default async function (fastify: ZodFastifyInstance) {
  const collection = fastify.mongo.db.collection('test_collection')
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async () => {
      return { message: 'Hello API' };
    }
  );
  fastify.post('/', async function (request:FastifyRequest<{ Body: {post: string} }> ) {
    console.log(request.body)
    const result = await collection.insertOne({ content: request.body.post })
    return result
  });
}
