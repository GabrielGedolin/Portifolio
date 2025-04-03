import Head from 'next/head';
import React from 'react';

export default function Estatisticas() {
  return (
    <>
      <Head>
        <title>Portfolio - Gabriel Gedolin</title>
      </Head>

      <div style={{ alignItems:"center", margin:"10px", animation:"1s"}} className="l-50 portfolio-container">
        <div className="github-stats">
          <img
            alt="Estatísticas do GitHub de GahCyber"
            className="github-image"
            src="https://github-readme-stats.vercel.app/api?username=GabrielGedolin&show_icons=true&theme=highcontrast&include_all_commits=true&locale=pt-br"
          />
        </div>
      </div>

      
    </>
  );
}
