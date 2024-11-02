"use client";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsmobile from '../aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../ui-components";
import { PilotVerification } from '../ui-components';

Amplify.configure(awsmobile);

export default function Page() {
    return (
      <ThemeProvider theme={studioTheme}>
        <div>
            <h1>Pilot Verification Form</h1>
            {/* Render the PilotVerification component */}
            <PilotVerification
                onSubmit={(fields) => {
                    // Example function to trim all string inputs
                    const updatedFields = {}
                    Object.keys(fields).forEach(key => {
                        if (typeof fields[key] === 'string') {
                            updatedFields[key] = fields[key].trim()
                        } else {
                            updatedFields[key] = fields[key]
                        }
                    })
                    return updatedFields
                }}
            />
        </div>
        </ThemeProvider>
    );
}
