import React, { useContext, useState } from "react";
import Modal from "../ModalPosts/Modal";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/User";

import "./Layout.css";

function Layout({ children }) {

  const { currentUser } = useContext(UserContext);

  return (
    <>
      <header>
        <div className="cosmo-header-logo">

        </div>

        <h1 className="consmo-header-title">Cosmonaut</h1>

        <div className="cosmo-header-buttons_container">
          <Modal />

          {currentUser ?

            <button className="cosmo-header-button">

              <Link to="/login">
                <i className="fa-solid fa-user-astronaut"></i>
                OLÁ,<span className="cosmo-header-button--blue">{currentUser}</span>
              </Link>
            </button>
            : ''
          }
        </div>
      </header>

      <main>
        {children}
      </main>

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

export default Layout;