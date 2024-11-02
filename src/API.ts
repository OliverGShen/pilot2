/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePilotInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  dl_dob?: string | null,
  dl_number?: string | null,
  dl_exp?: string | null,
  dl_image?: string | null,
  profile_image?: string | null,
  dl_verification_status?: string | null,
  face_similarity_score?: number | null,
};

export type ModelPilotConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  dl_dob?: ModelStringInput | null,
  dl_number?: ModelStringInput | null,
  dl_exp?: ModelStringInput | null,
  dl_image?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  dl_verification_status?: ModelStringInput | null,
  face_similarity_score?: ModelFloatInput | null,
  and?: Array< ModelPilotConditionInput | null > | null,
  or?: Array< ModelPilotConditionInput | null > | null,
  not?: ModelPilotConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Pilot = {
  __typename: "Pilot",
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  dl_dob?: string | null,
  dl_number?: string | null,
  dl_exp?: string | null,
  dl_image?: string | null,
  profile_image?: string | null,
  dl_verification_status?: string | null,
  face_similarity_score?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePilotInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  dl_dob?: string | null,
  dl_number?: string | null,
  dl_exp?: string | null,
  dl_image?: string | null,
  profile_image?: string | null,
  dl_verification_status?: string | null,
  face_similarity_score?: number | null,
};

export type DeletePilotInput = {
  id: string,
};

export type ModelPilotFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  dl_dob?: ModelStringInput | null,
  dl_number?: ModelStringInput | null,
  dl_exp?: ModelStringInput | null,
  dl_image?: ModelStringInput | null,
  profile_image?: ModelStringInput | null,
  dl_verification_status?: ModelStringInput | null,
  face_similarity_score?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPilotFilterInput | null > | null,
  or?: Array< ModelPilotFilterInput | null > | null,
  not?: ModelPilotFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPilotConnection = {
  __typename: "ModelPilotConnection",
  items:  Array<Pilot | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPilotFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  dl_dob?: ModelSubscriptionStringInput | null,
  dl_number?: ModelSubscriptionStringInput | null,
  dl_exp?: ModelSubscriptionStringInput | null,
  dl_image?: ModelSubscriptionStringInput | null,
  profile_image?: ModelSubscriptionStringInput | null,
  dl_verification_status?: ModelSubscriptionStringInput | null,
  face_similarity_score?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPilotFilterInput | null > | null,
  or?: Array< ModelSubscriptionPilotFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreatePilotMutationVariables = {
  input: CreatePilotInput,
  condition?: ModelPilotConditionInput | null,
};

export type CreatePilotMutation = {
  createPilot?:  {
    __typename: "Pilot",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    dl_dob?: string | null,
    dl_number?: string | null,
    dl_exp?: string | null,
    dl_image?: string | null,
    profile_image?: string | null,
    dl_verification_status?: string | null,
    face_similarity_score?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePilotMutationVariables = {
  input: UpdatePilotInput,
  condition?: ModelPilotConditionInput | null,
};

export type UpdatePilotMutation = {
  updatePilot?:  {
    __typename: "Pilot",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    dl_dob?: string | null,
    dl_number?: string | null,
    dl_exp?: string | null,
    dl_image?: string | null,
    profile_image?: string | null,
    dl_verification_status?: string | null,
    face_similarity_score?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePilotMutationVariables = {
  input: DeletePilotInput,
  condition?: ModelPilotConditionInput | null,
};

export type DeletePilotMutation = {
  deletePilot?:  {
    __typename: "Pilot",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    dl_dob?: string | null,
    dl_number?: string | null,
    dl_exp?: string | null,
    dl_image?: string | null,
    profile_image?: string | null,
    dl_verification_status?: string | null,
    face_similarity_score?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPilotQueryVariables = {
  id: string,
};

export type GetPilotQuery = {
  getPilot?:  {
    __typename: "Pilot",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    dl_dob?: string | null,
    dl_number?: string | null,
    dl_exp?: string | null,
    dl_image?: string | null,
    profile_image?: string | null,
    dl_verification_status?: string | null,
    face_similarity_score?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPilotsQueryVariables = {
  filter?: ModelPilotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPilotsQuery = {
  listPilots?:  {
    __typename: "ModelPilotConnection",
    items:  Array< {
      __typename: "Pilot",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      dl_dob?: string | null,
      dl_number?: string | null,
      dl_exp?: string | null,
      dl_image?: string | null,
      profile_image?: string | null,
      dl_verification_status?: string | null,
      face_similarity_score?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePilotSubscriptionVariables = {
  filter?: ModelSubscriptionPilotFilterInput | null,
};

export type OnCreatePilotSubscription = {
  onCreatePilot?:  {
    __typename: "Pilot",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    dl_dob?: string | null,
    dl_number?: string | null,
    dl_exp?: string | null,
    dl_image?: string | null,
    profile_image?: string | null,
    dl_verification_status?: string | null,
    face_similarity_score?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePilotSubscriptionVariables = {
  filter?: ModelSubscriptionPilotFilterInput | null,
};

export type OnUpdatePilotSubscription = {
  onUpdatePilot?:  {
    __typename: "Pilot",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    dl_dob?: string | null,
    dl_number?: string | null,
    dl_exp?: string | null,
    dl_image?: string | null,
    profile_image?: string | null,
    dl_verification_status?: string | null,
    face_similarity_score?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePilotSubscriptionVariables = {
  filter?: ModelSubscriptionPilotFilterInput | null,
};

export type OnDeletePilotSubscription = {
  onDeletePilot?:  {
    __typename: "Pilot",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    dl_dob?: string | null,
    dl_number?: string | null,
    dl_exp?: string | null,
    dl_image?: string | null,
    profile_image?: string | null,
    dl_verification_status?: string | null,
    face_similarity_score?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
