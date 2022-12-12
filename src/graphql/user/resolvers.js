const user = () => {
  return {
    name: 'Gabriel',
    age: 3,
  };
};

const users = () => {
  return {
    name: 'Gabriel',
    age: 3,
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
