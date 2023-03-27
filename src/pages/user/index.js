import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loadUsers } from "../../services";

import './user.css';

export const User = () => {
  const [users, usersSet] = useState();

  useEffect(() => {
    loadUsers({ usersSet });
  }, []);

  return (
    <div className="Container-User-Pai" >
      {users?.map((item) => {
        return (
          <ul className="Container-User" key={item.id}>
            <li>
              <span className="texto-nome-user">Nome:</span> {item.name}
            </li>
            <li className="button-user">
              <Link  to={`/userDetails/${item.id}`}>Detalhes</Link>
            </li>
          </ul>
        );
      })}
        <div className="ContainerButton">
          <Link to="/"> <i class="fa-solid fa-circle-arrow-left"></i> Voltar</Link>
        </div>
    </div>
  );
};
