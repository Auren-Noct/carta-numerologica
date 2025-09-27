import type { ComponentProps } from "react";

type FormInputProps = {
  id: string;
  label: string;
} & ComponentProps<"input">;

const FormInput = ({ id, label, ...inputProps }: FormInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-900 font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-teal-500 focus:shadow-outline-teal"
      />
    </div>
  );
};

export default FormInput;
