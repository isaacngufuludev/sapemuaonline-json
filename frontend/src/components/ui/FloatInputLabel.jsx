import { useRef, useState } from "react";

function FloatInputLabel({ value, onChange, type, name, max }) {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef();

  return (
    <div>
      <div
        onClick={() => ref.current.focus()}
        className={`dark:bg-gray-800 dark:text-white  relative  dark:border-gray-700 overflow-hidden  w-full border border-gray-200 rounded-lg text-sm ${isFocus && "border-blue-700 "} `}
      >
        <label
          className={`absolute z-10 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 transition-transform duration-200 translate-x-2 " ${(isFocus || value) && "-translate-y-[1.5rem] text-[12px]"}`}
        >
          {name}
        </label>
        <input
          ref={ref}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          name={name}
          className={`p-[8px] translate-y-1  bg-transparent focus:outline-none w-full`}
          type={type}
          maxLength={max}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default FloatInputLabel;
