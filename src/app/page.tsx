"use client";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api'; // Add this
import { uploadData } from 'aws-amplify/storage';
import { useState } from 'react';
import { createPilot } from '../graphql/mutations';
import awsmobile from '../aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../ui-components";
import { PilotVerification } from '../ui-components';
import type { PilotVerificationInputValues } from '../ui-components/PilotVerification';  


Amplify.configure(awsmobile);
const client = generateClient();

function Page() {
  const [uploadProgress, setUploadProgress] = useState({
    dl: 0,
    profile: 0
  });

  // This function needs to be synchronous
  const handleSubmit = (fields: PilotVerificationInputValues): PilotVerificationInputValues => {
    return {
      first_name: fields.first_name || '',
      last_name: fields.last_name || '',
      dl_number: fields.dl_number || '',
      dl_image: fields.dl_image || '',
      profile_image: fields.profile_image || ''
    };
  };

  // Handle the async operations in onSuccess
  const handleSuccess = async (fields: PilotVerificationInputValues) => {
    try {
      // Handle DL Image Upload
      const dlFile = (fields.dl_image as unknown) as File;
      let dlKey = '';
      if (dlFile && 'type' in dlFile) {
        dlKey = `dl-images/${dlFile.name}`;
        await uploadData({
          data: dlFile,
          path: dlKey,
          options: {
            bucket: 'pilot-dl-images',
            contentType: dlFile.type,
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (totalBytes) {
                const percentUploaded = (transferredBytes / totalBytes) * 100;
                setUploadProgress(prev => ({
                  ...prev,
                  dl: percentUploaded
                }));
              }
            }
          }
        });
      }

      // Handle Profile Image Upload
      const profileFile = (fields.profile_image as unknown) as File;
      let profileKey = '';
      if (profileFile && 'type' in profileFile) {
        profileKey = `profile-images/${profileFile.name}`;
        await uploadData({
          data: profileFile,
          path: profileKey,
          options: {
            bucket: 'pilot-profile-images',
            contentType: profileFile.type,
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (totalBytes) {
                const percentUploaded = (transferredBytes / totalBytes) * 100;
                setUploadProgress(prev => ({
                  ...prev,
                  profile: percentUploaded
                }));
              }
            }
          }
        });
      }

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
            },
            dl_image: {
              displayText: {
                getFilesUploadedText: (count: number) => `${count} Driver License uploaded`,
                getSelectedFilesText: (count: number) => `${count} Driver License selected`,
                getRemainingFilesText: (count: number) => `${count} file remaining`,
                getFileSizeErrorText: (size: string) => `File size must be less than ${size}`,
                getPausedText: (percent: number) => `Upload paused at ${percent}%`
              },
              isResumable: true,
              maxFileCount: 1,
              acceptedFileTypes: ['image/*'],
              accessLevel: 'private'
            },
            profile_image: {
              displayText: {
                getFilesUploadedText: (count: number) => `${count} Profile Photo uploaded`,
                getSelectedFilesText: (count: number) => `${count} Profile Photo selected`,
                getRemainingFilesText: (count: number) => `${count} file remaining`,
                getFileSizeErrorText: (size: string) => `File size must be less than ${size}`,
                getPausedText: (percent: number) => `Upload paused at ${percent}%`
              },
              isResumable: true,
              maxFileCount: 1,
              acceptedFileTypes: ['image/*'],
              accessLevel: 'private'
            }
          }}
          onSubmit={handleSubmit}
          onSuccess={handleSuccess}
          onError={(error) => {
            console.error('Form Error:', error);
            setUploadProgress({ dl: 0, profile: 0 });
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
