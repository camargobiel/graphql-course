import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import { context } from './graphql/context';
import { PostsApi } from './graphql/posts/datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
