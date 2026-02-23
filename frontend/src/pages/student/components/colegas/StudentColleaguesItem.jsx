function StudentColleaguesItem({ item, i }) {
  return (
    <li className="grid items-center text-sm grid-cols-[0.3fr_1.8fr_1fr_1fr_1fr] p-3  border-t-[0.1px] dark:border-gray-700 border-slate-200">
      <div className="flex items-center justify-center">
        <p className="font-semibold rounded-full  py-[10px] px-4 bg-slate-100  dark:bg-gray-900">
          {i + 1}
        </p>
      </div>
      <p>{item.name}</p>
      <p>{item.genre}</p>
      <p>{item.age}</p>
      <p>{item.phoneNumber}</p>
    </li>
  );
}

export default StudentColleaguesItem;
