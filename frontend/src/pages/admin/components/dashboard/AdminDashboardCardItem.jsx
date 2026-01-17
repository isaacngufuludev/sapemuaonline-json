function AdminDashboardCardItem({ item }) {
  return (
    <li className="bg-white dark:bg-gray-800 px-5 py-4  rounded-md flex items-center gap-2 border-slate-200 border dark:border-gray-700">
      <div className="text-3xl bg-blue-200 p-2 dark:bg-gray-900 rounded-md">
        {item.icon}
      </div>
      <div className="flex flex-col">
        <p className="text-sm">{item.title}</p>
        <p className="text-xl font-semibold ">{item.value}</p>
      </div>
    </li>
  );
}

export default AdminDashboardCardItem;
