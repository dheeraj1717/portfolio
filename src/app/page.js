// Home Component
import { Contact } from "./_components/contacts";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Navigation } from "./_components/navigation";
import { Projects } from "./_components/projects";
import { Socials } from "./_components/socials";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  return (
    <div className="font-raleway">
      <Navbar />
      <div className="max-w-[1400px] mx-auto">
        <section id="profile">
          <Hero />
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
  );
}
