import { getUsers } from './users/utils';
import { getPosts } from './posts/utils';
import { makeUserDataLoader } from './dataloaders';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers),
    getUsers,
    getPosts,
  };
};
