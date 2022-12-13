import { gql } from 'apollo-server';
import { userTypeDefs } from './users/typedefs.js';
import { userResolvers } from './users/resolvers.js';
import { postTypeDefs } from './posts/typedefs.js';
import { postResolvers } from './posts/resolvers.js';
import { apiFiltersTypeDefs } from './api-filters/typedefs.js';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
