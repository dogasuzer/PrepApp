/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrep = /* GraphQL */ `
  query GetPrep($id: ID!) {
    getPrep(id: $id) {
      id
      name
      steps
      ingredients
      totalTime
      createdAt
      updatedAt
    }
  }
`;
export const listPreps = /* GraphQL */ `
  query ListPreps(
    $filter: ModelPrepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        steps
        ingredients
        totalTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
