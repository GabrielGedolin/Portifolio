import Head from 'next/head';
import React from 'react';
import Primary from "../components/primary.tsx"
export default function Portfolio(): any {
  return (
    <>
      <Head>
        <title>Gabriel Gedolin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Bootstrap CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        
        {/* Bootstrap Icons CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <header className="h-100 position-absolute bg-dark text-center p-5 w-40 top-0 left-0 d-flex">
        <div className="text-center bg-dark d-flex flex-column align-items-center">
          <div className="bg-light text-center  rounded-circle" style={{ width: '270px', height: '270px' }}>
            <img
            
              src="./img/foto.jpg"
              alt="Gabriel Gedolin"
              className="rounded-circle w-100 h-100"
              style={{ width:"270px", objectFit: 'cover' }}
            />
          </div>

          <h1 className="display-4 font-weight-bold text-light mt-4">Gabriel Gedolin</h1>
          <p className="lead text-light">Desenvolvedor Full-Stack Junior</p>

          {/* Social Icons */}
          <div className="mt-3">
            <a href="https://github.com/GabrielGedolin" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
              <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://instagram.com/gabriel_gedolin" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
              <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-gedolin-1973a5247/" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
              <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-4 ">
            <button className="btn btn-light  w-50" style={{ marginRight:"10px", marginTop:"40px", fontSize: "20px", fontFamily: "monospace" }}>Projetos</button>
            <button className="btn btn-light  w-50" style={{ marginRight:"10px", marginTop:"40px", fontSize: "20px", fontFamily: "monospace" }}>Competências</button>
            <button className="btn btn-light  w-50" style={{ marginRight:"10px", marginTop:"40px", fontSize: "20px", fontFamily: "monospace" }}>Certificados</button>
          </div>
        </div>
      </header>
        <Primary/>
    </>
  );
}
