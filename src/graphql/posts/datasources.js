import { RESTDataSource } from 'apollo-datasource-rest';
import { makePostDataloader } from '../dataloaders';

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/posts';
    this.dataLoader = makePostDataloader(this.getPosts.bind(this));
  }

  async getPosts(urlParams = {}) {
    return await this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getPost(id) {
    return await this.get(id, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }

  batchLoadByUserId(id) {
    return this.dataLoader.load(id);
  }
}
