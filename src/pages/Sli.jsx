import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SliHero from "../assets/sli.jpg";
import ImageLightbox from "../components/ImageLightbox";
import TwoColumnSection from "../components/TwoColumnSection";
import ToTopButton from "../components/ToTopButton";
import Affinity from "../assets/sli/affinity.png";
import Buttons from "../assets/sli/buttons.png";
import Cards from "../assets/sli/cards.png";
import Colors from "../assets/sli/colors.png";
import EquipmentList from "../assets/sli/EquipmentList.png";
import Equipment from "../assets/sli/equipment.png";
import Farmshare from "../assets/sli/farmshare.png";
import ReservationList from "../assets/sli/ReservationList.png";
import Reservation from "../assets/sli/reservation.png";
import Reviews from "../assets/sli/reviews.png";
import Synthesis from "../assets/sli/synthesis.png";
import Type from "../assets/sli/type.png";
import TypeUsage from "../assets/sli/typeUsage.png";
import Spacing from "../assets/sli/Spacing.png";
import UserList from "../assets/sli/Userlist.png";
import User from "../assets/sli/user.png";
import { Link, BookOpen, PenTool } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Sli() {
  useEffect(() => {
    document.title = "Tra Nguyen | SLI Website";
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
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
          src={SliHero}
          alt="Sli Website mockup"
          className="h-[20rem] md:h-[32.5rem] w-full object-cover rounded-[2rem]"
        />
      </section>

      {/* Project Info */}
      <section className="py-10" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-h4 text-black mb-8">SLI Website</h1>
        <TwoColumnSection
          title={
            <div>
              <p className="text-h6 text-darkgray mb-1">Role</p>
              <p className="text-rg-sm-normal">UX Designer</p>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row md:gap-[10rem] gap-[2rem]">
            <div className="max-w-[20rem]">
              <p className="text-h6 text-darkgray mb-1">Team</p>
              <p className="text-rg-sm-normal">
                <span className="text-rg-sm-medium">Designers: </span> Tra
                Nguyen (me!), Kayla Le
              </p>
              <p className="text-rg-sm-normal">
                <span className="text-rg-sm-medium">Developers: </span> Matthew
                Li, Ryan Gertz, William Portugal Praneeth Kommineni
              </p>
            </div>
            <div>
              <p className="text-h6 text-darkgray mb-1">Duration</p>
              <p className="text-rg-sm-normal">
                Mar 2025 — June 2025 (3 months)
              </p>
            </div>
          </div>
        </TwoColumnSection>
      </section>

      {/* Content Sections */}
      <section className="py-10 flex flex-col gap-[4.5rem]">
        {/* Overview */}
        <div data-aos="fade-up" data-aos-delay="200">
          <TwoColumnSection title="Overview">
            <div className="flex flex-col gap-[1.5rem]">
              <p className="text-rg-sm-normal text-black">
                The Sustainable Land Initiative (SLI) supports farmers in
                adopting climate-smart practices. As part of a broader website
                update, I led the redesign of the Farmshare platform—a new tool
                that enables farmers to rent agricultural equipment directly
                through the site.
              </p>
              <p className="text-rg-sm-normal text-black">
                In addition to designing Farmshare, I created a reusable design
                system, redesigned several outdated pages, and improved the
                admin dashboard for internal management.
              </p>
            </div>
          </TwoColumnSection>
        </div>

        {/* Goals */}
        <div data-aos="fade-up" data-aos-delay="300">
          <TwoColumnSection title="Goals">
            <div className="flex flex-col gap-[1rem] text-rg-sm-normal text-black">
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Launch a user-friendly FarmShare equipment rental experience
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Build a scalable design system for future products
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Align all web pages with SLI's updated branding
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Improve usability across admin tools
              </div>
            </div>
          </TwoColumnSection>
        </div>

        {/* Design System */}
        <div data-aos="fade-up" data-aos-delay="400">
          <TwoColumnSection title="Design System">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <p>
                To address inconsistency across the site and support future
                scalability, I created a centralized design system library that
                includes:
              </p>
              <div className="flex flex-col gap-[1rem]">
                <p>Typography, color, spacing, and corner radius styles</p>
                <div className="flex flex-col md:flex-row gap-4 items-start w-full">
                  <ImageLightbox
                    src={Colors}
                    alt="Color styles"
                    className="w-full md:w-[24.08%] object-contain rounded-[0.75rem]"
                  />
                  <ImageLightbox
                    src={Type}
                    alt="Typography styles"
                    className="w-full md:w-[75.92%] object-contain rounded-[0.75rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p>UI components like buttons, tables, forms, nav bars</p>
                <div className="flex flex-col md:flex-row gap-4 items-start w-full">
                  <ImageLightbox
                    src={Cards}
                    alt="Card styles"
                    className="w-full md:w-[26.68%] object-contain rounded-[0.75rem]"
                  />
                  <ImageLightbox
                    src={Buttons}
                    alt="Button styles"
                    className="w-full md:w-[73.32%] object-contain rounded-[0.75rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p>Guidelines for usage and developer handoff</p>
                <div className="flex flex-col md:flex-row gap-4 items-start w-full">
                  <ImageLightbox
                    src={TypeUsage}
                    alt="Type style principles"
                    className="w-full md:w-[39.92%] object-contain rounded-[0.75rem]"
                  />
                  <ImageLightbox
                    src={Spacing}
                    alt="Spacing guide"
                    className="w-full md:w-[60.08%] object-contain rounded-[0.75rem]"
                  />
                </div>
              </div>
              <p>
                This system now serves as the foundation for current and
                upcoming web projects.
              </p>
            </div>
          </TwoColumnSection>
        </div>

        {/* Admin Tools */}
        <div data-aos="fade-up" data-aos-delay="500">
          <TwoColumnSection title="Admin Tools">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <div className="flex flex-col gap-[1rem]">
                <p>
                  The existing admin pages were visually inconsistent and
                  difficult to use. For example, the Reservation List used large
                  individual cards to display data, while other pages (like User
                  and Equipment lists) used tables. This made it harder to scan,
                  compare, and manage information—especially when dealing with
                  large volumes of data.
                </p>
                <div className="flex flew-row gap-[0.75rem]">
                  <ImageLightbox
                    src={User}
                    alt="Old User List design."
                    className="w-full md:w-1/3 object-contain rounded-[0.75rem]"
                  />
                  <ImageLightbox
                    src={Equipment}
                    alt="Old Equipment List design."
                    className="w-full  md:w-1/3 object-contain rounded-[0.75rem]"
                  />
                  <ImageLightbox
                    src={Reservation}
                    alt="Old Reservation List design."
                    className="w-full md:w-1/3 object-contain rounded-[0.75rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p>
                  To improve usability and consistency, I redesigned all admin
                  tools to use a unified table format with:
                </p>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Clear, scannable rows for quick overviews
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Sorting and filtering for efficient data management
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  UI components that matched the design system I created
                </div>
                <div className="flex flew-row gap-[0.75rem]">
                  <ImageLightbox
                    src={UserList}
                    alt="New User List design."
                    className="w-full md:w-1/3 object-cover rounded-[0.75rem]"
                  />
                  <ImageLightbox
                    src={EquipmentList}
                    alt="New Equipment List design."
                    className="w-full md:w-1/3 object-cover rounded-[0.75rem]"
                  />
                  <ImageLightbox
                    src={ReservationList}
                    alt="New Reservation List design."
                    className="w-full md:w-1/3 object-cover rounded-[0.75rem]"
                  />
                </div>
                <p>
                  This change brought visual and functional consistency to the
                  admin experience, making it easier for internal users to
                  manage equipment, users, and reservations.
                </p>
              </div>
            </div>
          </TwoColumnSection>
        </div>

        {/* FarmShare Equipment Rental Platform */}
        <div data-aos="fade-up" data-aos-delay="600">
          <TwoColumnSection title="FarmShare Equipment Rental Platform">
            <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
              <div className="flex flex-col gap-[1rem]">
                <h3 className="text-h6">Challenge</h3>
                <p>
                  Build a seamless rental experience within a constrained site
                  architecture that couldn't be changed.
                </p>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <h3 className="text-h6">Solution</h3>
                <p>
                  I introduced a secondary navigation bar within the FarmShare
                  page to help users navigate categories of equipment,
                  availability, and reservations—all contained within a single
                  page. Key UX features included:
                </p>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Clear categorization of rentable equipment
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Step-by-step reservation flow
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Immediate feedback and visibility on reservation status
                </div>
                <ImageLightbox
                  src={Farmshare}
                  alt="Farmshare screens"
                  className="w-full object-cover rounded-[0.75rem]"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <h3 className="text-h6">Testing + Iteration</h3>
                <p>
                  I conducted user interviews with farmers and stakeholders to
                  test functionality and usability. Using affinity mapping, I
                  grouped feedback into themes, surfaced pain points, and
                  iterated solutions. Insights led to:
                </p>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Revised contents of the checkout page to include more
                  information about the equipment and reservation policies
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Streamlined table layouts
                </div>
                <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                  Clearer call-to-actions and visual hierarchy
                </div>
                <ImageLightbox
                  src={Affinity}
                  alt="Affinity mapping the interview data"
                  className="w-full object-cover rounded-[0.75rem]"
                />
                <ImageLightbox
                  src={Synthesis}
                  alt="Synthesizing the interview data"
                  className="w-full object-cover rounded-[0.75rem]"
                />
                <p>
                  During usability interviews, several users expressed interest
                  in a rating and review system to help assess equipment
                  condition and reliability. I explored how this feature could
                  fit into the reservation flow and presented an early concept.
                </p>
                <ImageLightbox
                  src={Reviews}
                  alt="Scrapped review flow design."
                  className="w-full object-cover rounded-[0.75rem]"
                />
                <p>
                  After discussing with the product owner, we ultimately decided
                  to defer this feature due to scope limitations and unclear
                  value at this stage. This experience reinforced the importance
                  of balancing user needs with technical and strategic
                  constraints.
                </p>
              </div>
            </div>
          </TwoColumnSection>
        </div>

        {/* Outcome */}
        <div data-aos="fade-up" data-aos-delay="700">
          <TwoColumnSection title="Outcome">
            <div className="flex flex-col gap-[1rem] text-rg-sm-normal text-black">
              <p>The final delivered featured the following:</p>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Consistent branding applied across redesigned pages
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Reusable design system created for all SLI web products
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Consistent branding applied across redesigned pages
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Improved admin experience for internal staff
              </div>
              <p>
                While some features are still in development, designs are fully
                documented and handed off to the engineering team.
              </p>
            </div>
          </TwoColumnSection>
        </div>

        {/* Takeaways */}
        <div data-aos="fade-up" data-aos-delay="800">
          <TwoColumnSection title="Takeaways">
            <div className="flex flex-col gap-[1rem] text-rg-sm-normal text-black">
              <p>What I learned:</p>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Creating a design system from scratch taught me how powerful
                centralized styles and components can be. It not only improved
                visual consistency but also helped our team move faster and laid
                a solid foundation for future SLI products.
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                I conducted user interviews for every feature to test and
                iterate on my designs. When users requested a rating system for
                FarmShare, I explored the idea—but after reviewing with the
                product owner, we decided to defer it due to scope and
                priorities. This reinforced that good UX balances user needs
                with technical and business constraints.
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                The fixed information architecture was limiting, but it pushed
                me to find a workaround using a secondary navigation bar—a
                solution that turned out to be both effective and intuitive.
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Redesigning the admin dashboard showed me how layout and
                consistency directly impact usability. Switching from cards to
                tables made managing data far more efficient for the team.
              </div>
              <div className="px-4 py-3 rounded-[0.75rem] bg-gray30">
                Working in Agile sprints kept the design and dev team aligned.
                It allowed me to test features with users, make rapid changes,
                and hand off components efficiently with continuous feedback.
              </div>
            </div>
          </TwoColumnSection>
        </div>

        {/* View the project! */}
        <div data-aos="fade-up" data-aos-delay="900">
          <TwoColumnSection title="View the project!">
            <div className="flex flex-col gap-[1rem] text-rg-sm-normal text-black">
              <a
                href="https://sustainablelandinitiative.org/"
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
                  <Link size={16} />
                </span>
                <span className="text-rg-sm-normal transition-colors duration-200 group-hover:text-black">
                  SLI Website
                </span>
              </a>
              <a
                href="https://www.figma.com/design/I9D6F8FvRszNdBrV31ExS1/SLI-Farmshare?node-id=8-5&t=Ecbb72b0j70zgjsP-1"
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
                  SLI Prototype
                </span>
              </a>
              <a
                href="https://www.figma.com/design/2x19ekyhjk82TxZ2OddVuj/SLI-Design-System?node-id=0-1&t=xm74HuNPq3MRQxp5-1"
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
                  <BookOpen size={16} />
                </span>
                <span className="text-rg-sm-normal transition-colors duration-200 group-hover:text-black">
                  SLI Design System Library
                </span>
              </a>
            </div>
          </TwoColumnSection>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ToTopButton />
      <div data-aos="fade-up" data-aos-delay="1000">
        <Footer />
      </div>
    </main>
  );
}
