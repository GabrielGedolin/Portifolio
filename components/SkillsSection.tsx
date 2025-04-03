
import Estatisticas from "./estatisticas";

const SkillsSection = () => {
  // Objeto com os caminhos dos ícones SVG ou classes do Bootstrap
  const skillIcons = {
    'HTML': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    'CSS': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    'Bootstrap': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'},
    'React': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    'Sass': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
    'TypeScript': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    'Python': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    'Java': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    'Git': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    'Next.js': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    'MySQL': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    'PostgreSQL': { type: 'devicon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' }
  };


  const skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'Bootstrap', 'React', 'Sass',  'Next.js'],
      icon: 'bi-layout-sidebar'
    },
    {
      category: 'Backend & Linguagens',
      items: ['TypeScript', 'Python', 'Java'],
      icon: 'bi-code-slash'
    },
    {
      category: 'Ferramentas',
      items: ['Git'],
      icon: 'bi-tools'
    },
    {
      category: 'Banco de Dados',
      items: ['MySQL', 'PostgreSQL'],
      icon: 'bi-database'
    }
  ];

  const SkillIcon = ({ skill }) => {
    const icon = skillIcons[skill];
    
    if (icon.type === 'devicon') {
      return (
        <img 
          src={icon.src} 
          alt={skill} 
          style={{ 
            width: '20px', 
            height: '20px',
            
          }} 
        />
      );
    } else {
      return <i className={`bi ${icon.class} text-white fs-5`}></i>;
    }
  };

  return (
    <div className="py-5 bg-black px-4">
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="mb-4 ps-3">
          <h3 className="h4 fw-semibold text-white text-start mb-2">Skills</h3>
          <hr className="border-white m-0" style={{ width: '100px' }} />
        </div>

        <div className="row g-4 px-3">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="col-md-6">
              <div className="d-flex align-items-center gap-3 mb-3">
                <i className={`bi ${skillGroup.icon} text-white fs-4`}></i>
                <h4 className="h6 fw-medium text-white mb-0">
                  {skillGroup.category}
                </h4>
              </div>
              <div className="d-flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="badge rounded-pill bg-dark text-white border border-white px-3 py-2 d-flex align-items-center gap-2"
                  >
                    <SkillIcon skill={skill} />
                    <span className="fw-medium">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;