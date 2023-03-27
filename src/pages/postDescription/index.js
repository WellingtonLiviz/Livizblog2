import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { loadComments } from "../../services";

import './PostDesciption.css';


export const PostDescription = () => {
  //Constante para pegar ID barra uRL navegador
  const { id } = useParams();

  //Estado para armazenar os Post vindo da API
  const [comments, commentsSet] = useState();

  //
  useEffect(() => {
    loadComments({ id, commentsSet });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  return (
    <div className="Container-Description-Pai">
      {comments?.map((item) => {
        return (
          <ul className="Container-Description" key={item.id}>
            <li className="Container-Description-1"> Comentário  </li>
            <li className="Container-Description-2">{item.body}</li>
            <li className="Container-Description-1"> E-mail </li>
            <li className="Container-Description-2">{item.email}</li>
            <li className="Container-Description-1"> Identificação</li>
            <li className="Container-Description-2">{item.name}</li>
          </ul>
        );
      })}
      
      
    </div>
  );
};
