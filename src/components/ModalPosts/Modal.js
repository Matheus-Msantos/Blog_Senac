import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';
import { INSERT_POST } from '../../graphql/Posts/Post';

import './Modal.css';

function Modal() {

  const [contents, setContents] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [modal, setModal] = useState(false);

  const [post] = useMutation(INSERT_POST);
  //Função para ativar a modal
  const handleOpenModal = () => {
    setModal(true);
  }
  //Função para desativar a modal
  const handleCloseModal = () => {
    setModal(false);
  }
  //Função registro de post
  const handleRegister = () => {
    post({ variables: { title, category, image, contents } })
      .then(ret => {
        // Desativando modal
        handleCloseModal();
      })
  }

  return (
    <>
      <button className="cosmo-header-button" onClick={() => handleOpenModal()}>
        <i className="fa-solid fa-rocket"></i>
        LANÇAR <span className="cosmo-header-button--blue">POSTS</span>
      </button>

      <div className={`cosmo-modal-overlay ${modal ? 'active' : ''}`} onClick={() => { handleCloseModal() }}></div>

      <div className={`cosmo-auth-section--container fixed ${modal ? 'active' : ''}`} >

        <div className="cosmo-auth-section-img"></div>

        <h2 className="cosmo-auth-section-title">
          ESTAMOS LOUCOS PARA
          <span className="cosmo-auth-section-title--blue">SABER  O QUE VOCÊ DESCOBRIU!</span>
        </h2>

        <form className="cosmo-auth-form" onSubmit={e => {
          e.preventDefault();
          handleRegister();
        }}>
          <label className="cosmo-auth-form-label">COLOQUE UM TITULO DE OUTRO MUNDO</label>
          <input className="cosmo-auth-form-input" type="text" placeholder="Ex: Novo planeta é descoberto" onChange={e => setTitle(e.target.value)} required />

          <label className="cosmo-auth-form-label">CATEGORIA</label>
          <input className="cosmo-auth-form-input" type="text" placeholder="Ex: Descoberta" onChange={e => setCategory(e.target.value)} required />

          <label className="cosmo-auth-form-label">URL DA IMAGEM</label>
          <input className="cosmo-auth-form-input" type="text" placeholder="Ex: https://wallpaperaccess.com/4k-ultra" onChange={e => setImage(e.target.value)} required />

          <button className="cosmo-auth-form-button" type="submit">LANÇAR <i className="fa-solid fa-rocket"></i></button>

        </form>

      </div>

    </>
  );
};

export default Modal;