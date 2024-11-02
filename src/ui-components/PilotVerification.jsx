/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, useTheme } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Pilot } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { Field } from "@aws-amplify/ui-react/internal";
import { DataStore } from "aws-amplify/datastore";
export default function PilotVerification(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    first_name: "",
    last_name: "",
    dl_number: "",
    dl_image: undefined,
    profile_image: undefined,
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [dl_number, setDl_number] = React.useState(initialValues.dl_number);
  const [dl_image, setDl_image] = React.useState(initialValues.dl_image);
  const [profile_image, setProfile_image] = React.useState(
    initialValues.profile_image
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setDl_number(initialValues.dl_number);
    setDl_image(initialValues.dl_image);
    setProfile_image(initialValues.profile_image);
    setErrors({});
  };
  const validations = {
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    dl_number: [],
    dl_image: [{ type: "Required" }],
    profile_image: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.small.value}
      columnGap={tokens.space.small.value}
      padding={tokens.space.small.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          first_name,
          last_name,
          dl_number,
          dl_image,
          profile_image,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Pilot(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PilotVerification")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>First Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
              dl_number,
              dl_image,
              profile_image,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Last Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
              dl_number,
              dl_image,
              profile_image,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Driver License Number"
        isRequired={false}
        isReadOnly={false}
        value={dl_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              dl_number: value,
              dl_image,
              profile_image,
            };
            const result = onChange(modelFields);
            value = result?.dl_number ?? value;
          }
          if (errors.dl_number?.hasError) {
            runValidationTasks("dl_number", value);
          }
          setDl_number(value);
        }}
        onBlur={() => runValidationTasks("dl_number", dl_number)}
        errorMessage={errors.dl_number?.errorMessage}
        hasError={errors.dl_number?.hasError}
        {...getOverrideProps(overrides, "dl_number")}
      ></TextField>
      <Field
        errorMessage={errors.dl_image?.errorMessage}
        hasError={errors.dl_image?.hasError}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Driver License Image</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setDl_image((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  first_name,
                  last_name,
                  dl_number,
                  dl_image: value,
                  profile_image,
                };
                const result = onChange(modelFields);
                value = result?.dl_image ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setDl_image((prev) => {
              let value = initialValues?.dl_image;
              if (onChange) {
                const modelFields = {
                  first_name,
                  last_name,
                  dl_number,
                  dl_image: value,
                  profile_image,
                };
                const result = onChange(modelFields);
                value = result?.dl_image ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"private"}
          acceptedFileTypes={[".jpg", ".jpeg", ".png"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          maxSize={3000000}
          {...getOverrideProps(overrides, "dl_image")}
        ></StorageManager>
      </Field>
      <Field
        errorMessage={errors.profile_image?.errorMessage}
        hasError={errors.profile_image?.hasError}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Profile Image</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setProfile_image((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  first_name,
                  last_name,
                  dl_number,
                  dl_image,
                  profile_image: value,
                };
                const result = onChange(modelFields);
                value = result?.profile_image ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setProfile_image((prev) => {
              let value = initialValues?.profile_image;
              if (onChange) {
                const modelFields = {
                  first_name,
                  last_name,
                  dl_number,
                  dl_image,
                  profile_image: value,
                };
                const result = onChange(modelFields);
                value = result?.profile_image ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"private"}
          acceptedFileTypes={[".jpg", ".jpeg", ".png"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "profile_image")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.small.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
