import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GET_LOGIN } from '../graphql/Users/Query';
import { useLazyQuery } from '@apollo/client';
import { UserContext } from '../context/User';

function LoginPage() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [credential, setCredential] = useState(false);

  const [loadLogin] = useLazyQuery(GET_LOGIN);
  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  //Função de login
  const handleLogin = () => {
    loadLogin({ variables: { email } })
      .then(lazy => {
        const user = lazy.data.users[0];

        //Verificação se a senha é a mesma do banco de dados
        if (user.password === pass) {
          const { name } = user;
          //Adicionando usuário logado no contexto de user
          setCurrentUser(name);
          // Redirecionando para Home
          navigate('/')
        } else
          //Mostrando mensagem de credencial inválida
          setCredential(true);
      });
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
            BEM-VINDO
            <span className="cosmo-auth-section-title--blue">ASTRONAUTA</span>
          </h2>

          <form className="cosmo-auth-form" onSubmit={e => e.preventDefault()}>
            <label className="cosmo-auth-form-label">Email</label>
            <input className="cosmo-auth-form-input" type="email" placeholder="Ex: Astronauta@space.com" onChange={e => setEmail(e.target.value)} required />

            <label className="cosmo-auth-form-label">Senha</label>
            <input className="cosmo-auth-form-input" type="password" placeholder="Ex: *******" minLength="8" onChange={e => setPass(e.target.value)} required />

            <span className="cosmo-auth-form-erro">
              {credential ? 'Desculpe astronauta mais suas credenciais estão inválidas!' : ''}
            </span>

            <span className="cosmo-auth-form-text">
              AINDA NÃO É UM ASTRONAUTA?
              <Link className="cosmo-auth-form-text--blue" to="/register">CADASTRE-SE</Link>
            </span>

            <button className="cosmo-auth-form-button" type="submit" onClick={handleLogin}>Viajar</button>

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

export default LoginPage;