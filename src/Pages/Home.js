import React from "react";
import Moment from 'moment';
import Layout from '../components/Layout/Layout';
import { GET_POSTS } from '../graphql/Posts/Subscription';
import { useSubscription } from "@apollo/client";

import './Pages.css';

function HomePage() {

  const { data, loading, error } = useSubscription(GET_POSTS);

  //Mapeando os posts
  const MapPosts = data?.posts?.map(post => {
    const { category, created_at, image, title } = post
    const formatDate = Moment(created_at).format('DD-MM-YYYY')
    return (
      <div className="cosmo-home-box">
        <img src={image} />

        <div className="cosmo-home-box-content">
          <span className="cosmo-home-box-category">{formatDate}</span>
          <span className="cosmo-home-box-category">{category}</span>
          <h3 className="cosmo-home-box-title">{title}</h3>
          <button className="cosmo-home-box-button">Ver mais</button>
        </div>
      </div>
    );
  });

  if (loading)
    return <h1>Carregando</h1>

  if (error) {
    console.log(error);
    <h1>ERRO </h1>
  }

  return (
    <Layout>
      <h2 className="cosmo-home-title">
        Fique
        <span className="cosmo-home-title--blue">de olho</span>
      </h2>

      <section className="cosmo-home-section--container">
        {MapPosts}
      </section>
    </Layout>
  );
}

export default HomePage;