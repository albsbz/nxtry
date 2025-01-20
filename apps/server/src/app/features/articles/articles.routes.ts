import { FastifyRequest } from 'fastify';
import { ZodFastifyInstance } from '@albsbz/zod-fastify';
import { PrismaClient } from '@prisma/client';
import { articlePostSchemaDTO } from '@albsnz/dto';

const prisma = new PrismaClient();

export default async function (fastify: ZodFastifyInstance) {
  fastify.post(
    '/',
    articlePostSchemaDTO,
    async function (request: FastifyRequest<{ Body: { content: string } }>) {
      const article = await prisma.article.create({
        data: {
          content: request.body.content,
        },
      });
      return { data: article };
    }
  );
}
