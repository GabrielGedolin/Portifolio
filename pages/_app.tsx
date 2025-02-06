import '../styles/_styles.scss';
import '../styles/app.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react"


export default function Portfolio(): any {
  return (
    <>

      <Head>
        <title>Gabriel Gedolin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <header className="bg-primary text-white text-center p-5">
      <h1>Gabriel Gedolin</h1>
      <p>Desenvolvedor Full-Stack | JavaScript | TypeScript | Node.js | React | Next.js | HTML | CSS | SQL| APIs | Bootstrap | SASS | Python</p>
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
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tarefas</h5>
                <p className="card-text">ㅤ</p>
                <a href="https://tarefas-psi.vercel.app/" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Calculadora</h5>
                <p className="card-text">ㅤ</p>
                <a href="https://calculadora-olive-sigma.vercel.app/" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 3</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 4</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 5</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 6</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 7</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 8</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 9</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 10</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 11</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 12</h5>
                <p className="card-text">Descrição do projeto.</p>
                <a href="#" className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p>Entre em contato: <a href="https://bit.ly/4hDP6v9" className="text-white">gabrielgedoli@gmail.com</a></p>
      </footer>
    </>
  );
}
