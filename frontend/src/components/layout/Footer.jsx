import { Link } from "react-router-dom";
import Title3 from "../ui/Title3";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const contacts = [
  {
    icon: <FiPhone />,
    name: "+244 930 886 401",
    link: "tel:+244930886401",
  },
  {
    icon: <FaEnvelope />,
    name: "sapemua@gmail.com",
    link: "mailto:isaacngufulu70@gmail.com",
  },
  {
    icon: <MdLocationOn />,
    name: "Rua São José Operário",
    link: "#",
  },
];

const socialMedia = [
  {
    icon: <FaFacebook />,
    name: "Facebook",
    link: "#",
  },
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    link: "https://wa.me/244930886401",
  },
  {
    icon: <FaInstagram />,
    name: "Instagram",
    link: "#",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 text-white py-16">
      <div className="container grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-4 mb-12">
        <div>
          <Title3>Sobre a escola</Title3>
          <p className="md:text-sm text-xs mt-3">
            A escola SAPEMUA é uma instituição comprometida com a formação
            academica e cidadã dos seus estudantes.{" "}
          </p>
        </div>
        <div className="sm:justify-self-center">
          <Title3>Links</Title3>
          <nav>
            <ul className="flex flex-col gap-2 md:text-sm text-xs mt-3 ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/ChatBoot">Chat</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="xl:justify-self-center">
          <Title3>Contactos</Title3>
          <ul className="md:text-sm text-xs flex flex-col gap-2 mt-3">
            {contacts.map((item) => (
              <ContactItem item={item} key={item.name} />
            ))}
          </ul>
        </div>
        <div className="sm:justify-self-center">
          <Title3>Redes Sociais</Title3>
          <ul className="md:text-sm text-xs flex flex-col gap-2 mt-3">
            {socialMedia.map((item) => (
              <Media item={item} key={item.name} />
            ))}
          </ul>
        </div>
      </div>
      <p className="container text-center lg:text-sm text-xs ">
        &copy;{year} Sapemua. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function ContactItem({ item }) {
  return (
    <li>
      <a href={item.link} className="flex items-center gap-1">
        <p>{item.icon}</p>
        <p>{item.name}</p>
      </a>
    </li>
  );
}

function Media({ item }) {
  return (
    <li>
      <a href={item.link} className="flex items-center gap-1">
        <p>{item.icon}</p>
        <p>{item.name}</p>
      </a>
    </li>
  );
}

export default Footer;
