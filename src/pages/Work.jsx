import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import bespokeProjectImg from "../assets/bespoke.jpg";
import sliProjectImg from "../assets/sli.jpg";
import cchtfProjectImg from "../assets/cchtf.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <main className="px-6 sm:px-10 lg:px-[12.625rem]">
      <Navbar />
      <Hero />
      <section className="py-12">
        <Link to="/bespoke">
          <ProjectCard
            title="Bespoke App"
            description="A project management app for the Bespoke Home Management Team."
            image={bespokeProjectImg}
          />
        </Link>
        <ProjectCard
          title="SLI Website"
          description="A website redesign for the Sustainable Land Initiative, focused on improving equipment rentals and admin tools."
          image={sliProjectImg}
        />
        <ProjectCard
          title="CCHTF Portal"
          description="Central Coast Tree Heritage Foundation's platform for recording tree and user information."
          image={cchtfProjectImg}
        />
      </section>
      <Footer />
    </main>
  );
}
