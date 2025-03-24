import { phil, philTablet, philMobile } from '../images';
import Button from '../reuse/Button';

export default function Phylosophy() {
  return (
    <section className="container">
      <div className="flex items-center justify-between bg-[#FFF3E4] lg:flex-col lg:p-10">
        <div className="h-full w-1/2 flex items-center flex-col ">
          <div className="flex flex-col items-start pl-10 lg:pl-0">
            <h2 className="text-[#181823] text-left mb-5">Philosophy & values</h2>
            <p className="parOne max-w-[576px] text-[#5B6876] flex justify-center mb-16">
              I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and
              experience with the universe. I try to grasp these things with my values: authenticity, creativity, &
              hospitality.
            </p>
          <Button title="More about me" />
          </div>
        </div>
        <img
          src={philMobile}
          srcSet={`${philMobile} 640w, ${philTablet} 768w, ${phil} 1024w`}
          alt="philosophy ball"
          className="object-cover w-1/2 h-full lg:hidden"
        />
      </div>
    </section>
  );
}
