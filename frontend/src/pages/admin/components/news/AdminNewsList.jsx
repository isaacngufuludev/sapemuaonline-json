import { useNews } from "../../../../hooks/useNews";
import AdminNewsItem from "./AdminNewsItem";

function AdminNewsList() {
  const { news } = useNews();

  return (
    <ul className="grid grid-cols-3 gap-5 p-7 dark:bg-gray-800">
      {news.map((item, i) => (
        <AdminNewsItem item={item} key={i} />
      ))}
    </ul>
  );
}

export default AdminNewsList;
