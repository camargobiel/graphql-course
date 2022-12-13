import { getUsers } from './users/utils';
import { getPosts } from './posts/utils';
import { makePostDataLoader, makeUserDataLoader } from './dataloaders';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers),
    postDataLoader: makePostDataLoader(getPosts),
    getUsers,
    getPosts,
  };
};
