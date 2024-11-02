/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePilot = /* GraphQL */ `subscription OnCreatePilot($filter: ModelSubscriptionPilotFilterInput) {
  onCreatePilot(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePilotSubscriptionVariables,
  APITypes.OnCreatePilotSubscription
>;
export const onUpdatePilot = /* GraphQL */ `subscription OnUpdatePilot($filter: ModelSubscriptionPilotFilterInput) {
  onUpdatePilot(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePilotSubscriptionVariables,
  APITypes.OnUpdatePilotSubscription
>;
export const onDeletePilot = /* GraphQL */ `subscription OnDeletePilot($filter: ModelSubscriptionPilotFilterInput) {
  onDeletePilot(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePilotSubscriptionVariables,
  APITypes.OnDeletePilotSubscription
>;
