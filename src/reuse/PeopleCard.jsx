export default function PeopleCard({ img, text, role, semiRole }) {
  return (
    <div className="max-w-[636px] bg-[#000000] mb-20 sm:mb-10 last:mb-0 ">
      <img src={img} alt="type of role" className="w-full h-full" />
      <div className="p-10 border-2 border-[#5B6876]">
        <p className="stoverline text-white max-w-[508px] mb-4">{text}</p>
        <p className="parOne text-[#5B6876]">{role}</p>
        <p className="parTwo text-[#5B6876]">{semiRole}</p>
      </div>
    </div>
  );
}
