import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-8 sm:px-12 lg:px-16">
      <nav
        className={`
          flex items-center justify-between flex-shrink-0
          w-full max-w-[51.6875rem]
          px-8 py-[0.5rem] sm:py-[1rem]
          mx-auto mt-6 backdrop-blur-md
        `}
        style={{
          borderRadius: "2rem",
          border: "2px solid var(--text-mediumgray)",
          background: "var(--bg-gray30)",
          backdropFilter: "blur(2.75px)",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="heading-h5-mb text-black transition-transform hover:scale-105"
        >
          TN
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 text-base-medium text-black whitespace-nowrap">
          {[
            { to: "/", label: "Work" },
            { to: "/archive", label: "Archive" },
            { to: "/about", label: "About" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `transition-all duration-200 ease-in-out ${
                  isActive
                    ? "text-darkgray"
                    : "hover:text-darkgray hover:scale-105"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
