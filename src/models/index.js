// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const VerificationStatus = {
  "PENDING": "PENDING",
  "APPROVED": "APPROVED",
  "REJECTED": "REJECTED"
};

const { PilotVerification } = initSchema(schema);

export {
  PilotVerification,
  VerificationStatus
};