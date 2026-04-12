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
import Arrow from '../assets/arrow.svg';
import { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import Messenger from '../assets/bespoke/messenger.png';
import Slack from '../assets/bespoke/slack.png';
import Chloe from '../assets/bespoke/chloe.png';
import Olivia from '../assets/bespoke/olivia.png';
import Quote from '../assets/bespoke/quote.png';
import IA from '../assets/bespoke/ia.png';
import Testing1 from '../assets/bespoke/testing1.png';
import Testing2 from '../assets/bespoke/testing2.png';

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
          <section className="w-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
              {/* Client */}
              <div className="md:flex-1">
                <p className="text-h6 text-bespoke mb-1">Client</p>
                <p className="text-rg-sm-normal">Bespoke Home Management</p>
              </div>

              {/* Team */}
              <div className="md:flex-1">
                <p className="text-h6 text-bespoke mb-1">Team</p>
                <p className="text-rg-sm-normal">
                  <span className="text-rg-sm-medium">Project Manager: </span>
                  Keilana Calder
                </p>
                <p className="text-rg-sm-normal">
                  <span className="text-rg-sm-medium">Designers: </span>
                  Tra Nguyen (me!), Katelyn Au, Meenakshi Vinod, Logan Watson
                </p>
              </div>

              {/* Duration */}
              <div className="md:flex-1">
                <p className="text-h6 text-bespoke mb-1">Duration</p>
                <p className="text-rg-sm-normal">Jan 2025 — Mar 2025 (3 months)</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10 flex flex-col gap-[10rem]">
        {/* View the entire prototype! */}
        <div className="flex flex-col gap-[1.5rem]">
          <p className="text-h5 text-bespoke">Preview the prototype!</p>
          <video src="/bespokeDemo.mp4" controls className="w-full rounded-[0.75rem]" />
        </div>

        {/* Overview */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-[1.5rem]">
          <p className="text-h5 text-bespoke uppercase">Overview</p>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Bespoke Home Management provides luxury property services for high-net-worth
              homeowners. Their internal teams handle maintenance, repairs, and scheduling across
              multiple properties.
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              During this 9-week sprint, we focused on designing the internal-facing side of their
              app, used by the Bespoke team to coordinate tasks and communicate, while client-facing
              features were scoped for a future phase.
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              My role centered on designing a structured messaging system to support seamless,
              property-linked collaboration and team communication.
            </p>
          </div>
        </div>

        {/* Problem */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col gap-[1.5rem]">
          <p className="text-h5 text-bespoke uppercase">Problem</p>
          <p className="text-h5 text-black font-normal">
            Bespoke Home Management's existing tools led to fragmented communication and inefficient
            task tracking. Information was scattered across platforms, making it hard to locate
            records, verify timelines, or maintain transparency across teams.
          </p>
        </div>

        {/* Research */}
        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col gap-[1.5rem]">
          <p className="text-h5 text-bespoke uppercase">Research</p>
          <div className="flex flex-col gap-[6.25rem]">
            {/* comp analysis */}
            <div className="flex flex-col gap-[1.5rem]">
              <p className="text-h6 text-black">Competitor Analysis</p>
              <div className="flex flex-col md:flex-row gap-6 w-full">
                {/* Card 1 */}
                <div className="flex-1 flex flex-col items-center text-center p-8 rounded-[1.75rem] bg-[#F8F8F8]">
                  <img
                    src={Messenger}
                    alt="Facebook Messenger"
                    className="w-24 h-24 object-contain mb-4"
                  />

                  <p className="text-h6 text-black mb-6">Facebook Messenger</p>

                  <div className="flex items-center gap-6 w-full">
                    <Check className="text-bespoke w-5 h-5 mt-1 shrink-0" />
                    <p className="text-lg-rg-normal text-left">
                      general messaging with group chats and media sharing
                    </p>
                  </div>

                  <div className="flex items-center gap-6 w-full mt-6">
                    <X className="text-bespoke w-5 h-5 mt-1 shrink-0" />
                    <p className="text-lg-rg-normal text-left">
                      structure for task-based collaboration and secure work communication
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 flex flex-col items-center text-center p-8 rounded-[1.75rem] bg-[#F8F8F8]">
                  <img src={Slack} alt="Slack" className="w-24 h-24 object-contain mb-4" />

                  <p className="text-h6 text-black mb-6">Slack</p>

                  <div className="flex items-center gap-6 w-full">
                    <Check className="text-bespoke w-5 h-5 mt-1 shrink-0" />
                    <p className="text-lg-rg-normal text-left">
                      channel-based structure for organized communication
                    </p>
                  </div>

                  <div className="flex items-center gap-6 w-full mt-6">
                    <X className="text-bespoke w-5 h-5 mt-1 shrink-0" />
                    <p className="text-lg-rg-normal text-left">
                      cluttered without task-level integration or contextual filtering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* stakeholder interviews */}
            <div className="flex flex-col gap-[1.5rem]">
              <p className="text-h6 text-black">Stakeholder Interviews</p>
              <img src={BespokeAffinity} alt="Affinity Map" className="object-contain mb-4" />
              <div className="flex flex-col md:flex-row gap-8 w-full">
                {/* Card 1 */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <img
                    src={Chloe}
                    alt="Chloe"
                    className="w-40 h-40 object-cover mb-11 rounded-full"
                  />
                  {/* Quote card */}
                  <div className="relative bg-[#D2EDEF] rounded-[0.75rem] p-8 text-left">
                    {/* Quote icon */}
                    <img src={Quote} alt="quote" className="absolute -top-9 left-6 w-12 h-12" />

                    <p className="text-lg-rg-normal">
                      "I want to send messages tied to specific tasks within a property so that
                      communication stays organized and context-specific."
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <img
                    src={Olivia}
                    alt="Oliva"
                    className="w-40 h-40 object-cover mb-11 rounded-full"
                  />
                  {/* Quote card */}
                  <div className="relative bg-[#D2EDEF] rounded-[0.75rem] p-8 text-left">
                    {/* Quote icon */}
                    <img src={Quote} alt="quote" className="absolute -top-9 left-6 w-12 h-12" />

                    <p className="text-lg-rg-normal">
                      “I want to send direct messages outside of properties and tasks so I can have
                      side conversations or quick check-ins when needed.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Prioritization */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-bespoke uppercase">Feature Prioritization</p>
          <p>We used an Effort vs. Impact matrix to narrow down our MVP scope.</p>

          <img
            src={impactEffort}
            alt="Impact Effort Matrix"
            className=" w-full object-cover rounded-[0.75rem]"
          />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-rg-sm-medium">Included in MVP (Low Effort, High Impact):</p>

            <div className="px-4 py-3 rounded-[0.75rem] bg-[#D2EDEF]">
              Search for messages, tasks, and records
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-[#D2EDEF]">
              Task prioritization and urgent service flags
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-[#D2EDEF]">
              Centralized communication within each property
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-[#D2EDEF]">
              In-task messaging for clarity and accountability
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-[#D2EDEF]">
              Support for time-sensitive requests
            </div>
          </div>
        </div>

        {/* Information Architecture */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-bespoke uppercase">Information Architecture</p>
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
          <p>“Is it better to have notifications in the nav bar or profile?”</p>
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
          <img
            src={IA}
            alt="information architecture diagram"
            className="w-full object-cover rounded-[0.75rem] mt-8"
          />
        </div>

        {/* My Role – Messaging Feature */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-bespoke uppercase">My Role: Messaging Feature</p>
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>I led the design of the in-app messaging experience with these key goals:</p>
            <div className="flex flex-col gap-[1rem]">
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Create structured, task-contextual communication that avoids the clutter of tools
                  like Slack
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Enable property-specific collaboration through auto-organized channels
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Support private, ad-hoc conversations via direct and group messages
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Make finding past conversations easy through global search
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <p className="text-rg-sm-medium">Why not just use Slack or Discord?</p>
              <p>
                The Bespoke team needed more than a generic chat tool. They required messaging tied
                directly to service tasks, organized within each property's structure rather than
                abstract servers. This approach ensured clearer visibility, better accountability,
                and a centralized record of all communication.
              </p>
            </div>
            <img
              src={Midfi}
              alt="Bespoke mid-fidelity mockups"
              className=" w-full object-cover rounded-[0.75rem]"
            />
            <div className="flex flex-col gap-[1rem]">
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Each property functions as a “server.”
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Channels are auto-generated based on tasks or departments (e.g.,
                  #toilet-fix-2/17).
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Main Messages support general team communication that isn’t tied to a specific
                  task.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testing & Iteration */}
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-bespoke uppercase">Testing & Iteration</p>
          <p>
            With the help of my team, I conducted user interviews with 10 participants experienced
            in collaborative work tools. Using affinity mapping, I identified key insights that
            informed design improvements for the high-fidelity prototype.
          </p>
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <img
              src={Testing1}
              alt="Testing insights part 1"
              className="w-full md:w-1/2 rounded-[0.75rem]"
            />
            <img
              src={Testing2}
              alt="Testing insights part 2"
              className="w-full md:w-1/2 object-cover rounded-[0.75rem]"
            />
          </div>
          <p>
            One major design change was the addition of direct and custom group messaging, driven by
            interview feedback such as: “What if I want to message someone outside of the servers?”
          </p>
        </div>

        {/* Outcome */}
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-bespoke uppercase">Outcome</p>
          <div className="flex flex-col gap-[3.75rem]">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  A custom messaging system linked to task structures.
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Seamless switching between properties and conversations.
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Support for both structured group channels and private DMs.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[1rem] items-center">
              <p>Sending a direct message</p>
              <ImageLightbox
                src={Hifi1}
                alt="Sending a direct message hifi mockup"
                className=" w-full object-cover rounded-[0.75rem]"
              />
            </div>
            <div className="flex flex-col gap-[1rem] items-center">
              <p>Reading a message in a message server (Maluaka)</p>
              <ImageLightbox
                src={Hifi2}
                alt="Reading a message in a message server (Maluaka) hifi mockup"
                className=" w-full object-cover rounded-[0.75rem]"
              />
            </div>
            <div className="flex flex-col gap-[1rem] items-center">
              <p>Searching through a message server</p>
              <ImageLightbox
                src={Hifi3}
                alt="Searching through a message server hifi mockup"
                className=" w-full object-cover rounded-[0.75rem]"
              />
            </div>
          </div>
        </div>

        {/* Takeaways */}
        <div data-aos="fade-up" data-aos-delay="1100" className="flex flex-col gap-[1.5rem]">
          <p className="text-h5 text-bespoke uppercase">Takeaways</p>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Familiar mental models (e.g., Slack's servers) help reduce onboarding time when
              adapted thoughtfully.
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              IA testing early on can prevent major usability issues later.
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Collaborative design benefits from assigning ownership to specific features—this
              allowed us to go deeper in our individual areas.
            </p>
          </div>
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
