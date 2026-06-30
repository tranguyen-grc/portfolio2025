import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToTopButton from '../components/ToTopButton';
import BespokeHero from '../assets/bespoke.jpg';
import Hifi1 from '../assets/bespoke/hifi1.png';
import Hifi2 from '../assets/bespoke/hifi2.png';
import Hifi3 from '../assets/bespoke/hifi3.png';
import impactEffort from '../assets/bespoke/impactEffort.png';
import Midfi from '../assets/bespoke/midfi.png';
import Slack from '../assets/bespoke/slack.png';
import Messenger from '../assets/bespoke/messenger.png';
import Testing1 from '../assets/bespoke/testing1.png';
import Testing2 from '../assets/bespoke/testing2.png';

const sectionReveal = {
  'data-aos': 'fade-up',
  'data-aos-duration': '650',
};

const visualReveal = {
  'data-aos': 'zoom-in-up',
  'data-aos-duration': '700',
};

export default function BespokeApp() {
  useEffect(() => {
    document.title = 'Tra Nguyen | Bespoke App';
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
        <article aria-labelledby="bespoke-title">
          <figure className="pt-10" {...sectionReveal}>
            <img
              src={BespokeHero}
              alt="Bespoke App mockup"
              className="h-[20rem] w-full rounded-[2rem] object-cover md:h-[32.5rem]"
              fetchPriority="high"
            />
          </figure>

          <header className="py-10" {...sectionReveal}>
            <h1 id="bespoke-title" className="mb-3 text-h4 text-black">
              Designing "Slack" for Property Management
            </h1>

            <p className="mb-10 text-lg-rg-normal text-darkgray">
              Creating structured collaboration for luxury property management
            </p>

            <dl
              className="grid grid-cols-1 gap-6 border-y border-mediumgray py-6 md:grid-cols-[1.4fr_1.5fr_0.6fr_0.8fr] md:gap-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <div>
                <dt className="mb-3 text-h6 text-bespoke">Client</dt>
                <dd className="text-rg-sm-normal text-black">Bespoke Home Management</dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-bespoke">Role</dt>
                <dd className="text-rg-sm-normal text-black">UX Designer (Messaging System)</dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-bespoke">Team</dt>
                <dd className="text-rg-sm-normal text-black">5 designers</dd>
              </div>

              <div>
                <dt className="mb-3 text-h6 text-bespoke">Duration</dt>
                <dd className="text-rg-sm-normal text-black">Jan 2025 - March 2025</dd>
              </div>
            </dl>
          </header>

          <div className="flex flex-col gap-[10rem] py-10">
            <section
              aria-labelledby="prototype-heading"
              className="flex flex-col gap-[2.75rem]"
              {...visualReveal}
            >
              <h2 id="prototype-heading" className="text-h6 text-bespoke">
                Preview the prototype!
              </h2>
              <video
                controls
                preload="metadata"
                aria-label="Bespoke App prototype walkthrough"
                className="w-full rounded-[0.75rem]"
              >
                <source src="/bespokeDemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>

            <section
              aria-labelledby="overview-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="overview-heading" className="text-h6 uppercase text-bespoke">
                Overview
              </h2>
              <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
                <p>
                  Bespoke Home Management provides luxury property management services for
                  high-net-worth homeowners. As the company expanded, its internal teams struggled
                  to coordinate maintenance requests, schedules, and project communication across
                  multiple properties.
                </p>
                <p>
                  During this project, our team designed an internal operations platform to
                  streamline workflows for Bespoke staff. I owned the design of the messaging
                  system, creating a communication experience that kept conversations organized
                  around properties and ongoing work.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="challenge-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="challenge-heading" className="text-h6 uppercase text-bespoke">
                The Challenge
              </h2>
              <div className="flex flex-col gap-[1.5rem] text-rg-sm-normal text-black">
                <p>
                  Bespoke's communication was spread across multiple tools, making it difficult for
                  employees to track conversations, verify project history, and collaborate
                  efficiently.
                </p>
                <p>
                  Unlike a traditional messaging app, conversations couldn't exist in isolation.
                  Every message needed to preserve context, whether it was tied to a maintenance
                  request, renovation, vendor, or property.
                </p>
                <p>
                  The challenge was designing a messaging system that preserved context across
                  dozens of properties, tasks, and team members while remaining familiar and easy to
                  navigate.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="research-heading"
              className="flex flex-col gap-[2.75rem]"
              {...sectionReveal}
            >
              <h2 id="research-heading" className="text-h6 uppercase text-bespoke">
                Research Insights
              </h2>

              <div className="grid grid-cols-2 gap-2 text-rg-sm-normal text-black md:grid-cols-4">
                <p className="col-span-2 mb-6 md:col-span-4">
                  We grounded our design decisions through stakeholder interviews, competitive
                  analysis, and feature prioritization. Stakeholder interviews revealed two distinct
                  communication needs:
                </p>

                <ul className="col-span-2 grid grid-cols-2 gap-2 md:col-span-4 md:grid-cols-4">
                  <li className="col-span-2 flex min-h-[13.5rem] items-center rounded-[1.5rem] bg-[#E1F3F4] p-8 text-lg-rg-normal md:p-10">
                    Team discussions needed to stay connected to specific properties and maintenance
                    tasks.
                  </li>

                  <li className="col-span-2 flex min-h-[13.5rem] items-center rounded-[1.5rem] bg-[#F2EEDE] p-8 text-lg-rg-normal md:p-10">
                    Employees also needed private conversations for quick check-ins that weren't
                    tied to ongoing projects.
                  </li>
                </ul>

                <p className="order-5 col-span-2 md:order-none md:self-center">
                  We complemented these findings with competitive analysis of collaboration tools
                  like Slack and Messenger, identifying opportunities to combine familiar messaging
                  patterns with task-based workflows unique to property management.
                </p>

                <img
                  src={Slack}
                  alt="Slack logo"
                  className="order-4 col-span-1 h-auto w-full rounded-[1.5rem] object-cover md:order-none"
                  loading="lazy"
                  decoding="async"
                />

                <img
                  src={Messenger}
                  alt="Messenger logo"
                  className="order-4 col-span-1 h-auto w-full rounded-[1.5rem] object-cover md:order-none"
                  loading="lazy"
                  decoding="async"
                />

                <img
                  src={impactEffort}
                  alt="Impact vs. effort matrix"
                  className="order-6 col-span-2 h-auto w-full rounded-[1.5rem] object-cover md:order-none"
                  loading="lazy"
                  decoding="async"
                />

                <p className="order-7 col-span-2 md:order-none md:self-center">
                  To prioritize features, our team used an Impact vs. Effort Matrix, focusing on
                  high-value capabilities such as centralized communication, project-specific
                  messaging, and search before expanding into lower-priority functionality.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="exploration-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="exploration-heading" className="text-h6 uppercase text-bespoke">
                Design Exploration
              </h2>
              <p>
                Our research revealed that employees already organized their work around properties.
                Rather than designing a traditional messaging app, I restructured communication
                around this existing mental model. Each property became its own workspace, with
                automatically generated channels for maintenance tasks, service requests, and
                departments. Direct messages remained available for conversations that didn't belong
                to a specific project.
              </p>

              <figure>
                <img
                  src={Midfi}
                  alt="Bespoke mid-fidelity mockups"
                  className="w-full rounded-[0.75rem] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <p>
                This approach allowed communication to stay organized naturally without requiring
                users to manually create folders or manage conversations.
              </p>
            </section>

            <section
              aria-labelledby="validation-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="validation-heading" className="text-h6 uppercase text-bespoke">
                Iteration and Validation
              </h2>
              <p>
                With the help of my team, I conducted user interviews with 10 participants
                experienced in collaborative work tools. Using affinity mapping, I identified key
                insights that informed design improvements for the high-fidelity prototype.
              </p>

              <figure className="flex w-full flex-col gap-8 md:flex-row">
                <img
                  src={Testing1}
                  alt="Testing insights part 1"
                  className="w-full rounded-[0.75rem] md:w-1/2"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={Testing2}
                  alt="Testing insights part 2"
                  className="w-full rounded-[0.75rem] object-cover md:w-1/2"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="sr-only">
                  Usability testing insight boards that informed messaging system iterations.
                </figcaption>
              </figure>

              <ol className="flex flex-col gap-[0.75rem] text-rg-sm-normal text-black">
                <li className="flex flex-col gap-[0.75rem] border-t border-mediumgray py-6">
                  <h3 className="text-lg-rg-normal">
                    Users expected properties to be the starting point.
                  </h3>
                  <p>
                    Participants found it confusing to land directly in the most recent conversation
                    and wanted to choose a property before entering its messages.
                  </p>
                  <div className="flex mt-4 flex-col md:flex-row items-start gap-2 text-darkgray">
                    <div className="shrink-0 rounded-full border border-mediumgray px-4 py-1 text-sm uppercase leading-none shadow-sm">
                      Iteration
                    </div>
                    <p className="text-darkgray">
                      Replaced the back button with a hamburger menu that exposes all property
                      workspaces, reinforcing the idea that users are navigating between properties
                      rather than pages.
                    </p>
                  </div>
                </li>

                <li className="flex flex-col gap-[0.75rem] border-t border-mediumgray py-6">
                  <h3 className="text-lg-rg-normal">
                    Navigation between properties felt unintuitive.
                  </h3>
                  <p>
                    The original back button suggested returning to the previous screen rather than
                    switching between properties.
                  </p>
                  <div className="flex mt-4 flex-col md:flex-row items-start gap-2 text-darkgray">
                    <div className="shrink-0 rounded-full border border-mediumgray px-4 py-1 text-sm uppercase leading-none shadow-sm">
                      Iteration
                    </div>
                    <p className="text-darkgray">
                      Improved the visual hierarchy by exposing property groups more clearly,
                      increasing spacing between channels, and preserving the familiar Property to
                      Channels structure inspired by Slack.
                    </p>
                  </div>
                </li>

                <li className="flex flex-col gap-[0.75rem] border-t border-mediumgray py-6">
                  <h3 className="text-lg-rg-normal">
                    The hierarchy between properties and conversations was unclear.
                  </h3>
                  <p>
                    Some participants had difficulty distinguishing property workspaces from
                    individual message channels.
                  </p>
                  <div className="flex mt-4 flex-col md:flex-row items-start gap-2 text-darkgray">
                    <div className="shrink-0 rounded-full border border-mediumgray px-4 py-1 text-sm uppercase leading-none shadow-sm">
                      Iteration
                    </div>
                    <p className="text-darkgray">
                      Introduced a dedicated Properties page as the entry point, allowing users to
                      select a property before entering its messaging workspace.
                    </p>
                  </div>
                </li>

                <li className="flex flex-col gap-[0.75rem] border-t border-mediumgray py-6">
                  <h3 className="text-lg-rg-normal">
                    Messaging interactions didn't match user expectations.
                  </h3>
                  <p>
                    Participants expected their own messages to appear on the right, consistent with
                    common messaging applications.
                  </p>
                  <div className="flex mt-4 flex-col md:flex-row items-start gap-2 text-darkgray">
                    <div className="shrink-0 rounded-full border border-mediumgray px-4 py-1 text-sm uppercase leading-none shadow-sm">
                      Iteration
                    </div>
                    <p>
                      Updated message alignment and conversation layouts to match familiar messaging
                      patterns, reducing cognitive load.
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            <section
              aria-labelledby="outcome-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="outcome-heading" className="text-h6 uppercase text-bespoke">
                Outcome
              </h2>
              <div className="flex flex-col gap-[3.75rem]">
                <figure className="flex flex-col gap-[1rem]" {...visualReveal}>
                  <figcaption>Sending a direct message</figcaption>
                  <img
                    src={Hifi1}
                    alt="High-fidelity mockup showing a direct message being sent"
                    className="w-full rounded-[0.75rem] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <figure className="flex flex-col gap-[1rem]" {...visualReveal}>
                  <figcaption>Reading a message in a message server (Maluaka)</figcaption>
                  <img
                    src={Hifi2}
                    alt="High-fidelity mockup showing a message server conversation for Maluaka"
                    className="w-full rounded-[0.75rem] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <figure className="flex flex-col gap-[1rem]" {...visualReveal}>
                  <figcaption>Searching through a message server</figcaption>
                  <img
                    src={Hifi3}
                    alt="High-fidelity mockup showing message search inside a server"
                    className="w-full rounded-[0.75rem] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
            </section>

            <section
              aria-labelledby="reflection-heading"
              className="flex flex-col gap-[2.75rem] text-rg-sm-normal text-black"
              {...sectionReveal}
            >
              <h2 id="reflection-heading" className="text-h6 uppercase text-bespoke">
                Reflection
              </h2>
              <p>
                Designing this system required balancing familiar interaction patterns with
                domain-specific workflows. By adapting the mental models of tools like Slack to
                Bespoke's operational structure, we created a messaging experience that reduced
                cognitive load while fitting naturally into employees' daily work.
              </p>
            </section>
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
