/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PilotVerificationInputValues = {
    first_name?: string;
    last_name?: string;
    dl_number?: string;
    dl_image?: string;
    profile_image?: string;
};
export declare type PilotVerificationValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    dl_number?: ValidationFunction<string>;
    dl_image?: ValidationFunction<string>;
    profile_image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PilotVerificationOverridesProps = {
    PilotVerificationGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    dl_number?: PrimitiveOverrideProps<TextFieldProps>;
    dl_image?: PrimitiveOverrideProps<StorageManagerProps>;
    profile_image?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type PilotVerificationProps = React.PropsWithChildren<{
    overrides?: PilotVerificationOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PilotVerificationInputValues) => PilotVerificationInputValues;
    onSuccess?: (fields: PilotVerificationInputValues) => void;
    onError?: (fields: PilotVerificationInputValues, errorMessage: string) => void;
    onChange?: (fields: PilotVerificationInputValues) => PilotVerificationInputValues;
    onValidate?: PilotVerificationValidationValues;
} & React.CSSProperties>;
export default function PilotVerification(props: PilotVerificationProps): React.ReactElement;
