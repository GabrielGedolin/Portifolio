import Head from 'next/head';
import React from 'react';

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio - GahCyber</title>
      </Head>

      <div className="portfolio-container">
        <div className="github-stats">
          <img
            alt="GitHub Stats"
            className="github-image"
            src="https://github-readme-stats.vercel.app/api?username=GahCyber&show_icons=true&theme=highcontrast&include_all_commits=true&locale=pt-br"
          />
        </div>

        <div className="github-stats">
          <img
            alt="GitHub Top Languages"
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
          height: 100vh;
          justify-content: center;
        }

        .github-stats {
          text-align: center;
          background-color: #efeaa7;
          padding: 10px;
          margin-bottom: 20px;
        }

        .github-image {
          height: 200px;
        }
      `}</style>
    </>
  );
}
