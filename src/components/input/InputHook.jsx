import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  // dùng field thông qua control để register nó luôn
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 text-base border border-gray-100 rounded-lg bg-white outline-none focus:border-blue-500 transition-alls"
      {...field}
      {...props}
    />
  );
};

export default InputHook;
