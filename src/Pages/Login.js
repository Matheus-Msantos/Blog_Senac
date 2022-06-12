import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
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

          <form className="cosmo-auth-form">
            <label className="cosmo-auth-form-label">Email</label>
            <input className="cosmo-auth-form-input" type="email" placeholder="Ex: Astronauta@space.com" />

            <label className="cosmo-auth-form-label">Senha</label>
            <input className="cosmo-auth-form-input" type="password" placeholder="Ex: *******" />

            <span className="cosmo-auth-form-text">
              AINDA NÃO É UM ASTRONAUTA?
              <Link className="cosmo-auth-form-text--blue" to="/register">CADASTRE-SE</Link>
            </span>

            <button className="cosmo-auth-form-button" type="submit">Viajar</button>

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