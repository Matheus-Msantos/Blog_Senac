import React from "react";

import './List.css';

function ListFavorite({ queue }) {

  //Mapeando a lista de favoritos
  const MapQueue = queue.currentQueue.map((post, index) => {

    //Função remover item da lista
    function handleRemoveQueue() {
      queue.queueDispatch({ type: "REMOVE_QUEUE", payload: { post } })
    }

    return (
      <div key={index} className="cosmo-favorite-list">
        <button className="cosmo-favorite-button--remove" onClick={handleRemoveQueue}><i className="fa-solid fa-trash-can"></i></button>
        <span className="cosmo-favorite-text">{post.title}</span>
      </div>

    );
  })

  return (
    <div className="cosmo-favorite-container">
      <h3 className="cosmo-favorite-title">
        Ler
        <span className="cosmo-favorite-title--blue">depois</span>
      </h3>
      {MapQueue}
    </div>
  );
}

export default ListFavorite;