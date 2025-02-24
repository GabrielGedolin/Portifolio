import '../styles/_styles.scss';
import '../styles/app.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Head from 'next/head';
import React from 'react';

export default function Portfolio(): any {
  return (
    <>
      <Head>
        <title>Gabriel Gedolin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="bg-warning text-white text-center p-5">
        <h1 className="display-4 font-weight-bold">Gabriel Gedolin</h1>
        <p className="lead">Desenvolvedor Full-Stack</p>

        {/* Skills Icons */}
        <div className="d-flex justify-content-center flex-wrap">
          {['html5', 'css3', 'javascript', 'typescript', 'react', 'nextdotjs', 'bootstrap', 'sass', 'git', 'python'].map((icon, index) => (
            <img
              key={index}
              alt={icon}
              title={icon}
              width="50px"
              className="m-2"
              src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${icon}.svg`}
            />
          ))}
        </div>

        {/* Social Icons */}
        <div className="d-flex justify-content-center mt-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-3">
            <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-3">
            <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-3">
            <i className="bi bi-facebook" style={{ fontSize: '2rem' }}></i>
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="container mt-5">
        <h2 className="text-center mb-4">Projetos</h2>
        <div className="row">
          {['Tarefas', 'Calculadora', 'EcoCity', 'Projeto 4', 'Projeto 5', 'Projeto 6', 'Projeto 7', 'Projeto 8', 'Projeto 9', 'Projeto 10', 'Projeto 11', 'Projeto 12'].map((title, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm border-light">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">ㅤ</p>
                  <a href="#" className="btn btn-warning text-dark">Ver mais</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p>Entre em contato: <a href="https://bit.ly/4hDP6v9" className="text-white">gabrielgedoli@gmail.com</a></p>
      </footer>
    </>
  );
}
