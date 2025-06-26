import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CchtfHero from "../assets/cchtf.jpg";
import ImageLightbox from "../components/ImageLightbox";
import TwoColumnSection from "../components/TwoColumnSection";
import ToTopButton from "../components/ToTopButton";
import { PenTool } from "lucide-react";
import ChangePassword from "../assets/cchtf/changepassword.png";
import Color from "../assets/cchtf/color.png";
import DesignSystem from "../assets/cchtf/designsystem.png";
import EditUser from "../assets/cchtf/editUser.png";
import Flows from "../assets/cchtf/flows.png";
import IA from "../assets/cchtf/ia.png";
import Lofi1 from "../assets/cchtf/lofi1.png";
import Lofi2 from "../assets/cchtf/lofi2.png";
import Mobile from "../assets/cchtf/mobile.png";
import Msg from "../assets/cchtf/msg.png";
import Rotate from "../assets/cchtf/rotate.png";
import SignIn from "../assets/cchtf/signin.png";
import SignUp from "../assets/cchtf/signup.png";
import Text from "../assets/cchtf/text.png";
import User from "../assets/cchtf/user.png";
import userFlow from "../assets/cchtf/userFlow.png";
import Volunteer from "../assets/cchtf/volunteer.png";

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

        {/* Defining User Roles and Requirements */}
        <TwoColumnSection title="Defining User Roles and Requirements">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <div className="flex flex-col gap-[1rem]">
              <p>
                We began by working with the project manager to define the two
                user types: volunteers and admins. Volunteers needed access to
                their own contributions and simplified navigation, while admins
                required broader visibility and management tools. Together, we
                mapped out user flows for each role to guide the interface
                structure.
              </p>
              <ImageLightbox
                src={userFlow}
                alt="User flows for different roles."
                className="w-full object-cover rounded-[0.75rem]"
              />
            </div>
            <div className="flex flex-col gap-[1rem]">
              <p>
                From these user flows, we brainstormed the information
                architecture of the website and documented the key features
                associated with each page.
              </p>
              <ImageLightbox
                src={IA}
                alt="Table organizing features."
                className="w-full object-cover rounded-[0.75rem]"
              />
            </div>
          </div>
        </TwoColumnSection>

        {/* Features Accessible by Role */}
        <TwoColumnSection title="Features Accessible by Role">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-h6">Volunteers</h3>
              <p>
                Included a homepage preview, tree logging form, Tree Inventory
                (table of logged trees), messaging center, and a map view with
                pins indicating logged tree locations.
              </p>
              <p>Only volunteers can log tree information.</p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-h6">Admins</h3>
              <p>
                Included full access to all tree data (across volunteers), a
                Volunteer Directory, messaging center, and a global map.
              </p>
              <p>
                Only admins can view volunteer information and send messages.
              </p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h3 className="text-h6">Volunteers</h3>
              <p>
                Users with permissions could toggle between roles via the
                profile dropdown. This functionality allowed admins to
                temporarily access the volunteer dashboard and use the tree
                logging feature—a permission restricted to the volunteer role
                per client requirements. This role-switching capability helped
                streamline workflows while respecting the organization's
                boundaries on data entry.
              </p>
            </div>
          </div>
        </TwoColumnSection>

        {/* Design System */}
        <TwoColumnSection title="Design System">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>
              With a long list of possible features, we used an Effort vs.
              Impact matrix to determine our MVP scope. Features that balanced
              high impact and reasonable implementation effort were chosen for
              development.
            </p>
            <ImageLightbox
              src={DesignSystem}
              alt="CCHTF design system"
              className="w-full object-cover rounded-[0.75rem]"
            />
            <div className="flex flex-col md:flex-row gap-[0.75rem] items-start">
              <ImageLightbox
                src={Color}
                alt="Color styles."
                className="w-full md:w-[43.01%] object-contain rounded-[0.75rem]"
              />
              <ImageLightbox
                src={Text}
                alt="Text styles."
                className="w-full md:w-[56.99%] object-contain rounded-[0.75rem]"
              />
            </div>
          </div>
        </TwoColumnSection>

        {/* Collaboration with Developers */}
        <TwoColumnSection title="Collaboration with Developers">
          <p className="text-rg-sm-normal text-black">
            We collaborated with the PM and developers to understand scope and
            ensure technical feasibility. Our team took care to clarify
            functionality and prioritize must-have features within the available
            timeline.
          </p>
        </TwoColumnSection>

        {/* My Role */}
        <TwoColumnSection title="My Role">
          <p className="text-rg-sm-normal text-black">
            I focused on designing the Tree Inventory tables, User Profile page,
            Volunteer Directory, and the Sign In/Sign Up experience. I also led
            the design for the mobile adaptation, including visual cues to guide
            user behavior around device orientation and feature availability.
          </p>
        </TwoColumnSection>

        {/* Screen Organization */}
        <TwoColumnSection title="Screen Organization">
          <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
            <p>
              Instead of a single clickable prototype, we structured our Figma
              screens by user story. This helped developers understand the
              context and flow of each feature more easily, and allowed for
              smoother handoff and iteration. We designed and iterated across
              lo-fi, mid-fi, and hi-fi stages, with final hi-fi designs
              organized into clearly defined user stories.
            </p>
            <div className="flex flex-col gap-[1rem]">
              <p>
                In the <span className="text-rg-sm-medium">low-fidelity</span>{" "}
                version, I began exploring how role switching might work. On the
                left-hand option, I placed a card containing the username and
                current role in the navigation bar, with a dropdown for
                switching roles. On the right-hand option, I separated the
                username from the role and placed the role in its own module,
                also featuring a dropdown.
              </p>
              <div className="flex flex-col md:flex-row gap-[0.75rem] items-start">
                <ImageLightbox
                  src={Lofi1}
                  alt="Lo-fi screen version 1."
                  className="w-full md:w-1/2 object-contain rounded-[0.75rem]"
                />
                <ImageLightbox
                  src={Lofi2}
                  alt="Lo-fi screen version 2."
                  className="w-full md:w-1/2 object-contain rounded-[0.75rem]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <p>
                In the <span className="text-rg-sm-medium">mid-fidelity</span>{" "}
                version, I moved forward with the card version based on
                stakeholder feedback and continued progressing other pages, such
                as viewing and editing profile information and the login/signup
                experience.
              </p>
              <div className="flex flex-col md:flex-row gap-[0.75rem] items-start">
                <ImageLightbox
                  src={Volunteer}
                  alt="Volunteer database screen."
                  className="w-full md:w-1/3 object-contain rounded-[0.75rem]"
                />
                <ImageLightbox
                  src={SignIn}
                  alt="Sign-in screen."
                  className="w-full md:w-1/3 object-contain rounded-[0.75rem]"
                />
                <ImageLightbox
                  src={SignUp}
                  alt="Sign-up screen."
                  className="w-full md:w-1/3 object-contain rounded-[0.75rem]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-[0.75rem] items-start">
                <ImageLightbox
                  src={User}
                  alt="User information screen."
                  className="w-full md:w-1/3 object-contain rounded-[0.75rem]"
                />
                <ImageLightbox
                  src={EditUser}
                  alt="Edit user information screen."
                  className="w-full md:w-1/3 object-contain rounded-[0.75rem]"
                />
                <ImageLightbox
                  src={ChangePassword}
                  alt="Change password screen."
                  className="w-full md:w-1/3 object-contain rounded-[0.75rem]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[1rem]">
              <p>
                We finalized visual details in the{" "}
                <span className="text-rg-sm-medium">high-fidelity</span> stage,
                reworking spacing and applying consistent components from our
                design system throughout the platform. Here are two example user
                stories we built upon:
              </p>
              <p>
                As an admin, I want to be able to edit volunteers' profiles in
                order to manage user information.
              </p>
              <ImageLightbox
                src={userFlow}
                alt="Managing user info flow."
                className="w-full object-cover rounded-[0.75rem]"
              />
              <p>
                As an admin, I want to be able to create and delete messages in
                order to communicate with volunteers.
              </p>
              <ImageLightbox
                src={Msg}
                alt="Message management flow."
                className="w-full object-cover rounded-[0.75rem]"
              />
              <p>
                We also created a mobile view of the portal. Since the tree and
                volunteer tables were too large to view comfortably on smaller
                screens, I created custom illustrations to inform users that the
                Volunteer Directory and Tree Inventory pages are only accessible
                on desktop, and that they should rotate their phone to portrait
                orientation where applicable.
              </p>
              <ImageLightbox
                src={Mobile}
                alt="Mobile view."
                className="w-full object-cover rounded-[0.75rem]"
              />
              <ImageLightbox
                src={Rotate}
                alt="Rotate screen illustration."
                className="w-full object-cover rounded-[0.75rem]"
              />
            </div>
          </div>
        </TwoColumnSection>

        {/* Outcome */}
        <TwoColumnSection title="Outcome">
          <div className="flex flex-col gap-[1rem] text-rg-sm-normal text-black">
            <p>Our final deliverables included:</p>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              A complete set of user story-driven screens
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              A scalable design system
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              Clear documentation for developers
            </div>
            <p>
              The portal enables volunteers to log and track their contributions
              while giving admins full visibility into the organization's
              growing tree inventory. Our collaboration improved efficiency,
              transparency, and scalability for Central Coast Tree Heritage
              Foundation's mission.
            </p>
          </div>
        </TwoColumnSection>

        {/* Takeaways */}
        <TwoColumnSection title="Takeaways">
          <div className="flex flex-col gap-[1rem] text-rg-sm-normal text-black">
            <p>What I learned:</p>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              Designing by user story made developer handoff more intuitive and
              efficient.
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              Clear communication between design, PM, and development teams was
              crucial to staying within scope and delivering meaningful
              features.
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              Building role-based dashboards ensured a tailored experience for
              different user needs.
            </div>
            <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
              Providing thoughtful mobile accommodations and clear UX messaging
              helped maintain usability across devices.
            </div>
          </div>
        </TwoColumnSection>

        {/* View the project! */}
        <TwoColumnSection title="View the project!">
          <div className="flex flex-col gap-[1rem] text-rg-sm-normal text-black">
            <a
              href="https://www.figma.com/design/VnI4QlXzPEjQ2H3qr4QO79/CCHT-Design-Files?node-id=1350-7016&t=H3ygZ79iv5gyY6FI-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 border-2 cursor-pointer w-fit transition-all duration-300 ease-in-out hover:scale-[1.015]"
              style={{
                borderRadius: "2rem",
                border: "2px solid var(--text-mediumgray)",
                background: "var(--bg-gray30)",
              }}
            >
              <span className="text-darkgray transition-opacity duration-200 group-hover:opacity-80">
                <PenTool size={16} />
              </span>
              <span className="text-rg-sm-normal transition-colors duration-200 group-hover:text-black">
                CCHTF Design File
              </span>
            </a>
          </div>
        </TwoColumnSection>
      </section>

      {/* Scroll to Top Button */}
      <ToTopButton />

      <Footer />
    </main>
  );
}
