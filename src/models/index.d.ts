import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum VerificationStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}



type EagerPilotVerification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PilotVerification, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly driverLicenseNumber: string;
  readonly driverLicenseImageKey: string;
  readonly profileImageKey: string;
  readonly status: VerificationStatus | keyof typeof VerificationStatus;
  readonly owner?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type LazyPilotVerification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PilotVerification, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly driverLicenseNumber: string;
  readonly driverLicenseImageKey: string;
  readonly profileImageKey: string;
  readonly status: VerificationStatus | keyof typeof VerificationStatus;
  readonly owner?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export declare type PilotVerification = LazyLoading extends LazyLoadingDisabled ? EagerPilotVerification : LazyPilotVerification

export declare const PilotVerification: (new (init: ModelInit<PilotVerification>) => PilotVerification) & {
  copyOf(source: PilotVerification, mutator: (draft: MutableModel<PilotVerification>) => MutableModel<PilotVerification> | void): PilotVerification;
}