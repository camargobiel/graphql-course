const user = async (_, { id }, { getUsers }) => {
  const user = await getUsers('/' + id);
  return user.json();
};

const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const users = await getUsers('/?' + apiFiltersInput);
  return users.json();
};

const posts = async ({ id }, __, { postDataLoader }) => {
  return await postDataLoader.load(id);
};

export const userResolvers = {
  Query: { user, users },
  User: { posts },
};
