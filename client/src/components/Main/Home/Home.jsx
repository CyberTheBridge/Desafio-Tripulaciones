import { news } from "./index";
import { v4 as uuidv4 } from 'uuid';
import Gallery from './Gallery/Gallery';
import { useState } from "react";
import Navegation from '../Navegation/Navegation';


const Home = () => {

  const printNews = () => {

    return news.map(item => (
      <Gallery head={item.headline} img={item.img} url={item.url} key={uuidv4()} />
    ));
  }



  return (
    <>
      <section className="homeWrapper">
          <h1>Hola ( NOMBRE DE USUARIO )</h1>
        <article className="progressHomeContainer">
          <h2>Mira tu progreso</h2>
          <img className="progressMapGame" src="assets/Acceso Directo a juego.svg" alt="Progreso" />
          <button className="quizNextQuestion">SEGUIR JUGANDO</button>
        </article>
          <h2>Para ti</h2>
        <article className="galleryHomeContainer">
          <div className="gallery">
          {printNews()}
          </div>
        </article>
      </section>
      <Navegation />
    </>
  );
};

export default Home;
