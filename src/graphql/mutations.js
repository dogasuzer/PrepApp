/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrep = /* GraphQL */ `
  mutation CreatePrep(
    $input: CreatePrepInput!
    $condition: ModelPrepConditionInput
  ) {
    createPrep(input: $input, condition: $condition) {
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
export const updatePrep = /* GraphQL */ `
  mutation UpdatePrep(
    $input: UpdatePrepInput!
    $condition: ModelPrepConditionInput
  ) {
    updatePrep(input: $input, condition: $condition) {
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
export const deletePrep = /* GraphQL */ `
  mutation DeletePrep(
    $input: DeletePrepInput!
    $condition: ModelPrepConditionInput
  ) {
    deletePrep(input: $input, condition: $condition) {
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
