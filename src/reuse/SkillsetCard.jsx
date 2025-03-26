export default function SkillsetCard({ title, text, img }) {
  return (
    <div>
      <img className="mb-4 w-[32px] h-[32px]" src={img} alt="action" />
      <h3 className="text-white mb-2">{title}</h3>
      <p className="max-w-[368px] text-[#8491A0] parTwo">{text}</p>
    </div>
  );
}
