// Home Component
import { Contact } from "./_components/contacts";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Navigation } from "./_components/navigation";
import { Projects } from "./_components/projects";
import { Socials } from "./_components/socials";
import { Skills } from "./_components/skills";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Background } from "./_components/ui/Background";


export default function Home() {
return (
    <div className="font-raleway bg-black min-h-screen">
      <Background>
        <div className="relative z-10">
          <Navbar />
          <div className="max-w-[1400px] mx-auto">
            <section id="profile">
              <Hero />
            </section>
            
            {/* New Skills Section */}
            <section id="skills" className="my-20">
              <Skills />
            </section>

            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
          <Socials />
          <Navigation />
        </div>
      </Background>
    </div>
  );
}
