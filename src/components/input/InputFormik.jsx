import React from "react";
import { useField } from "formik";

const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label htmlFor={props.id || props.name} className="cursor-pointer">
        {label}
      </label>
      <input
        type="text"
        className="p-4 text-base border border-gray-100 rounded-lg bg-white outline-none focus:border-blue-500 transition-alls"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

export default InputFormik;
