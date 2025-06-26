import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryImageCard from "../components/GalleryImageCard";
import ToTopButton from "../components/ToTopButton";
import { motion } from "framer-motion";
import { useEffect } from "react";
import port2023 from "../assets/gallery/2023port.png";
import cards from "../assets/gallery/cards.jpg";
import lux from "../assets/gallery/lux.jpg";
import mage from "../assets/gallery/mage.jpg";
import explorer from "../assets/gallery/explorer.jpg";
import portrait from "../assets/gallery/portrait.jpg";
import poster from "../assets/gallery/poster.jpg";
import wedding from "../assets/gallery/wedding.jpg";
import ps from "../assets/gallery/ps.png";
import soot from "../assets/gallery/soot.png";
import planner from "../assets/gallery/planner.png";
import holiday from "../assets/gallery/holiday.png";

export default function Fun() {
  useEffect(() => {
    document.title = "Tra Nguyen | Fun";
  }, []);
  const galleryItems = [
    {
      src: holiday,
      title: "Design Internship @ Stanford ALC",
      tags: ["Graphic Design", "Animation", "Illustration"],
      href: "https://www.behance.net/gallery/215814585/Graphic-Design-at-Stanford-Asian-Liver-Center",
    },
    {
      src: port2023,
      title: "2023 Design Portfolio",
      tags: ["Graphic Design", "Illustration"],
      href: "https://www.behance.net/gallery/192705537/Adobe-Exploration",
    },
    {
      src: cards,
      title: "Playing Cards",
      tags: ["Graphic Design", "Illustration"],
      href: "https://www.behance.net/gallery/192706509/Playing-Cards",
    },
    {
      src: portrait,
      title: "Self Portrait",
      tags: ["Graphic Design", "Illustration"],
      href: "https://www.behance.net/gallery/186009515/Avatar-Illustration",
    },
    {
      src: ps,
      title: "Photoshop Texture Exploration",
      tags: ["Illustration"],
      href: "https://www.behance.net/gallery/186010261/Photoshop-Texture-Exploration",
    },
    {
      src: explorer,
      title: "Game Event Preview Page: Mage",
      tags: ["Graphic Design", "Illustration", "UI/UX"],
      href: "https://www.behance.net/gallery/193258553/Game-Event-Preview-Page-Mage",
    },
    {
      src: poster,
      title: "Poster Designs",
      tags: ["Graphic Design", "Illustration"],
      href: "https://www.behance.net/gallery/192704051/Poster-Designs",
    },
    {
      src: wedding,
      title: "Wedding Designs",
      tags: ["Graphic Design", "Illustration"],
      href: "https://www.behance.net/gallery/200165563/Wedding-Designs",
    },
    {
      src: lux,
      title: "Illustrations",
      tags: ["Illustration"],
      href: "https://www.behance.net/gallery/192704837/Illustrations",
    },
    {
      src: mage,
      title: "Game Event Preview Page: Mage",
      tags: ["Graphic Design", "Illustration", "UI/UX"],
      href: "https://www.behance.net/gallery/193258553/Game-Event-Preview-Page-Mage",
    },
    {
      src: soot,
      title: "Digital Sticker Designs",
      tags: ["Illustration"],
      href: "https://www.behance.net/gallery/192704429/Digital-Sticker-Designs",
    },
    {
      src: planner,
      title: "Spirited Away Planner",
      tags: ["Illustration", "Graphic Design"],
      href: "https://www.behance.net/gallery/192704347/Spirited-Away-Planner",
    },
  ];

  return (
    <main>
      <Navbar />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 px-2 sm:px-4 pt-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <GalleryImageCard {...item} />
          </motion.div>
        ))}
      </div>

      <ToTopButton />

      <motion.div
        className="px-6 sm:px-10 lg:px-[12.625rem]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
