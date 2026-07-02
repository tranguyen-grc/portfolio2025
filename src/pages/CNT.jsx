import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowDownToLine } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToTopButton from '../components/ToTopButton';
import cntHero from '../assets/cnt/CNTBanner.png';
import cnt1 from '../assets/cnt/CNT1.jpg';
import cnt2 from '../assets/cnt/CNT2.jpg';
import cnt3 from '../assets/cnt/CNT3.jpg';
import cnt4 from '../assets/cnt/CNT4.jpg';

const sectionReveal = {
  'data-aos': 'fade-up',
  'data-aos-duration': '650',
};

const visualReveal = {
  'data-aos': 'zoom-in-up',
  'data-aos-duration': '700',
};

const challengeQuotes = [
  {
    text: '"He always woke up before sunrise to make coffee."',
    className: 'bg-[#F8F3E4]',
  },
  {
    text: '"Everyone remembers her differently."',
    className: 'bg-[#F6E1E0]',
  },
  {
    text: '"She was strict with us, but incredibly generous to strangers."',
    className: 'bg-[#D7D1C5]',
  },
];

const researchInsights = [
  {
    title: 'People remember in fragments.',
    description: (
      <p>
        Memories surfaced as anecdotes, habits, quotes, photographs, and sensory moments. These
        fragments collectively revealed personality.
      </p>
    ),
  },
  {
    title: 'Identity is multi-perspectival.',
    description: (
      <p>
        Different family members remembered the same person differently. Rather than treating these
        differences as inconsistencies, participants viewed them as complementary perspectives that
        together formed a fuller picture.
      </p>
    ),
  },
  {
    title: 'Ordinary routines reveal character.',
    description: (
      <>
        <p>Participants repeatedly recalled everyday rituals before major milestones:</p>

        <ul className="list-disc pl-6 py-3">
          <li>morning routines</li>
          <li>favorite music</li>
          <li>recurring sayings</li>
          <li>daily habits</li>
        </ul>

        <p>These details made someone feel present and recognizable.</p>
      </>
    ),
  },
];

const images = {
  cnt1,
  cnt2,
  cnt3,
  cnt4,
};

const features = [
  {
    title: 'Fragments',
    description:
      'A gallery of memories, quotes, voice recordings, photographs, and anecdotes that encourages contribution without requiring complete narratives.',
    image: 'cnt1',
  },
  {
    title: 'Identity Through Relationships',
    description:
      'Patterns across memories reveal how someone existed within their family. Identity becomes something that emerges collectively rather than individually.',
    image: 'cnt2',
  },
  {
    title: 'A Day in Their Life',
    description:
      'An experience that reconstructs a typical day from many small memories, answering questions like: “What did mornings look like?” “What routines defined them?”',
    image: 'cnt3',
  },
  {
    title: 'Contradictions',
    description:
      'People are rarely remembered consistently. Rather than resolving contradictions, the design presents them as evidence of a multifaceted identity.',
    image: 'cnt4',
  },
];

export default function CNT() {
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
              src={cntHero}
              alt="Chuyen Nha Toi web app mockup"
              className="h-[20rem] w-full rounded-[2rem] object-cover md:h-[32.5rem]"
              fetchPriority="high"
            />
          </figure>

          <header className="py-10" {...sectionReveal}>
            <h1 id="gemlato-title" className="mb-3 text-h4 text-black">
              Rethinking the Digital Biography
            </h1>

            <p className="mb-10 text-lg-rg-normal text-darkgray">
              Iterating with AI to design a more human way of representing people.
            </p>

            <dl
              className="grid w-full grid-cols-1 gap-6 border-y border-mediumgray py-6 md:grid-cols-4"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <div>
                <dt className="mb-3 text-h6 text-cnt">Project</dt>
                <dd className="text-rg-sm-normal text-black">Chuyện Nhà Tôi</dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-cnt">Role</dt>
                <dd className="text-rg-sm-normal text-black">
                  UX Researcher, Product Designer & Frontend Developer
                </dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-cnt">Team</dt>
                <dd className="text-rg-sm-normal text-black">Project Manager: Tuan Dinh</dd>
                <dd className="text-rg-sm-normal text-black">Designer: Tra Nguyen</dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-cnt">Duration</dt>
                <dd className="text-rg-sm-normal text-black">Jan 2026 - June 2026</dd>
              </div>
            </dl>
          </header>

          <div className="flex flex-col gap-[10rem] py-10">
            <section
              aria-labelledby="overview-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="overview-heading" className="text-h6 uppercase text-cnt">
                Overview
              </h2>
              <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
                <p>
                  Chuyện Nhà Tôi is a family storytelling platform designed to help families
                  preserve, explore, and make meaning from memories across generations.
                </p>
                <p>
                  Over six months, I designed the product from the ground up, from conducting
                  research and defining the product vision to designing the information
                  architecture, interaction patterns, and developing the first working MVP.
                </p>
                <p>
                  A key part of my workflow was using Claude Design as a rapid prototyping partner.
                  Due to the limited timeline, I explored dozens of interaction ideas directly in
                  code. This allowed me to quickly test different ways memories, relationships, and
                  narratives could be represented, evaluate what felt intuitive and emotionally
                  resonant, and iterate before investing in implementation.
                </p>
                <p>
                  The final product spans the entire family storytelling journey, from onboarding
                  and family trees to memory capture, relationship mapping, and collaborative
                  storytelling. This case study focuses on one interaction that became central to
                  the experience:
                </p>
                <p className="flex text-lg-rg-normal min-h-24 items-center rounded-2xl px-6 bg-[#F8F3E4]">
                  How might we design a person's profile to have user get to know family members as
                  a person?
                </p>
              </div>
            </section>

            <section
              aria-labelledby="challenge-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="challenge-heading" className="text-h6 uppercase text-cnt">
                The Challenge
              </h2>
              <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
                <p>
                  Existing genealogy platforms represent people through objective facts: names,
                  dates, relationships, and historical records. These systems are excellent at
                  documenting ancestry, but they rarely communicate personality. During user
                  interviews, participants almost never introduced relatives chronologically.
                </p>

                <p>Instead, they remembered them through fragments:</p>

                <ul className="grid w-full grid-cols-1 gap-2 text-lg-rg-normal md:grid-cols-3">
                  {challengeQuotes.map((quote) => (
                    <li
                      key={quote.text}
                      className={`flex min-h-[10rem] items-center rounded-2xl px-6 ${quote.className}`}
                    >
                      {quote.text}
                    </li>
                  ))}
                </ul>

                <p>
                  These small moments communicated personality far more effectively than
                  chronological timelines ever could.
                </p>
                <p className="flex text-lg-rg-normal min-h-24 items-center rounded-2xl px-6 bg-[#F6E1E0]">
                  How might we design a digital profile that captures the feeling of knowing
                  someone?
                </p>
              </div>
            </section>

            <section
              aria-labelledby="research-insights-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="research-insights-heading" className="text-h6 uppercase text-cnt">
                Research Insights
              </h2>

              <p className="text-rg-sm-normal text-black">
                Through interviews and affinity mapping, three themes emerged:
              </p>

              <ol className="flex flex-col gap-[0.75rem] text-rg-sm-normal text-black">
                {researchInsights.map((insight) => (
                  <li
                    key={insight.title}
                    className="flex flex-col gap-[0.75rem] border-t border-mediumgray py-6"
                  >
                    <h3 className="text-lg-rg-normal">{insight.title}</h3>
                    <div className="text-darkgray">{insight.description}</div>
                  </li>
                ))}
              </ol>
            </section>

            <section
              aria-labelledby="exploration-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="exploration-heading" className="text-h6 uppercase text-cnt">
                Rapid Design Exploration
              </h2>

              <div className="flex flex-col gap-4">
                <p>
                  I used Claude Design to rapidly prototype dozens of interaction concepts. Working
                  in code allowed me to explore ideas much faster than static mockups and
                  immediately run user tests. I experimented with timeline-based biographies,
                  narrative cards, relationship-centered layouts, expandable memory galleries, and
                  conversational storytelling interfaces.
                </p>
                <p>
                  I found that the strongest concepts embraced the fragmented and subjective nature
                  of memory. Those explorations ultimately evolved into a modular profile built
                  around multiple lenses into a person's identity.
                </p>
              </div>
              <ol className="grid w-full grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature.title} className="flex gap-4 md:flex-col">
                    <img
                      src={images[feature.image]}
                      alt={feature.title}
                      className="w-32 shrink-0 rounded-[24px] object-cover md:w-full"
                    />

                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg-rg-normal text-black">{feature.title}</h3>

                      <p className="text-rg-sm-normal text-black">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section
              aria-labelledby="reflection-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="reflection-heading" className="text-h6 uppercase text-cnt">
                Reflection
              </h2>
              <p>
                Although this is only one component of the broader Chuyển Nhà Tôi platform, it
                became one of the project's defining interaction patterns.
              </p>
              <p>
                Throughout the six-month project, rapid prototyping with Claude Design allowed me to
                explore a wide range of interaction patterns before converging on the first MVP.
                Combining AI-assisted prototyping with user research enabled faster exploration
                while keeping design decisions grounded in real human stories.
              </p>
              <p>
                This project reinforced my belief that meaningful UX is not always about helping
                users find information more efficiently. Sometimes, the challenge is designing
                systems that preserve ambiguity, invite interpretation, and help people construct
                meaning together.
              </p>
            </section>

            <aside
              aria-labelledby="download-case-study-heading"
              className="flex flex-col items-center gap-6 rounded-[1.5rem] bg-[#F8F3E4] px-8 py-12 text-center"
              {...sectionReveal}
            >
              <h2 id="download-case-study-heading" className="text-h5 text-black">
                Interested in the full Chuyện Nhà Tôi project?
              </h2>

              <p className="max-w-2xl text-rg-sm-normal text-black">
                This case study focuses on one design exploration from Chuyện Nhà Tôi. For a deeper
                look at the six-month senior capstone (including the research process, design
                rationale, and final MVP), download the complete project paper.
              </p>

              <a
                href="/CNTPaper.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-[#722121] px-6 py-3 text-rg-sm-normal text-white transition-colors hover:bg-white hover:text-[#722121]"
              >
                Download Senior Project Paper
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
