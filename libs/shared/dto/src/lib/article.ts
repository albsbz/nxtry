import { z } from 'zod';
export const articlePostBodyDTO = z.object({
  content: z.string(),
});
export const articlePostResponseDTO = {
  200: z.object({
    data: z.object({
      id: z.number(),
      content: z.string(),
    }),
  }),
};
export const articlePostSchemaDTO = {
  schema: {
    body: articlePostBodyDTO,
    response: articlePostResponseDTO,
  },
};
