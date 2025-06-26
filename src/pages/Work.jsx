import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import bespokeProjectImg from "../assets/bespoke.jpg";
import sliProjectImg from "../assets/sli.jpg";
import cchtfProjectImg from "../assets/cchtf.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    document.title = "Tra Nguyen | Work";
  }, []);
  return (
    <main className="px-6 sm:px-10 lg:px-[12.625rem]">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      <section className="py-12 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link to="/bespoke">
            <ProjectCard
              title="Bespoke App"
              description="A project management app for the Bespoke Home Management Team."
              image={bespokeProjectImg}
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/sli">
            <ProjectCard
              title="SLI Website"
              description="A website redesign for the Sustainable Land Initiative."
              image={sliProjectImg}
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/cchtf">
            <ProjectCard
              title="CCHTF Portal"
              description="Central Coast Tree Heritage Foundation's platform for recording tree and user information."
              image={cchtfProjectImg}
            />
          </Link>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
