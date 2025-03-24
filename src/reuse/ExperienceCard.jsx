export default function ExperienceCard({ title, text, role, commonRole, color = 'white', other }) {
  return (
    <div className="flex flex-col items-start h-[300px] md:h-[300px]">
      <h1 className="label text-[#8491A0]">{title}</h1>
      <h3 className="text-white mb-5 xl:max-w-[150px] md:max-w-[320px] "><span style={{color: color}}>{commonRole}</span> {role}</h3>
      <p className="parTwo text-[#8491A0] max-w-[368px]" >{text}</p>
    </div>
  );
}
