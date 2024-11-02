/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPilot = /* GraphQL */ `mutation CreatePilot(
  $input: CreatePilotInput!
  $condition: ModelPilotConditionInput
) {
  createPilot(input: $input, condition: $condition) {
    id
    first_name
    last_name
    dl_dob
    dl_number
    dl_exp
    dl_image
    profile_image
    dl_verification_status
    face_similarity_score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePilotMutationVariables,
  APITypes.CreatePilotMutation
>;
export const updatePilot = /* GraphQL */ `mutation UpdatePilot(
  $input: UpdatePilotInput!
  $condition: ModelPilotConditionInput
) {
  updatePilot(input: $input, condition: $condition) {
    id
    first_name
    last_name
    dl_dob
    dl_number
    dl_exp
    dl_image
    profile_image
    dl_verification_status
    face_similarity_score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePilotMutationVariables,
  APITypes.UpdatePilotMutation
>;
export const deletePilot = /* GraphQL */ `mutation DeletePilot(
  $input: DeletePilotInput!
  $condition: ModelPilotConditionInput
) {
  deletePilot(input: $input, condition: $condition) {
    id
    first_name
    last_name
    dl_dob
    dl_number
    dl_exp
    dl_image
    profile_image
    dl_verification_status
    face_similarity_score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePilotMutationVariables,
  APITypes.DeletePilotMutation
>;
