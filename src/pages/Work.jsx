import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import bespokeProjectImg from '../assets/bespoke.jpg';
import gemlatoProjectImg from '../assets/gemlato/gemlatoBanner.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Work() {
  useEffect(() => {
    document.title = 'Tra Nguyen | Work';
  }, []);
  return (
    <main className="mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-[8rem]">
      <Navbar />

      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </Motion.div>

      <section className="py-12 flex flex-col gap-20">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/gemlato">
            <ProjectCard
              title="Structuring Trust for a Local Artisan Brand"
              description="Leading a research-driven redesign for a local artisanal gelato shop."
              image={gemlatoProjectImg}
            />
          </Link>
        </Motion.div>
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link to="/bespoke">
            <ProjectCard
              title='Designing "Slack" for Property Management'
              description="Creating structured collaboration for luxury property management."
              image={bespokeProjectImg}
            />
          </Link>
        </Motion.div>
      </section>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Footer />
      </Motion.div>
    </main>
  );
}
