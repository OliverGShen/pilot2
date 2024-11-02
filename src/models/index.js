// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pilot } = initSchema(schema);

export {
  Pilot
};