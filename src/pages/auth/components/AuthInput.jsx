import { useRef, useState } from "react";

function AuthInput({ value, id, onChange, type, name }) {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef();
  return (
    <div
      onClick={() => ref.current.focus()}
      className={`dark:bg-gray-800 dark:text-white relative  dark:border-gray-700 overflow-hidden  w-full border border-stone-300 rounded-xl text-xs md:text-sm ${isFocus && "border-blue-700 "} `}
    >
      <label
        className={`absolute z-10 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 transition-transform duration-200 translate-x-3 " ${(isFocus || value) && "-translate-y-[1.5rem] md:text-[12px]"}`}
        htmlFor={id}
      >
        {name}
      </label>
      <input
        ref={ref}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        id={id}
        name={name}
        className={`p-[12px] sm:p-[10px] translate-y-1 bg-transparent focus:outline-none w-full`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AuthInput;
