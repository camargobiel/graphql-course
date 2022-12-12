export const userResolvers = {
  Query: {
    user: () => {
      return {
        name: 'Gabriel',
        age: 3,
      };
    },
  },
};
