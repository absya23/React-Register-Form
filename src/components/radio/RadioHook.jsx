import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });
  return (
    <label className="cursor-pointer custom-radio">
      <input
        type="radio"
        {...field}
        {...props}
        className="hidden"
        // defaultChecked={props.defaultChecked}
        checked={props.checked}
      />
      <div className="rounded-full bg-white h-full w-full"></div>
    </label>
  );
};

export default RadioHook;
