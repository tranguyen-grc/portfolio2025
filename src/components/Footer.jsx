import linkedin from "../assets/linkedin.svg";
import behance from "../assets/behance.svg";
import email from "../assets/email.svg";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-6 py-[5rem] flex flex-col gap-7 text-black">
      {/* Headline */}
      <div>
        <h2 className="text-h5 text-black mb-2">Let's connect!</h2>
        <p className="text-rg-sm-normal text-black">
          Get in touch for opportunities or just to say hi!
        </p>
      </div>

      {/* Icons */}
      <div className="flex gap-10 items-center">
        <a
          href="https://www.linkedin.com/in/nguyen-tra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="h-6 w-7 cursor-pointer"
          />
        </a>
        <a
          href="https://www.behance.net/tranguyen58"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={behance} alt="Behance" className="h-7 w-7 cursor-pointer" />
        </a>
        <a href="mailto:chiptra292@gmail.com">
          <img src={email} alt="Email" className="h-7 w-7 cursor-pointer" />
        </a>
      </div>

      {/* Footer note */}
      <div className="text-rg-sm-normal text-black">
        <p>Designed and developed by Tra Nguyen.</p>
        <p className="mt-1 text-tiny-normal">© Tra Nguyen 2025</p>
      </div>
    </footer>
  );
}
