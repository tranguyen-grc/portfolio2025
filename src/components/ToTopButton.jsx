import { ArrowUp } from "lucide-react";

export default function ToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        borderRadius: "2rem",
        border: "2px solid var(--text-mediumgray)",
        background: "var(--bg-gray30)",
        backdropFilter: "blur(2.75px)",
      }}
      className="fixed bottom-12 right-12 z-50 text-black p-3 rounded-full hover:scale-110 transition"
      aria-label="Scroll to top"
    >
      <ArrowUp size={31.5} />
    </button>
  );
}
