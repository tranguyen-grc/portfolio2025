import linkedin from "../assets/linkedin.svg";
import behance from "../assets/behance.svg";
import email from "../assets/email.svg";
import PortraitWithBlobs from "./PortraitWithBlobs";

export default function Hero() {
  return (
    <section
      className="
    flex flex-col items-start gap-[10rem]
    w-full max-w-[90rem]
    min-h-screen md:h-auto
    px-6 sm:px-10 lg:px-[12.625rem]
    pt-[6rem] sm:pt-[8rem] md:pt-[8rem] lg:pt-[8rem] xl:pt-[8rem]
    pb-[6rem] sm:pb-[8rem] lg:pb-[10rem]
    mx-auto
  "
    >
      <div
        className="
    flex justify-center w-full
    min-h-[80vh] sm:min-h-fit
    items-center sm:items-start
  "
      >
        <div
          className="
      flex flex-col md:flex-row
      items-center md:items-center
      gap-[5.1875rem]
      w-fit
    "
        >
          {/* Left: Image block */}
          <div className="hidden md:block flex-shrink-0 w-[24rem] md:w-[26rem] lg:w-[29rem]">
            <PortraitWithBlobs />
          </div>

          {/* Right: Text block */}
          <div className="flex flex-col items-start gap-6 w-full max-w-[25.1875rem] min-w-0 text-left">
            <h1 className="heading-h4 text-black">Tra Nguyen</h1>
            <p className="text-lg-normal text-darkgray">
              A multidisciplinary designer studying Computer Science + UI/UX
              Design @ CalPoly SLO.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/nguyen-tra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a
                href="https://www.behance.net/tranguyen58"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={behance} alt="Behance" className="w-5 h-5" />
              </a>
              <a href="mailto:chiptra292@gmail.com">
                <img src={email} alt="Email" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
