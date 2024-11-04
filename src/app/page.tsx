"use client";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsmobile from '../aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../ui-components";
import { PilotVerification } from '../ui-components';
import { PilotVerificationInputValues } from '../ui-components/PilotVerification'

Amplify.configure(awsmobile);

export default function Page() {
  return (
    <ThemeProvider theme={studioTheme}>
      <div className="bg-white p-4">
        <h1>Pilot Verification Form</h1>
        <PilotVerification
        overrides={{
            PilotVerificationGrid: {
              style: {
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px"
              }
            }
          }}
          onSubmit={(fields: PilotVerificationInputValues): PilotVerificationInputValues => {
            const updatedFields: PilotVerificationInputValues = {
              first_name: typeof fields.first_name === 'string' ? fields.first_name.trim() : fields.first_name,
              last_name: typeof fields.last_name === 'string' ? fields.last_name.trim() : fields.last_name,
              dl_number: typeof fields.dl_number === 'string' ? fields.dl_number.trim() : fields.dl_number,
              dl_image: fields.dl_image,
              profile_image: fields.profile_image
            };
            return updatedFields;
          }}
          clearOnSuccess={true}  // optional: clear form after successful submission
          onSuccess={(fields: PilotVerificationInputValues) => {
            console.log('Form submitted successfully:', fields);
          }}
          onError={(fields: PilotVerificationInputValues, errorMessage: string) => {
            console.error('Form submission error:', errorMessage);
          }}
        />
      </div>
    </ThemeProvider>
  );
}
