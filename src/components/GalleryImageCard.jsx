import { ArrowUpRight } from "lucide-react";

export default function GalleryImageCard({ src, title, tags = [], href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-3 break-inside-avoid block w-full cursor-pointer group"
    >
      <div className="relative w-full rounded-[0.75rem] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-auto object-contain rounded-[0.75rem] transition-transform duration-300 group-hover:scale-[1.01]"
        />

        {/* Top-right arrow */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight
            className="text-white bg-black/50 rounded-full p-1"
            size={30}
          />
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm">
          <p className="font-medium">{title}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-white/20 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
