import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToTopButton from '../components/ToTopButton';
import ImageLightbox from '../components/ImageLightbox';
import Arrow from '../assets/sli/arrowSli.svg';
import { useEffect } from 'react';
import SliHero from '../assets/sli.jpg';
import Colors from '../assets/sli/colors.png';
import EquipmentList from '../assets/sli/EquipmentList.png';
import Equipment from '../assets/sli/equipment.png';
import Farmshare from '../assets/sli/farmshare.png';
import ReservationList from '../assets/sli/ReservationList.png';
import Reservation from '../assets/sli/reservation.png';
import Reviews from '../assets/sli/reviews.png';
import Synthesis from '../assets/sli/synthesis.png';
import Type from '../assets/sli/type.png';
import UserList from '../assets/sli/UserList.png';
import User from '../assets/sli/user.png';
import TypeDoc from '../assets/sli/typeDoc.png';
import SpaceDoc from '../assets/sli/spaceDoc.png';
import Components1 from '../assets/sli/components1.png';
import Components2 from '../assets/sli/components2.png';
import Affinity from '../assets/sli/affinity.png';
import { MonitorSmartphone, PaintbrushVertical, NotebookPen, School, CodeXml } from 'lucide-react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sli() {
  useEffect(() => {
    document.title = 'Tra Nguyen | SLI Website';
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
          src={SliHero}
          alt="Sli Website mockup"
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
                <p className="text-h6 text-sli mb-1">Client</p>
                <p className="text-rg-sm-normal">Sustainable Land Initiative</p>
              </div>

              {/* Team */}
              <div className="md:flex-1">
                <p className="text-h6 text-sli mb-1">Team</p>
                <p className="text-rg-sm-normal">
                  <span className="text-rg-sm-medium">Design Lead: </span>
                  Tra Nguyen (me!)
                </p>
                <p className="text-rg-sm-normal">
                  <span className="text-rg-sm-medium">Designer: </span>
                  Kayle Le
                </p>
                <p className="text-rg-sm-normal">
                  <span className="text-rg-sm-medium">Developers: </span>5 engineers
                </p>
              </div>

              {/* Duration */}
              <div className="md:flex-1">
                <p className="text-h6 text-sli mb-1">Duration</p>
                <p className="text-rg-sm-normal">Mar 2025 — June 2025 (4 months)</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10 flex flex-col gap-[10rem]">
        {/* Overview */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-[1.5rem]">
          <p className="text-h5 text-sli uppercase">Overview</p>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              The Sustainable Land Initiative (SLI) supports farmers in adopting climate-smart
              practices.
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Created a reusable design system and redesigned outdated pages and the admin
              dashboard.
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Designed the Farmshare platform: a new tool that enables farmers to rent agricultural
              equipment directly through the site.
            </p>
          </div>
        </div>

        {/* Problem */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col gap-[1.5rem]">
          <p className="text-h5 text-sli uppercase">Problem</p>
          <p className="text-h5 text-black font-normal">
            SLI's web platform had inconsistent UI patterns and confusing admin tools. At the same
            time, SLI needed to introduce FarmShare, a new equipment rental platform for farmers,
            within a fixed information architecture that could not be changed.
          </p>
        </div>

        {/* My Role */}
        <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col gap-8">
          <p className="text-h5 uppercase text-sli">My Role</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Item */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-sli h-24 w-24 sm:h-32 sm:w-32 lg:h-44 lg:w-44">
                <MonitorSmartphone className="text-sli w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
              </div>
              <p className="text-sm sm:text-base lg:text-h6 text-black">UX Strategy</p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-sli h-24 w-24 sm:h-32 sm:w-32 lg:h-44 lg:w-44">
                <PaintbrushVertical className="text-sli w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
              </div>
              <p className="text-sm sm:text-base lg:text-h6 text-black">Design System</p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-sli h-24 w-24 sm:h-32 sm:w-32 lg:h-44 lg:w-44">
                <NotebookPen className="text-sli w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
              </div>
              <p className="text-sm sm:text-base lg:text-h6 text-black">Research & Testing</p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-sli h-24 w-24 sm:h-32 sm:w-32 lg:h-44 lg:w-44">
                <School className="text-sli w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
              </div>
              <p className="text-sm sm:text-base lg:text-h6 text-black">Mentor Designer</p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-sli h-24 w-24 sm:h-32 sm:w-32 lg:h-44 lg:w-44">
                <CodeXml className="text-sli w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
              </div>
              <p className="text-sm sm:text-base lg:text-h6 text-black">Collab with Devs</p>
            </div>
          </div>
        </div>

        {/* Creating a Design System */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-sli uppercase">Creating a Design System</p>
          <div className="flex flex-col gap-[2.75rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <p className="text-rg-sm-medium">
                To address inconsistency across the site and support future scalability, I created a
                centralized design system library that includes:
              </p>

              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  UI components like buttons, tables, forms, nav bars
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Guidelines for usage and developer handoff
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Typography, color, spacing, and corner radius styles
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <p className="text-rg-sm-medium text-black">Examples of styles and documentation</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-12">
                <div className="overflow-hidden rounded-[1rem] bg-white xl:col-span-2">
                  <img
                    src={Colors}
                    alt="Color style usage documentation"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="overflow-hidden rounded-[1rem] bg-white xl:col-span-4">
                  <img
                    src={Type}
                    alt="Typography documentation"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="overflow-hidden rounded-[1rem] bg-white xl:col-span-3">
                  <img
                    src={TypeDoc}
                    alt="Type style principles documentation"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="overflow-hidden rounded-[1rem] bg-white xl:col-span-3">
                  <img
                    src={SpaceDoc}
                    alt="Spacing guidelines documentation"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <p className="text-rg-sm-medium text-black">Examples of components</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center h-[320px] bg-[#F8F8F8] rounded-[1rem]">
                  <img
                    src={Components1}
                    alt="Component examples 1"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex items-center justify-center h-[320px] bg-[#F8F8F8] rounded-[1rem]">
                  <img
                    src={Components2}
                    alt="Component examples 2"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Tools */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-sli uppercase">Admin Tools</p>
          <div className="flex flex-col gap-[2.75rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <p className="text-rg-sm-medium">
                Originally used cards, which were poor for scanability
              </p>

              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Used heuristic evaluation & comparative analysis to find areas to improve on
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Unified table-based layouts with sorting and filtering
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Faster data management and reduced cognitive load
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-rg-sm-medium text-black">Before</p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-[1rem] bg-[#F8F8F8]">
                  <ImageLightbox
                    src={User}
                    alt="User list screen"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-[1rem] bg-[#F8F8F8]">
                  <ImageLightbox
                    src={Equipment}
                    alt="Equipment list screen"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-[1rem] bg-[#F8F8F8]">
                  <ImageLightbox
                    src={Reservation}
                    alt="Reservation list screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-rg-sm-medium text-black">After</p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-[1rem] bg-[#F8F8F8]">
                  <ImageLightbox
                    src={UserList}
                    alt="User list screen redesign"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-[1rem] bg-[#F8F8F8]">
                  <ImageLightbox
                    src={EquipmentList}
                    alt="Equipment list screen redesign"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-[1rem] bg-[#F8F8F8]">
                  <ImageLightbox
                    src={ReservationList}
                    alt="Reservation list screen redesign"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Farmshare Rental Platform */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-sli uppercase">Farmshare Rental Platform</p>
          <div className="flex flex-col gap-[1.25rem]">
            <p className="text-rg-sm-medium">Single-page, fixed architecture</p>

            <div className="flex flex-row gap-[2rem] items-center">
              <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
              <p className="text-rg-sm-normal text-black">
                Secondary in-page navigation with step-by-step rental flow
              </p>
            </div>
            <div className="flex flex-row gap-[2rem] items-center">
              <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
              <p className="text-rg-sm-normal text-black">
                Clear categorization of rentable equipment
              </p>
            </div>
            <div className="flex flex-row gap-[2rem] items-center">
              <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
              <p className="text-rg-sm-normal text-black">
                Exploration of user reviews for farm equipment rentals
              </p>
            </div>
          </div>
          <img
            src={Farmshare}
            alt="Farmshare screens"
            className="w-full object-cover rounded-[0.75rem]"
          />
        </div>

        {/* Testing & Iteration */}
        <div
          data-aos="fade-up"
          data-aos-delay="900"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-sli uppercase">Testing & Iteration</p>
          <div className="flex flex-col gap-[2.75rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <p className="text-rg-sm-medium">
                I mentored Kayla (designer) through conducting user interviews with farmers and
                stakeholders to test functionality and usability. Using affinity mapping, we grouped
                feedback into themes, surfaced pain points, and iterated solutions.
              </p>
              <p className="text-rg-sm-medium">Insights led to:</p>

              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Revised contents of the checkout page to include more information about the
                  equipment and reservation policies
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Clearer call-to-actions and visual hierarchy
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Exploring reviews for rental farm equipement
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-rg-sm-medium text-black">Interviews and Grouping</p>
              <ImageLightbox
                src={Affinity}
                alt="Affinity mapping the interview data"
                className="w-full object-cover rounded-[0.75rem]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-rg-sm-medium text-black">Synthesizing</p>
              <ImageLightbox
                src={Synthesis}
                alt="Synthesizing the interview data"
                className="w-full object-cover rounded-[0.75rem]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-rg-sm-medium text-black">Explored ratings feature</p>
              <p>
                Deferred due to scope and unclear value Reinforced balancing user needs with
                business and technical constraints
              </p>
              <ImageLightbox
                src={Reviews}
                alt="Scrapped review flow design."
                className="w-full object-cover rounded-[0.75rem]"
              />
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black"
        >
          <p className="text-h5 text-sli uppercase">Outcome</p>
          <div className="flex flex-col gap-[3.75rem]">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Scalable design system adopted across SLI products
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Consistent branding across redesigned pages
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  Improved admin efficiency and usability
                </p>
              </div>
              <div className="flex flex-row gap-[2rem] items-center">
                <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
                <p className="text-rg-sm-normal text-black">
                  FarmShare fully designed and documented for development
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Takeaways */}
        <div data-aos="fade-up" data-aos-delay="1100" className="flex flex-col gap-[1.5rem]">
          <p className="text-h5 text-sli uppercase">Takeaways</p>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Constraints can drive strong UX solutions
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Design systems accelerate teams beyond visuals
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Mentorship improves both design quality and team velocity
            </p>
          </div>
          <div className="flex flex-row gap-[2rem] items-center">
            <img src={Arrow} alt="Arrow" className="hidden sm:block w-10 h-6 mt-1" />
            <p className="text-rg-sm-normal text-black">
              Good UX balances user needs with technical and business constraints
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
