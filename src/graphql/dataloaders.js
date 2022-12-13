import DataLoader from 'dataloader';

export const makeUserDataLoader = (getUsers) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const response = await getUsers('?id=' + urlQuery);
    const users = await response.json();
    return ids.map((id) => users.find((user) => user.id === id));
  });
};

export const makePostDataLoader = (getPosts) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&userId=');
    const posts = getPosts('?userId=' + urlQuery);

    return ids.map((id) => posts.filter((post) => post.userId === id));
  });
};
