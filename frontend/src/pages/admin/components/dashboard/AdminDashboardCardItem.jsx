function AdminDashboardCardItem({ item }) {
  return (
    <li className="flex min-w-0 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-3 dark:border-gray-700 dark:bg-gray-800 sm:px-4">
      <div className="rounded-md bg-blue-200 p-2 text-2xl dark:bg-gray-900 sm:text-3xl">
        {item.icon}
      </div>
      <div className="flex min-w-0 flex-col">
        <p className="truncate text-sm">{item.title}</p>
        <p className="break-words text-lg font-semibold sm:text-xl">{item.value}</p>
      </div>
    </li>
  );
}

export default AdminDashboardCardItem;
