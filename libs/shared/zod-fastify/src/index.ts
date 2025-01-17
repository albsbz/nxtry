import {
	fastify,
	FastifyInstance,
	FastifyServerOptions,
	FastifyBaseLogger,
	RawReplyDefaultExpression,
	RawRequestDefaultExpression,
	RawServerDefault,
  } from 'fastify';
  import {
	serializerCompiler,
	validatorCompiler,
	ZodTypeProvider,
  } from 'fastify-type-provider-zod';
  
  export type ZodFastifyInstance = FastifyInstance<
	RawServerDefault,
	RawRequestDefaultExpression,
	RawReplyDefaultExpression,
	FastifyBaseLogger,
	ZodTypeProvider
  >;
  
  export const zodFastify = (
	options: FastifyServerOptions = { logger: true }
  ) => {
	const server = fastify(options).withTypeProvider<ZodTypeProvider>();
  
	server.setValidatorCompiler(validatorCompiler);
	server.setSerializerCompiler(serializerCompiler);
  
	return server;
  };
  
export { fastify, FastifyInstance } from 'fastify';