const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  return response.json();
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const post = await getPosts('/?' + apiFiltersInput);
  return post.json();
};

const user = async ({ userId }, __, { getUsers }) => {
  const response = await getUsers('/' + userId);
  return response.json();
};

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
};
