import React from "react";
import terra from '../assets/image/terra.png';
import Layout from '../components/Layout/Layout';

import './Pages.css';

function HomePage() {
  return (
    <Layout>
      <h2 className="cosmo-home-title">
        Fique
        <span className="cosmo-home-title--blue">de olho</span>
      </h2>

      <section className="cosmo-home-section--container">
        <div className="cosmo-home-box">
          <img src={terra} />

          <div className="cosmo-home-box-content">
            <span className="cosmo-home-box-category">Categoria</span>
            <h3 className="cosmo-home-box-title">Novo planeta é descoberto</h3>
            <button className="cosmo-home-box-button">Ver mais</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;