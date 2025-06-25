export default function ProjectCard({ title, description, image }) {
  return (
    <div className="mb-12 group">
      <h2 className="text-h5 text-black mb-2">{title}</h2>
      <p className="text-rg-sm-normal text-black mb-4">{description}</p>
      <div className="overflow-hidden rounded-[2rem] cursor-pointer">
        <img
          src={image}
          alt={title}
          className="h-[20rem] md:h-[32.5rem] w-full object-cover rounded-[2rem] transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}
