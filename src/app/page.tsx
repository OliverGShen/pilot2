"use client";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { useState } from 'react';
import { createPilot } from '../graphql/mutations';
import awsmobile from '../aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../ui-components";
import { PilotVerification } from '../ui-components';
import type { PilotVerificationInputValues } from '../ui-components/PilotVerification';
import { FileUploader } from '@aws-amplify/ui-react-storage';

Amplify.configure(awsmobile);
const client = generateClient();

function Page() {
  const [uploadProgress, setUploadProgress] = useState({
    dl: 0,
    profile: 0
  });
  const [dlKey, setDLKey] = useState('');
  const [profileKey, setProfileKey] = useState('');

  // This function needs to be synchronous
  const handleSubmit = (fields: PilotVerificationInputValues): PilotVerificationInputValues => {
    return {
      first_name: fields.first_name || '',
      last_name: fields.last_name || '',
      dl_number: fields.dl_number || '',
      dl_image: dlKey,
      profile_image: profileKey
    };
  };

  // Handle the async operations in onSuccess
  const handleSuccess = async (fields: PilotVerificationInputValues) => {
    try {
      // Save to database using GraphQL
      await client.graphql({
        query: createPilot,
        variables: {
          input: {
            first_name: fields.first_name || '',
            last_name: fields.last_name || '',
            dl_number: fields.dl_number || '',
            dl_image: dlKey,
            profile_image: profileKey,
            dl_verification_status: "PENDING",
            face_similarity_score: 0
          }
        }
      });

      console.log('Form submitted successfully:', fields);
    } catch (error) {
      console.error('Error during submission:', error);
      setUploadProgress({ dl: 0, profile: 0 });
    }
  };

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
          onSubmit={handleSubmit}
          onSuccess={handleSuccess}
          onError={(error) => {
            console.error('Form Error:', error);
            setUploadProgress({ dl: 0, profile: 0 });
          }}
        />
        
        {/* File Uploader for DL Image */}
        <FileUploader
          acceptedFileTypes={['image/jpg', 'image/jpeg', 'image/png']}
          path={({ identityId }) => `dl-images/${identityId}/`}
          maxFileCount={1}
          isResumable
          onUploadStart={() => setUploadProgress(prev => ({ ...prev, dl: 0 }))}
          onUploadSuccess={({ key }) => {
            setDLKey(key || '');
            setUploadProgress(prev => ({ ...prev, dl: 100 })); // Set to 100% on success
          }}
        />
        
        {/* File Uploader for Profile Image */}
        <FileUploader
          acceptedFileTypes={['image/jpg', 'image/jpeg', 'image/png']}
          path={({ identityId }) => `profile-images/${identityId}/`}
          maxFileCount={1}
          isResumable
          onUploadStart={() => setUploadProgress(prev => ({ ...prev, profile: 0 }))}
          onUploadSuccess={({ key }) => {
            setProfileKey(key || '');
            setUploadProgress(prev => ({ ...prev, profile: 100 })); // Set to 100% on success
          }}
        />

        {/* Progress indicators */}
        <div className="mt-4 space-y-2">
          {uploadProgress.dl > 0 && uploadProgress.dl < 100 && (
            <div>
              <p>Driver License Upload: {uploadProgress.dl.toFixed(1)}%</p>
              <div className="w-full bg-gray-200 rounded">
                <div 
                  className="bg-blue-600 rounded h-2" 
                  style={{ width: `${uploadProgress.dl}%` }}
                />
              </div>
            </div>
          )}
          {uploadProgress.profile > 0 && uploadProgress.profile < 100 && (
            <div>
              <p>Profile Image Upload: {uploadProgress.profile.toFixed(1)}%</p>
              <div className="w-full bg-gray-200 rounded">
                <div 
                  className="bg-green-600 rounded h-2" 
                  style={{ width: `${uploadProgress.profile}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

// Wrap the page with authentication
export default withAuthenticator(Page);
