import AdminNewsItem from "./AdminNewsItem";

const noticias = [
  {
    titulo: "Inicio do Ano Lectivo",
    conteudo:
      "O instituto reforça o compromisso com a qualidade do ensino, a formação integral dos alunos.",
    date: "10/10/2025",
  },
  {
    titulo: "Baptismo dos Caloiros",
    conteudo:
      "Um evento de integração dos novos alunos, marcado por dinamicas e atividades que promovem acolhimento e espirito de grupo.",
    date: "10/10/2025",
  },
  {
    titulo: "Feira de Empreendedorismo",
    conteudo:
      "Uma oportunidade para os alunos colocarem em prática ideias inovadoras, desenolvendo habilidades como criatividade",
    date: "10/10/2025",
  },
];

function AdminNewsList() {
  return (
    <ul className="grid grid-cols-3 gap-5 p-7 dark:bg-gray-800">
      {noticias.map((item, i) => (
        <AdminNewsItem item={item} key={i} />
      ))}
    </ul>
  );
}

export default AdminNewsList;
