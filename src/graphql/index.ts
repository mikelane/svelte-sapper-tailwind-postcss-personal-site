import { ApolloServer } from 'apollo-server-express';
import 'reflect-metadata';
import { buildSchema, Query, Resolver } from 'type-graphql';

@Resolver()
class HelloWorldResolver {
  @Query(() => String, { description: 'Example thing to query' })
  async helloWorld(): Promise<string> {
    return 'Hello world!';
  }
}

export const createApolloServer = async (): Promise<ApolloServer> => {
  const schema = await buildSchema({ resolvers: [HelloWorldResolver] });

  const apolloServer = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
  });

  return apolloServer;
};
