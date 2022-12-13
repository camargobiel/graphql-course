import { verifyIfResponseIsValid } from '../../error-handler';

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();
  return verifyIfResponseIsValid(post);
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const post = await getPosts('/?' + apiFiltersInput);
  return post.json();
};

export const postResolvers = {
  Query: { post, posts },
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const date = new Date(createdAt).getTime() / 1000;
      return Math.floor(date);
    },
  },
  PostResult: {
    __resolveType: (obj) => {
      if (obj.statusCode) return 'PostNotFoundError';
      if (obj.id) return 'Post';
      return null;
    },
  },
};
