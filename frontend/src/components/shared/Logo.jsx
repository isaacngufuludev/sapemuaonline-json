import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/imgs/logo.png" className="w-20" />
    </Link>
  );
}

export default Logo;
