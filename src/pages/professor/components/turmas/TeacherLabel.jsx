function TeacherLabel({ children, htmlFor = "" }) {
  return (
    <label htmlFor={htmlFor} className="text-xs block mb-1">
      {children}
    </label>
  );
}

export default TeacherLabel;
