import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BespokeHero from '../assets/bespoke.jpg';
import TwoColumnSection from '../components/TwoColumnSection';
import BespokeAffinity from '../assets/bespoke/bespokeAffinity.png';
import Hifi1 from '../assets/bespoke/hifi1.png';
import Hifi2 from '../assets/bespoke/hifi2.png';
import Hifi3 from '../assets/bespoke/hifi3.png';
import impactEffort from '../assets/bespoke/impactEffort.png';
import Insights from '../assets/bespoke/insights.png';
import Midfi from '../assets/bespoke/midfi.png';
import Nav1 from '../assets/bespoke/nav1.png';
import Nav2 from '../assets/bespoke/nav2.png';
import abTest from '../assets/bespoke/abTest.png';
import CircleX from '../assets/circleX.svg';
import CircleCheck from '../assets/circleCheck.svg';
import ToTopButton from '../components/ToTopButton';
import ImageLightbox from '../components/ImageLightbox';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BespokeApp() {
  useEffect(() => {
    document.title = 'Tra Nguyen | Bespoke App';
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <main className="px-6 sm:px-10 lg:px-[12.625rem]">
      <Navbar />

      {/* Hero Image */}
      <section className="pt-10" data-aos="fade-up">
        <img
          src={BespokeHero}
          alt="Bespoke App mockup"
          className="h-[20rem] md:h-[32.5rem] w-full object-cover rounded-[2rem]"
        />
      </section>

      {/* Project Info */}
      <section className="py-10" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-h4 text-black mb-8">
          Designing a Messaging System for Structured Collaboration
        </h1>
        <div data-aos="fade-up" data-aos-delay="200">
          <TwoColumnSection
            title={
              <div>
                <p className="text-h6 text-bespoke mb-1">Client</p>
                <p className="text-rg-sm-normal">Bespoke Home Management</p>
              </div>
            }
          >
            <div className="flex flex-col md:flex-row md:gap-[10rem] gap-[2rem]">
              <div className="max-w-[20rem]">
                <p className="text-h6 text-bespoke mb-1">Team</p>
                <p className="text-rg-sm-normal">
                  <span className="text-rg-sm-medium">Project Manager: </span> Keilana Calder
                </p>
                <p className="text-rg-sm-normal">
                  <span className="text-rg-sm-medium">Designers: </span> Tra Nguyen (me!), Katelyn
                  Au, Meenakshi Vinod, Logan Watson
                </p>
              </div>
              <div>
                <p className="text-h6 text-bespoke mb-1">Duration</p>
                <p className="text-rg-sm-normal">Jan 2025 — Mar 2025 (3 months)</p>
              </div>
            </div>
          </TwoColumnSection>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10 flex flex-col gap-[4.5rem]">
        {/* View the entire prototype! */}
        <div data-aos="fade-up" data-aos-delay="200">
          <TwoColumnSection title="Preview the prototype!">
            <video src="/bespokeDemo.mp4" controls className="w-full rounded-[0.75rem]" />
          </TwoColumnSection>
        </div>
        {/* Overview */}
        <div data-aos="fade-up" data-aos-delay="300">
          <TwoColumnSection title="Overview">
            <div className="flex flex-col gap-[1.5rem]">
              <p className="text-rg-sm-normal text-black">
                Bespoke Home Management provides luxury property services for high-net-worth
                homeowners. Their internal teams handle maintenance, repairs, and scheduling across
                multiple properties.
              </p>
              <p className="text-rg-sm-normal text-black">
                During this 9-week sprint, we focused on designing the internal-facing side of their
                app—used by the Bespoke team to coordinate tasks and communicate—while client-facing
                features were scoped for a future phase.
              </p>
              <p className="text-rg-sm-normal text-black">
                My role centered on designing a structured messaging system to support seamless,
                property-linked collaboration and team communication.
              </p>
            </div>
          </TwoColumnSection>
        </div>

        {/* Problem */}
        <div data-aos="fade-up" data-aos-delay="400">
          <TwoColumnSection title="Problem">
            <p className="text-rg-sm-normal text-black">
              Bespoke Home Management's existing tools—spreadsheets, emails, and disconnected
              messaging apps—led to fragmented communication and inefficient task tracking.
              Information was scattered across platforms, making it hard to locate records, verify
              timelines, or maintain transparency across teams.
            </p>
          </TwoColumnSection>
        </div>

        {/* Research */}
        <div data-aos="fade-up" data-aos-delay="500">
          <TwoColumnSection title="Research">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <p>
                We reviewed tools like Slack, Discord, and Asana to identify design opportunities.
                Instead of replicating their models, we distilled key lessons into what to include
                and avoid based on Bespoke's needs.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-[1rem] lg:w-1/2">
                  <div className="flex flex-row gap-[0.7rem]">
                    <img src={CircleCheck} />
                    <p className="text-rg-sm-medium">Things to Include</p>
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Structured channels for organized, property-specific communication
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Clear separation between general and task-specific conversations
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Support for direct and group messaging outside structured threads
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Searchable message history to access past conversations easily
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Familiar patterns (e.g., channel/server model) to reduce onboarding time
                  </div>
                </div>
                <div className="flex flex-col gap-[1rem] lg:w-1/2">
                  <div className="flex flex-row gap-[0.7rem]">
                    <img src={CircleX} />
                    <p className="text-rg-sm-medium">Things to Avoid</p>
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Overly general chat spaces that lead to clutter and off-topic noise
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Lack of context. Messages without links to tasks or properties
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Flat hierarchies that make it hard to distinguish roles, teams, or topics
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    Overly general chat spaces that lead to clutter and Disconnected communication
                    that forces users to jump between tools
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[1.5rem]">
                <p>
                  We interviewed stakeholders across Bespoke's team to understand their real-world
                  needs. We used affinity diagramming to synthesize their responses.
                </p>
                <ImageLightbox
                  src={BespokeAffinity}
                  alt="Bespoke Affinity Map"
                  className=" w-full object-cover rounded-[0.75rem]"
                />
                <div className="flex flex-col gap-[1rem]">
                  <p>
                    I developed user stories to ground our understanding in real workflows,
                    identifying needs like:
                  </p>
                  <div className="flex flex col px-4 py-3 rounded-[0.75rem] bg-gray30">
                    “As a team member, I want to send messages tied to specific tasks within a
                    property so that communication stays organized and context-specific.”
                  </div>
                  <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                    “As a user, I want to send direct messages outside of properties and tasks so I
                    can have side conversations or quick check-ins when needed.”
                  </div>
                </div>
              </div>
            </div>
          </TwoColumnSection>
        </div>

        {/* Feature Prioritization */}
        <div data-aos="fade-up" data-aos-delay="600">
          <TwoColumnSection title="Feature Prioritization">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <p>We used an Effort vs. Impact matrix to narrow down our MVP scope.</p>

              <ImageLightbox
                src={impactEffort}
                alt="Impact Effort Matrix"
                className=" w-full object-cover rounded-[0.75rem]"
              />
              <div className="flex flex-col gap-[1rem]">
                <p className="text-rg-sm-medium">Included in MVP (Low Effort, High Impact):</p>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Search for messages, tasks, and records
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Task prioritization and urgent service flags
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Centralized communication within each property
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  In-task messaging for clarity and accountability
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Support for time-sensitive requests
                </div>
              </div>
            </div>
          </TwoColumnSection>
        </div>

        {/* Information Architecture */}
        <div data-aos="fade-up" data-aos-delay="700">
          <TwoColumnSection title="Information Architecture">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <p>
                We created user journeys and an IA to visualize user flows and key sections of the
                platform. During low-fidelity wireframing, we conducted A/B testing on different
                navigation layouts to ensure clarity and discoverability.
              </p>
              <ImageLightbox
                src={abTest}
                alt="Different placements of features to test"
                className="w-full object-cover rounded-[0.75rem]"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <ImageLightbox
                  src={Nav1}
                  alt="Bottom nav bar with notifications"
                  className="w-full md:w-1/2 object-cover rounded-[0.75rem]"
                />
                <ImageLightbox
                  src={Nav2}
                  alt="Bottom nav bar with profile"
                  className="w-full md:w-1/2 object-cover rounded-[0.75rem]"
                />
              </div>
              <p>“Is it better to have notifications in the nav bar or profile?”</p>
            </div>
          </TwoColumnSection>
        </div>

        {/* My Role – Messaging Feature */}
        <div data-aos="fade-up" data-aos-delay="800">
          <TwoColumnSection title="My Role — Messaging Feature">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <p>I led the design of the in-app messaging experience with these key goals:</p>
              <div className="flex flex-col gap-[1rem]">
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Create structured, task-contextual communication that avoids the clutter of tools
                  like Slack
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Enable property-specific collaboration through auto-organized channels
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Support private, ad-hoc conversations via direct and group messages
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Make finding past conversations easy through global search
                </div>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p className="text-rg-sm-medium">Why not just use Slack or Discord?</p>
                <p>
                  The Bespoke team needed more than a generic chat tool. They required messaging
                  tied directly to service tasks, organized within each property's structure rather
                  than abstract servers. This approach ensured clearer visibility, better
                  accountability, and a centralized record of all communication.
                </p>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p className="text-rg-sm-medium">Property-as-Server Model</p>
                <p>Each property acts as a “server” housing:</p>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Auto-generated channels for service tasks (#toilet-fix-2/17), organized in
                  "Current" and "Completed" folders
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  A general “Main Messages” channel for non-task communication
                </div>
              </div>
              <ImageLightbox
                src={Midfi}
                alt="Bespoke mid-fidelity mockups"
                className=" w-full object-cover rounded-[0.75rem]"
              />
            </div>
          </TwoColumnSection>
        </div>

        {/* Testing & Iteration */}
        <div data-aos="fade-up" data-aos-delay="900">
          <TwoColumnSection title="Testing & Iteration">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <p>
                With the help of my team, I conducted user interviews with 10 participants
                experienced in collaborative work tools. Using affinity mapping, I identified key
                insights that informed design improvements for the high-fidelity prototype.
              </p>
              <ImageLightbox
                src={Insights}
                alt="Bespoke key insights"
                className=" w-full object-cover rounded-[0.75rem]"
              />
              <p>
                One major design change was the addition of direct and custom group messaging,
                driven by interview feedback such as: “What if I want to message someone outside of
                the servers?”
              </p>
            </div>
          </TwoColumnSection>
        </div>

        {/* Outcome */}
        <div data-aos="fade-up" data-aos-delay="1000">
          <TwoColumnSection title="Outcome">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <div className="flex flex-col gap-[1rem]">
                <p>The final prototype featured an integrated workspace with:</p>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  A custom messaging system linked to task structures.
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Seamless switching between properties and conversations.
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Support for both structured group channels and private DMs.
                </div>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p>Sending a direct message</p>
                <ImageLightbox
                  src={Hifi1}
                  alt="Sending a direct message hifi mockup"
                  className=" w-full object-cover rounded-[0.75rem]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p>Reading a message in a message server (Maluaka)</p>
                <ImageLightbox
                  src={Hifi2}
                  alt="Reading a message in a message server (Maluaka) hifi mockup"
                  className=" w-full object-cover rounded-[0.75rem]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p>Searching through a message server</p>
                <ImageLightbox
                  src={Hifi3}
                  alt="Searching through a message server hifi mockup"
                  className=" w-full object-cover rounded-[0.75rem]"
                />
              </div>
            </div>
          </TwoColumnSection>
        </div>

        {/* Takeaways */}
        <div data-aos="fade-up" data-aos-delay="1100">
          <TwoColumnSection title="Takeaways">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <p>What I learned:</p>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                <span className="text-rg-sm-medium">
                  Structured mental models reduce cognitive load:
                </span>{' '}
                adapting “servers” and “channels” helped users onboard faster.
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                <span className="text-rg-sm-medium">
                  Designing with context leads to better tools:
                </span>{' '}
                tying messages to tasks added needed clarity.
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                <span className="text-rg-sm-medium">IA testing early is critical:</span> it surfaced
                issues in layout before they became rework.
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                <span className="text-rg-sm-medium">Ownership accelerates depth:</span> leading the
                messaging system let me explore and refine the design more thoroughly.
              </div>
            </div>
          </TwoColumnSection>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ToTopButton />

      <div data-aos="fade-up" data-aos-delay="1300">
        <Footer />
      </div>
    </main>
  );
}
