import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BespokeHero from "../assets/bespoke.jpg";
import TwoColumnSection from "../components/TwoColumnSection";
import BespokeAffinity from "../assets/bespoke/BespokeAffinity.png";
import Chloe from "../assets/bespoke/chloe.png";
import Hifi1 from "../assets/bespoke/hifi1.png";
import Hifi2 from "../assets/bespoke/hifi2.png";
import Hifi3 from "../assets/bespoke/hifi3.png";
import impactEffort from "../assets/bespoke/impactEffort.png";
import Insights from "../assets/bespoke/insights.png";
import Midfi from "../assets/bespoke/midfi.png";
import Nav1 from "../assets/bespoke/nav1.png";
import Nav2 from "../assets/bespoke/nav2.png";
import ToTopButton from "../components/ToTopButton";
import ImageLightbox from "../components/ImageLightbox";

export default function BespokeApp() {
  return (
    <main className="px-6 sm:px-10 lg:px-[12.625rem]">
      <Navbar />

      {/* Hero Image */}
      <section className="pt-10">
        <img
          src={BespokeHero}
          alt="Bespoke App mockup"
          className="h-[20rem] md:h-[32.5rem] w-full object-cover rounded-[2rem]"
        />
      </section>

      {/* Project Info */}
      <section className="py-10">
        <h1 className="text-h4 text-black mb-8">Bespoke iOS App</h1>
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
                Keilana Calder, Katelyn Au, Meenakshi Vinod, Logan Watson, Tra
                Nguyen (me!)
              </p>
            </div>
            <div>
              <p className="text-h6 text-darkgray mb-1">Duration</p>
              <p className="text-rg-sm-normal">
                Jan 2025 — Mar 2025 (3 months)
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
            In this team project, we designed a bespoke project management app
            tailored for property management teams. Our goal was to streamline
            communication, task delegation, and project tracking within
            property-related workflows. I focused on designing and testing the
            messaging feature, drawing inspiration from platforms like Discord
            and Slack but customizing it for structured task-based
            collaboration.
          </p>
        </TwoColumnSection>

        {/* Problem */}
        <TwoColumnSection title="Problem">
          <p className="text-rg-sm-normal text-black">
            Homeowners lack an easy-to-use platform to submit, track, and
            communicate about service requests, leading to frustration, missed
            deadlines, and poor task management.
          </p>
        </TwoColumnSection>

        {/* Research */}
        <TwoColumnSection title="Research">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>
              We began with competitive analysis, examining tools like Trello,
              Asana, Monday.com, and Slack to identify strengths, gaps, and
              design opportunities.
            </p>
            <div className="flex flex-col gap-[1.5rem]">
              <p>Key insights (specific to messaging):</p>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                <span className="text-rg-sm-medium">Facebook Messenger:</span>{" "}
                Great for general messaging with group chats and media sharing,
                but lacks structure for task-based collaboration and secure work
                communication.
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                <span className="text-rg-sm-medium">Slack:</span> Excellent
                channel-based structure for organized communication, but can
                become cluttered without task-level integration or contextual
                filtering.
              </div>
            </div>
            <div className="flex flex-col gap-[1.5rem]">
              <p>
                To supplement this, we interviewed stakeholders—including
                property managers, contractors, and residents—to understand what
                features they valued in a project management tool. We used
                affinity diagramming to synthesize their responses.
              </p>
              <ImageLightbox
                src={BespokeAffinity}
                alt="Bespoke Affinity Map"
                className=" w-full object-cover rounded-[0.75rem]"
              />
              <p>
                I developed user stories to ground our understanding in real
                workflows, identifying needs like:
              </p>
              <div className="flex flex col px-4 py-3 rounded-[0.75rem] bg-gray30">
                “As a team member, I want to send messages tied to specific
                tasks within a property so that communication stays organized
                and context-specific.”
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                “As a user, I want to send direct messages outside of properties
                and tasks so I can have side conversations or quick check-ins
                when needed.”
              </div>
            </div>
          </div>
        </TwoColumnSection>

        {/* Feature Prioritization */}
        <TwoColumnSection title="Feature Prioritization">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>
              With a long list of possible features, we used an Effort vs.
              Impact matrix to determine our MVP scope. Features that balanced
              high impact and reasonable implementation effort were chosen for
              development.
            </p>

            <ImageLightbox
              src={impactEffort}
              alt="Impact Effort Matrix"
              className=" w-full object-cover rounded-[0.75rem]"
            />
          </div>
        </TwoColumnSection>

        {/* Information Architecture */}
        <TwoColumnSection title="Information Architecture">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>
              We created user journeys and an IA to visualize user flows and key
              sections of the platform. During low-fidelity wireframing, we
              conducted A/B testing on different navigation layouts to ensure
              clarity and discoverability.
            </p>
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
            <p>
              “Is it better to have notifications in the nav bar or profile?”
            </p>
          </div>
        </TwoColumnSection>

        {/* My Role – Messaging Feature */}
        <TwoColumnSection title="My Role — Messaging Feature">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>
              I was responsible for designing the messaging system. The goal was
              to mirror the familiarity of tools like Slack while tailoring the
              experience to the structure of property management. I created the
              mid-fidelity prototype based on these features:
            </p>
            <div className="flex flex-col gap-[1.5rem]">
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Each property functions as a “server.”
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Channels are auto-generated based on tasks or departments (e.g.,
                #toilet-fix-2/17).
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Main Messages support general team communication that isn’t tied
                to a specific task.
              </div>
            </div>
            <ImageLightbox
              src={Midfi}
              alt="Bespoke mid-fidelity mockups"
              className=" w-full object-cover rounded-[0.75rem]"
            />
          </div>
        </TwoColumnSection>

        {/* Testing & Iteration */}
        <TwoColumnSection title="Testing & Iteration">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>
              With the help of my team, I conducted user interviews with 10
              participants experienced in collaborative work tools. Using
              affinity mapping, I identified key insights that informed design
              improvements for the high-fidelity prototype.
            </p>
            <ImageLightbox
              src={Insights}
              alt="Bespoke key insights"
              className=" w-full object-cover rounded-[0.75rem]"
            />
            <p>
              One major design change was the addition of direct and custom
              group messaging, driven by interview feedback such as: “What if I
              want to message someone outside of the servers?”
            </p>
          </div>
        </TwoColumnSection>

        {/* Outcome */}
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

        {/* Takeaways */}
        <TwoColumnSection title="Takeaways">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>What I learned:</p>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              Familiar mental models (e.g., Slack's servers) help reduce
              onboarding time when adapted thoughtfully.
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              IA testing early on can prevent major usability issues later.
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              Collaborative design benefits from assigning ownership to specific
              features—this allowed us to go deeper in our individual areas.
            </div>
          </div>
        </TwoColumnSection>

        {/* View the entire prototype! */}
        <TwoColumnSection title="View the entire prototype!">
          <video
            src="/bespokeDemo.mp4"
            controls
            className="w-full rounded-[0.75rem]"
          />
        </TwoColumnSection>
      </section>

      {/* Scroll to Top Button */}
      <ToTopButton />

      <Footer />
    </main>
  );
}
