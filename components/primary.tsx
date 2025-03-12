import Head from 'next/head';
import React from 'react';

export default function Primary() {
  return (
    <>
      <Head>
        <title>Portfolio - GahCyber</title>
      </Head>

      <div className="portfolio-container">
        <div className="github-stats">
          <img
            alt="Estatísticas do GitHub de GahCyber"
            className="github-image"
            src="https://github-readme-stats.vercel.app/api?username=GahCyber&show_icons=true&theme=highcontrast&include_all_commits=true&locale=pt-br"
          />
        </div>

        <div className="github-stats">
          <img
            alt="Linguagens mais usadas por GahCyber no GitHub"
            className="github-image"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=GahCyber&theme=highcontrast&layout=compact&custom_title=Tecnologias&langs_count=9"
          />
        </div>
      </div>

      <style jsx>{`
        .portfolio-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          justify-content: center;
          padding: 20px;
        }

        .github-stats {
          background-color: #efeaa7;
          padding: 10px;
          text-align: center;
          margin-bottom: 20px;
          border-radius: 8px; /* Adiciona bordas arredondadas */
        }

        .github-image {
          max-width: 100%;
          height: auto;
        }

        @media (min-width: 768px) {
          .portfolio-container {
            flex-direction: row;
            gap: 20px;
          }

          .github-stats {
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}
