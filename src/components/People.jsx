import { people1, people2, people3 } from '../images';
import PeopleCard from '../reuse/PeopleCard';
import ButtonWhite from '../reuse/ButtonWhite';

export default function People() {
  return (
    <section className="container flex items-start justify-between mb-10 lg:mb-2 sm:flex-col">
      <div className='mr-10 sm:mr-0 sm:mb-5'>
        <h2 className="max-w-[588px] text-white mb-4 sm:text-[32px]">This is what people say about me</h2>
        <p className="parOne text-[#8491A0] max-w-[588px] mb-8">
          Here are a few lines from people who I have worked with over the past 8+ years in my design career.
        </p>
        <ButtonWhite title="See all testimonials" />
      </div>
      <div className="flex flex-col">
        <PeopleCard
          img={people1}
          text="‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’"
          role="Richard Owens"
          semiRole="CEO, Company 1"
        />

        <PeopleCard
          img={people2}
          text="‘’I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this caliber.’’"
          role="Emily Parker"
          semiRole="CEO, Company 2"
        />

        <PeopleCard
          img={people3}
          text="‘’All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astoundaing. I love the focus, passion and attention to detial in the design.’’"
          role="Vincent  Rudd"
          semiRole="CEO, Company 1"
        />
      </div>
    </section>
  );
}
