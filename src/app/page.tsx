"use client";

import { ThemeProvider } from "@aws-amplify/ui-react";
// import { Amplify } from 'aws-amplify';
import { uploadData } from 'aws-amplify/storage';
import { useState } from 'react';
// import awsmobile from '../aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../ui-components";
import { PilotVerification } from '../ui-components';
import type { PilotVerificationInputValues } from '../ui-components/PilotVerification';  

export default function Page() {
  const [uploadProgress, setUploadProgress] = useState({
    dl: 0,
    profile: 0
  });

  const handleSubmit = (fields: PilotVerificationInputValues): PilotVerificationInputValues => {
    // Handle Driver License Image
    const dlFile = (fields.dl_image as unknown) as File;
    if (dlFile && 'type' in dlFile) {
      try {
        uploadData({
          data: dlFile,
          path: `dl-images/${dlFile.name}`,
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
      } catch (error) {
        console.error('DL upload error:', error);
      }
    }
  
    // Handle Profile Image
    const profileFile = (fields.profile_image as unknown) as File;
    if (profileFile && 'type' in profileFile) {
      try {
        uploadData({
          data: profileFile,
          path: `profile-images/${profileFile.name}`,
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
      } catch (error) {
        console.error('Profile upload error:', error);
      }
    }

    // Return the fields
    return {
      first_name: fields.first_name || '',
      last_name: fields.last_name || '',
      dl_number: fields.dl_number || '',
      dl_image: dlFile && 'name' in dlFile ? dlFile.name : '',
      profile_image: profileFile && 'name' in profileFile ? profileFile.name : ''
    };
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
          onSuccess={(fields) => {
            console.log('Form submitted successfully:', fields);
          }}
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
