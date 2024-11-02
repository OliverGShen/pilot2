/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPilot = /* GraphQL */ `query GetPilot($id: ID!) {
  getPilot(id: $id) {
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
` as GeneratedQuery<APITypes.GetPilotQueryVariables, APITypes.GetPilotQuery>;
export const listPilots = /* GraphQL */ `query ListPilots(
  $filter: ModelPilotFilterInput
  $limit: Int
  $nextToken: String
) {
  listPilots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPilotsQueryVariables,
  APITypes.ListPilotsQuery
>;
