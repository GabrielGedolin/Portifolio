import Head from 'next/head';
import React from 'react';

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Sobre Mim</title>
      </Head>
      <div style={{ fontFamily: 'monospace', padding: '20px',textAlign:"center", lineHeight: '1.6' }}>
        <h5>
          Sou um desenvolvedor full-stack com experiência em JavaScript, TypeScript, Node.js, React, Next.js, Python e SQL. 
          Tenho conhecimento em algoritmos, estruturas de dados e orientação a objetos, além de já ter trabalhado com APIs, 
          bancos de dados e sistemas em produção. Atualmente, estou aprendendo Java e sempre busco aprimorar minhas habilidades 
          para ganhar mais experiência prática no mercado.
        </h5>
      </div>
    </>
  );
}
