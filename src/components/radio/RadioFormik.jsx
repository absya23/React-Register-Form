import React from "react";
import { useField } from "formik";

const RadioFormik = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="flex items-center gap-x-3 ml-[5px]">
      <label className="cursor-pointer custom-radio">
        <input
          type="radio"
          {...field}
          {...props}
          className="hidden"
          checked={props.checked}
        />
        <div className="rounded-full bg-white h-full w-full"></div>
      </label>
      <span>{label}</span>
    </div>
  );
};

export default RadioFormik;
