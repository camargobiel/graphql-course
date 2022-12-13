import { gql } from 'apollo-server';

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: apiOrderEnum
    _start: Int
    _limit: Int
  }

  enum apiOrderEnum {
    desc
    asc
  }
`;
