import Head from 'next/head';
import React from 'react';

export default function Tecnologias() {
  return (
    <>
      <Head>
        <title>Portfolio - Gabriel Gedolin</title>
      </Head>

      <div style={{margin:"10px"}} className=" portfolio-container">
        <div className="github-stats">
          <img
            alt="Linguagens mais usadas por GahCyber no GitHub"
            className="github-image"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=GabrielGedolin&theme=highcontrast&layout=compact&custom_title=Tecnologias&langs_count=9"
          />
        </div>
      </div>

      
    </>
  );
}
