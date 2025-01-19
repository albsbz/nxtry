import { FastifyRequest } from 'fastify';
import { ZodFastifyInstance } from '@albsbz/zod-fastify';
import { z } from 'zod';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (fastify: ZodFastifyInstance) {
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
  fastify.post(
    '/',
    async function (request: FastifyRequest<{ Body: { content: string } }>) {
      const article = await prisma.article.create({
        data: {
          content: request.body.content,
        },
      });
      return article;
    }
  );
}
