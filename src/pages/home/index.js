import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadPosts } from '../../services';
import './PostsStyles.css';

//Pasta Home dos Posts//
export const Posts = () => {
  //Variavel usada para consumir API de Posts//
  const [posts, postsSet] = useState();

  useEffect(() => {
    loadPosts({ postsSet });
  }, []);

  return (
    <div className="Container-Pai">
      {posts?.map((item) => {
        return (
        
          <div className="postContainer" key={item.id}>
            <div className="postContainerBody">
              <div className="postContainerlinha1">Postagem</div>
              <div className="postContainerlinha2">{item.title}</div>
              <div className="postContainerlinha3"> {item.body}</div>
            </div>

            <div className="postContainerButton ">
              <Link className="button" to={`/postDescription/${item.id}`}>
                <p className='texto-button'>Comentários</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
