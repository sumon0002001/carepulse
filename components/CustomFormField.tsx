"use client";
import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";

interface CustomProps {
  control: Control<any>;
  label?: string;
  placeholder?: string;
  name: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType; // replace with your enum type for better type safety and autocomplete support.
}

const RenderField = ({field, props}: {field: any; props: CustomProps}) => {
  return <Input type="text" placeholder="sumon" />;
};

const CustomFormField = (props: CustomProps) => {
    const { control, name, label, fieldType } = props;

 
  return (
    
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
            {fieldType !== FormFieldType.CHECKBOX && label && (
              <FormLabel>{label}</FormLabel>
            )}
            <RenderField field={field} props={props} />
          </FormItem>
        )}
      />
    
  );
};


export default CustomFormField;
