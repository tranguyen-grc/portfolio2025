import { ArrowDownToLine } from 'lucide-react';
import Headshot from '../assets/TraNguyenHeadshot.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import AeIcon from '../assets/AeIcon.svg';
import AiIcon from '../assets/AiIcon.svg';
import cssIcon from '../assets/cssIcon.svg';
import figmaIcon from '../assets/figmaIcon.svg';
import gitIcon from '../assets/gitIcon.svg';
import htmlIcon from '../assets/htmlIcon.svg';
import IdIcon from '../assets/IdIcon.svg';
import javaIcon from '../assets/javaIcon.svg';
import javascriptIcon from '../assets/javascriptIcon.svg';
import PsIcon from '../assets/PsIcon.svg';
import pythonIcon from '../assets/pythonIcon.svg';
import reactIcon from '../assets/reactIcon.svg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ToTopButton from '../components/ToTopButton';

const timelineRowClass =
  'flex flex-col gap-y-2 md:grid md:grid-cols-[12rem_minmax(0,1fr)] md:gap-x-16 lg:gap-x-20 items-start';
const timelineDateClass = 'text-grad text-darkgray md:col-start-1 md:row-start-1';
const timelineContentClass = 'min-w-0 md:col-start-2 md:row-start-1';

const fadeInReveal = {
  'data-aos': 'fade-up',
  'data-aos-duration': '700',
  'data-aos-easing': 'ease-out-quart',
};

const heroTextReveal = {
  ...fadeInReveal,
  'data-aos-duration': '750',
};

const heroImageReveal = {
  ...fadeInReveal,
  'data-aos-duration': '850',
  'data-aos-delay': '120',
};

export default function About() {
  useEffect(() => {
    document.title = 'Tra Nguyen | About';
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-quart',
      once: true,
      offset: 80,
      delay: 0,
      anchorPlacement: 'top-bottom',
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);
  return (
    <main className="mx-auto max-w-[100rem] px-6 sm:px-10 lg:px-[8rem]">
      <Navbar />

      <section
        className="
          py-[5rem]
          flex flex-col md:flex-row flex-wrap md:flex-nowrap
          items-center md:items-center justify-between gap-10
        "
      >
        {/* Image Block with Gradient Overlay (comes first on mobile) */}
        <div
          className="order-1 md:order-2 w-full md:w-[25rem] flex-shrink-0 relative rounded-[2rem] overflow-hidden shadow-md"
          {...heroImageReveal}
        >
          <img
            src={Headshot}
            alt="Tra Nguyen"
            className="w-full h-full object-cover rounded-[2rem]"
          />
          <div
            className="absolute inset-0 pointer-events-none rounded-[2rem]"
            style={{
              background:
                'linear-gradient(180deg, #6B6C69 0%, rgba(107,108,105,0) 22.6%, rgba(107,108,105,0) 74.52%, #6B6C69 100%)',
            }}
          />
        </div>

        {/* Text Block (comes second on mobile, left on desktop) */}
        <div className="order-2 md:order-1 w-full md:w-[45rem] text-left" {...heroTextReveal}>
          <h1 className="text-h4 text-black mb-4">Hi, I'm Tra Nguyen.</h1>
          <p className="text-rg-sm-normal text-black mb-4">
            I first got into UI/UX design by obsessing over game menus as a kid, noticing how
            interfaces could shape the whole experience. Now, I'm studying UI/UX Design and Computer
            Science at Cal Poly San Luis Obispo, aiming to become a designer who understands both
            creative and technical sides of product building.
          </p>
          <p className="text-rg-sm-normal text-black mb-6">
            In my free time, I enjoy reading webcomics and manga, playing games, and drawing silly
            caricatures of my friends.
          </p>
          <a
            href="/TraNguyen_Resume_2026.pdf"
            download
            className="group inline-flex items-center gap-2 px-4 py-2 border-2 cursor-pointer w-fit transition-all duration-300 ease-in-out hover:scale-[1.015]"
            style={{
              borderRadius: '2rem',
              border: '2px solid var(--text-mediumgray)',
              background: 'var(--bg-gray30)',
            }}
          >
            <span className="text-darkgray transition-opacity duration-200 group-hover:opacity-80">
              <ArrowDownToLine size={16} />
            </span>
            <span className="text-rg-sm-normal transition-colors duration-200 group-hover:text-black">
              Resume
            </span>
          </a>
        </div>
      </section>

      {/* Education Section */}
      <div {...fadeInReveal}>
        <section className="py-[5rem]">
          <h2 className="text-h4 mb-8 text-black">Education</h2>
          <div className="flex flex-col gap-10">
            {/* University */}
            <div className={timelineRowClass}>
              {/* Details first on mobile */}
              <div className={`order-1 md:order-none ${timelineContentClass}`}>
                <p className="text-rg-sm-medium text-black">University of Washington</p>
                <p className="text-rg-sm-normal text-darkgray">
                  Masters in Human Computer Interaction and Design
                </p>
              </div>
              {/* Date second on mobile */}
              <div className={`order-2 md:order-none ${timelineDateClass}`}>
                <p>Expected Graduation</p>
                <p>Aug 2027</p>
              </div>
            </div>
            <div className={timelineRowClass}>
              {/* Details first on mobile */}
              <div className={`order-1 md:order-none ${timelineContentClass}`}>
                <p className="text-rg-sm-medium text-black">
                  California Polytechnic State University, San Luis Obispo
                </p>
                <p className="text-rg-sm-normal text-darkgray">
                  B.S. in Liberal Arts and Engineering Studies: Computer Science & UI/UX
                  <br />
                  Minor in Computer Science
                  <br />
                  Awarded Academic Excellence and Summa Cum Laude
                </p>
              </div>
              {/* Date second on mobile */}
              <div className={`order-2 md:order-none ${timelineDateClass}`}>
                <p>Sep 2023 — Jun 2026</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Experience Section */}
      <div {...fadeInReveal} data-aos-delay="100">
        <section className="py-[5rem]">
          <h2 className="text-h4 mb-8 text-black">Experience</h2>
          <div className="flex flex-col gap-10">
            {/* ASPEN internship */}
            <div className={timelineRowClass}>
              {/* Dates */}
              <div className={`${timelineDateClass} text-sm-medium`}>
                <p>Jan 2025 — Present</p>
              </div>
              <div className={timelineContentClass}>
                <p className="text-rg-sm-medium text-black">
                  Visual Design Intern{' '}
                  <span className="text-rg-sm-italic">
                    @ Advanced Systems for Power Engineering, Inc.
                  </span>
                </p>
                <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                  <li>
                    <li>
                      Design and implement a tutorial hub for browsing, searching, and watching
                      software training videos, improving access to product documentation and
                      learning resources
                    </li>
                  </li>
                  <li>
                    Conduct heuristic evaluation of the UX for an upcoming circuit breaker
                    diagramming software, identifying usability improvements and design
                    recommendations
                  </li>
                  <li>
                    Design ads for T&D World (~50K readership) and IEEE PES (~30K members)
                    magazines, showcasing ASPEN's flagship products (OneLiner, PowerFlow)
                  </li>
                  <li>
                    Create brand styling guidelines and design leaflets for international
                    conferences, supporting global outreach (5K engineers)
                  </li>
                </ul>
              </div>
            </div>

            {/* iter8 */}
            <div className={timelineRowClass}>
              {/* Dates */}
              <div className={`${timelineDateClass} text-sm-medium`}>
                <p>Jan 2026 — Present</p>
              </div>
              <div className={timelineContentClass}>
                <p className="text-rg-sm-medium text-black">
                  UI/UX Designer <span className="text-rg-sm-italic">@ CalPoly Iter8</span>
                </p>
                <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                  <li>
                    Manage and guide a design team in creating a website for Gemlato through Cal
                    Poly Iter8, leading user research and usability testing
                  </li>
                </ul>
              </div>
            </div>

            {/* Stanford */}
            <div className={timelineRowClass}>
              {/* Dates */}
              <div className={`${timelineDateClass} text-sm-medium`}>
                <p>June 2024 — June 2025</p>
              </div>
              <div className={timelineContentClass}>
                <p className="text-rg-sm-medium text-black">
                  Graphic Design Intern{' '}
                  <span className="text-rg-sm-italic">
                    @ Asian Liver Center at Stanford University
                  </span>
                </p>
                <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                  <li>
                    Collaborated with stakeholders across two internship terms (Summer + Academic
                    Year) to align ad designs with marketing objectives and student audience needs
                  </li>
                  <li>
                    Led the design and prototyping of an AI chat website specific to HepB and liver
                    cancer
                  </li>
                  <li>Produced 20+ graphics/animations to promote 8 health events</li>
                  <li>
                    Maintained the HepB Moms website, ensuring accessibility and consistent outreach
                  </li>
                </ul>
              </div>
            </div>

            {/* H4I */}
            <div className={timelineRowClass}>
              {/* Dates */}
              <div className={`${timelineDateClass} text-sm-medium`}>
                <p>Oct 2024 — June 2025</p>
              </div>
              <div className={timelineContentClass}>
                <p className="text-rg-sm-medium text-black">
                  UI/UX Designer <span className="text-rg-sm-italic">@ Hack4Impact</span>
                </p>
                <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                  <li>
                    Designed a responsive website for the Central Coast Heritage Tree Foundation,
                    featuring distinct admin and volunteer interfaces
                  </li>
                  <li>Built dashboards and data tables to manage hundreds of records</li>
                  <li>Collaborated with a 15-person team (developers, PMs, designers, client)</li>
                </ul>
              </div>
            </div>

            {/* iter8 */}
            <div className={timelineRowClass}>
              {/* Dates */}
              <div className={`${timelineDateClass} text-sm-medium`}>
                <p>Oct 2024 — Present</p>
              </div>
              <div className={timelineContentClass}>
                <p className="text-rg-sm-medium text-black">
                  UI/UX Designer <span className="text-rg-sm-italic">@ CalPoly Iter8</span>
                </p>
                <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                  <li>Conducted 10+ user interviews and competitor analysis of 5+ platforms</li>
                  <li>
                    Designed a task-based messaging system modeled after Slack/Discord with servers,
                    channels, and DMs
                  </li>
                  <li>
                    Ran user interviews and affinity mapping to improve IA and UI in high-fidelity
                    iterations
                  </li>
                  <li>
                    Ran A/B testing and user flow refinements with a team of 1 PM + 4 designers
                  </li>
                </ul>
              </div>
            </div>

            {/* ASPEN */}
            <div className={timelineRowClass}>
              {/* Dates */}
              <div className={`${timelineDateClass} text-sm-medium`}>
                <p>Aug 2024 — Dec 2024</p>
              </div>
              <div className={timelineContentClass}>
                <p className="text-rg-sm-medium text-black">
                  Web Project Coordinator{' '}
                  <span className="text-rg-sm-italic">
                    @ Advanced Systems for Power Engineering, Inc.
                  </span>
                </p>
                <ul className="list-disc text-rg-sm-normal text-darkgray pl-5 mt-2 space-y-1">
                  <li>
                    Collaborated with executives and a developer to redesign ASPEN's corporate
                    website, used by 750+ client organizations in 68+ countries
                  </li>
                  <li>
                    Proposed layouts and user flows to improve usability for global clients in the
                    power engineering sector
                  </li>
                  <li>
                    Designed website graphics using Adobe Illustrator and Adobe Photoshop to align
                    with ASPEN's branding
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tools and skills */}
      <div {...fadeInReveal} data-aos-delay="100">
        <section className="py-[5rem]">
          <h2 className="text-h4 mb-8 text-black">Tools + Skills</h2>
          <div className="flex flex-col items-start gap-12">
            {/* Tool Icons Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-10 gap-y-14 overflow-visible">
              {[
                { src: figmaIcon, label: 'Figma' },
                { src: PsIcon, label: 'Photoshop' },
                { src: AiIcon, label: 'Illustrator' },
                { src: IdIcon, label: 'InDesign' },
                { src: AeIcon, label: 'After Effects' },
                { src: gitIcon, label: 'Git' },
                { src: htmlIcon, label: 'HTML5' },
                { src: cssIcon, label: 'CSS3' },
                { src: reactIcon, label: 'React' },
                { src: javascriptIcon, label: 'JavaScript' },
                { src: pythonIcon, label: 'Python' },
                { src: javaIcon, label: 'Java' },
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
      </div>

      <ToTopButton />

      <div {...fadeInReveal} data-aos-delay="150">
        <Footer />
      </div>
    </main>
  );
}
