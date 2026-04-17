function TeacherInput({
  id = "",
  value = "",
  onChange,
  min = 0,
  max = 20,
  step = 1,
}) {
  return (
    <input
      className="pl-2 border w-full border-gray-200 outline-none py-2  rounded-md text-xs dark:bg-gray-800 dark:text-white dark:border-gray-700"
      type="number"
      value={value}
      onChange={onChange}
      id={id}
      min={min}
      max={max}
      step={step}
    />
  );
}

export default TeacherInput;
