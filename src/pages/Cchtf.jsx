import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CchtfHero from "../assets/cchtf.jpg";
import ImageLightbox from "../components/ImageLightbox";
import TwoColumnSection from "../components/TwoColumnSection";
import ToTopButton from "../components/ToTopButton";
import { Link, BookOpen, PenTool } from "lucide-react";

export default function Cchtf() {
  return (
    <main className="px-6 sm:px-10 lg:px-[12.625rem]">
      <Navbar />

      {/* Hero Image */}
      <section className="pt-10">
        <img
          src={CchtfHero}
          alt="CCHTF Portal mockup"
          className="h-[20rem] md:h-[32.5rem] w-full object-cover rounded-[2rem]"
        />
      </section>

      {/* Project Info */}
      <section className="py-10">
        <h1 className="text-h4 text-black mb-8">CCHTF Portal</h1>
        <TwoColumnSection
          title={
            <div>
              <p className="text-h6 text-darkgray mb-1">Role</p>
              <p className="text-rg-sm-normal">Product Designer</p>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row md:gap-[10rem] gap-[2rem]">
            <div className="max-w-[20rem]">
              <p className="text-h6 text-darkgray mb-1">Team</p>
              <p className="text-rg-sm-normal">
                <span className="text-rg-sm-medium">Project Manager: </span>{" "}
                Yujiun Lee
              </p>
              <p className="text-rg-sm-normal">
                <span className="text-rg-sm-medium">Designers: </span> Tra
                Nguyen (me!), Cassia Gray, Zoe Li
              </p>
            </div>
            <div>
              <p className="text-h6 text-darkgray mb-1">Duration</p>
              <p className="text-rg-sm-normal">
                Nov 2024 — June 2025 (8 months)
              </p>
            </div>
          </div>
        </TwoColumnSection>
      </section>

      {/* Content Sections */}
      <section className="py-10 flex flex-col gap-[4.5rem]">
        {/* Overview */}
        <TwoColumnSection title="Overview">
          <p className="text-rg-sm-normal text-black">
            I collaborated with two other UX designers to design a web portal
            for Central Coast Tree Heritage, a nonprofit organization focused on
            preserving and tracking regional tree data. Our goal was to create a
            functional, intuitive interface for two user types—volunteers and
            administrators—with clearly differentiated access and tasks. This
            was the organization's first digital platform, so we designed the
            portal from the ground up, including a fully customized design
            system.
          </p>
        </TwoColumnSection>

        {/* Problem */}
        <TwoColumnSection title="Problem">
          <p className="text-rg-sm-normal text-black">
            Central Coast Tree Heritage previously tracked tree data manually,
            which led to inconsistent record-keeping, difficulty accessing
            information, and limited collaboration between volunteers and
            administrators. The nonprofit needed a centralized digital system
            that would allow volunteers to log tree data in the field and admins
            to manage and analyze contributions effectively.
          </p>
        </TwoColumnSection>
      </section>

      {/* Scroll to Top Button */}
      <ToTopButton />

      <Footer />
    </main>
  );
}
