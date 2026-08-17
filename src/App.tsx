import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
import Capabilities from './components/Capabilities';
import ProjectGrid from './components/ProjectGrid';
import EngineeringMindset from './components/EngineeringMindset';
import Research from './components/Research';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Capabilities />
        <ProjectGrid />
        <EngineeringMindset />
        <Research />
        <TechStack />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
