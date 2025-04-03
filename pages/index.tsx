import ProfileSection from '../components/ProfileSection';
import SkillsSection from '../components/SkillsSection';
import Projects from '../components/Projects';

export default function MinimalistPortfolio() {
  return (
    <main className="vh-100 d-flex flex-column bg-body overflow-hidden">
      <div className="container-fluid h-100">
        <div className="row g-0 h-100"> {/* Removed gutters with g-0 */}
          {/* Left Column - Profile */}
          <div className="col-md-4 col-lg-3 h-100 border-end border-secondary d-flex flex-column">
            <div className="flex-grow-1 d-flex align-items-center">
              <ProfileSection />
            </div>
          </div>

          {/* Right Column - Skills and Experience */}
          <div className="col-md-8 col-lg-9 h-100 d-flex flex-column">
            {/* Skills Section */}
            <div className="flex-shrink-0"> {/* Prevent growing */}
              <SkillsSection />
            </div>

            {/* Experience Section */}
            <div className="flex-grow-1 overflow-auto"> {/* Allow scrolling only here if needed */}
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}