const post = () => {
  return {
    id: '1',
    title: 'Teste',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Teste',
    },
    {
      id: '2',
      title: 'Teste2 ',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
