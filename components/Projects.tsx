const Projects = () => {
  const experiences = [
    {
      role: 'Eco City',
      period: '15/02/2025 - Presente',
      highlights: 'Eco City é uma plataforma em Next.js para adoção e preservação de zonas verdes, incentivando a sustentabilidade.',
      link:"https://eco-city-azure.vercel.app/"
    },
  ];

  return (
    <>
      <div className="bg-black text-white px-4">
        <div className="mx-0">
          <div className="mb-3">
            <h3 className="h5 fw-semibold text-white text-start">Projetos</h3>
            <hr className="my-2 bg-white" />
          </div>
  
          <div className="vstack gap-3">
            {experiences.map((exp) => (
              <a
                key={exp.role} // Adicionado key para evitar erro no React
                href={exp.link}
                className="position-relative ps-4 border-start border-2 border-white pd-4"
              >
                <div
                  className="position-absolute start-0 translate-middle-x top-0 rounded-circle bg-white"
                  style={{ width: "10px", height: "10px", top: "14px" }}
                />
  
                <div className="vstack gap-1">
                  <div className="d-flex flex-column flex-md-row justify-content-md-between">
                    <h4 className="h6 fw-medium text-white mb-0">{exp.role}</h4>
                    <span className="text-white-50 small">{exp.period}</span>
                  </div>
                  <p className="small text-white-50 lh-sm mb-0">{exp.highlights}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
  
        {/* Estilos globais aplicados corretamente */}
        <style jsx global>{`
          a {
            text-decoration: none;
          }
        `}</style>
      </div>
    </>
  );
  

};

export default Projects;