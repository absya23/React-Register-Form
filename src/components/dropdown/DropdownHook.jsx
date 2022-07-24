import React from "react";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownHook = ({ control }) => {
  const { nodeRef, show, setShow } = useClickOutside();
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border bg-white border-gray-100 flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>Select your job</span>
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999999 1L4.16795 5.75193C4.56377 6.34566 5.43623 6.34566 5.83205 5.75192L9 1"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-dasharray="0.2 0.2"
          />
        </svg>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div className="p-5">Teacher</div>
        <div className="p-5">Developer</div>
        <div className="p-5">Docter</div>
      </div>
    </div>
  );
};

export default DropdownHook;
