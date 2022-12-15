import { ValidationError } from 'apollo-server';

export const createPostFn = async (postData, dataSource) => {
  const postInfo = await createPostInfo(postData, dataSource);
  const { title, body, userId } = postInfo;
  const userExists = title && body && userId;

  if (!userExists) throw new ValidationError('request body invalid');

  return await dataSource.post('', { ...postInfo });
};

const userExists = async (userId, dataSource) => {
  try {
    await dataSource.context.dataSources.userApi.get(userId);
  } catch (error) {
    throw new ValidationError(`User ${userId} not found`);
  }
};

const createPostInfo = async (postData, dataSource) => {
  const { title, body, userId } = postData;

  await userExists(userId, dataSource);

  const indexRefPost = await dataSource.get('', {
    _limit: 1,
    _sort: 'indexRef',
    _order: 'desc',
  });

  const indexRef = indexRefPost[0].indexRef + 1;

  return {
    title,
    body,
    userId,
    indexRef,
    createdAt: new Date().toISOString,
  };
};
