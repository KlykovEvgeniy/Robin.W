import { plane } from "../images";
import Button from "../reuse/Button";

export default function Instagram() {
    
  return (
    <section className="container">
      <div className="flex items-center justify-between bg-[#FBE4FF] mb-20 lg:mb-5 lg:flex-col lg:p-10">
        <div className="h-full w-1/2 flex items-center flex-col ">
          <div className="flex flex-col items-start pl-10 lg:pl-0">
            <h2 className="text-[#181823] text-left mb-5">Instagram</h2>
            <p className="parOne max-w-[576px] text-[#5B6876] flex justify-center mb-16">
              If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m
              an avid traveller and I capture the best moments that I would love to cherish with the world
            </p>
            <Button title="Follow me on IG" />
          </div>
        </div>
        <img
          src={plane}
          alt="philosophy ball"
          className="object-cover w-1/2 h-full lg:hidden"
        />
      </div>
    </section>
  );
}
