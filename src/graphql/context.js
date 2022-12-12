export const context = () => {
  return {
    getUsers: (path = '/') => fetch('http://localhost:3000/users' + path),
    getPosts: (path = '/') => fetch('http://localhost:3000/posts' + path),
  };
};