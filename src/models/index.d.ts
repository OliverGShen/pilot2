import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPilot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pilot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly dl_dob?: string | null;
  readonly dl_number?: string | null;
  readonly dl_exp?: string | null;
  readonly dl_image?: string | null;
  readonly profile_image?: string | null;
  readonly dl_verification_status?: string | null;
  readonly face_similarity_score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPilot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pilot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly dl_dob?: string | null;
  readonly dl_number?: string | null;
  readonly dl_exp?: string | null;
  readonly dl_image?: string | null;
  readonly profile_image?: string | null;
  readonly dl_verification_status?: string | null;
  readonly face_similarity_score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pilot = LazyLoading extends LazyLoadingDisabled ? EagerPilot : LazyPilot

export declare const Pilot: (new (init: ModelInit<Pilot>) => Pilot) & {
  copyOf(source: Pilot, mutator: (draft: MutableModel<Pilot>) => MutableModel<Pilot> | void): Pilot;
}