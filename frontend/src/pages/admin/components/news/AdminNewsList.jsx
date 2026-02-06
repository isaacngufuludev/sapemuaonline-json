import Loading from "../../../../components/shared/Loading";
import { useNews } from "../../../../hooks/useNews";
import AdminNewsItem from "./AdminNewsItem";

function AdminNewsList() {
  const { news, isLoading } = useNews();

  return (
    <div>
      {isLoading ? (
        <Loading type="blue" size={40} />
      ) : (
        <ul className="grid grid-cols-3 gap-5 pt-7 px-7 dark:bg-gray-800">
          {news.map((item, i) => (
            <AdminNewsItem item={item} key={i} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminNewsList;
