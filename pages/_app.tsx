import '../styles/_styles.scss';
import '../styles/app.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Head from 'next/head';
import React from "react";

const Portfolio: React.FC = () => {
  return (
    <>
      <Head>
        <title>Gabriel Gedolin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-primary text-white text-center p-5">
        <h1>Gabriel Gedolin</h1>
        <p>Desenvolvedor Full-Stack</p>
        <div>
          <img alt="HTML" title="HTML" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" />
          <img alt="CSS" title="CSS" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" />
          <img alt="JavaScript" title="JavaScript" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" />
          <img alt="TypeScript" title="TypeScript" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg" />
          <img alt="React" title="React" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" />
          <img alt="Next.js" title="Next.js" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg" />
          <img alt="Bootstrap" title="Bootstrap" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg" />
          <img alt="SASS" title="SASS" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sass.svg" />
          <img alt="Git" title="Git" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" />
          <img alt="Python" title="Python" width="50px" style={{ paddingRight: '10px' }} src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" />
        </div>

        <div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" style={{ fontSize: '2rem', color: '#000' }}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram" style={{ fontSize: '2rem', color: '#000' }}></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook" style={{ fontSize: '2rem', color: '#000' }}></i>
          </a>
        </div>
      </header>

      <section className="container mt-5">
        <h2 className="text-center">Projetos</h2>
        <div className="row mt-4">
          {/* Loop through your project items if you need to add more */}
          {[
            { title: 'Tarefas', link: 'https://tarefas-psi.vercel.app/' },
            { title: 'Calculadora', link: 'https://calculadora-olive-sigma.vercel.app/' },
            { title: 'EcoCity', link: 'https://eco-city-eta.vercel.app/' },
            // Add more project details here
          ].map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">Description of the project</p>
                  <a href={project.link} className="btn btn-primary">Ver mais</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p>Entre em contato: <a href="https://bit.ly/4hDP6v9" className="text-white">gabrielgedoli@gmail.com</a></p>
      </footer>
    </>
  );
}

export default Portfolio;
