import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { userDetails } from "../../services";
import './userDescripition.css';

export const UserDescription = () => {
  const { id } = useParams();

  const [userData, userDataSet] = useState();

  useEffect(() => {
    userDetails({ id, userDataSet });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ContainerDetalhes-Pai">
      <ul className="ContainerDetalhes">
        <li>
          <span className="texto-nome-user">Nome: </span>
          {userData?.name}
        </li>
        <li>
          <span className="texto-nome-user">Telefone: </span>
          <span>{userData?.phone}</span>
        </li>
        <li>
          <span className="texto-nome-user">Username: </span>
          <span>{userData?.username}</span>
        </li>
        <li>
          <span className="texto-nome-user">Website: </span>
          <span>{userData?.website}</span>
        </li>
        <li>
          <span className="texto-nome-user">Email: </span>
          <span>{userData?.email}</span>
        </li>
        <h2 className="Titulo-User">Endereço</h2>
        <ul>
          <li>
            <span className="texto-nome-user">City: </span>
            <span>{userData?.address.city}</span>
          </li>
          <li>
            <span className="texto-nome-user">Street: </span>
            <span>{userData?.address.street}</span>
          </li>
          <li>
            <span className="texto-nome-user"> Suite: </span>
            <span>{userData?.address.suite}</span>
          </li>
          <li>
            <span className="texto-nome-user">Zipcode: </span>
            <span>{userData?.address.zipcode}</span>
          </li>
        </ul>
        <h2 className="Titulo-User">Company</h2>
        <ul>
          <li>
            <span className="texto-nome-user">Bs: </span>
            <span>{userData?.company.bs}</span>
          </li>
          <li>
            <span className="texto-nome-user">CatchPhrase: </span>
            <span>{userData?.company.catchPhrase}</span>
          </li>
          <li>
            <span className="texto-nome-user">Name: </span>
            <span>{userData?.company.name}</span>
          </li>
        </ul>
      </ul>
     
    </div>
  );
};
