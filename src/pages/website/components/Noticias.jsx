import Subtitle from "../../../components/ui/Subtitle";
import Title from "../../../components/ui/Title";
import NoticiaItem from "./NoticiaItem";
import { useNews } from "../../../hooks/useNews";

function Noticias() {
  const { news } = useNews();

  return (
    <section className="border-stone-200 border-t  py-14 xl:py-20 dark:border-gray-900 ">
      <div className="container">
        <Subtitle type="center">noticias e avisos</Subtitle>
        <Title type="center">Noticias e Atualizações Recentes</Title>
        <ul className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 ">
          {news.map((item) => (
            <NoticiaItem item={item} key={item.titulo} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Noticias;
