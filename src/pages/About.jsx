import { ArrowDownToLine } from "lucide-react";
import Headshot from "../assets/TraNguyenHeadshot.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AeIcon from "../assets/AeIcon.svg";
import AiIcon from "../assets/AiIcon.svg";
import cssIcon from "../assets/cssIcon.svg";
import figmaIcon from "../assets/figmaIcon.svg";
import gitIcon from "../assets/gitIcon.svg";
import htmlIcon from "../assets/htmlIcon.svg";
import IdIcon from "../assets/IdIcon.svg";
import javaIcon from "../assets/javaIcon.svg";
import javascriptIcon from "../assets/javascriptIcon.svg";
import PsIcon from "../assets/PsIcon.svg";
import pythonIcon from "../assets/pythonIcon.svg";
import reactIcon from "../assets/reactIcon.svg";

import ToTopButton from "../components/ToTopButton";

export default function About() {
  return (
    <main className="px-6 sm:px-10 lg:px-[12.625rem]">
      <Navbar />

      <section
        className="
          px-6 sm:px-10 lg:px-6 py-[5rem]
          flex flex-col md:flex-row flex-wrap md:flex-nowrap
          items-center md:items-center justify-between gap-10
        "
      >
        {/* Image Block with Gradient Overlay (comes first on mobile) */}
        <div className="order-1 md:order-2 w-full md:w-[25rem] flex-shrink-0 relative rounded-[2rem] overflow-hidden shadow-md">
          <img
            src={Headshot}
            alt="Tra Nguyen"
            className="w-full h-full object-cover rounded-[2rem]"
          />
          <div
            className="absolute inset-0 pointer-events-none rounded-[2rem]"
            style={{
              background:
                "linear-gradient(180deg, #6B6C69 0%, rgba(107,108,105,0) 22.6%, rgba(107,108,105,0) 74.52%, #6B6C69 100%)",
            }}
          />
        </div>

        {/* Text Block (comes second on mobile, left on desktop) */}
        <div className="order-2 md:order-1 w-full md:w-[42rem] text-left">
          <h1 className="text-h4 text-black mb-4">Hi, I'm Tra Nguyen.</h1>
          <p className="text-rg-sm-normal text-black mb-4">
            I first got into UI/UX design by obsessing over game menus as a
            kid—I loved how interfaces could shape the whole experience. Now,
            I'm studying Computer Science and UI/UX Design at Cal Poly San Luis
            Obispo, aiming to become a designer who understands both creative
            and technical sides of product building.
          </p>
          <p className="text-rg-sm-normal text-black mb-6">
            In my free time, I enjoy reading webcomics and manga, playing games,
            and drawing silly caricatures of my friends.
          </p>
          <a
            href="/TraNguyen_Resume_2025.pdf"
            download
            className="group inline-flex items-center gap-2 px-4 py-2 border-2 text-black text-sm-medium cursor-pointer"
            style={{
              borderRadius: "2rem",
              border: "2px solid var(--text-mediumgray)",
              background: "var(--bg-gray30)",
            }}
          >
            <span className="transition-transform duration-300 ease-in-out group-hover:scale-110">
              <ArrowDownToLine size={16} />
            </span>
            <span className="transition-transform duration-300 ease-in-out group-hover:scale-110 text-rg-sm-normal">
              Resume
            </span>
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 sm:px-10 lg:px-6 py-[5rem]">
        <h2 className="text-h4 mb-8 text-black">Education</h2>
        <div className="flex flex-col gap-10">
          {/* University */}
          <div className="flex flex-col md:flex-row md:gap-[10rem] items-start">
            {/* Details first on mobile */}
            <div className="order-1 md:order-2 flex-1">
              <p className="text-rg-sm-medium text-black">
                California Polytechnic State University, San Luis Obispo
              </p>
              <p className="text-rg-sm-normal text-darkgray">
                B.S. in Liberal Arts and Engineering Studies: Computer Science &
                UI/UX
                <br />
                GPA: 3.8
              </p>
            </div>
            {/* Date second on mobile */}
            <div className="order-2 md:order-1 min-w-[8rem] text-grad text-darkgray">
              <p>Expected Graduation</p>
              <p>June 2027</p>
            </div>
          </div>

          {/* High School */}
          <div className="flex flex-col md:flex-row md:gap-[10rem] items-start">
            {/* Details first on mobile */}
            <div className="order-1 md:order-2 flex-1">
              <p className="text-rg-sm-medium text-black">
                Henry M. Gunn High School
              </p>
              <p className="text-rg-sm-normal text-darkgray">
                Weighted GPA: 4.3
              </p>
            </div>
            {/* Dates second on mobile */}
            <div className="order-2 md:order-1 min-w-[8rem] text-grad text-darkgray">
              <p>Aug 2019 — June 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 sm:px-10 lg:px-6 py-[5rem]">
        <h2 className="text-h4 mb-8 text-black">Experience</h2>
        <div className="flex flex-col gap-10">
          {/* Stanford */}
          <div className="flex flex-col md:flex-row md:gap-[10rem] items-start">
            {/* Dates */}
            <div className="min-w-[8rem] text-grad text-darkgray text-sm-medium">
              <p>June 2024 — June 2025</p>
            </div>
            <div>
              <p className="text-rg-sm-medium text-black">
                Graphic Design Intern{" "}
                <span className="text-rg-sm-italic">
                  @ Asian Liver Center at Stanford University
                </span>
              </p>
              <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                <li>
                  Collaborated with stakeholders to align ad designs with
                  marketing objectives and audience expectations for the Summer
                  and Academic Year internship terms
                </li>
                <li>
                  Led the design and prototyping of an AI chat website specific
                  to HepB and liver cancer
                </li>
                <li>
                  Created engaging graphics and animations for social media to
                  promote events
                </li>
                <li>Managed and maintained the HepB Moms website</li>
              </ul>
            </div>
          </div>

          {/* ASPEN */}
          <div className="flex flex-col md:flex-row md:gap-[10rem] items-start">
            {/* Dates */}
            <div className="min-w-[8rem] text-grad text-darkgray text-sm-medium">
              <p>Aug 2024 — Present</p>
            </div>
            <div>
              <p className="text-rg-sm-medium text-black">
                Graphic Designer + Web Project Coordinator{" "}
                <span className="text-rg-sm-italic">
                  @ Advanced Systems for Power Engineering, Inc.
                </span>
              </p>
              <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                <li>
                  Collaborated with ASPEN executives and a web developer to
                  redesign the company website, ensuring a user-friendly
                  experience for both new and returning clients
                </li>
                <li>
                  Proposed optimized layouts and user flows to enhance
                  navigation and improve overall usability
                </li>
                <li>
                  Designed visually appealing website graphics using Adobe
                  Illustrator and Adobe Photoshop to align with ASPEN's branding
                </li>
                <li>
                  Designed advertisements for engineering magazines, including
                  T&D World and IEEE Power & Energy, showcasing ASPEN's
                  engineering software products such as OneLiner and PowerFlow
                </li>
              </ul>
            </div>
          </div>

          {/* H4I */}
          <div className="flex flex-col md:flex-row md:gap-[10rem] items-start">
            {/* Dates */}
            <div className="min-w-[8rem] text-grad text-darkgray text-sm-medium">
              <p>Oct 2024 — Present</p>
            </div>
            <div>
              <p className="text-rg-sm-medium text-black">
                UI/UX Designer{" "}
                <span className="text-rg-sm-italic">@ Hack4Impact</span>
              </p>
              <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                <li>
                  Designed a responsive website for the Central Coast Heritage
                  Tree Foundation, featuring distinct admin and volunteer
                  interfaces
                </li>
                <li>
                  Created dashboards and data tables to log and manage tree and
                  user information effectively
                </li>
              </ul>
            </div>
          </div>

          {/* iter8 */}
          <div className="flex flex-col md:flex-row md:gap-[10rem] items-start">
            {/* Dates */}
            <div className="min-w-[8rem] text-grad text-darkgray text-sm-medium">
              <p>Oct 2024 — Present</p>
            </div>
            <div>
              <p className="text-rg-sm-medium text-black">
                UI/UX Designer{" "}
                <span className="text-rg-sm-italic">@ CalPoly Iter8</span>
              </p>
              <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                <li>
                  Conducted competitor analysis, user stories, and feature
                  prioritization using an effort vs. impact matrix
                </li>
                <li>
                  Designed a task-based messaging system modeled after
                  Slack/Discord with servers, channels, and DMs
                </li>
                <li>
                  Ran user interviews and affinity mapping to improve IA and UI
                  in high-fidelity iterations
                </li>
                <li>
                  Collaborated on A/B testing and user flows to refine early
                  navigation and structure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and skills */}
      <section className="px-6 sm:px-10 lg:px-6 py-[5rem]">
        <h2 className="text-h4 mb-8 text-black">Tools + Skills</h2>
        <div className="flex flex-col items-start gap-12">
          {/* Tool Icons Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-10 gap-y-14 overflow-visible">
            {[
              { src: figmaIcon, label: "Figma" },
              { src: PsIcon, label: "Photoshop" },
              { src: AiIcon, label: "Illustrator" },
              { src: IdIcon, label: "InDesign" },
              { src: AeIcon, label: "After Effects" },
              { src: gitIcon, label: "Git" },
              { src: htmlIcon, label: "HTML5" },
              { src: cssIcon, label: "CSS3" },
              { src: reactIcon, label: "React" },
              { src: javascriptIcon, label: "JavaScript" },
              { src: pythonIcon, label: "Python" },
              { src: javaIcon, label: "Java" },
            ].map((tool, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center justify-center cursor-pointer"
              >
                <img
                  src={tool.src}
                  alt={tool.label}
                  className="w-12 h-12 object-contain transition-transform duration-200 group-hover:scale-110"
                />

                {/* Always-visible on mobile */}
                <div
                  className="
    sm:hidden mt-2 text-tiny-normal text-darkgray text-center max-w-[3.7rem] truncate
  "
                >
                  {tool.label}
                </div>

                {/* Hover-animated on desktop */}
                <div
                  className="
    absolute bottom-[-1.8rem]
    text-sm-normal text-darkgray text-center
    opacity-0 translate-y-1
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-300 ease-in-out
    w-[6rem] px-1
    hidden sm:block
  "
                >
                  {tool.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Labels Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-4 text-rg-sm-normal text-black">
            <span>Prototyping</span>
            <span>User Research</span>
            <span>Usability Testing</span>
            <span>Visual Design</span>
            <span>Design Systems</span>
          </div>
        </div>
      </section>

      <ToTopButton />

      <Footer />
    </main>
  );
}
