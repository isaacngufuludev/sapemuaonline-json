function AdminInput({
  type,
  id,
  value,
  onChange,
  max,
  min,
  placeholder,
  ref,
  accept,
}) {
  const base =
    "pl-1 w-full  rounded-md text-xs dark:text-stone-900 dark:bg-gray-800 dark:text-white dark:border-gray-700";

  const styles = {
    text: base + " h-8 border border-gray-200",
    date: base + " h-8 border border-gray-200",
    email: base + " h-8 border border-gray-200",
    number: base + " h-8 border border-gray-200 text-xl",
    file: base + " ",
  };

  if (type === "description")
    return (
      <textarea
        typeof={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className=" border border-gray-200 rounded-xl resize-none pl-2 pt-2 text-sm w-full text-black dark:bg-gray-800 dark:text-white dark:border-gray-700 h-20"
      ></textarea>
    );

  return (
    <input
      className={styles[type]}
      maxLength={max}
      min={min}
      type={type}
      id={id}
      ref={ref}
      accept={accept}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default AdminInput;
