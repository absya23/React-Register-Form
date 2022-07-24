import React, { useEffect, useState } from "react";
import { useField } from "formik";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownFormik = ({ labelText, name, data, setValue, dropdownLabel }) => {
  const { nodeRef, show, setShow } = useClickOutside();
  const [label, setLabel] = useState(dropdownLabel);
  // dùng để register input
  // const [field, meta] = useField(props);

  const [field, meta] = useField({ name });

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };
  useEffect(() => {
    if (field.value === "") setLabel(dropdownLabel);
  }, [field.value]);
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label className="cursor-pointer">{labelText}</label>
      <div className="relative" ref={nodeRef}>
        <div
          className="p-5 rounded-lg border bg-white border-gray-100 flex items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <span>{label}</span>
        </div>
        <div
          className={`absolute top-full left-0 w-full rounded-lg bg-white ${
            show ? "" : "opacity-0 invisible"
          }`}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="p-5 cursor-pointer hover:bg-gray-100"
              onClick={handleClickDropdownItem}
              data-value={item.value}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default DropdownFormik;
