import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Filter({
  options = [],
  defaultValue = "",
  value,
  onChange,
  disabled = false,
}) {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdown(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDropdown = () => !disabled && setIsDropdown((prev) => !prev);

  const handleSelect = (option) => {
    onChange(option);
    setIsDropdown(false);
  };

  // const handleRemoveSelect = () => {
  // }
  return (
    <div
      ref={dropdownRef}
      className={`dark:bg-gray-700 bg-gray-200 relative md:w-60 w-full rounded-4xl py-2 px-3 flex justify-between items-center text-gray-700 dark:text-gray-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <input
        type="text"
        className="dark:text-white dark:placeholder:text-gray-200 text-gray-700 pointer-events-none md:w-30 w-full bg-transparent outline-none placeholder:text-gray-700"
        value={value?.name || value || ""}
        placeholder={defaultValue}
        name={defaultValue}
        readOnly
        disabled={disabled}
      />
      {value && (
        <button
          onClick={() => handleSelect("")}
          className="absolute right-9 top-1/2 -translate-y-1/2 cursor-pointer outline-none z-50"
          disabled={disabled}
        >
          <X color="red" size={20} />
        </button>
      )}
      <button
        onClick={handleDropdown}
        className="cursor-pointer"
        disabled={disabled}
      >
        <ChevronDown size={28} />
      </button>
      {isDropdown && (
        <ul className="dark:bg-gray-700 bg-gray-200 absolute scrollBar top-13 left-0 w-full z-50 rounded-xl overflow-y-auto max-h-50 scrollbar-thin">
          {options.map((option) => (
            <li
              key={option?.id}
              className={`p-2  dark:text-gray-200 text-gray-700 cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-100 ${
                value === option ? "bg-red-700 text-white" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(option);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
