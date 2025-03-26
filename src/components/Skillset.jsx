import { productDesign, motionDesign, visualDesign, photography } from '../images';
import SkillsetCard from '../reuse/SkillsetCard';

export default function Skillset() {
  return (
    <section className="container flex justify-between items-start lg:flex-col mb-20 lg:mb-2">
      <div className='mr-10 lg:mb-5'>
        <h2 className="text-white mb-5">Skilset</h2>
        <p className="max-w-[368px] text-[#8491A0] parOne">
          With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full
          fledged project. Whatever your needs are, I can pretty much take on any challenge.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:justify-between w-full gap-20 xl:gap-10 mt-3 sm:flex sm:flex-col">
        <SkillsetCard
          title="Product Design"
          text="Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
          img={productDesign}
        />
        <SkillsetCard
          title="Visial Design"
          text="My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package."
          img={visualDesign}
        />
        <SkillsetCard
          title="Motion Design"
          text="I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling."
          img={motionDesign}
        />
        <SkillsetCard
          title="Photography"
          text="Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way."
          img={photography}
        />
      </div>
    </section>
  );
}
