import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ImageLightbox({ src, alt, caption, className }) {
  const [open, setOpen] = useState(false);

  // ESC to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in transition hover:scale-[1.01]`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-gray30 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          {/* Container */}
          <div
            className="relative max-w-full max-h-[90vh] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 bg-black/50 backdrop-blur p-1 rounded-full"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[80vh] object-contain rounded-[0.75rem] shadow-xl"
            />

            {caption && (
              <p className="mt-4 text-white text-sm text-center max-w-[80vw]">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
