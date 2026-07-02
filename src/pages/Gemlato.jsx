import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowDownToLine } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToTopButton from '../components/ToTopButton';
import gemlatoHero from '../assets/gemlato/gemlatoHero.jpg';
import problem1 from '../assets/gemlato/problem1.jpg';
import problem2 from '../assets/gemlato/problem2.jpg';
import problem3 from '../assets/gemlato/problem3.jpg';
import problem4 from '../assets/gemlato/problem4.jpg';
import fix1 from '../assets/gemlato/fix1.jpg';
import fix2 from '../assets/gemlato/fix2.jpg';
import fix3 from '../assets/gemlato/fix3.jpg';
import fix4 from '../assets/gemlato/fix4.jpg';

const sectionReveal = {
  'data-aos': 'fade-up',
  'data-aos-duration': '650',
};

const visualReveal = {
  'data-aos': 'zoom-in-up',
  'data-aos-duration': '700',
};

const challengeGoals = [
  {
    text: "Reflect Gemlato's premium brand",
    className: 'bg-[#D1F4F4]',
  },
  {
    text: 'Showcase what makes their gelato unique',
    className: 'bg-[#D4F2E1]',
  },
  {
    text: 'Help customers answer common questions without calling the shop',
    className: 'bg-[#E5DAEE]',
  },
  {
    text: 'Support future online ordering while encouraging in-store visits',
    className: 'bg-[#F6D8EA]',
  },
];

const researchMethods = [
  {
    text: 'Stakeholder interviews',
    className: 'bg-[#F6D8EA] md:col-span-1',
  },
  {
    text: 'User interviews with target groups: students, families, and professionals in SLO',
    className: 'bg-[#D1F4F4] md:col-span-3',
  },
  {
    text: 'Competitive analysis',
    className: 'bg-[#E5DAEE] md:col-span-1',
  },
  {
    text: 'Personas and need statements',
    className: 'bg-[#D4F2E1] md:col-span-2',
  },
  {
    text: 'Journey mapping and storyboards',
    className: 'bg-[#F6D8EA] md:col-span-1',
  },
];

const researchInsights = [
  {
    title: 'Flavor discovery drives decision-making.',
    description:
      "Most customers didn't know what they wanted before arriving. Instead, they relied on visuals, descriptions, and recommendations to narrow their choices.",
  },
  {
    title: 'Trust reduces purchase hesitation.',
    description:
      'Customers looked for ingredient transparency, dietary information, reviews, and evidence of craftsmanship before trying a new dessert shop.',
  },
  {
    title: 'Ice cream is a social experience.',
    description:
      'Users viewed dessert as an activity shared with friends, family, or after dinner.',
  },
];

const taskFlows = [
  {
    title: 'Explore flavors and discover something appealing.',
    description:
      'Browse flavors with guidance from featured flavors, descriptive tags, and customer reviews.',
  },
  {
    title: 'Find a flavor with confidence.',
    description:
      'Pick with guidance from featured flavors, descriptive tags, and customer reviews.',
  },
  {
    title: 'Make an informed gelato choice that fits your needs.',
    description:
      'Understand what allergens are in each ingredient and see if it fits your dietary needs.',
  },
  {
    title: "Learn Gemlato's story and values.",
    description: "Understand Gemlato's story and what sets them apart from other gelato shops.",
  },
];

const prototypeProblems = [
  {
    src: problem1,
    alt: 'Low-fidelity flavors shop page',
    caption: 'Users confused the flavors shop pages.',
  },
  {
    src: problem2,
    alt: 'Button state prototype',
    caption: 'Some button states were hard to decipher.',
  },
  {
    src: problem3,
    alt: 'Flavor menu page',
    caption: 'Users had difficulty finding a specific flavor in the menu.',
  },
  {
    src: problem4,
    alt: 'Inconsistent flavor icons',
    caption: 'Some users were confused about inconsistent icons.',
  },
];

const prototypeFixes = [
  {
    src: fix1,
    alt: 'Updated navigation label to Order Online',
    caption: 'Renaming Shop to Order Online',
  },
  {
    src: fix4,
    alt: 'Expanded disabled button state colors',
    caption: 'Expanding our design system colors to better communicate disabled states',
  },
  {
    src: fix3,
    alt: 'Alphabetized flavor grid',
    caption: "Sorting the flavors alphabetically to match users' mental model",
  },

  {
    src: fix2,
    alt: 'Standardized flavor and allergen tags',
    caption:
      'Standardizing flavor and allergen icons, then turning them into tags to minimize confusion',
  },
];

export default function Gemlato() {
  useEffect(() => {
    document.title = 'Tra Nguyen | Gemlato';
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: 'ease-out-quart',
      once: true,
      offset: 96,
      delay: 0,
      anchorPlacement: 'top-bottom',
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[80rem] px-6 sm:px-10 lg:px-[12.625rem]">
        <article aria-labelledby="gemlato-title">
          <figure className="pt-10" {...visualReveal}>
            <img
              src={gemlatoHero}
              alt="Gemlato web app mockup"
              className="h-[20rem] w-full rounded-[2rem] object-cover md:h-[32.5rem]"
              fetchPriority="high"
            />
          </figure>

          <header className="py-10" {...sectionReveal}>
            <h1 id="gemlato-title" className="mb-3 text-h4 text-black">
              Structuring Trust for a Local Artisan Brand
            </h1>

            <p className="mb-10 text-lg-rg-normal text-darkgray">
              Leading a research-driven redesign for a local artisanal gelato shop.
            </p>

            <dl
              className="grid w-full grid-cols-1 gap-6 border-y border-mediumgray py-6 md:grid-cols-4"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <div>
                <dt className="mb-3 text-h6 text-gemlato">Client</dt>
                <dd className="text-rg-sm-normal text-black">Gemlato</dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-gemlato">Role</dt>
                <dd className="text-rg-sm-normal text-black">Project Manager, UX Designer</dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-gemlato">Team</dt>
                <dd className="text-rg-sm-normal text-black">6 designers</dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-gemlato">Duration</dt>
                <dd className="text-rg-sm-normal text-black">Jan 2026 - May 2026</dd>
              </div>
            </dl>
          </header>

          <div className="flex flex-col gap-[10rem] py-10">
            <section
              aria-labelledby="overview-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="overview-heading" className="text-h6 uppercase text-gemlato">
                Overview
              </h2>
              <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
                <p>
                  Gemlato is an artisanal gelato shop in downtown San Luis Obispo known for its
                  handcrafted recipes and premium ingredients. While the in-store experience felt
                  sophisticated and memorable, its website was a temporary placeholder that failed
                  to communicate the brand's identity or support customers' decision-making.
                </p>
                <p>
                  As the project manager, I led a multidisciplinary design team, coordinated client
                  communication, facilitated critiques, and mentored teammates throughout the UX
                  process. Alongside leadership responsibilities, I contributed directly to
                  research, interaction design, prototyping, and UI design.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="challenge-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="challenge-heading" className="text-h6 uppercase text-gemlato">
                The Challenge
              </h2>
              <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
                <p>
                  The client wanted more than a visual refresh. They needed a website that would:
                </p>

                <ul className="grid w-full grid-cols-1 gap-2 text-lg-rg-normal md:grid-cols-2">
                  {challengeGoals.map((goal) => (
                    <li
                      key={goal.text}
                      className={`flex min-h-24 items-center rounded-2xl px-6 ${goal.className}`}
                    >
                      {goal.text}
                    </li>
                  ))}
                </ul>

                <p>
                  Our goal became designing a digital experience that inspired confidence before
                  customers ever walked through the door.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="research-methods-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="research-methods-heading" className="text-h6 uppercase text-gemlato">
                Research Methods
              </h2>

              <div className="flex flex-col gap-6 text-rg-sm-normal text-black">
                <p>We first sought to understand how people decide where to get dessert.</p>

                <ul className="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-rows-2">
                  {researchMethods.map((method) => (
                    <li
                      key={method.text}
                      className={`flex min-h-[10rem] items-center rounded-2xl p-6 ${method.className}`}
                    >
                      <span className="text-lg-rg-normal">{method.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              aria-labelledby="research-insights-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="research-insights-heading" className="text-h6 uppercase text-gemlato">
                Research Insights
              </h2>

              <p className="text-rg-sm-normal text-black">
                Our research revealed three recurring themes.
              </p>

              <ol className="flex flex-col gap-[0.75rem] text-rg-sm-normal text-black">
                {researchInsights.map((insight) => (
                  <li
                    key={insight.title}
                    className="flex flex-col gap-[0.75rem] border-t border-mediumgray py-6"
                  >
                    <h3 className="text-lg-rg-normal">{insight.title}</h3>
                    <p className="text-darkgray">{insight.description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section
              aria-labelledby="exploration-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="exploration-heading" className="text-h6 uppercase text-gemlato">
                Design Exploration
              </h2>

              <div className="flex flex-col gap-4">
                <p>
                  To translate research into design decisions, I led collaborative ideation sessions
                  using:
                </p>

                <ul className="list-disc pl-6">
                  <li>How Might We questions</li>
                  <li>Crazy 8s</li>
                  <li>Storyboards</li>
                  <li>Information architecture workshops</li>
                </ul>

                <p>
                  We created a list of tasks that informed our user flows. This approach ensured
                  that every feature addressed a validated user need derived from our research
                  findings, instead of assumptions.
                </p>

                <ol className="flex flex-col gap-[0.75rem] text-rg-sm-normal text-black">
                  {taskFlows.map((task) => (
                    <li
                      key={task.title}
                      className="flex flex-col gap-[0.75rem] border-t border-mediumgray py-6"
                    >
                      <h3 className="text-lg-rg-normal">{task.title}</h3>
                      <p className="text-darkgray">{task.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section
              aria-labelledby="validation-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="validation-heading" className="text-h6 uppercase text-gemlato">
                Iteration &amp; Validation
              </h2>

              <p>
                We tested interactive prototypes through moderated usability testing following the
                tasks we defined and heuristic evaluations, which uncovered several consistent pain
                points.
              </p>

              <section aria-labelledby="usability-issues-heading" className="flex flex-col gap-6">
                <h3 id="usability-issues-heading" className="text-lg-rg-normal">
                  Usability issues
                </h3>

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                  {prototypeProblems.map((item) => (
                    <figure key={item.caption} className="flex flex-col gap-3" {...visualReveal}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full rounded-[1.5rem] shadow-sm"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section aria-labelledby="design-fixes-heading" className="flex flex-col gap-6">
                <h3 id="design-fixes-heading" className="text-lg-rg-normal">
                  Design fixes
                </h3>

                <p>
                  Using these findings, we iterated on both the interface and information
                  architecture.
                </p>

                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
                  {prototypeFixes.map((item) => (
                    <figure key={item.caption} className="flex flex-col gap-3" {...visualReveal}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full rounded-[1.5rem] shadow-sm"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </section>

            <section
              aria-labelledby="reflection-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="reflection-heading" className="text-h6 uppercase text-gemlato">
                Reflection
              </h2>
              <p>
                Leading this project reinforced the importance of combining leadership with
                evidence-based design. Managing the project meant aligning client goals, mentoring
                teammates, and guiding design decisions across multiple iterations. By grounding
                every major decision in research and usability testing, we transformed a placeholder
                website into a customer experience that better supports both user needs and business
                goals.
              </p>
            </section>

            <aside
              aria-labelledby="download-case-study-heading"
              className="flex flex-col items-center gap-6 rounded-[1.5rem] bg-[#F6D8EA] px-8 py-12 text-center"
              {...sectionReveal}
            >
              <h2 id="download-case-study-heading" className="text-h5 text-black">
                Want to see the complete design process?
              </h2>

              <p className="max-w-2xl text-rg-sm-normal text-black">
                This case study highlights my individual contributions. Download the full team case
                study to explore our complete research process, design decisions, and final
                deliverables.
              </p>

              <a
                href="/GemlatoCaseStudy.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-[#C0379D] px-6 py-3 text-rg-sm-normal text-white transition-colors hover:bg-white hover:text-gemlato"
              >
                Download Full Team Case Study
                <ArrowDownToLine className="h-5 w-5" aria-hidden="true" />
              </a>
            </aside>
          </div>
        </article>
      </main>

      <ToTopButton />

      <div className="mx-auto max-w-[80rem] px-6 sm:px-10 lg:px-[12.625rem]" {...sectionReveal}>
        <Footer />
      </div>
    </>
  );
}
