import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownHook = ({ control, setValue, name, data, dropdownLabel }) => {
  const { nodeRef, show, setShow } = useClickOutside();
  //after submit form, dropdownValue is ""
  const dropdownValue = useWatch({
    control,
    name,
    defaultValue: "",
  });
  // console.log("Jobvalue", dropdownValue);
  const handleClickDropdownItem = (e) => {
    // console.log(e.target.dataset);
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };
  const [label, setLabel] = useState(dropdownLabel);
  useEffect(() => {
    if (dropdownValue === "") setLabel(dropdownLabel);
  }, [dropdownValue]);
  return (
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
  );
};

export default DropdownHook;
