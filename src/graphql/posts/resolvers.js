const post = async (_, { id }, { getPosts }) => {
  const post = await getPosts('/' + id);
  return post.json();
};

const posts = async (_, __, { getPosts }) => {
  const post = await getPosts();
  return post.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
