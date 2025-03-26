export default function ProjectCard({ title, text, img }) {
  return (
    <div className= "max-w-[636px] mb-5 mx-2 lg:mx-0">
      <img className="w-full h-1/2 object-cover" src={img} alt="restaurent" />
      <div className="bg-[#181823] p-10">
        <h3 className="text-white">{title}</h3>
        <p className="text-[#8491A0] parOne">{text}</p>
      </div>
    </div>
  );
}
