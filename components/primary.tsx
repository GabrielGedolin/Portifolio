import Head from 'next/head';
import React from 'react';

export default function Portfolio(): any {
  return (
    <>
      <div style={{height:"100vh"}} className="w-100">
        <div style={{textAlign:"center", backgroundColor:"#efeaa7",padding:"10px"}}>
          <img 
            align="center" 
            alt="GitHub Stats" 
            height="200" 
            src="https://github-readme-stats.vercel.app/api?username=GahCyber&show_icons=true&theme=highcontrast&include_all_commits=true&locale=pt-br" 
          />
        </div>
        <br/>
        <div style={{textAlign:"center", backgroundColor:"#efeaa7",padding:"10px"}}>
          <img 
            align="center" 
            alt="GitHub Stats" 
            height="200" 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=GahCyber&theme=highcontrast&layout=compact&custom_title=Tecnologias&langs_count=9" 
          />
        </div>
      </div>  
    </>
  );
}
