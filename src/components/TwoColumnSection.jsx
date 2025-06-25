export default function TwoColumnSection({ title, children }) {
  return (
    <div className="flex flex-col md:flex-row gap-[2rem] items-start">
      <div className="w-[20rem] md:w-[10rem] lg:w-[20rem]">
        <h2 className="text-h5 mt-1">{title}</h2>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
