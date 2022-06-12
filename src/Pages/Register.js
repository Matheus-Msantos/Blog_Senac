import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { POST_USER } from '../graphql/Users/Post';

function RegisterPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [post] = useMutation(POST_USER);
  const navigate = useNavigate('');

  //Função registro de usuário
  const handleRegister = () => {
    post({ variables: { email, name, password } })
      .then(ret => {
        // Redirecionando para página de login
        navigate('/login');
      })
  }

  return (
    <>
      <div className="cosmo-auth-section">
        <h1 className="cosmo-auth-title--main">
          Cosmo
          <span className="cosmo-auth-title--main_blue">naut</span>
        </h1>

        <div className="cosmo-auth-section--container">

          <div className="cosmo-auth-section-img"></div>

          <h2 className="cosmo-auth-section-title">
            PRONTO PARA SE TONAR
            <span className="cosmo-auth-section-title--blue">UM ASTRONAUTA?</span>
          </h2>

          <form className="cosmo-auth-form" onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}>
            <label className="cosmo-auth-form-label">Nome</label>
            <input className="cosmo-auth-form-input" type="text" placeholder="Ex: Astronauta007" onChange={e => setName(e.target.value)} required />

            <label className="cosmo-auth-form-label">Email</label>
            <input className="cosmo-auth-form-input" type="email" placeholder="Ex: Astronauta@space.com" onChange={e => setEmail(e.target.value)} required />

            <label className="cosmo-auth-form-label">Senha</label>
            <input className="cosmo-auth-form-input" type="password" placeholder="Ex: *******" minLength="8" onChange={e => setPassword(e.target.value)} required />

            <button className="cosmo-auth-form-button" type="submit">ESTOU PRONTO</button>

          </form>

        </div>
      </div>

      <footer>
        <div className="cosmo-footer-text-contianer">
          <p>
            Math<span className="cosmo-footer-text--blue">eus</span> e
            Dri<span className="cosmo-footer-text--blue">ely</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default RegisterPage;