import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import "./header.css";

//Pagina do cabeçalho das paginas//
export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <BsFillHouseDoorFill />
          Post
        </Link>

        <Link to="/user">
          <FaHouseUser /> Usuarios
        </Link>
      </nav>
      
      <h1 className="titulo-header">
        Liviz Blog <i class="fa-regular fa-comment"></i>
      </h1>
    </header>
  );
};
